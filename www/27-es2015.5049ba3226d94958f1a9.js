(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{D2Ar:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),a=e("Xqnl"),r=e("2MiI"),i=e("iInd"),d=e("sZkV"),s=e("hnS/"),c=e("2Rin"),m=e("8RPc"),p=e("MKJQ"),g=e("6jz6"),f=e("LmEr"),h=e("mrSG"),b=e("Z4xi");class C{constructor(l,n,e,t,o,u,a,r){this.route=l,this.router=n,this.alertCtrl=e,this.emailComposer=t,this.callNumber=o,this.util=u,this.api=a,this.menu=r,this.menu.enable(!1)}ngOnInit(){this.api.getSettings().then(l=>{this.settings=l[0],this.mobile=this.settings.contact_phone,this.email=this.settings.contact_email}).catch(l=>{console.log(l)})}ionViewWillEnter(){this.isLogin=sessionStorage.getItem("loginStatus")}mail(){this.emailComposer.open({to:this.email,subject:"Support",isHtml:!0})}call(){return h.__awaiter(this,void 0,void 0,(function*(){let l=localStorage.getItem("mobile");(yield this.alertCtrl.create({header:"Confirm",message:"<strong>Are you sure you want to call Aryavrat Agro</strong>",mode:"ios",buttons:[{text:"No",cssClass:"exit-button",role:"cancel",handler:()=>{console.log("Cancel clicked")}},{text:"Yes",cssClass:"login-button",handler:()=>{let n=l;try{this.callNumber.callNumber(n,!0),console.log("Opened dialer")}catch(e){console.error(e||"Error in launching dialer")}}}]})).present()}))}report(){"true"==this.isLogin?this.router.navigate(["/support"]):(console.log("else"),this.util.showLoginAlert())}faqs(){this.router.navigate(["/faqs"])}}var v=t["\u0275crt"]({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{border-bottom:1px dotted #8c8d8a;--border-color:transparent;-webkit-animation:popIn .2s calc(var(--animation-order) * 70ms) both ease-in;animation:popIn .2s calc(var(--animation-order) * 70ms) both ease-in;--padding-left:0px;--inner-padding-end:0px;padding:6px}@-webkit-keyframes popIn{0%{opacity:0;-webkit-transform:scale(.6) translateY(-8px);transform:scale(.6) translateY(-8px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes popIn{0%{opacity:0;-webkit-transform:scale(.6) translateY(-8px);transform:scale(.6) translateY(-8px)}100%{opacity:1;-webkit-transform:none;transform:none}}p[_ngcontent-%COMP%]{font-size:12px}.question[_ngcontent-%COMP%]{font-size:12px;font-weight:700}.price[_ngcontent-%COMP%]{font-size:12px}h3[_ngcontent-%COMP%]{font-weight:700}ion-icon[_ngcontent-%COMP%]{font-size:xx-large}small[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700}.header-text[_ngcontent-%COMP%]{padding:6px 16px;font-weight:700;color:#11998e}"]],data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,a.b,a.a)),t["\u0275did"](1,114688,null,0,r.a,[i.m,d.NavController,s.a,c.a,m.a],null,null),(l()(),t["\u0275eld"](2,0,null,null,50,"ion-content",[],null,null,null,p.W,p.k)),t["\u0275did"](3,49152,null,0,d.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,46,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,13,"ion-item",[],null,null,null,p.db,p.r)),t["\u0275did"](6,49152,null,0,d.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,p.N,p.b)),t["\u0275did"](8,49152,null,0,d.IonAvatar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["name","mail-outline"]],null,null,null,p.bb,p.p)),t["\u0275did"](10,49152,null,0,d.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](11,0,null,0,7,"ion-label",[["text-wrap",""]],null,null,null,p.eb,p.s)),t["\u0275did"](12,49152,null,0,d.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](13,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Email"])),(l()(),t["\u0275eld"](15,0,null,0,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),t["\u0275ted"](16,null,["",""])),(l()(),t["\u0275eld"](17,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["You can email us at the above mentioned Email-Id, we will revert within 48 hours."])),(l()(),t["\u0275eld"](19,0,null,null,13,"ion-item",[],null,null,null,p.db,p.r)),t["\u0275did"](20,49152,null,0,d.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](21,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,p.N,p.b)),t["\u0275did"](22,49152,null,0,d.IonAvatar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](23,0,null,0,1,"ion-icon",[["name","call-outline"]],null,null,null,p.bb,p.p)),t["\u0275did"](24,49152,null,0,d.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](25,0,null,0,7,"ion-label",[["text-wrap",""]],null,null,null,p.eb,p.s)),t["\u0275did"](26,49152,null,0,d.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](27,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Phone"])),(l()(),t["\u0275eld"](29,0,null,0,1,"a",[["href","tel:+919311213388"]],null,null,null,null,null)),(l()(),t["\u0275ted"](30,null,["",""])),(l()(),t["\u0275eld"](31,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["We are now available 24*7"])),(l()(),t["\u0275eld"](33,0,null,null,11,"ion-item",[],null,null,null,p.db,p.r)),t["\u0275did"](34,49152,null,0,d.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](35,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,p.N,p.b)),t["\u0275did"](36,49152,null,0,d.IonAvatar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](37,0,null,0,1,"ion-icon",[["name","create-outline"]],null,null,null,p.bb,p.p)),t["\u0275did"](38,49152,null,0,d.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](39,0,null,0,5,"ion-label",[["text-wrap",""]],null,null,null,p.eb,p.s)),t["\u0275did"](40,49152,null,0,d.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](41,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Feedback"])),(l()(),t["\u0275eld"](43,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["If you have feedback regarding our website and service that you would like to share, we would love to hear from you!"])),(l()(),t["\u0275eld"](45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](46,0,null,null,2,"ion-button",[["expand",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.report()&&t),t}),p.P,p.d)),t["\u0275did"](47,49152,null,0,d.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(l()(),t["\u0275ted"](-1,0,[" Report a issue "])),(l()(),t["\u0275eld"](49,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](51,0,null,0,1,"app-footer",[],null,null,null,g.b,g.a)),t["\u0275did"](52,114688,null,0,f.a,[i.m,d.NavController,s.a,c.a,m.a,d.ModalController],null,null)],(function(l,n){l(n,1,0),l(n,10,0,"mail-outline"),l(n,24,0,"call-outline"),l(n,38,0,"create-outline"),l(n,47,0,""),l(n,52,0)}),(function(l,n){var e=n.component;l(n,15,0,t["\u0275inlineInterpolate"](1,"mailto:",null==e.settings?null:e.settings.contact_email,"")),l(n,16,0,e.email),l(n,30,0,e.mobile)}))}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-contact",[],null,null,null,R,v)),t["\u0275did"](1,114688,null,0,C,[i.a,i.m,d.AlertController,b.a,s.a,c.a,m.a,d.MenuController],null,null)],(function(l,n){l(n,1,0)}),null)}var _=t["\u0275ccf"]("app-contact",C,I,{},{},[]),w=e("SVse"),N=e("s7LF");class x{}var M=e("xnLu"),k=e("TSSN"),y=e("dVnR"),D=e("STSa"),E=e("j1ZV");e.d(n,"ContactPageModuleNgFactory",(function(){return Z}));var Z=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[t.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,N["\u0275angular_packages_forms_forms_o"],N["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,d.AngularDelegate,d.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,d.ModalController,d.ModalController,[d.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,d.PopoverController,d.PopoverController,[d.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,N.FormBuilder,N.FormBuilder,[]),t["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),t["\u0275mpd"](1073742336,N["\u0275angular_packages_forms_forms_d"],N["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,N.FormsModule,N.FormsModule,[]),t["\u0275mpd"](1073742336,d.IonicModule,d.IonicModule,[]),t["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.m]]),t["\u0275mpd"](1073742336,x,x,[]),t["\u0275mpd"](1073742336,M.a,M.a,[]),t["\u0275mpd"](1073742336,k.g,k.g,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,N.ReactiveFormsModule,N.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,D.b,D.b,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,i.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);