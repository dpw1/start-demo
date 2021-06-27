/*
## Intro:
Basic structure for a Shopify Javascript customization.

## Usage:
*/
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

  function credits() {
    var e = [
      "background: linear-gradient(-47deg,#8731e8,#4528dc)",
      "border: 1px solid #3E0E02",
      "color: white",
      "display: block",
      "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
      "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
      "line-height: 40px",
      "text-align: center",
      "font-weight: bold",
      "padding: 0px 5px",
    ].join(";");

    function r(e) {
      return (e + "").replace(/&#\d+;/gm, function (e) {
        return String.fromCharCode(e.match(/\d+/gm)[0]);
      });
    }
    var n = r(
      `&#67;&#117;&#115;&#116;&#111;&#109;&#32;&#99;&#111;&#100;&#101;&#100;&#32;&#98;&#121;&#32;&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#101;&#122;&#102;&#121;&#99;&#111;&#100;&#101;&#46;&#99;&#111;&#109;`,
    );
    console.log(`%c ${n}`, e);
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

  function _waitForElement(selector, delay = 50, tries = 250) {
    const element = document.querySelector(selector);

    if (!window[`__${selector}`]) {
      window[`__${selector}`] = 0;
    }

    function _search() {
      return new Promise((resolve) => {
        window[`__${selector}`]++;
        setTimeout(resolve, delay);
      });
    }

    if (element === null) {
      if (window[`__${selector}`] >= tries) {
        window[`__${selector}`] = 0;
        return Promise.reject(null);
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

  function _getProductID() {
    if (/-p\d{6,}/.test(window.location.pathname)) {
      var _id = window.location.pathname.split("-");
      var id = parseInt(_id[_id.length - 1].replace("p", ""));
      return id;
    }

    return null;
  }

  function getUpsellProducts() {
    const data = JSON.parse(window.Ecwid.getAppPublicConfig("easy-upsell-dev"));

    const id = _getProductID();

    return data.upsellProducts.filter(
      (e) => parseInt(e.id) === parseInt(id),
    )[0];
  }

  function hello() {
    const upsell = getUpsellProducts();

    console.log("upsell: ", upsell);
  }

  return {
    init: function () {
      hello();

      window.addEventListener("resize", function () {});

      window.addEventListener("scroll", function () {});
    },
  };
})();

window.ezfyEasyUpsellApp.init();
