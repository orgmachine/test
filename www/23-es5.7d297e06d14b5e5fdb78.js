function _defineProperties(n,l){for(var e=0;e<l.length;e++){var o=l[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ArDA:function(n,l,e){"use strict";e.r(l);var o=e("8Y7J"),t=function n(){_classCallCheck(this,n)},a=e("pMnS"),u=e("MKJQ"),i=e("sZkV"),r=e("s7LF"),s=e("Xqnl"),c=e("2MiI"),d=e("iInd"),g=e("hnS/"),p=e("2Rin"),m=e("8RPc"),h=e("SVse"),f=e("6jz6"),_=e("LmEr"),C=e("wd/R"),v=function(){function n(l,e,o,t,a,u){_classCallCheck(this,n),this.api=l,this.router=e,this.util=o,this.navCtrl=t,this.alertCtrl=a,this.route=u,this.reasons=[],this.comment="",this.isEnabled=!1,this.phone="",this.name="",this.email="",this.token="",this.coupon_code="",this.used_coupon=0,this.discount_amount=0,this.wallet_transId="",this.booking_id=localStorage.getItem("bookingid"),console.log(this.booking_id),this.getOrder(this.booking_id)}return _createClass(n,[{key:"getOrder",value:function(n){var l=this;console.log(n),this.api.getBookingById(n).then((function(n){console.log(n),l.order_detail=n[0],l.payment_type=l.order_detail.payment_type,console.log(l.payment_type),""!=l.order_detail.coupon_code&&(l.coupon_code=l.order_detail.coupon_code,l.discount_amount=l.order_detail.discount_amount,l.payment_type=l.order_detail.payment_type,console.log("discount_amount",l.discount_amount),l.getUsedCoupon(l.coupon_code),0==l.discount_amount&&l.getWalletTransactions(l.booking_id))})).catch((function(n){console.log(n)}))}},{key:"getUsedCoupon",value:function(n){var l=this,e=sessionStorage.getItem("uid");this.api.getUsedCouponByCouponCode(e,n).then((function(n){n&&(console.log("coupon_code",n),l.coupon_details=n[0],l.used_couponId=l.coupon_details.id,l.used_coupon=l.coupon_details.used_coupon-1)})).catch((function(n){console.log(n)}))}},{key:"coupon",value:function(){var n=this,l=new Date,e=C(l).format("YYYY-MM-DD hh:mm:ss A"),o={id:this.used_couponId,used_coupon:this.used_coupon,createdOn:e};this.api.addUsedCoupon(this.used_couponId.toString(),o).then((function(n){console.log(n)})).catch((function(l){l&&(console.log(l),n.util.showToast("".concat(l),"danger","bottom"))}))}},{key:"getWalletTransactions",value:function(n){var l=this,e=sessionStorage.getItem("uid");this.api.getWalletTransactionsByBooking(e,n).then((function(n){n&&(console.log("booking_id",n),l.wallet_details=n[0],l.wallet_transId=l.wallet_details.id)})).catch((function(n){console.log(n)}))}},{key:"updateWalletTransactions",value:function(){var n=this,l=new Date,e=C(l).format("YYYY-MM-DD hh:mm:ss A"),o={id:this.wallet_transId,status:"cancel",createdAt:e};this.api.addWalletTransaction(this.wallet_transId.toString(),o).then((function(n){console.log(n)})).catch((function(l){l&&(console.log(l),n.util.showToast("".concat(l),"danger","bottom"))}))}},{key:"ngOnInit",value:function(){var n=this;this.api.remarks().then((function(l){n.reasons=l,console.log(n.reasons)})).catch((function(n){console.log(n)}));var l=sessionStorage.getItem("uid");this.api.getMyProfile(l).then((function(l){console.log("my profile",l),l&&(console.log(l),n.phone=l.phone,n.name=l.name,n.email=l.email,n.token=l.fcm_token,null==n.name?n.email="":console.log("trigger else"))}),(function(n){console.log(n)})).catch((function(n){console.log(n)}))}},{key:"select",value:function(n,l){this.reason=n,this.reason_text=l,this.isEnabled=!0}},{key:"submit",value:function(){var n=this;this.util.show("Please wait....");var l,e=new Date,o=C(e).format("YYYY-MM-DD hh:mm:ss A");l="Online"==this.payment_type?{status:4,updatedAt:o,reason:this.reason,remark:this.comment}:{status:7,updatedAt:o,reason:this.reason,remark:this.comment},this.api.updateBooking(this.booking_id,l).then((function(l){n.util.publishOrderStatus("true"),n.util.hide(),n.sendCancelOrderSMS(),""!=n.coupon_code&&n.coupon(),""!=n.wallet_transId&&n.updateWalletTransactions(),n.util.showToast("Your booking cancelled successfully","primary","bottom"),n.router.navigate(["/bookings"])})).catch((function(l){l&&(n.util.hide(),console.log(l),n.util.showToast("".concat(l),"danger","bottom"))}))}},{key:"sendCancelOrderSMS",value:function(){var n="https://demo.orgmachine.com/way2lab_sms/cancel_order.php?orderid="+this.booking_id+"&mobile="+this.phone+"&name="+this.name;console.log(n),this.api.sendSms(n).subscribe((function(n){console.log(n)}),(function(n){console.log("err",n)}))}}]),n}(),b=o["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#f5f5f5}ion-content[_ngcontent-%COMP%]   .cnt[_ngcontent-%COMP%]{padding:32px 30%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{border-radius:0;margin:12px 1px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%]{text-overflow:unset;font-size:14px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:10px 10px 10px 0}ion-content[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border:1px solid #e6e6e6;border-radius:5px!important;font-size:14px;margin-top:0;color:#000;background:#fff;margin-bottom:20px}"]],data:{}});function M(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,19,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,18,"ion-card-content",[["style","padding: 0px;"]],null,null,null,u.R,u.g)),o["\u0275did"](2,49152,null,0,i.IonCardContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](3,0,null,0,16,"ion-radio-group",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var t=!0,a=n.component;return"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,4)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o["\u0275nov"](n,4)._handleChangeEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(a.reason=e)&&t),"ionChange"===l&&(t=!1!==a.select(a.reason,n.context.$implicit.reason)&&t),t}),u.kb,u.z)),o["\u0275did"](4,16384,null,0,i.SelectValueAccessor,[o.ElementRef],null,null),o["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,(function(n){return[n]}),[i.SelectValueAccessor]),o["\u0275did"](6,671744,null,0,r.NgModel,[[8,null],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),o["\u0275pod"](7,{standalone:0}),o["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),o["\u0275did"](9,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),o["\u0275did"](10,49152,null,0,i.IonRadioGroup,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](11,0,null,0,8,"ion-item",[],null,null,null,u.db,u.r)),o["\u0275did"](12,49152,null,0,i.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](13,0,null,0,2,"ion-label",[],null,null,null,u.eb,u.s)),o["\u0275did"](14,49152,null,0,i.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](15,0,["",""])),(n()(),o["\u0275eld"](16,0,null,0,3,"ion-radio",[["slot","start"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,19)._handleBlurEvent(e.target)&&t),"ionSelect"===l&&(t=!1!==o["\u0275nov"](n,19)._handleIonSelect(e.target)&&t),t}),u.lb,u.y)),o["\u0275prd"](5120,null,r.NG_VALUE_ACCESSOR,(function(n){return[n]}),[i.RadioValueAccessor]),o["\u0275did"](18,49152,null,0,i.IonRadio,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{value:[0,"value"]},null),o["\u0275did"](19,16384,null,0,i.RadioValueAccessor,[o.ElementRef],null,null)],(function(n,l){var e=l.component.reason,t=n(l,7,0,!0);n(l,6,0,e,t),n(l,18,0,o["\u0275inlineInterpolate"](1,"",l.context.$implicit.id,""))}),(function(n,l){n(l,3,0,o["\u0275nov"](l,9).ngClassUntouched,o["\u0275nov"](l,9).ngClassTouched,o["\u0275nov"](l,9).ngClassPristine,o["\u0275nov"](l,9).ngClassDirty,o["\u0275nov"](l,9).ngClassValid,o["\u0275nov"](l,9).ngClassInvalid,o["\u0275nov"](l,9).ngClassPending),n(l,15,0,l.context.$implicit.reason)}))}function k(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,s.b,s.a)),o["\u0275did"](1,114688,null,0,c.a,[d.m,i.NavController,g.a,p.a,m.a],null,null),(n()(),o["\u0275eld"](2,0,null,null,24,"ion-content",[],null,null,null,u.W,u.k)),o["\u0275did"](3,49152,null,0,i.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](4,0,null,0,20,"div",[["class","cnt"]],null,null,null,null,null)),(n()(),o["\u0275eld"](5,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](6,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Why are you cancelling this?"])),(n()(),o["\u0275eld"](8,0,null,null,3,"ion-card",[],null,null,null,u.U,u.f)),o["\u0275did"](9,49152,null,0,i.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275and"](16777216,null,0,1,null,M)),o["\u0275did"](11,278528,null,0,h.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["\u0275eld"](12,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o["\u0275eld"](13,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Comments (optional)"])),(n()(),o["\u0275eld"](15,0,null,null,6,"ion-textarea",[["auto-grow","true"],["class","textarea"],["cols","20"],["placeholder","Describe what's wrong with the order"],["rows","6"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,a=n.component;return"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,16)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o["\u0275nov"](n,16)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(a.comment=e)&&t),t}),u.ub,u.I)),o["\u0275did"](16,16384,null,0,i.TextValueAccessor,[o.ElementRef],null,null),o["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,(function(n){return[n]}),[i.TextValueAccessor]),o["\u0275did"](18,671744,null,0,r.NgModel,[[8,null],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),o["\u0275did"](20,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),o["\u0275did"](21,49152,null,0,i.IonTextarea,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{cols:[0,"cols"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(n()(),o["\u0275eld"](22,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.submit()&&o),o}),u.P,u.d)),o["\u0275did"](23,49152,null,0,i.IonButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),o["\u0275ted"](-1,0,[" Submit "])),(n()(),o["\u0275eld"](25,0,null,0,1,"app-footer",[],null,null,null,f.b,f.a)),o["\u0275did"](26,114688,null,0,_.a,[d.m,i.NavController,g.a,p.a,m.a,i.ModalController],null,null)],(function(n,l){var e=l.component;n(l,1,0),n(l,11,0,e.reasons),n(l,18,0,e.comment),n(l,21,0,"20","Describe what's wrong with the order","6"),n(l,23,0,!e.isEnabled,"block"),n(l,26,0)}),(function(n,l){n(l,15,0,o["\u0275nov"](l,20).ngClassUntouched,o["\u0275nov"](l,20).ngClassTouched,o["\u0275nov"](l,20).ngClassPristine,o["\u0275nov"](l,20).ngClassDirty,o["\u0275nov"](l,20).ngClassValid,o["\u0275nov"](l,20).ngClassInvalid,o["\u0275nov"](l,20).ngClassPending)}))}var y=o["\u0275ccf"]("app-cancel",v,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-cancel",[],null,null,null,k,b)),o["\u0275did"](1,114688,null,0,v,[m.a,d.m,p.a,i.NavController,i.AlertController,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),R=e("STSa"),w=e("xnLu"),I=e("TSSN"),S=e("dVnR"),O=e("j1ZV"),N=function n(){_classCallCheck(this,n)};e.d(l,"CancelPageModuleNgFactory",(function(){return E}));var E=o["\u0275cmf"](t,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,y]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[o.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_o"],r["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,i.AngularDelegate,i.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,i.ModalController,i.ModalController,[i.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,i.PopoverController,i.PopoverController,[i.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),o["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),o["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_d"],r["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),o["\u0275mpd"](1073742336,i.IonicModule,i.IonicModule,[]),o["\u0275mpd"](1073742336,R.b,R.b,[]),o["\u0275mpd"](1073742336,w.a,w.a,[]),o["\u0275mpd"](1073742336,I.g,I.g,[]),o["\u0275mpd"](1073742336,S.a,S.a,[]),o["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,O.a,O.a,[]),o["\u0275mpd"](1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),o["\u0275mpd"](1073742336,N,N,[]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,d.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);