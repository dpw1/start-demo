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

  async function _getUpsellProducts() {
    return new Promise(async (resolve, reject) => {
      const data = JSON.parse(
        window.Ecwid.getAppPublicConfig("easy-upsell-dev"),
      );

      console.log("my data:", data);
      const id = await _getProductID();

      const products = data.upsellProducts.filter(
        (e) => parseInt(e.id) === parseInt(id),
      )[0];

      resolve(products);
    });
  }

  async function injectUpsell(upsell) {
    try {
      await _waitForElement(`.details-product-purchase`);

      const $atc = document.querySelector(`.details-product-purchase`);

      if (!$atc) {
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

      $atc.insertAdjacentHTML("beforeend", html);
    } catch (err) {
      console.error("ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.error(err);
    }
  }

  async function hello() {
    const upsell = await _getUpsellProducts();

    injectUpsell(upsell);
    console.log("upsell: ", upsell);
  }

  return {
    init: function () {
      hello();
    },
  };
})();

window.ezfyEasyUpsellApp.init();
