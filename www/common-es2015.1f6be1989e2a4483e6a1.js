(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{AZG0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var o=t("8Y7J"),i=(t("bD7s"),t("SVse")),l=t("sZkV"),r=t("MKJQ"),s=(t("s7LF"),o["\u0275crt"]({encapsulation:0,styles:[".ionic5-star-rating[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }"],data:{}}));function a(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,8,"button",[["icon-only",""],["ion-button",""],["type","button"]],[[8,"id",0]],[[null,"click"]],(function(e,n,t){var o=!0;return"click"===n&&(o=!1!==e.component.changeRating(t)&&o),o}),null,null)),o["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[o.ElementRef,o.KeyValueDiffers,o.Renderer2]),o["\u0275did"](2,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),o["\u0275pod"](3,{width:0,height:1}),(e()(),o["\u0275eld"](4,0,null,null,4,"ion-icon",[],null,null,null,r.bb,r.p)),o["\u0275did"](5,49152,null,0,l.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),o["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[o.ElementRef,o.KeyValueDiffers,o.Renderer2]),o["\u0275did"](7,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),o["\u0275pod"](8,{color:0,"font-size":1})],(function(e,n){var t=n.component,i=e(n,3,0,t.fontSize,t.fontSize);e(n,2,0,i),e(n,5,0,o["\u0275inlineInterpolate"](1,"","true"===t.halfStar&&t.rating-n.context.$implicit>0&&t.rating-n.context.$implicit<=.5?t.halfIcon:n.context.$implicit<t.Math.round(t.parseFloat(t.rating))?t.activeIcon:t.defaultIcon,""));var l=e(n,8,0,n.context.$implicit<t.Math.round(t.parseFloat(t.rating))?t.activeColor:t.defaultColor,t.fontSize);e(n,7,0,l)}),(function(e,n){e(n,0,0,o["\u0275inlineInterpolate"](1,"",n.context.$implicit,""))}))}function c(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","ionic5-star-rating"]],null,null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,a)),o["\u0275did"](2,278528,null,0,i.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,n){e(n,2,0,n.component.iconsArray)}),null)}},CqG3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}(t("g+7Q"))},Dl6n:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return s}));const o=(e,n)=>null!==n.closest(e),i=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,l=e=>{const n={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>n[e]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,s=async(e,n,t)=>{if(null!=e&&"#"!==e[0]&&!r.test(e)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(e,t)}return!1}},TMBv:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(e,n,t)=>{const o=`${e*n/t-e}ms`,i=2*Math.PI*n/t;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(e,n,t)=>{const o=n/t,i=`${e*o-e}ms`,l=2*Math.PI*o;return{r:5,style:{top:`${9*Math.sin(l)}px`,left:`${9*Math.cos(l)}px`,"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,n)=>({r:6,style:{left:`${9-9*n}px`,"animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,n,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${e*n/t-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,n,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${e*n/t-e}ms`}})}}},Uch9:function(e,n,t){"use strict";t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return b})),t.d(n,"d",(function(){return w})),t.d(n,"e",(function(){return l}));var o=t("54nT"),i=t("kBU6");const l=e=>new Promise((n,t)=>{Object(o.l)(()=>{r(e),s(e).then(t=>{t.animation&&t.animation.destroy(),a(e),n(t)},n=>{a(e),t(n)})})}),r=e=>{const n=e.enteringEl,t=e.leavingEl;C(n,t,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),w(n,!1),t&&w(t,!1)},s=async e=>{const n=await c(e);return n?u(n,e):d(e)},a=e=>{const n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},c=async e=>{if(e.leavingEl&&e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?(await t.e(140).then(t.bind(null,"QtHV"))).iosTransitionAnimation:(await t.e(141).then(t.bind(null,"cmQl"))).mdTransitionAnimation},u=async(e,n)=>{await f(n,!0);const t=e(n.baseEl,n);h(n.enteringEl,n.leavingEl);const o=await g(t,n);return n.progressCallback&&n.progressCallback(void 0),o&&m(n.enteringEl,n.leavingEl),{hasCompleted:o,animation:t}},d=async e=>{const n=e.enteringEl,t=e.leavingEl;return await f(e,!1),h(n,t),m(n,t),{hasCompleted:!0}},f=async(e,n)=>{const t=(void 0!==e.deepWait?e.deepWait:n)?[v(e.enteringEl),v(e.leavingEl)]:[y(e.enteringEl),y(e.leavingEl)];await Promise.all(t),await p(e.viewIsReady,e.enteringEl)},p=async(e,n)=>{e&&await e(n)},g=(e,n)=>{const t=n.progressCallback,o=new Promise(n=>{e.onFinish(e=>n(1===e))});return t?(e.progressStart(!0),t(e)):e.play(),o},h=(e,n)=>{b(n,i.c),b(e,i.a)},m=(e,n)=>{b(e,i.b),b(n,i.d)},b=(e,n)=>{if(e){const t=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},y=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),v=async e=>{const n=e;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(v))}},w=(e,n)=>{n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},C=(e,n,t)=>{void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")},S=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e},W8Xk:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));const{parse:o,stringify:i}=JSON,{keys:l}=Object,r=String,s={},a=(e,n)=>n,c=e=>e instanceof r?r(e):e,u=(e,n)=>"string"==typeof n?new r(n):n,d=(e,n,t,o)=>{const i=[];for(let a=l(t),{length:c}=a,u=0;u<c;u++){const l=a[u],c=t[l];if(c instanceof r){const r=e[c];"object"!=typeof r||n.has(r)?t[l]=o.call(t,l,r):(n.add(r),t[l]=s,i.push({k:l,a:[e,n,r,o]}))}else t[l]!==s&&(t[l]=o.call(t,l,c))}for(let{length:l}=i,r=0;r<l;r++){const{k:e,a:n}=i[r];t[e]=o.call(t,e,d.apply(null,n))}return t},f=(e,n,t)=>{const o=r(n.push(t)-1);return e.set(t,o),o},p=(e,n)=>{const t=o(e,u).map(c),i=t[0],l=n||a,r="object"==typeof i&&i?d(t,new Set,i,l):i;return l.call({"":r},"",r)},g=(e,n,t)=>{const o=n&&"object"==typeof n?(e,t)=>""===e||-1<n.indexOf(e)?t:void 0:n||a,l=new Map,r=[],s=[];let c=+f(l,r,o.call({"":e},"",e)),u=!c;for(;c<r.length;)u=!0,s[c]=i(r[c++],d,t);return"["+s.join(",")+"]";function d(e,n){if(u)return u=!u,n;const t=o.call(this,e,n);switch(typeof t){case"object":if(null===t)return t;case"string":return l.get(t)||f(l,r,t)}return t}}},Xh6l:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var o=t("8Y7J"),i=t("gMqc"),l=t("SVse"),r=t("sZkV"),s=t("MKJQ"),a=o["\u0275crt"]({encapsulation:0,styles:["ion-slides[_ngcontent-%COMP%]{--height:100%;height:100%}ion-toolbar[_ngcontent-%COMP%]{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header[_ngcontent-%COMP%]{opacity:1;position:absolute}ion-header.no-title[_ngcontent-%COMP%]:after{content:none}ion-header.no-title[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-footer.no-text[_ngcontent-%COMP%]:before{content:none}ion-footer.no-text[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"],data:{}});function c(e){return o["\u0275vid"](0,[o["\u0275qud"](402653184,1,{slides:0}),(e()(),o["\u0275eld"](1,0,null,null,15,"ion-header",[],null,null,null,s.ab,s.o)),o["\u0275prd"](512,null,l["\u0275NgClassImpl"],l["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](3,278528,null,0,l.NgClass,[l["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),o["\u0275pod"](4,{"no-title":0}),o["\u0275did"](5,49152,null,0,r.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](6,0,null,0,10,"ion-toolbar",[],null,null,null,s.xb,s.L)),o["\u0275did"](7,49152,null,0,r.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](8,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,s.Q,s.e)),o["\u0275did"](9,49152,null,0,r.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](10,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,n,t){var o=!0;return"click"===n&&(o=!1!==e.component.closeModal()&&o),o}),s.P,s.d)),o["\u0275did"](11,49152,null,0,r.IonButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](12,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,s.bb,s.p)),o["\u0275did"](13,49152,null,0,r.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(e()(),o["\u0275eld"](14,0,null,0,2,"ion-title",[],null,null,null,s.wb,s.K)),o["\u0275did"](15,49152,null,0,r.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(e()(),o["\u0275ted"](16,0,["",""])),(e()(),o["\u0275eld"](17,0,null,null,3,"ion-content",[],null,null,null,s.W,s.k)),o["\u0275did"](18,49152,null,0,r.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{forceOverscroll:[0,"forceOverscroll"]},null),(e()(),o["\u0275eld"](19,0,null,0,1,"ion-slides",[],null,null,null,s.rb,s.F)),o["\u0275did"](20,49152,[[1,4],["sliderRef",4]],0,r.IonSlides,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{options:[0,"options"]},null),(e()(),o["\u0275eld"](21,0,null,null,9,"ion-footer",[],null,null,null,s.Y,s.m)),o["\u0275prd"](512,null,l["\u0275NgClassImpl"],l["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](23,278528,null,0,l.NgClass,[l["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),o["\u0275pod"](24,{"no-text":0}),o["\u0275did"](25,49152,null,0,r.IonFooter,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](26,0,null,0,4,"ion-toolbar",[["class","ion-text-center"]],null,null,null,s.xb,s.L)),o["\u0275did"](27,49152,null,0,r.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](28,0,null,0,2,"ion-text",[],null,null,null,s.tb,s.H)),o["\u0275did"](29,49152,null,0,r.IonText,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275ted"](30,0,["",""]))],(function(e,n){var t=n.component,o=e(n,4,0,t.title.length<=0);e(n,3,0,o),e(n,13,0,"close"),e(n,15,0,t.titleSize),e(n,18,0,!1),e(n,20,0,t.options);var i=e(n,24,0,t.text.length<=0);e(n,23,0,i)}),(function(e,n){var t=n.component;e(n,16,0,t.title),e(n,30,0,t.text)}))}function u(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"ion-viewer-modal",[],null,null,null,c,a)),o["\u0275did"](1,114688,null,0,i.c,[r.ModalController],null,null)],(function(e,n){e(n,1,0)}),null)}var d=o["\u0275ccf"]("ion-viewer-modal",i.c,u,{alt:"alt",scheme:"scheme",slideOptions:"slideOptions",src:"src",srcFallback:"srcFallback",srcHighRes:"srcHighRes",swipeToClose:"swipeToClose",text:"text",title:"title",titleSize:"titleSize"},{},[])},YtD4:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));const o=e=>{try{if("string"!=typeof e||""===e)return e;const n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,s.forEach(e=>{const t=n.querySelectorAll(e);for(let o=t.length-1;o>=0;o--){const e=t[o];e.parentNode?e.parentNode.removeChild(e):n.removeChild(e);const r=l(e);for(let n=0;n<r.length;n++)i(r[n])}});const o=l(n);for(let e=0;e<o.length;e++)i(o[e]);const r=document.createElement("div");r.appendChild(n);const a=r.querySelector("div");return null!==a?a.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let t=e.attributes.length-1;t>=0;t--){const n=e.attributes.item(t),o=n.name;if(!r.includes(o.toLowerCase())){e.removeAttribute(o);continue}const i=n.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}const n=l(e);for(let t=0;t<n.length;t++)i(n[t])},l=e=>null!=e.children?e.children:e.childNodes,r=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},"g+7Q":function(e,n,t){"use strict";t.r(n);var o=t("Xr7G"),i=t("m7gy"),l=t("m+Ru"),r=t("fKx8"),s=t("bMVn"),a=t("iKj2"),c=t("cNHj");t.d(n,"EnablePersistenceToken",(function(){return o.d})),t.d(n,"PersistenceSettingsToken",(function(){return o.g})),t.d(n,"FirestoreSettingsToken",(function(){return o.e})),t.d(n,"ENABLE_PERSISTENCE",(function(){return o.c})),t.d(n,"PERSISTENCE_SETTINGS",(function(){return o.f})),t.d(n,"SETTINGS",(function(){return o.h})),t.d(n,"DefaultFirestoreSettings",(function(){return o.b})),t.d(n,"associateQuery",(function(){return o.i})),t.d(n,"AngularFirestore",(function(){return o.a})),t.d(n,"AngularFirestoreModule",(function(){return i.a})),t.d(n,"validateEventsArray",(function(){return l.b})),t.d(n,"AngularFirestoreCollection",(function(){return l.a})),t.d(n,"AngularFirestoreCollectionGroup",(function(){return r.a})),t.d(n,"AngularFirestoreDocument",(function(){return s.a})),t.d(n,"docChanges",(function(){return a.c})),t.d(n,"sortedChanges",(function(){return a.d})),t.d(n,"combineChanges",(function(){return a.b})),t.d(n,"combineChange",(function(){return a.a})),t.d(n,"fromRef",(function(){return c.c})),t.d(n,"fromDocRef",(function(){return c.b})),t.d(n,"fromCollectionRef",(function(){return c.a}))},gMqc:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t("8Y7J");var o=t("mrSG");class i{constructor(e){this.modalController=e,this.alt="",this.scheme="auto",this.slideOptions={},this.srcFallback="",this.srcHighRes="",this.swipeToClose=!0,this.text="",this.title="",this.titleSize="",this.defaultSlideOptions={centeredSlides:!0,passiveListeners:!1,zoom:{enabled:!0}},this.options={},this.swipeState={phase:"init",direction:"none",swipeType:"none",startX:0,startY:0,distance:0,distanceX:0,distanceY:0,threshold:150,restraint:100,allowedTime:500,elapsedTime:0,startTime:0}}ngOnInit(){return Object(o.__awaiter)(this,void 0,void 0,(function*(){this.options=Object.assign({},this.defaultSlideOptions,this.slideOptions),this.src=this.srcHighRes||this.src,this.setStyle(),this.setScheme(this.scheme),this.initSwipeToClose(this.swipeToClose),(yield this.slides.getSwiper()).appendSlide(`<ion-slide><img alt="${this.alt}" src="${this.src}" onerror="this.src='${this.srcFallback}'"/></ion-slide>`)}))}setStyle(){const e=document.querySelector(".ion-img-viewer");e.style.setProperty("--height","100%"),e.style.setProperty("--width","100%"),e.style.setProperty("--border-radius","0")}setScheme(e){if("auto"===e)return;const n=document.querySelector(".ion-img-viewer");"light"===this.scheme&&(n.style.setProperty("--ion-background-color","#ffffff"),n.style.setProperty("--ion-background-color-rgb","255, 255, 255"),n.style.setProperty("--ion-text-color","#000"),n.style.setProperty("--ion-text-color-rgb","0,0,0")),"dark"===this.scheme&&(n.classList.contains("ios")?(n.style.setProperty("--ion-background-color","#000000"),n.style.setProperty("--ion-background-color-rgb","0, 0, 0")):(n.style.setProperty("--ion-background-color","#121212"),n.style.setProperty("--ion-background-color-rgb","18,18,18")),n.style.setProperty("--ion-text-color","#ffffff"),n.style.setProperty("--ion-text-color-rgb","255,255,255"))}initSwipeToClose(e=!0){if(!e)return;const n=document.querySelector("ion-modal");n.addEventListener("mousedown",e=>this.swipeStart(e),!0),n.addEventListener("mousemove",e=>this.swipeMove(e),!0),n.addEventListener("mouseup",e=>this.swipeEnd(e),!0),n.addEventListener("touchstart",e=>this.swipeStart(e),!0),n.addEventListener("touchmove",e=>this.swipeMove(e),!0),n.addEventListener("touchend",e=>this.swipeEnd(e),!0),this.modalController.getTop().then(e=>{e.onWillDismiss().then(()=>{document.removeEventListener("mousedown",this.swipeStart,!0),document.removeEventListener("mousemove",this.swipeMove,!0),document.removeEventListener("mouseup",this.swipeMove,!0),document.removeEventListener("touchstart",this.swipeStart,!0),document.removeEventListener("touchmove",this.swipeMove,!0),document.removeEventListener("touchend",this.swipeMove,!0)})})}swipeStart(e){const{pageX:n,pageY:t}="touchstart"===e.type?e.changedTouches[0]:e;this.swipeState=Object.assign({},this.swipeState,{phase:"start",direction:"none",distance:0,startX:n,startY:t,startTime:(new Date).getTime()})}swipeMove(e){if("none"===this.swipeState.phase)return;const{pageX:n,pageY:t}="touchmove"===e.type?e.changedTouches[0]:e,o=n-this.swipeState.startX,i=t-this.swipeState.startY;let l,r;Math.abs(o)>Math.abs(i)?(l=o<0?"left":"right",r=o):(l=i<0?"up":"down",r=i),this.swipeState=Object.assign({},this.swipeState,{phase:"move",direction:l,distance:r,distanceX:o,distanceY:i}),e.preventDefault()}swipeEnd(e){if("none"===this.swipeState.phase)return;const{allowedTime:n,direction:t,restraint:o,startTime:i,threshold:l,distanceX:r,distanceY:s}=this.swipeState;let a;return(new Date).getTime()-i<=n&&(Math.abs(r)>=l&&Math.abs(s)<=o?a=t:Math.abs(s)>=l&&Math.abs(r)<=o&&(a=t)),this.swipeState=Object.assign({},this.swipeState,{phase:"end",swipeType:a}),"down"===a?this.closeModal():void 0}closeModal(){this.modalController.dismiss()}}class l{constructor(e){this.modalController=e}viewImage(e,n="",t="",l="",r="",s="",a="auto",c={},u=!0){return Object(o.__awaiter)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:i,componentProps:{src:e,srcFallback:n,srcHighRes:t,title:l,titleSize:r,text:s,scheme:a,slideOptions:c,swipeToClose:u},cssClass:this.cssClass instanceof Array?["ion-img-viewer",...this.cssClass]:["ion-img-viewer",this.cssClass],keyboardClose:!0,showBackdrop:!0});return yield o.present()}))}ngOnInit(){}}class r{}},iTUp:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));class o{}},m9yc:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));const o=async(e,n,t,o,i)=>{if(e)return e.attachViewToDom(n,t,i,o);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t;return o&&o.forEach(e=>l.classList.add(e)),i&&Object.assign(l,i),n.appendChild(l),l.componentOnReady&&await l.componentOnReady(),l},i=(e,n)=>{if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},opz7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return o}));const o=()=>{const e=window.TapticEngine;e&&e.selection()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},l=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},r=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}},xaSU:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));class o{transform(e,n){return e?n?(n=n.toLowerCase(),e.filter(e=>{if(0!==e.synonyms_name.length)return e.synonyms_name.toLowerCase().includes(n)})):e:[]}}}}]);