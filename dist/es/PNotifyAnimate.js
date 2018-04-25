import PNotify from"./PNotify.js";function data(){return Object.assign({_notice:null,_options:{}},PNotify.modules.Animate.defaults)}var methods={initModule(e){this.set(e),this.setUpAnimations()},update(){this.setUpAnimations()},setUpAnimations(){const{_notice:e,_options:t,animate:n}=this.get();if(n){e.set({animation:"none"}),e._animateIn||(e._animateIn=e.animateIn),e._animateOut||(e._animateOut=e.animateOut),e.animateIn=this.animateIn.bind(this),e.animateOut=this.animateOut.bind(this);var i=250;"slow"===t.animateSpeed?i=400:"fast"===t.animateSpeed?i=100:t.animateSpeed>0&&(i=t.animateSpeed),i/=1e3,e.refs.elem.style.WebkitAnimationDuration=i+"s",e.refs.elem.style.MozAnimationDuration=i+"s",e.refs.elem.style.animationDuration=i+"s"}else e._animateIn&&e._animateOut&&(e.animateIn=e._animateIn,delete e._animateIn,e.animateOut=e._animateOut,delete e._animateOut)},animateIn(e){const{_notice:t}=this.get();t.set({_animating:"in"});const n=()=>{t.refs.elem.removeEventListener("webkitAnimationEnd",n),t.refs.elem.removeEventListener("mozAnimationEnd",n),t.refs.elem.removeEventListener("MSAnimationEnd",n),t.refs.elem.removeEventListener("oanimationend",n),t.refs.elem.removeEventListener("animationend",n),t.set({_animatingClass:"ui-pnotify-in animated"}),e&&e.call(),t.set({_animating:!1})};t.refs.elem.addEventListener("webkitAnimationEnd",n),t.refs.elem.addEventListener("mozAnimationEnd",n),t.refs.elem.addEventListener("MSAnimationEnd",n),t.refs.elem.addEventListener("oanimationend",n),t.refs.elem.addEventListener("animationend",n),t.set({_animatingClass:"ui-pnotify-in animated "+this.get().inClass})},animateOut(e){const{_notice:t}=this.get();t.set({_animating:"out"});const n=()=>{t.refs.elem.removeEventListener("webkitAnimationEnd",n),t.refs.elem.removeEventListener("mozAnimationEnd",n),t.refs.elem.removeEventListener("MSAnimationEnd",n),t.refs.elem.removeEventListener("oanimationend",n),t.refs.elem.removeEventListener("animationend",n),t.set({_animatingClass:"animated"}),e&&e.call(),t.set({_animating:!1})};t.refs.elem.addEventListener("webkitAnimationEnd",n),t.refs.elem.addEventListener("mozAnimationEnd",n),t.refs.elem.addEventListener("MSAnimationEnd",n),t.refs.elem.addEventListener("oanimationend",n),t.refs.elem.addEventListener("animationend",n),t.set({_animatingClass:"ui-pnotify-in animated "+this.get().outClass})}};function setup(e){e.key="Animate",e.defaults={animate:!1,inClass:"",outClass:""},e.init=(t=>(t.attention=((e,n)=>{const i=()=>{t.refs.container.removeEventListener("webkitAnimationEnd",i),t.refs.container.removeEventListener("mozAnimationEnd",i),t.refs.container.removeEventListener("MSAnimationEnd",i),t.refs.container.removeEventListener("oanimationend",i),t.refs.container.removeEventListener("animationend",i),t.refs.container.classList.remove(e),n&&n.call(t)};t.refs.container.addEventListener("webkitAnimationEnd",i),t.refs.container.addEventListener("mozAnimationEnd",i),t.refs.container.addEventListener("MSAnimationEnd",i),t.refs.container.addEventListener("oanimationend",i),t.refs.container.addEventListener("animationend",i),t.refs.container.classList.add("animated"),t.refs.container.classList.add(e)}),new e({target:document.body}))),PNotify.modules.Animate=e}function create_main_fragment(e,t){return{c:noop,m:noop,p:noop,u:noop,d:noop}}function PNotifyAnimate(e){init(this,e),this._state=assign(data(),e.data),this._fragment=create_main_fragment(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor))}function noop(){}function init(e,t){e._handlers=blankObject(),e._bind=t._bind,e.options=t,e.root=t.root||e,e.store=e.root.store||t.store}function assign(e,t){for(var n in t)e[n]=t[n];return e}function destroy(e){this.destroy=noop,this.fire("destroy"),this.set=noop,!1!==e&&this._fragment.u(),this._fragment.d(),this._fragment=null,this._state={}}function get(){return this._state}function fire(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(n)for(var i=0;i<n.length;i+=1){var a=n[i];a.__calling||(a.__calling=!0,a.call(this,t),a.__calling=!1)}}function on(e,t){var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}}function set(e){this._set(assign({},e)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(e){var t=this._state,n={},i=!1;for(var a in e)this._differs(e[a],t[a])&&(n[a]=i=!0);i&&(this._state=assign(assign({},t),e),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:t}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:t})))}function _mount(e,t){this._fragment[this._fragment.i?"i":"m"](e,t||null)}function _unmount(){this._fragment&&this._fragment.u()}function _differs(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function blankObject(){return Object.create(null)}function callAll(e){for(;e&&e.length;)e.shift()()}assign(PNotifyAnimate.prototype,{destroy:destroy,get:get,fire:fire,on:on,set:set,_set:_set,_mount:_mount,_unmount:_unmount,_differs:_differs}),assign(PNotifyAnimate.prototype,methods),PNotifyAnimate.prototype._recompute=noop,setup(PNotifyAnimate);export default PNotifyAnimate;
//# sourceMappingURL=PNotifyAnimate.js.map