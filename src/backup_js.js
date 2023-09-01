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
