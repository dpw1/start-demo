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
    return /cart\/?$/.test(window.location.href.split("?")[0]);
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

  async function getUpsellProducts() {
    return new Promise(async (resolve, reject) => {
      const data = JSON.parse(
        window.Ecwid.getAppPublicConfig("easy-upsell-dev"),
      );

      console.log("my data:", data);

      await awaitEcwid();

      Ecwid.Cart.get(async (cart) => {
        var ids = cart.items.map((e) => e.product.id);

        let upsells = [];

        for (var id of ids) {
          const upsell = data.upsellProducts.filter(
            (e) => parseInt(e.id) === parseInt(id),
          )[0];

          upsells.push(upsell);
        }

        /* todo - currently returning only id, make sure it returns everything */
        /* Remove repeated products */
        const filtered = upsells
          .map((e) => e.bundle.map((e) => e))
          .flat()
          .filter((e) => !ids.includes(e.id));

        resolve([...new Set([...filtered])]);
      });
    });
  }

  function injectCartUpsellOnURLChange() {
    var oldURL = window.location.href;
    if (window.location.href !== oldURL) {
      injectCartUpsell();
      oldURL = window.location.href;
    }
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

  async function awaitEcwid() {
    return new Promise(async (resolve, reject) => {
      if (window.hasOwnProperty("ecwidIsLoaded")) {
        resolve();
      }

      while (!window.hasOwnProperty("Ecwid")) {
        console.log("waiting for Ecwid          ");
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      while (!Ecwid.hasOwnProperty("Cart")) {
        console.log("waiting for Ecwid Cart");
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      window.ecwidIsLoaded = true;

      resolve();
    });
  }

  async function injectCartUpsell(_products) {
    const $body = document.querySelector(`.ec-cart__sidebar-inner`)
      ? document.querySelector(`.ec-cart__sidebar-inner`)
      : await _waitForElement(`.ec-cart__sidebar-inner`);

    if (!$body) {
      return;
    }

    const $ezfycart = document.querySelector(`.EzfyCart`);

    if ($ezfycart) {
      return;
    }

    let products = "";

    for (var each of _products) {
      const html = `
      <div data-id="${each.id}" class="EzfyCart-item EzfyCart-item--${each.id}">
			<img class="EzfyCart-image" src="${each.thumbnailUrl}" alt="${each.name}">
			<div class="EzfyCart-item-title">${each.name}</div>
			<div class="EzfyCart-prices">
        <div class="EzfyCart-price">${each.defaultDisplayedPriceFormatted}</div>
        <div class="EzfyCart-compare-price">${
          each.hasOwnProperty("compareToPriceDiscountFormatted")
            ? each.compareToPriceFormatted
            : ""
        } </div>
      </div>

      <!--
			<div class="EzfyCart-quantity">
        <button class="EzfyCart-minus"><span>-</span></button>
        <input type="number" class="EzfyCart-amount">
        <button class="EzfyCart-minus"><span>+</span></button>
      </div>
      -->

      <button class="EzfyCart-atc">Add to Cart</button>
      </div>
      `;

      products += html;
    }

    const html = `
    <div class="EzfyCart">
    <p class="EzfyCart-title">Frequently Bought Together</p>
	  <div class="EzfyCart-items">
      ${products}
    </div>
    </div>
    `;

    $body.insertAdjacentHTML(`beforeend`, html);
  }

  function injectReacPlaceholder() {
    const $body = document.querySelector(`body`);

    if (!$body) {
      return;
    }

    const html = `<div id="EzfyCartApp"></div>`;

    $body.insertAdjacentHTML(`afterbegin`, html);
  }

  function getProductsInCart() {
    return new Promise((resolve, reject) => {
      let products = [];

      window.Ecwid.Cart.get(function (cart) {
        cart.items
          .map((e) => e.product)
          .map((_product) => products.push(_product.id));
      });

      resolve(products);
    });
  }

  async function addToCart(id, quantity) {
    return new Promise(async (resolve, reject) => {
      Ecwid.Cart.addProduct({
        id,
        quantity,
        callback: function (success, product, cart) {
          resolve();
        },
      });
    });
  }

  async function handleAddToCart() {
    const $atc = await _waitForElement(`.EzfyCart-atc`);

    if (!$atc) {
      return;
    }

    const $atcs = document.querySelectorAll(
      `.EzfyCart-atc:not([data-has-listener])`,
    );

    if (!$atcs) {
      return;
    }

    for (var each of $atcs) {
      each.setAttribute("data-has-listener", "true");
      each.addEventListener(`click`, async function (e) {
        const $this = e.target;
        const text = $this.textContent;
        const $parent = $this.closest(`.EzfyCart-item`);
        const id = parseInt($parent.getAttribute("data-id"));

        console.log("listening click id", id);

        if (window[`adding-${id}`]) {
          return;
        }

        await addToCart(id, 1);

        $this.textContent = `Added`;

        window[`adding-${id}`] = true;

        setTimeout(() => {
          window[`adding-${id}`] = false;
        });
      });
    }
  }

  async function start() {
    const products = await getUpsellProducts();
    injectCartUpsell(products);
    handleAddToCart();
  }

  async function restart() {
    var $atc = document.querySelector(`.EzfyCart-atc`);

    if ($atc) {
      return;
    }

    const $cart = await _waitForElement(
      `.ec-cart__shopping.ec-cart-shopping`,
      100,
      40,
    );

    if (!$cart) {
      return;
    }

    start();
  }

  return {
    init: function () {
      injectReacPlaceholder();
      start();

      window.Ecwid.OnCartChanged.add(async function (cart) {
        restart();
      });

      window.Ecwid.OnPageSwitch.add(function (page) {
        console.log("page", page);

        if (page && page.type === "CART") {
          start();
        }
      });

      async function checkURLchange() {
        if (window.location.href !== oldURL) {
          restart();

          console.log("current page: ", window.location.href, oldURL);
          oldURL = window.location.href;
        }
      }

      var oldURL = window.location.href;
      setInterval(checkURLchange, 1000);
    },
  };
})();

window.ezfyEasyUpsellApp.init();
