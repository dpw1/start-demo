(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),l=(n(29),n(3)),r=(n(30),n(11)),o=n.n(r),d=(n(49),n(4)),u=n.n(d),j=n(0);var m=n(22),p=(n(51),n(7)),h=n(5),b=n.n(h),v=n(23),O=n(24),f=Object(O.a)((function(e,t){return{products:[],populateProducts:function(){var t=Object(v.a)(b.a.mark((function t(){var n,c,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=/localhost/.test(window.location.href)?"https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4":"https://app.ecwid.com/api/v3/".concat(window.EcwidApp.getPayload().store_id,"/products?token=").concat(window.EcwidApp.getPayload().access_token),t.next=3,o.a.get(n);case 3:c=t.sent,s=c.data,e({products:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getProductById:function(e){return t().products.items.filter((function(t){return t.id===parseInt(e)}))[0]},upsellProducts:[],addUpsellProduct:function(n,c){var s,a=t().upsellProducts,i=a.length>=1&&a.filter((function(e){return e.id===n})),l=i.length>=1?i[0]:null;if(console.log("I wanna add the bundle product ".concat(c," to ").concat(l?"parent ".concat(l.id):"new parent.")),l){s=[].concat(Object(p.a)(function(){var e=l.bundle;return Symbol.iterator in Object(e)?Object(p.a)(e):[e]}()),[c]),a=a.filter((function(e){return e.id!==n}))}var r={id:n,bundle:s&&s.length>=1?Object(p.a)(new Set(s)):[c]},o=[].concat(Object(p.a)(a),[r]);window.EcwidApp&&(window.EcwidApp.setAppPublicConfig({upsellProducts:o}),console.log("Saved upsell products in Database")),console.log("updated: ",o),e({upsellProducts:o})},getUpsellProductById:function(e){var n=t().upsellProducts.filter((function(t){return t.id===e}));return n.length>=1?n[0].bundle:[]},getCurrentPopupProduct:void 0,setCurrentPopupProduct:function(t){e({getCurrentPopupProduct:t})}}}));function x(e){var t=e.product,n=f((function(e){return e.addUpsellProduct})),c=f((function(e){return e.getCurrentPopupProduct}));return Object(j.jsxs)("div",{className:"PopupItem  list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(j.jsx)("div",{className:"list-element__image",children:Object(j.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(j.jsx)("div",{className:"list-element__content",children:Object(j.jsx)("div",{className:"list-element__info",children:Object(j.jsx)("div",{className:"list-element__header",children:Object(j.jsx)("div",{className:"list-element__main-info",children:Object(j.jsx)("div",{className:"list-element__title",children:Object(j.jsx)("span",{children:t.name})})})})})}),Object(j.jsxs)("button",{onClick:function(e){return s=t.id,void n(c,s);var s},type:"button",className:"btn btn-small btn-primary",children:[Object(j.jsx)("span",{className:"svg-icon",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(j.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(j.jsx)("span",{className:"gwt-InlineLabel",children:"Add"})]})]})}n(53);function g(e){var t=e.parentID,n=f((function(e){return e.products}));return Object(j.jsxs)("div",{className:"PopupCustom",children:[Object(j.jsx)("div",{className:"a-card__paddings",children:Object(j.jsx)("h3",{children:"Please select the products to upsell: "})}),n.items.map((function(e){if(e.id!==t)return Object(j.jsx)(x,{product:e},e.id)}))]})}n(54);function w(e){var t=e.product,n=Object(c.useState)([]),s=Object(l.a)(n,2),a=s[0],i=s[1],r=f((function(e){return e.getUpsellProductById})),o=f((function(e){return e.getProductById})),d=f((function(e){return e.setCurrentPopupProduct}));f.subscribe((function(e,n){var c=r(t.id);console.log("my ID and  bundle: ",t.id,c),i(c)}),(function(e){return e.upsellProducts}));return Object(j.jsxs)("div",{className:"ProductItem list-element list-element--compact list-element--has-hover list-element--inline-mode",children:[Object(j.jsx)("div",{className:"list-element__image",children:Object(j.jsx)("img",{src:t.thumbnailUrl,alt:t.name})}),Object(j.jsx)("div",{className:"list-element__content",children:Object(j.jsxs)("div",{className:"list-element__info",children:[Object(j.jsx)("div",{className:"list-element__header",children:Object(j.jsx)("div",{className:"list-element__main-info",children:Object(j.jsx)("div",{className:"list-element__title",children:Object(j.jsxs)("span",{children:[t.name," ",t.id]})})})}),Object(j.jsxs)("div",{className:"list-element__status-row",children:[Object(j.jsx)("span",{className:"order__date-wrapper",children:"Upsell Products:"}),Object(j.jsx)("div",{className:"list-element__data-row",children:a&&a.map((function(e){var t=o(e);return Object(j.jsxs)("div",{className:"ProductItem-upsell",children:[Object(j.jsx)("span",{className:"spacing--mr1",children:t.name}),Object(j.jsx)("a",{className:"icolink",href:"#",children:Object(j.jsx)("span",{className:"svg-icon",children:Object(j.jsxs)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:[Object(j.jsx)("path",{d:"M3.5 5h14a.5.5 0 000-1h-14a.5.5 0 000 1zM5 16a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10zm0 0a2 2 0 002 2h7a2 2 0 002-2V6h1v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6h1v10z"}),Object(j.jsx)("path",{d:"M7.413 4.78L8.52 3.157c.28-.41.743-.656 1.24-.656h1.425a1.5 1.5 0 011.22.628l1.188 1.663.814-.58-1.188-1.663A2.5 2.5 0 0011.184 1.5H9.76c-.828 0-1.6.41-2.067 1.093L6.587 4.22l.826.56zM10 7.5v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm-3 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0zm6 0v8a.5.5 0 001 0v-8a.5.5 0 00-1 0z"})]})})})]},e)}))})]})]})}),Object(j.jsx)(m.a,{modal:!0,onOpen:function(){console.log("setting current product: ",t.id),d(t.id)},trigger:function(){return Object(j.jsxs)("button",{type:"button",className:"btn btn-small btn-primary",children:[Object(j.jsx)("span",{className:"svg-icon",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",focusable:"false",children:Object(j.jsx)("path",{d:"M6.712 5.314H11v1.39H6.712V11H5.267V6.706H1V5.314h4.267V1h1.446v4.314z"})})}),Object(j.jsx)("span",{className:"gwt-InlineLabel",children:"Add Upsell Products"})]})},position:"center center",children:Object(j.jsx)(g,{parentID:t.id})})]})}function _(e){var t=f((function(e){return e.populateProducts})),n=f((function(e){return e.products}));Object(c.useEffect)((function(){t()}),[]);var a=function(){return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(j.jsx)(u.a,{count:1,height:50}),Object(j.jsx)(u.a,{count:3,height:7})]}),Object(j.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(j.jsx)(u.a,{count:1,height:50}),Object(j.jsx)(u.a,{count:3,height:7})]}),Object(j.jsxs)("div",{className:"list-element list-element--compact list-element--has-hover list-element--inline-mode SkeletonLoader",children:[Object(j.jsx)(u.a,{count:1,height:50}),Object(j.jsx)(u.a,{count:3,height:7})]})]})};return Object(j.jsx)("div",{className:"Products  named-area",children:Object(j.jsx)("div",{className:"named-area__body",children:Object(j.jsx)("div",{className:"a-card a-card--compact",children:Object(j.jsxs)("div",{className:"a-card__paddings",children:[Object(j.jsx)("h1",{className:"settings-page__title spacing--mt2",children:"Products"}),n&&n.hasOwnProperty("items")?n.items.map((function(e){return Object(j.jsx)(w,{product:e},e.id)})):Object(j.jsx)(a,{})]})})})})}var P=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(l.a)(a,2);return i[0],i[1],Object(c.useEffect)((function(){s(window.EcwidApp.getPayload())}),[]),Object(c.useEffect)((function(){console.log("rr my store data: ",n)}),[n]),Object(j.jsx)("div",{className:"EasyUpsellApp",children:Object(j.jsx)(_,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),N()}},[[58,1,2]]]);
//# sourceMappingURL=main.f1f6f324.chunk.js.map