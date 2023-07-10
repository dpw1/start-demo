window.ezfyCartBundle = window.ezfyCartBundle || {};

window.ezfyCartBundle = (function () {
  const IS_ACTIVE = true;

  function _loadStyle(src) {
    return new Promise(function (resolve, reject) {
      let link = document.createElement("link");
      link.href = src;
      link.rel = "stylesheet";

      link.onload = () => resolve(link);
      link.onerror = () => reject(new Error(`Style load error for ${src}`));

      document.head.append(link);
    });
  }

  async function waitForEcwidToLoad() {
    return new Promise(async (resolve, reject) => {
      while (!window.hasOwnProperty("Ecwid")) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      while (!window.Ecwid.hasOwnProperty("Cart")) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      while (!window.Ecwid.Cart.hasOwnProperty("addProduct")) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      resolve(true);
    });
  }

  function _moveDOMElement(parent, child) {
    document.querySelector(parent).appendChild(document.querySelector(child));
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function _waitForElement(selector, delay = 50, tries = 100) {
    const element = document.querySelector(selector);

    if (!window[`__${selector}`]) {
      window[`__${selector}`] = 0;
      window[`__${selector}__delay`] = delay;
      window[`__${selector}__tries`] = tries;
    }

    function _search() {
      return new Promise((resolve) => {
        window[`__${selector}`]++;
        setTimeout(resolve, window[`__${selector}__delay`]);
      });
    }

    if (element === null) {
      if (window[`__${selector}`] >= window[`__${selector}__tries`]) {
        window[`__${selector}`] = 0;
        return Promise.resolve(null);
      }

      return _search().then(() => _waitForElement(selector));
    } else {
      return Promise.resolve(element);
    }
  }

  function _addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  function getProductsFromQueryString() {
    const _params = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(_params.entries());

    if (!params.hasOwnProperty("bundle_products")) {
      return null;
    }

    const _products = params.bundle_products.split(",");

    if (_products.length <= 0) {
      return null;
    }

    const products = _products.map((e) => parseInt(e));

    return products;
  }

  function getDiscountCodeFromQueryString() {
    const _params = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(_params.entries());

    if (!params.hasOwnProperty("bundle_discount")) {
      return null;
    }

    const _discount = params.bundle_discount.trim();

    if (_discount.length <= 0) {
      return null;
    }

    const discount = _discount;

    return discount;
  }

  function addProductsToCart() {
    const products = getProductsFromQueryString();
    const cart = getProductsInCart();

    if (!products) {
      return;
    }

    for (const id of products) {
      if (cart.filter((_e) => _e === id).length >= 1) {
        continue;
      }

      window.Ecwid.Cart.addProduct({
        id,
        quantity: 1,
      });
    }
  }

  function getProductsInCart() {
    let products = [];

    window.Ecwid.Cart.get(function (cart) {
      cart.items
        .map((e) => e.product)
        .map((_product) => products.push(_product.id));
    });

    return products;
  }

  async function cancelActiveCoupon() {
    return new Promise(async (resolve, reject) => {
      const $coupon = document.querySelector(
        `#ec-cart-sidebar-discount-coupon-input`,
      );

      if (!$coupon) {
        resolve(true);
        return;
      }

      const coupon = $coupon.value;

      if (!coupon || coupon === "") {
        resolve(true);
        return;
      }

      const queryCodeCoupon = getDiscountCodeFromQueryString();

      if (coupon === queryCodeCoupon) {
        resolve(true);
        return;
      }

      const $forms = document.querySelectorAll(`[class*='ec-cart__discount']`);

      for (var [i, each] of $forms.entries()) {
        const $input = each.querySelector(`input.form-control__text`);
        const $button = each.querySelector(
          `.ec-cart-coupon__button--cancel > button`,
        );

        $button.click();

        if (!$input) {
          return;
        }

        $input.value = "";

        await sleep(25);

        var event = new Event("input", {
          bubbles: true,
          cancelable: true,
        });

        if (i >= $forms.length - 1) {
          resolve(true);
        }
      }
    });
  }

  async function addDiscountCoupon() {
    const discount = getDiscountCodeFromQueryString();

    if (!discount) {
      return;
    }

    const $discount = await _waitForElement(
      `[class*='cart-coupon'] > a`,
      100,
      25,
    );

    if (!$discount) {
      return;
    }

    const $forms = document.querySelectorAll(`[class*='ec-cart__discount']`);

    for (var each of $forms) {
      const $redeem = each.querySelector(`[class*='cart-coupon'] > a`);

      if (!$redeem) {
        return;
      }

      $redeem.click();

      await sleep(50);

      const $input = each.querySelector(`input.form-control__text`);

      if (!$input) {
        return;
      }

      await sleep(25);

      var event = new Event("input", {
        bubbles: true,
        cancelable: true,
      });

      $input.value = discount;
      $input.dispatchEvent(event);

      await sleep(50);

      const $button = each.querySelector(`.ec-cart-coupon__button--apply`);

      if (!$button) {
        return;
      }

      $button.click();
    }
  }

  async function replaceCartMessage() {
    const $message = await _waitForElement(`.ec-cart__message`);

    if (!$message) {
      return;
    }

    $message.textContent = "Loading...";
  }

  async function start() {
    await waitForEcwidToLoad();
    replaceCartMessage();

    window.Ecwid.OnPageLoaded.add(async function (page) {
      addProductsToCart();
      await cancelActiveCoupon();
      await sleep(50);
      addDiscountCoupon();
    });
  }

  return {
    init: async function () {
      if (!IS_ACTIVE) {
        return;
      }

      start();
    },
  };
})();

// window.ezfyCartBundle.init();

/* 
Upsell temporarily disabled
======================================= */
window.ezfyEasyUpsellApp = window.ezfyEasyUpsellApp || {};

window.ezfyEasyUpsellApp = (function () {
  function _loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s;
      s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function _extractTextBetween(text, start, end) {
    if (!start || !end) {
      throw new Error(`Please add a "start" and "end" parameter`);
    }

    return text.split(start)[1].split(end)[0];
  }

  function _loadStyle(src) {
    return new Promise(function (resolve, reject) {
      let link = document.createElement("link");
      link.href = src;
      link.rel = "stylesheet";

      link.onload = () => resolve(link);
      link.onerror = () => reject(new Error(`Style load error for ${src}`));

      document.head.append(link);
    });
  }

  function _moveDOMElement(parent, child) {
    document.querySelector(parent).appendChild(document.querySelector(child));
  }

  function _isProductPage() {
    return /product/.test(window.location.href);
  }

  function _isCartPage() {
    return /cart/.test(window.location.href);
  }

  function _waitForElement(selector, delay = 50, tries = 100) {
    const element = document.querySelector(selector);

    if (!window[`__${selector}`]) {
      window[`__${selector}`] = 0;
      window[`__${selector}__delay`] = delay;
      window[`__${selector}__tries`] = tries;
    }

    function _search() {
      return new Promise((resolve) => {
        window[`__${selector}`]++;
        setTimeout(resolve, window[`__${selector}__delay`]);
      });
    }

    if (element === null) {
      if (window[`__${selector}`] >= window[`__${selector}__tries`]) {
        window[`__${selector}`] = 0;
        return Promise.resolve(null);
      }

      return _search().then(() => _waitForElement(selector));
    } else {
      return Promise.resolve(element);
    }
  }

  function _addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  async function _getProductID() {
    return new Promise(async (resolve, reject) => {
      /* if ID is present in the URL */
      if (/-p\d{6,}/.test(window.location.pathname)) {
        var _id = window.location.pathname.split("-");
        var id = parseInt(_id[_id.length - 1].replace("p", ""));
        resolve(id);
      } else {
        /* Try to extract ID from class name */
        var $el = await _waitForElement(
          `[class*="ecwid-productBrowser-ProductPage-"]`,
        );

        if (!$el) {
          resolve(null);
        }

        var id = [...$el.classList]
          .join(" ")
          .split("-")
          .filter((e) => /\d{5,}/.test(e))[0];

        if (!id) {
          resolve(null);
        }

        resolve(parseInt(id));
      }
    });
  }

  async function getIDOfProductsInCart() {
    return new Promise(async (resolve, reject) => {
      Ecwid.Cart.get(function (cart) {
        if (!cart.items || cart.items.length <= 0) {
          resolve(null);
        }

        var ids = cart.items.map((e) => e.product.id);

        resolve(ids);
      });
    });
  }

  async function _getUpsellProducts() {
    return new Promise(async (resolve, reject) => {
      const data = JSON.parse(
        window.Ecwid.getAppPublicConfig("easy-upsell-dev"),
      );

      console.log("my data:", data);

      /* TODO 
      get ID of products in the cart

      */
      const id = await _getProductID();

      const products = data.upsellProducts.filter(
        (e) => parseInt(e.id) === parseInt(id),
      )[0];

      resolve(products);
    });
  }

  async function injectUpsell(upsell) {
    try {
      const $cart = await _waitForElement(
        `.ec-cart__shopping.ec-cart-shopping`,
        100,
        40,
      );

      if (!$cart) {
        return;
      }

      let imagesHTML = "";
      let productsHTML = "";

      for (const [i, e] of upsell.bundle.entries()) {
        imagesHTML += `
          <a href="debut-theme-zoom-pro" target="_blank" class="fbt-figure ">
          <img src="${e.hdThumbnailUrl}" title="${e.name}" alt="${e.name}">
          </a>
          <span class="fbt-icon">+</span>
          `;

        productsHTML += `

          <div class="fbt-option">
          <label class="fbt-label" for="fbt-checkbox${i}">
            <div class="fbt-name">
              <input class="fbt-checkbox" type="checkbox" id="fbt-checkbox${i}" checked="">
              <span class="fbt-this-item">This item: </span>
              <span>${e.name}</span>
              <div class="fbt-price">${e.defaultDisplayedPriceFormatted}</div>
            </div>
          </label>
        </div>

          `;
      }

      const html = `

        <div class="fbt" id="ezfyFbt">
      <div class="fbt-container">
        <div class="fbt-products">
          <h4 class="fbt-subtitle">Save by buying these products together:</h4>
          <div class="fbt-figures">

          ${imagesHTML}
          </div>
          <p class="fbt-total"><span>Total bundle price: </span><span class="fbt-total-small">$36.00</span> <span class="fbt-total-big">$45.00</span>
          <div class="fbt-discount"><span class="discount"><span>20% OFF </span><span class="fbt-discount--small">(YOU SAVE $9.00)</span></span></div>
          </p><button class="fbt-button">Add Bundle</button>
        </div>
        <div class="fbt-options">
          ${productsHTML}
        </div>
      </div>
      </div>
        `;

      $cart.insertAdjacentHTML("afterend", html);
    } catch (err) {
      console.error("ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.error(err);
    }
  }

  async function injectCartUpsell() {
    const $body = document.querySelector(`body`);

    if (!$body) {
      return;
    }

    const $ezfycart = document.querySelector(`.EzfyCart`);

    if ($ezfycart) {
      return;
    }

    const html = `
    <div class="EzfyCart">
	<div class="EzfyCart-title">Your cart</div>
	<div class="EzfyCart-unlock">
		Add X to unlock 5% OFF
	</div>
	<div class="EzfyCart-items">
		
		<div class="EzfyCart-item">
			<img class="EzfyCart-image" src="https://cdn.shopify.com/s/files/1/1624/1285/products/watermelon-toddler-converse-9808266_200x.jpg?v=1571439890" alt="">
			<div class="EzfyCart-item-title">Bump Shoes Watermelon Toddler Converse</div>
			<div class="EzfyCart-price">$99.00</div>
			<div class="EzfyCart-compare-price">$120.00</div>
			<div class="EzfyCart-quantity">
				<button class="EzfyCart-minus">-</button>
				<input type="number" class="EzfyCart-amount">
					<button class="EzfyCart-minus">+</button>
			</div>
		</div>
	</div>
	
	<div class="EzfyCart-total">$99.00</div>
	
	<button class="EzfyCart-checkout">Checkout</button>
	
	<div class="EzfyCart-upsel">
		
	</div>
</div>
    `;

    $body.insertAdjacentHTML(`afterbegin`, html);
  }

  async function hello() {
    console.log("changing page xx");
    const upsell = await _getUpsellProducts();

    injectCartUpsell();

    injectUpsell(upsell);
    console.log("upsell: ", upsell);
  }

  async function listenForATCClick() {
    const $atc = await _waitForElement(
      `[class*='add-buttons'] > *:nth-child(2) button.form-control__button`,
    );

    if (!$atc) {
      return;
    }

    $atc.addEventListener("click", function (e) {
      e.preventDefault();

      // injectCartUpsell();
    });
  }

  function start() {
    listenForATCClick();
  }

  function injectReacPlaceholder() {
    const $body = document.querySelector(`body`);

    if (!$body) {
      return;
    }

    const html = `<div id="EzfyCartApp"></div>`;

    $body.insertAdjacentHTML(`afterbegin`, html);
  }

  return {
    init: function () {
      injectReacPlaceholder();
      // hello();

      window.Ecwid.OnCartChanged.add(async function (cart) {
        console.log("the cart has changed", cart);

        start();
      });

      window.Ecwid.OnPageSwitch.add(function (page) {
        console.log("page", page);
        start();
      });
    },
  };
})();

window.ezfyEasyUpsellApp.init();
