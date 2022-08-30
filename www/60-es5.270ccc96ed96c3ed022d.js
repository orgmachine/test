function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"T/HH":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},a=e("pMnS"),i=e("MKJQ"),u=e("sZkV"),c=e("SVse"),r=e("Xqnl"),d=e("2MiI"),s=e("iInd"),m=e("hnS/"),p=e("2Rin"),g=e("8RPc"),f=e("6jz6"),h=e("LmEr"),_=e("wd/R"),C=e("AytR"),y=e("kLM0"),v=function(){function n(l,e,t,o,a){_classCallCheck(this,n),this.api=l,this.util=e,this.router=t,this.razorpayService=o,this.cd=a,this.balance=0,this.currency_="\u20b9",this.activeAmount=1e3,this.showModal=!1,this.url="https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd",this.amounts=[100,200,500,1e3,2e3,5e3,1e4,2e4],this.razorpayService.lazyLoadLibrary("https://checkout.razorpay.com/v1/checkout.js").subscribe(),this.getWalletBalance(),this.getProfile();var i=new Date;this.createdAt=_(i).format("YYYY-MM-DD hh:mm:ss A")}return _createClass(n,[{key:"setStateAsActive",value:function(n){this.activeAmount=n}},{key:"ngOnInit",value:function(){}},{key:"getWalletBalance",value:function(){var n=this,l=sessionStorage.getItem("uid");this.api.getWallet(l).then((function(l){l&&0!=l.length&&(n.wallet_money=l[0],n.balance=n.wallet_money.amount,n.createdAt=n.wallet_money.createdAt)})).catch((function(l){l&&(console.log(l),n.util.showToast("".concat(l),"danger","bottom"))}))}},{key:"getProfile",value:function(){var n=this,l=sessionStorage.getItem("uid");this.api.getMyProfile(l).then((function(l){console.log("my profile",l),l&&(console.log(l),n.profile=l,n.token=l.fcm_token,null==n.name?n.email="":console.log("trigger else"))}),(function(n){console.log(n)})).catch((function(n){console.log(n)}))}},{key:"proceed",value:function(){this.RAZORPAY_OPTIONS={description:"Wallet Recharge",image:this.url,currency:C.a.general.code,key:C.a.razorpay.api_key,amount:100*this.activeAmount,name:"Way2Lab",prefill:{name:this.profile.name,email:this.profile.email,contact:this.profile.phone},theme:{color:"#2C69A5"},modal:{ondismiss:function(){alert("dismissed")}}},console.log(this.RAZORPAY_OPTIONS),this.RAZORPAY_OPTIONS.handler=this.razorPaySuccessHandler.bind(this),new Razorpay(this.RAZORPAY_OPTIONS).open()}},{key:"razorPaySuccessHandler",value:function(n){console.log(n),n.razorpay_payment_id?this.razo(n.razorpay_payment_id):this.util.showToast("Some error occured !!","danger","bottom"),this.razorpayResponse="Razorpay Response",this.showModal=!0,this.cd.detectChanges(),document.getElementById("razorpay-response").style.display="block"}},{key:"razo",value:function(n){var l=this;this.util.show("Please wait....");var e=sessionStorage.getItem("uid"),t=new Date,o=_(t).format("YYYY-MM-DD hh:mm:ss A"),a=Math.floor(1e8+9e8*Math.random()),i={transactionid:n,id:a.toString(),status:"success",createdAt:o,amount:this.activeAmount,uid:e,type:"Wallet"};this.api.addTransaction(a.toString(),i).then((function(n){console.log(n),l.api.addWalletTransaction(a.toString(),i).then((function(n){var e=sessionStorage.getItem("uid"),t=new Date,o=_(t).format("YYYY-MM-DD hh:mm:ss A");Math.floor(1e8+9e8*Math.random()),l.api.addMoneyToWallet(e,{uid:e,createdAt:l.createdAt,updatedAt:o,amount:l.activeAmount+l.balance}).then((function(n){l.util.hide(),l.util.showToast("Money added to wallet successfully","primary","bottom"),l.getWalletBalance(),l.util.publishWalletStatus(!0),l.sendWalletNotification()})).catch((function(n){n&&(l.util.hide(),console.log(n),l.util.showToast("".concat(n),"danger","bottom"))}))})).catch((function(n){l.util.hide(),n&&(l.util.hide(),l.util.showToast("".concat(n),"danger","bottom"))}))})).catch((function(n){n&&(console.log(n),l.util.hide(),l.util.showToast("".concat(n),"danger","bottom"))}))}},{key:"update",value:function(){this.router.navigate(["/tabs/tab1"])}},{key:"sendWalletNotification",value:function(){this.api.sendNotification("Payment Complete","Thank you for your recent payment. You have successfully added "+this.activeAmount+" rupees in your Way2Lab Wallet",this.token).subscribe((function(n){console.log(n)}),(function(n){console.log("err",n)}))}}]),n}(),M=t["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:proxi-extrabold}ion-content[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--input-color);font-family:proxi-extrabold;margin:0 0 30px}ion-content[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}ion-content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:proxi-extrabold;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:var(--input-color);font-family:proxi-extrabold;margin-top:0}ion-content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent;--padding-left:0px;--inner-padding-end:0px;--padding-start:0px;--padding:10px;--border-style:unset;border:1px solid #d8d0bc;text-align:center;color:var(--input-color)}ion-content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700}ion-content[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{--background:var(--ion-color-primary);color:#fff;border:0 solid}ion-content[_ngcontent-%COMP%]   .lower_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:var(--input-color);font-family:proxi-extrabold;margin:0}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:16px 0}ion-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;padding:0 16px;color:var(--input-color)}"]],data:{}});function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-col",[["size","4"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.setStateAsActive(n.context.$implicit)&&t),t}),i.V,i.j)),t["\u0275did"](1,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](2,0,null,0,4,"ion-item",[],[[2,"active",null]],null,null,i.db,i.r)),t["\u0275did"](3,49152,null,0,u.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[],null,null,null,i.eb,i.s)),t["\u0275did"](5,49152,null,0,u.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](6,0,[" "," "," "]))],(function(n,l){n(l,1,0,"4")}),(function(n,l){var e=l.component;n(l,2,0,l.context.$implicit===e.activeAmount),n(l,6,0,e.currency_,l.context.$implicit)}))}function P(n){return t["\u0275vid"](0,[t["\u0275pid"](0,c.DecimalPipe,[t.LOCALE_ID]),(n()(),t["\u0275eld"](1,0,null,null,1,"app-header",[],null,null,null,r.b,r.a)),t["\u0275did"](2,114688,null,0,d.a,[s.m,u.NavController,m.a,p.a,g.a],null,null),(n()(),t["\u0275eld"](3,0,null,null,32,"ion-content",[],null,null,null,i.W,i.k)),t["\u0275did"](4,49152,null,0,u.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,0,28,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,2,"ion-title",[["mode","md"]],null,null,null,i.wb,i.K)),t["\u0275did"](7,49152,null,0,u.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["My Wallet"])),(n()(),t["\u0275eld"](9,0,null,null,7,"div",[["class","wallet"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Wallet Balance"])),(n()(),t["\u0275eld"](12,0,null,null,4,"h1",[],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](14,null,["",""])),(n()(),t["\u0275ted"](15,null,[" ",""])),t["\u0275ppd"](16,2),(n()(),t["\u0275eld"](17,0,null,null,10,"div",[["class","add"]],null,null,null,null,null)),(n()(),t["\u0275eld"](18,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Recharge Wallet"])),(n()(),t["\u0275eld"](20,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Choose from the available recharge packs."])),(n()(),t["\u0275eld"](22,0,null,null,5,"ion-grid",[],null,null,null,i.Z,i.n)),t["\u0275did"](23,49152,null,0,u.IonGrid,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](24,0,null,0,3,"ion-row",[],null,null,null,i.mb,i.A)),t["\u0275did"](25,49152,null,0,u.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](27,278528,null,0,c.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](28,0,null,null,2,"div",[["class","lower_content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Your recharge packs can be used for multiple orders and subscription. "])),(n()(),t["\u0275eld"](31,0,null,null,2,"ion-button",[["mode","md"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.proceed()&&t),t}),i.P,i.d)),t["\u0275did"](32,49152,null,0,u.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275ted"](-1,0,["Proceed to Pay"])),(n()(),t["\u0275eld"](34,0,null,0,1,"app-footer",[],null,null,null,f.b,f.a)),t["\u0275did"](35,114688,null,0,h.a,[s.m,u.NavController,m.a,p.a,g.a,u.ModalController],null,null)],(function(n,l){var e=l.component;n(l,2,0),n(l,27,0,e.amounts),n(l,32,0,"md"),n(l,35,0)}),(function(n,l){var e=l.component;n(l,14,0,e.currency_);var o=t["\u0275unv"](l,15,0,n(l,16,0,t["\u0275nov"](l,0),e.balance,"1.2-2"));n(l,15,0,o)}))}var O=t["\u0275ccf"]("app-wallet",v,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-wallet",[],null,null,null,P,M)),t["\u0275did"](1,114688,null,0,v,[g.a,p.a,s.m,y.a,t.ChangeDetectorRef],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),R=e("s7LF"),w=e("STSa"),k=e("xnLu"),A=e("TSSN"),I=e("dVnR"),x=e("j1ZV"),D=function n(){_classCallCheck(this,n)};e.d(l,"WalletPageModuleNgFactory",(function(){return S}));var S=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,O]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[t.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,R["\u0275angular_packages_forms_forms_o"],R["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,R.FormBuilder,R.FormBuilder,[]),t["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),t["\u0275mpd"](1073742336,R["\u0275angular_packages_forms_forms_d"],R["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,R.FormsModule,R.FormsModule,[]),t["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),t["\u0275mpd"](1073742336,w.b,w.b,[]),t["\u0275mpd"](1073742336,k.a,k.a,[]),t["\u0275mpd"](1073742336,A.g,A.g,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,R.ReactiveFormsModule,R.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),t["\u0275mpd"](1073742336,D,D,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,s.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);