(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{cmQl:function(n,a,i){"use strict";i.r(a),i.d(a,"mdTransitionAnimation",(function(){return o})),i("54nT"),i("AfW+"),i("aiEM");var e=i("iAHb"),t=(i("kBU6"),i("Uch9")),o=function(n,a){var i="back"===a.direction,o=a.enteringEl,r=a.leavingEl,c=Object(t.b)(o),d=c.querySelector("ion-toolbar"),b=Object(e.a)();if(b.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),i?b.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),d){var s=Object(e.a)();s.addElement(d),b.addAnimation(s)}if(r&&i){b.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(e.a)();l.addElement(Object(t.b)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),b.addAnimation(l)}return b}}}]);