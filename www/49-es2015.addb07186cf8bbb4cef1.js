(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{xMG3:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var u=t("pMnS"),a=t("Xqnl"),i=t("2MiI"),r=t("iInd"),d=t("sZkV"),g=t("hnS/"),s=t("2Rin"),c=t("8RPc"),C=t("MKJQ"),p=t("s7LF"),m=t("AZG0"),f=t("bD7s"),_=t("SVse"),v=t("6jz6"),h=t("LmEr"),b=t("mrSG"),P=t("wd/R");t("CqG3");class O{constructor(n,l,t,o,e,u,a,i){this.api=n,this.util=l,this.router=t,this.alertCtrl=o,this.adb=e,this.route=u,this.navCtrl=a,this.formBuilder=i,this.price=0,this.lab=0,this.sample=0,this.report=0,this.booking=0,this.remark="",this.rateForm=this.formBuilder.group({price:["",p.Validators.required],lab:["",p.Validators.required],sample:["",p.Validators.required],report:["",[p.Validators.required,p.Validators.minLength(6),p.Validators.maxLength(6)]],booking:["",p.Validators.required],comment:["",p.Validators.required]}),this.booking_id=localStorage.getItem("bookingid"),console.log(this.booking_id),this.getBooking(this.booking_id)}getBooking(n){this.api.getBookingById(n).then(n=>{this.detail=n[0],this.getSecondaryLab(this.detail.lab_id)}).catch(n=>{console.log(n)})}getSecondaryLab(n){this.api.getSecondaryLabById(n).then(n=>{this.lab_detail=n[0]}).catch(n=>{console.log(n)})}logPriceRating(n){this.price=n}logLabRating(n){this.lab=n}logSampleRating(n){this.sample=n}logReportRating(n){this.report=n}logBookingRating(n){this.booking=n}ngOnInit(){}submit(){this.util.show("Please wait....");const n=sessionStorage.getItem("uid"),l=new Date,t=P(l).format("YYYY-MM-DD hh:mm:ss A"),o=Math.floor(1e8+9e8*Math.random()),e={createdAt:t,id:o,booking_id:this.booking_id,booking:this.booking_id,booking_exp:this.booking,collection_process:this.sample,price:this.price,result_quality:this.report,slot_timing:this.lab,comment:this.remark,lab_id:this.lab_detail.uid,lab:this.lab_detail.uid,product_id:"",user:n,uid:n,status:0};console.log(e),this.api.addReview(o.toString(),e).then(n=>{this.api.updateBooking(this.booking_id,{updatedAt:t,isRate:1}).then(n=>{console.log(n),this.util.hide(),this.alert()}).catch(n=>{n&&(this.util.hide(),console.log(n),this.util.showToast(`${n}`,"danger","bottom"))})}).catch(n=>{n&&(this.util.hide(),console.log(n),this.util.showToast(`${n}`,"danger","bottom"))})}alert(){return b.__awaiter(this,void 0,void 0,(function*(){localStorage.getItem("mobile"),(yield this.alertCtrl.create({header:"Confirm",message:"<strong>Thanks for your valuable feedback</strong>",mode:"ios",backdropDismiss:!1,buttons:[{text:"Ok",cssClass:"login-button",handler:()=>{this.router.navigate(["/bookings"])}}]})).present()}))}}var M=t("Xr7G"),k=o["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#f5f5f5}ion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent}ion-content[_ngcontent-%COMP%]   .stepOne[_ngcontent-%COMP%]   .rating-form[_ngcontent-%COMP%]{padding:16px;background:#fff;margin:16px 0;border:1px solid #d4d6d7}ion-content[_ngcontent-%COMP%]   .stepOne[_ngcontent-%COMP%]   .rating-form[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{padding:10px 0}ion-content[_ngcontent-%COMP%]   .stepOne[_ngcontent-%COMP%]   .rating-form[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   .stepOne[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin:10px 0}ion-content[_ngcontent-%COMP%]   .stepOne[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px}ion-content[_ngcontent-%COMP%]   .stepOne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;color:red;font-weight:700}ion-content[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{--padding-start:24px;--background:var(--ion-color-primary);color:#fff;--border-color:transparent;box-shadow:0 0 3px 0 var(--ion-color-medium)}ion-content[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;margin:0}ion-content[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:10px;padding-left:16px}ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-primary);padding-left:16px;margin-bottom:0}ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;padding-right:16px;color:red;font-weight:700}ion-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{border-bottom:1px solid #f5f5f5}ion-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent}ion-content[_ngcontent-%COMP%]   .btn_class[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:700;float:left;--border-radius:25px;margin:0 0 20px}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]{padding:16px;border:1px solid #d4d6d7;background:#fff;margin:16px 0}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .patient-count[_ngcontent-%COMP%]{padding:14px 0 0;display:-webkit-box;display:flex}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .patient-count[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .patient-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:red;font-size:14px;margin:4px 0 0 16px}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .split-para[_ngcontent-%COMP%]{margin:10px;font-weight:400}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .split-para[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;margin-left:10px;font-weight:400}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .final-para[_ngcontent-%COMP%]{margin:10px;font-weight:700}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   .final-para[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;margin-left:10px;font-weight:700}ion-content[_ngcontent-%COMP%]   .stepTwo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000;padding-left:0}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:10px 0;font-size:14px}ion-content[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border:1px solid #e6e6e6;border-radius:5px!important;font-size:14px;margin-top:0;color:#000;background:#fff;margin-bottom:20px}"]],data:{}});function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.context.$implicit.itid.test_name)}))}function I(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"div",[["class","patient-count"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,0,"img",[["src","assets/patient.PNG"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](3,null,[" "," patients"]))],null,(function(n,l){var t=l.component;n(l,3,0,null==t.detail?null:t.detail.member_id.length)}))}function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"div",[["class","split-para"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Coupon Discount "])),(n()(),o["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](3,null,["- \u20b9",""]))],null,(function(n,l){var t=l.component;n(l,3,0,null==t.detail?null:t.detail.coupon)}))}function S(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,a.b,a.a)),o["\u0275did"](1,114688,null,0,i.a,[r.m,d.NavController,g.a,s.a,c.a],null,null),(n()(),o["\u0275eld"](2,0,null,null,120,"ion-content",[["class","ion-padding"]],null,null,null,C.W,C.k)),o["\u0275did"](3,49152,null,0,d.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](4,0,null,0,116,"div",[["class","container"]],null,null,null,null,null)),(n()(),o["\u0275eld"](5,0,null,null,115,"div",[["class","row"]],null,null,null,null,null)),(n()(),o["\u0275eld"](6,0,null,null,114,"div",[["class","col-md-12 col-lg-12 col-xl-12"],["style","display: inline-flex;"]],null,null,null,null,null)),(n()(),o["\u0275eld"](7,0,null,null,75,"div",[["class","col-md-12 col-lg-6 col-xl-6"]],null,null,null,null,null)),(n()(),o["\u0275eld"](8,0,null,null,74,"div",[["class","stepOne"]],null,null,null,null,null)),(n()(),o["\u0275eld"](9,0,null,null,73,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var e=!0;return"submit"===l&&(e=!1!==o["\u0275nov"](n,11).onSubmit(t)&&e),"reset"===l&&(e=!1!==o["\u0275nov"](n,11).onReset()&&e),e}),null,null)),o["\u0275did"](10,16384,null,0,p["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](11,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),o["\u0275did"](13,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),o["\u0275eld"](14,0,null,null,3,"ion-item",[["class","active"]],null,null,null,C.db,C.r)),o["\u0275did"](15,49152,null,0,d.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](16,0,null,0,1,"h3",[["class","heading"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Feedback Form"])),(n()(),o["\u0275eld"](18,0,null,null,64,"div",[["class","rating-form"]],null,null,null,null,null)),(n()(),o["\u0275eld"](19,0,null,null,9,"div",[["class","star"]],null,null,null,null,null)),(n()(),o["\u0275eld"](20,0,null,null,2,"div",[["class","text"]],null,null,null,null,null)),(n()(),o["\u0275eld"](21,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Price"])),(n()(),o["\u0275eld"](23,0,null,null,5,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","16px"],["formControlName","price"],["readonly","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ratingChanged"]],(function(n,l,t){var o=!0;return"ratingChanged"===l&&(o=!1!==n.component.logPriceRating(t)&&o),o}),m.b,m.a)),o["\u0275did"](24,114688,[["price",4]],0,f.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],fontSize:[6,"fontSize"]},{ratingChanged:"ratingChanged"}),o["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,(function(n){return[n]}),[f.a]),o["\u0275did"](26,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),o["\u0275did"](28,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(n()(),o["\u0275eld"](29,0,null,null,9,"div",[["class","star"]],null,null,null,null,null)),(n()(),o["\u0275eld"](30,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](31,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Lab Slot Timing"])),(n()(),o["\u0275eld"](33,0,null,null,5,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","16px"],["formControlName","lab"],["readonly","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ratingChanged"]],(function(n,l,t){var o=!0;return"ratingChanged"===l&&(o=!1!==n.component.logLabRating(t)&&o),o}),m.b,m.a)),o["\u0275did"](34,114688,[["lab",4]],0,f.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],fontSize:[6,"fontSize"]},{ratingChanged:"ratingChanged"}),o["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,(function(n){return[n]}),[f.a]),o["\u0275did"](36,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),o["\u0275did"](38,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(n()(),o["\u0275eld"](39,0,null,null,9,"div",[["class","star"]],null,null,null,null,null)),(n()(),o["\u0275eld"](40,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](41,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Sample Collection Process"])),(n()(),o["\u0275eld"](43,0,null,null,5,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","16px"],["formControlName","sample"],["readonly","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ratingChanged"]],(function(n,l,t){var o=!0;return"ratingChanged"===l&&(o=!1!==n.component.logSampleRating(t)&&o),o}),m.b,m.a)),o["\u0275did"](44,114688,[["sample",4]],0,f.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],fontSize:[6,"fontSize"]},{ratingChanged:"ratingChanged"}),o["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,(function(n){return[n]}),[f.a]),o["\u0275did"](46,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),o["\u0275did"](48,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(n()(),o["\u0275eld"](49,0,null,null,9,"div",[["class","star"]],null,null,null,null,null)),(n()(),o["\u0275eld"](50,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](51,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Report Result Quality"])),(n()(),o["\u0275eld"](53,0,null,null,5,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","16px"],["formControlName","report"],["readonly","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ratingChanged"]],(function(n,l,t){var o=!0;return"ratingChanged"===l&&(o=!1!==n.component.logReportRating(t)&&o),o}),m.b,m.a)),o["\u0275did"](54,114688,[["report",4]],0,f.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],fontSize:[6,"fontSize"]},{ratingChanged:"ratingChanged"}),o["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,(function(n){return[n]}),[f.a]),o["\u0275did"](56,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),o["\u0275did"](58,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(n()(),o["\u0275eld"](59,0,null,null,9,"div",[["class","star"]],null,null,null,null,null)),(n()(),o["\u0275eld"](60,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](61,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Over all Booking Experience"])),(n()(),o["\u0275eld"](63,0,null,null,5,"ionic5-star-rating",[["activeColor","#439213"],["activeIcon","star"],["defaultColor","black"],["defaultIcon","star-outline"],["fontSize","16px"],["formControlName","booking"],["readonly","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ratingChanged"]],(function(n,l,t){var o=!0;return"ratingChanged"===l&&(o=!1!==n.component.logBookingRating(t)&&o),o}),m.b,m.a)),o["\u0275did"](64,114688,[["booking",4]],0,f.a,[],{rating:[0,"rating"],readonly:[1,"readonly"],activeColor:[2,"activeColor"],defaultColor:[3,"defaultColor"],activeIcon:[4,"activeIcon"],defaultIcon:[5,"defaultIcon"],fontSize:[6,"fontSize"]},{ratingChanged:"ratingChanged"}),o["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,(function(n){return[n]}),[f.a]),o["\u0275did"](66,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),o["\u0275did"](68,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(n()(),o["\u0275eld"](69,0,null,null,10,"div",[["class","star"]],null,null,null,null,null)),(n()(),o["\u0275eld"](70,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](71,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Comment (Optional)"])),(n()(),o["\u0275eld"](73,0,null,null,6,"ion-textarea",[["auto-grow","true"],["class","textarea"],["cols","20"],["formControlName","comment"],["placeholder","Eg: Lab test service is excellent.."],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==o["\u0275nov"](n,74)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o["\u0275nov"](n,74)._handleInputEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(u.remark=t)&&e),e}),C.ub,C.I)),o["\u0275did"](74,16384,null,0,d.TextValueAccessor,[o.ElementRef],null,null),o["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,(function(n){return[n]}),[d.TextValueAccessor]),o["\u0275did"](76,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),o["\u0275did"](78,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),o["\u0275did"](79,49152,null,0,d.IonTextarea,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{cols:[0,"cols"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(n()(),o["\u0275eld"](80,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.submit()&&o),o}),C.P,C.d)),o["\u0275did"](81,49152,null,0,d.IonButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),o["\u0275ted"](-1,0,[" Submit "])),(n()(),o["\u0275eld"](83,0,null,null,37,"div",[["class","col-md-12 col-lg-6 col-xl-6"]],null,null,null,null,null)),(n()(),o["\u0275eld"](84,0,null,null,36,"div",[["class","stepTwo"]],null,null,null,null,null)),(n()(),o["\u0275eld"](85,0,null,null,3,"ion-item",[["class","active"]],null,null,null,C.db,C.r)),o["\u0275did"](86,49152,null,0,d.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](87,0,null,0,1,"h3",[["class","heading"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Booking Details"])),(n()(),o["\u0275eld"](89,0,null,null,12,"div",[["class","right-part"]],null,null,null,null,null)),(n()(),o["\u0275eld"](90,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),o["\u0275eld"](91,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](92,null,["Booking Id: ",""])),(n()(),o["\u0275eld"](93,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o["\u0275ted"](94,null,["",""])),(n()(),o["\u0275eld"](95,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,x)),o["\u0275did"](97,278528,null,0,_.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["\u0275eld"](98,0,null,null,1,"span",[["style","float: right;"]],null,null,null,null,null)),(n()(),o["\u0275ted"](99,null,["\u20b9 ",""])),(n()(),o["\u0275and"](16777216,null,null,1,null,I)),o["\u0275did"](101,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](102,0,null,null,18,"div",[["class","right-part"]],null,null,null,null,null)),(n()(),o["\u0275eld"](103,0,null,null,3,"div",[["class","split-para"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["M.R.P. Total "])),(n()(),o["\u0275eld"](105,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](106,null,["\u20b9",""])),(n()(),o["\u0275eld"](107,0,null,null,3,"div",[["class","split-para"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Price Discount "])),(n()(),o["\u0275eld"](109,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](110,null,["- \u20b9",""])),(n()(),o["\u0275eld"](111,0,null,null,3,"div",[["class","split-para"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Total Price "])),(n()(),o["\u0275eld"](113,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](114,null,["- \u20b9",""])),(n()(),o["\u0275and"](16777216,null,null,1,null,N)),o["\u0275did"](116,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](117,0,null,null,3,"div",[["class","final-para"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["AMOUNT PAID "])),(n()(),o["\u0275eld"](119,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](120,null,["\u20b9",""])),(n()(),o["\u0275eld"](121,0,null,0,1,"app-footer",[],null,null,null,v.b,v.a)),o["\u0275did"](122,114688,null,0,h.a,[r.m,d.NavController,g.a,s.a,c.a,d.ModalController],null,null)],(function(n,l){var t=l.component;n(l,1,0),n(l,11,0,t.rateForm),n(l,24,0,o["\u0275nov"](l,24),"false","#439213","black","star","star-outline","16px"),n(l,26,0,"price"),n(l,34,0,o["\u0275nov"](l,34),"false","#439213","black","star","star-outline","16px"),n(l,36,0,"lab"),n(l,44,0,o["\u0275nov"](l,44),"false","#439213","black","star","star-outline","16px"),n(l,46,0,"sample"),n(l,54,0,o["\u0275nov"](l,54),"false","#439213","black","star","star-outline","16px"),n(l,56,0,"report"),n(l,64,0,o["\u0275nov"](l,64),"false","#439213","black","star","star-outline","16px"),n(l,66,0,"booking"),n(l,76,0,"comment",t.remark),n(l,79,0,"20","Eg: Lab test service is excellent..","3"),n(l,81,0,t.rateForm.get("price").invalid||t.rateForm.get("lab").invalid||t.rateForm.get("sample").invalid||t.rateForm.get("report").invalid||t.rateForm.get("booking").invalid,"block"),n(l,97,0,null==t.detail?null:t.detail.test_data),n(l,101,0,0!==(null==t.detail?null:t.detail.member_id.length)),n(l,116,0,""!=(null==t.detail?null:t.detail.coupon_code)),n(l,122,0)}),(function(n,l){var t=l.component;n(l,9,0,o["\u0275nov"](l,13).ngClassUntouched,o["\u0275nov"](l,13).ngClassTouched,o["\u0275nov"](l,13).ngClassPristine,o["\u0275nov"](l,13).ngClassDirty,o["\u0275nov"](l,13).ngClassValid,o["\u0275nov"](l,13).ngClassInvalid,o["\u0275nov"](l,13).ngClassPending),n(l,23,0,o["\u0275nov"](l,28).ngClassUntouched,o["\u0275nov"](l,28).ngClassTouched,o["\u0275nov"](l,28).ngClassPristine,o["\u0275nov"](l,28).ngClassDirty,o["\u0275nov"](l,28).ngClassValid,o["\u0275nov"](l,28).ngClassInvalid,o["\u0275nov"](l,28).ngClassPending),n(l,33,0,o["\u0275nov"](l,38).ngClassUntouched,o["\u0275nov"](l,38).ngClassTouched,o["\u0275nov"](l,38).ngClassPristine,o["\u0275nov"](l,38).ngClassDirty,o["\u0275nov"](l,38).ngClassValid,o["\u0275nov"](l,38).ngClassInvalid,o["\u0275nov"](l,38).ngClassPending),n(l,43,0,o["\u0275nov"](l,48).ngClassUntouched,o["\u0275nov"](l,48).ngClassTouched,o["\u0275nov"](l,48).ngClassPristine,o["\u0275nov"](l,48).ngClassDirty,o["\u0275nov"](l,48).ngClassValid,o["\u0275nov"](l,48).ngClassInvalid,o["\u0275nov"](l,48).ngClassPending),n(l,53,0,o["\u0275nov"](l,58).ngClassUntouched,o["\u0275nov"](l,58).ngClassTouched,o["\u0275nov"](l,58).ngClassPristine,o["\u0275nov"](l,58).ngClassDirty,o["\u0275nov"](l,58).ngClassValid,o["\u0275nov"](l,58).ngClassInvalid,o["\u0275nov"](l,58).ngClassPending),n(l,63,0,o["\u0275nov"](l,68).ngClassUntouched,o["\u0275nov"](l,68).ngClassTouched,o["\u0275nov"](l,68).ngClassPristine,o["\u0275nov"](l,68).ngClassDirty,o["\u0275nov"](l,68).ngClassValid,o["\u0275nov"](l,68).ngClassInvalid,o["\u0275nov"](l,68).ngClassPending),n(l,73,0,o["\u0275nov"](l,78).ngClassUntouched,o["\u0275nov"](l,78).ngClassTouched,o["\u0275nov"](l,78).ngClassPristine,o["\u0275nov"](l,78).ngClassDirty,o["\u0275nov"](l,78).ngClassValid,o["\u0275nov"](l,78).ngClassInvalid,o["\u0275nov"](l,78).ngClassPending),n(l,92,0,null==t.detail?null:t.detail.booking_id),n(l,94,0,null==t.lab_detail?null:t.lab_detail.name),n(l,99,0,null==t.detail?null:t.detail.mrp_price),n(l,106,0,null==t.detail?null:t.detail.mrp_price),n(l,110,0,null==t.detail?null:t.detail.discount_on_mrp),n(l,114,0,null==t.detail?null:t.detail.total),n(l,120,0,null==t.detail?null:t.detail.grand_total)}))}function R(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-rating",[],null,null,null,S,k)),o["\u0275did"](1,114688,null,0,O,[c.a,s.a,r.m,d.AlertController,M.a,r.a,d.NavController,p.FormBuilder],null,null)],(function(n,l){n(l,1,0)}),null)}var y=o["\u0275ccf"]("app-rating",O,R,{},{},[]);class w{}var F=t("STSa"),A=t("xnLu"),E=t("TSSN"),V=t("dVnR"),T=t("j1ZV");t.d(l,"RatingPageModuleNgFactory",(function(){return L}));var L=o["\u0275cmf"](e,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,y]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[o.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_o"],p["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,d.AngularDelegate,d.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,d.ModalController,d.ModalController,[d.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,d.PopoverController,d.PopoverController,[d.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),o["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),o["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_d"],p["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,p.FormsModule,p.FormsModule,[]),o["\u0275mpd"](1073742336,d.IonicModule,d.IonicModule,[]),o["\u0275mpd"](1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),o["\u0275mpd"](1073742336,w,w,[]),o["\u0275mpd"](1073742336,f.b,f.b,[]),o["\u0275mpd"](1073742336,F.b,F.b,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,E.g,E.g,[]),o["\u0275mpd"](1073742336,V.a,V.a,[]),o["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,T.a,T.a,[]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,r.k,(function(){return[[{path:"",component:O}]]}),[])])}))}}]);