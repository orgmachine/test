function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"I+6W":function(l,n,e){"use strict";e.r(n);var o=e("8Y7J"),t=function l(){_classCallCheck(this,l)},a=e("pMnS"),r=e("Xqnl"),u=e("2MiI"),i=e("iInd"),m=e("sZkV"),c=e("hnS/"),d=e("2Rin"),p=e("8RPc"),s=e("MKJQ"),g=e("6jz6"),b=e("LmEr"),_=function l(n,e,o,t,a){var r=this;_classCallCheck(this,l),this.route=n,this.router=e,this.alertCtrl=o,this.menu=t,this.api=a;var u=localStorage.getItem("memberid");this.api.getTeamMemberById(u).then((function(l){r.team_member=l[0],console.log(r.team_member)})).catch((function(l){console.log(l)}))},x=o["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--input-color);margin-bottom:23px}ion-content[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%]{color:#fff;font-size:32px;background-color:var(--ion-color-secondary);padding:20px;margin:10px 0 0;display:block}.row-card[_ngcontent-%COMP%]{max-height:600px;height:500px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;box-shadow:rgba(149,157,165,.2) 0 8px 24px;max-width:420px;float:right;margin:20px 50px;padding:20px 28px;background-color:var(--ion-color-secondary-contrast);border-radius:20px}.row-card--low-margin[_ngcontent-%COMP%]{margin:10px 40px}.row-card__image[_ngcontent-%COMP%]{margin:1.2rem;-webkit-filter:drop-shadow(0 6px 10px #000);filter:drop-shadow(0 6px 10px #000);max-width:290px;width:210px;-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%)}.row-card--clickable[_ngcontent-%COMP%]{cursor:pointer;-webkit-transition:.5s cubic-bezier(.175,.885,.32,1.275);transition:all .5s cubic-bezier(.175,.885,.32,1.275)}.row-card--clickable[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.team-member[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}@media only screen and (max-device-width:480px){.row-card[_ngcontent-%COMP%]{margin:20px 10px}.team-member[_ngcontent-%COMP%]{margin:20px 10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}@media only screen and (device-width:768px){.row-card[_ngcontent-%COMP%]{margin:20px 10px}.team-member[_ngcontent-%COMP%]{margin:20px 10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}.team-member__designation[_ngcontent-%COMP%]{border-bottom:2px solid var(--ion-color-primary);padding-bottom:12px;font-size:17px;color:#8b8888}.socialfoot[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;margin:0 5px}.content-container[_ngcontent-%COMP%]{border-radius:18px}.content-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:2rem;font-size:1.2rem}.h3[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,r.b,r.a)),o["\u0275did"](1,114688,null,0,u.a,[i.m,m.NavController,c.a,d.a,p.a],null,null),(l()(),o["\u0275eld"](2,0,null,null,33,"ion-content",[],null,null,null,s.W,s.k)),o["\u0275did"](3,49152,null,0,m.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](4,0,null,0,29,"div",[["class","container"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,27,"div",[["class","team-member bg-white shadow rounded overflow-hidden"]],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,19,"div",[["class","row-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](8,0,null,null,1,"div",[["class","row-card__image-container"]],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,0,"img",[["alt","team_member?.name"],["class","row-card__image"]],[[8,"src",4]],null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,null,1,"h3",[["class","h3 my-2"]],null,null,null,null,null)),(l()(),o["\u0275ted"](11,null,["",""])),(l()(),o["\u0275eld"](12,0,null,null,1,"span",[["class","team-member__designation"]],null,null,null,null,null)),(l()(),o["\u0275ted"](13,null,["",""])),(l()(),o["\u0275eld"](14,0,null,null,12,"div",[["class","socialfoot my-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275eld"](16,0,null,null,1,"ion-icon",[["color","primary"],["name","logo-facebook"]],null,null,null,s.bb,s.p)),o["\u0275did"](17,49152,null,0,m.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),o["\u0275eld"](18,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275eld"](19,0,null,null,1,"ion-icon",[["color","primary"],["name","logo-twitter"]],null,null,null,s.bb,s.p)),o["\u0275did"](20,49152,null,0,m.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),o["\u0275eld"](21,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275eld"](22,0,null,null,1,"ion-icon",[["color","primary"],["name","logo-linkedin"]],null,null,null,s.bb,s.p)),o["\u0275did"](23,49152,null,0,m.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),o["\u0275eld"](24,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,null,1,"ion-icon",[["color","primary"],["name","logo-instagram"]],null,null,null,s.bb,s.p)),o["\u0275did"](26,49152,null,0,m.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),o["\u0275eld"](27,0,null,null,6,"div",[["class","py-2"]],null,null,null,null,null)),(l()(),o["\u0275eld"](28,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](29,0,null,null,2,"div",[["class","col-md-12 col-lg-12 col-xl-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](30,0,null,null,1,"h3",[["style","margin:10px 0px 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["About Us"])),(l()(),o["\u0275eld"](32,0,null,null,1,"div",[["class","content-container p-4 bg-light rounded shadow-sm text-justify"]],null,null,null,null,null)),(l()(),o["\u0275eld"](33,0,null,null,0,"p",[["class","mb-0"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),o["\u0275eld"](34,0,null,0,1,"app-footer",[],null,null,null,g.b,g.a)),o["\u0275did"](35,114688,null,0,b.a,[i.m,m.NavController,c.a,d.a,p.a,m.ModalController],null,null)],(function(l,n){l(n,1,0),l(n,17,0,"primary","logo-facebook"),l(n,20,0,"primary","logo-twitter"),l(n,23,0,"primary","logo-linkedin"),l(n,26,0,"primary","logo-instagram"),l(n,35,0)}),(function(l,n){var e=n.component;l(n,9,0,null==e.team_member?null:e.team_member.image),l(n,11,0,null==e.team_member?null:e.team_member.name),l(n,13,0,null==e.team_member?null:e.team_member.designation),l(n,15,0,null==e.team_member?null:e.team_member.facebook),l(n,18,0,null==e.team_member?null:e.team_member.twitter),l(n,21,0,null==e.team_member?null:e.team_member.linkedin),l(n,24,0,null==e.team_member?null:e.team_member.instagram),l(n,33,0,null==e.team_member?null:e.team_member.description)}))}var h=o["\u0275ccf"]("app-team",_,(function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-team",[],null,null,null,f,x)),o["\u0275did"](1,49152,null,0,_,[i.a,i.m,m.AlertController,m.MenuController,p.a],null,null)],null,null)}),{},{},[]),C=e("SVse"),w=e("s7LF"),k=function l(){_classCallCheck(this,l)},v=e("xnLu"),M=e("TSSN"),y=e("dVnR"),P=e("STSa"),O=e("j1ZV");e.d(n,"TeamPageModuleNgFactory",(function(){return R}));var R=o["\u0275cmf"](t,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,h]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[o.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,w["\u0275angular_packages_forms_forms_o"],w["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,m.AngularDelegate,m.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,m.ModalController,m.ModalController,[m.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,m.PopoverController,m.PopoverController,[m.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,w.FormBuilder,w.FormBuilder,[]),o["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),o["\u0275mpd"](1073742336,w["\u0275angular_packages_forms_forms_d"],w["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,w.FormsModule,w.FormsModule,[]),o["\u0275mpd"](1073742336,m.IonicModule,m.IonicModule,[]),o["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.m]]),o["\u0275mpd"](1073742336,k,k,[]),o["\u0275mpd"](1073742336,v.a,v.a,[]),o["\u0275mpd"](1073742336,M.g,M.g,[]),o["\u0275mpd"](1073742336,y.a,y.a,[]),o["\u0275mpd"](1073742336,P.b,P.b,[]),o["\u0275mpd"](1073742336,w.ReactiveFormsModule,w.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,O.a,O.a,[]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,i.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);