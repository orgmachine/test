(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{w4GT:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),r=e("SVse"),a=e("MKJQ"),i=e("sZkV"),s=e("s7LF"),d=e("Xqnl"),c=e("2MiI"),g=e("iInd"),p=e("hnS/"),m=e("2Rin"),h=e("8RPc"),f=e("6jz6"),C=e("LmEr"),v=e("mrSG"),_=e("Pn9U"),I=e("iqUP"),b=e("wd/R");class R{constructor(l,n,e,t,o,u,r,a,i){this.route=l,this.router=n,this.alertCtrl=e,this.api=t,this.util=o,this.camera=u,this.formBuilder=r,this.actionSheetController=a,this.menu=i,this.Attachments="",this.customAlertOptions={header:"Select an Issue",translucent:!0},this.isAttach=!1,this.reference_id="",this.showInput=!0,this.issues=[{id:1,title:"Related to Lab Test Booking"},{id:2,title:"Related to Sample Collection"},{id:3,title:"Related to Payments"},{id:4,title:"Related to Website"},{id:5,title:"Others"}],this.menu.enable(!1),this.supportForm=this.formBuilder.group({email:["",[s.Validators.required,s.Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")]],select:["",[s.Validators.required]],reference:["",[s.Validators.required]],remark:["",[s.Validators.required]]})}checkId(l){console.log(l),this.reason=l,"Others"==l&&(this.showInput=!1)}ngOnInit(){const l=sessionStorage.getItem("uid");this.api.getMyProfile(l).then(l=>{console.log(l),null!=l&&(this.user_email=l.email,this.token=l.fcm_token,console.log(this.token))}).catch(l=>{l&&(console.log(l),this.util.showToast(`${l}`,"danger","bottom"))})}openCamera(){return v.__awaiter(this,void 0,void 0,(function*(){const l=yield this.actionSheetController.create({header:"Choose from",buttons:[{text:"Gallery",icon:"images",handler:()=>{this.opemCamera("gallery")}},{text:"Camera",icon:"camera",handler:()=>{this.opemCamera("camera")}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield l.present()}))}opemCamera(l){this.camera.getPicture({quality:100,targetHeight:700,targetWidth:700,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:"camera"===l?1:0,saveToPhotoAlbum:!1,correctOrientation:!1}).then(l=>{const n="data:image/jpeg;base64,"+l;this.util.show();const e=sessionStorage.getItem("uid")+"/"+this.util.makeid(10);I.storage().ref().child(sessionStorage.getItem("uid")).child(btoa(e)+".jpg").putString(n,"data_url").then(l=>{this.util.hide(),l.ref.getDownloadURL().then(l=>{console.log("url uploaded",l),this.isAttach=!0,this.Attachments=l})},l=>{this.util.hide(),console.log(l)}).catch(l=>{console.log(l),this.util.hide()})},l=>{this.util.hide()})}handleFileSelect(l){var n=l.target.files,e=n[0];let t=e.name;const o=t.lastIndexOf("."),u=t.substring(o+1);if(this.file_extension=u,n&&e){var r=new FileReader;r.onload=this._handleReaderLoaded.bind(this),r.readAsBinaryString(e)}}_handleReaderLoaded(l){this.base64textString=btoa(l.target.result);const n="data:image/jpeg;base64,"+this.base64textString;this.image=n;const e=sessionStorage.getItem("uid")+"/"+this.util.makeid(10);I.storage().ref().child(sessionStorage.getItem("uid")).child(btoa(e)+".jpg").putString(n,"data_url").then(l=>{l.ref.getDownloadURL().then(l=>{console.log("url uploaded",l),sessionStorage.getItem("uid");const n=new Date;b(n).format("YYYY-MM-DD hh:mm:ss A"),Math.floor(1e8+9e8*Math.random()),this.isAttach=!0,this.Attachments=l})},l=>{this.util.hide(),console.log(l)}).catch(l=>{console.log(l),this.util.hide(),this.util.errorToast(this.util.translate("Something went wrong"))})}report(){const l=sessionStorage.getItem("uid"),n=new Date,e=b(n).format("YYYY-MM-DD hh:mm:ss A"),t=Math.floor(1e8+9e8*Math.random()),o={userid:l,createdAt:e,id:t.toString(),image:this.Attachments,reason:this.reason,query:this.remark,status:0,reference_id:this.reference_id};this.api.addSupport(t.toString(),o).then(l=>{t.toString(),this.sendNotification(t),this.util.showToast("We have received your issue we will get back to you shortly.","primary","bottom"),this.router.navigate(["/home"])}).catch(l=>{l&&(console.log(l),this.util.showToast(`${l}`,"danger","bottom"))})}sendNotification(l){this.api.sendSupportNotification("Support ticket confirmation","This is to inform you that your customer support ticket "+l+" has been received. We will be in touch shortly. Thank you.",this.token).subscribe(l=>{console.log(l)},l=>{console.log("err",l)})}viewList(){this.router.navigate(["support-list"])}}var x=t["\u0275crt"]({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--ion-background-color:#fff;border:1px solid #e6e6e6;border-radius:5px!important;height:38px;--min-height:10%;--padding-start:5px!important}.mblTag[_ngcontent-%COMP%]{margin-bottom:0;font-size:12px}.emailTag[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;font-size:12px}.sc-ion-input-md-h[_ngcontent-%COMP%]{--padding-top:4px;--padding-bottom:20px}.sel[_ngcontent-%COMP%]{max-width:100%;width:100%;font-size:14px!important;--padding-top:5px;--padding-start:0px}.textarea[_ngcontent-%COMP%]{border:1px solid #e6e6e6;border-radius:5px!important;font-size:14px;margin-top:0;color:#000}.error[_ngcontent-%COMP%]{color:red;font-size:10px;padding-left:2px}.list[_ngcontent-%COMP%]{padding:16px}.btn-div[_ngcontent-%COMP%]{margin:20px 0}.helpTip[_ngcontent-%COMP%]{font-size:10px}.equalHMRWrap[_ngcontent-%COMP%]{flex-wrap:wrap}.eqWrap[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.equalHMR[_ngcontent-%COMP%]{width:33%;margin-bottom:2%;display:inline-block}.eq[_ngcontent-%COMP%]{padding:0}.btn[_ngcontent-%COMP%]{border:1px solid grey;border-radius:35px;padding:2px 10px;font-size:12px}.thumnamilContimg[_ngcontent-%COMP%]{margin:12px 8px;width:100px;height:100px}.crossBtn[_ngcontent-%COMP%]{margin:2px 0 0;width:15px;height:15px}input[type=file][_ngcontent-%COMP%]{position:absolute;left:0;opacity:0;top:0;bottom:0;width:100%}.fil[_ngcontent-%COMP%]{margin-top:16px}.fil[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:80%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:url(attach.27e897b94ef7b5f345bb.png) left/15% no-repeat;margin-left:16px}label[_ngcontent-%COMP%]{display:inline-block;position:relative;height:34px;width:110px;background-color:#fff;border:1px solid #bab6b6}div.dragover[_ngcontent-%COMP%]{background-color:#fff}.btn-div[_ngcontent-%COMP%]{margin-top:5%}ion-select[_ngcontent-%COMP%]::part(icon){color:#000!important}ion-select[_ngcontent-%COMP%]::part(text){color:#000!important}.inspace[_ngcontent-%COMP%]{padding-top:17px}"]],data:{}});function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Email-Id Is Required "]))],null,null)}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Please Enter Valid Email-Id "]))],null,null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["no-lines",""]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.supportForm.get("email").hasError("required")&&e.supportForm.get("email").touched),l(n,4,0,e.supportForm.get("email").hasError("pattern"))}),null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,a.ob,a.D)),t["\u0275did"](1,49152,null,0,i.IonSelectOption,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275ted"](2,0,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit.title)}),(function(l,n){l(n,2,0,n.context.$implicit.title)}))}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Please Select Issue "]))],null,null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["no-lines",""]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.supportForm.get("select").hasError("required")&&e.supportForm.get("select").touched)}),null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Reference-Id Is Required "]))],null,null)}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["no-lines",""]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.supportForm.get("reference").hasError("required")&&e.supportForm.get("reference").touched)}),null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"p",[["class","mblTag inspace"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Bookings/Payment Id"])),(l()(),t["\u0275eld"](3,0,null,null,9,"ion-item",[],null,null,null,a.db,a.r)),t["\u0275did"](4,49152,null,0,i.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,7,"ion-input",[["placeholder","Please Enter Reference-Id"],["spellcheck","false"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,6)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t["\u0275nov"](l,6)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.reference_id=e)&&o),o}),a.cb,a.q)),t["\u0275did"](6,16384,null,0,i.TextValueAccessor,[t.ElementRef],null,null),t["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,(function(l){return[l]}),[i.TextValueAccessor]),t["\u0275did"](8,671744,null,0,s.NgModel,[[2,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),t["\u0275pod"](9,{standalone:0}),t["\u0275prd"](2048,null,s.NgControl,null,[s.NgModel]),t["\u0275did"](11,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),t["\u0275did"](12,49152,null,0,i.IonInput,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],spellcheck:[1,"spellcheck"],type:[2,"type"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](14,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component,t=e.reference_id,o=l(n,9,0,!0);l(n,8,0,t,o),l(n,12,0,"Please Enter Reference-Id","false","text"),l(n,14,0,(e.supportForm.get("reference").hasError("minlength")||e.supportForm.get("reference").hasError("maxlength")||e.supportForm.get("reference").hasError("pattern")||e.supportForm.get("reference").hasError("required"))&&e.supportForm.get("reference").touched)}),(function(l,n){l(n,5,0,t["\u0275nov"](n,11).ngClassUntouched,t["\u0275nov"](n,11).ngClassTouched,t["\u0275nov"](n,11).ngClassPristine,t["\u0275nov"](n,11).ngClassDirty,t["\u0275nov"](n,11).ngClassValid,t["\u0275nov"](n,11).ngClassInvalid,t["\u0275nov"](n,11).ngClassPending)}))}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Description Is Required "]))],null,null)}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["no-lines",""]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.supportForm.get("remark").hasError("required")&&e.supportForm.get("remark").touched)}),null)}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","thumnamilCont"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","equalHMRWrap eqWrap"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","posRel equalHMR eq"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt",""],["class","thumnamilContimg"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,t["\u0275inlineInterpolate"](1,"",n.component.Attachments,""))}))}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,d.b,d.a)),t["\u0275did"](1,114688,null,0,c.a,[g.m,i.NavController,p.a,m.a,h.a],null,null),(l()(),t["\u0275eld"](2,0,null,null,70,"ion-content",[],null,null,null,a.W,a.k)),t["\u0275did"](3,49152,null,0,i.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,66,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","col-md-12 col-lg-12 col-xl-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"h3",[["style","margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Tickets Raised"])),(l()(),t["\u0275eld"](9,0,null,null,61,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,60,"div",[["class","col-md-12 col-lg-8 col-xl-8"],["style","margin: 0 auto;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var o=!0;return"submit"===n&&(o=!1!==t["\u0275nov"](l,13).onSubmit(e)&&o),"reset"===n&&(o=!1!==t["\u0275nov"](l,13).onReset()&&o),o}),null,null)),t["\u0275did"](12,16384,null,0,s["\u0275angular_packages_forms_forms_z"],[],null,null),t["\u0275did"](13,540672,null,0,s.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormGroupDirective]),t["\u0275did"](15,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(l()(),t["\u0275eld"](16,0,null,null,49,"ion-list",[["class","list"]],null,null,null,a.fb,a.t)),t["\u0275did"](17,49152,null,0,i.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](18,0,null,0,1,"p",[["class","emailTag inspace"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Email"])),(l()(),t["\u0275eld"](20,0,null,0,8,"ion-item",[],null,null,null,a.db,a.r)),t["\u0275did"](21,49152,null,0,i.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](22,0,null,0,6,"ion-input",[["autocapitalize","off"],["formControlName","email"],["placeholder","Please Enter Email-Id"],["spellcheck","false"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,23)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t["\u0275nov"](l,23)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.user_email=e)&&o),o}),a.cb,a.q)),t["\u0275did"](23,16384,null,0,i.TextValueAccessor,[t.ElementRef],null,null),t["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,(function(l){return[l]}),[i.TextValueAccessor]),t["\u0275did"](25,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),t["\u0275did"](27,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),t["\u0275did"](28,49152,null,0,i.IonInput,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{autocapitalize:[0,"autocapitalize"],placeholder:[1,"placeholder"],spellcheck:[2,"spellcheck"],type:[3,"type"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](30,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](31,0,null,0,1,"p",[["class","mblTag inspace"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Issue"])),(l()(),t["\u0275eld"](33,0,null,0,10,"ion-item",[],null,null,null,a.db,a.r)),t["\u0275did"](34,49152,null,0,i.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](35,0,null,0,8,"ion-select",[["class","sel"],["formControlName","select"],["interface","action-sheet"],["placeholder","Please Select An Issue"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,36)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t["\u0275nov"](l,36)._handleChangeEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.reason=e)&&o),"ionChange"===n&&(o=!1!==u.checkId(u.reason)&&o),o}),a.pb,a.C)),t["\u0275did"](36,16384,null,0,i.SelectValueAccessor,[t.ElementRef],null,null),t["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,(function(l){return[l]}),[i.SelectValueAccessor]),t["\u0275did"](38,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),t["\u0275did"](40,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),t["\u0275did"](41,49152,null,0,i.IonSelect,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],placeholder:[2,"placeholder"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,S)),t["\u0275did"](43,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](45,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](47,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](48,0,null,0,1,"p",[["class","mblTag inspace"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Describe in detail"])),(l()(),t["\u0275eld"](50,0,null,0,6,"ion-textarea",[["auto-grow","true"],["class","textarea"],["cols","20"],["formControlName","remark"],["placeholder","Describe In Detail"],["rows","6"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,51)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t["\u0275nov"](l,51)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.remark=e)&&o),o}),a.ub,a.I)),t["\u0275did"](51,16384,null,0,i.TextValueAccessor,[t.ElementRef],null,null),t["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,(function(l){return[l]}),[i.TextValueAccessor]),t["\u0275did"](53,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),t["\u0275did"](55,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),t["\u0275did"](56,49152,null,0,i.IonTextarea,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cols:[0,"cols"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,T)),t["\u0275did"](58,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](59,0,null,0,4,"div",[["class","fil"]],null,null,null,null,null)),(l()(),t["\u0275eld"](60,0,null,null,3,"label",[["for","test"]],null,null,null,null,null)),(l()(),t["\u0275eld"](61,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Upload"])),(l()(),t["\u0275eld"](63,0,null,null,0,"input",[["id","header"],["type","file"]],null,[[null,"change"]],(function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.handleFileSelect(e)&&t),t}),null,null)),(l()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](65,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](66,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.report()&&t),t}),a.P,a.d)),t["\u0275did"](67,49152,null,0,i.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(l()(),t["\u0275ted"](-1,0,[" Submit report "])),(l()(),t["\u0275eld"](69,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](70,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](71,0,null,0,1,"app-footer",[],null,null,null,f.b,f.a)),t["\u0275did"](72,114688,null,0,C.a,[g.m,i.NavController,p.a,m.a,h.a,i.ModalController],null,null)],(function(l,n){var e=n.component;l(n,1,0),l(n,13,0,e.supportForm),l(n,25,0,"email",e.user_email),l(n,28,0,"off","Please Enter Email-Id","false","email"),l(n,30,0,(e.supportForm.get("email").hasError("minlength")||e.supportForm.get("email").hasError("maxlength")||e.supportForm.get("email").hasError("pattern")||e.supportForm.get("email").hasError("required"))&&e.supportForm.get("email").touched),l(n,38,0,"select",e.reason),l(n,41,0,"action-sheet",e.customAlertOptions,"Please Select An Issue"),l(n,43,0,e.issues),l(n,45,0,(e.supportForm.get("select").hasError("minlength")||e.supportForm.get("select").hasError("maxlength")||e.supportForm.get("select").hasError("pattern")||e.supportForm.get("select").hasError("required"))&&e.supportForm.get("select").touched),l(n,47,0,e.showInput),l(n,53,0,"remark",e.remark),l(n,56,0,"20","Describe In Detail","6"),l(n,58,0,(e.supportForm.get("remark").hasError("minlength")||e.supportForm.get("remark").hasError("maxlength")||e.supportForm.get("remark").hasError("pattern")||e.supportForm.get("remark").hasError("required"))&&e.supportForm.get("remark").touched),l(n,65,0,1==e.isAttach),l(n,67,0,e.supportForm.get("email").invalid||e.supportForm.get("select").invalid||e.supportForm.get("remark").invalid),l(n,72,0)}),(function(l,n){l(n,11,0,t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending),l(n,22,0,t["\u0275nov"](n,27).ngClassUntouched,t["\u0275nov"](n,27).ngClassTouched,t["\u0275nov"](n,27).ngClassPristine,t["\u0275nov"](n,27).ngClassDirty,t["\u0275nov"](n,27).ngClassValid,t["\u0275nov"](n,27).ngClassInvalid,t["\u0275nov"](n,27).ngClassPending),l(n,35,0,t["\u0275nov"](n,40).ngClassUntouched,t["\u0275nov"](n,40).ngClassTouched,t["\u0275nov"](n,40).ngClassPristine,t["\u0275nov"](n,40).ngClassDirty,t["\u0275nov"](n,40).ngClassValid,t["\u0275nov"](n,40).ngClassInvalid,t["\u0275nov"](n,40).ngClassPending),l(n,50,0,t["\u0275nov"](n,55).ngClassUntouched,t["\u0275nov"](n,55).ngClassTouched,t["\u0275nov"](n,55).ngClassPristine,t["\u0275nov"](n,55).ngClassDirty,t["\u0275nov"](n,55).ngClassValid,t["\u0275nov"](n,55).ngClassInvalid,t["\u0275nov"](n,55).ngClassPending)}))}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-support",[],null,null,null,V,x)),t["\u0275did"](1,114688,null,0,R,[g.a,g.m,i.AlertController,h.a,m.a,_.a,s.FormBuilder,i.ActionSheetController,i.MenuController],null,null)],(function(l,n){l(n,1,0)}),null)}var q=t["\u0275ccf"]("app-support",R,D,{},{},[]);class L{}var B=e("xnLu"),U=e("TSSN"),z=e("dVnR"),Z=e("STSa"),G=e("j1ZV");e.d(n,"SupportPageModuleNgFactory",(function(){return j}));var j=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,q]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,s["\u0275angular_packages_forms_forms_o"],s["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,i.AngularDelegate,i.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.ModalController,i.ModalController,[i.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.PopoverController,i.PopoverController,[i.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,s.FormBuilder,s.FormBuilder,[]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,s["\u0275angular_packages_forms_forms_d"],s["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,s.FormsModule,s.FormsModule,[]),t["\u0275mpd"](1073742336,i.IonicModule,i.IonicModule,[]),t["\u0275mpd"](1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t["\u0275mpd"](1073742336,L,L,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,U.g,U.g,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,s.ReactiveFormsModule,s.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,g.k,(function(){return[[{path:"",component:R}]]}),[])])}))}}]);