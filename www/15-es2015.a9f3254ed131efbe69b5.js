(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2MiI":function(l,n,t){"use strict";t.d(n,"a",(function(){return e})),t("hnS/"),t("8RPc"),t("2Rin");class e{constructor(l,n,t,e,i){this.router=l,this.navCtrl=n,this.callNumber=t,this.util=e,this.api=i,this.cities=[],this.logedIn=!1,this.city="",this.habbits=[],this.risks=[],this.showCity=!1,this.getCities(),this.util.subscribeCityLocation().subscribe(l=>{console.log("after trigger",l),this.showCity=!0,this.city=l,localStorage.setItem("city",this.city)}),this.util.subscribeLoggedInStatus().subscribe(l=>{console.log(l),this.api.isSignedIn=!0,this.logedIn=this.api.isSignedIn,console.log(this.logedIn)}),"true"==sessionStorage.getItem("loginStatus")?(this.api.isSignedIn=!0,this.logedIn=this.api.isSignedIn):(this.api.isSignedIn=!1,this.logedIn=this.api.isSignedIn)}getCities(){this.api.getCities().then(l=>{this.cities=l,this.cities.sort((l,n)=>l.city.localeCompare(n.city)),this.city=localStorage.getItem("city"),console.log(this.cities)}).catch(l=>{console.log(l)})}selectCity(l){console.log(l),this.city=l,this.util.publishCityLocation(this.city)}ngOnInit(){this.api.getSettings().then(l=>{this.settings=l[0]}).catch(l=>{console.log(l)}),this.api.getHealthHabbits().then(l=>{this.habbits=l}).catch(l=>{console.log(l)}),this.api.getHealthRisk().then(l=>{this.risks=l}).catch(l=>{console.log(l)})}packages(){this.router.navigate(["health-packages"])}cart(){this.router.navigate(["cart"])}offers(){this.router.navigate(["offers"])}corporate(){this.router.navigate(["corporate"])}viewRisk(l){localStorage.setItem("riskid",l.id),this.router.navigate(["risk",l.name])}viewHabit(l){localStorage.setItem("habitid",l.id),this.router.navigate(["habit",l.name])}faq(){this.router.navigate(["/faq"])}home(){this.router.navigate(["/home"])}profile(){1==this.api.isSignedIn?this.router.navigate(["/profile"]):this.util.showLoginAlert()}onClick(l){console.log(l),this.router.navigate([l])}openQuery(){this.util.publishQuery("true")}search(){this.router.navigate(["search"])}login(){this.router.navigate(["login"])}logout(){this.api.logout().then(l=>{sessionStorage.setItem("loginStatus","false"),this.api.isSignedIn=!1,sessionStorage.setItem("uid",""),this.router.navigate(["home"])}).catch(l=>{console.log(l)})}uploadPrescription(){this.router.navigate(["add-prescription"])}}},LJbU:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var o=t("pMnS"),a=t("SVse"),u=t("MKJQ"),r=t("sZkV"),s=t("AZG0"),c=t("s7LF"),d=t("bD7s"),g=t("8RPc"),h=t("2Rin"),p=t("cBgN");class f{constructor(l,n,t,e,i,o,a,u){this.route=l,this.api=n,this.util=t,this.navCtrl=e,this.alertController=i,this.router=o,this.datePicker=a,this.modalController=u,this.rating=0,this.allReviews=[],this.route.queryParams.subscribe(l=>{this.allReviews=JSON.parse(l.value),console.log(this.allReviews),this.product_id=l.productid,console.log(this.product_id),this.getProductById(this.product_id)})}getProductById(l){console.log(l)}}var m=t("iInd"),v=e["\u0275crt"]({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--border-color:transparent;--padding-left:0px;--inner-padding-end:5px}.ratings[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-top:1px solid #f5f5f5;border-bottom:1px solid #f5f5f5}.ratings[_ngcontent-%COMP%]   .ratingDiv[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin:10px 0 5px}.ratings[_ngcontent-%COMP%]   .ratingDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;font-size:14px;margin-left:5px}.reviews[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding-left:16px}.reviews[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px}.reviews[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{white-space:normal}.reviews[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin:0 16px}.reviews[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50px}.reviews[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin:12px;font-weight:600}"]],data:{}});function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.imagePath)}))}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["src","assets/noProfile.jpg"]],null,null,null,null,null))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,21,"div",[["style","margin: 16px 0px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","profile"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](3,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](5,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,13,"ion-item",[],null,null,null,u.db,u.r)),e["\u0275did"](9,49152,null,0,r.IonItem,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](10,0,null,0,11,"ion-label",[],null,null,null,u.eb,u.s)),e["\u0275did"](11,49152,null,0,r.IonLabel,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](12,0,null,0,2,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","12px"],["halfIcon","star-half"],["halfStar","true"],["readonly","true"]],null,null,null,s.b,s.a)),e["\u0275prd"](5120,null,c.NG_VALUE_ACCESSOR,(function(l){return[l]}),[d.a]),e["\u0275did"](14,114688,[["rating",4]],0,d.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],halfIcon:[6,"halfIcon"],halfStar:[7,"halfStar"],fontSize:[8,"fontSize"]},null),(l()(),e["\u0275eld"](15,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,["Reviewed on ",""])),e["\u0275ppd"](17,1),(l()(),e["\u0275eld"](18,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""])),(l()(),e["\u0275eld"](20,0,null,0,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](21,null,["",""]))],(function(l,n){l(n,3,0,""!=n.context.$implicit.imagePath),l(n,5,0,""==n.context.$implicit.imagePath),l(n,14,0,n.context.$implicit.rating,"true","#439213","black","star","star-outline","star-half","true","12px")}),(function(l,n){l(n,7,0,n.context.$implicit.name);var t=e["\u0275unv"](n,16,0,l(n,17,0,e["\u0275nov"](n.parent,0),n.context.$implicit.createdAt));l(n,16,0,t),l(n,19,0,n.context.$implicit.title),l(n,21,0,n.context.$implicit.comment)}))}function R(l){return e["\u0275vid"](0,[e["\u0275pid"](0,a.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,11,"ion-header",[],null,null,null,u.ab,u.o)),e["\u0275did"](2,49152,null,0,r.IonHeader,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](3,0,null,0,9,"ion-toolbar",[],null,null,null,u.xb,u.L)),e["\u0275did"](4,49152,null,0,r.IonToolbar,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,u.Q,u.e)),e["\u0275did"](6,49152,null,0,r.IonButtons,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](7,0,null,0,2,"ion-back-button",[["mode","md"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e["\u0275nov"](l,9).onClick(t)&&i),i}),u.O,u.c)),e["\u0275did"](8,49152,null,0,r.IonBackButton,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),e["\u0275did"](9,16384,null,0,r.IonBackButtonDelegate,[[2,r.IonRouterOutlet],r.NavController],null,null),(l()(),e["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,u.wb,u.K)),e["\u0275did"](11,49152,null,0,r.IonTitle,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275ted"](-1,0,["Customer Reviews"])),(l()(),e["\u0275eld"](13,0,null,null,24,"ion-content",[],null,null,null,u.W,u.k)),e["\u0275did"](14,49152,null,0,r.IonContent,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](15,0,null,0,15,"div",[["class","ratings"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,14,"ion-item",[],null,null,null,u.db,u.r)),e["\u0275did"](17,49152,null,0,r.IonItem,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](18,0,null,0,12,"ion-label",[],null,null,null,u.eb,u.s)),e["\u0275did"](19,49152,null,0,r.IonLabel,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](20,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Customer reviews"])),(l()(),e["\u0275eld"](23,0,null,0,5,"div",[["class","ratingDiv"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,2,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","14px"],["halfIcon","star-half"],["halfStar","true"],["readonly","true"]],null,null,null,s.b,s.a)),e["\u0275prd"](5120,null,c.NG_VALUE_ACCESSOR,(function(l){return[l]}),[d.a]),e["\u0275did"](26,114688,[["rating",4]],0,d.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],halfIcon:[6,"halfIcon"],halfStar:[7,"halfStar"],fontSize:[8,"fontSize"]},null),(l()(),e["\u0275eld"](27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,[" "," out of 5"])),(l()(),e["\u0275eld"](29,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,[""," overall ratings"])),(l()(),e["\u0275eld"](31,0,null,0,6,"div",[["class","reviews"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,2,"h5",[],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Top customers reviews"])),(l()(),e["\u0275and"](16777216,null,null,2,null,b)),e["\u0275did"](36,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](0,a.SlicePipe,[])],(function(l,n){var t=n.component;l(n,8,0,"md"),l(n,26,0,t.avg_rating,"true","#439213","black","star","star-outline","star-half","true","14px"),l(n,36,0,e["\u0275unv"](n,36,0,e["\u0275nov"](n,37).transform(t.allReviews,0,3)))}),(function(l,n){var t=n.component;l(n,28,0,t.avg_rating),l(n,30,0,t.rating_count)}))}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-reviews",[],null,null,null,R,v)),e["\u0275did"](1,49152,null,0,f,[m.a,g.a,h.a,r.NavController,r.AlertController,m.m,p.a,r.ModalController],null,null)],null,null)}var S=e["\u0275ccf"]("app-reviews",f,_,{},{},[]),w=t("Xh6l"),M=t("Fsm4");class P{}var y=t("STSa"),x=t("xnLu"),k=t("TSSN"),O=t("dVnR"),N=t("j1ZV"),D=t("gMqc");t.d(n,"ReviewsPageModuleNgFactory",(function(){return L}));var L=e["\u0275cmf"](i,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,S,w.a,M.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,c["\u0275angular_packages_forms_forms_o"],c["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,r.AngularDelegate,r.AngularDelegate,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,r.ModalController,r.ModalController,[r.AngularDelegate,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,r.PopoverController,r.PopoverController,[r.AngularDelegate,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,c.FormBuilder,c.FormBuilder,[]),e["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](1073742336,c["\u0275angular_packages_forms_forms_d"],c["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,c.FormsModule,c.FormsModule,[]),e["\u0275mpd"](1073742336,r.IonicModule,r.IonicModule,[]),e["\u0275mpd"](1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e["\u0275mpd"](1073742336,P,P,[]),e["\u0275mpd"](1073742336,y.b,y.b,[]),e["\u0275mpd"](1073742336,x.a,x.a,[]),e["\u0275mpd"](1073742336,k.g,k.g,[]),e["\u0275mpd"](1073742336,O.a,O.a,[]),e["\u0275mpd"](1073742336,c.ReactiveFormsModule,c.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,d.b,d.b,[]),e["\u0275mpd"](1073742336,D.b,D.b,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,m.k,(function(){return[[{path:"",component:f}]]}),[])])}))},LmEr:function(l,n,t){"use strict";t.d(n,"a",(function(){return e})),t("hnS/"),t("8RPc"),t("2Rin");class e{constructor(l,n,t,e,i,o){this.router=l,this.navCtrl=n,this.callNumber=t,this.util=e,this.api=i,this.modalController=o,this.logedIn=!1,this.slideOptsmob2={slidesPerView:1,pagination:!0,autoplay:!0,pager:!0,spaceBetween:10},"true"==sessionStorage.getItem("loginStatus")?(this.api.isSignedIn=!0,this.logedIn=this.api.isSignedIn):(this.api.isSignedIn=!1,this.logedIn=this.api.isSignedIn)}ngOnInit(){this.api.getSettings().then(l=>{this.settings=l[0],this.address=this.settings.address}).catch(l=>{console.log(l)})}packages(){this.router.navigate(["health-packages"])}offers(){this.router.navigate(["offers"])}health(){this.router.navigate(["/health-habits"])}risk(){this.router.navigate(["/risks"])}faq(){this.router.navigate(["/faq"])}refund(){this.router.navigate(["/refund"])}profile(){1==this.api.isSignedIn?this.router.navigate(["/profile"]):this.util.showLoginAlert()}}},dVnR:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{}},j1ZV:function(l,n,t){"use strict";t("2MiI"),t("LmEr"),t.d(n,"a",(function(){return e}));class e{}},xnLu:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{}}}]);