(this["webpackJsonpswell-component-menu"]=this["webpackJsonpswell-component-menu"]||[]).push([[0],{46:function(e,t,a){e.exports=a(61)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),i=a.n(r),o=(a(51),a(52),a(12)),c=(a(53),function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement("h1",null,"Welcome"),l.a.createElement("p",null,"Select a widget option from the Navigation menu to begin"))}),s=a(45),u=a(36),m=a(14),h=a(15),d=a(18),p=a(16),b=a(19),f=a(17),E=a(64),w=a(65),g=a(63),v=a(38),x=function(e){return l.a.createElement(w.a.Group,{controlId:e.name},l.a.createElement(w.a.Label,null,e.title),l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(w.a.Control,{as:"select",name:e.name,onChange:e.handleChange,style:{textTransform:"capitalize"}},e.options.map((function(e,t){return l.a.createElement("option",{key:t,name:e,value:e}," ",e.split("_").join(" "))}))))))},S=function(e){return l.a.createElement(w.a.Group,{controlId:e.name},l.a.createElement(w.a.Label,null,e.title),l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(w.a.Control,{as:"textarea",rows:e.rows,name:e.name,value:e.value,onChange:e.handleChange}))))},k=function(e){return l.a.createElement(w.a.Group,{controlId:e.name},l.a.createElement(w.a.Label,null,e.title),l.a.createElement("div",{className:"mb-3"},l.a.createElement(g.a,{className:"justify-content-md-center"},e.options.map((function(t,a){return l.a.createElement(v.a,{key:a},l.a.createElement(w.a.Check,{inline:!0,type:"checkbox",id:"default-icon ".concat(t),label:t,value:t,onChange:e.handleChange,checked:e.selectedOptions.indexOf(t)>-1}))})))))},O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={titleInput:"Swell Widgets Rule",layoutDropDown:"single_row",additionalText:"Swell Rules. Everyone loves it. duh",submitText:"Submit",existingUserSubmitText:"Submit",selectedSocialShareOptions:["facebook"]},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSocialCheckbox=a.handleSocialCheckbox.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleInput",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(u.a)({},a,t))}},{key:"handleSocialCheckbox",value:function(e){var t,a=e.target.value;t=this.state.selectedSocialShareOptions.indexOf(a)>-1?this.state.selectedSocialShareOptions.filter((function(e){return e!==a})):[].concat(Object(s.a)(this.state.selectedSocialShareOptions),[a]),this.setState({selectedSocialShareOptions:t})}},{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("div",{className:"referral-form"},l.a.createElement("h1",null,"Referral Widget Creator"),l.a.createElement(w.a,null,l.a.createElement(x,{title:"Email Input and Submit Button Layout",name:"layoutDropDown",handleChange:this.handleInput,options:["single_row","double_row"]}),l.a.createElement(S,{title:"Form Title",rows:"1",name:"titleInput",value:this.state.titleInput,handleChange:this.handleInput}),l.a.createElement(S,{title:"Form Additional Text",rows:"3",name:"additionalText",value:this.state.additionalText,handleChange:this.handleInput}),l.a.createElement(S,{title:"Submit Button Text",rows:"1",name:"submitText",value:this.state.submitText,handleChange:this.handleInput}),l.a.createElement(S,{title:"Existing User Submit Button Text",rows:"1",name:"existingUserSubmitText",value:this.state.existingUserSubmitText,handleChange:this.handleInput}),l.a.createElement(k,{title:"Social Share Links",name:"socialShareOptions",handleChange:this.handleSocialCheckbox,options:["facebook","twitter","sms","copylink","message"],selectedOptions:this.state.selectedSocialShareOptions})),l.a.createElement("hr",null),l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("b",null,"Copy your referral widget code below:")),l.a.createElement("pre",null,l.a.createElement("code",null,"       \n        <div class='swell-referral'\n              data-swell-referral-form-layout=\"".concat(this.state.layoutDropDown,'"\n              data-swell-referral-title="').concat(this.state.titleInput,'"\n              data-swell-referral-new-usertitle="').concat(this.state.additionalText,'"\n              data-swell-referral-new-user-placeholder=""\n              data-swell-referral-new-user-submit="').concat(this.state.submitText,'"\n              data-swell-referral-share-links="').concat(this.state.selectedSocialShareOptions,'"\n              data-swell-referral-exist-user-submit="').concat(this.state.existingUserSubmitText,'"\n              data-swell-referral-exist-user-placeholder=""\n              data-swell-referral-exist-user-title=""\n              data-swell-referral-share-links-title=""\n              data-swell-referral-popup-copy-link-text=""\n              data-swell-referral-popup-thank-title=""\n              data-swell-referral-popup-thank-text=""\n              data-swell-referral-pre-header=""\n              data-swell-referral-desc=""\n            ></div>\n        ')))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"This is the Campaign Widget")}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"This is the VIP Widget")}}]),t}(n.Component),j=function(){return l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/referral",component:O}),l.a.createElement(o.a,{path:"/campaign",component:C}),l.a.createElement(o.a,{path:"/vip",component:y}),l.a.createElement(o.a,{path:"/",component:c}))},I=a(11),T=a(66),L=a(67),N=function(){return l.a.createElement(T.a,{bg:"dark",variant:"dark"},l.a.createElement(T.a.Brand,{as:I.b,to:"/"}," Navbar"),l.a.createElement(L.a,{className:"mr-auto"},l.a.createElement(L.a.Link,{as:I.b,to:"/referral"},"Referral"),l.a.createElement(L.a.Link,{as:I.b,to:"/campaign"},"Campaign"),l.a.createElement(L.a.Link,{as:I.b,to:"/vip"},"VIP")))};var W=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60);i.a.render(l.a.createElement(I.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.18ddd0ee.chunk.js.map