(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},70:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(9),l=n.n(r),o=(n(39),n(2)),i=(n(40),n(14)),a=n.n(i),u=n(8),d=n(3),p=n.n(d),f=n(5),b=n(15),j=n.n(b),h=n(17),m={isEnabled:!1};function g(e){console.log("within sanitze: ",e);var t,n=function(e){return e.hasOwnProperty("options")?e.options.length:e.hasOwnProperty("totalOptions")?e.totalOptions:0},c=[],s=Object(h.a)(e);try{for(s.s();!(t=s.n()).done;){var r,l=t.value,o=l.id,i=[],a=Object(h.a)(l.bundle);try{for(a.s();!(r=a.n()).done;){var u=r.value;console.log("my upsell",u),i.push({id:u.id,name:u.name,thumbnailUrl:u.thumbnailUrl,defaultDisplayedPriceFormatted:u.defaultDisplayedPriceFormatted,compareToPriceDiscountFormatted:u.compareToPriceDiscountFormatted,compareToPriceFormatted:u.compareToPriceFormatted,url:u.url,totalOptions:n(u)})}}catch(d){a.e(d)}finally{a.f()}c.push({id:o,bundle:i})}}catch(d){s.e(d)}finally{s.f()}return console.log("cleaning: ",c),c}var O=n(16),v=j()(Object(O.subscribeWithSelector)((function(e,t){return{settings:m,products:[],visibleProducts:[],popupVisibleProducts:[],populateProducts:function(){var t=Object(f.a)(p.a.mark((function t(){var n,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4":"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),t.next=3,a.a.get(n);case 3:c=t.sent,s=c.data,e({products:s,visibleProducts:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),updateVisibleProducts:function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({visibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updatePopupVisibleProducts:function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({popupVisibleProducts:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){return window.EcwidApp&&window.EcwidApp.getPayload()?new Promise(function(){var e=Object(f.a)(p.a.mark((function e(t,n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("before: ",window.upsellProducts),!window.hasOwnProperty("upsellProducts")){e.next=6;break}return t(window.upsellProducts),e.abrupt("return");case 6:console.log("upsell prods not found",window.upsellProducts),c=[],window.EcwidApp.getAppPublicConfig((function(e){var n=JSON.parse(e);if(!(c=c=n.upsellProducts))return window.upsellProducts=[],void t([]);console.log("xxx 33ECWID DB DATA",n,c,window.upsellProducts),window.upsellProducts=c,t(c)}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()):[]},addUpsellProduct:function(){var n=Object(f.a)(p.a.mark((function n(c,s){var r,l,o,i,a,d,f,b,j,h,m,O,v;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(l=n.t0,o=l.length>=1&&l.filter((function(e){return e.id===c})),i=o.length>=1?o[0]:null,a=t().getProductById(c),d=t().getProductById(s),i&&(f=function(){var e=i.bundle;return Symbol.iterator in Object(e)?Object(u.a)(e):[e]},r=[].concat(Object(u.a)(f()),[d]),l=l.filter((function(e){return e.id!==c})),console.log(l)),b={id:c,bundle:r&&r.length>=1?Object(u.a)(new Set(r)):[a,d]},j=Symbol.iterator in Object(l)?Object(u.a)(l):[],h=[].concat(Object(u.a)(j),[b]),m=g(h),console.log("updated -- ",m),!window.EcwidApp){n.next=25;break}return n.next=23,t().settings;case 23:O=n.sent;try{v=JSON.stringify({settings:O,upsellProducts:m}),console.log("payload: ",{upsellProducts:m}),window.EcwidApp.setAppPublicConfig(v,(function(){console.log("New upsell product saved!")}))}catch(p){console.error("Couldn't save upsell product. [store.js - addUpsellProduct()]")}case 25:console.log("updated: ",m),e({upsellProducts:m});case 27:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getUpsellProductById:function(){var e=Object(f.a)(p.a.mark((function e(n){var c,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t().upsellProducts){e.next=6;break}return e.next=3,t().upsellProducts();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,t().upsellProducts;case 8:e.t0=e.sent;case 9:return c=e.t0,s=c.filter((function(e){return e.id===n})),r=s.length>=1?s[0].bundle:[],console.log("Bundle products:",s,c,n,r),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUpsellProductById:function(){var n=Object(f.a)(p.a.mark((function n(c,s){var r,l,o,i,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(r=n.t0,l=[],o=r.find((function(e){return e.id===c}))){n.next=15;break}return console.log("parent is undefined!!!"),n.abrupt("return");case 15:if(console.log("deleted bundle from parent: ",o,c,s),i=o.bundle.filter((function(e){return e.id!==s})),l=i.length<=1?r.filter((function(e){return e.id!==c})):r,o.bundle=i,console.log("Updated after delete: ",l),!window.EcwidApp){n.next=25;break}return n.next=23,t().settings;case 23:a=n.sent;try{window.EcwidApp.setAppPublicConfig(JSON.stringify({settings:a,upsellProducts:l}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(u){}case 25:e({upsellProducts:l});case 26:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),setSettings:function(){var n=Object(f.a)(p.a.mark((function n(c){var s,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c){n.next=2;break}throw new Error("no settings object");case 2:if("function"!==typeof t().upsellProducts){n.next=8;break}return n.next=5,t().upsellProducts();case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,t().upsellProducts;case 10:n.t0=n.sent;case 11:if(s=n.t0,window.EcwidApp)try{r={settings:c,upsellProducts:s},window.EcwidApp.setAppPublicConfig(JSON.stringify(r),(function(e){console.log("Public config saved. Payload: ",r)})),console.log("Saved settings in Database")}catch(l){}e({settings:c});case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}))),x=(n(61),n(0));var w=n(33);n(12);function P(e){var t=e.product,n=e.parentID,s=v((function(e){return e.addUpsellProduct})),r=v((function(e){return e.getCurrentPopupProduct})),l=v((function(e){return e.getUpsellProductById})),i=(v((function(e){return e.getCurrentPopupProduct})),Object(c.useState)(!0)),a=Object(o.a)(i,2),u=a[0],d=a[1];return Object(c.useEffect)((function(){!function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n);case 2:e.sent.filter((function(e){return e.id===t.id})).length>=1&&d(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]),Object(x.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(x.jsx)("div",{className:"list-element__image",children:Object(x.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(x.jsx)("div",{className:"list-element__content",children:Object(x.jsx)("div",{className:"list-element__info",children:Object(x.jsx)("div",{className:"list-element__header",children:Object(x.jsx)("div",{className:"list-element__main-info",children:Object(x.jsx)("div",{className:"list-element__title",children:Object(x.jsx)("span",{children:t.name})})})})})}),Object(x.jsxs)("button",{disabled:!u,onClick:function(e){return n=t.id,s(r,n),void d(!1);var n},type:"button",className:"btn btn-small btn-primary",children:[Object(x.jsx)("span",{className:"svg-icon",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(x.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(x.jsx)("span",{className:"gwt-InlineLabel",children:u?"Add":"Added"})]})]})}n(63),n(64);function N(e){var t=e.allProducts,n=Object(c.useState)(""),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),u=(a[0],a[1],v((function(e){return e.updatePopupVisibleProducts}))),d=v((function(e){return e.popupVisibleProducts}));v((function(e){return e.products}));return Object(c.useEffect)((function(){v.subscribe((function(e){return e.popupVisibleProducts}),(function(e){console.log("prods",e)}))}),[]),Object(c.useEffect)((function(){if(console.log("popup search all produs",t,r.length),r.length<=0)u(t);else{var e=t.items.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())?e:null}));console.log("res: ",e);var n=JSON.parse(JSON.stringify(d));n.items=e,console.log(n),u(n)}}),[r]),Object(x.jsx)("div",{className:"PopupSearch",children:Object(x.jsxs)("div",{className:"field field--medium",children:[Object(x.jsx)("span",{className:"fieldset__svg-icon",style:{},children:Object(x.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"})})})," ",Object(x.jsx)("input",{value:r,type:"text",className:"field__input",id:"gwt-uid-3188",placeholder:"Search product!","aria-label":"Search product",onChange:function(e){return l(e.target.value)}})," ",Object(x.jsx)("span",{className:"field-state--success",children:Object(x.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"})})})," ",Object(x.jsx)("span",{className:"field-state--close",children:Object(x.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"})})})]})})}function y(e){var t=e.parentID,n=Object(c.useState)([]),s=Object(o.a)(n,2),r=(s[0],s[1],v((function(e){return e.products}))),l=v((function(e){return e.popupVisibleProducts})),i=v((function(e){return e.updatePopupVisibleProducts})),a=Object(c.useState)([]),u=Object(o.a)(a,2),d=u[0],p=u[1];return Object(c.useEffect)((function(){console.log("updating popups visible",r);var e=JSON.parse(JSON.stringify(r));e.items=r.items.filter((function(e){return e.id!==t})),i(e),p(e),v.subscribe((function(e){return e.popupVisibleProducts}),(function(e){console.log("wihtn subscribe",e)}))}),[]),Object(x.jsxs)("div",{className:"PopupCustom",children:[Object(x.jsx)("div",{className:"a-card__paddings",children:Object(x.jsx)("h3",{className:"PopupCustom-title",children:"Products to upsell : "})}),Object(x.jsx)(N,{allProducts:d}),Object(x.jsx)("div",{className:"PopupCustom-products",children:l&&l.hasOwnProperty("items")&&l.items.length>=1&&l.items.map((function(e){return Object(x.jsx)(P,{parentID:t,product:e},e.id)}))})]})}n(65);function _(e){var t=e.product,n=e.upsell,s=(v((function(e){return e.getUpsellProductById})),v((function(e){return e.deleteUpsellProductById}))),r=v((function(e){return e.getCurrentPopupProduct})),l=(v((function(e){return e.getProductById})),v((function(e){return e.setCurrentPopupProduct})));Object(c.useEffect)((function(){console.log("my upsell: ",n),n&&n.length}),[]),Object(c.useEffect)((function(){console.log("current popup: ",r)}),[r]);return Object(x.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(x.jsx)("div",{className:"list-element__image",children:Object(x.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(x.jsx)("div",{className:"list-element__content",children:Object(x.jsxs)("div",{className:"list-element__info",children:[Object(x.jsx)("div",{className:"list-element__header",children:Object(x.jsx)("div",{className:"list-element__main-info",children:Object(x.jsx)("div",{className:"list-element__title",children:Object(x.jsxs)("span",{children:[t.name," ",t.id]})})})}),Object(x.jsx)("div",{className:"list-element__status-row","data-upsell-products":n.hasOwnProperty("bundle")?n.bundle.length:0,children:Object(x.jsx)("div",{className:"list-element__data-row",children:n&&n.hasOwnProperty("bundle")&&n.bundle.map((function(e){var n=e;if(n.id!==t.id)return Object(x.jsxs)("div",{className:"ProductItem-upsell ProductItem-upsell--".concat(n.id,"-").concat(t.id),children:[Object(x.jsx)("img",{className:"ProductItem-image",src:n.thumbnailUrl,alt:""}),Object(x.jsx)("span",{className:"ProductItem-title spacing--mr1",children:n.name}),Object(x.jsx)("button",{className:"ProductItem-delete icolink",onClick:function(e){e.preventDefault(),console.log("Delete ".concat(n.id," from the parent ").concat(t.id)),s(t.id,n.id);try{var c=window.document.querySelector(".ProductItem-upsell--".concat(n.id,"-").concat(t.id));c&&(c.style.display="none")}catch(r){console.log("Removing error",r)}},children:Object(x.jsxs)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(x.jsx)("path",{d:"M7 0h4l1 2H6l1-2z"}),Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 3c-.5523 0-1 .4477-1 1s.4477 1 1 1v11c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V5c.5523 0 1-.4477 1-1s-.4477-1-1-1H2zm12 13V5H4v11h10z"}),Object(x.jsx)("path",{d:"M6 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6zM10 7.5c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6z"})]})})]},"".concat(n.id,"_").concat(t.id))}))})})]})}),Object(x.jsx)(w.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),l(t.id)},trigger:function(){return Object(x.jsxs)("button",{type:"button",className:"btn btn-small btn-primary",children:[Object(x.jsx)("span",{className:"svg-icon",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(x.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(x.jsx)("span",{className:"gwt-InlineLabel",children:"Add Upsell Products"})]})},position:"center center",children:Object(x.jsx)(y,{parentID:t.id})})]})}var S=n(6),C=n.n(S),E=(n(66),function(){return Object(x.jsxs)("div",{className:"Placeholder",children:[Object(x.jsxs)("div",{className:"Placeholder-item",children:[Object(x.jsx)(C.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(x.jsx)(C.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(x.jsx)(C.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]}),Object(x.jsxs)("div",{className:"Placeholder-item",children:[Object(x.jsx)(C.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(x.jsx)(C.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(x.jsx)(C.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]}),Object(x.jsxs)("div",{className:"Placeholder-item",children:[Object(x.jsx)(C.a,{className:"Placeholder-image",highlightColor:"#ff0000",count:1}),Object(x.jsx)(C.a,{className:"Placeholder-title",highlightColor:"#ff0000",width:Math.floor(151*Math.random()+150),count:1}),Object(x.jsx)(C.a,{className:"Placeholder-button",highlightColor:"#ff0000",count:1})]})]})});function k(e){var t=e.upsellProducts,n=v((function(e){return e.populateProducts})),s=v((function(e){return e.visibleProducts})),r=Object(c.useState)(t),l=Object(o.a)(r,2),i=l[0],a=l[1];return Object(c.useEffect)((function(){n(),console.log("total prods",s),v.subscribe((function(e){return e.upsellProducts}),(function(e){a(e),console.log("visible upsells updated, let's upd!",e)}))}),[]),Object(x.jsx)("div",{className:"Products  named-area",children:Object(x.jsx)("div",{className:"Products-items",children:s&&s.hasOwnProperty("items")?s.items.map((function(e){return Object(x.jsx)(_,{product:e,upsell:i.filter((function(t){return t.id===e.id})).length>=1?i.filter((function(t){return t.id===e.id}))[0]:[]},e.id)})):Object(x.jsx)(E,{})})})}n(70);function A(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),l=Object(o.a)(r,2),i=l[0],a=l[1],u=Object(c.useState)([]),d=Object(o.a)(u,2),p=(d[0],d[1],!1),f=(v((function(e){return e.products})),v((function(e){return e.updateVisibleProducts})));return Object(c.useEffect)((function(){v.subscribe((function(e){return e.products}),(function(e){p||e.hasOwnProperty("items")&&e.items.length>=1&&(a(e),console.log("SEARCH!!!",e),p=!0)}))}),[]),Object(c.useEffect)((function(){if(console.log(i),n.length<=0&&(console.log("updating all products",i),f(i)),i&&i.items&&i.items.length>=1){var e=i.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())?e:null}));console.log("Found this: ",e);var t=JSON.parse(JSON.stringify(i));t.items=e,console.log(t),f(t)}}),[n]),Object(x.jsx)("div",{className:"Search",children:Object(x.jsxs)("div",{className:"field field--medium",children:[Object(x.jsx)("span",{className:"fieldset__svg-icon",style:{},children:Object(x.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 3.866-3.134 7-7 7-1.5724 0-3.0236-.5184-4.1922-1.3936l-4.1007 4.1007c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l4.1007-4.1007C4.5184 10.0236 4 8.5723 4 7c0-3.866 3.134-7 7-7s7 3.134 7 7zm-2 0c0 2.7614-2.2386 5-5 5S6 9.7614 6 7s2.2386-5 5-5 5 2.2386 5 5z"})})})," ",Object(x.jsx)("input",{value:n,type:"text",className:"field__input",id:"gwt-uid-3188",placeholder:"Search product","aria-label":"Search product",onChange:function(e){return s(e.target.value)}})," ",Object(x.jsx)("span",{className:"field-state--success",children:Object(x.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6508 2.7408c.4193.3594.4679.9907.1085 1.41l-9 10.5c-.3791.4423-1.0545.4682-1.4664.0563l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0l4.2364 4.2364 8.2972-9.68c.3595-.4194.9908-.468 1.4101-.1085z"})})})," ",Object(x.jsx)("span",{className:"field-state--close",children:Object(x.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858l5.7929-5.793c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L10.4142 9l5.7929 5.7929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L9 10.4142l-5.7929 5.7929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L7.5858 9l-5.793-5.7929c-.3904-.3905-.3904-1.0237 0-1.4142z"})})})]})})}var I=n(34),B=n.n(I);n(82);function V(){var e=s.a.useState(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(c.useState)(!1),i=Object(o.a)(l,2),a=i[0],u=i[1],d=v((function(e){return e.setSettings})),p=v((function(e){return e.settings}));return Object(c.useEffect)((function(){console.log("my settings",p),u(p.isEnabled)}),[p]),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){r(!0)},children:"Settings"}),Object(x.jsx)(B.a,{isOpen:n,onRequestClose:function(){r(!1)},portalClassName:"Settings",contentLabel:"Example Modal",children:Object(x.jsxs)("div",{className:"Settings-wrapper",children:[Object(x.jsx)("h2",{children:"Settings"}),Object(x.jsx)("div",{className:"a-card a-card--compact",children:Object(x.jsx)("div",{className:"a-card__paddings",children:Object(x.jsxs)("div",{className:"form-area",children:[Object(x.jsx)("div",{className:"form-area__title form-area__title--medium",children:Object(x.jsx)("span",{className:"gwt-InlineLabel",children:"Enable app"})})," ",Object(x.jsxs)("div",{className:"form-area__content form-area__content--no-margin",children:[Object(x.jsx)("div",{className:"text-default",children:Object(x.jsxs)("label",{className:"checkbox micro",children:[Object(x.jsx)("input",{name:"",checked:a,onChange:function(){u(!a),d({isEnabled:!a})},type:"checkbox"})," ",Object(x.jsxs)("div",{"data-on":"Enabled","data-off":"Disabled",children:[" ",Object(x.jsx)("div",{})," "]}),Object(x.jsx)("span",{className:"checkbox__on-text-placeholder",children:"Enabled"}),Object(x.jsx)("span",{className:"checkbox__off-text-placeholder",children:"Disabled"})]})})," "]})]})})})]})})]})}var M=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],a=Object(c.useState)(!1),u=Object(o.a)(a,2),d=u[0],p=u[1],f=(v((function(e){return e.upsellProducts})),v((function(e){return e.setSettings})));function b(e){e=JSON.parse(e);var t={};t.upsellProducts=e.hasOwnProperty("upsellProducts")?e.upsellProducts:[],t.settings=e.hasOwnProperty("settings")?e.settings:[],console.log("!Must create new database? ",false,t),console.log("vaue",e),i(t.upsellProducts),f(t.settings),p(!0)}return Object(c.useEffect)((function(){var e=window.EcwidApp.getPayload();n(e),v.subscribe((function(e){return e.upsellProducts}),(function(e){console.log("upsell products update from app!",e)})),v.subscribe((function(e){return e.settings}),(function(e){console.log("settings update from app!",e)})),window.EcwidApp.getPayload()||b(JSON.stringify({upsellProducts:[],settings:m})),window.EcwidApp&&window.EcwidApp.getPayload()&&!d&&window.EcwidApp.getAppPublicConfig((function(e){console.log("has init?",d),b(e)}))}),[]),Object(x.jsx)("div",{className:"EasyUpsellApp",children:Object(x.jsx)("div",{className:"EasyUpsellApp-container",children:Object(x.jsx)("div",{className:"named-area",children:Object(x.jsx)("div",{className:"named-area__body",children:Object(x.jsx)("div",{className:"a-card a-card--compact",children:Object(x.jsxs)("div",{className:"a-card__paddings",children:[Object(x.jsx)("h1",{className:"Products-title settings-page__title spacing--mt2",children:"EZFY Cart Upsell!"}),Object(x.jsx)(V,{}),Object(x.jsx)(A,{}),l?Object(x.jsx)(k,{upsellProducts:l}):Object(x.jsx)(E,{})]})})})})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),r(e),l(e)}))};l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),D()}},[[83,1,2]]]);
//# sourceMappingURL=main.e2f64281.chunk.js.map