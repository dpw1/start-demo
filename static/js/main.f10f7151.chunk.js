(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(10),o=n.n(r),l=(n(31),n(2)),a=n.n(l),i=n(4),u=n(7),d=(n(33),n(12)),p=n.n(d),f=n(8),j=n(25),m=n.n(j),b=n(13);function h(e){console.log("within sanitze: ",e);var t,n=[],c=Object(b.a)(e);try{for(c.s();!(t=c.n()).done;){var s,r=t.value,o=r.id,l=[],a=Object(b.a)(r.bundle);try{for(a.s();!(s=a.n()).done;){var i=s.value;l.push({id:i.id,name:i.name,thumbnailUrl:i.thumbnailUrl,defaultDisplayedPriceFormatted:i.defaultDisplayedPriceFormatted,compareToPriceDiscountFormatted:i.compareToPriceDiscountFormatted,compareToPriceFormatted:i.compareToPriceFormatted,url:i.url})}}catch(u){a.e(u)}finally{a.f()}n.push({id:o,bundle:l})}}catch(u){c.e(u)}finally{c.f()}return console.log("cleaning: ",n),n}var g=m()((function(e,t){return{products:[],populateProducts:function(){var t=Object(i.a)(a.a.mark((function t(){var n,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4":"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),t.next=3,p.a.get(n);case 3:c=t.sent,s=c.data,e({products:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){return window.EcwidApp&&window.EcwidApp.getPayload()?new Promise(function(){var e=Object(i.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("before: ",window.upsellProducts),!window.hasOwnProperty("upsellProducts")){e.next=6;break}return t(window.upsellProducts),e.abrupt("return");case 6:console.log("upsell prods not found",window.upsellProducts),c=[],window.EcwidApp.getAppPublicConfig((function(e){var n=JSON.parse(e);c=c=n.upsellProducts,console.log("xxx ECWID DB DATA",c,window.upsellProducts),window.upsellProducts=c,t(c)}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()):[]},addUpsellProduct:function(){var n=Object(i.a)(a.a.mark((function n(c,s){var r,o,l,i,u,d,p,j,m,b,g,v;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(o=n.t0,l=o.length>=1&&o.filter((function(e){return e.id===c})),i=l.length>=1?l[0]:null,console.log("Adding the bundle product ".concat(s," to ").concat(i?"parent ".concat(i.id):"new parent.")),u=t().getProductById(c),d=t().getProductById(s),console.log("Bundle product: ",d),i&&(p=function(){var e=i.bundle;return Symbol.iterator in Object(e)?Object(f.a)(e):[e]},r=[].concat(Object(f.a)(p()),[d]),console.log("the Bundle : ",r),o=o.filter((function(e){return e.id!==c})),console.log(o)),j={id:c,bundle:r&&r.length>=1?Object(f.a)(new Set(r)):[u,d]},m=Symbol.iterator in Object(o)?Object(f.a)(o):[],b=[].concat(Object(f.a)(m),[j]),g=h(b),console.log("updated -- ",g),window.EcwidApp)try{v=JSON.stringify({upsellProducts:g}),console.log("payload: ",{upsellProducts:g}),window.EcwidApp.setAppPublicConfig(v,(function(){console.log("New upsell product saved!")}))}catch(a){console.error("Couldn't save upsell product. [store.js - addUpsellProduct()]")}console.log("updated: ",g),e({upsellProducts:g});case 26:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getUpsellProductById:function(){var e=Object(i.a)(a.a.mark((function e(n){var c,s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t().upsellProducts){e.next=6;break}return e.next=3,t().upsellProducts();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,t().upsellProducts;case 8:e.t0=e.sent;case 9:return c=e.t0,s=c.filter((function(e){return e.id===n})),r=s.length>=1?s[0].bundle:[],console.log("Bundle products:",s,c,n,r),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUpsellProductById:function(){var n=Object(i.a)(a.a.mark((function n(c,s){var r,o,l,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(r=n.t0,o=[],l=r.find((function(e){return e.id===c}))){n.next=15;break}return console.log("parent is undefined!!!"),n.abrupt("return");case 15:if(console.log("deleted bundle from parent: ",l,c,s),i=l.bundle.filter((function(e){return e.id!==s})),o=i.length<=1?r.filter((function(e){return e.id!==c})):r,l.bundle=i,console.log("Updated after delete: ",o),window.EcwidApp)try{window.EcwidApp.setAppPublicConfig(JSON.stringify({upsellProducts:o}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(a){}e({upsellProducts:o});case 22:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}})),v=(n(53),n(0));var w=n(26);n(55);function O(e){var t=e.product,n=e.parentID,s=g((function(e){return e.addUpsellProduct})),r=g((function(e){return e.getCurrentPopupProduct})),o=g((function(e){return e.getUpsellProductById})),l=(g((function(e){return e.getCurrentPopupProduct})),Object(c.useState)(!0)),d=Object(u.a)(l,2),p=d[0],f=d[1];return Object(c.useEffect)((function(){!function(){var e=Object(i.a)(a.a.mark((function e(c){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(n);case 2:s=e.sent,console.log(s),s.filter((function(e){return e.id===t.id})).length>=1&&f(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]),Object(v.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(v.jsx)("div",{className:"list-element__image",children:Object(v.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(v.jsx)("div",{className:"list-element__content",children:Object(v.jsx)("div",{className:"list-element__info",children:Object(v.jsx)("div",{className:"list-element__header",children:Object(v.jsx)("div",{className:"list-element__main-info",children:Object(v.jsx)("div",{className:"list-element__title",children:Object(v.jsx)("span",{children:t.name})})})})})}),Object(v.jsxs)("button",{disabled:!p,onClick:function(e){return n=t.id,s(r,n),void f(!1);var n},type:"button",className:"btn btn-small btn-primary",children:[Object(v.jsx)("span",{className:"svg-icon",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(v.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(v.jsx)("span",{className:"gwt-InlineLabel",children:p?"Add":"Added"})]})]})}n(56);function x(e){var t=e.parentID,n=g((function(e){return e.products}));return Object(v.jsxs)("div",{className:"PopupCustom",children:[Object(v.jsx)("div",{className:"a-card__paddings",children:Object(v.jsxs)("h3",{className:"PopupCustom-title",children:["Please select the products to upsell:"," "]})}),n.items.map((function(e){if(e.id!==t)return Object(v.jsx)(O,{parentID:t,product:e},e.id)}))]})}n(57);function P(e){var t=e.product,n=e.upsell,s=(g((function(e){return e.getUpsellProductById})),g((function(e){return e.deleteUpsellProductById}))),r=g((function(e){return e.getCurrentPopupProduct})),o=(g((function(e){return e.getProductById})),g((function(e){return e.setCurrentPopupProduct})));Object(c.useEffect)((function(){n&&n.length>=1&&console.log("my upsell: ",n)}),[]),Object(c.useEffect)((function(){console.log("current popup: ",r)}),[r]);return Object(v.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(v.jsx)("div",{className:"list-element__image",children:Object(v.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(v.jsx)("div",{className:"list-element__content",children:Object(v.jsxs)("div",{className:"list-element__info",children:[Object(v.jsx)("div",{className:"list-element__header",children:Object(v.jsx)("div",{className:"list-element__main-info",children:Object(v.jsx)("div",{className:"list-element__title",children:Object(v.jsxs)("span",{children:[t.name," ",t.id]})})})}),Object(v.jsxs)("div",{className:"list-element__status-row",children:[Object(v.jsx)("span",{className:"order__date-wrapper ProductItem-subtitle",children:"Upsell Products:"}),Object(v.jsx)("div",{className:"list-element__data-row",children:n&&n.length>=1&&n.map((function(e){var n=e;if(n.id!==t.id)return Object(v.jsxs)("div",{className:"ProductItem-upsell ProductItem-upsell--".concat(n.id,"-").concat(t.id),children:[Object(v.jsx)("span",{className:"spacing--mr1",children:n.name}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("Delete ".concat(n.id," from the parent ").concat(t.id)),s(t.id,n.id)},className:"icolink",children:Object(v.jsx)("span",{className:"svg-icon",children:Object(v.jsxs)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(v.jsx)("path",{d:"M3.5 5h14a.5.5 0 000-1h-14a.5.5 0 000 1zM5 16a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10zm0 0a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10z"}),Object(v.jsx)("path",{d:"M7.413 4.78L8.52 3.157c.28-.41.743-.656 1.24-.656h1.425a1.5 1.5 0 011.22.628l1.188 1.663.814-.58-1.188-1.663A2.5 2.5 0 0011.184 1.5H9.76c-.828 0-1.6.41-2.067 1.093L6.587 4.22l.826.56zM10 7.5v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm-3 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm6 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0z"})]})})})]},"".concat(n.id,"_").concat(t.id))}))})]})]})}),Object(v.jsx)(w.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),o(t.id)},trigger:function(){return Object(v.jsxs)("button",{type:"button",className:"btn btn-small btn-primary",children:[Object(v.jsx)("span",{className:"svg-icon",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(v.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(v.jsx)("span",{className:"gwt-InlineLabel",children:"Add Upsell Products"})]})},position:"center center",children:Object(v.jsx)(x,{parentID:t.id})})]})}function y(e){var t=e.upsellProducts,n=g((function(e){return e.populateProducts})),s=g((function(e){return e.products}));return Object(c.useEffect)((function(){n(),g.subscribe((function(e,t){console.log("upsell products loaded!")}),(function(e){return e.upsellProducts}))}),[]),Object(v.jsx)("div",{className:"Products  named-area",children:Object(v.jsx)("div",{className:"named-area__body",children:Object(v.jsx)("div",{className:"a-card a-card--compact",children:Object(v.jsxs)("div",{className:"a-card__paddings",children:[Object(v.jsx)("h1",{className:"Products-title settings-page__title spacing--mt2",children:"Products!!!"}),s&&s.hasOwnProperty("items")&&t&&s.items.map((function(e){return Object(v.jsx)(P,{product:e,upsell:t.filter((function(t){return t.id===e.id})).length>=1?t.filter((function(t){return t.id===e.id}))[0].bundle:[]},e.id)}))]})})})})}var N=n(5),_=n.n(N);var k=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),l=Object(u.a)(o,2),d=(l[0],l[1],Object(c.useState)(null)),p=Object(u.a)(d,2),f=p[0],j=p[1],m=g((function(e){return e.upsellProducts}));Object(c.useEffect)((function(){var e=window.EcwidApp.getPayload();r(e)}),[]),Object(c.useEffect)((function(){window.EcwidApp&&window.EcwidApp.getPayload()&&window.EcwidApp.getAppPublicConfig((function(e){e||window.EcwidApp.setAppPublicConfig(JSON.stringify({upsellProducts:[]}),(function(){console.log("New upasell product set up!")}))})),Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,window.upsellProducts=t,j(t),console.log("There are ".concat(t.length," products with upsells."));case 6:case"end":return e.stop()}}),e)})))()}),[n]);var b=function(){return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(v.jsx)(_.a,{count:1,height:50}),Object(v.jsx)(_.a,{count:3,height:7})]}),Object(v.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(v.jsx)(_.a,{count:1,height:50}),Object(v.jsx)(_.a,{count:3,height:7})]}),Object(v.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(v.jsx)(_.a,{count:1,height:50}),Object(v.jsx)(_.a,{count:3,height:7})]})]})};return Object(v.jsx)("div",{className:"EasyUpsellApp",children:Object(v.jsx)("div",{className:"EasyUpsellApp-container",children:f?Object(v.jsx)(y,{upsellProducts:f}):Object(v.jsx)(b,{})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root")),A()}},[[61,1,2]]]);
//# sourceMappingURL=main.f10f7151.chunk.js.map