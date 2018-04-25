let PNotify,posTimer,onDocumentLoaded=()=>{PNotify.defaultStack.context=document.body,window.addEventListener("resize",()=>{posTimer&&clearTimeout(posTimer),posTimer=setTimeout(()=>{PNotify.positionAll()},10)})},createStackOverlay=t=>{const e=document.createElement("div");e.classList.add("ui-pnotify-modal-overlay"),t.context!==document.body&&(e.style.height=t.context.scrollHeight+"px",e.style.width=t.context.scrollWidth+"px"),e.addEventListener("click",()=>{t.overlayClose&&PNotify.closeStack(t)}),t.overlay=e},insertStackOverlay=t=>{t.overlay.parentNode!==t.context&&(t.overlay=t.context.insertBefore(t.overlay,t.context.firstChild))},removeStackOverlay=t=>{t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay)};const getDefaultArgs=(t,e)=>("object"!=typeof t&&(t={text:t}),e&&(t.type=e),{target:document.body,data:t});function _styles({styling:t}){return"object"==typeof t?t:PNotify.styling[t]}function _icons({icons:t}){return"object"==typeof t?t:PNotify.icons[t]}function _widthStyle({width:t}){return"string"==typeof t?"width: "+t+";":""}function _minHeightStyle({minHeight:t}){return"string"==typeof t?"min-height: "+t+";":""}function data(){const t=Object.assign({_state:"initializing",_timer:null,_animTimer:null,_animating:!1,_animatingClass:"",_moveClass:"",_timerHide:!1,_moduleClasses:[],_moduleIsNoticeOpen:!1,_modules:{},_modulesPrependContainer:PNotify.modulesPrependContainer,_modulesAppendContainer:PNotify.modulesAppendContainer},PNotify.defaults);return t.modules=Object.assign({},PNotify.defaults.modules),t}var methods={runModules(t){if("init"===t){for(let t in PNotify.modules)if(PNotify.modules.hasOwnProperty(t)&&"function"==typeof PNotify.modules[t].init){const e=PNotify.modules[t].init(this);this.initModule(e)}}else{const{_modules:e}=this.get();for(let i in e){if(!e.hasOwnProperty(i))continue;const n=Object.assign({_notice:this,_options:this.get()},this.get().modules[i]);e[i].set(n),"function"==typeof e[i][t]&&e[i][t]()}}},initModule(t){const{modules:e}=this.get();e.hasOwnProperty(t.constructor.key)||(e[t.constructor.key]={});const i=Object.assign({_notice:this,_options:this.get()},e[t.constructor.key]);t.initModule(i);const{_modules:n}=this.get();n[t.constructor.key]=t},update(t){const e=this.get().hide,i=this.get().icon;this.set(t),this.runModules("update"),this.get().hide?e||this.queueClose():this.cancelClose(),this.queuePosition();const{icon:n}=this.get();return n!==i&&(!0===n&&"fontawesome5"===this.get().icons||"string"==typeof n&&n.match(/(^| )fa[srlb]($| )/))&&(this.set({icon:!1}),this.set({icon:n})),this},open(){const{_state:t,hide:e}=this.get();if("opening"===t)return;if("open"===t)return void(e&&this.queueClose());this.set({_state:"opening",_animatingClass:"ui-pnotify-initial-hidden"}),this.runModules("beforeOpen");let{stack:i}=this.get();if(!this.refs.elem.parentNode||i&&i.context&&i.context!==this.refs.elem.parentNode)if(i&&i.context)i.context.appendChild(this.refs.elem);else{if(!document.body)throw new Error("No context to open this notice in.");document.body.appendChild(this.refs.elem)}return setTimeout(()=>{i&&(i.animation=!1,PNotify.positionAll(),i.animation=!0),this.animateIn(()=>{this.get().hide&&this.queueClose(),this.set({_state:"open"}),this.runModules("afterOpen")})},0),this},remove(t){return this.close(t)},close(t){const{_state:e}=this.get();if("closing"===e||"closed"===e)return;this.set({_state:"closing",_timerHide:!!t}),this.runModules("beforeClose");const{_timer:i}=this.get();return i&&clearTimeout&&(clearTimeout(i),this.set({_timer:null})),this.animateOut(()=>{if(this.set({_state:"closed"}),this.runModules("afterClose"),this.queuePosition(),this.get().remove&&this.refs.elem.parentNode.removeChild(this.refs.elem),this.runModules("beforeDestroy"),this.get().destroy&&null!==PNotify.notices){const t=PNotify.notices.indexOf(this);-1!==t&&PNotify.notices.splice(t,1)}this.runModules("afterDestroy")}),this},animateIn(t){this.set({_animating:"in"});const e=()=>{this.refs.elem.removeEventListener("transitionend",e);const{_animTimer:i,_animating:n,_moduleIsNoticeOpen:o}=this.get();if(i&&clearTimeout(i),"in"!==n)return;let s=o;if(!s){const t=this.refs.elem.getBoundingClientRect();for(let e in t)if(t[e]>0){s=!0;break}}s?(t&&t.call(),this.set({_animating:!1})):this.set({_animTimer:setTimeout(e,40)})};"fade"===this.get().animation?(this.refs.elem.addEventListener("transitionend",e),this.set({_animatingClass:"ui-pnotify-in"}),this.refs.elem.style.opacity,this.set({_animatingClass:"ui-pnotify-in ui-pnotify-fade-in"}),this.set({_animTimer:setTimeout(e,650)})):(this.set({_animatingClass:"ui-pnotify-in"}),e())},animateOut(t){this.set({_animating:"out"});const e=()=>{this.refs.elem.removeEventListener("transitionend",e);const{_animTimer:i,_animating:n,_moduleIsNoticeOpen:o}=this.get();if(i&&clearTimeout(i),"out"!==n)return;let s=o;if(!s){const t=this.refs.elem.getBoundingClientRect();for(let e in t)if(t[e]>0){s=!0;break}}if(this.refs.elem.style.opacity&&"0"!==this.refs.elem.style.opacity&&s)this.set({_animTimer:setTimeout(e,40)});else{this.set({_animatingClass:""});const{stack:e}=this.get();if(e&&e.overlay){let t=!1;for(let i=0;i<PNotify.notices.length;i++){const n=PNotify.notices[i];if(n!==this&&n.get().stack===e&&"closed"!==n.get()._state){t=!0;break}}t||removeStackOverlay(e)}t&&t.call(),this.set({_animating:!1})}};"fade"===this.get().animation?(this.refs.elem.addEventListener("transitionend",e),this.set({_animatingClass:"ui-pnotify-in"}),this.set({_animTimer:setTimeout(e,650)})):(this.set({_animatingClass:""}),e())},position(){let{stack:t}=this.get(),e=this.refs.elem;if(!t)return;if(t.context||(t.context=document.body),"number"!=typeof t.nextpos1&&(t.nextpos1=t.firstpos1),"number"!=typeof t.nextpos2&&(t.nextpos2=t.firstpos2),"number"!=typeof t.addpos2&&(t.addpos2=0),!e.classList.contains("ui-pnotify-in")&&!e.classList.contains("ui-pnotify-initial-hidden"))return this;t.modal&&(t.overlay||createStackOverlay(t),insertStackOverlay(t)),e.getBoundingClientRect(),t.animation&&this.set({_moveClass:"ui-pnotify-move"});let i,n=t.context===document.body?window.innerHeight:t.context.scrollHeight,o=t.context===document.body?window.innerWidth:t.context.scrollWidth;if(t.dir1){let s;switch(i={down:"top",up:"bottom",left:"right",right:"left"}[t.dir1],t.dir1){case"down":s=e.offsetTop;break;case"up":s=n-e.scrollHeight-e.offsetTop;break;case"left":s=o-e.scrollWidth-e.offsetLeft;break;case"right":s=e.offsetLeft}void 0===t.firstpos1&&(t.firstpos1=s,t.nextpos1=t.firstpos1)}if(t.dir1&&t.dir2){let i,s={down:"top",up:"bottom",left:"right",right:"left"}[t.dir2];switch(t.dir2){case"down":i=e.offsetTop;break;case"up":i=n-e.scrollHeight-e.offsetTop;break;case"left":i=o-e.scrollWidth-e.offsetLeft;break;case"right":i=e.offsetLeft}void 0===t.firstpos2&&(t.firstpos2=i,t.nextpos2=t.firstpos2);const r=t.nextpos1+e.offsetHeight+(void 0===t.spacing1?25:t.spacing1),a=t.nextpos1+e.offsetWidth+(void 0===t.spacing1?25:t.spacing1);switch((("down"===t.dir1||"up"===t.dir1)&&r>n||("left"===t.dir1||"right"===t.dir1)&&a>o)&&(t.nextpos1=t.firstpos1,t.nextpos2+=t.addpos2+(void 0===t.spacing2?25:t.spacing2),t.addpos2=0),"number"==typeof t.nextpos2&&(e.style[s]=t.nextpos2+"px",t.animation||e.style[s]),t.dir2){case"down":case"up":e.offsetHeight+(parseFloat(e.style.marginTop,10)||0)+(parseFloat(e.style.marginBottom,10)||0)>t.addpos2&&(t.addpos2=e.offsetHeight);break;case"left":case"right":e.offsetWidth+(parseFloat(e.style.marginLeft,10)||0)+(parseFloat(e.style.marginRight,10)||0)>t.addpos2&&(t.addpos2=e.offsetWidth)}}else if(t.dir1){let i,o;switch(t.dir1){case"down":case"up":o=["left","right"],i=t.context.scrollWidth/2-e.offsetWidth/2;break;case"left":case"right":o=["top","bottom"],i=n/2-e.offsetHeight/2}e.style[o[0]]=i+"px",e.style[o[1]]="auto",t.animation||e.style[o[0]]}if(t.dir1)switch("number"==typeof t.nextpos1&&(e.style[i]=t.nextpos1+"px",t.animation||e.style[i]),t.dir1){case"down":case"up":t.nextpos1+=e.offsetHeight+(void 0===t.spacing1?25:t.spacing1);break;case"left":case"right":t.nextpos1+=e.offsetWidth+(void 0===t.spacing1?25:t.spacing1)}else{let i=o/2-e.offsetWidth/2,s=n/2-e.offsetHeight/2;e.style.left=i+"px",e.style.top=s+"px",t.animation||e.style.left}return this},queuePosition(t){return posTimer&&clearTimeout(posTimer),t||(t=10),posTimer=setTimeout(()=>{PNotify.positionAll()},t),this},cancelRemove(){return this.cancelClose()},cancelClose(){const{_timer:t,_animTimer:e,_state:i,animation:n}=this.get();return t&&clearTimeout(t),e&&clearTimeout(e),"closing"===i&&this.set({_state:"open",_animating:!1,_animatingClass:"fade"===n?"ui-pnotify-in ui-pnotify-fade-in":"ui-pnotify-in"}),this},queueRemove(){return this.queueClose()},queueClose(){return this.cancelClose(),this.set({_timer:setTimeout(()=>this.close(!0),isNaN(this.get().delay)?0:this.get().delay)}),this},addModuleClass(...t){const{_moduleClasses:e}=this.get();for(let i=0;i<t.length;i++){let n=t[i];-1===e.indexOf(n)&&e.push(n)}this.set({_moduleClasses:e})},removeModuleClass(...t){const{_moduleClasses:e}=this.get();for(let i=0;i<t.length;i++){let n=t[i];const o=e.indexOf(n);-1!==o&&e.splice(o,1)}this.set({_moduleClasses:e})},hasModuleClass(...t){const{_moduleClasses:e}=this.get();for(let i=0;i<t.length;i++){let n=t[i];if(-1===e.indexOf(n))return!1}return!0}};function oncreate(){this.on("mouseenter",t=>{if(this.get().mouseReset&&"out"===this.get()._animating){if(!this.get()._timerHide)return;this.cancelClose()}this.get().hide&&this.get().mouseReset&&this.cancelClose()}),this.on("mouseleave",t=>{this.get().hide&&this.get().mouseReset&&"out"!==this.get()._animating&&this.queueClose(),PNotify.positionAll()});let{stack:t}=this.get();t&&"top"===t.push?PNotify.notices.splice(0,0,this):PNotify.notices.push(this),this.runModules("init"),this.set({_state:"closed"}),this.get().autoDisplay&&this.open()}function setup(t){(PNotify=t).VERSION="4.0.0-alpha.3",PNotify.defaultStack={dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom",context:window&&document.body},PNotify.defaults={title:!1,titleTrusted:!1,text:!1,textTrusted:!1,styling:"brighttheme",icons:"brighttheme",addClass:"",cornerClass:"",autoDisplay:!0,width:"360px",minHeight:"16px",type:"notice",icon:!0,animation:"fade",animateSpeed:"normal",shadow:!0,hide:!0,delay:8e3,mouseReset:!0,remove:!0,destroy:!0,stack:PNotify.defaultStack,modules:{}},PNotify.notices=[],PNotify.modules={},PNotify.modulesPrependContainer=[],PNotify.modulesAppendContainer=[],PNotify.alert=(t=>new PNotify(getDefaultArgs(t))),PNotify.notice=(t=>new PNotify(getDefaultArgs(t,"notice"))),PNotify.info=(t=>new PNotify(getDefaultArgs(t,"info"))),PNotify.success=(t=>new PNotify(getDefaultArgs(t,"success"))),PNotify.error=(t=>new PNotify(getDefaultArgs(t,"error"))),PNotify.removeAll=(()=>{PNotify.closeAll()}),PNotify.closeAll=(()=>{for(let t=0;t<PNotify.notices.length;t++)PNotify.notices[t].close&&PNotify.notices[t].close(!1)}),PNotify.removeStack=(t=>{PNotify.closeStack(t)}),PNotify.closeStack=(t=>{if(!1!==t)for(let e=0;e<PNotify.notices.length;e++)PNotify.notices[e].close&&PNotify.notices[e].get().stack===t&&PNotify.notices[e].close(!1)}),PNotify.positionAll=(()=>{if(posTimer&&clearTimeout(posTimer),posTimer=null,PNotify.notices.length>0){for(let t=0;t<PNotify.notices.length;t++){let e=PNotify.notices[t],{stack:i}=e.get();i&&(i.overlay&&removeStackOverlay(i),i.nextpos1=i.firstpos1,i.nextpos2=i.firstpos2,i.addpos2=0)}for(let t=0;t<PNotify.notices.length;t++)PNotify.notices[t].position()}else delete PNotify.defaultStack.nextpos1,delete PNotify.defaultStack.nextpos2}),PNotify.styling={brighttheme:{container:"brighttheme",notice:"brighttheme-notice",info:"brighttheme-info",success:"brighttheme-success",error:"brighttheme-error"},bootstrap3:{container:"alert",notice:"alert-warning",info:"alert-info",success:"alert-success",error:"alert-danger",icon:"ui-pnotify-icon-bs3"},bootstrap4:{container:"alert",notice:"alert-warning",info:"alert-info",success:"alert-success",error:"alert-danger",icon:"ui-pnotify-icon-bs4",title:"ui-pnotify-title-bs4"}},PNotify.icons={brighttheme:{notice:"brighttheme-icon-notice",info:"brighttheme-icon-info",success:"brighttheme-icon-success",error:"brighttheme-icon-error"},bootstrap3:{notice:"glyphicon glyphicon-exclamation-sign",info:"glyphicon glyphicon-info-sign",success:"glyphicon glyphicon-ok-sign",error:"glyphicon glyphicon-warning-sign"},fontawesome4:{notice:"fa fa-exclamation-circle",info:"fa fa-info-circle",success:"fa fa-check-circle",error:"fa fa-exclamation-triangle"},fontawesome5:{notice:"fas fa-exclamation-circle",info:"fas fa-info-circle",success:"fas fa-check-circle",error:"fas fa-exclamation-triangle"}},window&&document.body?onDocumentLoaded():document.addEventListener("DOMContentLoaded",onDocumentLoaded)}function add_css(){var t=createElement("style");t.id="svelte-1eldsjg-style",t.textContent='body > .ui-pnotify{position:fixed;z-index:100040}body > .ui-pnotify.ui-pnotify-modal{z-index:100042}.ui-pnotify{position:absolute;height:auto;z-index:1;display:none}.ui-pnotify.ui-pnotify-modal{z-index:3}.ui-pnotify.ui-pnotify-in{display:block}.ui-pnotify.ui-pnotify-initial-hidden{display:block;visibility:hidden}.ui-pnotify.ui-pnotify-move{transition:left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-slow{transition:opacity .4s linear;opacity:0}.ui-pnotify.ui-pnotify-fade-slow.ui-pnotify.ui-pnotify-move{transition:opacity .4s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-normal{transition:opacity .25s linear;opacity:0}.ui-pnotify.ui-pnotify-fade-normal.ui-pnotify.ui-pnotify-move{transition:opacity .25s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-fast{transition:opacity .1s linear;opacity:0}.ui-pnotify.ui-pnotify-fade-fast.ui-pnotify.ui-pnotify-move{transition:opacity .1s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-in{opacity:1}.ui-pnotify .ui-pnotify-shadow{-webkit-box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1);-moz-box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1);box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1)}.ui-pnotify-container{background-position:0 0;padding:.8em;height:100%;margin:0}.ui-pnotify-container:after{content:" ";visibility:hidden;display:block;height:0;clear:both}.ui-pnotify-container.ui-pnotify-sharp{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ui-pnotify-title{display:block;white-space:pre-line;margin-bottom:.4em;margin-top:0}.ui-pnotify.ui-pnotify-with-icon .ui-pnotify-title,.ui-pnotify.ui-pnotify-with-icon .ui-pnotify-text{margin-left:24px}[dir=rtl] .ui-pnotify.ui-pnotify-with-icon .ui-pnotify-title,[dir=rtl] .ui-pnotify.ui-pnotify-with-icon .ui-pnotify-text{margin-right:24px;margin-left:0}.ui-pnotify-title-bs4{font-size:1.2rem}.ui-pnotify-text{display:block;white-space:pre-line}.ui-pnotify-icon,.ui-pnotify-icon span{display:block;float:left}[dir=rtl] .ui-pnotify-icon,[dir=rtl] .ui-pnotify-icon span{float:right}.ui-pnotify-icon-bs3 > span{position:relative;top:2px}.ui-pnotify-icon-bs4 > span{position:relative;top:4px}.ui-pnotify-modal-overlay{background-color:rgba(0, 0, 0, .4);top:0;left:0;position:absolute;height:100%;width:100%;z-index:2}body > .ui-pnotify-modal-overlay{position:fixed;z-index:100041}',appendNode(t,document.head)}function create_main_fragment(t,e){for(var i,n,o,s,r,a,c,l,f,u=[],d=blankObject(),h=[],m=blankObject(),p=e._modulesPrependContainer,y=0;y<p.length;y+=1){var _=p[y].key;u[y]=d[_]=create_each_block(t,_,assign(assign({},e),{each_value:p,module:p[y],module_index:y}))}var g=!1!==e.icon&&create_if_block(t,e),b=!1!==e.title&&create_if_block_1(t,e),v=!1!==e.text&&create_if_block_4(t,e),N=e._modulesAppendContainer;for(y=0;y<N.length;y+=1){var x=N[y].key;h[y]=m[x]=create_each_block_1(t,x,assign(assign({},e),{each_value_1:N,module:N[y],module_index_1:y}))}function k(e){t.fire("mouseover",e)}function C(e){t.fire("mouseout",e)}function w(e){t.fire("mouseenter",e)}function P(e){t.fire("mouseleave",e)}function T(e){t.fire("mousemove",e)}function L(e){t.fire("mousedown",e)}function S(e){t.fire("mouseup",e)}function A(e){t.fire("click",e)}function O(e){t.fire("dblclick",e)}function H(e){t.fire("focus",e)}function E(e){t.fire("blur",e)}function M(e){t.fire("touchstart",e)}function j(e){t.fire("touchmove",e)}function B(e){t.fire("touchend",e)}function D(e){t.fire("touchcancel",e)}return{c:function(){for(i=createElement("div"),n=createElement("div"),y=0;y<u.length;y+=1)u[y].c();for(o=createText("\n    "),g&&g.c(),s=createText("\n    "),b&&b.c(),r=createText("\n    "),v&&v.c(),a=createText("\n    "),y=0;y<h.length;y+=1)h[y].c();this.h()},h:function(){n.className=c="\n        ui-pnotify-container\n        "+(e._styles.container?e._styles.container:"")+"\n        "+(e._styles[e.type]?e._styles[e.type]:"")+"\n        "+e.cornerClass+"\n        "+(e.shadow?"ui-pnotify-shadow":"")+"\n      ",n.style.cssText=l=e._widthStyle+" "+e._minHeightStyle,setAttribute(n,"role","alert"),addListener(i,"mouseover",k),addListener(i,"mouseout",C),addListener(i,"mouseenter",w),addListener(i,"mouseleave",P),addListener(i,"mousemove",T),addListener(i,"mousedown",L),addListener(i,"mouseup",S),addListener(i,"click",A),addListener(i,"dblclick",O),addListener(i,"focus",H),addListener(i,"blur",E),addListener(i,"touchstart",M),addListener(i,"touchmove",j),addListener(i,"touchend",B),addListener(i,"touchcancel",D),i.className=f="\n      ui-pnotify\n      "+(!1!==e.icon?"ui-pnotify-with-icon":"")+"\n      "+(e._styles.element?e._styles.element:"")+"\n      "+e.addClass+"\n      "+e._animatingClass+"\n      "+e._moveClass+"\n      "+("fade"===e.animation?"ui-pnotify-fade-"+e.animateSpeed:"")+"\n      "+(e.stack&&e.stack.modal?"ui-pnotify-modal":"")+"\n      "+e._moduleClasses.join(" ")+"\n    ",setAttribute(i,"aria-live","assertive"),setAttribute(i,"role","alertdialog"),setAttribute(i,"ui-pnotify",!0)},m:function(e,c){for(insertNode(i,e,c),appendNode(n,i),y=0;y<u.length;y+=1)u[y].m(n,null);for(appendNode(o,n),g&&g.m(n,null),appendNode(s,n),b&&b.m(n,null),appendNode(r,n),v&&v.m(n,null),appendNode(a,n),y=0;y<h.length;y+=1)h[y].m(n,null);t.refs.container=n,t.refs.elem=i},p:function(e,p){var y=p._modulesPrependContainer;u=updateKeyedEach(u,t,e,"key",0,y,d,n,!1,create_each_block,"m",o,function(t){return assign(assign({},p),{each_value:y,module:y[t],module_index:t})}),!1!==p.icon?g?g.p(e,p):((g=create_if_block(t,p)).c(),g.m(n,s)):g&&(g.u(),g.d(),g=null),!1!==p.title?b?b.p(e,p):((b=create_if_block_1(t,p)).c(),b.m(n,r)):b&&(b.u(),b.d(),b=null),!1!==p.text?v?v.p(e,p):((v=create_if_block_4(t,p)).c(),v.m(n,a)):v&&(v.u(),v.d(),v=null);var _=p._modulesAppendContainer;h=updateKeyedEach(h,t,e,"key",0,_,m,n,!1,create_each_block_1,"m",null,function(t){return assign(assign({},p),{each_value_1:_,module:_[t],module_index_1:t})}),(e._styles||e.type||e.cornerClass||e.shadow)&&c!==(c="\n        ui-pnotify-container\n        "+(p._styles.container?p._styles.container:"")+"\n        "+(p._styles[p.type]?p._styles[p.type]:"")+"\n        "+p.cornerClass+"\n        "+(p.shadow?"ui-pnotify-shadow":"")+"\n      ")&&(n.className=c),(e._widthStyle||e._minHeightStyle)&&l!==(l=p._widthStyle+" "+p._minHeightStyle)&&(n.style.cssText=l),(e.icon||e._styles||e.addClass||e._animatingClass||e._moveClass||e.animation||e.animateSpeed||e.stack||e._moduleClasses)&&f!==(f="\n      ui-pnotify\n      "+(!1!==p.icon?"ui-pnotify-with-icon":"")+"\n      "+(p._styles.element?p._styles.element:"")+"\n      "+p.addClass+"\n      "+p._animatingClass+"\n      "+p._moveClass+"\n      "+("fade"===p.animation?"ui-pnotify-fade-"+p.animateSpeed:"")+"\n      "+(p.stack&&p.stack.modal?"ui-pnotify-modal":"")+"\n      "+p._moduleClasses.join(" ")+"\n    ")&&(i.className=f)},u:function(){detachNode(i),g&&g.u(),b&&b.u(),v&&v.u()},d:function(){for(y=0;y<u.length;y+=1)u[y].d();for(g&&g.d(),b&&b.d(),v&&v.d(),y=0;y<h.length;y+=1)h[y].d();t.refs.container===n&&(t.refs.container=null),removeListener(i,"mouseover",k),removeListener(i,"mouseout",C),removeListener(i,"mouseenter",w),removeListener(i,"mouseleave",P),removeListener(i,"mousemove",T),removeListener(i,"mousedown",L),removeListener(i,"mouseup",S),removeListener(i,"click",A),removeListener(i,"dblclick",O),removeListener(i,"focus",H),removeListener(i,"blur",E),removeListener(i,"touchstart",M),removeListener(i,"touchmove",j),removeListener(i,"touchend",B),removeListener(i,"touchcancel",D),t.refs.elem===i&&(t.refs.elem=null)}}}function create_each_block(t,e,i){var n,o,s=i.module,r=(i.each_value,i.module_index,s);function a(e){return{root:t.root}}if(r)var c=new r(a());function l(e){t.initModule(e.module)}return c&&c.on("init",l),{key:e,first:null,c:function(){n=createComment(),o=createComment(),c&&c._fragment.c(),this.h()},h:function(){this.first=n},m:function(t,e){insertNode(n,t,e),insertNode(o,t,e),c&&c._mount(t,e)},p:function(t,e){s=e.module,e.each_value,e.module_index,r!==(r=s)&&(c&&c.destroy(),r&&((c=new r(a()))._fragment.c(),c._mount(o.parentNode,o),c.on("init",l)))},u:function(){detachNode(n),detachNode(o),c&&c._unmount()},d:function(){c&&c.destroy(!1)}}}function create_if_block(t,e){var i,n,o,s;return{c:function(){i=createElement("div"),n=createElement("span"),this.h()},h:function(){n.className=o=!0===e.icon?e._icons[e.type]?e._icons[e.type]:"":e.icon,i.className=s="ui-pnotify-icon "+(e._styles.icon?e._styles.icon:"")},m:function(e,o){insertNode(i,e,o),appendNode(n,i),t.refs.iconContainer=i},p:function(t,e){(t.icon||t._icons||t.type)&&o!==(o=!0===e.icon?e._icons[e.type]?e._icons[e.type]:"":e.icon)&&(n.className=o),t._styles&&s!==(s="ui-pnotify-icon "+(e._styles.icon?e._styles.icon:""))&&(i.className=s)},u:function(){detachNode(i)},d:function(){t.refs.iconContainer===i&&(t.refs.iconContainer=null)}}}function create_if_block_2(t,e){var i,n;return{c:function(){i=createElement("noscript"),n=createElement("noscript")},m:function(t,o){insertNode(i,t,o),i.insertAdjacentHTML("afterend",e.title),insertNode(n,t,o)},p:function(t,e){t.title&&(detachBetween(i,n),i.insertAdjacentHTML("afterend",e.title))},u:function(){detachBetween(i,n),detachNode(i),detachNode(n)},d:noop}}function create_if_block_3(t,e){var i;return{c:function(){i=createText(e.title)},m:function(t,e){insertNode(i,t,e)},p:function(t,e){t.title&&(i.data=e.title)},u:function(){detachNode(i)},d:noop}}function create_if_block_1(t,e){var i,n;function o(t){return t.titleTrusted?create_if_block_2:create_if_block_3}var s=o(e),r=s(t,e);return{c:function(){i=createElement("h4"),r.c(),this.h()},h:function(){i.className=n="ui-pnotify-title "+(e._styles.title?e._styles.title:"")},m:function(e,n){insertNode(i,e,n),r.m(i,null),t.refs.titleContainer=i},p:function(e,a){s===(s=o(a))&&r?r.p(e,a):(r.u(),r.d(),(r=s(t,a)).c(),r.m(i,null)),e._styles&&n!==(n="ui-pnotify-title "+(a._styles.title?a._styles.title:""))&&(i.className=n)},u:function(){detachNode(i),r.u()},d:function(){r.d(),t.refs.titleContainer===i&&(t.refs.titleContainer=null)}}}function create_if_block_5(t,e){var i,n;return{c:function(){i=createElement("noscript"),n=createElement("noscript")},m:function(t,o){insertNode(i,t,o),i.insertAdjacentHTML("afterend",e.text),insertNode(n,t,o)},p:function(t,e){t.text&&(detachBetween(i,n),i.insertAdjacentHTML("afterend",e.text))},u:function(){detachBetween(i,n),detachNode(i),detachNode(n)},d:noop}}function create_if_block_6(t,e){var i;return{c:function(){i=createText(e.text)},m:function(t,e){insertNode(i,t,e)},p:function(t,e){t.text&&(i.data=e.text)},u:function(){detachNode(i)},d:noop}}function create_if_block_4(t,e){var i,n;function o(t){return t.textTrusted?create_if_block_5:create_if_block_6}var s=o(e),r=s(t,e);return{c:function(){i=createElement("div"),r.c(),this.h()},h:function(){i.className=n="ui-pnotify-text "+(e._styles.text?e._styles.text:""),setAttribute(i,"role","alert")},m:function(e,n){insertNode(i,e,n),r.m(i,null),t.refs.textContainer=i},p:function(e,a){s===(s=o(a))&&r?r.p(e,a):(r.u(),r.d(),(r=s(t,a)).c(),r.m(i,null)),e._styles&&n!==(n="ui-pnotify-text "+(a._styles.text?a._styles.text:""))&&(i.className=n)},u:function(){detachNode(i),r.u()},d:function(){r.d(),t.refs.textContainer===i&&(t.refs.textContainer=null)}}}function create_each_block_1(t,e,i){var n,o,s=i.module,r=(i.each_value_1,i.module_index_1,s);function a(e){return{root:t.root}}if(r)var c=new r(a());function l(e){t.initModule(e.module)}return c&&c.on("init",l),{key:e,first:null,c:function(){n=createComment(),o=createComment(),c&&c._fragment.c(),this.h()},h:function(){this.first=n},m:function(t,e){insertNode(n,t,e),insertNode(o,t,e),c&&c._mount(t,e)},p:function(t,e){s=e.module,e.each_value_1,e.module_index_1,r!==(r=s)&&(c&&c.destroy(),r&&((c=new r(a()))._fragment.c(),c._mount(o.parentNode,o),c.on("init",l)))},u:function(){detachNode(n),detachNode(o),c&&c._unmount()},d:function(){c&&c.destroy(!1)}}}function PNotify_1(t){init(this,t),this.refs={},this._state=assign(data(),t.data),this._recompute({styling:1,icons:1,width:1,minHeight:1},this._state),document.getElementById("svelte-1eldsjg-style")||add_css(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,callAll(this._beforecreate),callAll(this._oncreate),callAll(this._aftercreate),this._lock=!1)}function createElement(t){return document.createElement(t)}function appendNode(t,e){e.appendChild(t)}function blankObject(){return Object.create(null)}function assign(t,e){for(var i in e)t[i]=e[i];return t}function createText(t){return document.createTextNode(t)}function setAttribute(t,e,i){t.setAttribute(e,i)}function addListener(t,e,i){t.addEventListener(e,i,!1)}function insertNode(t,e,i){e.insertBefore(t,i)}function updateKeyedEach(t,e,i,n,o,s,r,a,c,l,f,u,d){for(var h=t.length,m=s.length,p=h,y={};p--;)y[t[p].key]=p;var _=[],g={},b={};for(p=m;p--;){var v=s[p][n],N=r[v];N?o&&N.p(i,d(p)):(N=l(e,v,d(p))).c(),_[p]=g[v]=N,v in y&&(b[v]=Math.abs(p-y[v]))}var x={},k={},C=c?outroAndDestroyBlock:destroyBlock;function w(t){t[f](a,u),r[t.key]=t,u=t.first,m--}for(;h&&m;){var P=_[m-1],T=t[h-1],L=P.key,S=T.key;P===T?(u=P.first,h--,m--):g[S]?!r[L]||x[L]?w(P):k[S]?h--:b[L]>b[S]?(k[L]=!0,w(P)):(x[S]=!0,h--):(C(T,r),h--)}for(;h--;){g[(T=t[h]).key]||C(T,r)}for(;m;)w(_[m-1]);return _}function detachNode(t){t.parentNode.removeChild(t)}function removeListener(t,e,i){t.removeEventListener(e,i,!1)}function createComment(){return document.createComment("")}function detachBetween(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)}function noop(){}function init(t,e){t._handlers=blankObject(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function assignTrue(t,e){for(var i in e)t[i]=1;return t}function callAll(t){for(;t&&t.length;)t.shift()()}function destroy(t){this.destroy=noop,this.fire("destroy"),this.set=noop,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=null,this._state={}}function get(){return this._state}function fire(t,e){var i=t in this._handlers&&this._handlers[t].slice();if(i)for(var n=0;n<i.length;n+=1){var o=i[n];o.__calling||(o.__calling=!0,o.call(this,e),o.__calling=!1)}}function on(t,e){var i=this._handlers[t]||(this._handlers[t]=[]);return i.push(e),{cancel:function(){var t=i.indexOf(e);~t&&i.splice(t,1)}}}function set(t){this._set(assign({},t)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(t){var e=this._state,i={},n=!1;for(var o in t)this._differs(t[o],e[o])&&(i[o]=n=!0);n&&(this._state=assign(assign({},e),t),this._recompute(i,this._state),this._bind&&this._bind(i,this._state),this._fragment&&(this.fire("state",{changed:i,current:this._state,previous:e}),this._fragment.p(i,this._state),this.fire("update",{changed:i,current:this._state,previous:e})))}function _mount(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}function _unmount(){this._fragment&&this._fragment.u()}function _differs(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function outroAndDestroyBlock(t,e){t.o(function(){destroyBlock(t,e)})}function destroyBlock(t,e){t.u(),t.d(),e[t.key]=null}assign(PNotify_1.prototype,{destroy:destroy,get:get,fire:fire,on:on,set:set,_set:_set,_mount:_mount,_unmount:_unmount,_differs:_differs}),assign(PNotify_1.prototype,methods),PNotify_1.prototype._recompute=function(t,e){t.styling&&this._differs(e._styles,e._styles=_styles(e))&&(t._styles=!0),t.icons&&this._differs(e._icons,e._icons=_icons(e))&&(t._icons=!0),t.width&&this._differs(e._widthStyle,e._widthStyle=_widthStyle(e))&&(t._widthStyle=!0),t.minHeight&&this._differs(e._minHeightStyle,e._minHeightStyle=_minHeightStyle(e))&&(t._minHeightStyle=!0)},setup(PNotify_1);export default PNotify_1;
//# sourceMappingURL=PNotify.js.map