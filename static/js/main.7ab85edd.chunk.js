(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(11),o=n.n(r),l=(n(44),n(2)),i=(n(45),n(13)),a=n(3),u=n.n(a),d=n(6),p=n(19),f=n.n(p),j=n(35),b=n.n(j),h=n(15),m={isEnabled:!0};function g(e){var t=/localhost/.test(window.location.href)?"37374877":window.EcwidApp.getPayload().store_id;return"https://my.ecwid.com/store/".concat(t,"#product:mode=edit&id=").concat(e)}var x=[{value:"show_products_with_upsell",label:"Show only products with upsells"}];function O(e,t){try{return e.filter((function(e){return t.some((function(t){return t.id===e.id}))}))}catch(n){return[]}}function v(e,t,n){if(!n||n.length<=0)return e;var c,s=JSON.parse(JSON.stringify(e)),r=Object(h.a)(n);try{for(r.s();!(c=r.n()).done;){if("show_products_with_upsell"===c.value.value){console.log("apply upd - products",s,t);var o=O(s.items,t);return console.log("apply - filtered",o),s.items=o,s}}}catch(l){r.e(l)}finally{r.f()}}function w(e){console.log("within sanitze: ",e);var t,n=function(e){return e.hasOwnProperty("options")?e.options.length:e.hasOwnProperty("totalOptions")?e.totalOptions:0},c=[],s=Object(h.a)(e);try{for(s.s();!(t=s.n()).done;){var r,o=t.value,l=o.id,i=[],a=Object(h.a)(o.bundle);try{for(a.s();!(r=a.n()).done;){var u=r.value;console.log("my upsell",u),i.push({id:u.id,name:u.name,thumbnailUrl:u.thumbnailUrl,defaultDisplayedPriceFormatted:u.defaultDisplayedPriceFormatted,compareToPriceDiscountFormatted:u.compareToPriceDiscountFormatted,compareToPriceFormatted:u.compareToPriceFormatted,url:u.url,totalOptions:n(u)})}}catch(d){a.e(d)}finally{a.f()}c.push({id:l,bundle:i})}}catch(d){s.e(d)}finally{s.f()}return console.log("cleaning: ",c),c}var P=n(20),N=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=".concat("secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4"):"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),y=f()(Object(P.subscribeWithSelector)((function(e,t){return{settings:m,products:[],visibleProducts:[],popupVisibleProducts:[],activeFilters:[],populateProducts:function(){var t=Object(d.a)(u.a.mark((function t(){var n,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=N,t.next=3,b.a.get(n);case 3:c=t.sent,s=c.data,e({products:s,visibleProducts:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),updateVisibleProducts:function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({visibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updatePopupVisibleProducts:function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({popupVisibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){return window.EcwidApp&&window.EcwidApp.getPayload()?new Promise(function(){var t=Object(d.a)(u.a.mark((function t(n,c){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("before: ",window.upsellProducts),!window.hasOwnProperty("upsellProducts")){t.next=6;break}return n(window.upsellProducts),t.abrupt("return");case 6:console.log("upsell prods not found",window.upsellProducts),s=[],window.EcwidApp.getAppPublicConfig((function(t){var c=JSON.parse(t);if(!(s=s=c.upsellProducts))return window.upsellProducts=[],void n([]);console.log("xxx 33ECWID DB DATA",c,s,window.upsellProducts),window.upsellProducts=s,n(s),e({upsellProducts:s})}));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()):[]},setStoreUpsellProducts:function(t){console.log("data: ",t),e({upsellProducts:t})},addUpsellProduct:function(){var n=Object(d.a)(u.a.mark((function n(c,s){var r,o,l,a,d,p,f,j,b,h,m,g,x;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(o=n.t0,l=o.length>=1&&o.filter((function(e){return e.id===c})),a=l.length>=1?l[0]:null,d=t().getProductById(c),p=t().getProductById(s),a&&(f=function(){var e=a.bundle;return Symbol.iterator in Object(e)?Object(i.a)(e):[e]},r=[].concat(Object(i.a)(f()),[p]),o=o.filter((function(e){return e.id!==c})),console.log(o)),j={id:c,bundle:r&&r.length>=1?Object(i.a)(new Set(r)):[d,p]},b=Symbol.iterator in Object(o)?Object(i.a)(o):[],h=[].concat(Object(i.a)(b),[j]),m=w(h),console.log("updated -- ",m),!window.EcwidApp){n.next=25;break}return n.next=23,t().settings;case 23:g=n.sent;try{x=JSON.stringify({settings:g,upsellProducts:m}),console.log("payload: ",{upsellProducts:m}),window.EcwidApp.setAppPublicConfig(x,(function(){console.log("New upsell product saved!")}))}catch(u){console.error("Couldn't save upsell product. [store.js - addUpsellProduct()]")}case 25:console.log("updated: ",m),e({upsellProducts:m});case 27:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getUpsellProductById:function(){var e=Object(d.a)(u.a.mark((function e(n){var c,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t().upsellProducts){e.next=6;break}return e.next=3,t().upsellProducts();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,t().upsellProducts;case 8:e.t0=e.sent;case 9:return c=e.t0,s=c.filter((function(e){return e.id===n})),r=s.length>=1?s[0].bundle:[],console.log("Bundle products:",s,c,n,r),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUpsellProductById:function(){var n=Object(d.a)(u.a.mark((function n(c,s){var r,o,l,i,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(r=n.t0,o=[],l=r.find((function(e){return e.id===c}))){n.next=15;break}return console.log("parent is undefined!!!"),n.abrupt("return");case 15:if(console.log("deleted bundle from parent: ",l,c,s),i=l.bundle.filter((function(e){return e.id!==s})),o=i.length<=1?r.filter((function(e){return e.id!==c})):r,l.bundle=i,console.log("Updated after delete: ",o),!window.EcwidApp){n.next=25;break}return n.next=23,t().settings;case 23:a=n.sent;try{window.EcwidApp.setAppPublicConfig(JSON.stringify({settings:a,upsellProducts:o}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(u){}case 25:e({upsellProducts:o});case 26:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),setSettings:function(){var n=Object(d.a)(u.a.mark((function n(c){var s,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c){n.next=2;break}throw new Error("no settings object");case 2:if("function"!==typeof t().upsellProducts){n.next=8;break}return n.next=5,t().upsellProducts();case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,t().upsellProducts;case 10:n.t0=n.sent;case 11:if(s=n.t0,window.EcwidApp)try{r={settings:c,upsellProducts:s},window.EcwidApp.setAppPublicConfig(JSON.stringify(r),(function(e){console.log("Public config saved. Payload: ",r)})),console.log("Saved settings in Database")}catch(o){}e({settings:c});case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),setActiveFilters:function(){var t=Object(d.a)(u.a.mark((function t(){var n,c=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=c.length>0&&void 0!==c[0]?c[0]:null){t.next=3;break}return t.abrupt("return");case 3:console.log(n),e({activeFilters:n});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}))),S=(n(66),n(0));var C=n(36);n(17),n(68);function k(e){var t=e.product,n=e.parentID,s=y((function(e){return e.addUpsellProduct})),r=y((function(e){return e.getCurrentPopupProduct})),o=y((function(e){return e.getUpsellProductById})),i=(y((function(e){return e.getCurrentPopupProduct})),Object(c.useState)(!0)),a=Object(l.a)(i,2),p=a[0],f=a[1];return Object(c.useEffect)((function(){!function(){var e=Object(d.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(n);case 2:e.sent.filter((function(e){return e.id===t.id})).length>=1&&f(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]),Object(S.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(S.jsx)("figure",{className:"list-element__image PopupItem-figure",children:Object(S.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(S.jsx)("div",{className:"list-element__content",children:Object(S.jsx)("div",{className:"list-element__info",children:Object(S.jsx)("div",{className:"list-element__header",children:Object(S.jsx)("div",{className:"list-element__main-info",children:Object(S.jsx)("div",{className:"PopupItem-product-name list-element__title",children:Object(S.jsx)("span",{children:t.name})})})})})}),Object(S.jsxs)("button",{disabled:!p,onClick:function(e){return n=t.id,s(r,n),void f(!1);var n},type:"button",className:"btn btn-small btn-primary",children:[Object(S.jsx)("span",{className:"svg-icon",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(S.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(S.jsx)("span",{className:"PopupItem-button-text gwt-InlineLabel",children:p?"Add":"Added"})]})]})}n(69),n(70);function _(e){var t=e.allProducts,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],o=s[1],i=Object(c.useState)([]),a=Object(l.a)(i,2),u=(a[0],a[1],y((function(e){return e.updatePopupVisibleProducts}))),d=y((function(e){return e.popupVisibleProducts}));y((function(e){return e.products}));return Object(c.useEffect)((function(){y.subscribe((function(e){return e.popupVisibleProducts}),(function(e){console.log("prods",e)}))}),[]),Object(c.useEffect)((function(){if(console.log("popup search all produs",t,r.length),r.length<=0)u(t);else{var e=t.items.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())?e:null}));console.log("res: ",e);var n=JSON.parse(JSON.stringify(d));n.items=e,console.log(n),u(n)}}),[r]),Object(S.jsx)("div",{className:"PopupSearch",children:Object(S.jsxs)("div",{className:"field field--medium",children:[Object(S.jsx)("span",{className:"fieldset__svg-icon",style:{},children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"})})})," ",Object(S.jsx)("input",{value:r,type:"text",className:"field__input",id:"gwt-uid-3188",placeholder:"Search product","aria-label":"Search product",onChange:function(e){return o(e.target.value)}})," ",Object(S.jsx)("span",{className:"field-state--success",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"})})})," ",Object(S.jsx)("span",{className:"field-state--close",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"})})})]})})}function I(e){var t=e.parentID,n=e.close,s=y((function(e){return e.products})),r=y((function(e){return e.popupVisibleProducts})),o=y((function(e){return e.updatePopupVisibleProducts})),i=Object(c.useState)([]),a=Object(l.a)(i,2),u=a[0],d=a[1];return Object(c.useEffect)((function(){console.log("updating popups visible",s);var e=JSON.parse(JSON.stringify(s));e.items=s.items.filter((function(e){return e.id!==t})),o(e),d(e),y.subscribe((function(e){return e.popupVisibleProducts}),(function(e){console.log("wihtn subscribe",e)}))}),[]),Object(S.jsxs)("div",{className:"PopupCustom",children:[Object(S.jsx)("button",{className:"PopupCustom-close",onClick:n,children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",className:"icon icon-close",fill:"none",viewBox:"0 0 18 17",children:Object(S.jsx)("path",{d:"M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z",fill:"currentColor"})})}),Object(S.jsx)("div",{className:"a-card__paddings",children:Object(S.jsx)("h3",{className:"PopupCustom-title",children:"Products to upsell:"})}),Object(S.jsx)(_,{allProducts:u}),Object(S.jsx)("div",{className:"PopupCustom-products",children:r&&r.hasOwnProperty("items")&&r.items.length>=1&&r.items.map((function(e){return Object(S.jsx)(k,{parentID:t,product:e},e.id)}))})]})}n(71);function E(e){var t=e.product,n=e.upsell,r=(y((function(e){return e.getUpsellProductById})),y((function(e){return e.deleteUpsellProductById}))),o=y((function(e){return e.getCurrentPopupProduct})),l=(y((function(e){return e.getProductById})),y((function(e){return e.setCurrentPopupProduct})));Object(c.useEffect)((function(){n&&n.length,y.subscribe((function(e){return e.upsellProducts}),(function(e){console.log("xx update")}))}),[]),Object(c.useEffect)((function(){console.log("current popup: ",o)}),[o]);return Object(S.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(S.jsxs)("div",{className:"ProductItem-top",children:[Object(S.jsxs)("a",{className:"ProductItem-link",href:g(t.id),target:"_blank",rel:"noreferrer",children:[Object(S.jsx)("figure",{className:"ProductItem-figure list-element__image",children:Object(S.jsx)("img",{className:"ProductItem-image",src:t.thumbnailUrl,alt:t.name})}),Object(S.jsxs)("div",{className:"ProductItem-info",children:[Object(S.jsxs)("div",{className:"ProductItem-info-container ProductItem-info-top",children:[Object(S.jsx)("div",{className:"ProductItem-name",children:Object(S.jsx)("div",{className:"list-element__header",children:Object(S.jsx)("div",{className:"list-element__main-info",children:Object(S.jsx)("div",{className:"ProductItem-name-text list-element__title",children:t.name})})})}),Object(S.jsx)("div",{className:"ProductItem-price",children:t.defaultDisplayedPriceFormatted})]}),Object(S.jsx)("div",{className:"ProductItem-info-container",children:Object(S.jsxs)("div",{className:"ProductItem-enabled",children:[t.enabled?"Enabled":"Disabled"," and ",t.inStock?"in stock":"out of stock"]})})]})]}),Object(S.jsx)(C.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),l(t.id)},trigger:function(){return Object(S.jsx)("div",{className:"ProductItem-button-wrapper",children:Object(S.jsxs)("button",{type:"button",className:"ProductItem-button btn btn-small btn-primary",children:[Object(S.jsx)("span",{className:"svg-icon",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(S.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(S.jsx)("span",{className:"ProductItem-button-text gwt-InlineLabel",children:"Add Upsell Products"})]})})},position:"center center",children:function(e){return Object(S.jsx)(I,{close:e,parentID:t.id})}})]}),Object(S.jsx)("div",{className:"ProductItem-bottom list-element__content",children:Object(S.jsx)("div",{className:"list-element__info",children:Object(S.jsx)("div",{className:"list-element__status-row","data-upsell-products":n.hasOwnProperty("bundle")?n.bundle.length:0,children:n&&n.hasOwnProperty("bundle")?Object(S.jsxs)(s.a.Fragment,{children:[Object(S.jsx)("p",{className:"ProductItem-bottom-title",children:" Upsell product(s)"}),Object(S.jsxs)("div",{className:"list-element__data-row ProductItem-bottom-wrapper",children:[n.bundle.map((function(e){var n=e;if(n.id!==t.id)return Object(S.jsxs)("div",{className:"ProductItem-upsell ProductItem-upsell--".concat(n.id,"-").concat(t.id),children:[Object(S.jsx)("figure",{className:"ProductItem-upsell-figure",children:Object(S.jsx)("img",{className:"ProductItem-upsell-image",src:n.thumbnailUrl,alt:""})}),Object(S.jsx)("div",{className:"ProductItem-upsell-info",children:Object(S.jsx)("span",{className:"ProductItem-title spacing--mr1",children:n.name})}),Object(S.jsx)("button",{className:"ProductItem-delete icolink",onClick:function(e){e.preventDefault(),console.log("Delete ".concat(n.id," from the parent ").concat(t.id)),r(t.id,n.id);try{var c=window.document.querySelector(".ProductItem-upsell--".concat(n.id,"-").concat(t.id));c&&(c.style.display="none")}catch(s){console.log("Removing error",s)}},children:Object(S.jsxs)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(S.jsx)("path",{d:"M7 0h4l1 2H6l1-2z"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 3c-.5523 0-1 .4477-1 1s.4477 1 1 1v11c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V5c.5523 0 1-.4477 1-1s-.4477-1-1-1H2zm12 13V5H4v11h10z"}),Object(S.jsx)("path",{d:"M6 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6zM10 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6z"})]})})]},"".concat(n.id,"_").concat(t.id))}))," "]})]}):Object(S.jsx)("div",{style:{fontSize:12},children:'There are no upsells setup for this product yet. Click on "Add upsell products" to add.'})})})})]})}var A=n(5),T=n.n(A),B=(n(72),function(){return Object(S.jsxs)("div",{className:"Placeholder",children:[Object(S.jsxs)("div",{className:"Placeholder-item",children:[Object(S.jsx)(T.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(S.jsx)(T.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(S.jsx)(T.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]}),Object(S.jsxs)("div",{className:"Placeholder-item",children:[Object(S.jsx)(T.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(S.jsx)(T.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(S.jsx)(T.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]}),Object(S.jsxs)("div",{className:"Placeholder-item",children:[Object(S.jsx)(T.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(S.jsx)(T.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(S.jsx)(T.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]})]})});n(76);function U(){return Object(S.jsxs)("div",{className:"NoProductsFound",children:[" ",Object(S.jsx)("h3",{children:"No products found."})]})}n(77);var D=n(37),F=n.n(D),V=[],M=function(e){var t=e.upsellProducts,n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],o=s[1],i=y((function(e){return e.products})),a=y((function(e){return e.setActiveFilters})),u=y((function(e){return e.visibleProducts})),d=y((function(e){return e.setStoreUpsellProducts})),p=y((function(e){return e.updateVisibleProducts}));return Object(c.useEffect)((function(){y.subscribe((function(e){return e.upsellProducts}),(function(e){console.log("upsell products update from app!",e),o(e)})),o(t),d(t)}),[]),Object(c.useEffect)((function(){console.log("my upsell prods",r)}),[r]),Object(S.jsx)("div",{className:"Filter",children:Object(S.jsx)(F.a,{options:x,placeholder:"Filter",multi:!0,contentRenderer:function(e){e.props;var t=e.state;return Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(S.jsx)("b",{style:{marginRight:5},children:t.values.length})," Filter",1!==t.values.length?"s":""]})},values:x.filter((function(e){return V.includes(e.label)})),onChange:function(e){if(e.length<=0)return console.log("all prods",i),p(i),void a([]);console.log("NEW CODE filters aand upsell",e,r),a(e);var t=v(u,r,e);console.log("filter update",t,"--- visible prods",u),t||p(i),p(t)}})})};n(94);function H(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),o=Object(l.a)(r,2),i=o[0],a=o[1],u=!1,d=y((function(e){return e.updateVisibleProducts})),p=(y((function(e){return e.visibleProducts})),y((function(e){return e.upsellProducts}))),f=y((function(e){return e.activeFilters}));return Object(c.useEffect)((function(){y.subscribe((function(e){return e.products}),(function(e){u||e.hasOwnProperty("items")&&e.items.length>=1&&(a(e),console.log("SEARCH!!!",e),u=!0)}))}),[]),Object(c.useEffect)((function(){if(console.log("search",i),y.subscribe((function(e){return e.activeFilters}),(function(e){s("")})),n.length<=0&&(console.log("updating all products",i),d(i)),i&&i.items&&i.items.length>=1){console.log(f);var e=i.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())?e:null}));f&&f.length>=1&&(e=v(i,p,f).items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())?e:null}))),console.log("searcgable: ","filters ",f);var t=JSON.parse(JSON.stringify(i));t.items=e,console.log(t),d(t)}}),[n]),Object(S.jsx)("div",{className:"Search",children:Object(S.jsxs)("div",{className:"field field--medium",children:[Object(S.jsx)("span",{className:"fieldset__svg-icon",style:{},children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"})})})," ",Object(S.jsx)("input",{value:n,type:"text",className:"field__input",id:"gwt-uid-3188",placeholder:"Search product","aria-label":"Search product",onChange:function(e){return s(e.target.value)}})," ",Object(S.jsx)("span",{className:"field-state--success",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"})})})," ",Object(S.jsx)("span",{className:"field-state--close",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"})})})]})})}function L(e){var t=e.upsellProducts,n=y((function(e){return e.populateProducts})),s=y((function(e){return e.visibleProducts})),r=Object(c.useState)(t),o=Object(l.a)(r,2),i=o[0],a=o[1];return Object(c.useEffect)((function(){n(),y.subscribe((function(e){return e.upsellProducts}),(function(e){a(e)}))}),[]),Object(S.jsxs)("div",{className:"Products  named-area",children:[Object(S.jsxs)("div",{className:"Products-intro",children:[Object(S.jsx)("p",{className:"Text--h3",children:"Products"}),Object(S.jsx)("div",{className:"Text--p",children:"All products in your store can be found on the list below. Select one product to add upsells to it."})]}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)(M,{upsellProducts:t}),Object(S.jsx)(H,{})]}),Object(S.jsxs)("div",{className:"Products-items",children:[s&&s.hasOwnProperty("items")&&s.items.length<=0?Object(S.jsx)(U,{}):"",s&&s.hasOwnProperty("items")?s.items.map((function(e){return Object(S.jsx)(E,{product:e,upsell:i.filter((function(t){return t.id===e.id})).length>=1?i.filter((function(t){return t.id===e.id}))[0]:[]},e.id)})):Object(S.jsx)(B,{})]})]})}n(39),n(104);n(105);function z(){var e=y((function(e){return e.setSettings})),t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],r=n[1],o=y((function(e){return e.settings}));return Object(c.useEffect)((function(){r(o.isEnabled)}),[o]),Object(S.jsx)("div",{className:"HomepageSettings",children:Object(S.jsxs)("div",{className:"HomepageSettings-item form-area__content form-area__content--no-margin",children:[Object(S.jsxs)("div",{className:"HomepageSettings-description",children:[Object(S.jsx)("p",{className:"HomepageSettings-text",children:"Show on checkout page"}),Object(S.jsx)("p",{className:"HomepageSettings-subtitle",children:s?"The app is enabled on the storefront.":Object(S.jsxs)("span",{children:["The app is ",Object(S.jsx)("b",{children:"not"})," enabled on the storefront. It will not show up on the checkout page."]})})]}),Object(S.jsx)("div",{className:"HomepageSettings-setting text-default",children:Object(S.jsxs)("label",{className:"checkbox micro",children:[Object(S.jsx)("input",{name:"",checked:s,onChange:function(){r(!s),e({isEnabled:!s})},type:"checkbox"})," ",Object(S.jsxs)("div",{className:"HomepageSettings-text","data-on":"App is enabled on the storefront","data-off":"App is disabled",children:[" ",Object(S.jsx)("div",{})," "]})]})})," "]})})}n(106);function R(e){return Object(S.jsxs)("div",{className:"TextContentBlock",children:[Object(S.jsx)("h2",{className:"TextContentBlock-title",children:e.title}),Object(S.jsx)("p",{className:"TextContentBlock-description TextContentBlock-additional-description",children:e.additionalDescription}),Object(S.jsxs)("div",{className:"TextContentBlock-container",children:[Object(S.jsxs)("div",{className:"TextContentBlock-left",children:[Object(S.jsx)("h3",{className:"TextContentBlock-subtitle",children:e.subtitle}),Object(S.jsx)("p",{className:"TextContentBlock-description",children:e.description&&"function"===typeof e.description?e.description():e.description})]}),Object(S.jsx)("div",{className:"TextContentBlock-right",children:e.children})]})]})}n(107);var J=n.p+"static/media/example-1.2dbf34c7.png";function Q(){return Object(S.jsx)("div",{className:"Tutorial",children:Object(S.jsxs)("div",{className:"Tutorial-container",children:[Object(S.jsxs)("div",{className:"Tutorial-left",children:[Object(S.jsx)("p",{className:"HomepageSettings-text Text--h3",children:"Offer products at the checkout page"}),Object(S.jsx)("div",{className:"Text--p",children:"This app creates a carousel with recommendations based on what your customer has added to the cart."}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"Text--p",children:"These recommendations are configured manually. To configure it, please do the following:"}),Object(S.jsxs)("ol",{children:[Object(S.jsx)("li",{className:"Text--p",children:"Choose one of your products from the list below in the next section."}),Object(S.jsx)("li",{className:"Text--p",children:'Once you\'ve found it, click on "Add Upsell Products." A popup will appear.'}),Object(S.jsx)("li",{className:"Text--p",children:"In this popup, choose the products you'd like to display on the carousel."})]})]}),Object(S.jsx)("figure",{className:"Tutorial-figure",children:Object(S.jsx)("img",{src:J,alt:""})})]})})}var W=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=(t[0],t[1]),r=Object(c.useState)(null),o=Object(l.a)(r,2),i=o[0],a=o[1],u=Object(c.useState)(!1),d=Object(l.a)(u,2),p=d[0],f=d[1],j=(y((function(e){return e.settings})),y((function(e){return e.setSettings})));function b(e){e=JSON.parse(e);var t={};try{t.upsellProducts=e.hasOwnProperty("upsellProducts")?e.upsellProducts:[]}catch(n){t.upsellProducts=[]}try{t.settings=e.hasOwnProperty("settings")?e.settings:[]}catch(n){t.settings=[]}console.log("!Must create new database? ",false,t),console.log("vaue",e),a(t.upsellProducts),j(t.settings),f(!0)}return y((function(e){return e.upsellProducts})),Object(c.useEffect)((function(){var e=window.EcwidApp.getPayload();n(e),y.subscribe((function(e){return e.upsellProducts}),(function(e){console.log("upsell products update from app!",e)})),y.subscribe((function(e){return e.settings}),(function(e){console.log("settings update from app!",e)})),window.EcwidApp.getPayload()||b(JSON.stringify({upsellProducts:[],settings:m})),window.EcwidApp&&window.EcwidApp.getPayload()&&!p&&window.EcwidApp.getAppPublicConfig((function(e){console.log("has init?",p,e),b(e)}))}),[]),Object(S.jsx)("div",{className:"EasyUpsellApp",children:Object(S.jsx)("div",{className:"EasyUpsellApp-container",children:Object(S.jsx)("div",{className:"named-area",children:Object(S.jsx)("div",{className:"named-area__body",children:Object(S.jsx)("div",{className:"a-card a-card--compact",children:Object(S.jsxs)("div",{className:"EasyUpsellApp-block a-card__paddings",children:[Object(S.jsx)(R,{title:"Checkout Upsell",subtitle:"Summary",additionalDescription:"Show a carousel with products related to what your customer has added to cart on the checkout page.",description:"Brief explanation on how to get started.",children:Object(S.jsx)(Q,{})}),Object(S.jsxs)(R,{subtitle:"Upsell products",description:function(){return Object(S.jsx)("div",{children:"Manage your upsell products here."})},children:[" ",Object(S.jsx)("div",{style:{display:"flex"},children:i&&Object(S.jsx)(s.a.Fragment,{})}),i?Object(S.jsx)(L,{upsellProducts:i}):Object(S.jsx)(B,{})]}),Object(S.jsx)(R,{subtitle:"App settings",description:"Configure the app settings here.",children:Object(S.jsx)(z,{})})]})})})})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root")),q()},44:function(e,t,n){},45:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},94:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.7ab85edd.chunk.js.map