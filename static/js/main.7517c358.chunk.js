(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),a=n.n(s),i=(n(30),n(5)),o=(n(31),n(12)),l=n.n(o),u=(n(51),n(6)),d=n.n(u),p=n(0);var f=n(2),j=n.n(f),b=n(4),m=n(24),h=(n(54),n(7)),x=n(25),v=n.n(x)()((function(e,t){return{products:[],populateProducts:function(){var t=Object(b.a)(j.a.mark((function t(){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4":"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),t.next=3,l.a.get(n);case 3:c=t.sent,r=c.data,e({products:r});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){return window.EcwidApp&&window.EcwidApp.getPayload()?new Promise(function(){var e=Object(b.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=[],r=JSON.parse(window.Ecwid.getAppPublicConfig("easy-upsell-dev")),console.log("test: ",r),window.EcwidApp.getAppPublicConfig((function(e){var n=JSON.parse(e);console.log("xxx ECWID PRE DATA",n),c=c=n.upsellProducts,console.log("xxx ECWID DB DATA",c),t(c)}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()):[]},addUpsellProduct:function(){var n=Object(b.a)(j.a.mark((function n(c,r){var s,a,i,o,l,u,d,p,f,b;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(a=n.t0,i=a.length>=1&&a.filter((function(e){return e.id===c})),o=i.length>=1?i[0]:null,console.log("Adding the bundle product ".concat(r," to ").concat(o?"parent ".concat(o.id):"new parent.")),l=t().getProductById(c),u=t().getProductById(r),o&&(d=function(){var e=o.bundle;return Symbol.iterator in Object(e)?Object(h.a)(e):[e]},s=[].concat(Object(h.a)(d()),[u]),a=a.filter((function(e){return e.id!==c})),console.log(a)),p={id:c,bundle:s&&s.length>=1?Object(h.a)(new Set(s)):[l,u]},f=function(){return Symbol.iterator in Object(a)?Object(h.a)(a):[]}(),b=[].concat(Object(h.a)(f),[p]),window.EcwidApp)try{window.EcwidApp.setAppPublicConfig(JSON.stringify({upsellProducts:b}),(function(){console.log("New upsell product saved!")}))}catch(j){console.error("Couldn't save upsell product. [store.js - addUpsellProduct()]")}e({upsellProducts:b});case 22:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getUpsellProductById:function(){var e=Object(b.a)(j.a.mark((function e(n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t().upsellProducts){e.next=6;break}return e.next=3,t().upsellProducts();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,t().upsellProducts;case 8:e.t0=e.sent;case 9:return c=e.t0,console.log(c),r=c.filter((function(e){return e.id===n})),e.abrupt("return",r.length>=1?r[0].bundle:[]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUpsellProductById:function(){var n=Object(b.a)(j.a.mark((function n(c,r){var s,a,i,o;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t().upsellProducts){n.next=6;break}return n.next=3,t().upsellProducts();case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,t().upsellProducts;case 8:n.t0=n.sent;case 9:if(s=n.t0,a=[],i=s.find((function(e){return e.id===c}))){n.next=15;break}return console.log("parent is undefined!!!"),n.abrupt("return");case 15:if(console.log("deleted bundle from parent: ",i,c,r),o=i.bundle.filter((function(e){return e.id!==r})),a=o.length<=1?s.filter((function(e){return e.id!==c})):s,i.bundle=o,console.log("Updated after delete: ",a),window.EcwidApp)try{window.EcwidApp.setAppPublicConfig(JSON.stringify({upsellProducts:a}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(l){}e({upsellProducts:a});case 22:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}));function O(e){var t=e.product,n=e.parentID,r=v((function(e){return e.addUpsellProduct})),s=v((function(e){return e.getCurrentPopupProduct})),a=v((function(e){return e.getUpsellProductById})),o=(v((function(e){return e.getCurrentPopupProduct})),Object(c.useState)(!0)),l=Object(i.a)(o,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){!function(){var e=Object(b.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n);case 2:e.sent.filter((function(e){return e.id===t.id})).length>=1&&d(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]),Object(p.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(p.jsx)("div",{className:"list-element__image",children:Object(p.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(p.jsx)("div",{className:"list-element__content",children:Object(p.jsx)("div",{className:"list-element__info",children:Object(p.jsx)("div",{className:"list-element__header",children:Object(p.jsx)("div",{className:"list-element__main-info",children:Object(p.jsx)("div",{className:"list-element__title",children:Object(p.jsx)("span",{children:t.name})})})})})}),Object(p.jsxs)("button",{disabled:!u,onClick:function(e){return n=t.id,r(s,n),void d(!1);var n},type:"button",className:"btn btn-small btn-primary",children:[Object(p.jsx)("span",{className:"svg-icon",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(p.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(p.jsx)("span",{className:"gwt-InlineLabel",children:u?"Add":"Added"})]})]})}n(55);function g(e){var t=e.parentID,n=v((function(e){return e.products}));return Object(p.jsxs)("div",{className:"PopupCustom",children:[Object(p.jsx)("div",{className:"a-card__paddings",children:Object(p.jsxs)("h3",{className:"PopupCustom-title",children:["Please select the products to upsell:"," "]})}),n.items.map((function(e){if(e.id!==t)return Object(p.jsx)(O,{parentID:t,product:e},e.id)}))]})}n(56);function w(e){var t=e.product,n=Object(c.useState)([]),r=Object(i.a)(n,2),s=r[0],a=r[1],o=v((function(e){return e.upsellProducts})),l=v((function(e){return e.getUpsellProductById})),u=v((function(e){return e.deleteUpsellProductById})),d=v((function(e){return e.getCurrentPopupProduct})),f=(v((function(e){return e.getProductById})),v((function(e){return e.setCurrentPopupProduct}))),h=function(){var e=Object(b.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t.id);case 2:c=e.sent,console.log("my ID and  bundle: ",c),a(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(j.a.mark((function e(n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}if("function"!==typeof n.upsellProducts){e.next=7;break}return e.next=4,n.upsellProducts();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,n.upsellProducts;case 9:e.t0=e.sent;case 10:c=e.t0,e.next=23;break;case 13:if("function"!==typeof o){e.next=19;break}return e.next=16,o();case 16:e.t1=e.sent,e.next=22;break;case 19:return e.next=21,o;case 21:e.t1=e.sent;case 22:c=e.t1;case 23:if(!(c&&c.length<=0)){e.next=26;break}return a([]),e.abrupt("return");case 26:if(r=c.filter((function(e){return e.id===t.id}))[0],console.log("ProducItem.js updating!",r),r){e.next=31;break}return a([]),e.abrupt("return");case 31:h(t.id);case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){!function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(),v.subscribe(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.useEffect)((function(){console.log("current popup: ",d)}),[d]);return Object(p.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(p.jsx)("div",{className:"list-element__image",children:Object(p.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(p.jsx)("div",{className:"list-element__content",children:Object(p.jsxs)("div",{className:"list-element__info",children:[Object(p.jsx)("div",{className:"list-element__header",children:Object(p.jsx)("div",{className:"list-element__main-info",children:Object(p.jsx)("div",{className:"list-element__title",children:Object(p.jsxs)("span",{children:[t.name," ",t.id]})})})}),Object(p.jsxs)("div",{className:"list-element__status-row",children:[Object(p.jsx)("span",{className:"order__date-wrapper ProductItem-subtitle",children:"Upsell Products:"}),Object(p.jsx)("div",{className:"list-element__data-row",children:s&&s.map((function(e){var n=e;if(n.id!==t.id)return Object(p.jsxs)("div",{className:"ProductItem-upsell ProductItem-upsell--".concat(n.id,"-").concat(t.id),children:[Object(p.jsx)("span",{className:"spacing--mr1",children:n.name}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("Delete ".concat(n.id," from the parent ").concat(t.id)),u(t.id,n.id)},className:"icolink",children:Object(p.jsx)("span",{className:"svg-icon",children:Object(p.jsxs)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(p.jsx)("path",{d:"M3.5 5h14a.5.5 0 000-1h-14a.5.5 0 000 1zM5 16a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10zm0 0a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10z"}),Object(p.jsx)("path",{d:"M7.413 4.78L8.52 3.157c.28-.41.743-.656 1.24-.656h1.425a1.5 1.5 0 011.22.628l1.188 1.663.814-.58-1.188-1.663A2.5 2.5 0 0011.184 1.5H9.76c-.828 0-1.6.41-2.067 1.093L6.587 4.22l.826.56zM10 7.5v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm-3 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm6 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0z"})]})})})]},"".concat(n.id,"_").concat(t.id))}))})]})]})}),Object(p.jsx)(m.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),f(t.id)},trigger:function(){return Object(p.jsxs)("button",{type:"button",className:"btn btn-small btn-primary",children:[Object(p.jsx)("span",{className:"svg-icon",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(p.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(p.jsx)("span",{className:"gwt-InlineLabel",children:"Add Upsell Products"})]})},position:"center center",children:Object(p.jsx)(g,{parentID:t.id})})]})}function P(e){var t=v((function(e){return e.populateProducts})),n=v((function(e){return e.products}));Object(c.useEffect)((function(){t(),v.subscribe((function(e,t){console.log("upsell products loaded!")}),(function(e){return e.upsellProducts}))}),[]);var s=function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(p.jsx)(d.a,{count:1,height:50}),Object(p.jsx)(d.a,{count:3,height:7})]}),Object(p.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(p.jsx)(d.a,{count:1,height:50}),Object(p.jsx)(d.a,{count:3,height:7})]}),Object(p.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(p.jsx)(d.a,{count:1,height:50}),Object(p.jsx)(d.a,{count:3,height:7})]})]})};return Object(p.jsx)("div",{className:"Products  named-area",children:Object(p.jsx)("div",{className:"named-area__body",children:Object(p.jsx)("div",{className:"a-card a-card--compact",children:Object(p.jsxs)("div",{className:"a-card__paddings",children:[Object(p.jsx)("h1",{className:"Products-title settings-page__title spacing--mt2",children:"Products"}),n&&n.hasOwnProperty("items")?n.items.map((function(e){return Object(p.jsx)(w,{product:e},e.id)})):Object(p.jsx)(s,{})]})})})})}var y=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(i.a)(s,2);return a[0],a[1],Object(c.useEffect)((function(){r(window.EcwidApp.getPayload())}),[]),Object(c.useEffect)((function(){window.EcwidApp&&window.EcwidApp.getPayload()&&window.EcwidApp.getAppPublicConfig((function(e){})),console.log("rr my store data: ",n)}),[n]),Object(p.jsx)("div",{className:"EasyUpsellApp",children:Object(p.jsx)("div",{className:"EasyUpsellApp-container",children:Object(p.jsx)(P,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.7517c358.chunk.js.map