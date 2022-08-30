function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"JQ/6":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=function l(){_classCallCheck(this,l)},u=e("pMnS"),r=e("s7LF"),a=e("SVse"),i=e("Xqnl"),d=e("2MiI"),c=e("iInd"),s=e("sZkV"),g=e("hnS/"),m=e("2Rin"),p=e("8RPc"),f=e("MKJQ"),_=e("6jz6"),h=e("LmEr"),v=e("mrSG"),C=function(){function l(n,e,t,o,u,r){_classCallCheck(this,l),this.modalController=n,this.navCtrl=e,this.formBuilder=t,this.api=o,this.util=u,this.router=r,this.all_test=[],this.habit_test=[],this.filter_tests=[],this.recommended_age="",this.age_groups=[],this.recommended_fors=[],this.test_recommended_for="",this.filter=!1,this.getRecommendedFor(),this.getAgeGroup()}return _createClass(l,[{key:"ionViewWillEnter",value:function(){var l=this;this.habit_id=localStorage.getItem("habitid"),console.log(this.habit_id),this.api.getHealthHabbitsById(this.habit_id).then((function(n){console.log(n),l.habit_detail=n[0]})).catch((function(n){n&&(console.log(n),l.util.showToast("".concat(n),"danger","bottom"))}))}},{key:"ngOnInit",value:function(){var l=this;this.filter_tests=[],this.api.getIndividualTest().then((function(n){l.all_test=n;var e=!0,t=!1,o=void 0;try{for(var u,r=l.all_test[Symbol.iterator]();!(e=(u=r.next()).done);e=!0){var a=u.value,i=!0,d=!1,c=void 0;try{for(var s,g=a.habbit[Symbol.iterator]();!(i=(s=g.next()).done);i=!0){s.value.item_id==l.habit_id&&(console.log("matched"),l.habit_test.push(a),l.filter_tests.push(a),console.log(l.habit_test))}}catch(m){d=!0,c=m}finally{try{i||null==g.return||g.return()}finally{if(d)throw c}}}}catch(m){t=!0,o=m}finally{try{e||null==r.return||r.return()}finally{if(t)throw o}}l.habit_test.sort((function(l,n){return l.test_name.localeCompare(n.test_name)}))})).catch((function(l){console.log(l)}))}},{key:"goToDetail",value:function(l){localStorage.setItem("testid",l.id),localStorage.setItem("testname",l.test_name),this.router.navigate(["test",l.page_slug])}},{key:"clear",value:function(){this.recommended_age="",this.test_recommended_for="",this.filter=!1,this.ngOnInit()}},{key:"search",value:function(){if(""==this.recommended_age&&""==this.test_recommended_for)return this.util.showToast("Please select at least one filter","danger","bottom"),!1;this.habit_test=[];var l=[],n=[];this.filter=!0;var e=!0,t=!1,o=void 0;try{for(var u,r=this.filter_tests[Symbol.iterator]();!(e=(u=r.next()).done);e=!0){var a=u.value;if(""!=this.recommended_age&&""==this.test_recommended_for){var i=!0,d=!1,c=void 0;try{for(var s,g=a.recommended_age[Symbol.iterator]();!(i=(s=g.next()).done);i=!0){s.value.item_id==this.recommended_age&&this.habit_test.push(a)}}catch(w){d=!0,c=w}finally{try{i||null==g.return||g.return()}finally{if(d)throw c}}}else if(""==this.recommended_age&&""!=this.test_recommended_for){var m=!0,p=!1,f=void 0;try{for(var _,h=a.test_recommended_for[Symbol.iterator]();!(m=(_=h.next()).done);m=!0){_.value==this.test_recommended_for&&this.habit_test.push(a)}}catch(w){p=!0,f=w}finally{try{m||null==h.return||h.return()}finally{if(p)throw f}}}else{var v=!0,C=!1,b=void 0;try{for(var x,y=a.recommended_age[Symbol.iterator]();!(v=(x=y.next()).done);v=!0){x.value.item_id==this.recommended_age&&l.push(a)}}catch(w){C=!0,b=w}finally{try{v||null==y.return||y.return()}finally{if(C)throw b}}var M=!0,R=!1,O=void 0;try{for(var k,P=a.test_recommended_for[Symbol.iterator]();!(M=(k=P.next()).done);M=!0){k.value==this.test_recommended_for&&n.push(a)}}catch(w){R=!0,O=w}finally{try{M||null==P.return||P.return()}finally{if(R)throw O}}this.habit_test=l.filter((function(l){return n.includes(l)}))}}}catch(w){t=!0,o=w}finally{try{e||null==r.return||r.return()}finally{if(t)throw o}}console.log("item",this.habit_test),this.habit_test.length>0?this.habit_test.sort((function(l,n){return l.test_name.localeCompare(n.test_name)})):this.util.showToast("No Data Found","danger","bottom")}},{key:"getAgeGroup",value:function(){return v.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.api.getAgeGroup().then((function(l){return v.__awaiter(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(l),l&&(this.age_groups=l);case 1:case"end":return n.stop()}}),n,this)})))})).catch((function(l){console.log(l)}));case 2:case"end":return l.stop()}}),l,this)})))}},{key:"getRecommendedFor",value:function(){return v.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.api.getRecommendedFor().then((function(l){return v.__awaiter(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(l),this.recommended_fors=l;case 1:case"end":return n.stop()}}),n,this)})))})).catch((function(l){console.log(l)}));case 2:case"end":return l.stop()}}),l,this)})))}}]),l}(),b=t["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .category_nameha[_ngcontent-%COMP%]{font-size:20px;color:#007c9d;font-weight:700;padding-top:30px;line-height:20px}ion-content[_ngcontent-%COMP%]   .ShopByProducts[_ngcontent-%COMP%]{padding:30px 50px 50px;background:#ededed}ion-content[_ngcontent-%COMP%]   .popimg[_ngcontent-%COMP%]{border-radius:10px 10px 0 0}ion-content[_ngcontent-%COMP%]   .grid-item-innerha[_ngcontent-%COMP%]{text-align:center;background:#fff;padding:16px;border-top:3px solid var(--ion-color-secondary);margin-bottom:30px}ion-content[_ngcontent-%COMP%]   .desha[_ngcontent-%COMP%]{margin:10px 0}ion-content[_ngcontent-%COMP%]   .addtocart[_ngcontent-%COMP%]{background:#ea5b24;color:#fff;font-size:13px;margin:4px auto;text-align:center;display:block;width:50%;padding:10px}ion-content[_ngcontent-%COMP%]   .uptopmp[_ngcontent-%COMP%]{padding:0 10px}ion-content[_ngcontent-%COMP%]   .uptopmp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:5px 0}ion-content[_ngcontent-%COMP%]   .mpopimg[_ngcontent-%COMP%]{border-radius:50px;border:1px solid #ddd;position:absolute;top:-25px;left:40%;padding:10px;background:#fff}ion-content[_ngcontent-%COMP%]   .category_namemp[_ngcontent-%COMP%]{font-size:14px;font-weight:700;text-transform:uppercase;padding-top:50px;height:95px}ion-content[_ngcontent-%COMP%]   .desmp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   .desmp[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-image:url(bul_chk.b23274f8fba45b8794bb.png);background-position:2px;background-repeat:no-repeat;list-style:none;font-size:14px;text-align:left;padding-left:25px}ion-content[_ngcontent-%COMP%]   .butkmore[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   .butkmore[_ngcontent-%COMP%]   .know_more[_ngcontent-%COMP%]{margin:15px;color:#007c9d;background:#fff;border-radius:50px;border:1px solid #007c9d;padding:10px;font-size:15px}ion-content[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%]{background:#fff;box-shadow:rgba(0,0,0,.4) 0 8px 10px;margin:16px 8px 20%;border-top-left-radius:20px;border-bottom-right-radius:20px}ion-content[_ngcontent-%COMP%]   .mid.second[_ngcontent-%COMP%]{border-radius:0 20px}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,r.NgSelectOption,[t.ElementRef,t.Renderer2,[2,r.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,r["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,["",""]))],(function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))}),(function(l,n){l(n,3,0,n.context.$implicit.name)}))}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,r.NgSelectOption,[t.ElementRef,t.Renderer2,[2,r.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,r["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,["",""]))],(function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))}),(function(l,n){l(n,3,0,n.context.$implicit.name)}))}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.clear()&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["Clear"]))],null,null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,"div",[["class","col-md-12 col-lg-3 col-xl-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,18,"div",[["class","grid-item-inner"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,17,"div",[],null,null,null,null,null)),t["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](4,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),(l()(),t["\u0275eld"](5,0,null,null,11,"div",[["class","uptopmp"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,"img",[["class","mpopimg"],["src","assets/mp1_11.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"p",[["class","category_namemp"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,null,7,"div",[["class","desmp"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,["Total no.of Tests - ",""])),(l()(),t["\u0275eld"](13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Quick Turn Around Time"])),(l()(),t["\u0275eld"](15,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Reporting as per NABL ISO guidelines"])),(l()(),t["\u0275eld"](17,0,null,null,2,"div",[["class","butkmore"]],null,null,null,null,null)),(l()(),t["\u0275eld"](18,0,null,null,1,"button",[["class","know_more"],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goToDetail(l.context.$implicit)&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["Know More"]))],(function(l,n){l(n,4,0,n.context.index%2==0?"mid":"mid second")}),(function(l,n){l(n,8,0,n.context.$implicit.test_name),l(n,12,0,n.context.$implicit.parameter.length)}))}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,i.b,i.a)),t["\u0275did"](1,114688,null,0,d.a,[c.m,s.NavController,g.a,m.a,p.a],null,null),(l()(),t["\u0275eld"](2,0,null,null,59,"ion-content",[],null,null,null,f.W,f.k)),t["\u0275did"](3,49152,null,0,s.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,6,"div",[["class","cart-div deal_detail"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,5,"div",[["class","row step-div cart-sec"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,3,"div",[["class","col-md-12 col-sm-12 col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"h3",[["_ngcontent-ovj-c5",""],["style","margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,["",""])),(l()(),t["\u0275eld"](10,0,null,null,0,"p",[["class","metaFooterToggleLink text-justify"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,0,43,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,42,"div",[["class","cart-div deal_detail"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,41,"div",[["class","row step-div cart-sec"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,2,"div",[["class","col-md-5 col-sm-5 col-xs-5"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,1,"h3",[["_ngcontent-ovj-c5",""],["style","margin: 20px 0 4% 0px;display: inline-block;border-bottom: 2px solid #ea5b24;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["Test Associated with ",""])),(l()(),t["\u0275eld"](18,0,null,null,14,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Age Group :"])),(l()(),t["\u0275eld"](21,0,null,null,11,"select",[["class","form-control"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,e){var o=!0,u=l.component;return"change"===n&&(o=!1!==t["\u0275nov"](l,22).onChange(e.target.value)&&o),"blur"===n&&(o=!1!==t["\u0275nov"](l,22).onTouched()&&o),"ngModelChange"===n&&(o=!1!==(u.recommended_age=e)&&o),o}),null,null)),t["\u0275did"](22,16384,null,0,r.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,(function(l){return[l]}),[r.SelectControlValueAccessor]),t["\u0275did"](24,671744,null,0,r.NgModel,[[8,null],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),t["\u0275did"](26,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),t["\u0275eld"](27,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),t["\u0275did"](28,147456,null,0,r.NgSelectOption,[t.ElementRef,t.Renderer2,[2,r.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](29,147456,null,0,r["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,["Please select Age Group"])),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](32,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](33,0,null,null,14,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](34,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Suitable For : "])),(l()(),t["\u0275eld"](36,0,null,null,11,"select",[["class","form-control"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,e){var o=!0,u=l.component;return"change"===n&&(o=!1!==t["\u0275nov"](l,37).onChange(e.target.value)&&o),"blur"===n&&(o=!1!==t["\u0275nov"](l,37).onTouched()&&o),"ngModelChange"===n&&(o=!1!==(u.test_recommended_for=e)&&o),o}),null,null)),t["\u0275did"](37,16384,null,0,r.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,(function(l){return[l]}),[r.SelectControlValueAccessor]),t["\u0275did"](39,671744,null,0,r.NgModel,[[8,null],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),t["\u0275did"](41,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),t["\u0275eld"](42,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),t["\u0275did"](43,147456,null,0,r.NgSelectOption,[t.ElementRef,t.Renderer2,[2,r.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](44,147456,null,0,r["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,["Please select gender"])),(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](47,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](48,0,null,null,3,"div",[["class","col-sm-1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](49,0,null,null,0,"label",[],null,null,null,null,null)),(l()(),t["\u0275eld"](50,0,null,null,1,"button",[["class","btn btn-success"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.search()&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["Search"])),(l()(),t["\u0275eld"](52,0,null,null,3,"div",[["class","col-sm-1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](53,0,null,null,0,"label",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](55,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](56,0,null,0,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](57,0,null,null,2,"div",[["class","row"],["style","margin-top: 30px;"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](59,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](60,0,null,0,1,"app-footer",[],null,null,null,_.b,_.a)),t["\u0275did"](61,114688,null,0,h.a,[c.m,s.NavController,g.a,m.a,p.a,s.ModalController],null,null)],(function(l,n){var e=n.component;l(n,1,0),l(n,24,0,e.recommended_age),l(n,28,0,""),l(n,29,0,""),l(n,32,0,e.age_groups),l(n,39,0,e.test_recommended_for),l(n,43,0,""),l(n,44,0,""),l(n,47,0,e.recommended_fors),l(n,55,0,e.filter),l(n,59,0,e.habit_test),l(n,61,0)}),(function(l,n){var e=n.component;l(n,9,0,null==e.habit_detail?null:e.habit_detail.name),l(n,10,0,null==e.habit_detail?null:e.habit_detail.description),l(n,17,0,null==e.habit_detail?null:e.habit_detail.name),l(n,21,0,t["\u0275nov"](n,26).ngClassUntouched,t["\u0275nov"](n,26).ngClassTouched,t["\u0275nov"](n,26).ngClassPristine,t["\u0275nov"](n,26).ngClassDirty,t["\u0275nov"](n,26).ngClassValid,t["\u0275nov"](n,26).ngClassInvalid,t["\u0275nov"](n,26).ngClassPending),l(n,36,0,t["\u0275nov"](n,41).ngClassUntouched,t["\u0275nov"](n,41).ngClassTouched,t["\u0275nov"](n,41).ngClassPristine,t["\u0275nov"](n,41).ngClassDirty,t["\u0275nov"](n,41).ngClassValid,t["\u0275nov"](n,41).ngClassInvalid,t["\u0275nov"](n,41).ngClassPending)}))}var k=t["\u0275ccf"]("app-app-habit",C,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-app-habit",[],null,null,null,O,b)),t["\u0275did"](1,114688,null,0,C,[s.ModalController,s.NavController,r.FormBuilder,p.a,m.a,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),P=function l(){_classCallCheck(this,l)},w=e("xnLu"),S=e("TSSN"),N=e("dVnR"),I=e("STSa"),A=e("j1ZV");e.d(n,"HabitPageModuleNgFactory",(function(){return F}));var F=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,k]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_o"],r["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,s.AngularDelegate,s.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,s.ModalController,s.ModalController,[s.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,s.PopoverController,s.PopoverController,[s.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_d"],r["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),t["\u0275mpd"](1073742336,s.IonicModule,s.IonicModule,[]),t["\u0275mpd"](1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,w.a,w.a,[]),t["\u0275mpd"](1073742336,S.g,S.g,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,I.b,I.b,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);