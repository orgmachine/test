(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{u2mw:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),a=e("MKJQ"),r=e("sZkV"),i=e("SVse"),d=e("Xqnl"),s=e("2MiI"),c=e("iInd"),m=e("hnS/"),p=e("2Rin"),g=e("8RPc"),f=e("6jz6"),h=e("LmEr"),b=e("mrSG"),C=e("lCZB");class _{constructor(l,n,e,t,o,u,a){this.route=l,this.router=n,this.api=e,this.util=t,this.alertCtrl=o,this.modalController=u,this.menu=a,this.members=[],this.haveItems=!1,this.dues=[],this.segmentModel="due"}ionViewWillEnter(){const l=sessionStorage.getItem("uid");this.api.getMemberByUId(l).then(l=>{console.log(l),this.members=l}).catch(l=>{l&&(console.log(l),this.util.showToast(`${l}`,"danger","bottom"))})}openModal(){return b.__awaiter(this,void 0,void 0,(function*(){localStorage.setItem("routeFrom","add");const l=yield this.modalController.create({component:C.a,cssClass:"update-modal-css"});return l.onDidDismiss().then(l=>{this.ionViewWillEnter()}),yield l.present()}))}edit(l){return b.__awaiter(this,void 0,void 0,(function*(){localStorage.setItem("memberid",l),localStorage.setItem("routeFrom","edit");const n=yield this.modalController.create({component:C.a,cssClass:"update-modal-css"});return n.onDidDismiss().then(l=>{this.ionViewWillEnter()}),yield n.present()}))}delete(l){const n=sessionStorage.getItem("uid");this.api.deleteMember(n,l).then(l=>{console.log(l),this.members=[],this.ionViewWillEnter(),this.util.showToast("Patient Deleted Successfully","primary","bottom")}).catch(l=>{l&&(console.log(l),this.util.showToast(`${l}`,"danger","bottom"))})}}var M=t["\u0275crt"]({encapsulation:0,styles:[[".noData[_ngcontent-%COMP%]{text-align:center;margin-top:5%;font-weight:700}ion-item[_ngcontent-%COMP%]{--border-color:transparent;-webkit-animation:popIn .2s calc(var(--animation-order) * 70ms) both ease-in;animation:popIn .2s calc(var(--animation-order) * 70ms) both ease-in}@-webkit-keyframes popIn{0%{opacity:0;-webkit-transform:scale(.6) translateY(-8px);transform:scale(.6) translateY(-8px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes popIn{0%{opacity:0;-webkit-transform:scale(.6) translateY(-8px);transform:scale(.6) translateY(-8px)}100%{opacity:1;-webkit-transform:none;transform:none}}.orderList[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px;color:#929292;text-align:center;margin:10px}.orderList[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:x-large;margin-right:10px}.orderList[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.orderList[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-bottom:8px}.orderList[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:14px;margin-bottom:5px}.starend[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.enddat[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .strtdat[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #d8d0bc;font-size:14px;padding:0 10px;width:100%;color:#000;height:40px}.starend[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{background:#fff;padding:10px;margin:0}.enddat[_ngcontent-%COMP%]{margin-right:10px}"]],data:{}});function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","noData"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"img",[["src","assets/no_data_found.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Patients Yet"]))],null,null)}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,["",""])),t["\u0275ppd"](8,1),(l()(),t["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""])),(l()(),t["\u0275eld"](11,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,2,"ion-button",[["expand",""],["style","margin-bottom: 5px;margin-right: 6px;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.edit(l.context.$implicit.id)&&t),t}),a.P,a.d)),t["\u0275did"](13,49152,null,0,r.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(l()(),t["\u0275ted"](-1,0,["Edit"])),(l()(),t["\u0275eld"](15,0,null,null,2,"ion-button",[["expand",""],["style","--background: black;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.delete(l.context.$implicit.id)&&t),t}),a.P,a.d)),t["\u0275did"](16,49152,null,0,r.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(l()(),t["\u0275ted"](-1,0,["Delete"]))],(function(l,n){l(n,13,0,""),l(n,16,0,"")}),(function(l,n){l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.id);var e=t["\u0275unv"](n,7,0,l(n,8,0,t["\u0275nov"](n.parent.parent,0),n.context.$implicit.dob));l(n,7,0,e),l(n,10,0,n.context.$implicit.gender)}))}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,15,"table",[["class","table"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Name"])),(l()(),t["\u0275eld"](6,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Member Id"])),(l()(),t["\u0275eld"](8,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date of birth"])),(l()(),t["\u0275eld"](10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Gender"])),(l()(),t["\u0275eld"](12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Action"])),(l()(),t["\u0275eld"](14,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](16,278528,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,16,0,n.component.members)}),null)}function y(l){return t["\u0275vid"](0,[t["\u0275pid"](0,i.DatePipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,1,"app-header",[],null,null,null,d.b,d.a)),t["\u0275did"](2,114688,null,0,s.a,[c.m,r.NavController,m.a,p.a,g.a],null,null),(l()(),t["\u0275eld"](3,0,null,null,16,"ion-content",[],null,null,null,a.W,a.k)),t["\u0275did"](4,49152,null,0,r.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,6,"div",[["class","col-md-12 col-lg-12 col-xl-12"],["style","display: flex;justify-content: space-between;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Members Listing "])),(l()(),t["\u0275eld"](10,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,2,"ion-button",[["class","btn_class"],["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openModal()&&t),t}),a.P,a.d)),t["\u0275did"](12,49152,null,0,r.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),t["\u0275ted"](-1,0,[" Add Patient"])),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](15,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](17,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](18,0,null,0,1,"app-footer",[],null,null,null,f.b,f.a)),t["\u0275did"](19,114688,null,0,h.a,[c.m,r.NavController,m.a,p.a,g.a,r.ModalController],null,null)],(function(l,n){var e=n.component;l(n,2,0),l(n,12,0,"block","submit"),l(n,15,0,0==e.members.length),l(n,17,0,0!==e.members.length),l(n,19,0)}),null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-members",[],null,null,null,y,M)),t["\u0275did"](1,49152,null,0,_,[c.a,c.m,g.a,p.a,r.AlertController,r.ModalController,r.MenuController],null,null)],null,null)}var P=t["\u0275ccf"]("app-members",_,I,{},{},[]),k=e("s7LF");class R{}var O=e("xnLu"),D=e("TSSN"),F=e("dVnR"),N=e("STSa"),L=e("j1ZV");e.d(n,"MembersPageModuleNgFactory",(function(){return S}));var S=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,P]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[t.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,k["\u0275angular_packages_forms_forms_o"],k["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,r.AngularDelegate,r.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.ModalController,r.ModalController,[r.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.PopoverController,r.PopoverController,[r.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,k.FormBuilder,k.FormBuilder,[]),t["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),t["\u0275mpd"](1073742336,k["\u0275angular_packages_forms_forms_d"],k["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,k.FormsModule,k.FormsModule,[]),t["\u0275mpd"](1073742336,r.IonicModule,r.IonicModule,[]),t["\u0275mpd"](1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t["\u0275mpd"](1073742336,R,R,[]),t["\u0275mpd"](1073742336,O.a,O.a,[]),t["\u0275mpd"](1073742336,D.g,D.g,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,k.ReactiveFormsModule,k.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,N.b,N.b,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);