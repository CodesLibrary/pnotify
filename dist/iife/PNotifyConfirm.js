"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},PNotifyConfirm=function(r){r=r&&r.__esModule?r.default:r;var t;function u(e,t){var i,o=(t.confirm||t.prompt)&&s(e,t);return{c:function(){o&&o.c(),i=document.createComment("")},m:function(t,n){o&&o.m(t,n),h(i,t,n)},p:function(t,n){n.confirm||n.prompt?o?o.p(t,n):((o=s(e,n)).c(),o.m(i.parentNode,i)):o&&(o.u(),o.d(),o=null)},u:function(){o&&o.u(),d(i)},d:function(){o&&o.d()}}}function n(e,i){var o,r,u=!1;function t(){u=!0,e.set({promptValue:o.value}),u=!1}function n(t){e.handleKeyPress(t)}return{c:function(){o=_("textarea"),this.h()},h:function(){g(o,"input",t),g(o,"keypress",n),o.rows="5",o.className=r="\n                ui-pnotify-prompt-input\n                "+(i._notice.get()._styles.input?i._notice.get()._styles.input:"")+"\n                "+i.promptClass+"\n               svelte-1y9suua"},m:function(t,n){h(o,t,n),(e.refs.promptMulti=o).value=i.promptValue},p:function(t,n){u||(o.value=n.promptValue),(t._notice||t.promptClass)&&r!==(r="\n                ui-pnotify-prompt-input\n                "+(n._notice.get()._styles.input?n._notice.get()._styles.input:"")+"\n                "+n.promptClass+"\n               svelte-1y9suua")&&(o.className=r)},u:function(){d(o)},d:function(){b(o,"input",t),b(o,"keypress",n),e.refs.promptMulti===o&&(e.refs.promptMulti=null)}}}function a(e,i){var o,r,u=!1;function s(){u=!0,e.set({promptValue:o.value}),u=!1}function a(t){e.handleKeyPress(t)}return{c:function(){o=_("input"),this.h()},h:function(){var t,n;g(o,"input",s),g(o,"keypress",a),t="type",n="text",o.setAttribute(t,n),o.className=r="\n                ui-pnotify-prompt-input\n                "+(i._notice.get()._styles.input?i._notice.get()._styles.input:"")+"\n                "+i.promptClass+"\n               svelte-1y9suua"},m:function(t,n){h(o,t,n),(e.refs.promptSingle=o).value=i.promptValue},p:function(t,n){u||(o.value=n.promptValue),(t._notice||t.promptClass)&&r!==(r="\n                ui-pnotify-prompt-input\n                "+(n._notice.get()._styles.input?n._notice.get()._styles.input:"")+"\n                "+n.promptClass+"\n               svelte-1y9suua")&&(o.className=r)},u:function(){d(o)},d:function(){b(o,"input",s),b(o,"keypress",a),e.refs.promptSingle===o&&(e.refs.promptSingle=null)}}}function f(e,t){var i,o;function r(t){return t.promptMultiLine?n:a}var u=r(t),s=u(e,t);return{c:function(){i=_("div"),s.c(),this.h()},h:function(){i.className=o="\n            ui-pnotify-prompt-bar\n            "+(t._notice.get()._styles.promptBar?t._notice.get()._styles.promptBar:"")+"\n            "+(t._notice.get()._styles.text?t._notice.get()._styles.text:"")+"\n           svelte-1y9suua"},m:function(t,n){h(i,t,n),s.m(i,null)},p:function(t,n){u===(u=r(n))&&s?s.p(t,n):(s.u(),s.d(),(s=u(e,n)).c(),s.m(i,null)),t._notice&&o!==(o="\n            ui-pnotify-prompt-bar\n            "+(n._notice.get()._styles.promptBar?n._notice.get()._styles.promptBar:"")+"\n            "+(n._notice.get()._styles.text?n._notice.get()._styles.text:"")+"\n           svelte-1y9suua")&&(i.className=o)},u:function(){d(i),s.u()},d:function(){s.d()}}}function m(e,t){var i,o,r=t.button;t.each_value,t.button_index;function u(t){return r.textTrusted?c:l}var s=u(),a=s(e,t);return{c:function(){i=_("button"),a.c(),this.h()},h:function(){g(i,"click",p),i.type="button",i.className=o="\n              ui-pnotify-action-button\n              "+(r.primary?t._notice.get()._styles.btnPrimary?t._notice.get()._styles.btnPrimary:"":t._notice.get()._styles.btn?t._notice.get()._styles.btn:"")+"\n              "+(r.addClass?r.addClass:"")+"\n             svelte-1y9suua",i._svelte={component:e,each_value:t.each_value,button_index:t.button_index}},m:function(t,n){h(i,t,n),a.m(i,null)},p:function(t,n){r=n.button,n.each_value,n.button_index,s===(s=u())&&a?a.p(t,n):(a.u(),a.d(),(a=s(e,n)).c(),a.m(i,null)),(t.buttons||t._notice)&&o!==(o="\n              ui-pnotify-action-button\n              "+(r.primary?n._notice.get()._styles.btnPrimary?n._notice.get()._styles.btnPrimary:"":n._notice.get()._styles.btn?n._notice.get()._styles.btn:"")+"\n              "+(r.addClass?r.addClass:"")+"\n             svelte-1y9suua")&&(i.className=o),i._svelte.each_value=n.each_value,i._svelte.button_index=n.button_index},u:function(){d(i),a.u()},d:function(){a.d(),b(i,"click",p)}}}function c(t,n){var e,i,o=n.button,r=(n.each_value,n.button_index,o.text);return{c:function(){e=_("noscript"),i=_("noscript")},m:function(t,n){h(e,t,n),e.insertAdjacentHTML("afterend",r),h(i,t,n)},p:function(t,n){o=n.button,n.each_value,n.button_index,t.buttons&&r!==(r=o.text)&&(v(e,i),e.insertAdjacentHTML("afterend",r))},u:function(){v(e,i),d(e),d(i)},d:x}}function l(t,n){var e,i=n.button,o=(n.each_value,n.button_index,i.text);return{c:function(){e=C(o)},m:function(t,n){h(e,t,n)},p:function(t,n){i=n.button,n.each_value,n.button_index,t.buttons&&o!==(o=i.text)&&(e.data=o)},u:function(){d(e)},d:x}}function s(r,t){for(var u,s,a,c,l=t.prompt&&f(r,t),n=t.buttons,p=[],e=0;e<n.length;e+=1)p[e]=m(r,k(k({},t),{each_value:n,button:n[e],button_index:e}));return{c:function(){u=_("div"),l&&l.c(),s=C("\n    "),a=_("div");for(var t=0;t<p.length;t+=1)p[t].c();this.h()},h:function(){a.className=c="\n          ui-pnotify-action-bar\n          "+(t._notice.get()._styles.actionBar?t._notice.get()._styles.actionBar:"")+"\n          "+(t._notice.get()._styles.text?t._notice.get()._styles.text:"")+"\n         svelte-1y9suua",B(a,"justify-content",t.align),u.className="ui-pnotify-confirm"},m:function(t,n){h(u,t,n),l&&l.m(u,null),y(s,u),y(a,u);for(var e=0;e<p.length;e+=1)p[e].m(a,null)},p:function(t,n){n.prompt?l?l.p(t,n):((l=f(r,n)).c(),l.m(u,s)):l&&(l.u(),l.d(),l=null);var e=n.buttons;if(t.buttons||t._notice){for(var i=0;i<e.length;i+=1){var o=k(k({},n),{each_value:e,button:e[i],button_index:i});p[i]?p[i].p(t,o):(p[i]=m(r,o),p[i].c(),p[i].m(a,null))}for(;i<p.length;i+=1)p[i].u(),p[i].d();p.length=e.length}t._notice&&c!==(c="\n          ui-pnotify-action-bar\n          "+(n._notice.get()._styles.actionBar?n._notice.get()._styles.actionBar:"")+"\n          "+(n._notice.get()._styles.text?n._notice.get()._styles.text:"")+"\n         svelte-1y9suua")&&(a.className=c),t.align&&B(a,"justify-content",n.align)},u:function(){d(u),l&&l.u();for(var t=0;t<p.length;t+=1)p[t].u()},d:function(){l&&l.d(),function(t){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d()}(p)}}}function p(t){var n=this._svelte.component,e=this._svelte.each_value[this._svelte.button_index];n.handleClick(e,t)}function e(t){var n,e,i,o=this;e=t,(n=this)._handlers=Object.create(null),n._bind=e._bind,n.options=e,n.root=e.root||n,n.store=n.root.store||e.store,this.refs={},this._state=k(_extends({_notice:null,_options:{}},r.modules.Confirm.defaults),t.data),document.getElementById("svelte-1y9suua-style")||((i=_("style")).id="svelte-1y9suua-style",i.textContent=".ui-pnotify-action-bar.svelte-1y9suua,.ui-pnotify-prompt-bar.svelte-1y9suua{margin-top:5px;clear:both}.ui-pnotify-action-bar.svelte-1y9suua{display:flex;flex-wrap:wrap;justify-content:flex-end}.ui-pnotify-prompt-input.svelte-1y9suua{margin-bottom:5px;display:block;width:100%}.ui-pnotify-confirm-mx-1.svelte-1y9suua{margin:0 5px}.ui-pnotify.ui-pnotify-with-icon .ui-pnotify-confirm-ml{margin-left:24px}[dir=rtl] .ui-pnotify.ui-pnotify-with-icon .ui-pnotify-confirm-ml{margin-right:24px;margin-left:0}",y(i,document.head)),t.root||(this._oncreate=[]),this._fragment=u(this,this._state),this.root._oncreate.push(function(){(function(){this.fire("init",{module:this})}).call(o),o.fire("update",{changed:function(t,n){for(var e in n)t[e]=1;return t}({},o._state),current:o._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),N(this._oncreate))}function _(t){return document.createElement(t)}function y(t,n){n.appendChild(t)}function h(t,n,e){n.insertBefore(t,e)}function d(t){t.parentNode.removeChild(t)}function g(t,n,e){t.addEventListener(n,e,!1)}function b(t,n,e){t.removeEventListener(n,e,!1)}function v(t,n){for(;t.nextSibling&&t.nextSibling!==n;)t.parentNode.removeChild(t.nextSibling)}function x(){}function C(t){return document.createTextNode(t)}function k(t,n){for(var e in n)t[e]=n[e];return t}function B(t,n,e){t.style.setProperty(n,e)}function N(t){for(;t&&t.length;)t.shift()()}return k(e.prototype,{destroy:function(t){this.destroy=x,this.fire("destroy"),this.set=x,!1!==t&&this._fragment.u();this._fragment.d(),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,n){var e=t in this._handlers&&this._handlers[t].slice();if(!e)return;for(var i=0;i<e.length;i+=1){var o=e[i];o.__calling||(o.__calling=!0,o.call(this,n),o.__calling=!1)}},on:function(t,n){var e=this._handlers[t]||(this._handlers[t]=[]);return e.push(n),{cancel:function(){var t=e.indexOf(n);~t&&e.splice(t,1)}}},set:function(t){if(this._set(k({},t)),this.root._lock)return;this.root._lock=!0,N(this.root._beforecreate),N(this.root._oncreate),N(this.root._aftercreate),this.root._lock=!1},_set:function(t){var n=this._state,e={},i=!1;for(var o in t)this._differs(t[o],n[o])&&(e[o]=i=!0);if(!i)return;this._state=k(k({},n),t),this._recompute(e,this._state),this._bind&&this._bind(e,this._state);this._fragment&&(this.fire("state",{changed:e,current:this._state,previous:n}),this._fragment.p(e,this._state),this.fire("update",{changed:e,current:this._state,previous:n}))},_mount:function(t,n){this._fragment[this._fragment.i?"i":"m"](t,n||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(t,n){return t!=t?n==n:t!==n||t&&"object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t}}),k(e.prototype,{initModule:function(t){this.set(t)},afterOpen:function(){this.get().prompt&&(this.get().promptMultiLine?this.refs.promptMulti.focus():this.refs.promptSingle.focus())},handleClick:function(t,n){t.click&&t.click(this.get()._notice,this.get().prompt?this.get().promptValue:null,n)},handleKeyPress:function(t){if(13===t.keyCode&&!t.shiftKey){t.preventDefault();for(var n=this.get().buttons,e=0;e<n.length;e++)n[e].promptTrigger&&n[e].click&&n[e].click(this.get()._notice,this.get().prompt?this.get().promptValue:null,t)}}}),e.prototype._recompute=x,(t=e).key="Confirm",t.defaults={confirm:!1,prompt:!1,promptClass:"",promptValue:"",promptMultiLine:!1,align:"flex-end",buttons:[{text:"Ok",textTrusted:!1,addClass:"",primary:!0,promptTrigger:!0,click:function(t,n){t.close(),t.fire("pnotify.confirm",{notice:t,value:n})}},{text:"Cancel",textTrusted:!1,addClass:"",click:function(t){t.close(),t.fire("pnotify.cancel",{notice:t})}}]},r.modules.Confirm=t,r.modulesAppendContainer.push(t),_extends(r.styling.brighttheme,{actionBar:"",promptBar:"",btn:"",btnPrimary:"brighttheme-primary",input:""}),_extends(r.styling.bootstrap3,{actionBar:"ui-pnotify-confirm-ml",promptBar:"ui-pnotify-confirm-ml",btn:"btn btn-default ui-pnotify-confirm-mx-1",btnPrimary:"btn btn-default ui-pnotify-confirm-mx-1 btn-primary",input:"form-control"}),_extends(r.styling.bootstrap4,{actionBar:"ui-pnotify-confirm-ml",promptBar:"ui-pnotify-confirm-ml",btn:"btn btn-secondary mx-1",btnPrimary:"btn btn-primary mx-1",input:"form-control"}),r.styling.material||(r.styling.material={}),_extends(r.styling.material,{actionBar:"",promptBar:"",btn:"",btnPrimary:"ui-pnotify-material-primary",input:""}),e}(PNotify);
//# sourceMappingURL=PNotifyConfirm.js.map