function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n <ion-split-pane contentId=\"main-content\">\n  <ion-menu contentId=\"main-content\" type=\"overlay\"  *ngIf=\"!isDesktop\">\n   <ion-content>\n    <ion-menu-toggle auto-hide=\"false\">\n      <ion-item class=\"col-item\" (click)=\"home()\">\n        <p class=\"col_name\">Home</p> \n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n      </ion-item>            \n      <!--<ion-item class=\"col-item\">\n        <p class=\"col_name\">My Account</p>\n        <ion-icon name=\"folder-outline\" slot=\"start\"></ion-icon>\n      </ion-item>-->\n\t  </ion-menu-toggle>\n      <ion-item class=\"col-item\" (click)=\"openHabits()\">\n        <p class=\"col_name\">Health Habits</p>\n        <ion-icon name=\"folder-outline\" slot=\"start\"></ion-icon>\n        <ion-icon  slot=\"end\" name=\"caret-down-outline\" *ngIf=\"isHabit\"></ion-icon>\n        <ion-icon  slot=\"end\" name=\"caret-forward-outline\" *ngIf=\"!isHabit\"></ion-icon>\n      </ion-item>\n      <ion-menu-toggle class=\"submenuitem\" auto-hide=\"false\" *ngIf=\"isHabit\">\n        <p *ngFor=\"let item of risks\" (click)=\"viewRisk(item)\">{{item.name}}</p>\n      </ion-menu-toggle>  \n      <ion-item class=\"col-item\" (click)=\"openRisk()\">\n        <p class=\"col_name\">Health Risks</p>\n        <ion-icon name=\"folder-outline\" slot=\"start\"></ion-icon>\n        <ion-icon  slot=\"end\" name=\"caret-down-outline\" *ngIf=\"isRisk\"></ion-icon>\n        <ion-icon  slot=\"end\" name=\"caret-forward-outline\" *ngIf=\"!isRisk\"></ion-icon>\n      </ion-item>\n      <ion-menu-toggle class=\"submenuitem\" auto-hide=\"false\" *ngIf=\"isRisk\">\n        <p *ngFor=\"let item of habbits\" (click)=\"viewHabit(item)\">{{item.name}}</p>\n      </ion-menu-toggle> \n      <ion-menu-toggle auto-hide=\"false\">\n      <ion-item class=\"col-item\" (click)=\"corporate()\">\n        <p class=\"col_name\">Corporate</p> \n        <ion-icon name=\"cellular-outline\" slot=\"start\"></ion-icon>\n      </ion-item>            \n     \n    </ion-menu-toggle>\n    <ion-menu-toggle auto-hide=\"false\">\n      <ion-item class=\"col-item\" (click)=\"faq()\">\n        <p class=\"col_name\">FAQ</p> \n        <ion-icon name=\"help-outline\" slot=\"start\"></ion-icon>\n      </ion-item>            \n      \n    </ion-menu-toggle> \n   </ion-content>\n   <ion-footer>\n    <!--<ion-menu-toggle>\n      <ion-button (click)=\"login()\" *ngIf=\"!logedIn\" expand=\"block\">\n         Log In\n      </ion-button>\n       <ion-button (click)=\"logout()\" *ngIf=\"logedIn\" expand=\"block\">\n         Log Out\n      </ion-button>\n    </ion-menu-toggle>-->\n   </ion-footer>\n  </ion-menu>\n <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-split-pane>\n</ion-app>\n<!-- <ion-app>\n <ion-split-pane contentId=\"main-content\">\n <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-split-pane>\n</ion-app> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div>\n    <ion-icon (click)=\"close()\" slot=\"icon-only\" name=\"close-outline\" class=\"header\"></ion-icon>\n  </div>\n  <div>\n    <form [formGroup]=\"supportForm\">\n      <div class=\"input-div\">\n        <ion-input [(ngModel)]=\"phone\" type=\"tel\" id=\"phoneNumber\" placeholder=\"Enter Your Mobile No.*\" formControlName=\"phone\"></ion-input>\n      </div>\n      <div no-lines *ngIf=\"( supportForm.get('phone').hasError('minlength') || supportForm.get('phone').hasError('maxlength') ||supportForm.get('phone').hasError('pattern') ||supportForm.get('phone').hasError('required') ) && supportForm.get('phone').touched\">\n        <div class=\"error\" *ngIf=\"supportForm.get('phone').hasError('required') && supportForm.get('phone').touched\">\n         Mobile Number Is Required\n        </div>\n        <div class=\"error\" *ngIf=\"supportForm.get('phone').hasError('minlength')\">\n          Please Enter Valid Mobile Number\n        </div>\n        <div class=\"error\" *ngIf=\"supportForm.get('phone').hasError('maxlength')\">\n          Please Enter Valid Mobile Number\n        </div>\n      </div>\n      <div class=\"info\" *ngIf=\"supportForm.get('phone').valid\">\n        We will send an OTP on this mobile number.\n      </div>\n      <div class=\"input-div\">\n        <ion-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"Enter Your Full Name*\" formControlName=\"name\"></ion-input>\n      </div>\n      <div no-lines *ngIf=\"( supportForm.get('name').hasError('minlength') || supportForm.get('name').hasError('maxlength') ||supportForm.get('name').hasError('pattern') ||supportForm.get('name').hasError('required') ) && supportForm.get('name').touched\">\n        <div class=\"error\" *ngIf=\"supportForm.get('name').hasError('required') && supportForm.get('name').touched\">\n         Name Is Required\n        </div>\n      </div>\n      <div class=\"input-div\">\n        \n\t\t <ion-input [(ngModel)]=\"city\" type=\"text\"  placeholder=\"Enter Your City.*\" formControlName=\"city\"></ion-input>\n      </div>\n      <div no-lines *ngIf=\"( supportForm.get('city').hasError('minlength') || supportForm.get('city').hasError('maxlength') ||supportForm.get('city').hasError('pattern') ||supportForm.get('city').hasError('required') ) && supportForm.get('city').touched\">\n        <div class=\"error\" *ngIf=\"supportForm.get('city').hasError('required') && supportForm.get('city').touched\">\n         City Is Required\n        </div>\n      </div>\n    </form>\n  </div>\n  <ion-button (click)=\"sendOTP()\"  [disabled]=\"supportForm.get('name').invalid || supportForm.get('phone').invalid || supportForm.get('city').invalid\">GET A FREE CALL NOW</ion-button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signin/signin.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signin/signin.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page\">\n <div class=\"container-fluid\"> \n <div class=\"row no-gutter\" style=\"background: #3199a1;\">\n <!-- The image half --> \n<!-- <div class=\"col-md-12 col-lg-6 col-xl-7  d-md-flex \">\n  <div class=\"row \"> \n    <div class=\" \"> \n      <img src=\"assets/bgl-p.jpg\" class=\"my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto\">  \n    </div> \n  </div> \n</div>\n\n  The content half --> \n \n <div class=\"col-md-12 col-lg-12 col-xl-12\" style=\"height: 100%;z-index: 9;display: inline-flex;background:#fff;max-height: 100%;vertical-align: top; padding:7% 0; \">\n <div class=\" \" style=\"margin: 0 auto;\"> \n <div class=\"login d-flex align-items-center py-2\"> \n <div class=\"container p-0\"> \n <div class=\"row\"> \n <div class=\"col-md-12 col-lg-12 col-xl-12 mx-auto\"> \n <div class=\"card-sigin\"> \n  <div class=\"mb-5 d-flex\"> \n    <img src=\"assets/logo.png\" class=\"\" alt=\"logo\">\n  </div>\n <div class=\"card-sigin\"> \n <div class=\"main-signup-header\"> \n \n  <form [formGroup]=\"loginForm\">\n    <div *ngIf=\"!stepOne\">\n    <div class=\"left-head\">\n      <h3>Input phone number</h3>\n      <p>Use phone number to sign in or sign up</p>\n    </div>\n     <ion-item lines=\"none\">\n      <span item-right class=\"input-icon\"><ion-icon name=\"phone-portrait-outline\"></ion-icon></span>\n      <ion-input class=\"login-item\" id=\"phoneNumber\" type=\"tel\" [placeholder]=\"('Enter Your Mobile Number' | translate) || '&nbsp;'\" formControlName=\"phone\"></ion-input>\n     </ion-item>\n      <div no-lines *ngIf=\"( loginForm.get('phone').hasError('minlength') || loginForm.get('phone').hasError('maxlength') ||loginForm.get('phone').hasError('pattern') ||loginForm.get('phone').hasError('required') ) && loginForm.get('phone').touched\">\n      <div class=\"error\" *ngIf=\"loginForm.get('phone').hasError('required') && loginForm.get('phone').touched\">\n       Mobile Number Is Required\n      </div>\n      <div class=\"error\" *ngIf=\"loginForm.get('phone').hasError('minlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n      <div class=\"error\" *ngIf=\"loginForm.get('phone').hasError('maxlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n     </div>\n     <ion-button class=\"btn_class\" (click)=\"sendOTP()\" type=\"submit\" expand=\"block\" [disabled]=\"loginForm.get('phone').invalid\">\n      SEND OTP\n     </ion-button>\n  </div>\n  <div *ngIf=\"stepOne\" class=\"welcome\">\n    <div class=\"number\"> +91 | {{user_phone}}</div>\n      <p>We have send 4 digits OTP to</p>\n      <div class=\"otp-enter\">\n        <code-input [isCodeHidden]=\"false\"\n          [codeLength]=\"4\"\n          [initialFocusField]=\"0\"\n          (codeChanged)=\"onCodeChanged($event)\"\n          (codeCompleted)=\"onCodeCompleted($event)\">\n        </code-input>\n        <div class=\"footer ion-padding\">\n          <ion-button  (click)=\"verifyOtp()\" type=\"submit\" expand=\"block\">\n            VERIFY OTP\n          </ion-button>\n          <p>-OR-</p>\n          <p style=\"color: var(--ion-color-primary)\"  (click)=\"skip()\">Skip Login</p>\n        </div>\n      </div>\n      <div class=\"send\"> \n        <p>Waiting for OTP...{{timer}} sec <span><p (click)=\"resend()\" type=\"submit\" class=\"btn_class\" *ngIf=\"timer == 0\">Resend OTP</p></span>\n        </p>\n      </div>\n    </div>\n  </form>\n </div>\n </div> \n </div>\n </div> </div>\n </div><!-- End --> \n </div> </div><!-- End --> \n \n </div>\n </div> </div> </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update/update.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update/update.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpdateUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-size: 15px;padding-left: 10px;\" *ngIf=\"redirectRoute == 'add'\"> Add a new member</ion-title>\n    <ion-title style=\"font-size: 15px;padding-left: 10px;\" *ngIf=\"redirectRoute == 'edit'\"> Edit Member</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n       <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<div>\n  <!-- <br>\n   <ion-label>\n    Add a new member\n   </ion-label> -->\n   <form [formGroup]=\"memberForm\">\n    <ion-list class=\"list\">\n     <p class=\"emailTag\">Name</p>\n      <ion-item>\n       <ion-input [(ngModel)]=\"name\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"name\" placeholder=\"Please Enter Your Name\" value=\"{{profile?.name}}\">\n       </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( memberForm.get('name').hasError('minlength') || memberForm.get('name').hasError('maxlength') ||memberForm.get('name').hasError('pattern') ||memberForm.get('name').hasError('required') ) && memberForm.get('name').touched\">\n      <div class=\"error\" *ngIf=\"memberForm.get('name').hasError('required') && memberForm.get('name').touched\">\n       Name Is Required\n      </div>\n      </div>\n    <ion-row>\n      <ion-col>\n        <p class=\"mblTag\">Date of Birth</p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"date\"  [(ngModel)]=\"dob\" placeholder=\"Select DOB\" formControlName=\"dob\" (ionChange)=\"datePickerStart($event)\" value=\"{{profile?.dob}}\" [max]=\"maxDate\"></ion-input>\n        </ion-item>\n        <div no-lines *ngIf=\"( memberForm.get('dob').hasError('minlength') || memberForm.get('dob').hasError('maxlength') ||memberForm.get('dob').hasError('pattern') ||memberForm.get('dob').hasError('required') ) && memberForm.get('dob').touched\">\n          <div class=\"error\" *ngIf=\"memberForm.get('dob').hasError('required') && memberForm.get('dob').touched\">\n          Date Of Birth Is Required\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <p class=\"mblTag\">Gender</p>\n        <ion-item lines=\"none\">\n          <ion-select [interfaceOptions]=\"customAlertOptions\" placeholder=\"Select Gender\" [(ngModel)]=\"gender\" formControlName=\"gender\" class=\"sel\" value=\"{{profile?.gender}}\">\n          <ion-select-option value=\"Male\">Male</ion-select-option>\n          <ion-select-option value=\"Female\">Female</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n        </ion-item>\n        <div no-lines *ngIf=\"( memberForm.get('gender').hasError('minlength') || memberForm.get('gender').hasError('maxlength') ||memberForm.get('gender').hasError('pattern') ||memberForm.get('gender').hasError('required') ) && memberForm.get('gender').touched\">\n          <div class=\"error\" *ngIf=\"memberForm.get('gender').hasError('required') && memberForm.get('gender').touched\">\n         Gender Is Required\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</form>\n </div>\n  <ion-button (click)=\"add()\" *ngIf=\"redirectRoute == 'add'\" expand=\"block\" icon-only class=\"btn_class\" [disabled]=\"memberForm.get('name').invalid || memberForm.get('dob').invalid || memberForm.get('gender').invalid\">\n    Add\n  </ion-button>\n  <ion-button (click)=\"update()\" *ngIf=\"redirectRoute == 'edit'\" expand=\"block\" icon-only class=\"btn_class\" [disabled]=\"memberForm.get('name').invalid || memberForm.get('dob').invalid || memberForm.get('gender').invalid\">\n    Update\n  </ion-button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddAddressAddAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background-class\">\n  <div (click)=\"closeModal()\" class=\"header\">\n    <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n  </div>\n\n  <form [formGroup]=\"addressForm\">\n    <div class=\"label\" *ngIf=\"new\">\n      Add a new address\n    </div>\n     <div class=\"label\" *ngIf=\"!new\">\n     Update address\n    </div>\n    <ion-radio-group [(ngModel)]=\"label\" formControlName=\"label\" >\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>Home</ion-label>\n            <ion-radio class=\"radioclass\" slot=\"start\" value=\"home\"  mode=\"ios\"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>Office</ion-label>\n            <ion-radio class=\"radioclass\" slot=\"start\" value=\"office\"  mode=\"ios\"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>Other</ion-label>\n            <ion-radio class=\"radioclass\" slot=\"start\" value=\"other\"  mode=\"ios\"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"mobile\" type=\"tel\" formControlName=\"phone\" placeholder=\"Enter Your Mobile Number\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( addressForm.get('phone').hasError('minlength') || addressForm.get('phone').hasError('maxlength') ||addressForm.get('phone').hasError('pattern') ||addressForm.get('phone').hasError('required') ) && addressForm.get('phone').touched\">\n      <div class=\"error\" *ngIf=\"addressForm.get('phone').hasError('required') && addressForm.get('phone').touched\">\n        Mobile Number Is Required\n      </div>\n      <div class=\"error\" *ngIf=\"addressForm.get('phone').hasError('minlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n      <div class=\"error\" *ngIf=\"addressForm.get('phone').hasError('maxlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n     </div>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"street\" type=\"text\" [placeholder]=\"('Flat Number, House Number, Street etc..*' | translate) || '&nbsp;'\" name=\"street\" spellcheck=\"false\" autocapitalize=\"on\" formControlName=\"street\">\n      </ion-input>\n    </ion-item>\n    <div no-lines *ngIf=\"( addressForm.get('street').hasError('minlength') || addressForm.get('street').hasError('maxlength') ||addressForm.get('street').hasError('pattern') ||addressForm.get('street').hasError('required') ) && addressForm.get('street').touched\">\n      <div class=\"error\" *ngIf=\"addressForm.get('street').hasError('required') && addressForm.get('street').touched\">\n      Flat Number, House Number, Street etc. Is Required\n      </div>\n     </div>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"pincode\" type=\"tel\" [placeholder]=\"('Pincode' | translate) || '&nbsp;'\" name=\"pincode\" spellcheck=\"false\" autocapitalize=\"on\" formControlName=\"pincode\" [disabled]=\"routeFrom == 'add'\">\n      </ion-input>\n    </ion-item>\n    <div no-lines *ngIf=\"( addressForm.get('pincode').hasError('minlength') || addressForm.get('pincode').hasError('maxlength') ||addressForm.get('pincode').hasError('pattern') ||addressForm.get('pincode').hasError('required') ) && addressForm.get('pincode').touched\">\n      <div class=\"error\" *ngIf=\"addressForm.get('pincode').hasError('required') && addressForm.get('pincode').touched\">\n       Pincode Is Required\n      </div>\n     </div>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"locality\" type=\"text\" [placeholder]=\"('Locality*' | translate) || '&nbsp;'\" name=\"locality\" spellcheck=\"false\" autocapitalize=\"on\" formControlName=\"locality\">\n      </ion-input>\n    </ion-item>\n    <div no-lines *ngIf=\"( addressForm.get('locality').hasError('minlength') || addressForm.get('locality').hasError('maxlength') ||addressForm.get('locality').hasError('pattern') ||addressForm.get('locality').hasError('required') ) && addressForm.get('locality').touched\">\n      <div class=\"error\" *ngIf=\"addressForm.get('locality').hasError('required') && addressForm.get('locality').touched\">\n       Locality Is Required\n      </div>\n     </div>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"landmark\" type=\"text\" [placeholder]=\"('Landmark' | translate) || '&nbsp;'\" name=\"landmark\" spellcheck=\"false\" autocapitalize=\"on\" [ngModelOptions]=\"{standalone: true}\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"city\" type=\"tel\" [placeholder]=\"('City*' | translate) || '&nbsp;'\" name=\"city\" spellcheck=\"false\" autocapitalize=\"on\" formControlName=\"city\" [disabled]=\"routeFrom == 'add'\">\n      </ion-input>\n    </ion-item>\n    <div no-lines *ngIf=\"( addressForm.get('city').hasError('minlength') || addressForm.get('city').hasError('maxlength') ||addressForm.get('city').hasError('pattern') ||addressForm.get('city').hasError('required') ) && addressForm.get('city').touched\">\n      <div class=\"error\" *ngIf=\"addressForm.get('city').hasError('required') && addressForm.get('city').touched\">\n       City Is Required\n      </div>\n     </div>\n     <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"state\" type=\"tel\" [placeholder]=\"('State' | translate) || '&nbsp;'\" name=\"state\" spellcheck=\"false\" autocapitalize=\"on\" formControlName=\"state\" [disabled]=\"routeFrom == 'add'\">\n      </ion-input>\n    </ion-item>\n    <div no-lines *ngIf=\"( addressForm.get('state').hasError('minlength') || addressForm.get('state').hasError('maxlength') ||addressForm.get('state').hasError('pattern') ||addressForm.get('state').hasError('required') ) && addressForm.get('state').touched\">\n      <div class=\"error\" *ngIf=\"addressForm.get('state').hasError('required') && addressForm.get('state').touched\">\n       State Is Required\n      </div>\n     </div>\n   </ion-list>\n  </form>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-button *ngIf=\"new\" (click)=\"add()\" expand=\"block\" [disabled]=\"addressForm.get('phone').invalid || addressForm.get('locality').invalid || addressForm.get('street').invalid || addressForm.get('city').invalid || addressForm.get('pincode').invalid || addressForm.get('state').invalid\">\n      ADD ADDRESS\n  </ion-button>\n  <ion-button *ngIf=\"!new\" (click)=\"update()\" expand=\"block\" [disabled]=\"addressForm.get('phone').invalid || addressForm.get('locality').invalid || addressForm.get('street').invalid || addressForm.get('city').invalid || addressForm.get('pincode').invalid || addressForm.get('state').invalid\">\n      UPDATE ADDRESS\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insufficient/insufficient.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insufficient/insufficient.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInsufficientInsufficientPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  \t<div class=\"cntent\">\n  \t\t<!-- <ion-item> -->\n\t  \t\t<ion-label>\n\t  \t\t\tAvailable Balance\n\t  \t\t</ion-label>\n\t  \t\t<ion-thumbnail slot=\"end\">\n\t  \t\t\t<img src=\"assets/rs.jpg\">\n\t  \t\t</ion-thumbnail>\n\t  \t<!-- </ion-item> -->\n  \t\t<p>{{currency_}} {{wallet_balance}}</p>\n  \t\t<small>\n  \t\t\tNote: <br>\n  \t\t\tYour wallet have insufficient balance for this subscription, please recharge your wallet immediately.\n  \t\t</small>\n  \t\t<ion-button (click)=\"makePay()\" expand=\"block\">\n\t\t      Add {{currency_}} {{required_amount}}\n\t\t</ion-button>\n  \t</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-modal/profile-modal.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-modal/profile-modal.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileModalProfileModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n<div class=\"container\">\n    <div class=\"padding\">\n        <div class=\"ion-margin-top\">\n            <div class=\"input-div\">\n                <ion-label>Full Name</ion-label>\n                <ion-input [(ngModel)]=\"name\" placeholder=\"Enter your full name\"></ion-input>\n            </div>\n            <div class=\"input-div\">\n                <ion-label>Email Address</ion-label>\n                <ion-input [(ngModel)]=\"email\" placeholder=\"Enter your email Id\"></ion-input>\n            </div>\n            <div class=\"input-div\">\n                <ion-label>Date of birth</ion-label>\n                <ion-input type=\"date\"  [(ngModel)]=\"dob\" placeholder=\"Select your date of birth\" (ionChange)=\"datePickerStart($event)\" [max]=\"maxDate\"></ion-input>\n            </div>\n            <div class=\"input-div\">\n                <ion-label>Gender</ion-label>\n                <ion-select interface=\"popover\" placeholder=\"Select your gender\" [(ngModel)]=\"gender\" class=\"sel\">\n                  <ion-select-option value=\"Male\">Male</ion-select-option>\n                  <ion-select-option value=\"Female\">Female</ion-select-option>\n                  <ion-select-option value=\"Other\">Other</ion-select-option>\n                </ion-select>\n            </div>\n        </div>\n    </div>\n    <ion-button (click)=\"saveProfile()\" mode=\"md\" style=\"margin-left: 20px;\">Save This Information</ion-button>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");
    /* harmony import */


    var _guard_back_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guard/back.guard */
    "./src/app/guard/back.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      },
      canActivate: [_guard_back_guard__WEBPACK_IMPORTED_MODULE_4__["BackGuard"]]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'otp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-otp-otp-module */
        "pages-otp-otp-module").then(__webpack_require__.bind(null,
        /*! ./pages/otp/otp.module */
        "./src/app/pages/otp/otp.module.ts")).then(function (m) {
          return m.OtpPageModule;
        });
      }
    }, {
      path: 'manage-address',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-manage-address-manage-address-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-manage-address-manage-address-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/manage-address/manage-address.module */
        "./src/app/pages/manage-address/manage-address.module.ts")).then(function (m) {
          return m.ManageAddressPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-profile-profile-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("default~pages-profile-profile-module~pages-reviews-reviews-module"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-edit-profile-edit-profile-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/edit-profile/edit-profile.module */
        "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      }
    }, {
      path: 'summary',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-summary-summary-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-summary-summary-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/summary/summary.module */
        "./src/app/pages/summary/summary.module.ts")).then(function (m) {
          return m.SummaryPageModule;
        });
      }
    }, {
      path: 'privacy',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-privacy-privacy-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-privacy-privacy-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/privacy/privacy.module */
        "./src/app/pages/privacy/privacy.module.ts")).then(function (m) {
          return m.PrivacyPageModule;
        });
      }
    }, {
      path: 'refund',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-refund-refund-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-refund-refund-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/refund/refund.module */
        "./src/app/pages/refund/refund.module.ts")).then(function (m) {
          return m.RefundPageModule;
        });
      }
    }, {
      path: 'terms',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-terms-terms-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-terms-terms-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/terms/terms.module */
        "./src/app/pages/terms/terms.module.ts")).then(function (m) {
          return m.TermsPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-about-about-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-about-about-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'my-transaction',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-my-transaction-my-transaction-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-my-transaction-my-transaction-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/my-transaction/my-transaction.module */
        "./src/app/pages/my-transaction/my-transaction.module.ts")).then(function (m) {
          return m.MyTransactionPageModule;
        });
      }
    }, {
      path: 'contact',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-contact-contact-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-contact-contact-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/contact/contact.module */
        "./src/app/pages/contact/contact.module.ts")).then(function (m) {
          return m.ContactPageModule;
        });
      }
    }, {
      path: 'payment',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-payment-payment-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-payment-payment-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/payment/payment.module */
        "./src/app/pages/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: 'reviews',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-reviews-reviews-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("default~pages-profile-profile-module~pages-reviews-reviews-module"), __webpack_require__.e("pages-reviews-reviews-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/reviews/reviews.module */
        "./src/app/pages/reviews/reviews.module.ts")).then(function (m) {
          return m.ReviewsPageModule;
        });
      }
    }, {
      path: 'support',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-support-support-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-support-support-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/support/support.module */
        "./src/app/pages/support/support.module.ts")).then(function (m) {
          return m.SupportPageModule;
        });
      }
    }, {
      path: 'offers',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-offers-offers-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-offers-offers-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/offers/offers.module */
        "./src/app/pages/offers/offers.module.ts")).then(function (m) {
          return m.OffersPageModule;
        });
      }
    }, {
      path: 'support-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-support-list-support-list-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-support-list-support-list-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/support-list/support-list.module */
        "./src/app/pages/support-list/support-list.module.ts")).then(function (m) {
          return m.SupportListPageModule;
        });
      }
    }, {
      path: 'notifications',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-notifications-notifications-module */
        "pages-notifications-notifications-module").then(__webpack_require__.bind(null,
        /*! ./pages/notifications/notifications.module */
        "./src/app/pages/notifications/notifications.module.ts")).then(function (m) {
          return m.NotificationsPageModule;
        });
      }
    }, {
      path: 'contactus',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-contactus-contactus-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-contactus-contactus-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/contactus/contactus.module */
        "./src/app/pages/contactus/contactus.module.ts")).then(function (m) {
          return m.ContactUsPageModule;
        });
      }
    }, {
      path: 'corporate',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-corporate-corporate-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-corporate-corporate-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/corporate/corporate.module */
        "./src/app/pages/corporate/corporate.module.ts")).then(function (m) {
          return m.CorporatePageModule;
        });
      }
    }, {
      path: 'payment-security',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-payment-security-payment-security-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-payment-security-payment-security-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/payment-security/payment-security.module */
        "./src/app/pages/payment-security/payment-security.module.ts")).then(function (m) {
          return m.PaymentSecurityPageModule;
        });
      }
    }, {
      path: 'add-prescription',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-add-prescription-add-prescription-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-add-prescription-add-prescription-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/add-prescription/add-prescription.module */
        "./src/app/pages/add-prescription/add-prescription.module.ts")).then(function (m) {
          return m.AddPrescriptionPageModule;
        });
      }
    }, {
      path: 'members',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-members-members-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-members-members-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/members/members.module */
        "./src/app/pages/members/members.module.ts")).then(function (m) {
          return m.MembersPageModule;
        });
      }
    }, {
      path: 'bookings',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-bookings-bookings-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-bookings-bookings-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/bookings/bookings.module */
        "./src/app/pages/bookings/bookings.module.ts")).then(function (m) {
          return m.BookingsPageModule;
        });
      }
    }, {
      path: 'booking-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-booking-detail-booking-detail-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-booking-detail-booking-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/booking-detail/booking-detail.module */
        "./src/app/pages/booking-detail/booking-detail.module.ts")).then(function (m) {
          return m.BookingDetailPageModule;
        });
      }
    }, {
      path: 'health-packages',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-health-packages-health-packages-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-health-packages-health-packages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/health-packages/health-packages.module */
        "./src/app/pages/health-packages/health-packages.module.ts")).then(function (m) {
          return m.HealthPackagesPageModule;
        });
      }
    }, {
      path: 'faq',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-faq-faq-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-faq-faq-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/faq/faq.module */
        "./src/app/pages/faq/faq.module.ts")).then(function (m) {
          return m.FaqPageModule;
        });
      }
    }, {
      path: 'risk/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-risk-risk-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-risk-risk-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/risk/risk.module */
        "./src/app/pages/risk/risk.module.ts")).then(function (m) {
          return m.RiskPageModule;
        });
      }
    }, {
      path: 'habit/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-habit-habit-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-habit-habit-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/habit/habit.module */
        "./src/app/pages/habit/habit.module.ts")).then(function (m) {
          return m.HabitPageModule;
        });
      }
    }, {
      path: 'risks',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-risks-risks-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-risks-risks-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/risks/risks.module */
        "./src/app/pages/risks/risks.module.ts")).then(function (m) {
          return m.RisksPageModule;
        });
      }
    }, {
      path: 'health-habits',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-health-habits-health-habits-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-health-habits-health-habits-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/health-habits/health-habits.module */
        "./src/app/pages/health-habits/health-habits.module.ts")).then(function (m) {
          return m.HealthHabitsPageModule;
        });
      }
    }, {
      path: 'search-labs',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-search-labs-search-labs-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-search-labs-search-labs-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/search-labs/search-labs.module */
        "./src/app/pages/search-labs/search-labs.module.ts")).then(function (m) {
          return m.SearchLabsPageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cart-cart-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-cart-cart-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'tests',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-tests-tests-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-tests-tests-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/tests/tests.module */
        "./src/app/pages/tests/tests.module.ts")).then(function (m) {
          return m.TestsPageModule;
        });
      }
    }, {
      path: 'packages',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-packages-packages-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-packages-packages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/packages/packages.module */
        "./src/app/pages/packages/packages.module.ts")).then(function (m) {
          return m.PackagesPageModule;
        });
      }
    }, {
      path: 'test/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-test-test-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-test-test-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/test/test.module */
        "./src/app/pages/test/test.module.ts")).then(function (m) {
          return m.TestPageModule;
        });
      }
    }, {
      path: 'checkout',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-checkout-checkout-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-checkout-checkout-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/checkout/checkout.module */
        "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutPageModule;
        });
      }
    }, {
      path: 'rating',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-rating-rating-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-rating-rating-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/rating/rating.module */
        "./src/app/pages/rating/rating.module.ts")).then(function (m) {
          return m.RatingPageModule;
        });
      }
    }, {
      path: 'cancel',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cancel-cancel-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-cancel-cancel-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cancel/cancel.module */
        "./src/app/pages/cancel/cancel.module.ts")).then(function (m) {
          return m.CancelPageModule;
        });
      }
    }, {
      path: 'coupons',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-coupons-coupons-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("common"), __webpack_require__.e("pages-coupons-coupons-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/coupons/coupons.module */
        "./src/app/pages/coupons/coupons.module.ts")).then(function (m) {
          return m.CouponsPageModule;
        });
      }
    }, {
      path: 'wallet',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-wallet-wallet-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-wallet-wallet-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/wallet/wallet.module */
        "./src/app/pages/wallet/wallet.module.ts")).then(function (m) {
          return m.WalletPageModule;
        });
      }
    }, {
      path: 'my-wallet',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-my-wallet-my-wallet-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-my-wallet-my-wallet-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/my-wallet/my-wallet.module */
        "./src/app/pages/my-wallet/my-wallet.module.ts")).then(function (m) {
          return m.MyWalletPageModule;
        });
      }
    }, {
      path: 'team/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-team-team-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-team-team-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/team/team.module */
        "./src/app/pages/team/team.module.ts")).then(function (m) {
          return m.TeamPageModule;
        });
      }
    }, {
      path: 'cardiology',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cardiology-cardiology-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-cardiology-cardiology-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cardiology/cardiology.module */
        "./src/app/pages/cardiology/cardiology.module.ts")).then(function (m) {
          return m.CardiologyPageModule;
        });
      }
    }, {
      path: 'radiology',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-radiology-radiology-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-radiology-radiology-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/radiology/radiology.module */
        "./src/app/pages/radiology/radiology.module.ts")).then(function (m) {
          return m.RadiologyPageModule;
        });
      }
    }, {
      path: 'diagnostic-lab/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-diagnostic-lab-diagnostic-lab-module */
        [__webpack_require__.e("default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"), __webpack_require__.e("pages-diagnostic-lab-diagnostic-lab-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/diagnostic-lab/diagnostic-lab.module */
        "./src/app/pages/diagnostic-lab/diagnostic-lab.module.ts")).then(function (m) {
          return m.DiagnosticLabPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#top-list {\n  background: -webkit-gradient(linear, left top, left bottom, from(#439213), to(#89c32f));\n  background: linear-gradient(to bottom, #439213, #89c32f);\n}\n#top-list .item {\n  --padding-left: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  color: #767676;\n}\n.logo_img {\n  width: 30%;\n  height: 30%;\n  margin: auto 0% auto 5%;\n}\nh1 {\n  font-size: 18px;\n  margin: auto;\n  font-weight: bold;\n  color: #fff;\n}\n.text {\n  margin: auto;\n  color: white;\n  font-size: 16px;\n  margin-left: -24px;\n  font-weight: bold;\n}\n.side_data {\n  text-align: center;\n}\nion-item {\n  --background: transparent;\n  /*--border-bottom: 1px solid #ecd4d4;*/\n  padding-left: 8px;\n  /*--inner-border-bottom: 1px solid #767676;*/\n}\n#mid-list {\n  background: #fff;\n  padding: 0px;\n}\n.last_div {\n  background: #fff;\n}\n.links_text {\n  font-weight: bold;\n  font-size: 12px;\n  padding: 10px 0px 10px 24px;\n  color: #000;\n  background: #e2d67a;\n  margin: 0px;\n}\n.title {\n  /*font-family: sans-serif;*/\n  font-weight: bold;\n  color: #333333;\n  font-size: 14px;\n  margin-top: 8px;\n}\nion-icon {\n  -webkit-margin-end: 16px;\n          margin-inline-end: 16px;\n}\n.grid {\n  padding: 0px;\n  background: #fff;\n}\n.user_name {\n  color: #000;\n  font-size: 22px;\n  text-align: center;\n  font-family: sans-serif;\n}\n.col-item {\n  padding-left: 0px;\n  --inner-padding-start: 0px;\n  --padding-inline-start: 0px;\n  --border-color: #fff;\n}\nion-col {\n  padding: 0px;\n  border: 1px solid #f7f7f7;\n}\n.col_name {\n  margin: 0px 5px 10px 5px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d8d8d;\n}\n.footer_icon {\n  margin: 20px auto;\n  font-size: xx-large;\n}\n.submenuitem p {\n  padding-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHVGQUFBO0VBQUEsd0RBQUE7QUNDRDtBREFDO0VBQ0csbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRUo7QURBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDR0o7QUREQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJSjtBREZBO0VBQ0ksa0JBQUE7QUNLSjtBREhBO0VBQ0MseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0csNENBQUE7QUNNSjtBREpBO0VBQ0csZ0JBQUE7RUFDQSxZQUFBO0FDT0g7QURMQTtFQUNJLGdCQUFBO0FDUUo7QUROQTtFQUNDLGlCQUFBO0VBQ0csZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1NKO0FEUEE7RUFDQywyQkFBQTtFQUNHLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVUo7QURSQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNXSjtBRFRBO0VBQ0MsWUFBQTtFQUNHLGdCQUFBO0FDWUo7QURWQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDSCx1QkFBQTtBQ2FEO0FEWEE7RUFDQyxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDRyxvQkFBQTtBQ2NKO0FEYkE7RUFDQyxZQUFBO0VBQ0EseUJBQUE7QUNnQkQ7QURkQTtFQUNDLHdCQUFBO0VBQ0csa0JBQUE7RUFDSCxlQUFBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDaUJKO0FEZkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDa0JKO0FEaEJBO0VBQ0Usa0JBQUE7QUNtQkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9wLWxpc3Qge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0MzkyMTMsICM4OWMzMmYpO1xyXG4gLml0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjojNzY3Njc2O1xyXG4gfVxyXG59XHJcbi5sb2dvX2ltZyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gMCUgYXV0byA1JTtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zaWRlX2RhdGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LyotLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNkNGQ0OyovXHJcblx0cGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAvKi0taW5uZXItYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Njc2NzY7Ki9cclxufVxyXG4jbWlkLWxpc3Qge1xyXG5cdCAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHQgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubGFzdF9kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4ubGlua3NfdGV4dCB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDI0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6I2UyZDY3YTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi50aXRsZSB7XHJcblx0Lypmb250LWZhbWlseTogc2Fucy1zZXJpZjsqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTZweDtcclxufVxyXG4uZ3JpZCB7XHJcblx0cGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4udXNlcl9uYW1lIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7fVxyXG5cclxuLmNvbC1pdGVtIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHQtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjt9XHJcbmlvbi1jb2x7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XHJcbn1cclxuLmNvbF9uYW1lIHtcclxuXHRtYXJnaW46IDBweCA1cHggMTBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhkOGQ4ZFxyXG59XHJcbi5mb290ZXJfaWNvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuLnN1Ym1lbnVpdGVtIHAge1xyXG4gIHBhZGRpbmctbGVmdDogODBweDtcclxufSIsIiN0b3AtbGlzdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0MzkyMTMsICM4OWMzMmYpO1xufVxuI3RvcC1saXN0IC5pdGVtIHtcbiAgLS1wYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzc2NzY3Njtcbn1cblxuLmxvZ29faW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIG1hcmdpbjogYXV0byAwJSBhdXRvIDUlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGVfZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKi0tYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2Q0ZDQ7Ki9cbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIC8qLS1pbm5lci1ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc2NzY3NjsqL1xufVxuXG4jbWlkLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sYXN0X2RpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5saW5rc190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2UyZDY3YTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi50aXRsZSB7XG4gIC8qZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ki9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTZweDtcbn1cblxuLmdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi51c2VyX25hbWUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uY29sLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG59XG5cbi5jb2xfbmFtZSB7XG4gIG1hcmdpbjogMHB4IDVweCAxMHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzhkOGQ4ZDtcbn1cblxuLmZvb3Rlcl9pY29uIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5zdWJtZW51aXRlbSBwIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/screensize.service */
    "./src/app/services/screensize.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, geolocation, splashScreen, statusBar, router, api, oneSignal, translate, _location, util, alertController, screensizeService, menu) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.geolocation = geolocation;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.api = api;
        this.oneSignal = oneSignal;
        this.translate = translate;
        this._location = _location;
        this.util = util;
        this.alertController = alertController;
        this.screensizeService = screensizeService;
        this.menu = menu;
        this.currentPageTitle = 'Dashboard';
        this.logedIn = false;
        this.isHabit = false;
        this.isRisk = false;
        this.habbits = [];
        this.risks = [];
        this.menu.enable(false);

        if (sessionStorage.getItem('loginStatus') == "true") {
          this.api.isSignedIn = true;
          this.logedIn = this.api.isSignedIn;
        } else {
          // this.router.navigate(['/home']);  
          this.api.isSignedIn = false;
          this.logedIn = this.api.isSignedIn;
        }

        this.util.subscribeLoggedInStatus().subscribe(function (data) {
          if (data) {
            console.log(data);
            _this.logedIn = true;
          }
        });
        this.api.getHealthHabbits().then(function (data) {
          _this.habbits = data;
          console.log(_this.habbits);
        }).catch(function (error) {
          console.log(error);
        });
        this.api.getHealthRisk().then(function (data) {
          _this.risks = data;
          console.log(_this.risks);
        }).catch(function (error) {
          console.log(error);
        });
        this.initializeApp();
        this.screensizeService.isDesktopView().subscribe(function (isDesktop) {
          if (_this.isDesktop && !isDesktop) {
            // Reload because our routing is out of place
            console.log(_this.isDesktop);
            window.location.reload();
          }

          _this.isDesktop = isDesktop;

          _this.util.publishBadge(_this.isDesktop);

          console.log(_this.isDesktop);
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            // window.console.warn = function(){};
            // window.console.error = function(){};
            // window.console.log = function(){};
            // window.console.exception = function(){}; 
            _this2.splashScreen.hide();

            _this2.screensizeService.onResize(_this2.platform.width());
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.screensizeService.onResize(event.target.innerWidth);
        }
      }, {
        key: "openHabits",
        value: function openHabits() {
          this.isHabit = !this.isHabit;
        }
      }, {
        key: "openRisk",
        value: function openRisk() {
          this.isRisk = !this.isRisk;
        }
      }, {
        key: "viewRisk",
        value: function viewRisk(data) {
          localStorage.setItem('riskid', data.id);
          this.router.navigate(['risk', data.name]);
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "corporate",
        value: function corporate() {
          this.router.navigate(['corporate']);
        }
      }, {
        key: "faq",
        value: function faq() {
          this.router.navigate(['/faq']);
        }
      }, {
        key: "viewHabit",
        value: function viewHabit(data) {
          localStorage.setItem('habitid', data.id);
          this.router.navigate(['habit', data.name]);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_11__["ScreensizeService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_11__["ScreensizeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: customTranslateLoader, LanguageLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customTranslateLoader", function () {
      return customTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
      return LanguageLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/ngx/index.js");
    /* harmony import */


    var src_app_pages_add_address_add_address_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! src/app/pages/add-address/add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__);
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/app-rate/ngx */
    "./node_modules/@ionic-native/app-rate/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ionic-native/document-viewer/ngx */
    "./node_modules/@ionic-native/document-viewer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ionic5-star-rating */
    "./node_modules/ionic5-star-rating/fesm2015/ionic5-star-rating.js");
    /* harmony import */


    var angular_code_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! angular-code-input */
    "./node_modules/angular-code-input/fesm2015/angular-code-input.js");
    /* harmony import */


    var _ionic_native_firebase_config_ngx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @ionic-native/firebase-config/ngx */
    "./node_modules/@ionic-native/firebase-config/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @ionic-native/open-native-settings/ngx */
    "./node_modules/@ionic-native/open-native-settings/ngx/index.js");
    /* harmony import */


    var src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! src/app/components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! src/app/components/update/update.component */
    "./src/app/components/update/update.component.ts");
    /* harmony import */


    var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! src/app/components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_46___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_46__);
    /* harmony import */


    var _pages_insufficient_insufficient_page__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./pages/insufficient/insufficient.page */
    "./src/app/pages/insufficient/insufficient.page.ts");
    /* harmony import */


    var _pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./pages/profile-modal/profile-modal.page */
    "./src/app/pages/profile-modal/profile-modal.page.ts");

    function customTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_45__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    function LanguageLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_45__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_43__["MenuComponent"], src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_41__["SigninComponent"], src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_42__["UpdateComponent"], _pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_48__["ProfileModalPage"], src_app_pages_add_address_add_address_page__WEBPACK_IMPORTED_MODULE_25__["AddAddressPage"], _pages_insufficient_insufficient_page__WEBPACK_IMPORTED_MODULE_47__["InsufficientPage"]],
      entryComponents: [src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_42__["UpdateComponent"], src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_43__["MenuComponent"], src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_41__["SigninComponent"], _pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_48__["ProfileModalPage"], src_app_pages_add_address_add_address_page__WEBPACK_IMPORTED_MODULE_25__["AddAddressPage"], _pages_insufficient_insufficient_page__WEBPACK_IMPORTED_MODULE_47__["InsufficientPage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_46__["OwlModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ionic5_star_rating__WEBPACK_IMPORTED_MODULE_36__["StarRatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular_code_input__WEBPACK_IMPORTED_MODULE_37__["CodeInputModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase), angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_44__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_44__["TranslateLoader"],
          useFactory: customTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_19__["Geolocation"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__["Camera"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_27__["SocialSharing"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_29__["CallNumber"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_28__["AppRate"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_31__["EmailComposer"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_15__["FirebaseAuthentication"], _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_24__["DatePicker"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_30__["Device"], _angular_http__WEBPACK_IMPORTED_MODULE_22__["Http"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_32__["DocumentViewer"], _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_40__["OpenNativeSettings"], _ionic_native_firebase_config_ngx__WEBPACK_IMPORTED_MODULE_38__["FirebaseConfig"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_34__["FileOpener"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_39__["AppVersion"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_33__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_35__["FileTransfer"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/menu/menu.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-div {\n  border: 1px solid #e6e6e6;\n  margin: 8px 16px;\n}\n\nion-button {\n  margin: 16px;\n}\n\n.header {\n  float: right;\n  font-size: 22px;\n  position: relative;\n  top: -3px;\n  color: var(--ion-color-secondary);\n  font-weight: bolder;\n}\n\nion-select {\n  padding-left: 8px;\n}\n\nion-select::part(icon) {\n  color: #000 !important;\n  padding-right: 6px;\n}\n\nion-select::part(text) {\n  color: #000 !important;\n  --placeholder-opacity: 0.8;\n}\n\n.error {\n  color: red;\n  font-size: 10px;\n  padding-left: 16px;\n}\n\n.info {\n  color: #00793a;\n  font-size: 10px;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyx5QkFBQTtFQUNBLGdCQUFBO0FDQ0g7O0FEQ0E7RUFDRyxZQUFBO0FDRUg7O0FEQUE7RUFDQyxZQUFBO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNDLGlCQUFBO0FDSUQ7O0FERkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETkM7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1kaXZ7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgIG1hcmdpbjogOHB4IDE2cHg7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5pb24tc2VsZWN0e1xyXG5cdHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuODtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59LmluZm8ge1xyXG4gICAgY29sb3I6ICMwMDc5M2E7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn0iLCIuaW5wdXQtZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgbWFyZ2luOiA4cHggMTZweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuLmhlYWRlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuODtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6ICMwMDc5M2E7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(formBuilder, api, util, modalController, alertCtrl) {
        _classCallCheck(this, MenuComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.cities = [];
        console.log(localStorage.getItem('current_state'));
        this.supportForm = this.formBuilder.group({
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*  let stateid = localStorage.getItem('state_id')
           this.api.getCitiesByStateId(stateid).then(data => {
             console.log(data);
           this.cities = data;
           }).catch(error => {
             console.log(error);
           }); */
        }
      }, {
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this3 = this;

          this.util.show('Please wait....');
          var concatphone = document.getElementById("phoneNumber").value;
          this.phone = concatphone;
          this.api.sendOtp(this.phone).subscribe(function (data) {
            console.log(data);

            _this3.util.hide();

            _this3.showAlert();

            _this3.util.showToast('OTP has been sent successfully', 'primary', 'top');
          }, function (error) {
            _this3.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "showAlert",
        value: function showAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Enter Your OTP',
                      backdropDismiss: true,
                      mode: 'md',
                      inputs: [{
                        name: 'otp',
                        placeholder: 'Please enter your otp here',
                        type: 'number'
                      }],
                      buttons: [{
                        text: 'Verify',
                        handler: function handler(data) {
                          console.log(data.otp);

                          _this4.verifyOtp(data.otp);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp(otp) {
          var _this5 = this;

          var data = {
            otp: otp,
            mobile: this.phone
          };
          console.log(data);
          this.api.verifyOtp(data).subscribe(function (data) {
            console.log(data);
            _this5.success = data;

            if (_this5.success.status == "STATUS_OK") {
              _this5.submit();

              _this5.util.showToast(_this5.success.Message, 'primary', 'top');
            } else {
              _this5.util.hide();

              _this5.util.showToast(_this5.success.Message, 'danger', 'bottom');
            }
          }, function (error) {
            _this5.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this6 = this;

          this.util.show('Please wait....');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_6__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            createdAt: created,
            id: id.toString(),
            phone: this.phone,
            name: this.name,
            city: this.city,
            remark: '',
            status: 0
          };
          this.api.addQuery(id.toString(), param).then(function (userData) {
            _this6.util.hide();

            _this6.close();

            _this6.sendSms();

            _this6.util.showToast('We have recived your call request. We will repsond within 2 hour', 'primary', 'top');
          }).catch(function (err) {
            if (err) {
              _this6.util.hide();

              console.log(err);

              _this6.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "sendSms",
        value: function sendSms() {
          var url = 'https://demo.orgmachine.com/way2lab_sms/callback.php?mobile=' + this.phone + '&name=' + this.name;
          this.api.sendSms(url).subscribe(function (data) {}, function (error) {
            console.log('err', error);
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/components/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/components/signin/signin.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/signin/signin.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSigninSigninComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 64%;\n}\n\nimg {\n  margin: auto;\n}\n\n.left-head {\n  text-align: center;\n}\n\n.left-head h3 {\n  font-weight: bold;\n  font-size: 24px;\n  margin-bottom: 0px;\n}\n\n.left-head p {\n  font-size: 12px;\n  color: grey;\n  font-weight: bold;\n  width: 70%;\n  margin: auto;\n}\n\n.mblTag {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.btn_class {\n  color: white;\n  text-transform: none;\n  --border-radius: 35px;\n  margin-top: 15px;\n}\n\nion-item {\n  border: 1px solid #e3e3e3;\n  /*--padding-start: 5px !important;*/\n  margin: 16% 0px 0px;\n  border-radius: 10px;\n}\n\n.input-icon {\n  margin: 0px 10px 0px 0px;\n  /*border-right: 1px solid #e3e3e3;*/\n  padding: 14px 5px 8px 0px;\n}\n\n.error {\n  color: red;\n  font-size: 10px;\n}\n\n.welcome {\n  text-align: center;\n}\n\n.welcome p {\n  font-size: 14px;\n  margin-top: 0px;\n  color: #949393;\n}\n\n.welcome .number {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 5px 0px 24px;\n}\n\n.welcome code-input {\n  --item-spacing: 10px;\n  --item-height: 3em;\n}\n\n.welcome .btn_class {\n  color: var(--ion-color-primary);\n  --background: #fff;\n}\n\n.welcome .otp-enter {\n  width: 75%;\n  margin: auto;\n}\n\n.welcome .footer p {\n  text-align: center;\n  font-weight: bold;\n  margin: 16px 0px;\n}\n\n.welcome .send {\n  margin: 16px 0px;\n}\n\n.welcome .send p {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.otp-enter input {\n  --padding:6px 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWduaW5cXHNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0UsV0FBQTtBQ0NOOztBRENJO0VBQ0ksWUFBQTtBQ0VSOztBREFJO0VBQ0ksa0JBQUE7QUNHUjs7QURGUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSVo7O0FERlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNJWjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhJO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURKSTtFQUNJLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBQ09SOztBRExJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNRUjs7QUROQTtFQUNNLGtCQUFBO0FDU047O0FEUkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNVTjs7QURSSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVU47O0FEUkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDVU47O0FEUkk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FDVU47O0FEUkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ1VSOztBRFBRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDU1Y7O0FETkk7RUFDUSxnQkFBQTtBQ1FaOztBRFBRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDU1o7O0FESkM7RUFBaUIsNkJBQUE7QUNRbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgIGhlaWdodDogNjQlO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAubGVmdC1oZWFke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYmxUYWd7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bl9jbGFzc3tcclxuICAgICAgICBjb2xvcjogd2hpdGUgO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcclxuICAgICAgICAvKi0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7Ki9cclxuICAgICAgICBtYXJnaW46IDE2JSAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtaWNvbntcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgICAgLypib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlM2UzOyovXHJcbiAgICAgICAgcGFkZGluZzoxNHB4IDVweCA4cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmVycm9yIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4ud2VsY29tZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgY29sb3I6ICM5NDkzOTM7XHJcbiAgICB9XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luOiA1cHggMHB4IDI0cHg7XHJcbiAgICB9XHJcbiAgICBjb2RlLWlucHV0IHtcclxuICAgICAgLS1pdGVtLXNwYWNpbmc6IDEwcHg7XHJcbiAgICAgIC0taXRlbS1oZWlnaHQ6IDNlbTtcclxuICAgIH1cclxuICAgIC5idG5fY2xhc3Mge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAub3RwLWVudGVye1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbjogMTZweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cdFxyXG5cdC5vdHAtZW50ZXIgaW5wdXR7LS1wYWRkaW5nOjZweCAxMnB4ICFpbXBvcnRhbnQ7fVxyXG4iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA2NCU7XG59XG5cbmltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxlZnQtaGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZWZ0LWhlYWQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubGVmdC1oZWFkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWJsVGFnIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMzVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICAvKi0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7Ki9cbiAgbWFyZ2luOiAxNiUgMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmlucHV0LWljb24ge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gIC8qYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZTNlMzsqL1xuICBwYWRkaW5nOiAxNHB4IDVweCA4cHggMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndlbGNvbWUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzk0OTM5Mztcbn1cbi53ZWxjb21lIC5udW1iZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDVweCAwcHggMjRweDtcbn1cbi53ZWxjb21lIGNvZGUtaW5wdXQge1xuICAtLWl0ZW0tc3BhY2luZzogMTBweDtcbiAgLS1pdGVtLWhlaWdodDogM2VtO1xufVxuLndlbGNvbWUgLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbi53ZWxjb21lIC5vdHAtZW50ZXIge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG59XG4ud2VsY29tZSAuZm9vdGVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuLndlbGNvbWUgLnNlbmQge1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuLndlbGNvbWUgLnNlbmQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vdHAtZW50ZXIgaW5wdXQge1xuICAtLXBhZGRpbmc6NnB4IDEycHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/signin/signin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signin/signin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppComponentsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SigninComponent =
    /*#__PURE__*/
    function () {
      function SigninComponent(router, platform, device, api, util, navCtrl, translate, oneSignal, firebaseAuthentication, modalController, formBuilder, menu) {
        var _this7 = this;

        _classCallCheck(this, SigninComponent);

        this.router = router;
        this.platform = platform;
        this.device = device;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oneSignal = oneSignal;
        this.firebaseAuthentication = firebaseAuthentication;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.login = {
          mobile: ''
        };
        this.submitted = false;
        this.isLogin = false;
        this.splash = [];
        this.otpSent = false;
        this.phoneNumber = "";
        this.stepOne = false;
        this.timer = 60;
        this.getSreens();
        this.loginForm = this.formBuilder.group({
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(10)]]
        });

        if (sessionStorage.getItem('loginStatus') == "true") {
          this.menu.enable(false);
          this.router.navigate(['/tabs/tab1']);
          this.api.isSignedIn = true;
        } else if (sessionStorage.getItem('loginStatus') == "false") {
          this.api.isSignedIn = false;
        }

        this.oneSignal.getIds().then(function (data) {
          console.log('iddddd==========', data);
          localStorage.setItem('fcm', data.userId);
        });
        platform.ready().then(function () {
          _this7.deviceplt = _this7.device.platform;

          if (_this7.platform.is('android') || _this7.platform.is('ios')) {
            _this7.uuid = _this7.device.uuid;
          } else {
            console.log('Your device id is null', _this7.uuid = 'browser007bond');
          }
        });
        platform.ready().then(function () {
          if (_this7.platform.is('android')) {
            _this7.isDevice = 'android';
            _this7.uuid = _this7.device.uuid;
          } else if (_this7.platform.is('ios')) {
            _this7.isDevice = 'ios';
            _this7.uuid = _this7.device.uuid;
          } else {
            _this7.isDevice = 'browser';
          }
        });
      }

      _createClass(SigninComponent, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menu.enable(false);
        }
      }, {
        key: "getSreens",
        value: function getSreens() {
          var _this8 = this;

          this.api.getOnboarding().then(function (data) {
            _this8.splash = data;
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this8.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this9 = this;

          this.util.show('Please wait....');
          this.submitted = true;
          this.isLogin = true;
          var concatphone = document.getElementById("phoneNumber").value;
          this.user_phone = concatphone;
          console.log(concatphone);
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            uid: id.toString(),
            createdOn: new Date(),
            phone: concatphone,
            deviceId: this.uuid,
            name: '',
            imagePath: '',
            type: 'user',
            status: 'active',
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
          };
          this.api.getUser(concatphone).then(function (data) {
            console.log(data);

            if (data.length == 0) {
              console.log('user not exist');

              _this9.api.selfRegistration(id.toString(), param).then(function (userData) {
                console.log(_this9.user_phone);

                _this9.api.sendOtp(_this9.user_phone).subscribe(function (data) {
                  console.log(data);
                  _this9.isLogin = false;

                  _this9.util.hide();

                  _this9.util.showToast('OTP has been sent successfully', 'primary', 'bottom');

                  _this9.stepOne = true;

                  _this9.startTimer();
                }, function (error) {
                  _this9.util.hide();

                  console.log('err', error);
                });
              }).catch(function (err) {
                if (err) {
                  _this9.util.hide();

                  console.log(err);

                  _this9.util.showToast("".concat(err), 'danger', 'bottom');
                }
              }).then(function (el) {
                return _this9.isLogin = false;
              });
            } else {
              console.log('user exist');
              _this9.isLogin = false;

              _this9.api.sendOtp(concatphone).subscribe(function (data) {
                console.log(data);
                _this9.otpSent = true;
                _this9.phoneNumber = concatphone;

                _this9.util.hide();

                _this9.util.showToast('OTP has been sent successfully', 'primary', 'bottom');

                _this9.stepOne = true;

                _this9.startTimer();
              }, function (error) {
                _this9.util.hide();

                console.log('err', error);
              });
            }
          }, function (error) {
            _this9.util.hide();

            console.log(error);
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.stepOne = false;
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          this.intervalVar = setInterval(function () {
            if (this.timer > 0) {
              this.timer--;
            }
          }.bind(this), 1000);
        } // this called every time when user changed the code

      }, {
        key: "onCodeChanged",
        value: function onCodeChanged(code) {
          console.log(code);
        } // this called only if user entered full code

      }, {
        key: "onCodeCompleted",
        value: function onCodeCompleted(code) {
          console.log(code);
          this.otp = code;
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp() {
          var _this10 = this;

          this.util.show('Please wait....');
          this.isLogin = true;
          var data = {
            otp: this.otp,
            mobile: this.user_phone
          };
          console.log(data);
          this.api.verifyOtp(data).subscribe(function (data) {
            console.log(data);
            _this10.success = data;

            if (_this10.success.status == "STATUS_OK") {
              _this10.api.getUser(_this10.user_phone).then(function (data) {
                console.log(data);

                if (data && data.length) {
                  _this10.userData = data[0];
                  console.log(_this10.userData.uid);
                  sessionStorage.setItem('uid', _this10.userData.uid);
                  localStorage.setItem('help', _this10.userData.uid);

                  _this10.updateUserDevice();

                  localStorage.setItem('mobile', _this10.userData.phone);
                  sessionStorage.setItem('loginStatus', "true");
                  _this10.isLogin = false;
                  _this10.api.isSignedIn = true;
                  localStorage.setItem('selectedLanguage', 'en');

                  _this10.util.publishLoggedIn('LoggedIn');

                  _this10.util.publishLoggedInStatus('true');

                  _this10.menu.enable(false);

                  _this10.util.hide();

                  _this10.util.publishProfile(true);

                  _this10.util.showToast(_this10.success.Message, 'primary', 'bottom');

                  _this10.close('true'); // localStorage.setItem("previous-request", "true");
                  // localStorage.setItem("previous-request-page", "/checkout");
                  // this.router.navigate(['/home']);

                } else {
                  _this10.util.hide();

                  _this10.util.showToast('Something went wrong. Please try again later!', 'danger', 'bottom');
                }
              }, function (error) {
                _this10.util.hide();

                console.log(error);
              });
            } else {
              _this10.util.hide();

              _this10.util.showToast(_this10.success.Message, 'danger', 'bottom');
            }
          }, function (error) {
            _this10.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "close",
        value: function close(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.dismiss(data);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateUserDevice",
        value: function updateUserDevice() {
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var modifiedOn = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            modifiedOn: modifiedOn,
            isDevice: this.isDevice,
            deviceId: this.uuid,
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
          };
          this.api.updateProfile(uid, param).then(function (data) {
            console.log(data);
          }).catch(function (err) {
            if (err) {
              console.log(err); // this.util.showToast(`${err}`, 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "resend",
        value: function resend() {
          var _this11 = this;

          this.util.show('Please wait....');
          this.timer = 60;
          this.startTimer();
          this.api.sendOtp(this.user_phone).subscribe(function (data) {
            _this11.util.hide();

            _this11.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
          }, function (error) {
            _this11.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigate(['/home']);
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
      }, {
        type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSlides"])], SigninComponent.prototype, "slides", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signin/signin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin.component.scss */
      "./src/app/components/signin/signin.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"]])], SigninComponent);
    /***/
  },

  /***/
  "./src/app/components/update/update.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/update/update.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpdateUpdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  /*.sc-ion-input-md-h {\n    --padding-top: 4px;\n    --padding-bottom: 20px;\n  }*/\n}\ndiv ion-label {\n  padding: 16px;\n  font-weight: bold;\n  margin-top: 3%;\n}\ndiv ion-item {\n  --ion-background-color:#fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  margin-bottom: 3%;\n  --padding-start: 5px !important;\n}\ndiv .mblTag {\n  margin-bottom: 0px;\n  font-size: 12px;\n}\ndiv .emailTag {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 12px;\n}\ndiv .sel {\n  max-width: 100%;\n  width: 100%;\n  font-size: 14px !important;\n  --padding-top: 5px;\n  --padding-start: 0px;\n}\ndiv .error {\n  color: red;\n  font-size: 10px;\n  padding-left: 2px;\n}\ndiv .list {\n  padding: 16px;\n}\nion-button {\n  margin: 15px auto;\n  width: 50%;\n}\nion-select::part(icon) {\n  color: #000 !important;\n}\nion-select::part(text) {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1cGRhdGVcXHVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBc0JDOzs7SUFBQTtBQ2pCRDtBREpDO0VBQ0MsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ01GO0FESkM7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDTUg7QURKQztFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ01IO0FESkM7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUg7QURBQztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRUg7QURDQztFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDTDtBRENDO0VBQ0UsYUFBQTtBQ0NIO0FER0M7RUFDQyxpQkFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0ksc0JBQUE7QUNDTDtBRENDO0VBQ0ksc0JBQUE7QUNFTCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcblx0aW9uLWxhYmVse1xyXG5cdFx0cGFkZGluZzogMTZweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0bWFyZ2luLXRvcDogMyU7XHJcblx0fVxyXG5cdGlvbi1pdGVte1xyXG5cdCAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG5cdCAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuXHQgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogMyU7XHJcblx0ICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubWJsVGFne1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdCAgZm9udC1zaXplOiAxMnB4O1xyXG5cdH0gIFxyXG5cdC5lbWFpbFRhZ3tcclxuXHQgIG1hcmdpbi10b3A6IDBweDtcclxuXHQgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHQgIGZvbnQtc2l6ZTogMTJweDtcclxuXHR9ICAgICAgXHJcblx0Lyouc2MtaW9uLWlucHV0LW1kLWgge1xyXG5cdCAgLS1wYWRkaW5nLXRvcDogNHB4O1xyXG5cdCAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHR9Ki9cclxuXHQuc2VsIHtcclxuXHQgIG1heC13aWR0aDogMTAwJTtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcclxuXHQgIC0tcGFkZGluZy10b3A6IDVweDtcclxuXHQgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdH1cclxuXHJcblx0LmVycm9yIHtcclxuXHQgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG5cdCAgICBmb250LXNpemU6IDEwcHg7XHJcblx0ICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG5cdH1cclxuXHQubGlzdCB7XHJcblx0ICBwYWRkaW5nOiAxNnB4O1xyXG5cdH1cclxuXHJcbn1cclxuXHRpb24tYnV0dG9uIHtcclxuXHRcdG1hcmdpbjogMTVweCBhdXRvO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0aW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcblx0ICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG5cdCAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG5cdH0iLCJkaXYge1xuICAvKi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH0qL1xufVxuZGl2IGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cbmRpdiBpb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuZGl2IC5tYmxUYWcge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmRpdiAuZW1haWxUYWcge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuZGl2IC5zZWwge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbmRpdiAuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuZGl2IC5saXN0IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/update/update.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/update/update.component.ts ***!
    \*******************************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppComponentsUpdateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ion2-calendar */
    "./node_modules/ion2-calendar/dist/index.js");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

    var UpdateComponent =
    /*#__PURE__*/
    function () {
      function UpdateComponent(modalController, formBuilder, api, util) {
        _classCallCheck(this, UpdateComponent);

        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util; // minDate = moment(new Date()).format('YYYY-MM-DD')

        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
        this.customAlertOptions = {
          header: 'Select Gender',
          translucent: true
        };
        this.optionsSingle = {
          color: 'danger',
          from: new Date(),
          disableWeeks: [0]
        };
        this.redirectRoute = '';
        this.memberForm = this.formBuilder.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(UpdateComponent, [{
        key: "openCalendar",
        value: function openCalendar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var options, myCalendar, event, date;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    options = {
                      color: 'danger',
                      to: new Date()
                    };
                    _context5.next = 3;
                    return this.modalController.create({
                      component: ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModal"],
                      componentProps: {
                        options: options
                      }
                    });

                  case 3:
                    myCalendar = _context5.sent;
                    myCalendar.present();
                    _context5.next = 7;
                    return myCalendar.onDidDismiss();

                  case 7:
                    event = _context5.sent;
                    date = event.data;
                    console.log(date);

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.redirectRoute = localStorage.getItem('routeFrom');
          var id = localStorage.getItem('memberid');
          console.log(this.redirectRoute);

          if (this.redirectRoute == 'edit') {
            this.api.getMemberById(id).then(function (info) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        this.profile = info[0];
                        console.log(this.profile); // name: this.profile.name;
                        // dob: this.profile.dob;
                        // gender: this.profile.gender;

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }).catch(function (err) {
              if (err) {
                console.log(err);

                _this12.util.showToast("".concat(err), 'danger', 'bottom');
              }
            });
          } else {
            console.log('ho');
          }
        }
      }, {
        key: "datePickerStart",
        value: function datePickerStart(ev) {
          this.age = this.calculateAge(ev.detail.value);
        }
      }, {
        key: "calculateAge",
        value: function calculateAge(birthdate) {
          return moment__WEBPACK_IMPORTED_MODULE_4__().diff(birthdate, 'years');
        }
      }, {
        key: "add",
        value: function add() {
          var _this13 = this;

          this.util.show('Please wait....');
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_4__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            uid: uid,
            createdAt: created,
            id: id.toString(),
            name: this.name,
            dob: this.dob,
            gender: this.gender,
            age: this.age
          };
          console.log(param);
          this.api.addMember(id.toString(), param).then(function (userData) {
            _this13.util.hide();

            _this13.close();
          }).catch(function (err) {
            if (err) {
              _this13.util.hide();

              console.log(err);

              _this13.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this14 = this;

          this.util.show('Please wait....');
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_4__(date).format("YYYY-MM-DD hh:mm:ss A");
          var param = {
            name: this.name,
            dob: this.dob,
            gender: this.gender,
            age: this.age,
            updatedAt: created
          };
          this.api.addMember(this.profile.id, param).then(function (userData) {
            _this14.util.hide();

            _this14.util.showToast("Patient details updated successfully", 'primary', 'bottom');

            _this14.close();
          }).catch(function (err) {
            if (err) {
              _this14.util.hide();

              console.log(err);

              _this14.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return UpdateComponent;
    }();

    UpdateComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }];
    };

    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update/update.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update.component.scss */
      "./src/app/components/update/update.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])], UpdateComponent);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(util, router) {
        _classCallCheck(this, AuthGuard);

        this.util = util;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          this.isLogin = sessionStorage.getItem('loginStatus');

          if (this.isLogin == 'true') {
            return true;
          } else {
            this.router.navigate(['login']); // this.util.showLoginAlert();

            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guard/back.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/back.guard.ts ***!
    \*************************************/

  /*! exports provided: BackGuard */

  /***/
  function srcAppGuardBackGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackGuard", function () {
      return BackGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var BackGuard =
    /*#__PURE__*/
    function () {
      function BackGuard(util, router) {
        _classCallCheck(this, BackGuard);

        this.util = util;
        this.router = router;
      }

      _createClass(BackGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          this.isLogin = sessionStorage.getItem('loginStatus');
          console.log(this.isLogin);

          if (this.isLogin == 'true') {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return BackGuard;
    }();

    BackGuard.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BackGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], BackGuard);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddAddressAddAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header ion-icon {\n  float: right;\n  margin: 5px;\n  font-size: x-large;\n}\n\n.label {\n  font-weight: bold;\n  padding: 16px 0px 0px 16px;\n}\n\nion-list ion-item {\n  border: 1px solid #e6e6e6;\n  height: 30px;\n  --min-height: 10%;\n  border-radius: 5px;\n  margin: 10px 0px;\n}\n\nion-list .sc-ion-input-md-h {\n  --padding-top: 0px;\n  --padding-bottom: 22px;\n}\n\nion-row ion-item {\n  --border-color: transparent;\n  margin: 0px;\n}\n\nion-row ion-item ion-radio {\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n}\n\nion-list {\n  padding: 0px 16px;\n}\n\n.error {\n  color: red;\n  font-size: 10px;\n  padding-left: 2px;\n}\n\n.item .sc-ion-label-md-h {\n  text-overflow: unset;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcYWRkLWFkZHJlc3NcXGFkZC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ1EsWUFBQTtFQUNSLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREdJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FERUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDQU47O0FESUk7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QUNEUjs7QURFUTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7QUNBWjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FER0E7RUFBeUIsb0JBQUE7RUFDekIsZUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgfVxufVxuLmxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDE2cHggMHB4IDBweCAxNnB4O1xufVxuaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiAxMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDIycHg7XG4gICAgfVxufVxuaW9uLXJvd3tcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaHt0ZXh0LW92ZXJmbG93OiB1bnNldDtcbmZvbnQtc2l6ZTogMTJweDt9IiwiLmhlYWRlciBpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE2cHggMHB4IDBweCAxNnB4O1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGhlaWdodDogMzBweDtcbiAgLS1taW4taGVpZ2h0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbmlvbi1saXN0IC5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLXJvdyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tcm93IGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddAddressPage */

  /***/
  function srcAppPagesAddAddressAddAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPage", function () {
      return AddAddressPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var AddAddressPage =
    /*#__PURE__*/
    function () {
      function AddAddressPage(api, util, modalController, translate, router, navParams, formBuilder) {
        _classCallCheck(this, AddAddressPage);

        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.translate = translate;
        this.router = router;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.pincode = '';
        this.city = '';
        this.state = '';
        this.street = '';
        this.locality = '';
        this.landmark = '';
        this.new = false;
        this.routeFrom = localStorage.getItem('routeFrom');
        console.log(this.routeFrom);

        if (this.routeFrom == 'add') {
          this.new = true;
          this.getPincode();
        } else {
          this.new = false;
          this.ngOnInit();
        }

        this.addressForm = this.formBuilder.group({
          // name: ['', Validators.required],
          // email: ['', [Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],    
          street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)]],
          city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]]
        });
      }

      _createClass(AddAddressPage, [{
        key: "getPincode",
        value: function getPincode() {
          var _this15 = this;

          var id = localStorage.getItem('pincode');
          this.api.getPincodeById(id).then(function (data) {
            console.log(data);

            if (data && data.length) {
              _this15.pincodeList = data[0];
              _this15.pincode = _this15.pincodeList.pincode;

              _this15.getCity(_this15.pincodeList.cityid);
            }
          }).catch(function (error) {
            console.log(error);

            _this15.util.errorToast(_this15.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getCity",
        value: function getCity(id) {
          var _this16 = this;

          this.api.getCityByPincodeId(id).then(function (data) {
            console.log(data);

            if (data && data.length) {
              _this16.city = data[0].city;

              _this16.getState(data[0].state);
            }
          }).catch(function (error) {
            console.log(error);

            _this16.util.errorToast(_this16.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getState",
        value: function getState(id) {
          var _this17 = this;

          this.api.getStateByCityId(id).then(function (data) {
            console.log(data);

            if (data && data.length) {
              _this17.state = data[0].name; // this.pincodeList = data[0];
              // this.getState(this.pincodeList.id);
            }
          }).catch(function (error) {
            console.log(error);

            _this17.util.errorToast(_this17.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalTitle = this.navParams.data.modalTitle;

          if (this.modalTitle == 'Manage') {
            this.addressData = this.navParams.data.data;
            console.log(this.addressData);
            this.mobile = this.addressData.phone;
            this.street = this.addressData.street;
            this.city = this.addressData.city;
            this.state = this.addressData.state;
            this.pincode = this.addressData.pincode;
            this.locality = this.addressData.locality;
            this.landmark = this.addressData.landmark;
            this.label = this.addressData.label;
          } else {
            /*const uid = localStorage.getItem('uid');
            this.api.getMyProfile(uid).then((data) => {
              console.log(data)
              if(data != undefined) {
                this.profile = data;
                this.name = this.profile.name;
                this.email = this.profile.email;
                this.mobile = this.profile.phone;
                console.log(this.name,this.email);
              }
            }, error => {
              console.log(error);
            }).catch(error => {
              console.log(error);
            });*/
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this18 = this;

          var id = this.addressData.id;
          var date = new Date();
          var updatedAt = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD hh:mm:ss A");
          var uid = sessionStorage.getItem('uid');
          var params = {
            id: id.toString(),
            updatedAt: updatedAt,
            uid: uid,
            phone: this.mobile,
            street: this.street,
            city: this.city,
            state: this.state,
            pincode: this.pincode,
            locality: this.locality,
            landmark: this.landmark,
            label: this.label
          };
          this.api.updateAddress(uid, id, params).then(function (data) {
            console.log(data);

            _this18.util.showToast('Address updated successfully', 'primary', 'bottom');

            _this18.closeModal();
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this18.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this19 = this;

          var date = new Date();
          var createdAt = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var uid = sessionStorage.getItem('uid');
          console.log(uid);
          var params = {
            id: id.toString(),
            createdAt: createdAt,
            uid: uid,
            phone: this.mobile,
            street: this.street,
            city: this.city,
            state: this.state,
            pincode: this.pincode,
            locality: this.locality,
            landmark: this.landmark,
            label: this.label
          };
          console.log(params);
          this.api.addNewAddress(uid, id.toString(), params).then(function (data) {
            console.log(data);

            _this19.closeModal();
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this19.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return AddAddressPage;
    }();

    AddAddressPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    AddAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-address.page.scss */
      "./src/app/pages/add-address/add-address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], AddAddressPage);
    /***/
  },

  /***/
  "./src/app/pages/insufficient/insufficient.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/insufficient/insufficient.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInsufficientInsufficientPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cntent {\n  margin: 16px;\n  font-weight: bold;\n}\n.cntent p {\n  font-size: 18px;\n  color: var(--ion-color-primary);\n}\n.cntent small {\n  font-size: 10px;\n  font-weight: bold;\n}\n.cntent ion-thumbnail {\n  float: right;\n  width: 90px;\n  height: 65px;\n}\n.cntent ion-button {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdWZmaWNpZW50L0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGluc3VmZmljaWVudFxcaW5zdWZmaWNpZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5zdWZmaWNpZW50L2luc3VmZmljaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFUjtBREFJO0VBQ0ksWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdWZmaWNpZW50L2luc3VmZmljaWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY250ZW50IHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIHNtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgfVxyXG59IiwiLmNudGVudCB7XG4gIG1hcmdpbjogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY250ZW50IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uY250ZW50IHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNjVweDtcbn1cbi5jbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/insufficient/insufficient.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/insufficient/insufficient.page.ts ***!
    \*********************************************************/

  /*! exports provided: InsufficientPage */

  /***/
  function srcAppPagesInsufficientInsufficientPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsufficientPage", function () {
      return InsufficientPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/razorpay */
    "./src/app/services/razorpay.ts");

    var InsufficientPage =
    /*#__PURE__*/
    function () {
      function InsufficientPage(modalController, api, util, navParams, razorpayService, cd, datePicker, router, alertCtrl) {
        _classCallCheck(this, InsufficientPage);

        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.navParams = navParams;
        this.razorpayService = razorpayService;
        this.cd = cd;
        this.datePicker = datePicker;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.currency_ = "₹";
        this.showModal = false;
        this.url = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd";
        this.getWalletBalance();
        var date = new Date();
        this.createdAt = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
        this.getProfile();
      }

      _createClass(InsufficientPage, [{
        key: "getWalletBalance",
        value: function getWalletBalance() {
          var _this20 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getWallet(uid).then(function (data) {
            if (data && data.length != 0) {
              _this20.wallet_money = data[0];
              _this20.createdAt = _this20.wallet_money.createdAt;
            }
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this20.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this21 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyProfile(uid).then(function (data) {
            console.log('my profile', data);

            if (data) {
              console.log(data);
              _this21.profile = data; // this.phone = data.phone;
              // this.name = data.name;
              // this.email = data.email;

              _this21.token = data.fcm_token;

              if (_this21.name == undefined) {
                _this21.email = '';
              } else {
                console.log('trigger else');
              }
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.table(this.navParams);
          this.wallet_balance = this.navParams.data.wallet_balance;
          this.required_amount = this.navParams.data.required_amount;
        }
      }, {
        key: "makePay",
        value: function makePay() {
          this.RAZORPAY_OPTIONS = {
            description: "Wallet Recharge",
            image: this.url,
            currency: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].general.code,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].razorpay.api_key,
            amount: this.required_amount * 100,
            name: 'Way2Lab',
            prefill: {
              name: this.profile.name,
              email: this.profile.email,
              contact: this.profile.phone
            },
            theme: {
              color: "#2ea2cc"
            },
            modal: {
              ondismiss: function ondismiss() {
                alert("dismissed");
              }
            }
          };
          console.log(this.RAZORPAY_OPTIONS); //this.RAZORPAY_OPTIONS.amount = 100 + '00';
          // binding this object to both success and dismiss handler

          this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this); // this.showPopup();

          var razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
          razorpay.open();
        }
      }, {
        key: "razorPaySuccessHandler",
        value: function razorPaySuccessHandler(response) {
          console.log(response);

          if (response.razorpay_payment_id) {
            this.razo(response.razorpay_payment_id);
          } else {
            this.util.showToast("Some error occured !!", 'danger', 'bottom');
          }

          this.razorpayResponse = 'Razorpay Response';
          this.showModal = true;
          this.cd.detectChanges();
          document.getElementById('razorpay-response').style.display = 'block';
        }
      }, {
        key: "razo",
        value: function razo(payment_id) {
          var _this22 = this;

          this.util.show('Please wait....');
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var createdAt = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            transactionid: payment_id,
            id: id.toString(),
            status: 'success',
            createdAt: createdAt,
            amount: this.required_amount,
            uid: uid,
            type: 'Wallet'
          };
          this.api.addTransaction(id.toString(), param).then(function (data) {
            console.log(data);

            _this22.api.addWalletTransaction(id.toString(), param).then(function (userData) {
              var uid = sessionStorage.getItem('uid');
              var date = new Date();
              var updatedAt = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
              var id = Math.floor(100000000 + Math.random() * 900000000);
              var total_amount = _this22.required_amount + _this22.wallet_balance;
              console.log(total_amount);
              var post = {
                uid: uid,
                createdAt: _this22.createdAt,
                updatedAt: updatedAt,
                amount: total_amount
              };

              _this22.api.addMoneyToWallet(uid, post).then(function (data) {
                _this22.util.hide();

                _this22.util.showToast('Money added to wallet successfully', 'primary', 'bottom');

                _this22.closeModal('success');
              }).catch(function (err) {
                if (err) {
                  _this22.util.hide();

                  console.log(err);

                  _this22.util.showToast("".concat(err), 'danger', 'bottom');
                }
              });
            }).catch(function (err) {
              if (err) {
                _this22.util.hide();

                console.log(err);

                _this22.util.showToast("".concat(err), 'danger', 'bottom');
              }
            });
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this22.util.hide();

              _this22.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalController.dismiss(data);

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "sendWalletNotification",
        value: function sendWalletNotification() {
          var title = 'Payment Complete';
          var msg = 'Thank you for your recent payment. You have successfully added ' + this.required_amount + ' rupees in your Aryavrat Wallet';
          this.api.sendNotification(title, msg, this.token).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            // this.util.hide();
            console.log('err', error);
          });
        }
      }]);

      return InsufficientPage;
    }();

    InsufficientPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_9__["ExternalLibraryService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    InsufficientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-insufficient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./insufficient.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/insufficient/insufficient.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./insufficient.page.scss */
      "./src/app/pages/insufficient/insufficient.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_9__["ExternalLibraryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], InsufficientPage);
    /***/
  },

  /***/
  "./src/app/pages/profile-modal/profile-modal.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/profile-modal/profile-modal.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileModalProfileModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-button {\n  color: var(--blue-color) !important;\n  text-transform: capitalize;\n  --background: transparent;\n  --color: var(--blue-color);\n}\n\nion-content .sel {\n  max-width: 100%;\n  width: 100%;\n  font-size: 14px !important;\n  --padding-top: 5px;\n  --padding-start: 0px;\n}\n\nion-content ion-select::part(icon) {\n  color: #000 !important;\n  margin-top: 5px;\n}\n\nion-content ion-select::part(text) {\n  color: #000 !important;\n  margin-top: 5px;\n}\n\nion-content .picker {\n  position: absolute;\n  margin-top: 74px;\n  margin-left: -34px;\n}\n\nion-content .profile {\n  border-radius: 50%;\n}\n\nion-content .input-div ion-label {\n  font-size: 13px;\n}\n\nion-content .input-div ion-input {\n  margin-top: 12px;\n  margin-bottom: 13px;\n  height: 44px;\n  background-color: #F5F5F5;\n  border-radius: 7px;\n  font-size: 15px;\n  --padding-start: 20px;\n  color: var(--input-color);\n  --placeholder-opacity: 1;\n}\n\nion-content .input-div ion-select {\n  background-color: #F5F5F5;\n  border-radius: 7px;\n  font-size: 15px;\n  --padding-start: 20px;\n  color: var(--input-color);\n  --placeholder-opacity: 1;\n}\n\nion-content .padding {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 20px;\n  /*position: absolute;*/\n  top: 32%;\n}\n\nion-content .number-input {\n  background: var(--ion-color-sky);\n  border-radius: 22px;\n  height: 44px;\n  padding: 4px 4px;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n\nion-content .number-input .code-div {\n  border-right: 1px solid var(--ion-border-color);\n}\n\nion-content .number-input .number-div {\n  padding-left: 8px;\n}\n\nion-content .number-input .number-div .input-div {\n  padding-left: 3px;\n}\n\nion-content .number-input .number-div .input-div ion-input {\n  font-size: 15px;\n  font-family: \"Poppins-Medium\";\n  --padding-top: 9px;\n  position: relative;\n  top: -7px;\n}\n\nion-content .number-input .button-div {\n  width: 25px;\n}\n\nion-content .number-input .button-div .btn-clear {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin-top: 0px;\n}\n\nion-content .number {\n  font-size: 13px;\n}\n\nion-footer ion-toolbar ion-button {\n  margin: 0;\n  background-color: var(--blue-color);\n  height: 52px;\n  padding: 0px;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tb2RhbC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlLW1vZGFsXFxwcm9maWxlLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tb2RhbC9wcm9maWxlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNJLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDSFo7O0FEU0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ05OOztBRFFJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDTlI7O0FEU0k7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUNQUjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BSOztBRFNJO0VBQ0ksa0JBQUE7QUNQUjs7QURXUTtFQUNJLGVBQUE7QUNUWjs7QURXUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNUWjs7QURXUztFQUNHLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDVFo7O0FEWUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNWUjs7QURZSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBQ1ZSOztBRFdRO0VBQ0ksK0NBQUE7QUNUWjs7QURXUTtFQUNJLGlCQUFBO0FDVFo7O0FEVVk7RUFDSSxpQkFBQTtBQ1JoQjs7QURTZ0I7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1BwQjs7QURXUTtFQUNJLFdBQUE7QUNUWjs7QURVWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUmhCOztBRFlJO0VBQ0ksZUFBQTtBQ1ZSOztBRGdCUTtFQUNJLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDYloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLW1vZGFsL3Byb2ZpbGUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuc2VsIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnBpY2tlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDc0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5pbnB1dC1kaXYge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWRkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC8qcG9zaXRpb246IGFic29sdXRlOyovXHJcbiAgICAgICAgdG9wOiAzMiU7XHJcbiAgICB9XHJcbiAgICAubnVtYmVyLWlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5jb2RlLWRpdiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubnVtYmVyLWRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAuaW5wdXQtZGl2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLWRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAuYnRuLWNsZWFyIHtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm51bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcbn1cblxuaW9uLWNvbnRlbnQgLnNlbCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pb24tY29udGVudCAucGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA3NHB4O1xuICBtYXJnaW4tbGVmdDogLTM0cHg7XG59XG5pb24tY29udGVudCAucHJvZmlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IC5pbnB1dC1kaXYgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWNvbnRlbnQgLmlucHV0LWRpdiBpb24taW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbmlvbi1jb250ZW50IC5pbnB1dC1kaXYgaW9uLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbmlvbi1jb250ZW50IC5wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICB0b3A6IDMyJTtcbn1cbmlvbi1jb250ZW50IC5udW1iZXItaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiA0cHggNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAubnVtYmVyLWlucHV0IC5jb2RlLWRpdiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAubnVtYmVyLWRpdiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAubnVtYmVyLWRpdiAuaW5wdXQtZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5pb24tY29udGVudCAubnVtYmVyLWlucHV0IC5udW1iZXItZGl2IC5pbnB1dC1kaXYgaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAtLXBhZGRpbmctdG9wOiA5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtN3B4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAuYnV0dG9uLWRpdiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAuYnV0dG9uLWRpdiAuYnRuLWNsZWFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile-modal/profile-modal.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/profile-modal/profile-modal.page.ts ***!
    \***********************************************************/

  /*! exports provided: ProfileModalPage */

  /***/
  function srcAppPagesProfileModalProfileModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModalPage", function () {
      return ProfileModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var ProfileModalPage =
    /*#__PURE__*/
    function () {
      function ProfileModalPage(api, util, modalController) {
        _classCallCheck(this, ProfileModalPage);

        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.name = '';
        this.email = '';
        this.gender = '';
        this.dob = '';
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('YYYY-MM-DD');
      }

      _createClass(ProfileModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyProfile(uid).then(function (data) {
            console.log('my profile', data);

            if (data) {
              _this23.name = data.name;
              _this23.dob = data.dob;
              _this23.email = data.email;
              _this23.gender = data.gender;
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "datePickerStart",
        value: function datePickerStart(ev) {
          this.age = this.calculateAge(ev.detail.value);
        }
      }, {
        key: "calculateAge",
        value: function calculateAge(birthdate) {
          return moment__WEBPACK_IMPORTED_MODULE_5__().diff(birthdate, 'years');
        }
      }, {
        key: "saveProfile",
        value: function saveProfile() {
          var _this24 = this;

          if (this.name === '') {
            this.util.showToast('Name is required', 'danger', 'bottom');
            return false;
          } else if (this.email === '') {
            this.util.showToast('Email is required', 'danger', 'bottom');
            return false;
          } else if (this.dob === '') {
            this.util.showToast('Date of birth is required', 'danger', 'bottom');
            return false;
          } else if (this.gender === '') {
            this.util.showToast('Gender is required', 'danger', 'bottom');
            return false;
          }

          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var modifiedOn = moment__WEBPACK_IMPORTED_MODULE_5__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            modifiedOn: modifiedOn,
            uid: uid,
            name: this.name,
            age: this.age,
            gender: this.gender,
            dob: this.dob,
            email: this.email
          };
          console.log(param);
          this.api.updateProfile(uid, param).then(function (data) {
            console.log(data);

            _this24.util.publishProfile(true);

            _this24.util.showToast('Profile has updated successfully', 'primary', 'bottom');

            _this24.addMember();
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this24.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "addMember",
        value: function addMember() {
          var _this25 = this;

          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_5__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            uid: uid,
            createdAt: created,
            id: id.toString(),
            name: this.name,
            dob: this.dob,
            gender: this.gender,
            age: this.age
          };
          console.log(param);
          this.api.addMember(id.toString(), param).then(function (userData) {
            console.log(userData);

            _this25.close('true');
          }).catch(function (err) {
            if (err) {
              _this25.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "close",
        value: function close(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log(data);
                    _context11.next = 3;
                    return this.modalController.dismiss();

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return ProfileModalPage;
    }();

    ProfileModalPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ProfileModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-modal/profile-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-modal.page.scss */
      "./src/app/pages/profile-modal/profile-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ProfileModalPage);
    /***/
  },

  /***/
  "./src/app/services/apis.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/apis.service.ts ***!
    \******************************************/

  /*! exports provided: AuthInfo, ApisService */

  /***/
  function srcAppServicesApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInfo", function () {
      return AuthInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApisService_1;

    var AuthInfo =
    /*#__PURE__*/
    function () {
      function AuthInfo($uid) {
        _classCallCheck(this, AuthInfo);

        this.$uid = $uid;
      }

      _createClass(AuthInfo, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.$uid;
        }
      }]);

      return AuthInfo;
    }();

    var ApisService = ApisService_1 =
    /*#__PURE__*/
    function () {
      function ApisService(fireAuth, adb, http) {
        _classCallCheck(this, ApisService);

        this.fireAuth = fireAuth;
        this.adb = adb;
        this.http = http;
        this.isSignedIn = false;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ApisService_1.UNKNOWN_USER);
      }

      _createClass(ApisService, [{
        key: "checkAuth",
        value: function checkAuth() {
          var _this26 = this;

          return new Promise(function (resolve, reject) {
            _this26.fireAuth.auth.onAuthStateChanged(function (user) {
              console.log(user);

              if (user) {
                sessionStorage.setItem('uid', user.uid);
                resolve(user);
              } else {
                _this26.logout();

                var lng = localStorage.getItem('language');
                var selectedCity = localStorage.getItem('selectedCity');
                localStorage.clear();
                localStorage.setItem('language', lng);
                localStorage.setItem('selectedCity', selectedCity);
                resolve(false);
              }
            });
          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this27 = this;

          return new Promise(function (resolve, reject) {
            _this27.fireAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
              if (res.user) {
                _this27.db.collection('users').doc(res.user.uid).update({
                  fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                });

                _this27.authInfo$.next(new AuthInfo(res.user.uid));

                resolve(res.user);
              }
            }).catch(function (err) {
              _this27.authInfo$.next(ApisService_1.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "getOnboarding",
        value: function getOnboarding() {
          var _this28 = this;

          return new Promise(function (resolve, reject) {
            _this28.adb.collection('splash').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this29 = this;

          return new Promise(function (resolve, reject) {
            _this29.adb.collection('users', function (ref) {
              return ref.orderBy('createdOn', 'desc');
            }).get().subscribe(function (users) {
              var data = users.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getCities",
        value: function getCities() {
          var _this30 = this;

          return new Promise(function (resolve, reject) {
            _this30.adb.collection('cities', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getCitiesForHome",
        value: function getCitiesForHome() {
          var _this31 = this;

          return new Promise(function (resolve, reject) {
            _this31.adb.collection('cities', function (ref) {
              return ref.where('status', '==', 1).where('home_page', '==', '1');
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getPincodeById",
        value: function getPincodeById(id) {
          var _this32 = this;

          return new Promise(function (resolve, reject) {
            _this32.adb.collection('pincodes', function (ref) {
              return ref.where('pincode', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAssociatedTestPin",
        value: function getAssociatedTestPin(itid, pin) {
          var _this33 = this;

          return new Promise(function (resolve, reject) {
            _this33.adb.collection('associated_tests_pin', function (ref) {
              return ref.where('itid', '==', itid).where('pin', '==', pin);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();

                if (item.it) {
                  item.it.get().then(function (doc) {
                    item.it = doc.data();
                  });
                }

                if (item.branch) {
                  item.branch.get().then(function (doc) {
                    item.branch = doc.data();
                  });
                }

                if (item.at) {
                  item.at.get().then(function (doc) {
                    item.at = doc.data();
                  });
                }

                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAllPincodes",
        value: function getAllPincodes() {
          var _this34 = this;

          return new Promise(function (resolve, reject) {
            _this34.adb.collection('pincodes').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAllSecondaryLabs",
        value: function getAllSecondaryLabs() {
          var _this35 = this;

          return new Promise(function (resolve, reject) {
            _this35.adb.collection('venue', function (ref) {
              return ref.where('type', '==', 'secondary');
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getCityByPincodeId",
        value: function getCityByPincodeId(id) {
          var _this36 = this;

          return new Promise(function (resolve, reject) {
            _this36.adb.collection('cities', function (ref) {
              return ref.where('status', '==', 1).where('id', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getPincodeByCityId",
        value: function getPincodeByCityId(id) {
          var _this37 = this;

          return new Promise(function (resolve, reject) {
            _this37.adb.collection('pincodes', function (ref) {
              return ref.where('status', '==', 1).where('cityid', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getCityByCityName",
        value: function getCityByCityName(name) {
          var _this38 = this;

          return new Promise(function (resolve, reject) {
            _this38.adb.collection('cities', function (ref) {
              return ref.where('status', '==', 1).where('city', '==', name);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getStateByCityId",
        value: function getStateByCityId(id) {
          var _this39 = this;

          return new Promise(function (resolve, reject) {
            _this39.adb.collection('states', function (ref) {
              return ref.where('status', '==', 1).where('id', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAboutUs",
        value: function getAboutUs() {
          var _this40 = this;

          return new Promise(function (resolve, reject) {
            _this40.adb.collection('aboutus').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getTeamMember",
        value: function getTeamMember() {
          var _this41 = this;

          return new Promise(function (resolve, reject) {
            _this41.adb.collection('team').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getTeamMemberById",
        value: function getTeamMemberById(id) {
          var _this42 = this;

          return new Promise(function (resolve, reject) {
            _this42.adb.collection('team', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getCitiesByStateId",
        value: function getCitiesByStateId(id) {
          var _this43 = this;

          return new Promise(function (resolve, reject) {
            _this43.adb.collection('cities', function (ref) {
              return ref.where('status', '==', 1).where('state', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getStates",
        value: function getStates() {
          var _this44 = this;

          return new Promise(function (resolve, reject) {
            _this44.adb.collection('states', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getClients",
        value: function getClients() {
          var _this45 = this;

          return new Promise(function (resolve, reject) {
            _this45.adb.collection('cities', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getSocieties",
        value: function getSocieties() {
          var _this46 = this;

          return new Promise(function (resolve, reject) {
            _this46.adb.collection('society').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "selfRegistration",
        value: function selfRegistration(id, param) {
          var _this47 = this;

          console.log(param);
          return new Promise(function (resolve, reject) {
            _this47.db.collection('users').doc(id).set(param).then(function (data) {
              resolve(data);
            }).catch(function (err) {
              _this47.authInfo$.next(ApisService_1.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "register",
        value: function register(mobile, email, password, uid) {
          var _this48 = this;

          console.log(mobile, email, password, uid);
          return new Promise(function (resolve, reject) {
            _this48.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
              if (res.user) {
                _this48.db.collection('users').doc(res.user.uid).set({
                  uid: res.user.uid,
                  email: email,
                  createdOn: new Date(),
                  phone: mobile,
                  deviceId: uid,
                  imagePath: '',
                  type: 'user',
                  status: 'active',
                  fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                });

                _this48.authInfo$.next(new AuthInfo(res.user.uid));

                resolve(res.user);
              }
            }).catch(function (err) {
              _this48.authInfo$.next(ApisService_1.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          var _this49 = this;

          return new Promise(function (resolve, reject) {
            _this49.fireAuth.auth.sendPasswordResetEmail(email).then(function (res) {
              resolve(res);
            }).catch(function (err) {
              reject("reset failed ".concat(err));
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authInfo$.next(ApisService_1.UNKNOWN_USER); // this.db.collection('users').doc(localStorage.getItem('uid')).update({ "fcm_token": firebase.firestore.FieldValue.delete() })

          return this.fireAuth.auth.signOut();
        }
      }, {
        key: "getUser",
        value: function getUser(phone) {
          var _this50 = this;

          return new Promise(function (resolve, reject) {
            _this50.adb.collection('users', function (ref) {
              return ref.where('phone', '==', phone);
            }).get().subscribe(function (users) {
              var data = users.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyProfile",
        value: function getMyProfile(id) {
          var _this51 = this;

          return new Promise(function (resolve, reject) {
            _this51.adb.collection('users').doc(id).get().subscribe(function (users) {
              resolve(users.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addPrescription",
        value: function addPrescription(id, param) {
          var _this52 = this;

          return new Promise(function (resolve, reject) {
            _this52.adb.collection('prescriptions').doc(id).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addMember",
        value: function addMember(id, param) {
          var _this53 = this;

          return new Promise(function (resolve, reject) {
            _this53.adb.collection('members').doc(id).set(param, {
              merge: true
            }).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        } // satya code

      }, {
        key: "getReviewsByLabId",
        value: function getReviewsByLabId(id) {
          var _this54 = this;

          return new Promise(function (resolve, reject) {
            _this54.adb.collection('review', function (ref) {
              return ref.where('status', '==', 1).where('lab_id', '==', id);
            }).get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                item.lab.get().then(function (doc) {
                  item.lab = doc.data();
                });
                /* item.booking.get().then(function (doc) {
                   item.booking = doc.data();
                 });*/

                if (item.user != '') {
                  item.user.get().then(function (doc) {
                    item.user = doc.data();
                  });
                }

                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          var _this55 = this;

          return new Promise(function (resolve, reject) {
            _this55.adb.collection('review', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAssociatedTests",
        value: function getAssociatedTests() {
          var _this56 = this;

          return new Promise(function (resolve, reject) {
            _this56.adb.collection('associated_tests').get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;

                if (item.itid) {
                  item.itid.get().then(function (doc) {
                    item.itid = doc.data();
                  });
                }

                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getFacilities",
        value: function getFacilities() {
          var _this57 = this;

          return new Promise(function (resolve, reject) {
            _this57.adb.collection('facilities', function (ref) {
              return ref.orderBy('display_order', 'asc');
            }).get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getIndividualPopularTest",
        value: function getIndividualPopularTest() {
          var _this58 = this;

          return new Promise(function (resolve, reject) {
            _this58.adb.collection('individual_tests', function (ref) {
              return ref.where('status', '==', 1).where('health_package', '==', 0).where('isPopular', '==', 1);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getHomeIndividualPopularTest",
        value: function getHomeIndividualPopularTest() {
          var _this59 = this;

          return new Promise(function (resolve, reject) {
            _this59.adb.collection('individual_tests', function (ref) {
              return ref.where('status', '==', 1).where('health_package', '==', 0).where('isPopular', '==', 1).orderBy('display_order', 'asc');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getCardiologyTest",
        value: function getCardiologyTest() {
          var _this60 = this;

          return new Promise(function (resolve, reject) {
            _this60.adb.collection('individual_tests', function (ref) {
              return ref.where('status', '==', 1).where('isCardiology', '==', '1');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getRadiologyTest",
        value: function getRadiologyTest() {
          var _this61 = this;

          return new Promise(function (resolve, reject) {
            _this61.adb.collection('individual_tests', function (ref) {
              return ref.where('status', '==', 1).where('isRadiology', '==', '1');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMostPopularPackage",
        value: function getMostPopularPackage() {
          var _this62 = this;

          return new Promise(function (resolve, reject) {
            _this62.adb.collection('individual_tests', function (ref) {
              return ref.where('status', '==', 1).where('health_package', '==', 1).where('isPopular', '==', 1).orderBy('display_order', 'asc');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAllTest",
        value: function getAllTest() {
          var _this63 = this;

          return new Promise(function (resolve, reject) {
            _this63.adb.collection('individual_tests').get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAllIndividualTest",
        value: function getAllIndividualTest() {
          var _this64 = this;

          return new Promise(function (resolve, reject) {
            _this64.adb.collection('individual_tests', function (ref) {
              return ref.where('health_package', '==', 0).where('status', '==', 1);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAllHealthPackages",
        value: function getAllHealthPackages() {
          var _this65 = this;

          return new Promise(function (resolve, reject) {
            _this65.adb.collection('individual_tests', function (ref) {
              return ref.where('health_package', '==', 1).where('status', '==', 1).orderBy('display_order', 'asc');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMemberByUId",
        value: function getMemberByUId(uid) {
          var _this66 = this;

          return new Promise(function (resolve, reject) {
            _this66.adb.collection('members', function (ref) {
              return ref.where('uid', '==', uid);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteMember",
        value: function deleteMember(uid, id) {
          var _this67 = this;

          return new Promise(function (resolve, reject) {
            _this67.adb.collection('members').doc(id).delete().then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateNewIndividual_test",
        value: function updateNewIndividual_test(id, param) {
          var _this68 = this;

          return new Promise(function (resolve, reject) {
            _this68.db.collection('individual_tests').doc(id).update(param).then(function (data) {
              resolve(data);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getIndividualTestById",
        value: function getIndividualTestById(id) {
          var _this69 = this;

          return new Promise(function (resolve, reject) {
            _this69.adb.collection('individual_tests', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getGenderRecomendationById",
        value: function getGenderRecomendationById(id) {
          var _this70 = this;

          return new Promise(function (resolve, reject) {
            _this70.adb.collection('recommended_for', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getRecommendedFor",
        value: function getRecommendedFor() {
          var _this71 = this;

          return new Promise(function (resolve, reject) {
            _this71.adb.collection('recommended_for', function (ref) {
              return ref.orderBy('name', 'asc');
            }).get().subscribe(function (recommendeds) {
              var data = recommendeds.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAgeRecomendationById",
        value: function getAgeRecomendationById(id) {
          var _this72 = this;

          return new Promise(function (resolve, reject) {
            _this72.adb.collection('age_groups', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAgeGroup",
        value: function getAgeGroup() {
          var _this73 = this;

          return new Promise(function (resolve, reject) {
            _this73.adb.collection('age_groups', function (ref) {
              return ref.orderBy('name', 'asc');
            }).get().subscribe(function (ages) {
              var data = ages.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getSecondaryLabById",
        value: function getSecondaryLabById(uid) {
          var _this74 = this;

          return new Promise(function (resolve, reject) {
            _this74.adb.collection('venue', function (ref) {
              return ref.where('uid', '==', uid);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.primary.get().then(function (doc) {
                  item.primary = doc.data();
                });
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getPrimaryLabById",
        value: function getPrimaryLabById(uid) {
          var _this75 = this;

          return new Promise(function (resolve, reject) {
            _this75.adb.collection('venue', function (ref) {
              return ref.where('uid', '==', uid).where('type', '==', 'primary');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getPrimaryLab",
        value: function getPrimaryLab() {
          var _this76 = this;

          return new Promise(function (resolve, reject) {
            _this76.adb.collection('venue', function (ref) {
              return ref.where('status', '==', 'open').where('type', '==', 'primary');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getLabCount",
        value: function getLabCount() {
          var _this77 = this;

          return new Promise(function (resolve, reject) {
            _this77.adb.collection('venue').get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMemberById",
        value: function getMemberById(id) {
          var _this78 = this;

          return new Promise(function (resolve, reject) {
            _this78.adb.collection('members', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getIndividualTest",
        value: function getIndividualTest() {
          var _this79 = this;

          return new Promise(function (resolve, reject) {
            _this79.adb.collection('individual_tests', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAssociatedTestById",
        value: function getAssociatedTestById(id) {
          var _this80 = this;

          return new Promise(function (resolve, reject) {
            _this80.adb.collection('associated_tests', function (ref) {
              return ref.where('individual_test', '==', id);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getSecondaryLabs",
        value: function getSecondaryLabs() {
          var _this81 = this;

          return new Promise(function (resolve, reject) {
            _this81.adb.collection('venue', function (ref) {
              return ref.where('status', '==', 'open');
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;

                if (item.primary != undefined) {
                  item.primary.get().then(function (doc) {
                    item.primary = doc.data();
                  });
                }

                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getOffers",
        value: function getOffers() {
          var _this82 = this;

          return new Promise(function (resolve, reject) {
            _this82.adb.collection('offers').get().subscribe(function (offer) {
              var data = offer.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getHealthHabbits",
        value: function getHealthHabbits() {
          var _this83 = this;

          return new Promise(function (resolve, reject) {
            _this83.adb.collection('habbits', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (habbits) {
              var data = habbits.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getHealthHabbitsById",
        value: function getHealthHabbitsById(id) {
          var _this84 = this;

          return new Promise(function (resolve, reject) {
            _this84.adb.collection('habbits', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (habbits) {
              var data = habbits.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getHealthRisk",
        value: function getHealthRisk() {
          var _this85 = this;

          return new Promise(function (resolve, reject) {
            _this85.adb.collection('health_risks', function (ref) {
              return ref.where('status', '==', 1);
            }).get().subscribe(function (risks) {
              var data = risks.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getHealthRiskById",
        value: function getHealthRiskById(id) {
          var _this86 = this;

          return new Promise(function (resolve, reject) {
            _this86.adb.collection('health_risks', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (risks) {
              var data = risks.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getLabReports",
        value: function getLabReports() {
          var _this87 = this;

          return new Promise(function (resolve, reject) {
            _this87.adb.collection('labreports').get().subscribe(function (report) {
              var data = report.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenueCategories",
        value: function getVenueCategories(id) {
          var _this88 = this;

          return new Promise(function (resolve, reject) {
            _this88.adb.collection('defaultcategories', function (ref) {
              return ref.orderBy('createdAt');
            }).get().subscribe(function (categories) {
              var data = categories.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          var _this89 = this;

          return new Promise(function (resolve, reject) {
            _this89.adb.collection('settings').get().subscribe(function (setting) {
              var data = setting.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addUsedCoupon",
        value: function addUsedCoupon(id, param) {
          var _this90 = this;

          return new Promise(function (resolve, reject) {
            _this90.adb.collection('used_coupon').doc(id).set(param, {
              merge: true
            }).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getUsedCoupon",
        value: function getUsedCoupon(uid) {
          var _this91 = this;

          return new Promise(function (resolve, reject) {
            _this91.adb.collection('used_coupon', function (ref) {
              return ref.where('uid', '==', uid);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getUsedCouponById",
        value: function getUsedCouponById(uid, couponid) {
          var _this92 = this;

          return new Promise(function (resolve, reject) {
            _this92.adb.collection('used_coupon', function (ref) {
              return ref.where('uid', '==', uid).where('couponid', '==', couponid);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getUsedCouponByCouponCode",
        value: function getUsedCouponByCouponCode(uid, couponCode) {
          var _this93 = this;

          return new Promise(function (resolve, reject) {
            _this93.adb.collection('used_coupon', function (ref) {
              return ref.where('uid', '==', uid).where('couponCode', '==', couponCode);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "insertUsedCoupon",
        value: function insertUsedCoupon(id, param) {
          var _this94 = this;

          return new Promise(function (resolve, reject) {
            _this94.adb.collection('used_coupon').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateUsedCoupon",
        value: function updateUsedCoupon(id, param) {
          var _this95 = this;

          return new Promise(function (resolve, reject) {
            _this95.adb.collection('used_coupon').doc(id).update(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addTransaction",
        value: function addTransaction(id, param) {
          var _this96 = this;

          return new Promise(function (resolve, reject) {
            _this96.adb.collection('transactions').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getTransaction",
        value: function getTransaction(uid, start_date, end_date) {
          var _this97 = this;

          return new Promise(function (resolve, reject) {
            _this97.adb.collection('transactions', function (ref) {
              return ref.where('uid', '==', uid).where('createdAt', '>', start_date).where('createdAt', '<', end_date).orderBy('createdAt', 'desc');
            }).get().subscribe(function (transactions) {
              var data = transactions.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyTransaction",
        value: function getMyTransaction(uid) {
          var _this98 = this;

          return new Promise(function (resolve, reject) {
            _this98.adb.collection('transactions', function (ref) {
              return ref.where('uid', '==', uid).orderBy('createdAt', 'desc');
            }).get().subscribe(function (transactions) {
              var data = transactions.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addNewAddress",
        value: function addNewAddress(uid, id, param) {
          var _this99 = this;

          return new Promise(function (resolve, reject) {
            _this99.adb.collection('address').doc(uid).collection('all').doc(id).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateAddress",
        value: function updateAddress(uid, id, param) {
          var _this100 = this;

          return new Promise(function (resolve, reject) {
            _this100.adb.collection('address').doc(uid).collection('all').doc(id).update(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress(uid) {
          var _this101 = this;

          return new Promise(function (resolve, reject) {
            _this101.db.collection('address').doc(uid).collection('all').get().then(function (data) {
              var users = data.docs.map(function (doc) {
                var item = doc.data();
                item.id = doc.id;
                return item;
              });
              resolve(users);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteAddress",
        value: function deleteAddress(uid, id) {
          var _this102 = this;

          return new Promise(function (resolve, reject) {
            _this102.adb.collection('address').doc(uid).collection('all').doc(id).delete().then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getBookingsByAddressId",
        value: function getBookingsByAddressId(uid, id) {
          var _this103 = this;

          console.log(uid, id);
          return new Promise(function (resolve, reject) {
            _this103.adb.collection('orders', function (ref) {
              return ref.where('uid', '==', uid).where('address', '==', id);
            }).get().subscribe(function (coupons) {
              var data = coupons.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAddressById",
        value: function getAddressById(uid, id) {
          var _this104 = this;

          return new Promise(function (resolve, reject) {
            _this104.adb.collection('address').doc(uid).collection('all', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getReasonById",
        value: function getReasonById(id) {
          var _this105 = this;

          return new Promise(function (resolve, reject) {
            _this105.adb.collection('return_reason', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAllBookings",
        value: function getAllBookings() {
          var _this106 = this;

          return new Promise(function (resolve, reject) {
            _this106.adb.collection('booking').get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this106, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee12() {
                var data;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyBookings",
        value: function getMyBookings(id, start_date, end_date) {
          var _this107 = this;

          return new Promise(function (resolve, reject) {
            _this107.adb.collection('booking', function (ref) {
              return ref.where('uid', '==', id).where('createdAt', '>=', start_date).where('createdAt', '<=', end_date).orderBy('createdAt', 'desc');
            }).get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this107, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee13() {
                var data;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          item.Lvid.get().then(function (doc) {
                            item.lab = doc.data();
                          });
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getBookings",
        value: function getBookings(id) {
          var _this108 = this;

          return new Promise(function (resolve, reject) {
            _this108.adb.collection('booking', function (ref) {
              return ref.where('uid', '==', id).orderBy('createdAt', 'desc');
            }).get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this108, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee14() {
                var data;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          item.Lvid.get().then(function (doc) {
                            item.lab = doc.data();
                          });
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getBookingById",
        value: function getBookingById(id) {
          var _this109 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this109, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee16() {
              var _this110 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.adb.collection('booking', function (ref) {
                        return ref.where('booking_id', '==', id);
                      }).get().subscribe(function (order) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this110, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee15() {
                          var data;
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  data = order.docs.map(function (element) {
                                    var item = element.data();
                                    item.id = element.id;
                                    return item;
                                  });
                                  resolve(data);

                                case 2:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15);
                        }));
                      }, function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          });
        }
      }, {
        key: "updateBooking",
        value: function updateBooking(id, param) {
          var _this111 = this;

          return new Promise(function (resolve, reject) {
            _this111.adb.collection('booking').doc(id).update(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addReview",
        value: function addReview(id, param) {
          var _this112 = this;

          param.booking = this.db.doc('booking/' + param.booking_id);
          param.lab = this.db.doc('venue/' + param.lab_id);
          param.user = this.db.doc('users/' + param.uid);
          return new Promise(function (resolve, reject) {
            _this112.adb.collection('review').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "remarks",
        value: function remarks() {
          var _this113 = this;

          return new Promise(function (resolve, reject) {
            _this113.adb.collection('return_reason', function (ref) {
              return ref.where('type', '==', 'patient');
            }).get().subscribe(function (list) {
              var data = list.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMySubscriptions",
        value: function getMySubscriptions(id, start_date, end_date) {
          var _this114 = this;

          return new Promise(function (resolve, reject) {
            _this114.adb.collection('subscriptions', function (ref) {
              return ref.where('userId', '==', id).where('createdOn', '>', start_date).where('createdOn', '<', end_date).orderBy('createdOn', 'desc');
            }).get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this114, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee17() {
                var data;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(uid, param) {
          var _this115 = this;

          return new Promise(function (resolve, reject) {
            _this115.db.collection('users').doc(uid).update(param).then(function (data) {
              resolve(data);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getWebBanners",
        value: function getWebBanners() {
          var _this116 = this;

          return new Promise(function (resolve, reject) {
            _this116.adb.collection('websitebanners').get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getNotifications",
        value: function getNotifications(uid) {
          var _this117 = this;

          return new Promise(function (resolve, reject) {
            _this117.adb.collection('notifications', function (ref) {
              return ref.where('uid', '==', uid);
            }).get().subscribe(function (notifications) {
              var data = notifications.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getSupport",
        value: function getSupport(uid) {
          var _this118 = this;

          return new Promise(function (resolve, reject) {
            _this118.adb.collection('support', function (ref) {
              return ref.where('userid', '==', uid);
            }).get().subscribe(function (support) {
              var data = support.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addBookings",
        value: function addBookings(id, param) {
          var _this119 = this;

          param.userId = this.db.doc('users/' + param.uid);
          param.Lvid = this.db.doc('venue/' + param.Lvid);
          return new Promise(function (resolve, reject) {
            _this119.adb.collection('booking').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addSupport",
        value: function addSupport(id, param) {
          var _this120 = this;

          return new Promise(function (resolve, reject) {
            _this120.adb.collection('support').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addQuery",
        value: function addQuery(id, param) {
          var _this121 = this;

          //param.city = this.db.doc('cities/' + param.cityid);
          return new Promise(function (resolve, reject) {
            _this121.adb.collection('queries').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addCorporate",
        value: function addCorporate(id, param) {
          var _this122 = this;

          //param.city = this.db.doc('cities/' + param.cityid);
          return new Promise(function (resolve, reject) {
            _this122.adb.collection('corporate').doc(id).set(param).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addMoneyToWallet",
        value: function addMoneyToWallet(uid, param) {
          var _this123 = this;

          return new Promise(function (resolve, reject) {
            _this123.adb.collection('wallet').doc(uid).set(param, {
              merge: true
            }).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addWalletTransaction",
        value: function addWalletTransaction(id, param) {
          var _this124 = this;

          return new Promise(function (resolve, reject) {
            _this124.adb.collection('wallet_transactions').doc(id).set(param, {
              merge: true
            }).then(function (data) {
              console.log(data);
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getWallet",
        value: function getWallet(uid) {
          var _this125 = this;

          return new Promise(function (resolve, reject) {
            _this125.adb.collection('wallet', function (ref) {
              return ref.where('uid', '==', uid);
            }).get().subscribe(function (money) {
              var data = money.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getWalletTransactions",
        value: function getWalletTransactions(uid) {
          var _this126 = this;

          return new Promise(function (resolve, reject) {
            _this126.adb.collection('wallet_transactions', function (ref) {
              return ref.where('uid', '==', uid).where('status', '==', 'success').orderBy('createdAt', 'desc');
            }).get().subscribe(function (transactions) {
              var data = transactions.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getWalletTransactionsByBooking",
        value: function getWalletTransactionsByBooking(uid, booking_id) {
          var _this127 = this;

          return new Promise(function (resolve, reject) {
            _this127.adb.collection('wallet_transactions', function (ref) {
              return ref.where('uid', '==', uid).where('booking_id', '==', booking_id);
            }).get().subscribe(function (transactions) {
              var data = transactions.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(title, msg, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.restKey))
          };
          console.log(header);
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "sendSupportNotification",
        value: function sendSupportNotification(title, msg, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.restKey))
          };
          console.log(header);
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        } // satya's code 26-4-22

      }, {
        key: "getSecondaryLabsByPin",
        value: function getSecondaryLabsByPin(pincode) {
          var _this128 = this;

          return new Promise(function (resolve, reject) {
            _this128.adb.collection('venue', function (ref) {
              return ref.where("deliveries", "array-contains", pincode);
            }).get().subscribe(function (transactions) {
              var data = transactions.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getAssociatedTestByProductAndBranch",
        value: function getAssociatedTestByProductAndBranch(branch, test_id) {
          var _this129 = this;

          return new Promise(function (resolve, reject) {
            _this129.adb.collection('associated_tests', function (ref) {
              return ref.where("branch_id", "==", branch).where("individual_test", "==", test_id);
            }).get().subscribe(function (transactions) {
              var data = transactions.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;

                if (item.itid) {
                  item.itid.get().then(function (doc) {
                    item.itid = doc.data();
                  });
                }

                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getLabTestById",
        value: function getLabTestById(id) {
          var _this130 = this;

          // console.log(societyId);
          return new Promise(function (resolve, reject) {
            _this130.adb.collection('individual_tests', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (data) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this130, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee18() {
                var users;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        users = data.docs.map(function (doc) {
                          var item = doc.data();
                          item.id = doc.id;
                          return item;
                        });
                        resolve(users);

                      case 2:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              }));
            }, function (error) {
              reject(error);
            });
          });
        } // satya's code end 26-4-22
        // satya's code 28-4-22

      }, {
        key: "getVenueDetails",
        value: function getVenueDetails(id) {
          var _this131 = this;

          return new Promise(function (resolve, reject) {
            _this131.adb.collection('venue').doc(id).get().subscribe(function (venue) {
              resolve(venue.data());
            }, function (error) {
              reject(error);
            });
          });
        } // satya's code 28-4-22 end

      }, {
        key: "sendWalletNotification",
        value: function sendWalletNotification(title, msg, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.restKey))
          };
          console.log(header);
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var body = {
            email: 'saifk210@gmail.com',
            name: 'Mohd Saif Khan'
          };
          console.log(body);
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/json').set('Content-Type', 'application/x-www-form-urlencoded')
          };
          return this.http.post('https://demo.orgmachine.com/avagro_sms/phpmailer/send.php', body, header);
        }
      }, {
        key: "sendSms",
        value: function sendSms(url) {
          return this.http.post(url, '');
        }
      }, {
        key: "sendOtp",
        value: function sendOtp(phone) {
          var url = 'https://demo.orgmachine.com/way2lab_sms/otp.php?mobile=' + phone;
          return this.http.post(url, '');
        }
        /*  verifyOtp(data){
           let url = 'https://demo.orgmachine.com/verify_otp.php'
           const header = {
           headers: new HttpHeaders()
               .set('Content-Type', 'jsonp')
               .set('Content-Type','application/x-www-form-urlencoded')
           };
           return this.http.post(url,data,header);
         } */

      }, {
        key: "verifyOtp",
        value: function verifyOtp(data) {
          console.log(data);
          var url = 'https://demo.orgmachine.com/way2lab_sms/verify_otp_get.php?mobile=' + data.mobile + '&otp=' + data.otp; // let url = 'https://demo.orgmachine.com/way2lab_sms/otp.php?mobile='+phone;

          return this.http.post(url, '');
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element == "object") {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
            }
          } else {
            new_list.push(key + "=" + encodeURIComponent(element));
          }

          return new_list.join("&");
        }
      }]);

      return ApisService;
    }();

    ApisService.UNKNOWN_USER = new AuthInfo(null);

    ApisService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    ApisService = ApisService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])], ApisService);
    /***/
  },

  /***/
  "./src/app/services/razorpay.ts":
  /*!**************************************!*\
    !*** ./src/app/services/razorpay.ts ***!
    \**************************************/

  /*! exports provided: ExternalLibraryService */

  /***/
  function srcAppServicesRazorpayTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalLibraryService", function () {
      return ExternalLibraryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * Handled loading the external library ondemand into our app
     */


    var ExternalLibraryService =
    /*#__PURE__*/
    function () {
      function ExternalLibraryService(document) {
        _classCallCheck(this, ExternalLibraryService);

        this.document = document;
        this._loadedLibraries = {};
      } // forkjoin parameters will grow when we are adding any new external library into app


      _createClass(ExternalLibraryService, [{
        key: "lazyLoadLibrary",
        value: function lazyLoadLibrary(resourceURL) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([this.loadScript(resourceURL)]);
        }
      }, {
        key: "loadScript",
        value: function loadScript(url) {
          var _this132 = this;

          if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
          }

          this._loadedLibraries[url] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          var script = this.document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = url;

          script.onload = function () {
            _this132._loadedLibraries[url].next();

            _this132._loadedLibraries[url].complete();
          };

          this.document.body.appendChild(script);
          return this._loadedLibraries[url].asObservable();
        }
      }]);

      return ExternalLibraryService;
    }();

    ExternalLibraryService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    ExternalLibraryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], ExternalLibraryService);
    /***/
  },

  /***/
  "./src/app/services/screensize.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/screensize.service.ts ***!
    \************************************************/

  /*! exports provided: ScreensizeService */

  /***/
  function srcAppServicesScreensizeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreensizeService", function () {
      return ScreensizeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ScreensizeService =
    /*#__PURE__*/
    function () {
      function ScreensizeService() {
        _classCallCheck(this, ScreensizeService);

        this.isDesktop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(ScreensizeService, [{
        key: "onResize",
        value: function onResize(size) {
          if (size < 868) {
            this.isDesktop.next(false);
          } else {
            this.isDesktop.next(true);
          }
        }
      }, {
        key: "isDesktopView",
        value: function isDesktopView() {
          return this.isDesktop.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
      }]);

      return ScreensizeService;
    }();

    ScreensizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ScreensizeService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var UtilService =
    /*#__PURE__*/
    function () {
      function UtilService(loadingCtrl, adb, alertCtrl, toastCtrl, router, navCtrl, translateService) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.adb = adb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.isLoading = false;
        this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeOrderStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedInStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.badge = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.city = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.cityList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.query = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.wallet = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.cityLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stateLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "publishCityLocation",
        value: function publishCityLocation(data) {
          this.cityLocation.next(data);
        }
      }, {
        key: "subscribeCityLocation",
        value: function subscribeCityLocation() {
          return this.cityLocation;
        }
      }, {
        key: "publishStateLocation",
        value: function publishStateLocation(data) {
          this.stateLocation.next(data);
        }
      }, {
        key: "subscribeStateLocation",
        value: function subscribeStateLocation() {
          return this.stateLocation;
        }
      }, {
        key: "publishAddress",
        value: function publishAddress(data) {
          this.address.next(data);
        }
      }, {
        key: "publishReview",
        value: function publishReview(data) {
          this.review.next(data);
        }
      }, {
        key: "publishProfile",
        value: function publishProfile(data) {
          this.profile.next(data);
        }
      }, {
        key: "observeProfile",
        value: function observeProfile() {
          return this.profile;
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return this.translateService.currentLang;
        }
      }, {
        key: "publishBadge",
        value: function publishBadge(data) {
          this.badge.next(data);
        }
      }, {
        key: "subscribeBadge",
        value: function subscribeBadge() {
          return this.badge;
        }
      }, {
        key: "publishCity",
        value: function publishCity(data) {
          this.city.next(data);
        }
      }, {
        key: "subscribeCity",
        value: function subscribeCity() {
          return this.city;
        }
      }, {
        key: "publishCityList",
        value: function publishCityList(data) {
          this.cityList.next(data);
        }
      }, {
        key: "subscribeCityList",
        value: function subscribeCityList() {
          return this.cityList;
        }
      }, {
        key: "publishQuery",
        value: function publishQuery(data) {
          this.query.next(data);
        }
      }, {
        key: "subscribeQuery",
        value: function subscribeQuery() {
          return this.query;
        }
      }, {
        key: "getReviewObservable",
        value: function getReviewObservable() {
          return this.review;
        }
      }, {
        key: "publishLocation",
        value: function publishLocation(data) {
          this.changeLocation.next(data);
        }
      }, {
        key: "subscribeLocation",
        value: function subscribeLocation() {
          return this.changeLocation;
        }
      }, {
        key: "publishOrderStatus",
        value: function publishOrderStatus(data) {
          this.changeOrderStatus.next(data);
        }
      }, {
        key: "subscribeOrderStatus",
        value: function subscribeOrderStatus() {
          return this.changeOrderStatus;
        }
      }, {
        key: "publishLoggedIn",
        value: function publishLoggedIn(data) {
          this.loggedIn.next(data);
        }
      }, {
        key: "subscribeLoggedIn",
        value: function subscribeLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "publishLoggedInStatus",
        value: function publishLoggedInStatus(data) {
          this.loggedInStatus.next(data);
        }
      }, {
        key: "subscribeLoggedInStatus",
        value: function subscribeLoggedInStatus() {
          return this.loggedInStatus;
        }
      }, {
        key: "publishWalletStatus",
        value: function publishWalletStatus(data) {
          this.wallet.next(data);
        }
      }, {
        key: "subscribeWalletStatus",
        value: function subscribeWalletStatus() {
          return this.wallet;
        }
      }, {
        key: "translate",
        value: function translate(str) {
          var currentLang = this.translateService.currentLang;
          var returnValue = this.translateService.translations[currentLang][str];

          if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
          } else {
            return returnValue;
          }
        }
      }, {
        key: "translateInEN",
        value: function translateInEN(str) {
          var currentLang = 'en';
          var returnValue = this.translateService.translations[currentLang][str];

          if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
          } else {
            return returnValue;
          }
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.code;
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.symbol;
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.address;
        }
      }, {
        key: "publishCoupon",
        value: function publishCoupon(data) {
          this.coupon.next(data);
        }
      }, {
        key: "getCouponObservable",
        value: function getCouponObservable() {
          return this.coupon;
        }
      }, {
        key: "setOrders",
        value: function setOrders(data) {
          this.orders = null;
          this.orders = data;
        }
      }, {
        key: "gerOrder",
        value: function gerOrder() {
          return this.orders;
        }
      }, {
        key: "show",
        value: function show(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this133 = this;

            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    this.isLoading = true;
                    _context19.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this133.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context19.abrupt("return", _context19.sent);

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.isLoading = false;
                    _context20.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context20.abrupt("return", _context20.sent);

                  case 4:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var alert;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context21.sent;
                    _context21.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var alert;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context22.sent;
                    _context22.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "showLoginAlert",
        value: function showLoginAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            var _this134 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.alertCtrl.create({
                      header: 'Hold on!',
                      backdropDismiss: true,
                      message: 'You must me logged in before report an issue. It will take not more than 30 seconds.',
                      cssClass: 'loginAlert',
                      buttons: [// {
                      //   text: 'SIGNUP',
                      //   cssClass: 'signup',
                      //   handler: (data) => {
                      //     this.router.navigate(['/register']);
                      //   }
                      // }, 
                      {
                        text: 'SIGNIN',
                        cssClass: 'signin',
                        handler: function handler(data) {
                          _this134.router.navigate(['/login']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context23.sent;
                    _context23.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var alert;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context24.sent;
                    _context24.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var emailfilter, _alert;

            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context25.next = 10;
                      break;
                    }

                    _context25.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    _alert = _context25.sent;
                    _context25.next = 7;
                    return _alert.present();

                  case 7:
                    return _context25.abrupt("return", false);

                  case 10:
                    return _context25.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
           color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            var toast;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: colors,
                      position: positon
                    });

                  case 2:
                    toast = _context26.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "showNotification",
        value: function showNotification(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var toast;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: colors,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context27.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            var toast;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context28.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          // console.log('Error got in service =>', err)
          if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
          }
        } // setDetails(data) {
        //   this.details = null;
        //   this.details = data;
        // }
        // getDetails() {
        //   return this.details;
        // }

      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], UtilService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAAObtjK85LU9q0X1M4UbAxZkwVbLB8MwE",
        authDomain: "way2lab-c6a78.firebaseapp.com",
        databaseURL: "https://way2lab-c6a78-default-rtdb.firebaseio.com",
        projectId: "way2lab-c6a78",
        storageBucket: "way2lab-c6a78.appspot.com",
        messagingSenderId: "234710310694",
        appId: "1:234710310694:web:a4a0bd1858ca50b8616be7",
        measurementId: "G-4EYR9RKGNF"
      },
      onesignal: {
        appId: 'e7539e5b-8c9e-4e77-bf60-8e69cdd4610a',
        googleProjectNumber: '171123431837',
        restKey: 'ZDBlMzczNmMtZWVjNy00Y2JlLWJmNzYtZDg5MTUwNmI2N2Jk'
      },
      razorpay: {
        api_key: 'rzp_live_AfyRrK26XIb4dg'
      },
      general: {
        symbol: '₹',
        code: 'INR'
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\project\way2lab\Webfinal\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map