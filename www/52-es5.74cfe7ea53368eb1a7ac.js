function _defineProperties(l,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"GbH+":function(l,n,e){"use strict";e.r(n);var o=e("8Y7J"),t=function l(){_classCallCheck(this,l)},u=e("pMnS"),a=e("SVse"),i=e("Xqnl"),r=e("2MiI"),c=e("iInd"),d=e("sZkV"),s=e("hnS/"),p=e("2Rin"),m=e("8RPc"),g=e("MKJQ"),f=e("6jz6"),_=e("LmEr"),C=function(){function l(n,e,o){_classCallCheck(this,l),this.api=n,this.util=e,this.router=o,this.risks=[]}return _createClass(l,[{key:"ionViewWillEnter",value:function(){var l=this;this.api.getHealthRisk().then((function(n){l.risks=n})).catch((function(l){console.log(l)}))}},{key:"viewRisk",value:function(l){localStorage.setItem("riskid",l.id),this.router.navigate(["risk",l.name])}},{key:"ngOnInit",value:function(){}}]),l}(),v=o["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .category_nameha[_ngcontent-%COMP%]{font-size:20px;color:#007c9d;font-weight:700;padding-top:30px;line-height:20px}ion-content[_ngcontent-%COMP%]   .ShopByProducts[_ngcontent-%COMP%]{padding:30px 50px 50px;background:#ededed}ion-content[_ngcontent-%COMP%]   .popimg[_ngcontent-%COMP%]{border-radius:10px 10px 0 0}ion-content[_ngcontent-%COMP%]   .grid-item-innerha[_ngcontent-%COMP%]{text-align:center;background:#fff;padding:16px;border-top:3px solid var(--ion-color-secondary);margin-bottom:30px}ion-content[_ngcontent-%COMP%]   .desha[_ngcontent-%COMP%]{margin:10px 0}ion-content[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]{background:#ea5b24;color:#fff;font-size:13px;margin:4px auto;text-align:center;display:block;width:50%;padding:10px}"]],data:{}});function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,8,"div",[["class","col-md-12 col-lg-4 col-xl-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,7,"div",[["class","grid-item-innerha"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,0,"img",[["class","popimg"]],[[8,"src",4]],null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,1,"p",[["class","category_nameha"]],null,null,null,null,null)),(l()(),o["\u0275ted"](4,null,["",""])),(l()(),o["\u0275eld"](5,0,null,null,1,"div",[["class","desha"]],[[8,"innerHTML",1]],null,null,null,null)),o["\u0275pid"](0,a.SlicePipe,[]),(l()(),o["\u0275eld"](7,0,null,null,1,"button",[["class","addtocart"],["ion-button",""]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["View Test"]))],null,(function(l,n){l(n,2,0,n.context.$implicit.image),l(n,4,0,n.context.$implicit.name),l(n,5,0,o["\u0275unv"](n,5,0,o["\u0275nov"](n,6).transform(n.context.$implicit.description,0,80)))}))}function k(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,i.b,i.a)),o["\u0275did"](1,114688,null,0,r.a,[c.m,d.NavController,s.a,p.a,m.a],null,null),(l()(),o["\u0275eld"](2,0,null,null,14,"ion-content",[],null,null,null,g.W,g.k)),o["\u0275did"](3,49152,null,0,d.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](4,0,null,0,10,"div",[["class","ShopByProducts"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,4,"div",[["style","margin:30px auto"]],null,null,null,null,null)),(l()(),o["\u0275eld"](8,0,null,null,3,"div",[["class","ct-heading h-align-center item-st-default"],["style","text-align: center;"]],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,1,"div",[["class","item--sub-title style-default"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Health Risk"])),(l()(),o["\u0275eld"](11,0,null,null,0,"img",[["src","assets/org_line.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](12,0,null,null,2,"div",[["class","row col-md-12 col-lg-12 col-xl-12 "]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,h)),o["\u0275did"](14,278528,null,0,a.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["\u0275eld"](15,0,null,0,1,"app-footer",[],null,null,null,f.b,f.a)),o["\u0275did"](16,114688,null,0,_.a,[c.m,d.NavController,s.a,p.a,m.a,d.ModalController],null,null)],(function(l,n){var e=n.component;l(n,1,0),l(n,14,0,e.risks),l(n,16,0)}),null)}var M=o["\u0275ccf"]("app-app-risks",C,(function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-app-risks",[],null,null,null,k,v)),o["\u0275did"](1,114688,null,0,C,[m.a,p.a,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=e("s7LF"),b=function l(){_classCallCheck(this,l)},y=e("xnLu"),P=e("TSSN"),R=e("dVnR"),O=e("STSa"),w=e("j1ZV");e.d(n,"RisksPageModuleNgFactory",(function(){return F}));var F=o["\u0275cmf"](t,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,M]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[o.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,x["\u0275angular_packages_forms_forms_o"],x["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,d.AngularDelegate,d.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,d.ModalController,d.ModalController,[d.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,d.PopoverController,d.PopoverController,[d.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,x.FormBuilder,x.FormBuilder,[]),o["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),o["\u0275mpd"](1073742336,x["\u0275angular_packages_forms_forms_d"],x["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,x.FormsModule,x.FormsModule,[]),o["\u0275mpd"](1073742336,d.IonicModule,d.IonicModule,[]),o["\u0275mpd"](1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),o["\u0275mpd"](1073742336,b,b,[]),o["\u0275mpd"](1073742336,y.a,y.a,[]),o["\u0275mpd"](1073742336,P.g,P.g,[]),o["\u0275mpd"](1073742336,R.a,R.a,[]),o["\u0275mpd"](1073742336,x.ReactiveFormsModule,x.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,O.b,O.b,[]),o["\u0275mpd"](1073742336,w.a,w.a,[]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);