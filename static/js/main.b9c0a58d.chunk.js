(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(8),l=n.n(i),a=(n(29),n(3)),r=(n(30),n(11)),o=n.n(r),d=(n(49),n(4)),u=n.n(d),p=n(0);var j=n(22),m=(n(51),n(6)),b=n(5),h=n.n(b),f=n(23),O=n(24),v=Object(O.a)((function(e,t){return{products:[],populateProducts:function(){var t=Object(f.a)(h.a.mark((function t(){var n,c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4":"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),t.next=3,o.a.get(n);case 3:c=t.sent,s=c.data,e({products:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:function(){var e=[];return window.EcwidApp&&window.EcwidApp.getPayload()&&window.EcwidApp.getAppPublicConfig((function(t){e=JSON.parse(t).upsellProducts,console.log("Ecwid xxx data:",e)})),e},addUpsellProduct:function(n,c){var s,i="function"===typeof t().upsellProducts?t().upsellProducts():t().upsellProducts,l=i.length>=1&&i.filter((function(e){return e.id===n})),a=l.length>=1?l[0]:null;if(console.log("I wanna add the bundle product ".concat(c," to ").concat(a?"parent ".concat(a.id):"new parent.")),a){s=[].concat(Object(m.a)(function(){var e=a.bundle;return Symbol.iterator in Object(e)?Object(m.a)(e):[e]}()),[c]),i=i.filter((function(e){return e.id!==n}))}var r={id:n,bundle:s&&s.length>=1?Object(m.a)(new Set(s)):[c]},o=Symbol.iterator in Object(i)?Object(m.a)(i):[],d=[].concat(Object(m.a)(o),[r]);if(window.EcwidApp)try{window.EcwidApp.setAppPublicConfig(JSON.stringify({upsellProducts:d}),(function(){console.log("Public config saved!")})),console.log("Saved upsell products in Database")}catch(u){}console.log("updated: ",d),e({upsellProducts:d})},getUpsellProductById:function(e){var n=("function"===typeof t().upsellProducts?t().upsellProducts():t().upsellProducts).filter((function(t){return t.id===e}));return n.length>=1?n[0].bundle:[]},getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}));function g(e){var t=e.product,n=v((function(e){return e.addUpsellProduct})),c=v((function(e){return e.getCurrentPopupProduct}));return Object(p.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(p.jsx)("div",{className:"list-element__image",children:Object(p.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(p.jsx)("div",{className:"list-element__content",children:Object(p.jsx)("div",{className:"list-element__info",children:Object(p.jsx)("div",{className:"list-element__header",children:Object(p.jsx)("div",{className:"list-element__main-info",children:Object(p.jsx)("div",{className:"list-element__title",children:Object(p.jsx)("span",{children:t.name})})})})})}),Object(p.jsxs)("button",{onClick:function(e){return s=t.id,void n(c,s);var s},type:"button",className:"btn btn-small btn-primary",children:[Object(p.jsx)("span",{className:"svg-icon",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(p.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(p.jsx)("span",{className:"gwt-InlineLabel",children:"Add"})]})]})}n(53);function x(e){var t=e.parentID,n=v((function(e){return e.products}));return Object(p.jsxs)("div",{className:"PopupCustom",children:[Object(p.jsx)("div",{className:"a-card__paddings",children:Object(p.jsx)("h3",{children:"Please select the products to upsell: "})}),n.items.map((function(e){if(e.id!==t)return Object(p.jsx)(g,{product:e},e.id)}))]})}n(54);function w(e){var t=e.product,n=Object(c.useState)([]),s=Object(a.a)(n,2),i=s[0],l=s[1],r=(v((function(e){return"function"===typeof e.upsellProducts?e.upsellProducts():e.upsellProducts})),v((function(e){return e.getUpsellProductById}))),o=v((function(e){return e.getProductById})),d=v((function(e){return e.setCurrentPopupProduct})),u=function(e){var n=r(t.id);console.log("my ID and  bundle: ",t.id,n),l(n)};v.subscribe((function(e,n){u(t.id)}),(function(e){return e.upsellProducts}));Object(c.useEffect)((function(){u(t.id)}),[]);return Object(p.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(p.jsx)("div",{className:"list-element__image",children:Object(p.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(p.jsx)("div",{className:"list-element__content",children:Object(p.jsxs)("div",{className:"list-element__info",children:[Object(p.jsx)("div",{className:"list-element__header",children:Object(p.jsx)("div",{className:"list-element__main-info",children:Object(p.jsx)("div",{className:"list-element__title",children:Object(p.jsxs)("span",{children:[t.name," ",t.id]})})})}),Object(p.jsxs)("div",{className:"list-element__status-row",children:[Object(p.jsx)("span",{className:"order__date-wrapper",children:"Upsell Products:"}),Object(p.jsx)("div",{className:"list-element__data-row",children:i&&i.map((function(e){console.log("look e",e);var t=o(e);return Object(p.jsxs)("div",{className:"ProductItem-upsell",children:[Object(p.jsx)("span",{className:"spacing--mr1",children:t.name}),Object(p.jsx)("a",{className:"icolink",href:"#",children:Object(p.jsx)("span",{className:"svg-icon",children:Object(p.jsxs)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(p.jsx)("path",{d:"M3.5 5h14a.5.5 0 000-1h-14a.5.5 0 000 1zM5 16a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10zm0 0a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10z"}),Object(p.jsx)("path",{d:"M7.413 4.78L8.52 3.157c.28-.41.743-.656 1.24-.656h1.425a1.5 1.5 0 011.22.628l1.188 1.663.814-.58-1.188-1.663A2.5 2.5 0 0011.184 1.5H9.76c-.828 0-1.6.41-2.067 1.093L6.587 4.22l.826.56zM10 7.5v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm-3 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm6 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0z"})]})})})]},e)}))})]})]})}),Object(p.jsx)(j.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),d(t.id)},trigger:function(){return Object(p.jsxs)("button",{type:"button",className:"btn btn-small btn-primary",children:[Object(p.jsx)("span",{className:"svg-icon",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(p.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(p.jsx)("span",{className:"gwt-InlineLabel",children:"Add Upsell Products"})]})},position:"center center",children:Object(p.jsx)(x,{parentID:t.id})})]})}function P(e){var t=v((function(e){return e.populateProducts})),n=v((function(e){return e.products}));Object(c.useEffect)((function(){t()}),[]);var i=function(){return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(p.jsx)(u.a,{count:1,height:50}),Object(p.jsx)(u.a,{count:3,height:7})]}),Object(p.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(p.jsx)(u.a,{count:1,height:50}),Object(p.jsx)(u.a,{count:3,height:7})]}),Object(p.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(p.jsx)(u.a,{count:1,height:50}),Object(p.jsx)(u.a,{count:3,height:7})]})]})};return Object(p.jsx)("div",{className:"Products  named-area",children:Object(p.jsx)("div",{className:"named-area__body",children:Object(p.jsx)("div",{className:"a-card a-card--compact",children:Object(p.jsxs)("div",{className:"a-card__paddings",children:[Object(p.jsx)("h1",{className:"settings-page__title spacing--mt2",children:"Products"}),n&&n.hasOwnProperty("items")?n.items.map((function(e){return Object(p.jsx)(w,{product:e},e.id)})):Object(p.jsx)(i,{})]})})})})}var N=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),l=Object(a.a)(i,2);return l[0],l[1],Object(c.useEffect)((function(){s(window.EcwidApp.getPayload())}),[]),Object(c.useEffect)((function(){window.EcwidApp&&window.EcwidApp.getPayload()&&window.EcwidApp.getAppPublicConfig((function(e){console.log("my datatata",JSON.parse(e))})),console.log("rr my store data: ",n)}),[n]),Object(p.jsx)("div",{className:"EasyUpsellApp",children:Object(p.jsx)(P,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),i(e),l(e)}))};l.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),_()}},[[58,1,2]]]);
//# sourceMappingURL=main.b9c0a58d.chunk.js.map