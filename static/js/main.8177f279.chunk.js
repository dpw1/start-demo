(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),l=n(11),r=n.n(l),o=(n(44),n(3)),i=(n(45),n(19)),a=n.n(i),u=n(13),d=n(2),p=n.n(d),f=n(6),b=n(20),j=n.n(b),h=n(15),m={isEnabled:!1},g=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4":"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token);function v(e){var t=/localhost/.test(window.location.href)?"37374877":window.EcwidApp.getPayload().store_id;return"https://my.ecwid.com/store/".concat(t,"#product:mode=edit&id=").concat(e)}var O=[{value:"show_products_with_upsell",label:"Show only products with upsells"}];function x(e,t){try{return e.filter((function(e){return t.some((function(t){return t.id===e.id}))}))}catch(n){return[]}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e||e.length<=0)return[];var t="function"===typeof e?e():e;return t}function P(e,t,n){if(!n||n.length<=0)return e;var c,s=JSON.parse(JSON.stringify(e)),l=Object(h.a)(n);try{for(l.s();!(c=l.n()).done;){if("show_products_with_upsell"===c.value.value){console.log("apply - products",s,t);var r=x(s.items,t);return console.log("apply - filtered",r),s.items=r,s}}}catch(o){l.e(o)}finally{l.f()}}function N(e){console.log("within sanitze: ",e);var t,n=function(e){return e.hasOwnProperty("options")?e.options.length:e.hasOwnProperty("totalOptions")?e.totalOptions:0},c=[],s=Object(h.a)(e);try{for(s.s();!(t=s.n()).done;){var l,r=t.value,o=r.id,i=[],a=Object(h.a)(r.bundle);try{for(a.s();!(l=a.n()).done;){var u=l.value;console.log("my upsell",u),i.push({id:u.id,name:u.name,thumbnailUrl:u.thumbnailUrl,defaultDisplayedPriceFormatted:u.defaultDisplayedPriceFormatted,compareToPriceDiscountFormatted:u.compareToPriceDiscountFormatted,compareToPriceFormatted:u.compareToPriceFormatted,url:u.url,totalOptions:n(u)})}}catch(d){a.e(d)}finally{a.f()}c.push({id:o,bundle:i})}}catch(d){s.e(d)}finally{s.f()}return console.log("cleaning: ",c),c}var y=n(21),_=j()(Object(y.subscribeWithSelector)((function(e,t){return{settings:m,products:[],visibleProducts:[],popupVisibleProducts:[],activeFilters:[],populateProducts:function(){var t=Object(f.a)(p.a.mark((function t(){var n,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g,t.next=3,a.a.get(n);case 3:c=t.sent,s=c.data,e({products:s,visibleProducts:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),updateVisibleProducts:function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({visibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updatePopupVisibleProducts:function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({popupVisibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){return window.EcwidApp&&window.EcwidApp.getPayload()?new Promise(function(){var e=Object(f.a)(p.a.mark((function e(t,n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("before: ",window.upsellProducts),!window.hasOwnProperty("upsellProducts")){e.next=6;break}return t(window.upsellProducts),e.abrupt("return");case 6:console.log("upsell prods not found",window.upsellProducts),c=[],window.EcwidApp.getAppPublicConfig((function(e){var n=JSON.parse(e);if(!(c=c=n.upsellProducts))return window.upsellProducts=[],void t([]);console.log("xxx 33ECWID DB DATA",n,c,window.upsellProducts),window.upsellProducts=c,t(c)}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()):[]},addUpsellProduct:function(){var n=Object(f.a)(p.a.mark((function n(c,s){var l,r,o,i,a,d,f,b,j,h,m,g,v;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=w,n.next=3,t().upsellProducts;case 3:if(n.t1=n.sent,r=(0,n.t0)(n.t1),o=r.length>=1&&r.filter((function(e){return e.id===c})),i=o.length>=1?o[0]:null,a=t().getProductById(c),d=t().getProductById(s),i&&(f=function(){var e=i.bundle;return Symbol.iterator in Object(e)?Object(u.a)(e):[e]},l=[].concat(Object(u.a)(f()),[d]),r=r.filter((function(e){return e.id!==c})),console.log(r)),b={id:c,bundle:l&&l.length>=1?Object(u.a)(new Set(l)):[a,d]},j=Symbol.iterator in Object(r)?Object(u.a)(r):[],h=[].concat(Object(u.a)(j),[b]),m=N(h),console.log("updated -- ",m),!window.EcwidApp){n.next=20;break}return n.next=18,t().settings;case 18:g=n.sent;try{v=JSON.stringify({settings:g,upsellProducts:m}),console.log("payload: ",{upsellProducts:m}),window.EcwidApp.setAppPublicConfig(v,(function(){console.log("New upsell product saved!")}))}catch(p){console.error("Couldn't save upsell product. [store.js - addUpsellProduct()]")}case 20:console.log("updated: ",m),e({upsellProducts:m});case 22:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getUpsellProductById:function(){var e=Object(f.a)(p.a.mark((function e(n){var c,s,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.next=3,t().upsellProducts;case 3:return e.t1=e.sent,c=(0,e.t0)(e.t1),s=c.filter((function(e){return e.id===n})),l=s.length>=1?s[0].bundle:[],console.log("Bundle products:",s,c,n,l),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUpsellProductById:function(){var n=Object(f.a)(p.a.mark((function n(c,s){var l,r,o,i,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=w,n.next=3,t().upsellProducts;case 3:if(n.t1=n.sent,l=(0,n.t0)(n.t1),r=[],o=l.find((function(e){return e.id===c}))){n.next=10;break}return console.log("parent is undefined!!!"),n.abrupt("return");case 10:if(console.log("deleted bundle from parent: ",o,c,s),i=o.bundle.filter((function(e){return e.id!==s})),r=i.length<=1?l.filter((function(e){return e.id!==c})):l,o.bundle=i,console.log("Updated after delete: ",r),!window.EcwidApp){n.next=20;break}return n.next=18,t().settings;case 18:a=n.sent;try{window.EcwidApp.setAppPublicConfig(JSON.stringify({settings:a,upsellProducts:r}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(u){}case 20:e({upsellProducts:r});case 21:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),setSettings:function(){var n=Object(f.a)(p.a.mark((function n(c){var s,l;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c){n.next=2;break}throw new Error("no settings object");case 2:return n.t0=w,n.next=5,t().upsellProducts;case 5:if(n.t1=n.sent,s=(0,n.t0)(n.t1),window.EcwidApp)try{l={settings:c,upsellProducts:s},window.EcwidApp.setAppPublicConfig(JSON.stringify(l),(function(e){console.log("Public config saved. Payload: ",l)})),console.log("Saved settings in Database")}catch(r){}e({settings:c});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),setActiveFilters:function(){var t=Object(f.a)(p.a.mark((function t(){var n,c=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=c.length>0&&void 0!==c[0]?c[0]:null){t.next=3;break}return t.abrupt("return");case 3:console.log(n),e({activeFilters:n});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}))),S=(n(66),n(0));var C=n(36);n(17),n(68);function E(e){var t=e.product,n=e.parentID,s=_((function(e){return e.addUpsellProduct})),l=_((function(e){return e.getCurrentPopupProduct})),r=_((function(e){return e.getUpsellProductById})),i=(_((function(e){return e.getCurrentPopupProduct})),Object(c.useState)(!0)),a=Object(o.a)(i,2),u=a[0],d=a[1];return Object(c.useEffect)((function(){!function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:e.sent.filter((function(e){return e.id===t.id})).length>=1&&d(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]),Object(S.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(S.jsx)("figure",{className:"list-element__image PopupItem-figure",children:Object(S.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(S.jsx)("div",{className:"list-element__content",children:Object(S.jsx)("div",{className:"list-element__info",children:Object(S.jsx)("div",{className:"list-element__header",children:Object(S.jsx)("div",{className:"list-element__main-info",children:Object(S.jsx)("div",{className:"list-element__title",children:Object(S.jsx)("span",{children:t.name})})})})})}),Object(S.jsxs)("button",{disabled:!u,onClick:function(e){return n=t.id,s(l,n),void d(!1);var n},type:"button",className:"btn btn-small btn-primary",children:[Object(S.jsx)("span",{className:"svg-icon",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(S.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(S.jsx)("span",{className:"PopupItem-button-text gwt-InlineLabel",children:u?"Add":"Added"})]})]})}n(69),n(70);function I(e){var t=e.allProducts,n=Object(c.useState)(""),s=Object(o.a)(n,2),l=s[0],r=s[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),u=(a[0],a[1],_((function(e){return e.updatePopupVisibleProducts}))),d=_((function(e){return e.popupVisibleProducts}));_((function(e){return e.products}));return Object(c.useEffect)((function(){_.subscribe((function(e){return e.popupVisibleProducts}),(function(e){console.log("prods",e)}))}),[]),Object(c.useEffect)((function(){if(console.log("popup search all produs",t,l.length),l.length<=0)u(t);else{var e=t.items.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())?e:null}));console.log("res: ",e);var n=JSON.parse(JSON.stringify(d));n.items=e,console.log(n),u(n)}}),[l]),Object(S.jsx)("div",{className:"PopupSearch",children:Object(S.jsxs)("div",{className:"field field--medium",children:[Object(S.jsx)("span",{className:"fieldset__svg-icon",style:{},children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"})})})," ",Object(S.jsx)("input",{value:l,type:"text",className:"field__input",id:"gwt-uid-3188",placeholder:"Search product!","aria-label":"Search product",onChange:function(e){return r(e.target.value)}})," ",Object(S.jsx)("span",{className:"field-state--success",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"})})})," ",Object(S.jsx)("span",{className:"field-state--close",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"})})})]})})}function k(e){var t=e.parentID,n=e.close,s=_((function(e){return e.products})),l=_((function(e){return e.popupVisibleProducts})),r=_((function(e){return e.updatePopupVisibleProducts})),i=Object(c.useState)([]),a=Object(o.a)(i,2),u=a[0],d=a[1];return Object(c.useEffect)((function(){console.log("updating popups visible",s);var e=JSON.parse(JSON.stringify(s));e.items=s.items.filter((function(e){return e.id!==t})),r(e),d(e),_.subscribe((function(e){return e.popupVisibleProducts}),(function(e){console.log("wihtn subscribe",e)}))}),[]),Object(S.jsxs)("div",{className:"PopupCustom",children:[Object(S.jsx)("button",{className:"PopupCustom-close",onClick:n,children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",className:"icon icon-close",fill:"none",viewBox:"0 0 18 17",children:Object(S.jsx)("path",{d:"M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z",fill:"currentColor"})})}),Object(S.jsx)("div",{className:"a-card__paddings",children:Object(S.jsx)("h3",{className:"PopupCustom-title",children:"Products to upsell:"})}),Object(S.jsx)(I,{allProducts:u}),Object(S.jsx)("div",{className:"PopupCustom-products",children:l&&l.hasOwnProperty("items")&&l.items.length>=1&&l.items.map((function(e){return Object(S.jsx)(E,{parentID:t,product:e},e.id)}))})]})}n(71);function A(e){var t=e.product,n=e.upsell,l=(_((function(e){return e.getUpsellProductById})),_((function(e){return e.deleteUpsellProductById}))),r=_((function(e){return e.getCurrentPopupProduct})),o=(_((function(e){return e.getProductById})),_((function(e){return e.setCurrentPopupProduct})));Object(c.useEffect)((function(){n&&n.length}),[]),Object(c.useEffect)((function(){console.log("current popup: ",r)}),[r]);return Object(S.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(S.jsxs)("div",{className:"ProductItem-top",children:[Object(S.jsxs)("a",{className:"ProductItem-link",href:v(t.id),target:"_blank",rel:"noreferrer",children:[Object(S.jsx)("figure",{className:"ProductItem-figure list-element__image",children:Object(S.jsx)("img",{className:"ProductItem-image",src:t.thumbnailUrl,alt:t.name})}),Object(S.jsx)("div",{className:"ProductItem-name",children:Object(S.jsx)("div",{className:"list-element__header",children:Object(S.jsx)("div",{className:"list-element__main-info",children:Object(S.jsx)("div",{className:"ProductItem-name-text list-element__title",children:t.name})})})})]}),Object(S.jsx)(C.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),o(t.id)},trigger:function(){return Object(S.jsxs)("button",{type:"button",className:"ProductItem-button btn btn-small btn-primary",children:[Object(S.jsx)("span",{className:"svg-icon",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(S.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(S.jsx)("span",{className:"ProductItem-button-text gwt-InlineLabel",children:"Add Upsell Products"})]})},position:"center center",children:function(e){return Object(S.jsx)(k,{close:e,parentID:t.id})}})]}),Object(S.jsx)("div",{className:"ProductItem-bottom list-element__content",children:Object(S.jsx)("div",{className:"list-element__info",children:Object(S.jsx)("div",{className:"list-element__status-row","data-upsell-products":n.hasOwnProperty("bundle")?n.bundle.length:0,children:n&&n.hasOwnProperty("bundle")&&Object(S.jsxs)(s.a.Fragment,{children:[Object(S.jsx)("p",{className:"ProductItem-bottom-title",children:"Upsell products"}),Object(S.jsxs)("div",{className:"list-element__data-row ProductItem-bottom-wrapper",children:[n.bundle.map((function(e){var n=e;if(n.id!==t.id)return Object(S.jsxs)("div",{className:"ProductItem-upsell ProductItem-upsell--".concat(n.id,"-").concat(t.id),children:[Object(S.jsx)("figure",{className:"ProductItem-upsell-figure",children:Object(S.jsx)("img",{className:"ProductItem-upsell-image",src:n.thumbnailUrl,alt:""})}),Object(S.jsx)("div",{className:"ProductItem-info",children:Object(S.jsx)("span",{className:"ProductItem-title spacing--mr1",children:n.name})}),Object(S.jsx)("button",{className:"ProductItem-delete icolink",onClick:function(e){e.preventDefault(),console.log("Delete ".concat(n.id," from the parent ").concat(t.id)),l(t.id,n.id);try{var c=window.document.querySelector(".ProductItem-upsell--".concat(n.id,"-").concat(t.id));c&&(c.style.display="none")}catch(s){console.log("Removing error",s)}},children:Object(S.jsxs)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(S.jsx)("path",{d:"M7 0h4l1 2H6l1-2z"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 3c-.5523 0-1 .4477-1 1s.4477 1 1 1v11c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V5c.5523 0 1-.4477 1-1s-.4477-1-1-1H2zm12 13V5H4v11h10z"}),Object(S.jsx)("path",{d:"M6 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6zM10 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6z"})]})})]},"".concat(n.id,"_").concat(t.id))}))," "]})]})})})})]})}var L=n(5),B=n.n(L),M=(n(72),function(){return Object(S.jsxs)("div",{className:"Placeholder",children:[Object(S.jsxs)("div",{className:"Placeholder-item",children:[Object(S.jsx)(B.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(S.jsx)(B.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(S.jsx)(B.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]}),Object(S.jsxs)("div",{className:"Placeholder-item",children:[Object(S.jsx)(B.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(S.jsx)(B.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(S.jsx)(B.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]}),Object(S.jsxs)("div",{className:"Placeholder-item",children:[Object(S.jsx)(B.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(S.jsx)(B.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(S.jsx)(B.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]})]})});function V(e){var t=e.upsellProducts,n=_((function(e){return e.populateProducts})),s=_((function(e){return e.visibleProducts})),l=Object(c.useState)(t),r=Object(o.a)(l,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){n(),console.log("total prods",s),_.subscribe((function(e){return e.upsellProducts}),(function(e){a(e),console.log("visible upsells updated, let's upd!",e)}))}),[]),Object(S.jsx)("div",{className:"Products  named-area",children:Object(S.jsx)("div",{className:"Products-items",children:s&&s.hasOwnProperty("items")?s.items.map((function(e){return Object(S.jsx)(A,{product:e,upsell:i.filter((function(t){return t.id===e.id})).length>=1?i.filter((function(t){return t.id===e.id}))[0]:[]},e.id)})):Object(S.jsx)(M,{})})})}n(76);function z(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],l=Object(c.useState)([]),r=Object(o.a)(l,2),i=r[0],a=r[1],u=!1,d=_((function(e){return e.updateVisibleProducts})),p=(_((function(e){return e.visibleProducts})),_((function(e){return e.upsellProducts}))),f=_((function(e){return e.activeFilters}));return Object(c.useEffect)((function(){_.subscribe((function(e){return e.products}),(function(e){u||e.hasOwnProperty("items")&&e.items.length>=1&&(a(e),console.log("SEARCH!!!",e),u=!0)}))}),[]),Object(c.useEffect)((function(){if(console.log("search",i),_.subscribe((function(e){return e.activeFilters}),(function(e){s("")})),n.length<=0&&(console.log("updating all products",i),d(i)),i&&i.items&&i.items.length>=1){console.log(f);var e=i.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())?e:null}));f&&f.length>=1&&(e=P(i,p,f).items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())?e:null}))),console.log("searcgable: ","filters ",f);var t=JSON.parse(JSON.stringify(i));t.items=e,console.log(t),d(t)}}),[n]),Object(S.jsx)("div",{className:"Search",children:Object(S.jsxs)("div",{className:"field field--medium",children:[Object(S.jsx)("span",{className:"fieldset__svg-icon",style:{},children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"})})})," ",Object(S.jsx)("input",{value:n,type:"text",className:"field__input",id:"gwt-uid-3188",placeholder:"Search product","aria-label":"Search product",onChange:function(e){return s(e.target.value)}})," ",Object(S.jsx)("span",{className:"field-state--success",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"})})})," ",Object(S.jsx)("span",{className:"field-state--close",children:Object(S.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"})})})]})})}var F=n(37),D=n.n(F);n(88);function U(){var e=s.a.useState(!1),t=Object(o.a)(e,2),n=t[0],l=t[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),a=i[0],u=i[1],d=_((function(e){return e.setSettings})),p=_((function(e){return e.settings}));return Object(c.useEffect)((function(){console.log("my settings",p),u(p.isEnabled)}),[p]),Object(S.jsxs)("div",{className:"Settings",children:[Object(S.jsxs)("button",{className:"Settings-button",onClick:function(){l(!0)},children:[Object(S.jsx)("span",{className:"Settings-button-text",children:"Settings"}),Object(S.jsx)("span",{className:"Settings-button-icon",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 1024 1024",children:Object(S.jsx)("path",{fill:"#000000",d:"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"})})})]}),Object(S.jsx)(D.a,{isOpen:n,onRequestClose:function(){l(!1)},portalClassName:"Settings",contentLabel:"Example Modal",children:Object(S.jsxs)("div",{className:"Settings-wrapper",children:[Object(S.jsx)("button",{className:"Settings-close",onClick:function(){return l(!1)},children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",className:"icon icon-close",fill:"none",viewBox:"0 0 18 17",children:Object(S.jsx)("path",{d:"M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z",fill:"currentColor"})})}),Object(S.jsx)("h2",{children:"Settings"}),Object(S.jsx)("div",{className:"a-card a-card--compact",children:Object(S.jsx)("div",{className:"a-card__paddings",children:Object(S.jsxs)("div",{className:"form-area",children:[Object(S.jsx)("div",{className:"form-area__title form-area__title--medium",children:Object(S.jsx)("span",{className:"gwt-InlineLabel",children:"Enable app"})})," ",Object(S.jsxs)("div",{className:"form-area__content form-area__content--no-margin",children:[Object(S.jsx)("div",{className:"text-default",children:Object(S.jsxs)("label",{className:"checkbox micro",children:[Object(S.jsx)("input",{name:"",checked:a,onChange:function(){u(!a),d({isEnabled:!a})},type:"checkbox"})," ",Object(S.jsxs)("div",{"data-on":"Enabled","data-off":"Disabled",children:[" ",Object(S.jsx)("div",{})," "]}),Object(S.jsx)("span",{className:"checkbox__on-text-placeholder",children:"Enabled"}),Object(S.jsx)("span",{className:"checkbox__off-text-placeholder",children:"Disabled"})]})})," "]})]})})})]})})]})}n(89);var R=n(38),J=n.n(R),H=[],T=function(){var e=_((function(e){return e.upsellProducts})),t=_((function(e){return e.products})),n=_((function(e){return e.setActiveFilters})),c=_((function(e){return e.visibleProducts})),s=_((function(e){return e.updateVisibleProducts}));return Object(S.jsx)("div",{className:"Filter",children:Object(S.jsx)(J.a,{options:O,placeholder:"Filter",multi:!0,contentRenderer:function(e){e.props;var t=e.state;return Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(S.jsx)("b",{style:{marginRight:5},children:t.values.length})," Filter",1!==t.values.length?"s":""]})},values:O.filter((function(e){return H.includes(e.label)})),onChange:function(l){if(l.length<=0)return console.log("all prods",t),s(t),void n([]);console.log("filters",l),n(l);var r=P(c,e,l);console.log("filter update",r,"--- visible prods",c),r||s(t),s(r)}})})};var Q=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)(null),l=Object(o.a)(s,2),r=l[0],i=l[1],a=Object(c.useState)(!1),u=Object(o.a)(a,2),d=u[0],p=u[1],f=(_((function(e){return e.upsellProducts})),_((function(e){return e.setSettings})));function b(e){e=JSON.parse(e);var t={};t.upsellProducts=e.hasOwnProperty("upsellProducts")?e.upsellProducts:[],t.settings=e.hasOwnProperty("settings")?e.settings:[],console.log("!Must create new database? ",false,t),console.log("vaue",e),i(t.upsellProducts),f(t.settings),p(!0)}return Object(c.useEffect)((function(){var e=window.EcwidApp.getPayload();n(e),_.subscribe((function(e){return e.upsellProducts}),(function(e){console.log("upsell products update from app!",e)})),_.subscribe((function(e){return e.settings}),(function(e){console.log("settings update from app!",e)})),window.EcwidApp.getPayload()||b(JSON.stringify({upsellProducts:[],settings:m})),window.EcwidApp&&window.EcwidApp.getPayload()&&!d&&window.EcwidApp.getAppPublicConfig((function(e){console.log("has init?",d),b(e)}))}),[]),Object(S.jsx)("div",{className:"EasyUpsellApp",children:Object(S.jsx)("div",{className:"EasyUpsellApp-container",children:Object(S.jsx)("div",{className:"named-area",children:Object(S.jsx)("div",{className:"named-area__body",children:Object(S.jsx)("div",{className:"a-card a-card--compact",children:Object(S.jsxs)("div",{className:"a-card__paddings",children:[Object(S.jsx)("h1",{className:"EasyUpsellApp-title settings-page__title spacing--mt2",children:"EZFY Cart Upsell"}),Object(S.jsx)(U,{}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)(T,{}),Object(S.jsx)(z,{})]}),r?Object(S.jsx)(V,{upsellProducts:r}):Object(S.jsx)(M,{})]})})})})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),l(e),r(e)}))};r.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(Q,{})}),document.getElementById("root")),q()},44:function(e,t,n){},45:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.8177f279.chunk.js.map