function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{u2mw:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=function l(){_classCallCheck(this,l)},u=e("pMnS"),r=e("MKJQ"),a=e("sZkV"),i=e("SVse"),d=e("Xqnl"),s=e("2MiI"),c=e("iInd"),m=e("hnS/"),p=e("2Rin"),g=e("8RPc"),f=e("6jz6"),h=e("LmEr"),b=e("mrSG"),C=e("lCZB"),_=function(){function l(n,e,t,o,u,r,a){_classCallCheck(this,l),this.route=n,this.router=e,this.api=t,this.util=o,this.alertCtrl=u,this.modalController=r,this.menu=a,this.members=[],this.haveItems=!1,this.dues=[],this.segmentModel="due"}return _createClass(l,[{key:"ionViewWillEnter",value:function(){var l=this,n=sessionStorage.getItem("uid");this.api.getMemberByUId(n).then((function(n){console.log(n),l.members=n})).catch((function(n){n&&(console.log(n),l.util.showToast("".concat(n),"danger","bottom"))}))}},{key:"openModal",value:function(){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,e=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return localStorage.setItem("routeFrom","add"),l.next=3,this.modalController.create({component:C.a,cssClass:"update-modal-css"});case 3:return(n=l.sent).onDidDismiss().then((function(l){e.ionViewWillEnter()})),l.next=7,n.present();case 7:return l.abrupt("return",l.sent);case 8:case"end":return l.stop()}}),l,this)})))}},{key:"edit",value:function(l){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return localStorage.setItem("memberid",l),localStorage.setItem("routeFrom","edit"),n.next=3,this.modalController.create({component:C.a,cssClass:"update-modal-css"});case 3:return(e=n.sent).onDidDismiss().then((function(l){t.ionViewWillEnter()})),n.next=7,e.present();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n,this)})))}},{key:"delete",value:function(l){var n=this,e=sessionStorage.getItem("uid");this.api.deleteMember(e,l).then((function(l){console.log(l),n.members=[],n.ionViewWillEnter(),n.util.showToast("Patient Deleted Successfully","primary","bottom")})).catch((function(l){l&&(console.log(l),n.util.showToast("".concat(l),"danger","bottom"))}))}}]),l}(),v=t["\u0275crt"]({encapsulation:0,styles:[[".noData[_ngcontent-%COMP%]{text-align:center;margin-top:5%;font-weight:700}ion-item[_ngcontent-%COMP%]{--border-color:transparent;-webkit-animation:popIn .2s calc(var(--animation-order) * 70ms) both ease-in;animation:popIn .2s calc(var(--animation-order) * 70ms) both ease-in}@-webkit-keyframes popIn{0%{opacity:0;-webkit-transform:scale(.6) translateY(-8px);transform:scale(.6) translateY(-8px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes popIn{0%{opacity:0;-webkit-transform:scale(.6) translateY(-8px);transform:scale(.6) translateY(-8px)}100%{opacity:1;-webkit-transform:none;transform:none}}.orderList[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px;color:#929292;text-align:center;margin:10px}.orderList[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:x-large;margin-right:10px}.orderList[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.orderList[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:8px}.orderList[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:14px;margin-bottom:5px}.starend[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.enddat[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .strtdat[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #d8d0bc;font-size:14px;padding:0 10px;width:100%;color:#000;height:40px}.starend[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{background:#fff;padding:10px;margin:0}.enddat[_ngcontent-%COMP%]{margin-right:10px}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","noData"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"img",[["src","assets/no_data_found.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Patients Yet"]))],null,null)}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,["",""])),t["\u0275ppd"](8,1),(l()(),t["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""])),(l()(),t["\u0275eld"](11,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,2,"ion-button",[["expand",""],["style","margin-bottom: 5px;margin-right: 6px;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.edit(l.context.$implicit.id)&&t),t}),r.P,r.d)),t["\u0275did"](13,49152,null,0,a.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(l()(),t["\u0275ted"](-1,0,["Edit"])),(l()(),t["\u0275eld"](15,0,null,null,2,"ion-button",[["expand",""],["style","--background: black;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.delete(l.context.$implicit.id)&&t),t}),r.P,r.d)),t["\u0275did"](16,49152,null,0,a.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(l()(),t["\u0275ted"](-1,0,["Delete"]))],(function(l,n){l(n,13,0,""),l(n,16,0,"")}),(function(l,n){l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.id);var e=t["\u0275unv"](n,7,0,l(n,8,0,t["\u0275nov"](n.parent.parent,0),n.context.$implicit.dob));l(n,7,0,e),l(n,10,0,n.context.$implicit.gender)}))}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,15,"table",[["class","table"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Name"])),(l()(),t["\u0275eld"](6,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Member Id"])),(l()(),t["\u0275eld"](8,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date of birth"])),(l()(),t["\u0275eld"](10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Gender"])),(l()(),t["\u0275eld"](12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Action"])),(l()(),t["\u0275eld"](14,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](16,278528,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,16,0,n.component.members)}),null)}function w(l){return t["\u0275vid"](0,[t["\u0275pid"](0,i.DatePipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,1,"app-header",[],null,null,null,d.b,d.a)),t["\u0275did"](2,114688,null,0,s.a,[c.m,a.NavController,m.a,p.a,g.a],null,null),(l()(),t["\u0275eld"](3,0,null,null,16,"ion-content",[],null,null,null,r.W,r.k)),t["\u0275did"](4,49152,null,0,a.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,6,"div",[["class","col-md-12 col-lg-12 col-xl-12"],["style","display: flex;justify-content: space-between;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Members Listing "])),(l()(),t["\u0275eld"](10,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,2,"ion-button",[["class","btn_class"],["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openModal()&&t),t}),r.P,r.d)),t["\u0275did"](12,49152,null,0,a.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),t["\u0275ted"](-1,0,[" Add Patient"])),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](15,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](17,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](18,0,null,0,1,"app-footer",[],null,null,null,f.b,f.a)),t["\u0275did"](19,114688,null,0,h.a,[c.m,a.NavController,m.a,p.a,g.a,a.ModalController],null,null)],(function(l,n){var e=n.component;l(n,2,0),l(n,12,0,"block","submit"),l(n,15,0,0==e.members.length),l(n,17,0,0!==e.members.length),l(n,19,0)}),null)}var y=t["\u0275ccf"]("app-members",_,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-members",[],null,null,null,w,v)),t["\u0275did"](1,49152,null,0,_,[c.a,c.m,g.a,p.a,a.AlertController,a.ModalController,a.MenuController],null,null)],null,null)}),{},{},[]),P=e("s7LF"),I=function l(){_classCallCheck(this,l)},R=e("xnLu"),O=e("TSSN"),D=e("dVnR"),F=e("STSa"),N=e("j1ZV");e.d(n,"MembersPageModuleNgFactory",(function(){return L}));var L=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[t.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,P["\u0275angular_packages_forms_forms_o"],P["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,P.FormBuilder,P.FormBuilder,[]),t["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),t["\u0275mpd"](1073742336,P["\u0275angular_packages_forms_forms_d"],P["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,P.FormsModule,P.FormsModule,[]),t["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),t["\u0275mpd"](1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t["\u0275mpd"](1073742336,I,I,[]),t["\u0275mpd"](1073742336,R.a,R.a,[]),t["\u0275mpd"](1073742336,O.g,O.g,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,P.ReactiveFormsModule,P.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,F.b,F.b,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);