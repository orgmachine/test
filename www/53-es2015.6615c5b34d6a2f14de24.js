(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{RXbx:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),d=u("Xqnl"),a=u("2MiI"),i=u("iInd"),c=u("sZkV"),r=u("hnS/"),g=u("2Rin"),s=u("8RPc"),p=u("MKJQ"),m=u("SVse"),C=u("6jz6"),_=u("LmEr");class f{constructor(l,n,u,e,o){this.router=l,this.route=n,this.navCtrl=u,this.api=e,this.util=o,this.booking_id=localStorage.getItem("bookingid"),console.log(this.booking_id),this.address=localStorage.getItem("boookingaddress"),this.getBooking(this.booking_id)}ngOnInit(){}getBooking(l){this.api.getBookingById(l).then(l=>{this.detail=l[0],this.getSecondaryLab(this.detail.lab_id)}).catch(l=>{console.log(l)})}getSecondaryLab(l){this.api.getSecondaryLabById(l).then(l=>{this.lab_detail=l[0]}).catch(l=>{console.log(l)})}bookings(){this.router.navigate(["/bookings"])}}var M=e["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#fff}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]{padding:0 15% 10%}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:16px}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin:16px 0}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:16px;font-weight:700;background:#e7e7e7}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:adadad}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   .midCnt[_ngcontent-%COMP%]{border:1px solid #d8d0bc}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   .btmCnt[_ngcontent-%COMP%]{padding:26px}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{padding:20px 0 0}ion-content[_ngcontent-%COMP%]   .topCnt[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0 0 20px}"]],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit.itid.test_name)}))}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,d.b,d.a)),e["\u0275did"](1,114688,null,0,a.a,[i.m,c.NavController,r.a,g.a,s.a],null,null),(l()(),e["\u0275eld"](2,0,null,null,75,"ion-content",[],null,null,null,p.W,p.k)),e["\u0275did"](3,49152,null,0,c.IonContent,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](4,0,null,0,71,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,70,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,69,"div",[["class","col-md-12 col-lg-12 col-xl-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,68,"div",[["class","topCnt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Booking Received"])),(l()(),e["\u0275eld"](10,0,null,null,3,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"img",[["src","assets/confirmation.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["We have received your request for the below mentioned test(s). We are checking time slot availability with our collection partner and will confirm your booking shortly."])),(l()(),e["\u0275eld"](14,0,null,null,61,"div",[["class","midCnt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Your Booking Details "])),(l()(),e["\u0275eld"](17,0,null,null,58,"div",[["class","btmCnt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,19,"ion-row",[],null,null,null,p.mb,p.A)),e["\u0275did"](19,49152,null,0,c.IonRow,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](20,0,null,0,5,"ion-col",[],null,null,null,p.V,p.j)),e["\u0275did"](21,49152,null,0,c.IonCol,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](22,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Booking Id"])),(l()(),e["\u0275eld"](24,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["",""])),(l()(),e["\u0275eld"](26,0,null,0,5,"ion-col",[],null,null,null,p.V,p.j)),e["\u0275did"](27,49152,null,0,c.IonCol,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](28,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Amount Paid"])),(l()(),e["\u0275eld"](30,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](31,null,["",""])),(l()(),e["\u0275eld"](32,0,null,0,5,"ion-col",[],null,null,null,p.V,p.j)),e["\u0275did"](33,49152,null,0,c.IonCol,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](34,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment Mode"])),(l()(),e["\u0275eld"](36,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](37,null,["",""])),(l()(),e["\u0275eld"](38,0,null,null,19,"ion-row",[["style","padding-bottom: 0px !important;"]],null,null,null,p.mb,p.A)),e["\u0275did"](39,49152,null,0,c.IonRow,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](40,0,null,0,5,"ion-col",[],null,null,null,p.V,p.j)),e["\u0275did"](41,49152,null,0,c.IonCol,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](42,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Booking Date"])),(l()(),e["\u0275eld"](44,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](45,null,["",""])),(l()(),e["\u0275eld"](46,0,null,0,5,"ion-col",[],null,null,null,p.V,p.j)),e["\u0275did"](47,49152,null,0,c.IonCol,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](48,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Booking Time"])),(l()(),e["\u0275eld"](50,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](51,null,["",""])),(l()(),e["\u0275eld"](52,0,null,0,5,"ion-col",[],null,null,null,p.V,p.j)),e["\u0275did"](53,49152,null,0,c.IonCol,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275eld"](54,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Services Delivery"])),(l()(),e["\u0275eld"](56,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](57,null,["",""])),(l()(),e["\u0275eld"](58,0,null,null,4,"div",[["class","detail"]],null,null,null,null,null)),(l()(),e["\u0275eld"](59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lab Name"])),(l()(),e["\u0275eld"](61,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](62,null,["",""])),(l()(),e["\u0275eld"](63,0,null,null,4,"div",[["class","detail"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Test Name"])),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](67,278528,null,0,m.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](68,0,null,null,4,"div",[["class","detail"]],null,null,null,null,null)),(l()(),e["\u0275eld"](69,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Booking Address"])),(l()(),e["\u0275eld"](71,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](72,null,["",""])),(l()(),e["\u0275eld"](73,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.bookings()&&e),e}),p.P,p.d)),e["\u0275did"](74,49152,null,0,c.IonButton,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(l()(),e["\u0275ted"](-1,0,[" Go To My Bookings "])),(l()(),e["\u0275eld"](76,0,null,0,1,"app-footer",[],null,null,null,C.b,C.a)),e["\u0275did"](77,114688,null,0,_.a,[i.m,c.NavController,r.a,g.a,s.a,c.ModalController],null,null)],(function(l,n){var u=n.component;l(n,1,0),l(n,67,0,null==u.detail?null:u.detail.test_data),l(n,77,0)}),(function(l,n){var u=n.component;l(n,25,0,null==u.detail?null:u.detail.booking_id),l(n,31,0,null==u.detail?null:u.detail.grand_total),l(n,37,0,null==u.detail?null:u.detail.payment_type),l(n,45,0,null==u.detail?null:u.detail.booking_date),l(n,51,0,null==u.detail?null:u.detail.booking_time),l(n,57,0,null==u.detail?null:u.detail.collection_mode),l(n,62,0,null==u.lab_detail?null:u.lab_detail.name),l(n,72,0,u.address)}))}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-summary",[],null,null,null,P,M)),e["\u0275did"](1,114688,null,0,f,[i.m,i.a,c.NavController,s.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var O=e["\u0275ccf"]("app-summary",f,v,{},{},[]),b=u("s7LF");class R{}var k=u("STSa"),y=u("xnLu"),I=u("TSSN"),N=u("dVnR"),w=u("j1ZV");u.d(n,"SummaryPageModuleNgFactory",(function(){return D}));var D=e["\u0275cmf"](o,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,O]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[e.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,b["\u0275angular_packages_forms_forms_o"],b["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,c.AngularDelegate,c.AngularDelegate,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,c.ModalController,c.ModalController,[c.AngularDelegate,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,c.PopoverController,c.PopoverController,[c.AngularDelegate,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,b.FormBuilder,b.FormBuilder,[]),e["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),e["\u0275mpd"](1073742336,b["\u0275angular_packages_forms_forms_d"],b["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,b.FormsModule,b.FormsModule,[]),e["\u0275mpd"](1073742336,c.IonicModule,c.IonicModule,[]),e["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.m]]),e["\u0275mpd"](1073742336,R,R,[]),e["\u0275mpd"](1073742336,k.b,k.b,[]),e["\u0275mpd"](1073742336,y.a,y.a,[]),e["\u0275mpd"](1073742336,I.g,I.g,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,b.ReactiveFormsModule,b.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,w.a,w.a,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,i.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);