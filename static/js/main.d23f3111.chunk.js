(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(12),r=n.n(a),o=(n(44),n(3)),i=(n(45),n(9)),l=n(2),u=n.n(l),d=n(4),p=n(20),b=n.n(p),f=n(14),h=n.n(f),j=n(16);window.ezfyCategories=null;var g={isEnabled:!0,appTitle:"Complete your purchase",enableAddToCart:!0,enableSecondImageOnHover:!0};function m(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(d.a)(u.a.mark((function e(n,c){var s,a,r,o,l,d,p,b,f,h,g,m,x,v,O,P,k;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("within sanitze: ",t),s=t.items.filter((function(e){return e.relatedProducts.productIds.length>=1||e.relatedProducts.relatedCategory.enabled})),a=function(e){return e.hasOwnProperty("options")?e.options.length:e.hasOwnProperty("totalOptions")?e.totalOptions:0},r=[],o=Object(j.a)(s),e.prev=5,o.s();case 7:if((l=o.n()).done){e.next=24;break}if(d=l.value,p=d.id,b=[],d.enabled&&d.inStock){e.next=13;break}return e.abrupt("continue",22);case 13:f=Object(j.a)(d.relatedProducts.productIds);try{for(f.s();!(h=f.n()).done;)g=h.value,m=t.items.filter((function(e){return e.id===g}))[0],b.push({id:m.id,name:m.name,thumbnailUrl:m.thumbnailUrl,defaultDisplayedPriceFormatted:m.defaultDisplayedPriceFormatted,compareToPriceDiscountFormatted:m.compareToPriceDiscountFormatted,compareToPriceFormatted:m.compareToPriceFormatted,url:m.url,totalOptions:a(m)})}catch(c){f.e(c)}finally{f.f()}if(!d.relatedProducts.relatedCategory.enabled){e.next=21;break}return e.next=18,w(d.relatedProducts.relatedCategory.categoryId,d.relatedProducts.relatedCategory.productCount);case 18:x=e.sent,v=Object(j.a)(x);try{for(v.s();!(O=v.n()).done;)P=O.value,b.push({id:P.id,name:P.name,thumbnailUrl:P.thumbnailUrl,defaultDisplayedPriceFormatted:P.defaultDisplayedPriceFormatted,compareToPriceDiscountFormatted:P.compareToPriceDiscountFormatted,compareToPriceFormatted:P.compareToPriceFormatted,url:P.url,totalOptions:a(P)})}catch(c){v.e(c)}finally{v.f()}case 21:r.push({id:p,bundle:Object(i.a)(new Set(b.map((function(e){return e.id})))).map((function(e){return b.find((function(t){return t.id===e}))}))});case 22:e.next=7;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(5),o.e(e.t0);case 29:return e.prev=29,o.f(),e.finish(29);case 32:k=Object(i.a)(new Set(r.map((function(e){return e.id})))).map((function(e){return r.find((function(t){return t.id===e}))})),window.upsellProducts=k,console.log("Products with upsells: ",k),n(k);case 36:case"end":return e.stop()}}),e,null,[[5,26,29,32]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return new Promise(function(){var n=Object(d.a)(u.a.mark((function n(c,s){var a,r,o,i,l,d,p,b;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if([],!window.ezfyCategories){n.next=5;break}window.ezfyCategories,n.next=12;break;case 5:return a=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/categories?token=".concat("secret_Fb4jvvTZjNg7XGefPEvbjG9JNmErJgif","&offset=0"):"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/categories?token=").concat(window.EcwidApp.getPayload().access_token,"&offset=0"),n.next=8,h.a.get(a);case 8:r=n.sent,o=r.data,window.ezfyCategories=o.items,o.items;case 12:if(i=[],!window.store__products){n.next=17;break}i=window.store__products,n.next=24;break;case 17:return l=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=".concat("secret_Fb4jvvTZjNg7XGefPEvbjG9JNmErJgif"):"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),n.next=20,h.a.get(l);case 20:d=n.sent,p=d.data,i=v(p.items),window.store__products=i;case 24:b=[],i&&i.length>=1&&(0!==e?i&&i.length>=1&&(b=i.filter((function(t){return t.categoryIds.includes(e)}))):b=i.sort((function(){return Math.random()-.5})).slice(0,t)),c(b);case 27:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}function v(e){return e.filter((function(e){return e.enabled&&e.inStock?e:null})).filter((function(e){return null!==e}))}var O=n(21),P=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=".concat("secret_Fb4jvvTZjNg7XGefPEvbjG9JNmErJgif"):"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),k=b()(Object(O.subscribeWithSelector)((function(e,t){return{settings:g,products:[],visibleProducts:[],popupVisibleProducts:[],activeFilters:[],populateProducts:function(){var t=Object(d.a)(u.a.mark((function t(){var n,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=P,t.next=3,h.a.get(n);case 3:c=t.sent,s=c.data,window.store__products=s,e({products:s,visibleProducts:s});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),updateVisibleProducts:function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({visibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updatePopupVisibleProducts:function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({popupVisibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(d.a)(u.a.mark((function t(n,c){var s,a,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=P,t.next=3,h.a.get(s);case 3:return a=t.sent,r=a.data,t.next=7,m(r);case 7:return o=t.sent,window.upsellProducts=o,e({upsellProducts:o}),n(o),t.abrupt("return");case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),setStoreUpsellProducts:function(t){console.log("data: ",t),e({upsellProducts:t})},addUpsellProduct:function(){var n=Object(d.a)(u.a.mark((function n(c,s){var a,r,o,l,d,p,b,f,h,j,g,x,w;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:return r=n.t0,o=r.length>=1&&r.filter((function(e){return e.id===c})),l=o.length>=1?o[0]:null,d=t().getProductById(c),p=t().getProductById(s),l&&(b=function(){var e=l.bundle;return Symbol.iterator in Object(e)?Object(i.a)(e):[e]},a=[].concat(Object(i.a)(b()),[p]),r=r.filter((function(e){return e.id!==c})),console.log(r)),f={id:c,bundle:a&&a.length>=1?Object(i.a)(new Set(a)):[d,p]},h=Symbol.iterator in Object(r)?Object(i.a)(r):[],j=[].concat(Object(i.a)(h),[f]),n.next=20,m(j);case 20:if(g=n.sent,console.log("updated -- ",g),!window.EcwidApp){n.next=27;break}return n.next=25,t().settings;case 25:x=n.sent;try{w=JSON.stringify({settings:x,upsellProducts:g}),console.log("payload: ",{upsellProducts:g}),window.EcwidApp.setAppPublicConfig(w,(function(){console.log("New upsell product saved!")}))}catch(u){console.error("Couldn't save upsell product. [store.js - addUpsellProduct()]")}case 27:console.log("updated: ",g),e({upsellProducts:g});case 29:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getUpsellProductById:function(){var e=Object(d.a)(u.a.mark((function e(n){var c,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t().upsellProducts){e.next=6;break}return e.next=3,t().upsellProducts();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,t().upsellProducts;case 8:e.t0=e.sent;case 9:return c=e.t0,s=c.filter((function(e){return e.id===n})),a=s.length>=1?s[0].bundle:[],console.log("Bundle products:",s,c,n,a),e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUpsellProductById:function(){var n=Object(d.a)(u.a.mark((function n(c,s){var a,r,o,i,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(a=n.t0,r=[],o=a.find((function(e){return e.id===c}))){n.next=15;break}return console.log("parent is undefined!!!"),n.abrupt("return");case 15:if(console.log("deleted bundle from parent: ",o,c,s),i=o.bundle.filter((function(e){return e.id!==s})),r=i.length<=1?a.filter((function(e){return e.id!==c})):a,o.bundle=i,console.log("Updated after delete: ",r),!window.EcwidApp){n.next=25;break}return n.next=23,t().settings;case 23:l=n.sent;try{window.EcwidApp.setAppPublicConfig(JSON.stringify({settings:l,upsellProducts:r}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(u){}case 25:e({upsellProducts:r});case 26:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),setSettings:function(){var n=Object(d.a)(u.a.mark((function n(c){var s,a,r,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c){n.next=2;break}throw new Error("no settings object");case 2:if("function"!==typeof t().upsellProducts){n.next=8;break}return n.next=5,t().upsellProducts();case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,t().upsellProducts;case 10:n.t0=n.sent;case 11:return s=n.t0,n.next=14,t().settings;case 14:if(a=n.sent,r=Object.assign({},a,c),window.EcwidApp)try{o={settings:r,upsellProducts:s},window.EcwidApp.setAppPublicConfig(JSON.stringify(o),(function(e){console.log("Public config saved. Payload: ",o)})),console.log("Saved settings in Database")}catch(i){}e({settings:r});case 18:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),setActiveFilters:function(){var t=Object(d.a)(u.a.mark((function t(){var n,c=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=c.length>0&&void 0!==c[0]?c[0]:null){t.next=3;break}return t.abrupt("return");case 3:console.log(n),e({activeFilters:n});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}))),y=(n(66),n(0));n(36),n(18),n(68);n(69),n(70);n(71);n(6),n(72),n(76);n(77),n(37),n(94);n(39),n(104);n(105);function N(){var e=k((function(e){return e.setSettings})),t=Object(c.useState)(g.isEnabled),n=Object(o.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(g.enableSecondImageOnHover),i=Object(o.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)(g.appTitle),p=Object(o.a)(d,2),b=p[0],f=p[1],h=Object(c.useState)(g.enableAddToCart),j=Object(o.a)(h,2),m=j[0],x=j[1],w=k((function(e){return e.settings}));return Object(c.useEffect)((function(){a(w.isEnabled)}),[w]),Object(y.jsxs)("div",{className:"HomepageSettings",children:[Object(y.jsxs)("div",{className:"HomepageSettings-item HomepageSettings-item--checkbox form-area__content form-area__content--no-margin",children:[Object(y.jsxs)("div",{className:"HomepageSettings-description",children:[Object(y.jsx)("p",{className:"HomepageSettings-text",children:"Show on checkout page"}),Object(y.jsx)("p",{className:"HomepageSettings-subtitle",children:s?"The app is enabled on the storefront.":Object(y.jsxs)("span",{children:["The app is ",Object(y.jsx)("b",{children:"not"})," enabled on the storefront."]})})]}),Object(y.jsx)("div",{className:"HomepageSettings-setting text-default",children:Object(y.jsxs)("label",{className:"checkbox micro",children:[Object(y.jsx)("input",{name:"",checked:s,onChange:function(){a(!s),e({isEnabled:!s})},type:"checkbox"})," ",Object(y.jsxs)("div",{className:"HomepageSettings-text","data-on":"App is enabled on the storefront","data-off":"App is disabled",children:[" ",Object(y.jsx)("div",{})," "]})]})})," "]}),Object(y.jsxs)("div",{className:"HomepageSettings-item form-area__content form-area__content--no-margin",children:[Object(y.jsxs)("div",{className:"HomepageSettings-description",children:[Object(y.jsx)("p",{className:"HomepageSettings-text",children:"App's title"}),Object(y.jsx)("p",{className:"HomepageSettings-subtitle",children:"Text that is displayed above the carousel on the checkout page."})]}),Object(y.jsx)("div",{className:"HomepageSettings-setting text-default",children:Object(y.jsxs)("div",{className:"HomepageSettings-field field",children:[Object(y.jsx)("input",{type:"text",className:"field__input",placeholder:"Carousel title",value:b,onChange:function(t){var n=t.target.value;f(n),e({appTitle:n})}})," "]})})," "]}),Object(y.jsxs)("div",{className:"HomepageSettings-item HomepageSettings-item--checkbox form-area__content form-area__content--no-margin",children:[Object(y.jsxs)("div",{className:"HomepageSettings-description",children:[Object(y.jsx)("p",{className:"HomepageSettings-text",children:"Enable quick add to cart"}),Object(y.jsx)("p",{className:"HomepageSettings-subtitle",children:'Show "add to cart" button below product\'s price.'})]}),Object(y.jsx)("div",{className:"HomepageSettings-setting text-default",children:Object(y.jsxs)("label",{className:"checkbox micro",children:[Object(y.jsx)("input",{name:"",checked:m,onChange:function(){x(!m),e({enableAddToCart:!m})},type:"checkbox"})," ",Object(y.jsxs)("div",{className:"HomepageSettings-text","data-on":"","data-off":"",children:[" ",Object(y.jsx)("div",{})," "]})]})})," "]}),Object(y.jsxs)("div",{className:"HomepageSettings-item HomepageSettings-item--checkbox form-area__content form-area__content--no-margin",children:[Object(y.jsxs)("div",{className:"HomepageSettings-description",children:[Object(y.jsx)("p",{className:"HomepageSettings-text",children:"Show second image on hover"}),Object(y.jsx)("p",{className:"HomepageSettings-subtitle",children:"Show product's second image when hovering over the main image."})]}),Object(y.jsx)("div",{className:"HomepageSettings-setting text-default",children:Object(y.jsxs)("label",{className:"checkbox micro",children:[Object(y.jsx)("input",{name:"",checked:l,onChange:function(){u(!l),e({enableSecondImageOnHover:!l})},type:"checkbox"})," ",Object(y.jsxs)("div",{className:"HomepageSettings-text","data-on":"","data-off":"",children:[" ",Object(y.jsx)("div",{})," "]})]})})," "]})]})}n(106);function S(e){return Object(y.jsxs)("div",{className:"TextContentBlock",children:[Object(y.jsx)("h2",{className:"TextContentBlock-title",children:e.title}),Object(y.jsx)("p",{className:"TextContentBlock-description TextContentBlock-additional-description",children:e.additionalDescription}),Object(y.jsxs)("div",{className:"TextContentBlock-container",children:[Object(y.jsxs)("div",{className:"TextContentBlock-left",children:[Object(y.jsx)("h3",{className:"TextContentBlock-subtitle",children:e.subtitle}),Object(y.jsx)("p",{className:"TextContentBlock-description",children:e.description&&"function"===typeof e.description?e.description():e.description})]}),Object(y.jsx)("div",{className:"TextContentBlock-right",children:e.children})]})]})}n(107);var T=n.p+"static/media/example-1.2dbf34c7.png",C=n.p+"static/media/related-products.0e053d75.jpg";function _(){return Object(y.jsx)("div",{className:"Tutorial",children:Object(y.jsxs)("div",{className:"Tutorial-container",children:[Object(y.jsxs)("div",{className:"Tutorial-left",children:[Object(y.jsx)("p",{className:"HomepageSettings-text Text--h3",children:"Related products carousel on the checkout page with quick view & add to cart"}),Object(y.jsx)("div",{className:"Text--p",children:"This app creates a carousel featuring products related to what your customer has added to their cart."}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"Text--p",children:"Here's how you can configure the products to appear:"}),Object(y.jsxs)("ol",{children:[Object(y.jsxs)("li",{className:"Text--p",children:[Object(y.jsx)("a",{target:"_blank",href:"https://my.ecwid.com/#products",rel:"noreferrer",children:"Go to the products page (click here)"}),"."]}),Object(y.jsx)("li",{className:"Text--p",children:"Choose the product you wish to recommend related products."}),Object(y.jsx)("li",{className:"Text--p",children:'Click on the "related products" tab. '}),Object(y.jsxs)("li",{className:"Text--p",children:["Click Enable (if you haven't set up related products for this item before) and configure the products.",Object(y.jsx)("img",{className:"Tutorial-image",src:C,alt:""})]}),Object(y.jsxs)("div",{className:"Text--p",children:[Object(y.jsx)("br",{}),"Detailed instructions can be"," ",Object(y.jsx)("a",{target:"_blank",href:"https://support.ecwid.com/hc/en-us/articles/208078945-Related-products",rel:"noreferrer",children:"found here"}),"."]})]})]}),Object(y.jsx)("figure",{className:"Tutorial-figure",children:Object(y.jsx)("img",{src:T,alt:""})})]})})}n(108);function E(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(o.a)(a,2),i=r[0],l=r[1];return Object(c.useEffect)((function(){k.subscribe((function(e){return e.upsellProducts}),(function(e){console.log("upsell products update from app!!!",e),s(e.length)})),k.subscribe((function(e){return e.settings}),(function(e){l(e)}))}),[]),Object(y.jsx)("div",{"data-total-products":n||"null",className:"TotalProducts",children:i?Object(y.jsxs)("div",{className:"TotalProducts-items",children:[" ",Object(y.jsxs)("div",{className:"TotalProducts-item",children:[null!==n&&n<=0?Object(y.jsx)("div",{className:"TotalProducts-image TotalProducts-image--x",children:Object(y.jsx)("svg",{className:"TotalProducts-icon--x",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 460.775 460.775",xmlSpace:"preserve",children:Object(y.jsx)("path",{d:"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"})})}):Object(y.jsx)("div",{className:"TotalProducts-image",children:Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70 70",focusable:"false",children:Object(y.jsx)("path",{d:"M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z"})})}),Object(y.jsx)("div",{className:"TotalProducts-content Text--h3",children:null===n?"Loading...":n>=1?"You have ".concat(n," product(s) with related products setup. Yay!"):n<=0&&"There are no products with related products setup yet. Please follow the instructions above to get started."})]}),Object(y.jsxs)("div",{className:"TotalProducts-item",children:[!1===i.isEnabled?Object(y.jsx)("div",{className:"TotalProducts-image TotalProducts-image--x",children:Object(y.jsx)("svg",{className:"TotalProducts-icon--x",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 460.775 460.775",xmlSpace:"preserve",children:Object(y.jsx)("path",{d:"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"})})}):Object(y.jsx)("div",{className:"TotalProducts-image",children:Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70 70",focusable:"false",children:Object(y.jsx)("path",{d:"M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z"})})}),Object(y.jsx)("div",{className:"TotalProducts-content Text--h3",children:i.isEnabled?"The app is active and visible on the checkout page.":"The app is deactivated and not visible on the checkout page."})]})]}):Object(y.jsx)("div",{className:"TotalProducts-loading Text--h3",children:"Loading..."})})}var H=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)(null),a=Object(o.a)(s,2),r=(a[0],a[1]),i=Object(c.useState)(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],p=(k((function(e){return e.settings})),k((function(e){return e.setSettings})));function b(e){e=JSON.parse(e);var t={};try{t.upsellProducts=e.hasOwnProperty("upsellProducts")?e.upsellProducts:[]}catch(n){t.upsellProducts=[]}try{t.settings=e.hasOwnProperty("settings")?Object.assign({},g,e.settings):g}catch(n){t.settings=g}console.log("Current database status:",e),r(t.upsellProducts),p(t.settings),d(!0)}return Object(c.useEffect)((function(){var e=window.EcwidApp.getPayload();n(e),window.EcwidApp.getPayload()||b(JSON.stringify({upsellProducts:[],settings:g})),window.EcwidApp&&window.EcwidApp.getPayload()&&!u&&window.EcwidApp.getAppPublicConfig((function(e){console.log("has init?",u,e),b(e)}))}),[]),Object(y.jsx)("div",{className:"EasyUpsellApp",children:Object(y.jsx)("div",{className:"EasyUpsellApp-container",children:Object(y.jsx)("div",{className:"named-area",children:Object(y.jsx)("div",{className:"named-area__body",children:Object(y.jsx)("div",{className:"a-card a-card--compact",children:Object(y.jsxs)("div",{className:"EasyUpsellApp-block a-card__paddings",children:[Object(y.jsx)(S,{title:"Checkout Upsell",subtitle:"Status",additionalDescription:"Show a carousel with products related to what your customer has added to cart on the checkout page.",description:"Current status of the app.",children:Object(y.jsx)(E,{})}),Object(y.jsx)(S,{subtitle:"Tutorial",description:"Brief explanation on how to get started.",children:Object(y.jsx)(_,{})}),Object(y.jsx)(S,{subtitle:"App settings",description:"Configure the app settings here.",children:Object(y.jsx)(N,{})})]})})})})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root")),A()},44:function(e,t,n){},45:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},94:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.d23f3111.chunk.js.map