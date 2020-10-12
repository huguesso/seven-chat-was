webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n\n.top-nav {\n    background-color: white;\n    /*color: #8cc83c;*/\n    color: #273977;\n}\n\n.mat-toolbar.mat-primary{\n    background: #273977 !important;\n}\n\n.page-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    min-height: 95vh !important;\n}\n\nmat-sidenav-container {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n}\n\nmat-sidenav {\n    width: 250px;\n    background-color: #8cc83c !important;\n}\n\nli .glyphicon {\n    margin-right: 10px;\n}\n\n\n@media (min-width: 768px) {\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n    }\n\n    .navbar-header {\n        float: left;\n        width: auto;\n        margin: 0 10px;\n    }\n\n    .navbar-collapse {\n        padding: 0px;\n    }\n\n    .navbar ul {\n        float: none;\n    }\n\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        transition: all .3s;\n    }\n\n        .navbar li a {\n            padding: 10px 16px;\n            color: white;\n            transition: all .3s;\n        }\n\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n\n.navbar-brand {\n    color: white;\n}\n\n.navbar-btn {\n    background-color: transparent;\n    color: white;\n    font-size: 24px;\n    padding: 0;\n    margin: 7px 0 10px 0;\n    float: left;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n    text-decoration: none;\n    background-color: #8cc83c !important;\n    color: white !important;\n}\n\n.nav-menu-wrapper {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    height: 100%;\n    padding: 0px\n}\n\n.title-bar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    height: 50px;\n    padding: 0px\n}\n\n.nav-menu-item-active a {\n    color: #8cc83c !important;\n    background-color: white;\n}\n\n    .nav-menu-item-active a :hover, .nav-menu-item-active a :active {\n        color: lightgray !important;\n    }\n\n.body-wrapper {\n    position: fixed;\n    top: 50px;\n    right: 0;\n    z-index: 1;\n    height: 100%;\n    padding: 0px;\n    width: 100%;\n}\n\n.title-bar-header {\n    margin: 0 0 5px 10px\n}\n\n.fullpage-loading-spinner {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.6);\n    width: 100%;\n    top: 0;\n    left: 0;\n    height: 100%;\n}\n\n    .fullpage-loading-spinner > mat-spinner {\n        text-align: center;\n        margin: auto;\n        height: 100%;\n    }\n\n    .fullpage-loading-spinner > button {\n        text-align: center;\n        margin: 40px;\n        height: 100%;\n        color: white;\n    }\n\n.navbar-actions {\n    float: right;\n    padding: 9px 0;\n    margin-right: 10px;\n}\n\n    .navbar-actions > button {\n        background-color: #8cc83c;\n        color: white;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n    <router-outlet></router-outlet>\n    <div class=\"fullpage-loading-spinner\" [hidden]=\"!loading()\">\n        <mat-spinner></mat-spinner>\n        <button mat-button (click)=\"hideLoading()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(global, router, dialog) {
        this.global = global;
        this.router = router;
        this.dialog = dialog;
    }
    AppComponent.prototype.loading = function () {
        return this.global.loading;
    };
    AppComponent.prototype.hideLoading = function () {
        this.global.loading = false;
    };
    AppComponent.prototype.goto = function (path) {
        this.router.navigateByUrl(path);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_manage_users_manage_users_module__ = __webpack_require__("../../../../../src/app/components/manage-users/manage-users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_studio_studio_module__ = __webpack_require__("../../../../../src/app/components/studio/studio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_analytics_analytics_module__ = __webpack_require__("../../../../../src/app/components/analytics/analytics.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_hotkeys__ = __webpack_require__("../../../../angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_deploy_deploy_module__ = __webpack_require__("../../../../../src/app/components/deploy/deploy.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var APP_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'manage-users',
        children: __WEBPACK_IMPORTED_MODULE_5__components_manage_users_manage_users_module__["a" /* MANAGE_USERS_ROUTES */]
    },
    {
        path: 'studio',
        children: __WEBPACK_IMPORTED_MODULE_6__components_studio_studio_module__["a" /* STUDIO_ROUTES */]
    },
    {
        path: 'deploy',
        children: __WEBPACK_IMPORTED_MODULE_9__components_deploy_deploy_module__["a" /* DEPLOY_ROUTES */]
    },
    {
        path: 'analytics',
        children: __WEBPACK_IMPORTED_MODULE_7__components_analytics_analytics_module__["a" /* ANALYTICS_ROUTES */]
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: 'home' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_manage_users_manage_users_module__["b" /* ManageUsersModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_studio_studio_module__["b" /* StudioModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_analytics_analytics_module__["b" /* AnalyticsModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_deploy_deploy_module__["b" /* DeployModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES, {
                    useHash: true
                }),
                __WEBPACK_IMPORTED_MODULE_8_angular2_hotkeys__["HotkeyModule"].forRoot({
                    cheatSheetCloseEsc: true,
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/analytics/analytics-frame/analytics-frame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ana-analytics-iframe {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100vw;\n    height: calc(100vh - 70px);\n    border: none;\n    top: 70px;\n}\n\n:host {\n    width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/analytics/analytics-frame/analytics-frame.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar #appHeader [title]=\"'Ana Analytics'\" [skipAuth]=\"false\" [logoutNavigation]=\"'/'\"></app-header-bar>\n<iframe [src]=\"iframeUrl\" #analyticsFrame scrolling=\"yes\" class=\"ana-analytics-iframe\"></iframe>"

/***/ }),

/***/ "../../../../../src/app/components/analytics/analytics-frame/analytics-frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsFrameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanActivateAnalyticsFrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_header_bar_app_header_bar_component__ = __webpack_require__("../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AnalyticsFrameComponent = (function () {
    function AnalyticsFrameComponent(sanitizer, globals, router, infoDialog, route) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.globals = globals;
        this.router = router;
        this.infoDialog = infoDialog;
        this.route = route;
        this.iframeUrl = "";
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        console.log('AnalyticsFrameComponent');
        this.route.queryParams.subscribe(function (x) {
            console.log('Params of analytics frame');
            console.log(x);
            if (x['apiBase'] && x['businessId'] && x['businessName'] && x['chatFlowId']) {
                var initialUrl = "/index.html#/?apiBase=" + encodeURIComponent(x['apiBase']) + "&businessId=" + x['businessId'] + "&businessName=" + encodeURIComponent(x['businessName']) + "&chatFlowId=" + x['chatFlowId'];
                var url = "analytics-dashboard" + initialUrl;
                if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].local)
                    url = "http://localhost:4202" + initialUrl;
                console.log('Analytics Frame Url');
                console.log(url);
                _this.iframeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
        });
    }
    AnalyticsFrameComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.appHeader) {
            this.appHeader.goBack = function () {
                _this.infoDialog.confirm('Go back to home page?', 'Are you sure you want to exit from analytics and go back to home page?', function (ok) {
                    if (ok) {
                        _this.router.navigateByUrl('');
                    }
                });
            };
        }
    };
    AnalyticsFrameComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__shared_app_header_bar_app_header_bar_component__["a" /* AppHeaderBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_app_header_bar_app_header_bar_component__["a" /* AppHeaderBarComponent */])
    ], AnalyticsFrameComponent.prototype, "appHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('analyticsFrame'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AnalyticsFrameComponent.prototype, "analyticsFrame", void 0);
    AnalyticsFrameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-analytics-frame',
            template: __webpack_require__("../../../../../src/app/components/analytics/analytics-frame/analytics-frame.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/analytics/analytics-frame/analytics-frame.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], AnalyticsFrameComponent);
    return AnalyticsFrameComponent;
}());

var CanActivateAnalyticsFrameComponent = (function () {
    function CanActivateAnalyticsFrameComponent(dataService) {
        this.dataService = dataService;
    }
    CanActivateAnalyticsFrameComponent.prototype.canActivate = function (route, state) {
        return true; //this.dataService.isSuperAdmin()
    };
    CanActivateAnalyticsFrameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]])
    ], CanActivateAnalyticsFrameComponent);
    return CanActivateAnalyticsFrameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/analytics/analytics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANALYTICS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_frame_analytics_frame_component__ = __webpack_require__("../../../../../src/app/components/analytics/analytics-frame/analytics-frame.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ANALYTICS_ROUTES = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__analytics_frame_analytics_frame_component__["a" /* AnalyticsFrameComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__analytics_frame_analytics_frame_component__["b" /* CanActivateAnalyticsFrameComponent */]]
    }
];
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__analytics_frame_analytics_frame_component__["a" /* AnalyticsFrameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__analytics_frame_analytics_frame_component__["b" /* CanActivateAnalyticsFrameComponent */]
            ]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/deploy/deploy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEPLOY_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeployModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_deploy_landing_deploy_landing_component__ = __webpack_require__("../../../../../src/app/components/deploy/landing/deploy-landing/deploy-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DEPLOY_ROUTES = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__landing_deploy_landing_deploy_landing_component__["a" /* DeployLandingComponent */]
    }
];
var DeployModule = (function () {
    function DeployModule() {
    }
    DeployModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing_deploy_landing_deploy_landing_component__["a" /* DeployLandingComponent */]
            ],
            entryComponents: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_module__["a" /* SharedModule */]
            ],
            schemas: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_highlight_js__["HighlightJsService"]
            ]
        })
    ], DeployModule);
    return DeployModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/deploy/landing/deploy-landing/deploy-landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\nmat-form-field, mat-select {\n    width: 100%;\n}\n\n.bottom-actions > button {\n    margin: 20px 10px;\n}\n\nbutton[color=\"primary\"] {\n    color: white;\n}\n\nmat-action-row > button {\n    margin: 10px;\n}\n\n.bottom-actions {\n    display: block;\n    text-align: center;\n}\n\n.list-action-btn {\n    float: right;\n}\n\n.list-item {\n    width: 100%\n}\n\n.mat-expansion-panel-body {\n    display: none !important;\n}\n\n.app-content {\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0;\n    padding-bottom: 40px;\n}\n\n.page-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n    .page-title .text {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n    }\n\n.page-title-actions button:first-child {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.table-body {\n    padding: 10px 0;\n}\n\nsection.control {\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n.radio-grp {\n    margin-top: 0 !important;\n    margin-bottom: 20px !important;\n}\n\n.left-header {\n    margin-bottom: 19px;\n    margin-top: 19px;\n    margin-left: -2px;\n}\n\nlabel {\n    font-weight: normal;\n    font-size: small;\n    opacity: 0.9;\n}\n\n.highlight-container {\n    margin-bottom: 10px;\n}\n\n.highlight {\n    border-radius: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/deploy/landing/deploy-landing/deploy-landing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar #appHeader [title]=\"'SDK Configuration'\" [skipAuth]=\"true\" [logoutNavigation]=\"\"></app-header-bar>\n<div class=\"app-content\">\n    <div class=\"center-block center-content\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <h4 class=\"left-header\">\n                    Customizations\n                </h4>\n                <mat-form-field>\n                    <input matInput type=\"url\" placeholder=\"Web SDK URL\" [(ngModel)]=\"webOptions.websdkUrl\" name=\"websdkUrl\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"url\" placeholder=\"Web sockets URL\" [(ngModel)]=\"webOptions.webSocketsUrl\" name=\"webSocketsUrl\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"url\" placeholder=\"Logo URL\" [(ngModel)]=\"webOptions.logoUrl\" name=\"webLogoUrl\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Color\" [(ngModel)]=\"webOptions.accentColor\" name=\"webColor\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"webOptions.title\" name=\"webTitle\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Description\" [(ngModel)]=\"webOptions.desc\" name=\"webDesc\">\n                </mat-form-field>\n                <section class=\"control radio-grp\">\n                    <label>Chat window placement</label>\n                    <mat-radio-group [(ngModel)]=\"webOptions.isFullPage\">\n                        <mat-radio-button [value]=\"true\">Center - full page</mat-radio-button>\n                        <mat-radio-button [value]=\"false\">Right bottom - minimized</mat-radio-button>\n                    </mat-radio-group>\n                </section>\n\n                <section class=\"control\" [hidden]=\"webOptions.isFullPage\">\n                    <mat-slide-toggle #webAutoOpenCheck [(ngModel)]=\"enableAutoOpen\" name=\"webAutoOpenCheck\">Auto open</mat-slide-toggle>\n                </section>\n\n                <mat-form-field *ngIf=\"enableAutoOpen && !webOptions.isFullPage\">\n                    <input matInput type=\"text\" placeholder=\"Auto open\" [(ngModel)]=\"webOptions.autoOpenSecs\" name=\"webAutoOpenSecs\">\n                    <mat-hint> in seconds </mat-hint>\n                </mat-form-field>\n\n                <section class=\"control\">\n                    <mat-slide-toggle name=\"webAllowChatReset\" [(ngModel)]=\"webOptions.allowChatReset\">Allow chat reset</mat-slide-toggle>\n                </section>\n                <section class=\"control\">\n                    <mat-slide-toggle name=\"webHtmlMessages\" [(ngModel)]=\"webOptions.enableHtmlMessages\">Enable HTML in messages</mat-slide-toggle>\n                </section>\n                <section class=\"control\">\n                    <mat-slide-toggle name=\"webShowAnaBranding\" [(ngModel)]=\"webOptions.showPoweredByAna\">Show 'powered by ana'</mat-slide-toggle>\n                </section>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Height\" [(ngModel)]=\"webOptions.height\" name=\"webHeight\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Width\" [(ngModel)]=\"webOptions.width\" name=\"webWidth\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Foreground color\" [(ngModel)]=\"webOptions.foregroundColor\" name=\"webForegroundColor\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Secondary color\" [(ngModel)]=\"webOptions.foregroundColor\" name=\"webForegroundColor\">\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-9\">\n                <mat-tab-group>\n                    <mat-tab label=\"Web\" >\n                        <div class=\"table-body\">\n                            <p>\n                                Please use the following HTML code snippet to enable Ana web chat on your web page:\n                            </p>\n                            <div highlight-js-content=\".highlight\" class=\"highlight-container\">\n                                <div class=\"html highlight\" [innerText]=\"webSnippet\"></div>\n                            </div>\n                            <button mat-raised-button color=\"primary\" ngxClipboard [cbContent]=\"webSnippet\" (cbOnSuccess)=\"copied()\"> Copy </button>\n                            <button mat-raised-button (click)=\"preview()\"> Preview </button>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Android\" class=\"table-body\">\n                        <div class=\"table-body\">\n                            Please follow the instructions for configuring Ana Android SDK <a href=\"javascript:;\" (click)=\"open('https://github.com/Kitsune-tools/ANAChat-Android')\">here</a>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"iOS\">\n                        <div class=\"table-body\">\n                            Please follow the instructions for configuring Ana iOS SDK <a href=\"javascript:;\" (click)=\"open('https://github.com/Kitsune-tools/ANAChat-iOS')\">here</a>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/deploy/landing/deploy-landing/deploy-landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeployLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_electron__ = __webpack_require__("../../../../ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeployLandingComponent = (function () {
    function DeployLandingComponent(el, highlight, electron, snakbar, route, dataService) {
        var _this = this;
        this.el = el;
        this.highlight = highlight;
        this.electron = electron;
        this.snakbar = snakbar;
        this.route = route;
        this.dataService = dataService;
        this.webOptions = {
            accentColor: 'red',
            allowChatReset: true,
            autoOpenSecs: 0,
            businessId: '',
            flowId: '',
            desc: '',
            enableHtmlMessages: true,
            foregroundColor: 'white',
            secondaryColor: 'black',
            gmapsKey: '',
            height: '70%',
            width: '360px',
            isFullPage: false,
            logoUrl: 'https://www.ana.chat/favicon.ico',
            showPoweredByAna: false,
            title: 'Ana chatbot',
            websdkUrl: '',
            webSocketsUrl: '',
        };
        this.count = 0;
        this.route.queryParams.subscribe(function (x) {
            if (x && x['businessId']) {
                _this.webOptions.businessId = x['businessId'];
            }
            if (x && x['chatFlowId']) {
                _this.webOptions.flowId = x['chatFlowId'];
            }
            if (_this.webOptions.businessId && _this.webOptions.flowId) {
                _this.loadSavedOptions();
            }
        });
    }
    DeployLandingComponent.prototype.ngOnInit = function () {
    };
    DeployLandingComponent.prototype.ngAfterViewInit = function () {
        this.ele = this.el.nativeElement.querySelector('.highlight');
        this.highlight.highlight(this.ele);
    };
    DeployLandingComponent.prototype.open = function (url) {
        if (this.electron.isElectronApp) {
            this.electron.shell.openExternal(url);
        }
        else {
            window.open(url, '_blank');
        }
    };
    DeployLandingComponent.prototype.openElectronWindow = function (url) {
        if (!this.electron.isElectronApp) {
            window.open(url);
            return;
        }
        var win = new this.electron.remote.BrowserWindow();
        win.on('closed', function () {
            win = null;
        });
        win.loadURL(url);
    };
    DeployLandingComponent.prototype.copied = function () {
        this.snakbar.open("Code copied", "dismiss", {
            duration: 1500
        });
    };
    DeployLandingComponent.prototype.loadSavedOptions = function () {
        var key = __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"].hashStr(JSON.stringify(this.dataService.chatServer.ServerUrl) + "|" + this.webOptions.businessId + "|" + this.webOptions.flowId);
        var savedVal = localStorage.getItem(key);
        if (savedVal) {
            this.webOptions = JSON.parse(savedVal);
        }
    };
    DeployLandingComponent.prototype.saveOptions = function () {
        var key = __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"].hashStr(JSON.stringify(this.dataService.chatServer.ServerUrl) + "|" + this.webOptions.businessId + "|" + this.webOptions.flowId);
        localStorage.setItem(key, JSON.stringify(this.webOptions));
    };
    DeployLandingComponent.prototype.n = function (v) {
        return (v ? v : '');
    };
    DeployLandingComponent.prototype.preview = function () {
        var src = "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Ana web chat preview</title>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n" + this.webSnippet + "\n</body>\n</html>";
        var url = "data:text/html;base64," + btoa(src);
        this.openElectronWindow(url);
    };
    Object.defineProperty(DeployLandingComponent.prototype, "webSnippet", {
        get: function () {
            var _this = this;
            try {
                var newVal = JSON.stringify(this.webOptions);
                if (!this._oldVal || this._oldVal != newVal) {
                    setTimeout(function () {
                        _this.highlight.highlight(_this.ele);
                        _this.saveOptions();
                    }, 0);
                    this._oldVal = newVal;
                }
            }
            catch (e) { }
            return "<script type=\"text/javascript\" id=\"ana-web-chat-script\"\n\nsrc=\"" + this.n(this.webOptions.websdkUrl) + "assets/embed/ana-web-chat-plugin.js\" \nana-api-endpoint=\"" + this.n(this.dataService.chatServer).ServerUrl + "\"\nana-endpoint=\"" + this.n(this.webOptions.webSocketsUrl) + "/wscustomers/chatcustomers-websocket\"\nana-iframe-src=\"" + this.n(this.webOptions.websdkUrl) + "index.html\"\nana-businessid=\"" + this.n(this.webOptions.businessId) + "\"\nana-flowid=\"" + this.n(this.webOptions.flowId) + "\"\n\nana-logo-url=\"" + this.n(this.webOptions.logoUrl) + "\"\nana-primary-bg=\"" + this.n(this.webOptions.accentColor) + "\"\nana-agent-name=\"" + this.n(this.webOptions.title) + "\"\nana-agent-desc=\"" + this.n(this.webOptions.desc) + "\"\nana-frame-height=\"" + this.n(this.webOptions.height) + "\"\nana-frame-width=\"" + this.n(this.webOptions.width) + "\"\n\nana-primary-fg=\"" + this.n(this.webOptions.foregroundColor) + "\"\nana-secondary-bg=\"" + this.n(this.webOptions.secondaryColor) + "\"\nana-gmaps-key=\"" + this.n(this.webOptions.gmapsKey) + "\"\n\n" + (this.webOptions.isFullPage ? '\nana-fullpage="true"' : '') + " " + (this.webOptions.allowChatReset ? '\nana-allow-chat-reset="true"' : '') + " " + (this.webOptions.enableHtmlMessages ? '\nana-html-messages="true"' : '') + " " + (this.webOptions.showPoweredByAna ? '\nana-show-branding="true"' : '') + " " + (this.webOptions.autoOpenSecs ? '\nana-auto-open="' + this.webOptions.autoOpenSecs + '"' : '') + ">\n</script>";
        },
        enumerable: true,
        configurable: true
    });
    DeployLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deploy-landing',
            template: __webpack_require__("../../../../../src/app/components/deploy/landing/deploy-landing/deploy-landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/deploy/landing/deploy-landing/deploy-landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__["HighlightJsService"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_electron__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], DeployLandingComponent);
    return DeployLandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%;\n}\n\n.container {\n    padding: 30px;\n    width: 100vw;\n}\n\n.button-row > .mat-raised-button {\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 180px;\n    width: 200px;\n    font-size: 18px;\n}\n\n.btn-studio svg {\n    width: 84px;\n    height: 84px;\n    margin-left: 4px;\n}\n\n.btn-user-management svg {\n    width: 84px;\n    height: 84px;\n    margin-left: 4px;\n}\n\n.feature-button {\n    color: #8cc83c !important;\n    background-color: white !important;\n}\n\n    .feature-button svg path {\n        fill: #8cc83c !important;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar [skipAuth]=\"true\" [title]=\"'Seven Auto Bot'\" [hideBackButton]=\"true\" #appHeader></app-header-bar>\n\n<div class=\"container\">\n    <div class=\"button-row\">\n        <button mat-raised-button (click)=\"studio()\" color=\"primary\" class=\"feature-button btn-studio\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 391.758 391.758\"><path fill=\"white\" d=\"M269.333 367.273h-15.052c-8.974 0-16.068-9.769-18.113-15.346-1.114-3.042-2.167-10.082-2.834-15.26h-74.911c-.667 5.179-1.72 12.218-2.834 15.26-2.044 5.576-9.139 15.346-18.113 15.346h-15.052c-3.379 0-6.121 2.742-6.121 6.121s2.742 6.121 6.121 6.121h146.909a6.123 6.123 0 0 0 6.121-6.121 6.123 6.123 0 0 0-6.121-6.121zm110.182-97.94c0 6.764-5.478 12.242-12.242 12.242H24.485c-6.764 0-12.242-5.478-12.242-12.242V36.727c0-6.764 5.478-12.242 12.242-12.242h342.788c6.764 0 12.242 5.478 12.242 12.242v232.606zm-183.636 42.849c-3.379 0-6.121-2.742-6.121-6.121s2.742-6.121 6.121-6.121 6.121 2.742 6.121 6.121-2.742 6.121-6.121 6.121zm171.394-299.94H24.485C10.963 12.242 0 23.206 0 36.727V306.06c0 13.522 10.963 24.485 24.485 24.485h342.788c13.522 0 24.485-10.963 24.485-24.485V36.727c0-13.521-10.964-24.485-24.485-24.485zm-299.94 48.97h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v18.364h-48.97v6.121h48.97v12.242h6.121V67.333h299.939v-6.121H67.333zm217.303 55.091H254.03a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm85.697 24.485h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm-42.848 0h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.063 3.063 0 0 0-3.061-3.061zm-42.849 0H254.03a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm-39.788 15.303v-12.242a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061zm3.061 82.636h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm-42.848 0h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.063 3.063 0 0 0-3.061-3.061zm-42.849 0h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zM202 156.091v-12.242a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061zm-42.848 0v-12.242a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.063 3.063 0 0 0 3.061-3.061zm-45.91-15.303H82.636a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm97.94-6.121h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061zm-45.909-3.061a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242zm205.06 58.152h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm-42.848 0h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.063 3.063 0 0 0-3.061-3.061zm-42.849 0H254.03a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061v-12.242a3.062 3.062 0 0 0-3.061-3.061zm-116.303-79.576h30.606a3.062 3.062 0 0 0 3.061-3.061V94.879a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.063 3.063 0 0 0 3.061 3.061zm-42.848 0h30.606a3.062 3.062 0 0 0 3.061-3.061V94.879a3.062 3.062 0 0 0-3.061-3.061h-30.606a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061zm-12.243-18.364H82.636a3.062 3.062 0 0 0-3.061 3.061v12.242a3.062 3.062 0 0 0 3.061 3.061h30.606a3.062 3.062 0 0 0 3.061-3.061V94.879a3.062 3.062 0 0 0-3.061-3.061z\" /></svg>\n            <br /><span>Studio</span>\n        </button>\n        <button mat-raised-button (click)=\"userManagement()\" color=\"primary\" class=\"feature-button btn-user-management\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"white\" d=\"M48.355 17.922c3.705 2.323 6.303 6.254 6.776 10.817a11.69 11.69 0 0 0 4.966 1.112c6.491 0 11.752-5.261 11.752-11.751 0-6.491-5.261-11.752-11.752-11.752-6.429.002-11.644 5.169-11.742 11.574zm-7.699 24.062c6.491 0 11.752-5.262 11.752-11.752s-5.262-11.751-11.752-11.751c-6.49 0-11.754 5.262-11.754 11.752s5.264 11.751 11.754 11.751zm4.985.801h-9.972c-8.297 0-15.047 6.751-15.047 15.048v12.195l.031.191.84.263c7.918 2.474 14.797 3.299 20.459 3.299 11.059 0 17.469-3.153 17.864-3.354l.785-.397h.084V57.833c.003-8.297-6.747-15.048-15.044-15.048zm19.443-12.132h-9.895a14.483 14.483 0 0 1-4.47 10.088c7.375 2.193 12.771 9.032 12.771 17.11v3.758c9.77-.358 15.4-3.127 15.771-3.313l.785-.398h.084V45.699c0-8.296-6.75-15.046-15.046-15.046zm-45.049-.8c2.299 0 4.438-.671 6.25-1.814a14.544 14.544 0 0 1 5.467-9.276c.012-.22.033-.438.033-.66 0-6.491-5.262-11.752-11.75-11.752-6.492 0-11.752 5.261-11.752 11.752 0 6.488 5.26 11.75 11.752 11.75zm10.554 10.888a14.492 14.492 0 0 1-4.467-10.032c-.367-.027-.73-.056-1.104-.056h-9.971C6.75 30.653 0 37.403 0 45.699v12.197l.031.188.84.265c6.352 1.983 12.021 2.897 16.945 3.185v-3.683c.002-8.078 5.396-14.915 12.773-17.11z\" /></svg>\n            <br /><span>User Management</span>\n        </button>\n    </div>\n    <div class=\"button-row\">\n        <button mat-raised-button (click)=\"analytics()\" color=\"primary\" class=\"feature-button btn-analytics\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"84\" height=\"84\">\n                <path d=\"M82.25 80.5H1.75a1.75 1.75 0 0 0 0 3.5h80.5a1.75 1.75 0 0 0 0-3.5z\" fill=\"#fff\" />\n                <path d=\"M15.75 59.5H5.25a1.75 1.75 0 0 0-1.75 1.751v21c0 .966.784 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75v-21a1.75 1.75 0 0 0-1.75-1.75zM14 80.5H7V63h7v17.5zM36.75 42h-10.5a1.75 1.75 0 0 0-1.75 1.751v38.5c0 .966.784 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75v-38.5a1.75 1.75 0 0 0-1.75-1.75zM35 80.5h-7v-35h7v35zM57.75 49h-10.5a1.75 1.75 0 0 0-1.75 1.751v31.5c0 .966.784 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75v-31.5a1.75 1.75 0 0 0-1.75-1.75zM56 80.5h-7v-28h7v28zM78.75 28.001h-10.5a1.75 1.75 0 0 0-1.75 1.75v52.5c0 .966.784 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75v-52.5a1.75 1.75 0 0 0-1.75-1.75zM77 80.501h-7v-49h7v49zM10.5 31.5c-3.86 0-7 3.14-7 7.001 0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7zm0 10.5A3.503 3.503 0 0 1 7 38.502c0-1.929 1.568-3.5 3.5-3.5s3.5 1.572 3.5 3.5-1.568 3.5-3.5 3.5zM31.5 14c-3.86 0-7 3.14-7 7 0 3.861 3.14 7.001 7 7.001s7-3.14 7-7-3.14-7-7-7zm0 10.5A3.503 3.503 0 0 1 28 21c0-1.928 1.568-3.499 3.5-3.499s3.5 1.572 3.5 3.5-1.568 3.5-3.5 3.5zM52.5 21c-3.86 0-7 3.14-7 7.001 0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7zm0 10.5a3.503 3.503 0 0 1-3.5-3.499c0-1.929 1.568-3.5 3.5-3.5s3.5 1.572 3.5 3.5-1.568 3.5-3.5 3.5zM73.5.001c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 10.5a3.503 3.503 0 0 1-3.5-3.5c0-1.929 1.568-3.5 3.5-3.5s3.5 1.572 3.5 3.5-1.568 3.5-3.5 3.5z\" fill=\"#fff\" />\n                <path d=\"M71.029 9.472a1.751 1.751 0 0 0-2.475 0l-13.58 13.58a1.751 1.751 0 0 0 0 2.474c.344.34.791.511 1.24.511.444 0 .892-.168 1.235-.51l13.58-13.58a1.751 1.751 0 0 0 0-2.475zM48.268 23.962l-11.242-3.206a1.733 1.733 0 0 0-2.16 1.204 1.75 1.75 0 0 0 1.201 2.163L47.31 27.33a1.751 1.751 0 0 0 .96-3.367zM28.77 23.181a1.75 1.75 0 0 0-2.457-.28L13.118 33.422a1.749 1.749 0 0 0 1.092 3.119c.381 0 .766-.126 1.088-.378l13.195-10.521a1.749 1.749 0 0 0 .277-2.46z\" fill=\"#fff\" />\n            </svg>\n            <br /><span>Analytics</span>\n        </button>\n        <button mat-raised-button (click)=\"deploy()\" color=\"primary\" class=\"feature-button btn-user-management\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.8 72.8c-5.403 0-9.8 4.397-9.8 9.8 0 .774.626 1.4 1.4 1.4h16.8c.774 0 1.4-.626 1.4-1.4 0-5.403-4.397-9.8-9.8-9.8zm-6.859 8.4A7.009 7.009 0 0 1 8.4 75.754V78.4h2.8v-2.646a7.01 7.01 0 0 1 5.459 5.446H2.94zM82.6 60.2h-2.456a14.695 14.695 0 0 0-.243-.582l1.737-1.738a1.398 1.398 0 0 0 0-1.98L75.7 49.963a1.377 1.377 0 0 0-1.051-.398c2.219-1.177 3.752-3.483 3.752-6.164V7c0-3.86-3.14-7-7-7H7C3.14 0 0 3.14 0 7v36.4c0 3.86 3.14 7 7 7h18.27l-5.29 9.8H17.5a4.905 4.905 0 0 0-4.9 4.9c0 2.702 2.198 4.9 4.9 4.9h30.1c0 .774.626 1.4 1.4 1.4h2.456c.077.195.156.388.243.582l-1.737 1.738a1.398 1.398 0 0 0 0 1.98l5.939 5.938a1.398 1.398 0 0 0 1.98 0l1.737-1.737c.194.087.387.166.582.243V82.6c0 .774.626 1.4 1.4 1.4H70c.774 0 1.4-.626 1.4-1.4v-2.456c.195-.077.388-.156.582-.243l1.738 1.737a1.398 1.398 0 0 0 1.98 0l5.938-5.939a1.398 1.398 0 0 0 0-1.98l-1.737-1.737c.087-.194.166-.387.243-.582H82.6c.774 0 1.4-.626 1.4-1.4v-8.4c0-.774-.626-1.4-1.4-1.4zM2.8 7c0-2.316 1.884-4.2 4.2-4.2h64.4c2.316 0 4.2 1.884 4.2 4.2v29.4H2.8V7zM7 47.6a4.205 4.205 0 0 1-4.2-4.2v-4.2h72.8v4.2c0 2.316-1.884 4.2-4.2 4.2H7zm66.702 2.38l-1.72 1.72a14.695 14.695 0 0 0-.582-.244V50.4c.81 0 1.576-.165 2.302-.42zM60.2 50.4v1.056c-.195.077-.388.156-.582.243l-1.3-1.299H60.2zm-4.739 0l-1.207 1.207-.822-1.207h2.029zM47.6 67.2H17.5c-1.158 0-2.1-.942-2.1-2.1 0-1.158.942-2.1 2.1-2.1h30.1v4.2zm-24.438-7.001l5.289-9.799h21.593l2.196 3.221-2.278 2.278a1.398 1.398 0 0 0 0 1.98l1.737 1.737c-.087.195-.166.388-.243.583H23.162zM81.2 68.6h-2.043a1.4 1.4 0 0 0-1.335.979c-.213.676-.5 1.365-.854 2.042a1.4 1.4 0 0 0 .252 1.638l1.45 1.45-3.959 3.96-1.45-1.45a1.403 1.403 0 0 0-1.638-.253c-.678.355-1.367.642-2.043.854-.584.187-.98.726-.98 1.337V81.2H63v-2.043a1.4 1.4 0 0 0-.979-1.335c-.676-.213-1.365-.5-2.042-.854a1.403 1.403 0 0 0-1.638.252l-1.45 1.45-3.96-3.959 1.45-1.45a1.4 1.4 0 0 0 .253-1.638 12.596 12.596 0 0 1-.854-2.043 1.403 1.403 0 0 0-1.337-.98H50.4V63h2.043a1.4 1.4 0 0 0 1.335-.979c.213-.676.5-1.365.854-2.042a1.4 1.4 0 0 0-.252-1.638l-1.45-1.45 3.959-3.96 1.45 1.45a1.398 1.398 0 0 0 1.638.253 12.596 12.596 0 0 1 2.043-.854c.584-.187.98-.726.98-1.337V50.4h5.6v2.043a1.4 1.4 0 0 0 .979 1.335c.676.213 1.365.5 2.042.854a1.399 1.399 0 0 0 1.638-.252l1.45-1.45 3.96 3.959-1.45 1.45a1.4 1.4 0 0 0-.253 1.638c.355.678.642 1.367.854 2.043.187.584.726.98 1.337.98H81.2v5.6z\" /><path d=\"M65.8 57.4c-4.633 0-8.4 3.767-8.4 8.4 0 4.633 3.767 8.4 8.4 8.4 4.633 0 8.4-3.767 8.4-8.4 0-4.633-3.767-8.4-8.4-8.4zm0 14a5.606 5.606 0 0 1-5.6-5.6c0-3.088 2.512-5.6 5.6-5.6 3.088 0 5.6 2.512 5.6 5.6 0 3.088-2.512 5.6-5.6 5.6zM27.59 10.79l-1.98-1.98-9.8 9.8a1.398 1.398 0 0 0 0 1.98l9.8 9.8 1.98-1.98-8.81-8.81 8.81-8.81zM58.39 18.61l-9.8-9.8-1.98 1.98 8.81 8.81-8.81 8.81 1.98 1.98 9.8-9.8a1.398 1.398 0 0 0 0-1.98zM29.546 30.174L42.143 4.982l2.504 1.252L32.05 31.427zM54.6 28h2.8v2.8h-2.8zM60.2 28H63v2.8h-2.8zM65.8 28h2.8v2.8h-2.8z\" /></svg>\n            <br /><span>SDK Configuration</span>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_business_picker_business_picker_component__ = __webpack_require__("../../../../../src/app/components/shared/business-picker/business-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(router, loginService, infoDialog, dialog, dataService) {
        this.router = router;
        this.loginService = loginService;
        this.infoDialog = infoDialog;
        this.dialog = dialog;
        this.dataService = dataService;
    }
    HomeComponent.prototype.studio = function () {
        this.router.navigateByUrl('/studio');
    };
    HomeComponent.prototype.userManagement = function () {
        var _this = this;
        this.loginService.performLogin(true, '/', true, function (done) {
            if (!done) {
                _this.infoDialog.alert('Login Required', 'You must be logged in to your Ana chat server to manage users');
                return;
            }
            if (_this.dataService.loggedInUser) {
                if (_this.dataService.isSuperAdmin()) {
                    _this.router.navigateByUrl('/manage-users');
                }
                else if (_this.dataService.isBizAdmin() && _this.dataService.loggedInUser.businessId) {
                    _this.router.navigateByUrl('/manage-users/users?bizId=' + _this.dataService.loggedInUser.businessId);
                }
                else {
                    _this.infoDialog.alert('Unauthorized!', 'Only a super admin or a business admin can login into user management');
                }
            }
        });
    };
    HomeComponent.prototype.analytics = function () {
        var _this = this;
        this.loginService.performLogin(true, null, true, function (done) {
            if (!done) {
                _this.infoDialog.alert('Login Required', 'You must be logged in to your Ana chat server to view analytics');
                return;
            }
            if (_this.dataService.loggedInUser) {
                if (_this.dataService.isSuperAdmin()) {
                    _this.openAnalyticsPicker({ askFlowId: true });
                }
                else if ((_this.dataService.isBizAdmin() || _this.dataService.isFlowManager()) && _this.dataService.loggedInUser.businessId) {
                    _this.openAnalyticsPicker({
                        askFlowId: true,
                        businessId: _this.dataService.loggedInUser.businessId
                    });
                }
                else {
                    _this.infoDialog.alert('Unauthorized!', 'Only a super admin, a business admin or a flow manager can login into user management');
                }
            }
        });
    };
    HomeComponent.prototype.deploy = function () {
        var _this = this;
        this.loginService.performLogin(true, null, true, function (done) {
            if (!done) {
                _this.infoDialog.alert('Login Required', 'You must be logged in to your Ana chat server to deploy your chatbot');
                return;
            }
            if (_this.dataService.loggedInUser) {
                if (_this.dataService.isSuperAdmin()) {
                    _this.openDeployPage({ askFlowId: true });
                }
                else if ((_this.dataService.isBizAdmin() || _this.dataService.isFlowManager()) && _this.dataService.loggedInUser.businessId) {
                    _this.openDeployPage({
                        askFlowId: true,
                        businessId: _this.dataService.loggedInUser.businessId
                    });
                }
                else {
                    _this.infoDialog.alert('Unauthorized!', 'Only a super admin, a business admin or a flow manager can login into user management');
                }
            }
        });
    };
    HomeComponent.prototype.openAnalyticsPicker = function (params) {
        var _this = this;
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_business_picker_business_picker_component__["a" /* BusinessPickerComponent */], {
            width: '30%',
            data: params
        });
        d.afterClosed().subscribe(function (x) {
            if (x && x.bizAccount && x.chatProj) {
                _this.infoDialog.prompt('Analytics Server Url', 'Please enter the analytics server url', function (result) {
                    if (result) {
                        localStorage.setItem('analyticsApiBase', result);
                        var url = "/analytics?apiBase=" + result + "&businessId=" + x.bizAccount.id + "&businessName=" + x.bizAccount.name + "&chatFlowId=" + x.chatProj.id;
                        _this.router.navigateByUrl(url);
                    }
                }, localStorage.getItem('analyticsApiBase'));
            }
        });
    };
    HomeComponent.prototype.openDeployPage = function (params) {
        var _this = this;
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_business_picker_business_picker_component__["a" /* BusinessPickerComponent */], {
            width: '30%',
            data: params
        });
        d.afterClosed().subscribe(function (x) {
            if (x && x.bizAccount && x.chatProj) {
                var url = "/deploy?businessId=" + x.bizAccount.id + "&chatFlowId=" + x.chatProj.id;
                _this.router.navigateByUrl(url);
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage-users/biz-accounts/biz-accounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ana-pagination {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n    .ana-pagination .info {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        line-height: 40px;\n    }\n\n:host {\n    width: 100%;\n}\n\n.app-content {\n    padding-left: 15px;\n    padding-right: 15px;\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.list-item {\n    background-color: white;\n}\n\n.list-item-text {\n    width: 100%;\n}\n\n.list-item-buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.app-content-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 11px 0;\n}\n\n.app-content-header-text {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-top: 14px;\n}\n\n.list-item-hint {\n    font-size: 13px;\n    opacity: 0.5;\n    font-style: italic\n}\n\nmat-list-item {\n    margin-bottom: 10px;\n}\n\n.search-text {\n    margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-users/biz-accounts/biz-accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar [title]=\"'User Management'\" #appHeader></app-header-bar>\n<div class=\"app-content\">\n    <div class=\"app-content-header\">\n        <h4 class=\"app-content-header-text\">Business Accounts</h4>\n        <div class=\"app-content-header-actions\">\n            <mat-form-field floatLabel=\"never\" class=\"search-text\">\n                <mat-label>Search</mat-label>\n                <input type=\"text\" matInput name=\"search\" [(ngModel)]=\"search\" (keyup.enter)=\"searchStart()\" />\n                <button mat-icon-button matSuffix (click)=\"searchStart()\">\n                    <mat-icon>search</mat-icon>\n                </button>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" (click)=\"editBusinessAccount()\">Create new account</button>\n        </div>\n    </div>\n    <mat-card *ngIf=\"!accounts || accounts.length<=0\">\n        <mat-card-content>\n            Looks like there are no business accounts yet.\n        </mat-card-content>\n    </mat-card>\n    <div class=\"ana-pagination\" *ngIf=\"accounts && accounts.length>0\">\n        <div class=\"info\">\n            Page {{page+1}}/{{totalPages}}\n        </div>\n        <div class=\"buttons\">\n            <button mat-icon-button (click)=\"prevPage()\" [disabled]=\"page<=0\">\n                <mat-icon>navigate_before</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"nextPage()\" [disabled]=\"page>=totalPages-1\">\n                <mat-icon>navigate_next</mat-icon>\n            </button>\n        </div>\n    </div>\n    <mat-list *ngIf=\"accounts && accounts.length>0\">\n        <mat-list-item class=\"mat-elevation-z2 list-item\" *ngFor=\"let acc of accounts\">\n            <div class=\"list-item-text\">\n                {{acc.name}} <span class=\"list-item-hint\"> {{BusinessAccountStatus[acc.status].toLowerCase()}}</span>\n            </div>\n            <div class=\"list-item-buttons\">\n                <button matTooltip=\"Edit\" mat-icon-button (click)=\"editBusinessAccount(acc)\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button matTooltip=\"Manage Users\" mat-icon-button (click)=\"manageUsers(acc)\">\n                    <mat-icon>supervisor_account</mat-icon>\n                </button>\n                <button matTooltip=\"Deactivate\" *ngIf=\"acc.status==BusinessAccountStatus.ACTIVE\" mat-icon-button (click)=\"updateBusinessAccountStatus(acc, BusinessAccountStatus.INACTIVE)\">\n                    <mat-icon>close</mat-icon>\n                </button>\n                <button matTooltip=\"Activate\" *ngIf=\"acc.status==BusinessAccountStatus.INACTIVE\" mat-icon-button (click)=\"updateBusinessAccountStatus(acc, BusinessAccountStatus.ACTIVE)\">\n                    <mat-icon>check</mat-icon>\n                </button>\n            </div>\n        </mat-list-item>\n    </mat-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/manage-users/biz-accounts/biz-accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BizAccountsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanActivateBizAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_app_header_bar_app_header_bar_component__ = __webpack_require__("../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_edit_business_account_edit_business_account_component__ = __webpack_require__("../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_data_models__ = __webpack_require__("../../../../../src/app/models/data.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BizAccountsComponent = (function () {
    function BizAccountsComponent(dataService, dialog, router, infoDialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.infoDialog = infoDialog;
        this.page = 0;
        this.totalPages = 0;
        this.search = "";
        this.BusinessAccountStatus = __WEBPACK_IMPORTED_MODULE_7__models_data_models__["a" /* BusinessAccountStatus */];
    }
    BizAccountsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.appHeader.afterInit = function () {
            _this.loadAccounts();
        };
    };
    BizAccountsComponent.prototype.prevPage = function () {
        if (this.page > 0) {
            this.page--;
            this.loadAccounts();
        }
    };
    BizAccountsComponent.prototype.nextPage = function () {
        if (this.page < this.totalPages) {
            this.page++;
            this.loadAccounts();
        }
    };
    BizAccountsComponent.prototype.searchStart = function () {
        this.page = 0;
        this.loadAccounts();
    };
    BizAccountsComponent.prototype.loadAccounts = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.dataService.getBusinessAccounts(this.search, this.page).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.accounts = x.data.content;
                _this.totalPages = x.data.totalPages;
            }
            else
                _this.dataService.handleTypedError(x.error, "Unable to load business accounts", "Something went wrong while loading business accounts. Please try again.");
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to load business accounts", "Something went wrong while loading business accounts. Please try again.");
        });
    };
    BizAccountsComponent.prototype.manageUsers = function (account) {
        this.router.navigateByUrl("/manage-users/users?bizId=" + account.id);
    };
    BizAccountsComponent.prototype.editBusinessAccount = function (data) {
        var _this = this;
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__shared_edit_business_account_edit_business_account_component__["a" /* EditBusinessAccountComponent */], {
            width: '40%',
            data: data
        });
        d.afterClosed().subscribe(function (x) {
            if (x == true) {
                _this.loadAccounts();
            }
        });
    };
    BizAccountsComponent.prototype.updateBusinessAccountStatus = function (account, status) {
        var _this = this;
        var work = (status == __WEBPACK_IMPORTED_MODULE_7__models_data_models__["a" /* BusinessAccountStatus */].ACTIVE ? "activate" : "deactivate");
        this.infoDialog.confirm("Confirmation", "Are you sure you want to " + work + " the business account?", function (ok) {
            if (ok) {
                _this.infoDialog.showSpinner();
                _this.dataService.updateBusinessAccountStatus(account, status).subscribe(function (x) {
                    _this.infoDialog.hideSpinner();
                    if (x.success) {
                        _this.infoDialog.alert("Done", "Business account status updated");
                        _this.loadAccounts();
                    }
                    else {
                        _this.dataService.handleTypedError(x.error, "Unable to update business account status", "Something went wrong while updating the business account. Please try again.");
                    }
                }, function (err) {
                    _this.infoDialog.hideSpinner();
                    _this.dataService.handleError(err, "Unable to update business account status", "Something went wrong while updating the business account. Please try again.");
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('appHeader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_app_header_bar_app_header_bar_component__["a" /* AppHeaderBarComponent */])
    ], BizAccountsComponent.prototype, "appHeader", void 0);
    BizAccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-biz-accounts',
            template: __webpack_require__("../../../../../src/app/components/manage-users/biz-accounts/biz-accounts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage-users/biz-accounts/biz-accounts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__["a" /* InfoDialogService */]])
    ], BizAccountsComponent);
    return BizAccountsComponent;
}());

var CanActivateBizAccountComponent = (function () {
    function CanActivateBizAccountComponent(dataService) {
        this.dataService = dataService;
    }
    CanActivateBizAccountComponent.prototype.canActivate = function (route, state) {
        return this.dataService.isSuperAdmin();
    };
    CanActivateBizAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], CanActivateBizAccountComponent);
    return CanActivateBizAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage-users/manage-users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MANAGE_USERS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ManageUsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__biz_accounts_biz_accounts_component__ = __webpack_require__("../../../../../src/app/components/manage-users/biz-accounts/biz-accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("../../../../../src/app/components/manage-users/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MANAGE_USERS_ROUTES = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_1__biz_accounts_biz_accounts_component__["a" /* BizAccountsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__biz_accounts_biz_accounts_component__["b" /* CanActivateBizAccountComponent */]]
    },
    {
        path: "users",
        component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */]
    }
];
var ManageUsersModule = (function () {
    function ManageUsersModule() {
    }
    ManageUsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__biz_accounts_biz_accounts_component__["a" /* BizAccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__biz_accounts_biz_accounts_component__["b" /* CanActivateBizAccountComponent */]
            ]
        })
    ], ManageUsersModule);
    return ManageUsersModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage-users/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ana-pagination {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n    .ana-pagination .info {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        line-height: 40px;\n    }\n\n:host {\n    width: 100%;\n}\n\n.app-content {\n    padding-left: 15px;\n    padding-right: 15px;\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.list-item {\n    background-color: white;\n}\n\n.list-item-text {\n    width: 100%;\n}\n\n.app-content-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 11px 0;\n}\n\n.app-content-header-text {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-top: 14px;\n}\n\n.list-item-hint {\n    font-size: 13px;\n    opacity: 0.5;\n    font-style: italic\n}\n\nmat-list-item {\n    margin-bottom: 10px;\n}\n.search-text {\n    margin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-users/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar [title]=\"'User Management'\" #appHeader></app-header-bar>\n<div class=\"app-content\">\n    <div class=\"app-content-header\">\n        <h4 class=\"app-content-header-text\">{{businessAccount ? 'Users of ' + businessAccount.name : 'Users'}}</h4>\n        <div class=\"app-content-header-actions\">\n            <mat-form-field floatLabel=\"never\" class=\"search-text\">\n                <mat-label>Search</mat-label>\n                <input type=\"text\" matInput name=\"search\" [(ngModel)]=\"search\" (keyup.enter)=\"searchStart()\" />\n                <button mat-icon-button matSuffix (click)=\"searchStart()\">\n                    <mat-icon>search</mat-icon>\n                </button>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" (click)=\"createUserDialog()\" [disabled]=\"!bizId\">Create new user</button>\n        </div>\n    </div>\n    <mat-card *ngIf=\"!users || users.length<=0\">\n        <mat-card-content>\n            Looks like there are no users yet.\n        </mat-card-content>\n    </mat-card>\n    <div class=\"ana-pagination\" *ngIf=\"users && users.length>0\">\n        <div class=\"info\">\n            Page {{page+1}}/{{totalPages}}\n        </div>\n        <div class=\"buttons\">\n            <button mat-icon-button (click)=\"prevPage()\" [disabled]=\"page<=0\">\n                <mat-icon>navigate_before</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"nextPage()\" [disabled]=\"page>=totalPages-1\">\n                <mat-icon>navigate_next</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <mat-list *ngIf=\"users && users.length>0\">\n        <mat-list-item class=\"mat-elevation-z2 list-item\" *ngFor=\"let user of users\">\n            <div class=\"list-item-text\">\n                {{user.name || user.userName }} <span class=\"list-item-hint\"> {{userRole(user)}}</span>\n            </div>\n            <button matTooltip=\"View Details\" mat-icon-button (click)=\"view(user)\">\n                <mat-icon>remove_red_eye</mat-icon>\n            </button>\n            <button matTooltip=\"Update Password\" mat-icon-button (click)=\"updateUserPassword(user)\">\n                <mat-icon>border_color</mat-icon>\n            </button>\n        </mat-list-item>\n    </mat-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/manage-users/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/components/shared/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_header_bar_app_header_bar_component__ = __webpack_require__("../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_update_password_update_password_component__ = __webpack_require__("../../../../../src/app/components/shared/update-password/update-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersComponent = (function () {
    function UsersComponent(route, router, infoDialog, dialog, dataService) {
        this.route = route;
        this.router = router;
        this.infoDialog = infoDialog;
        this.dialog = dialog;
        this.dataService = dataService;
        this.search = "";
        this.users = [];
        this.page = 0;
        this.totalPages = 0;
    }
    UsersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.appHeader.afterInit = function () {
            _this.route.queryParamMap.subscribe(function (x) {
                var bizId = x.get('bizId');
                if (bizId) {
                    _this.bizId = bizId;
                    _this.loadUsers();
                    _this.loadBusinessDetails();
                }
            });
        };
        this.appHeader.goBack = function () {
            if (_this.dataService.isSuperAdmin()) {
                _this.router.navigateByUrl('/manage-users');
            }
            else {
                _this.router.navigateByUrl('/');
            }
        };
    };
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.searchStart = function () {
        this.page = 0;
        this.loadUsers();
    };
    UsersComponent.prototype.loadBusinessDetails = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.dataService.getBusinessDetails(this.bizId).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            _this.businessAccount = x.data;
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to load business details", "Something went wrong while trying to load business account details. Please try again.");
        });
    };
    UsersComponent.prototype.createUserDialog = function () {
        var _this = this;
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_create_user_create_user_component__["a" /* CreateUserComponent */], {
            width: '60%',
            data: {
                bizId: this.bizId,
                mode: __WEBPACK_IMPORTED_MODULE_5__shared_create_user_create_user_component__["b" /* UserDialogMode */].Create,
            }
        });
        d.afterClosed().subscribe(function (x) {
            if (x == true)
                _this.loadUsers();
        });
    };
    UsersComponent.prototype.prevPage = function () {
        if (this.page > 0) {
            this.page--;
            this.loadUsers();
        }
    };
    UsersComponent.prototype.nextPage = function () {
        if (this.page < this.totalPages) {
            this.page++;
            this.loadUsers();
        }
    };
    UsersComponent.prototype.view = function (user) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_create_user_create_user_component__["a" /* CreateUserComponent */], {
            width: '60%',
            data: {
                mode: __WEBPACK_IMPORTED_MODULE_5__shared_create_user_create_user_component__["b" /* UserDialogMode */].View,
                user: user
            }
        });
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        if (this.bizId) {
            this.infoDialog.showSpinner();
            this.dataService.getUsers(this.bizId, this.search, this.page).subscribe(function (x) {
                _this.infoDialog.hideSpinner();
                //if (x.success) {
                _this.users = x.content; //.filter(x => x.roles && x.roles.length > 0);
                _this.totalPages = x.totalPages;
                //} else {
                //	debugger;
                //	this.dataService.handleTypedError(x.error, "Unable to load users", "Something went wrong while loading the users. Please try again.");
                //}
            }, function (err) {
                _this.infoDialog.hideSpinner();
                _this.dataService.handleError(err, "Unable to load users", "Something went wrong while loading the users. Please try again.");
            });
        }
    };
    UsersComponent.prototype.updateUserPassword = function (user) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__shared_update_password_update_password_component__["a" /* UpdatePasswordComponent */], {
            width: '40%',
            data: user
        });
    };
    UsersComponent.prototype.userRole = function (user) {
        if (user.roles) {
            return user.roles.map(function (x) { return x.label; }).join(', ');
        }
        return "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__shared_app_header_bar_app_header_bar_component__["a" /* AppHeaderBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_app_header_bar_app_header_bar_component__["a" /* AppHeaderBarComponent */])
    ], UsersComponent.prototype, "appHeader", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/components/manage-users/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage-users/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Create your Ana Cloud account </h2>\n<mat-dialog-content>\n    <form #f=\"ngForm\" (ngSubmit)=\"create()\">\n        <mat-form-field class=\"full-width\">\n            <input type=\"text\" matInput name=\"name\" [(ngModel)]=\"details.displayName\" placeholder=\"Full Name\" required maxlength=\"30\" />\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input type=\"email\" matInput name=\"email\" [(ngModel)]=\"details.email\" pattern=\"^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*$\" placeholder=\"Email\" required #email=\"ngModel\" />\n            <mat-error align=\"start\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                Please enter a valid email address\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input type=\"text\" matInput name=\"phone\" [(ngModel)]=\"details.phone\" placeholder=\"Phone\" required maxlength=\"16\" pattern=\"^\\+?\\d{6,15}$\" #phone=\"ngModel\"/>\n            <mat-error align=\"start\" *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n                Please enter a valid phone number\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input type=\"text\" matInput name=\"companyName\" [(ngModel)]=\"details.companyName\" placeholder=\"Company Name\" required maxlength=\"50\" />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n            <input type=\"password\" matInput name=\"password\" [(ngModel)]=\"details.password\" placeholder=\"Password\" required pattern=\"^.{6,}$\" maxlength=\"50\" #pwd=\"ngModel\" />\n            <mat-error align=\"start\" *ngIf=\"(pwd.invalid) && (pwd.dirty || pwd.touched)\">\n                Password should be at least 6 characters\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input type=\"password\" matInput name=\"confirmPassword\" [(ngModel)]=\"details.confirmPassword\" placeholder=\"Confirm Password\" [pattern]=\"'^'+pwd.value+'$'\" required maxlength=\"50\" #cpwd=\"ngModel\"/>\n            <mat-error align=\"start\" *ngIf=\"(cpwd.invalue) && (cpwd.dirty || cpwd.touched)\">\n                Passwords do not match\n            </mat-error>\n        </mat-form-field>\n        <input type=\"submit\" name=\"submit\" style=\"display:none\" />\n    </form>\n    <mat-chip-list *ngIf=\"false\">\n        <mat-chip selectable=\"false\" class=\"danger-button\">\n            {{errorMessage}}\n        </mat-chip>\n    </mat-chip-list>\n</mat-dialog-content>\n<mat-dialog-actions class=\"actions\">\n    <button mat-raised-button (click)=\"create()\" color=\"primary\">Create</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnaCloudSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnaCloudSignupComponent = (function () {
    function AnaCloudSignupComponent(global, data, infoDialog) {
        this.global = global;
        this.data = data;
        this.infoDialog = infoDialog;
        this.details = {
            companyName: "",
            confirmPassword: "",
            displayName: "",
            email: "",
            password: "",
            phone: ""
        };
    }
    AnaCloudSignupComponent.prototype.allValid = function () {
        var d = this.details;
        if (!d || !d.companyName || !d.displayName) {
            this.errorMessage = "Please fill all the mandatory fields.";
            return false;
        }
        if (!d.email || !this.global.emailValid(d.email)) {
            this.errorMessage = "Please enter a valid email address. Verification email will be sent to it.";
            return false;
        }
        if (!d.phone || !this.global.phoneValid(d.phone)) {
            this.errorMessage = "Please enter a valid phone number.";
            return false;
        }
        if (!d.password || d.password.length < 6) {
            this.errorMessage = "Minimum length of the password is 6 characters.";
            return false;
        }
        if (d.password != d.confirmPassword) {
            this.errorMessage = "Password and confirm password do not match.";
            return false;
        }
        this.errorMessage = null;
        return true;
    };
    AnaCloudSignupComponent.prototype.ngOnInit = function () {
    };
    AnaCloudSignupComponent.prototype.create = function () {
        var _this = this;
        if (this.allValid()) {
            this.infoDialog.showSpinner();
            this.data.getRoles().subscribe(function (x) {
                var roles = x.data.filter(function (x) { return ["BUSINESS_ADMIN"].indexOf(x.role) != -1; });
                if (roles && roles.length > 0) {
                    var roleId = roles[0].id;
                    _this.data.registerOnAnaCloud({
                        business: {
                            email: _this.details.email,
                            phone: _this.details.phone,
                            name: _this.details.companyName + " - " + _this.details.displayName,
                        },
                        user: {
                            email: _this.details.email,
                            phone: _this.details.phone,
                            name: _this.details.displayName,
                            password: _this.details.password,
                            roleIds: [roleId]
                        }
                    }).subscribe(function (x) {
                        _this.infoDialog.hideSpinner();
                        if (x.data) {
                        }
                        else {
                            _this.data.handleTypedError(x.error, "Unable to register", "Something went wrong while trying to register. Please try again.");
                        }
                    }, function (err) {
                        _this.infoDialog.hideSpinner();
                        _this.data.handleError(err, "Unable to register", "Something went wrong while trying to register. Please try again.");
                    });
                }
            }, function (err) {
                _this.infoDialog.hideSpinner();
                _this.data.handleError(err, "Unable to register", "Something went wrong while trying to register. Please try again.");
            });
        }
        else {
            this.infoDialog.alert("Invalid Details", this.errorMessage);
        }
    };
    AnaCloudSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ana-cloud-signup',
            template: __webpack_require__("../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__["a" /* InfoDialogService */]])
    ], AnaCloudSignupComponent);
    return AnaCloudSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-header-bar {\n    width: 100%;\n}\n\n    app-header-bar > .user-info {\n        float: right;\n    }\n\n.back-button {\n    margin-right: 10px;\n}\n\n.toolbar-icon {\n    padding: 0 14px;\n}\n\n.toolbar-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.user-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.user-role {\n    font-size: 13px;\n    opacity: .7;\n    margin-top: -10px;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z2\" color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"goBack()\" *ngIf=\"!hideBackButton\" class=\"back-button\">\n            <mat-icon>arrow_back</mat-icon>\n        </button>\n        <span>{{title}}</span>\n        <span class=\"toolbar-spacer\"></span>\n        <span class=\"user-info\" *ngIf=\"loggedInUser\">\n            <span class=\"user-name\">\n                {{loggedInUser.name | titlecase }}\n            </span>\n            <span class=\"user-role\">\n                {{roles()}}\n            </span>\n        </span>\n        <span class=\"user-info\" *ngIf=\"!loggedInUser\">\n            <span class=\"user-name\">\n                <button mat-raised-button (click)=\"loginDialog()\" color=\"primary\" class=\"inverse\">Login</button>\n            </span>\n        </span>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"toolbar-icon\" *ngIf=\"loggedInUser\">\n            <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"changePassword()\">\n                <mat-icon>lock_outline</mat-icon>\n                <span>Change password</span>\n            </button>\n            <button mat-menu-item (click)=\"logout()\">\n                <mat-icon>exit_to_app</mat-icon>\n                <span>Logout</span>\n            </button>\n        </mat-menu>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/shared/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppHeaderBarComponent = (function () {
    function AppHeaderBarComponent(dataService, dialog, router, infoDialog, loginService) {
        var _this = this;
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.infoDialog = infoDialog;
        this.loginService = loginService;
        this.logoutNavigation = '/';
        this.skipAuth = false;
        this.hideBackButton = false;
        this.title = '';
        this.goBack = function () {
            _this.router.navigateByUrl('/');
        };
    }
    AppHeaderBarComponent.prototype.ngOnInit = function () {
    };
    AppHeaderBarComponent.prototype.ngAfterViewInit = function () {
        this.checkAndUpdate();
    };
    AppHeaderBarComponent.prototype.checkAndUpdate = function () {
        var _this = this;
        Promise.resolve(true).then(function () {
            _this.loginService.performLogin(_this.skipAuth, '/', true, function (done) {
                if (done) {
                    _this.loggedInUser = _this.dataService.loggedInUser;
                    if (_this.afterInit) {
                        _this.afterInit();
                    }
                }
            });
        });
    };
    AppHeaderBarComponent.prototype.loginDialog = function () {
        var _this = this;
        this.loginService.performLogin(false, null, true, function (done) {
            if (_this.dataService.loggedInUser) {
                _this.loggedInUser = _this.dataService.loggedInUser;
            }
        });
    };
    AppHeaderBarComponent.prototype.logout = function () {
        this.dataService.logout();
        this.loggedInUser = null;
        if (this.logoutNavigation) {
            this.router.navigateByUrl(this.logoutNavigation);
        }
    };
    AppHeaderBarComponent.prototype.changePassword = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__change_password_change_password_component__["a" /* ChangePasswordComponent */], {
            width: '60%',
        });
    };
    AppHeaderBarComponent.prototype.roles = function () {
        if (this.loggedInUser && this.loggedInUser.roles) {
            return this.loggedInUser.roles.map(function (x) { return x.label; }).join(', ');
        }
        return '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('logoutNavigation'),
        __metadata("design:type", String)
    ], AppHeaderBarComponent.prototype, "logoutNavigation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('skipAuth'),
        __metadata("design:type", Boolean)
    ], AppHeaderBarComponent.prototype, "skipAuth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('hideBackButton'),
        __metadata("design:type", Boolean)
    ], AppHeaderBarComponent.prototype, "hideBackButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], AppHeaderBarComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('goBack'),
        __metadata("design:type", Object)
    ], AppHeaderBarComponent.prototype, "goBack", void 0);
    AppHeaderBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__("../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */]])
    ], AppHeaderBarComponent);
    return AppHeaderBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/business-picker/business-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n    width: 100%;\n}\n\n.desc {\n    font-size: 11px;\n    opacity: 0.6;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/business-picker/business-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{ title }}</h2>\n<mat-dialog-content>\n    <mat-form-field class=\"full-width\" tabindex=\"-1\">\n        <input tabindex=\"-1\" type=\"text\" placeholder=\"Choose an account\" aria-label=\"Business Account\" matInput [(ngModel)]=\"bizFilter\" [matAutocomplete]=\"bizAuto\" name=\"bizAccount\" [disabled]=\"param.businessId\">\n        <mat-autocomplete tabindex=\"-1\" #bizAuto=\"matAutocomplete\" (optionSelected)=\"bizOptionSelected($event)\" [displayWith]=\"bizDisplayWith\">\n            <mat-option *ngFor=\"let option of bizFilteredOptions()\" [value]=\"option\">\n                {{ option.name }} <span class=\"desc\">Id: {{ option.id }}</span>\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\" tabindex=\"-1\" *ngIf=\"param.askFlowId && chatProjects && chatProjects.length > 0\">\n        <input tabindex=\"-1\" type=\"text\" placeholder=\"Choose a chat project\" aria-label=\"Chat project\" matInput [(ngModel)]=\"projFilter\" [matAutocomplete]=\"projAuto\" name=\"projAccount\" [disabled]=\"param.businessId && param.flowId\">\n        <mat-autocomplete tabindex=\"-1\" #projAuto=\"matAutocomplete\" (optionSelected)=\"projOptionSelected($event)\" [displayWith]=\"projDisplayWith\">\n            <mat-option *ngFor=\"let option of projFilteredOptions()\" [value]=\"option\">\n                {{ option.name }} <span class=\"desc\">Id: {{ option.id }}</span>\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n    <label class=\"desc\">You are logged into '{{chatConnName}}' Ana chat server</label>\n</mat-dialog-content>\n<mat-dialog-actions class=\"actions\">\n    <button mat-raised-button (click)=\"submit()\" color=\"primary\" [disabled]=\"!valid()\">Submit</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/business-picker/business-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_analytics_window_service__ = __webpack_require__("../../../../../src/app/services/analytics-window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BusinessPickerComponent = (function () {
    function BusinessPickerComponent(dataService, infoDialog, router, analyticsWindow, dialogRef, param) {
        this.dataService = dataService;
        this.infoDialog = infoDialog;
        this.router = router;
        this.analyticsWindow = analyticsWindow;
        this.dialogRef = dialogRef;
        this.param = param;
        this.title = "";
        this.businessAccounts = [];
        this.bizFilter = "";
        this.chatProjects = [];
        this.projFilter = "";
        if (this.param.askFlowId) {
            this.title = "Choose business account and chat project";
        }
        else {
            this.title = "Choose business account";
        }
    }
    BusinessPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve(null).then(function () {
            _this.init();
        });
    };
    BusinessPickerComponent.prototype.init = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.dataService.getBusinessAccounts("", 0, 10000).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.businessAccounts = x.data.content;
                if (_this.param && _this.param.businessId && _this.businessAccounts) {
                    var x_1 = _this.businessAccounts.filter(function (x) { return x.id == _this.param.businessId; });
                    if (x_1 && x_1.length > 0) {
                        _this.selectedBusinessAccount = x_1[0];
                        _this.bizFilter = _this.selectedBusinessAccount;
                        _this.loadChatProjects();
                    }
                }
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to load business accounts", "Something went wrong while loading business account. Please try again.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to load business accounts", "Something went wrong while loading business account. Please try again.");
        });
    };
    BusinessPickerComponent.prototype.bizOptionSelected = function (event) {
        if (event.option && event.option.value) {
            this.selectedBusinessAccount = event.option.value;
            if (this.selectedBusinessAccount) {
                this.loadChatProjects();
            }
        }
    };
    BusinessPickerComponent.prototype.bizDisplayWith = function (value) {
        return value ? value.name : null;
    };
    BusinessPickerComponent.prototype.bizFilteredOptions = function () {
        var _this = this;
        if (typeof this.bizFilter === 'string') {
            var list = this.businessAccounts;
            if (this.bizFilter) {
                list = this.businessAccounts.filter(function (x) { return (x.name.toLowerCase().indexOf(_this.bizFilter.toLowerCase()) != -1) || x.id.toLowerCase().indexOf(_this.bizFilter.toLowerCase()) != -1; });
            }
            return list.sort(function (x, y) { return ((x.name && y.name) ? x.name.localeCompare(y.name) : 1); });
        }
    };
    BusinessPickerComponent.prototype.projOptionSelected = function (event) {
        if (event.option && event.option.value) {
            this.selectedChatProject = event.option.value;
        }
    };
    BusinessPickerComponent.prototype.projDisplayWith = function (value) {
        return value ? value.name : null;
    };
    BusinessPickerComponent.prototype.projFilteredOptions = function () {
        var _this = this;
        if (typeof this.projFilter === 'string') {
            var list = this.chatProjects;
            if (this.projFilter) {
                list = this.chatProjects.filter(function (x) { return (x.name.toLowerCase().indexOf(_this.projFilter.toLowerCase()) != -1) || x.id.toLowerCase().indexOf(_this.projFilter.toLowerCase()) != -1; });
            }
            return list.sort(function (x, y) { return ((x.name && y.name) ? x.name.localeCompare(y.name) : 1); });
        }
    };
    BusinessPickerComponent.prototype.loadChatProjects = function () {
        var _this = this;
        if (!this.param.askFlowId)
            return false;
        if (!this.selectedBusinessAccount)
            return false;
        this.infoDialog.showSpinner();
        this.dataService.getChatProjects(this.selectedBusinessAccount.id, 0, 10000).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.chatProjects = x.data.content;
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to fetch chat projects", "Something went wrong while trying to fetch chat projects. Please try again.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to fetch chat projects", "Something went wrong while trying to fetch chat projects. Please try again.");
        });
    };
    BusinessPickerComponent.prototype.submit = function () {
        this.dialogRef.close({
            bizAccount: this.selectedBusinessAccount,
            chatProj: this.selectedChatProject
        });
    };
    BusinessPickerComponent.prototype.valid = function () {
        if (this.param.askFlowId) {
            return this.selectedBusinessAccount && this.selectedChatProject;
        }
        else {
            return this.selectedBusinessAccount;
        }
    };
    Object.defineProperty(BusinessPickerComponent.prototype, "chatConnName", {
        get: function () {
            return this.dataService.chatServer.Name;
        },
        enumerable: true,
        configurable: true
    });
    BusinessPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-business-picker',
            template: __webpack_require__("../../../../../src/app/components/shared/business-picker/business-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/business-picker/business-picker.component.css")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_analytics_window_service__["a" /* AnalyticsWindowService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialogRef */], Object])
    ], BusinessPickerComponent);
    return BusinessPickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\nmat-dialog-actions button {\n    margin-left: 0 !important;\n    margin-right: 8px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Change Password</h2>\n<mat-dialog-content>\n    <div class=\"center-block center-content\">\n        <form (ngSubmit)=\"save()\" class=\"form\">\n            <mat-form-field>\n                <input type=\"password\" placeholder=\"Current Password\" name=\"password\" matInput [(ngModel)]=\"password\" required />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"password\" placeholder=\"New Password\" name=\"password\" matInput [(ngModel)]=\"newPassword\" required />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" matInput [(ngModel)]=\"confirmPassword\" required #pwd=\"ngModel\" />\n                <mat-hint align=\"start\" *ngIf=\"(newPassword!=confirmPassword) && (pwd.dirty || pwd.touched)\" style=\"color:red\">\n                    Passwords do not match\n                </mat-hint>\n            </mat-form-field>\n            <input type=\"submit\" name=\"submit\" hidden />\n        </form>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button matTooltip=\"Save\" color=\"primary\" mat-raised-button (click)=\"save()\">Reset Password</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(global, infoDialog, dataService, dialogRef) {
        this.global = global;
        this.infoDialog = infoDialog;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.save = function () {
        var _this = this;
        if (!this.global.pwdMatch(this.newPassword, this.confirmPassword)) {
            this.infoDialog.alert("Passwords do not match or not secure", "Please ensure the password and confirm password is same. Also, a password must be at least 6 characters.");
            return;
        }
        this.infoDialog.showSpinner();
        this.dataService.changeCurrentUserPassword(this.password, this.newPassword).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.infoDialog.alert("Password changed", "Password has been changed successfully", function () {
                    _this.dialogRef.close();
                });
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to change password", "Something went wrong while trying to change the password.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to change password", "Something went wrong while trying to change the password.");
        });
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/components/shared/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialogRef */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field, mat-select {\n    width: 100%;\n}\n\n.bottom-actions > button {\n    margin: 20px 10px;\n}\n\nmat-action-row > button {\n    margin: 10px;\n}\n\n/*mat-action-row {\n  margin: 0 -10px;\n  display: block;\n}*/\n.bottom-actions {\n    display: block;\n    text-align: center;\n}\n\n/*.mat-dialog-actions {\n    margin-left: -8px;\n    margin-right: -8px;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Ana chat server connections</h2>\n<mat-dialog-content>\n    <div class=\"center-block center-content\">\n        <mat-card [hidden]=\"savedConnections.length!=0\" class=\"text-center\">\n            <h4>Looks like you don't have any saved Ana chat server connections. <br /> Start by adding one.</h4>\n        </mat-card>\n\n        <mat-accordion [hidden]=\"savedConnections.length==0\">\n            <mat-expansion-panel *ngFor=\"let conn of savedConnections; let i = index\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <mat-icon>insert_link</mat-icon>&nbsp;\n                        {{connectionAlias(conn)}}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"conn.Name\" name=\"connName-{{i}}\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"url\" placeholder=\"Server Url\" [(ngModel)]=\"conn.ServerUrl\" name=\"connUrl-{{i}}\">\n                </mat-form-field>\n\n                <section>\n                    <h5 [hidden]=\"!conn.ChatProjects || conn.ChatProjects.length<=0\">Chat projects</h5>\n                    <mat-accordion>\n                        <mat-expansion-panel *ngFor=\"let proj of conn.ChatProjects; let i = index\">\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    <mat-icon>chat</mat-icon>&nbsp;\n                                    {{proj.Name}}\n                                </mat-panel-title>\n                            </mat-expansion-panel-header>\n                            <mat-form-field>\n                                <input matInput type=\"text\" placeholder=\"Chat Project Id\" [(ngModel)]=\"proj.Id\" name=\"projId-{{i}}\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput type=\"text\" placeholder=\"Chat Project Name\" [(ngModel)]=\"proj.Name\" name=\"projName-{{i}}\">\n                            </mat-form-field>\n\n                            <mat-action-row>\n                                <button mat-raised-button (click)=\"deleteProject(conn,proj)\"><span>Delete Project</span></button>\n                            </mat-action-row>\n                        </mat-expansion-panel>\n                    </mat-accordion>\n                </section>\n                <mat-action-row>\n                    <!--<button mat-raised-button (click)=\"addChatProjectToConn(conn)\"><span>Add chat project</span></button>-->\n                    <button mat-raised-button (click)=\"deleteConnection(conn)\"><span>Delete server connection</span></button>\n                </mat-action-row>\n\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button matTooltip=\"Save Changes\" color=\"primary\" *ngIf=\"savedConnections.length!=0\" mat-raised-button (click)=\"saveConnections(true)\">Save changes</button>\n    <button matTooltip=\"Add new connection\" [color]=\"savedConnections.length==0?'primary':''\" mat-raised-button (click)=\"addConnection()\">Add new server connection</button>\n    <!--<button matTooltip=\"Get an Ana chat server\" mat-raised-button (click)=\"getAnaChatServer()\">Get an Ana chat server</button>-->\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServerManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chatflow_service__ = __webpack_require__("../../../../../src/app/services/chatflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__get_ana_chat_server_get_ana_chat_server_component__ = __webpack_require__("../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatServerManagerComponent = (function () {
    function ChatServerManagerComponent(settings, chatFlowService, snakbar, infoDialog, dialog, router, dialogRef) {
        this.settings = settings;
        this.chatFlowService = chatFlowService;
        this.snakbar = snakbar;
        this.infoDialog = infoDialog;
        this.dialog = dialog;
        this.router = router;
        this.dialogRef = dialogRef;
        this.savedConnections = [];
        this.savedConnections = this.settings.loadSavedConnections();
    }
    ChatServerManagerComponent.prototype.ngOnInit = function () {
    };
    ChatServerManagerComponent.prototype.connectionAlias = function (conn) {
        return conn.Name || conn.ServerUrl || 'New Ana chat server';
    };
    ChatServerManagerComponent.prototype.deleteConnection = function (conn) {
        var _this = this;
        var current = this.savedConnections.indexOf(conn);
        if (current != -1) {
            this.infoDialog.confirm("Sure?", "Delete chat server connection '" + this.connectionAlias(conn) + "'", function (ok) {
                if (ok) {
                    _this.savedConnections.splice(current, 1);
                    _this.saveConnections(false);
                }
            });
        }
    };
    ChatServerManagerComponent.prototype.addChatProjectToConn = function (conn) {
        if (!conn.ChatProjects)
            conn.ChatProjects = [];
        conn.ChatProjects.push({
            CreatedOn: new Date(),
            Id: 'new-chat-project',
            Name: 'New Chat Project',
            UpdatedOn: new Date()
        });
    };
    ChatServerManagerComponent.prototype.deleteProject = function (conn, proj) {
        var _this = this;
        var current = conn.ChatProjects.indexOf(proj);
        if (current != -1) {
            this.infoDialog.confirm("Sure?", "Delete chat project '" + proj.Name + "'", function (ok) {
                if (ok) {
                    conn.ChatProjects.splice(current, 1);
                    _this.saveConnections(false);
                }
            });
        }
    };
    ChatServerManagerComponent.prototype.saveConnections = function (close) {
        if (this.savedConnections && this.savedConnections.length > 0) {
            var invalidPublishServers = this.savedConnections.filter(function (x) { return !x.ServerUrl || !x.Name; });
            if (invalidPublishServers.length > 0) {
                this.infoDialog.alert('Incomplete Details', "One or more of your Ana chat servers have Server Url or Name. Please fill them and try again.");
                return;
            }
            try {
                var emptyChatProjects = this.savedConnections.filter(function (x) { return !x.ChatProjects || x.ChatProjects.length <= 0; });
                if (emptyChatProjects.length != this.savedConnections.length) {
                    var invalidChatProjects = this.savedConnections.filter(function (x) { return x.ChatProjects && x.ChatProjects.length > 0; }).map(function (x) { return x.ChatProjects; }).reduce(function (a, b) { return a.concat(b); }).filter(function (x) { return !x.Id || !x.Name; });
                    if ((emptyChatProjects.length > 0 && invalidChatProjects.length > 0)) {
                        this.infoDialog.alert('Incomplete Details', "One or more of the chat projects in your chat server connections is incomplete. Please fill them and try again.");
                        return;
                    }
                }
            }
            catch (e) {
                console.log(e);
                this.infoDialog.alert('Incomplete Details', "One or more of the chat projects in your chat server connections is incomplete. Please fill them and try again.");
                return;
            }
        }
        this.settings.saveSavedConnections(this.savedConnections);
        this.snakbar.open('Ana chat servers saved!', 'Dismiss', {
            duration: 3000
        });
        if (close) {
            this.dialogRef.close();
        }
    };
    ChatServerManagerComponent.prototype.addConnection = function () {
        var newConn = {
            APIKey: '',
            APISecret: '',
            IsDefault: false,
            Name: '',
            ServerUrl: '',
            ChatProjects: []
        };
        this.savedConnections.push(newConn);
    };
    ChatServerManagerComponent.prototype.getAnaChatServer = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__get_ana_chat_server_get_ana_chat_server_component__["a" /* GetAnaChatServerComponent */], {
            width: 'auto',
            disableClose: true
        });
    };
    ChatServerManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-server-manager',
            template: __webpack_require__("../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_chatflow_service__["a" /* ChatFlowService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */]])
    ], ChatServerManagerComponent);
    return ChatServerManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/create-chatbot/create-chatbot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/create-chatbot/create-chatbot.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Add new chatbot project</h2>\n<mat-dialog-content>\n    <div class=\"center-block center-content\">\n        <form (ngSubmit)=\"create()\" class=\"form\">\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Id\" name=\"Id\" matInput [(ngModel)]=\"chatProject.id\" required />\n                <mat-hint>New chatbot project id</mat-hint>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Name\" name=\"name\" matInput [(ngModel)]=\"chatProject.name\" required />\n                <mat-hint>New chatbot project name</mat-hint>\n            </mat-form-field>\n            <input type=\"submit\" name=\"submit\" hidden />\n        </form>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button matTooltip=\"Add\" color=\"primary\" mat-raised-button (click)=\"create()\">Create</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/create-chatbot/create-chatbot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateChatbotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CreateChatbotComponent = (function () {
    function CreateChatbotComponent(settings, globals, dataService, loginService, dialog, infoDialog, dialogRef, bizDetails) {
        this.settings = settings;
        this.globals = globals;
        this.dataService = dataService;
        this.loginService = loginService;
        this.dialog = dialog;
        this.infoDialog = infoDialog;
        this.dialogRef = dialogRef;
        this.bizDetails = bizDetails;
        this.chatProject = {
            businessId: "",
            //businessName: "",
            id: "",
            name: ""
        };
        if (bizDetails) {
            this.chatProject.businessId = bizDetails.id;
            //this.chatProject.businessName = bizDetails.name;
        }
    }
    CreateChatbotComponent.prototype.ngOnInit = function () {
    };
    CreateChatbotComponent.prototype.create = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.dataService.createChatProject(this.chatProject).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.dialogRef.close(_this.chatProject);
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to create chatbot project", "Something went wrong while creating the chatbot project. Please try again.");
                _this.dialogRef.close();
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to create chatbot project", "Something went wrong while creating the chatbot project. Please try again.");
            _this.dialogRef.close();
        });
    };
    CreateChatbotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-chatbot',
            template: __webpack_require__("../../../../../src/app/components/shared/create-chatbot/create-chatbot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/create-chatbot/create-chatbot.component.css")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], CreateChatbotComponent);
    return CreateChatbotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/create-user/create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\nmat-dialog-actions button {\n    margin-left: 0 !important;\n    margin-right: 8px !important;\n}\n\n.mat-input-element:disabled {\n    color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{title}}</h2>\n<mat-dialog-content>\n    <div class=\"center-block center-content\">\n        <form (ngSubmit)=\"save()\" >\n            <fieldset class=\"form\" [disabled]=\"param.mode == UserDialogMode.View\">\n                <mat-form-field>\n                    <input type=\"text\" placeholder=\"Name\" name=\"name\" matInput [(ngModel)]=\"user.name\" required />\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"email\" placeholder=\"Email\" name=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" matInput [(ngModel)]=\"user.email\" required #email=\"ngModel\" />\n                    <mat-error align=\"start\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"tel\" placeholder=\"Phone\" name=\"phone\" matInput [(ngModel)]=\"user.phone\" pattern=\"^\\+?\\d{6,15}$\" #phone=\"ngModel\" />\n                    <mat-error align=\"start\" *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n                        Please enter a valid phone number\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field [hidden]=\"param.mode == UserDialogMode.View\">\n                    <mat-select placeholder=\"Role\" [(ngModel)]=\"selectedRole\" name=\"selectedRole\">\n                        <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\n                            {{ role.label }}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field [hidden]=\"param.mode == UserDialogMode.Create\">\n                    <input type=\"text\" placeholder=\"Roles\" name=\"Roles\" matInput [value]=\"userRoleDisplay()\" required />\n                </mat-form-field>\n                <mat-form-field [hidden]=\"param.mode == UserDialogMode.View\">\n                    <input type=\"password\" placeholder=\"Password\" name=\"password\" matInput [(ngModel)]=\"user.password\" required />\n                </mat-form-field>\n                <mat-form-field [hidden]=\"param.mode == UserDialogMode.View\">\n                    <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" matInput [(ngModel)]=\"confirmPassword\" required #pwd=\"ngModel\" />\n                    <mat-hint align=\"start\" *ngIf=\"(user.password!=confirmPassword) && (pwd.dirty || pwd.touched)\" style=\"color:red\">\n                        Passwords do not match\n                    </mat-hint>\n                </mat-form-field>\n                <input type=\"submit\" name=\"submit\" hidden />\n            </fieldset>\n        </form>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button matTooltip=\"Save\" color=\"primary\" mat-raised-button (click)=\"save()\" [hidden]=\"param.mode == UserDialogMode.View\">Save</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserDialogMode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CreateUserComponent = (function () {
    function CreateUserComponent(global, infoDialog, dataService, dialogRef, param) {
        this.global = global;
        this.infoDialog = infoDialog;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.param = param;
        this.title = "";
        this.UserDialogMode = UserDialogMode;
        if (param.mode == UserDialogMode.Create) {
            this.title = "Create User";
            this.user = {
                businessId: param.bizId,
                email: "",
                name: "",
                phone: "",
                password: "",
                roleIds: []
            };
        }
        else if (param.mode == UserDialogMode.View) {
            this.title = "User Details";
            this.user = {
                businessId: param.bizId,
                email: param.user.email || param.user.userName,
                name: param.user.name || param.user.userName,
                phone: param.user.phone,
                password: "",
                roleIds: []
            };
        }
        this.loadRoles();
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.userRoleDisplay = function () {
        if (this.param.user && this.param.user.roles) {
            return this.param.user.roles.map(function (x) { return x.label; }).join(', ');
        }
        return "";
    };
    CreateUserComponent.prototype.loadRoles = function () {
        var _this = this;
        this.dataService.getRoles().subscribe(function (x) {
            _this.roles = x.data.filter(function (x) { return ["SUPER_ADMIN", "END_USER"].indexOf(x.role) == -1; });
        });
    };
    CreateUserComponent.prototype.save = function () {
        var _this = this;
        if (!this.global.emailValid(this.user.email)) {
            this.infoDialog.alert("Invalid Email", "Please enter a valid email address");
            return;
        }
        if (!this.global.phoneValid(this.user.phone)) {
            this.infoDialog.alert("Invalid Phone Number", "Please enter a valid phone number");
            return;
        }
        if (!this.global.pwdMatch(this.user.password, this.confirmPassword)) {
            this.infoDialog.alert("Passwords do not match or not secure", "Please ensure the password and confirm password is same. Also, a password must be at least 6 characters.");
            return;
        }
        if (!this.selectedRole) {
            this.infoDialog.alert("Role not selected", "Please select a role for the user");
            return;
        }
        this.user.roleIds = [this.selectedRole.id];
        this.infoDialog.showSpinner();
        debugger;
        this.dataService.createUser(this.user).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.infoDialog.alert("User created", "The user has been created successfully", function () {
                    _this.dialogRef.close(true);
                });
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to create the user", "Something went wrong while trying to create the user. Please try again in some time.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to create the user", "Something went wrong while trying to create the user. Please try again in some time.");
        });
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__("../../../../../src/app/components/shared/create-user/create-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/create-user/create-user.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialogRef */], Object])
    ], CreateUserComponent);
    return CreateUserComponent;
}());

var UserDialogMode;
(function (UserDialogMode) {
    UserDialogMode[UserDialogMode["View"] = 0] = "View";
    UserDialogMode[UserDialogMode["Create"] = 1] = "Create";
})(UserDialogMode || (UserDialogMode = {}));


/***/ }),

/***/ "../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{title}}</h2>\n<mat-dialog-content>\n    <div class=\"center-block center-content\">\n        <form (ngSubmit)=\"save()\" class=\"form\">\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Id\" name=\"Id\" matInput [(ngModel)]=\"account.id\" required [readonly]=\"!isCreate\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Name\" name=\"name\" matInput [(ngModel)]=\"account.name\" required />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"email\" placeholder=\"Business Email\" name=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" matInput [(ngModel)]=\"account.email\" required #email=\"ngModel\" />\n                <mat-error align=\"start\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                    Please enter a valid email address\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"tel\" placeholder=\"Business Phone\" name=\"phone\" matInput [(ngModel)]=\"account.phone\" pattern=\"^\\+?\\d{6,15}$\" #phone=\"ngModel\"/>\n                <mat-error align=\"start\" *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n                    Please enter a valid phone number\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"url\" placeholder=\"Logo Url\" name=\"logoUrl\" matInput [(ngModel)]=\"account.logoUrl\" />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Primary Background Color\" name=\"primaryBGColor\" matInput [(ngModel)]=\"primaryBGColor\" required />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Primary Text Color\" name=\"primaryFGColor\" matInput [(ngModel)]=\"primaryFGColor\" required />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Secondary Color\" name=\"secondaryColor\" matInput [(ngModel)]=\"secondaryColor\" />\n            </mat-form-field>\n            <input type=\"submit\" name=\"submit\" hidden />\n        </form>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button matTooltip=\"Save\" color=\"primary\" mat-raised-button (click)=\"save()\">Save</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBusinessAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditBusinessAccountComponent = (function () {
    function EditBusinessAccountComponent(global, infoDialog, dataService, dialogRef, data) {
        this.global = global;
        this.infoDialog = infoDialog;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = "Create business account";
        this.isCreate = false;
        this.account = {
            colors: [],
            email: "",
            logoUrl: "",
            name: "",
            phone: "",
        };
        this.primaryBGColor = "#8cc83c";
        this.primaryFGColor = "white";
        this.secondaryColor = "#3c3c3c";
        this.dialogRef.disableClose = true;
        if (data) {
            this.account = data;
            this.title = "Edit business account";
        }
        if (!this.account.id) {
            this.account.id = this.global.uuidv4();
            this.isCreate = true;
        }
    }
    EditBusinessAccountComponent.prototype.ngOnInit = function () {
    };
    EditBusinessAccountComponent.prototype.emailValid = function (val) {
        var r = this.global.emailValid(val);
        return r;
    };
    EditBusinessAccountComponent.prototype.phoneValid = function (val) {
        return this.global.phoneValid(val);
    };
    EditBusinessAccountComponent.prototype.pwdMatch = function (p1, p2) {
        return this.global.pwdMatch(p1, p2);
    };
    EditBusinessAccountComponent.prototype.save = function () {
        var _this = this;
        if (this.account.email) {
            if (!this.global.emailValid(this.account.email)) {
                this.infoDialog.alert("Invalid email address", "Please enter a valid email address");
                return;
            }
        }
        if (this.account.phone) {
            if (!this.global.phoneValid(this.account.phone)) {
                this.infoDialog.alert("Invalid phone number", "Please enter a valid phone number");
                return;
            }
        }
        this.account.colors = [
            {
                name: "PRIMARY_BG",
                value: this.primaryBGColor
            },
            {
                name: "PRIMARY_FG",
                value: this.primaryFGColor
            },
            {
                name: "SECONDARY",
                value: this.secondaryColor
            }
        ];
        this.infoDialog.showSpinner();
        this.dataService.saveBusinessAccount(this.account, this.isCreate).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.infoDialog.alert("Done", "Business account has been saved successfully", function () {
                    _this.dialogRef.close(true);
                });
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to save business account", "Something went wrong while trying to save business account details");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to save business account", "Something went wrong while trying to save business account details");
        });
    };
    EditBusinessAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-business-account',
            template: __webpack_require__("../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], EditBusinessAccountComponent);
    return EditBusinessAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%;\n}\n\n    .button-row > .mat-raised-button {\n        margin-left: 10px;\n        margin-right: 10px;\n        height: 180px;\n        width: 200px;\n        font-size: 18px;\n    }\n\n        .button-row > .mat-raised-button:first-child {\n            margin-left: 0;\n        }\n\n        .button-row > .mat-raised-button:last-child {\n            margin-right: 0;\n        }\n\nmat-raised-button svg {\n    width: 84px;\n    height: 84px;\n    margin-left: 4px;\n}\n\n.actions {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Get Ana chat server</h2>\n<mat-dialog-content>\n    <div class=\"button-row\">\n        <button mat-raised-button (click)=\"anaCloud()\" color=\"primary\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 77.109 77.109\" width=\"84\" height=\"84\">\n                <g fill=\"#fff\">\n                    <path d=\"M33.223 66.59V46.87c0-.68-.551-1.23-1.23-1.23h-8.204a1.23 1.23 0 1 0 0 2.46h6.973V66.59a5.34 5.34 0 0 0-4.102 5.187 5.338 5.338 0 0 0 5.332 5.332 5.338 5.338 0 0 0 5.332-5.332 5.34 5.34 0 0 0-4.101-5.187zm-1.23 8.058a2.874 2.874 0 0 1-2.872-2.87 2.874 2.874 0 0 1 2.871-2.872 2.874 2.874 0 0 1 2.871 2.871 2.874 2.874 0 0 1-2.87 2.871zM46.348 66.59V46.87c0-.68-.551-1.23-1.23-1.23h-8.204a1.23 1.23 0 1 0 0 2.46h6.973V66.59a5.34 5.34 0 0 0-4.102 5.187 5.338 5.338 0 0 0 5.332 5.332 5.338 5.338 0 0 0 5.332-5.332 5.34 5.34 0 0 0-4.101-5.187zm-1.23 8.058a2.874 2.874 0 0 1-2.872-2.87 2.874 2.874 0 0 1 2.871-2.872 2.874 2.874 0 0 1 2.871 2.871 2.874 2.874 0 0 1-2.87 2.871zM67.266 58.242a5.34 5.34 0 0 0-5.188 4.102h-2.605V46.869c0-.68-.551-1.23-1.23-1.23h-8.204a1.23 1.23 0 1 0 0 2.46h6.973v15.475c0 .68.55 1.23 1.23 1.23h3.836a5.34 5.34 0 0 0 5.188 4.102 5.338 5.338 0 0 0 5.332-5.332 5.338 5.338 0 0 0-5.332-5.332zm0 8.203a2.874 2.874 0 0 1-2.871-2.87 2.874 2.874 0 0 1 2.87-2.872 2.874 2.874 0 0 1 2.872 2.871 2.874 2.874 0 0 1-2.871 2.871z\" />\n                    <path d=\"M74.18 26.505a13.356 13.356 0 0 0-6.418-4.362c-.282-5.825-2.698-11.26-6.864-15.39A23.148 23.148 0 0 0 44.498 0a23.316 23.316 0 0 0-19.862 11.121 10.567 10.567 0 0 0-3.189-.487c-5.026 0-9.349 3.548-10.39 8.384C4.6 20.693 0 26.576 0 33.321 0 41.47 6.63 48.1 14.778 48.1h2.859v14.245H15.03a5.34 5.34 0 0 0-5.187-4.102 5.338 5.338 0 0 0-5.332 5.332 5.338 5.338 0 0 0 5.332 5.332 5.34 5.34 0 0 0 5.187-4.101h3.836c.68 0 1.23-.551 1.23-1.23V46.868c0-.68-.55-1.23-1.23-1.23h-4.09c-6.79 0-12.316-5.526-12.316-12.318 0-5.86 4.166-10.94 9.907-12.08a1.23 1.23 0 0 0 .98-1.046c.53-4.048 4.012-7.1 8.1-7.1 1.124 0 2.214.225 3.24.67a1.23 1.23 0 0 0 1.566-.535A20.856 20.856 0 0 1 44.498 2.46c11.383 0 20.728 9.26 20.83 20.642.005.569.4 1.06.953 1.188a10.76 10.76 0 0 1 8.368 10.533c0 5.963-4.852 10.815-10.815 10.815h-.67a1.23 1.23 0 1 0 0 2.461h.67c7.32 0 13.275-5.956 13.275-13.276 0-3.018-1.04-5.972-2.93-8.318zM9.843 66.445a2.874 2.874 0 0 1-2.871-2.87 2.874 2.874 0 0 1 2.87-2.872 2.874 2.874 0 0 1 2.872 2.871 2.874 2.874 0 0 1-2.871 2.871z\" />\n                    <path d=\"M59.996 24.38h.012a1.23 1.23 0 0 0 1.219-1.241 16.557 16.557 0 0 0-1.137-5.895 1.23 1.23 0 0 0-2.293.895c.627 1.605.953 3.295.969 5.022a1.23 1.23 0 0 0 1.23 1.22zM55.499 14.233a1.228 1.228 0 0 0 1.732.165 1.23 1.23 0 0 0 .165-1.732c-3.204-3.879-7.905-6.104-12.898-6.104a1.23 1.23 0 1 0 0 2.461c4.256 0 8.265 1.9 11 5.21z\" />\n                </g>\n            </svg>\n            <br /><span>Ana cloud signup</span>\n        </button>\n        <button mat-raised-button (click)=\"selfHost()\" color=\"primary\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 9.844 9.844\" width=\"84\" height=\"84\"><g transform=\"scale(.16406)\" fill=\"#fff\"><path d=\"M10.5 6.5A4.505 4.505 0 0 0 6 11c0 2.481 2.019 4.5 4.5 4.5S15 13.481 15 11s-2.019-4.5-4.5-4.5zm0 7A2.503 2.503 0 0 1 8 11c0-1.379 1.122-2.5 2.5-2.5S13 9.621 13 11s-1.122 2.5-2.5 2.5z\" /><circle cx=\"50\" cy=\"9.5\" r=\"1\" /><circle cx=\"46\" cy=\"9.5\" r=\"1\" /><circle cx=\"52\" cy=\"12.5\" r=\"1\" /><circle cx=\"48\" cy=\"12.5\" r=\"1\" /><circle cx=\"42\" cy=\"9.5\" r=\"1\" /><circle cx=\"44\" cy=\"12.5\" r=\"1\" /><circle cx=\"38\" cy=\"9.5\" r=\"1\" /><circle cx=\"40\" cy=\"12.5\" r=\"1\" /><circle cx=\"34\" cy=\"9.5\" r=\"1\" /><circle cx=\"36\" cy=\"12.5\" r=\"1\" /><path d=\"M60 16.892V5.108A4.613 4.613 0 0 0 55.392.5H4.608A4.613 4.613 0 0 0 0 5.108v11.783c0 1.469.703 2.764 1.777 3.608C.703 21.344 0 22.64 0 24.108v11.783c0 1.469.703 2.764 1.777 3.608C.703 40.344 0 41.64 0 43.108v11.783A4.613 4.613 0 0 0 4.608 59.5h50.783a4.613 4.613 0 0 0 4.608-4.608V43.108c0-1.469-.703-2.764-1.777-3.608C59.297 38.656 60 37.36 60 35.892V24.108c0-1.469-.703-2.764-1.777-3.608C59.297 19.656 60 18.36 60 16.892zm-2 26.216v11.783a2.611 2.611 0 0 1-2.608 2.608H4.608A2.61 2.61 0 0 1 2 54.892V43.108A2.611 2.611 0 0 1 4.608 40.5h50.783A2.611 2.611 0 0 1 58 43.108zm0-19v11.783a2.611 2.611 0 0 1-2.608 2.608H4.608A2.61 2.61 0 0 1 2 35.892V24.108A2.611 2.611 0 0 1 4.608 21.5h50.783A2.611 2.611 0 0 1 58 24.108zM4.608 19.5A2.611 2.611 0 0 1 2 16.892V5.108A2.611 2.611 0 0 1 4.608 2.5h50.783A2.611 2.611 0 0 1 58 5.108v11.783a2.611 2.611 0 0 1-2.608 2.608H4.608z\" /><path d=\"M10.5 34.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 6 30c0 2.481 2.019 4.5 4.5 4.5zm0-7c1.378 0 2.5 1.121 2.5 2.5s-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 8 30c0-1.379 1.122-2.5 2.5-2.5z\" /><circle cx=\"50\" cy=\"28.5\" r=\"1\" /><circle cx=\"46\" cy=\"28.5\" r=\"1\" /><circle cx=\"52\" cy=\"31.5\" r=\"1\" /><circle cx=\"48\" cy=\"31.5\" r=\"1\" /><circle cx=\"42\" cy=\"28.5\" r=\"1\" /><circle cx=\"44\" cy=\"31.5\" r=\"1\" /><circle cx=\"38\" cy=\"28.5\" r=\"1\" /><circle cx=\"40\" cy=\"31.5\" r=\"1\" /><circle cx=\"34\" cy=\"28.5\" r=\"1\" /><circle cx=\"36\" cy=\"31.5\" r=\"1\" /><path d=\"M10.5 53.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 6 49c0 2.481 2.019 4.5 4.5 4.5zm0-7c1.378 0 2.5 1.121 2.5 2.5s-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 8 49c0-1.379 1.122-2.5 2.5-2.5z\" /><circle cx=\"50\" cy=\"47.5\" r=\"1\" /><circle cx=\"46\" cy=\"47.5\" r=\"1\" /><circle cx=\"52\" cy=\"50.5\" r=\"1\" /><circle cx=\"48\" cy=\"50.5\" r=\"1\" /><circle cx=\"42\" cy=\"47.5\" r=\"1\" /><circle cx=\"44\" cy=\"50.5\" r=\"1\" /><circle cx=\"38\" cy=\"47.5\" r=\"1\" /><circle cx=\"40\" cy=\"50.5\" r=\"1\" /><circle cx=\"34\" cy=\"47.5\" r=\"1\" /><circle cx=\"36\" cy=\"50.5\" r=\"1\" /></g></svg>\n            <br /><span>Host it yourself</span>\n        </button>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"actions\">\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAnaChatServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_electron__ = __webpack_require__("../../../../ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ana_cloud_signup_ana_cloud_signup_component__ = __webpack_require__("../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetAnaChatServerComponent = (function () {
    function GetAnaChatServerComponent(electron, dialog) {
        this.electron = electron;
        this.dialog = dialog;
    }
    GetAnaChatServerComponent.prototype.ngOnInit = function () {
    };
    GetAnaChatServerComponent.prototype.selfHost = function () {
        this.electron.shell.openExternal('https://www.ana.chat/self-hosting.html?r=' + Math.random());
    };
    GetAnaChatServerComponent.prototype.anaCloud = function () {
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__ana_cloud_signup_ana_cloud_signup_component__["a" /* AnaCloudSignupComponent */], {
            width: 'auto'
        });
    };
    GetAnaChatServerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-ana-chat-server',
            template: __webpack_require__("../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_electron__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], GetAnaChatServerComponent);
    return GetAnaChatServerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/info-dialog/info-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-dialog-actions {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\nmat-form-field {\n    width: 100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/info-dialog/info-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{options.title}}</h2>\n<mat-dialog-content>\n    <p>{{options.message}}</p>\n    <mat-form-field [hidden]=\"options.dialogType!=InfoDialogType.Prompt\">\n        <input type=\"text\" name=\"text\" matInput [(ngModel)]=\"inputText\" (keypress)=\"inputKeypress($event)\" />\n    </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"primaryClick()\" *ngIf=\"primaryButtonText\">{{primaryButtonText}}</button>\n    <button mat-raised-button [color]=\"options.dialogType==InfoDialogType.Alert?'primary':''\" [matDialogClose]=\"false\">{{secondaryButtonText}}</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/info-dialog/info-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InfoDialogType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var InfoDialogComponent = (function () {
    function InfoDialogComponent(dialogRef, options) {
        this.dialogRef = dialogRef;
        this.options = options;
        this.InfoDialogType = InfoDialogType;
        this.dialogRef.disableClose = true;
        if (!options) {
            options = {
                dialogType: InfoDialogType.Alert,
                title: 'Title',
                message: 'Message'
            };
        }
        switch (options.dialogType) {
            case InfoDialogType.Confirm:
                {
                    this.primaryButtonText = "OK";
                    this.secondaryButtonText = "Cancel";
                }
                break;
            case InfoDialogType.Prompt:
                {
                    this.inputText = options.defaultInputText;
                    this.primaryButtonText = "Done";
                    this.secondaryButtonText = "Cancel";
                }
                break;
            case InfoDialogType.Alert:
            default:
                {
                    this.secondaryButtonText = "Close";
                }
                break;
        }
    }
    InfoDialogComponent.prototype.ngOnInit = function () {
    };
    InfoDialogComponent.prototype.inputKeypress = function (event) {
        if (event.keyCode == 13) {
            this.primaryClick();
        }
    };
    InfoDialogComponent.prototype.primaryClick = function () {
        switch (this.options.dialogType) {
            case InfoDialogType.Confirm:
                this.dialogRef.close(true);
                break;
            case InfoDialogType.Prompt:
                this.dialogRef.close(this.inputText);
                break;
            case InfoDialogType.Alert:
            default:
                this.dialogRef.close();
                break;
        }
    };
    InfoDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-dialog',
            template: __webpack_require__("../../../../../src/app/components/shared/info-dialog/info-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/info-dialog/info-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], InfoDialogComponent);
    return InfoDialogComponent;
}());

var InfoDialogType;
(function (InfoDialogType) {
    InfoDialogType[InfoDialogType["Prompt"] = 0] = "Prompt";
    InfoDialogType[InfoDialogType["Alert"] = 1] = "Alert";
    InfoDialogType[InfoDialogType["Confirm"] = 2] = "Confirm";
})(InfoDialogType || (InfoDialogType = {}));


/***/ }),

/***/ "../../../../../src/app/components/shared/loading-indicator/loading-indicator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatflow-loading {\n    z-index: 20;\n    padding: 10px 50px;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #8cc83c;\n}\n\n    .chatflow-loading > .loading-content {\n        width: 200px;\n        height: 200px;\n        position: fixed;\n        top: 40%;\n        left: 50%;\n        -webkit-transform: translate(-50%,-50%);\n        transform: translate(-50%,-50%);\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/loading-indicator/loading-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatflow-loading\">\n    <div class=\"loading-content\">\n        <img src=\"assets/img/ana.svg\" />\n        <br />\n        <svg class=\"lds-message\" style=\"transform: translateY(-82px);\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n            <g transform=\"translate(20 50)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"#ffffff\" transform=\"scale(0.977039 0.977039)\">\n                    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.375s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n                </circle>\n            </g>\n            <g transform=\"translate(40 50)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"#ffffff\" transform=\"scale(0.730912 0.730912)\">\n                    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.25s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n                </circle>\n            </g>\n            <g transform=\"translate(60 50)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"#ffffff\" transform=\"scale(0.37591 0.37591)\">\n                    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.125s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n                </circle>\n            </g>\n            <g transform=\"translate(80 50)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"#ffffff\" transform=\"scale(0.0819473 0.0819473)\">\n                    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"0s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n                </circle>\n            </g>\n        </svg>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/loading-indicator/loading-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent() {
    }
    LoadingIndicatorComponent.prototype.ngOnInit = function () {
    };
    LoadingIndicatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading-indicator',
            template: __webpack_require__("../../../../../src/app/components/shared/loading-indicator/loading-indicator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/loading-indicator/loading-indicator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingIndicatorComponent);
    return LoadingIndicatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/loading-mask/loading-mask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/loading-mask/loading-mask.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "../../../../../src/app/components/shared/loading-mask/loading-mask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingMaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingMaskComponent = (function () {
    function LoadingMaskComponent() {
    }
    LoadingMaskComponent.prototype.ngOnInit = function () {
    };
    LoadingMaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading-mask',
            template: __webpack_require__("../../../../../src/app/components/shared/loading-mask/loading-mask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/loading-mask/loading-mask.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingMaskComponent);
    return LoadingMaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n    width: 100%;\n}\n\nmat-dialog-actions > .spacing {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Login </h2>\n<mat-dialog-content>\n    <mat-card *ngIf=\"!savedConns || savedConns.length <= 0\" class=\"text-center\">\n        <h4>\n            Looks like you don't have any saved Ana chat server connections.\n            <br />\n            <br />\n            <button mat-raised-button color=\"primary\" (click)=\"managePublishServers()\">Add Ana chat server connection</button>\n        </h4>\n    </mat-card>\n\n    <mat-form-field *ngIf=\"savedConns && savedConns.length>0\">\n        <mat-select placeholder=\"Server\" [(ngModel)]=\"selectedServer\" name=\"PublishServer\">\n            <mat-option *ngFor=\"let conn of savedConns\" [value]=\"conn\">\n                {{ conn.Name }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <div *ngIf=\"selectedServer\">\n        <form (ngSubmit)=\"login()\">\n            <mat-form-field>\n                <input type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" matInput />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" matInput />\n            </mat-form-field>\n            <input type=\"submit\" hidden />\n        </form>\n    </div>\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <div class=\"left\" *ngIf=\"savedConns && savedConns.length>0\">\n        <button mat-raised-button (click)=\"managePublishServers()\">Add/edit Ana chat servers</button>\n    </div>\n    <div class=\"spacing\"></div>\n    <div class=\"right\">\n        <button mat-raised-button [disabled]=\"!selectedServer || !username || !password\" color=\"primary\" (click)=\"login()\">Login</button>\n        <button mat-raised-button (click)=\"dismiss()\">Dismiss</button>\n    </div>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chatflow_service__ = __webpack_require__("../../../../../src/app/services/chatflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_server_manager_chat_server_manager_component__ = __webpack_require__("../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(settings, chatFlowService, dialog, infoDialog, dataService, router, dialogRef) {
        this.settings = settings;
        this.chatFlowService = chatFlowService;
        this.dialog = dialog;
        this.infoDialog = infoDialog;
        this.dataService = dataService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.savedConns = [];
        this.dialogRef.disableClose = true;
        this.loadSavedConns();
        //this.dialogRef.afterClosed().subscribe(x => {
        //	if (!this.dataService.loggedInUser)
        //		this.router.navigateByUrl('/');
        //});
    }
    LoginComponent.prototype.loadSavedConns = function () {
        this.savedConns = this.settings.loadSavedConnections();
        if (this.savedConns.length == 1)
            this.selectedServer = this.savedConns[0];
        else
            this.selectedServer = null;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.dataService.loggedInUser = null;
        this.dataService.setConnection(this.selectedServer);
        this.infoDialog.showSpinner();
        this.dataService.login(this.username, this.password).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.dataService.loggedInUser = x.data;
                localStorage.setItem("user", JSON.stringify(x.data));
                _this.dialogRef.close(true);
            }
            else
                _this.dataService.handleTypedError(x.error, "Oops! Unable to login.", "Something went wrong while trying to login. Please try again.");
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Oops! Unable to login.", "Something went wrong while trying to login. Please try again.");
        });
    };
    LoginComponent.prototype.managePublishServers = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__chat_server_manager_chat_server_manager_component__["a" /* ChatServerManagerComponent */], {
            width: '60%',
        });
        dialogRef.afterClosed().subscribe(function (x) {
            _this.loadSavedConns();
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/shared/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_chatflow_service__["a" /* ChatFlowService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n    width: 100%;\n}\n\nmat-dialog-actions > .spacing {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n.desc {\n    font-size: 11px;\n    opacity: 0.6;\n}\n\nlabel.desc {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Publish chatbot</h2>\n<mat-dialog-content>\n    <mat-card *ngIf=\"!chatProjects || chatProjects.length <= 0\" class=\"text-center\">\n        <h4> Looks like you don't have any Ana chatbot projects yet. </h4>\n    </mat-card>\n    <mat-form-field *ngIf=\"chatProjects && chatProjects.length>0\" #chatProjectFormField tabindex=\"-1\">\n        <input tabindex=\"-1\" type=\"text\" placeholder=\"Choose a chatbot project\" aria-label=\"Chatbot Project\" matInput [(ngModel)]=\"filter\" [matAutocomplete]=\"auto\" name=\"chatProject\">\n        <mat-autocomplete tabindex=\"-1\" #auto=\"matAutocomplete\" (optionSelected)=\"optionSelected($event)\" [displayWith]=\"displayWith\">\n            <mat-option *ngFor=\"let option of filteredOptions()\" [value]=\"option\">\n                {{ option.name }} <span class=\"desc\">Last updated at {{option.updatedAt | date:'hh:mm a on dd-MM-yyyy'}} -- Id: {{ option.id }}</span>\n            </mat-option>\n        </mat-autocomplete>\n        <mat-hint *ngIf=\"added\">\n            {{added}}\n        </mat-hint>\n    </mat-form-field>\n    <section *ngIf=\"chatProjects && chatProjects.length>0\" class=\"text-center\">\n        <h3>Or</h3>\n        <br />\n    </section>\n    <div>\n        <h5>Create new chatbot project</h5>\n        <form (ngSubmit)=\"createAndPublish()\" class=\"form\">\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Id\" name=\"Id\" matInput [(ngModel)]=\"newChatProject.id\" required />\n                <mat-hint>New chatbot project id</mat-hint>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" placeholder=\"Name\" name=\"name\" matInput [(ngModel)]=\"newChatProject.name\" required />\n                <mat-hint>New chatbot project name</mat-hint>\n            </mat-form-field>\n            <input type=\"submit\" name=\"submit\" hidden />\n        </form>\n    </div>\n\n    <label class=\"desc\">You are logged into '{{chatConnName}}' Ana chat server</label>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-raised-button [disabled]=\"!canPublish()\" color=\"primary\" (click)=\"doPublish()\">Publish</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishChatbotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var PublishChatbotComponent = (function () {
    function PublishChatbotComponent(settings, globals, dataService, loginService, dialog, infoDialog, dialogRef, params) {
        this.settings = settings;
        this.globals = globals;
        this.dataService = dataService;
        this.loginService = loginService;
        this.dialog = dialog;
        this.infoDialog = infoDialog;
        this.dialogRef = dialogRef;
        this.params = params;
        this.chatProjects = [];
        this.newChatProject = {
            businessId: "",
            id: null,
            name: null
        };
        this.filter = "";
        this.pack = params.pack;
        this.businessId = params.bizId;
        this.loadChatProjects();
    }
    PublishChatbotComponent.prototype.ngOnInit = function () {
    };
    PublishChatbotComponent.prototype.canPublish = function () {
        if (this.selectedProject) {
            return true;
        }
        if (this.newChatProject && this.newChatProject.id && this.newChatProject.name) {
            return true;
        }
        return false;
    };
    PublishChatbotComponent.prototype.createAndPublish = function () {
        var _this = this;
        if (!this.newChatProject || !this.newChatProject.id || !this.newChatProject.name) {
            return;
        }
        this.infoDialog.showSpinner();
        this.newChatProject.businessId = this.businessId;
        this.dataService.createChatProject(this.newChatProject).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.selectedProject = _this.newChatProject;
                _this.doPublish();
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to create chatbot project", "Something went wrong while creating the chatbot project. Please try again.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to create chatbot project", "Something went wrong while creating the chatbot project. Please try again.");
        });
    };
    /*
    added = "";
    createNewChatProject() {
        let d = this.dialog.open(CreateChatbotComponent, {
            width: 'auto',
            disableClose: true,
            data: <BusinessDetails>{
                id: this.businessId
            }
        });
        d.afterClosed().subscribe(x => {
            if (x) {
                this.added = "New chat bot project created";
                setTimeout(() => this.added = null, 3000);
                this.loadChatProjects();
            }
        });
    }
    */
    PublishChatbotComponent.prototype.loadChatProjects = function () {
        var _this = this;
        var bizId = this.businessId;
        this.infoDialog.showSpinner();
        this.dataService.getChatProjects(bizId, 0, 10000).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.chatProjects = x.data.content;
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to fetch chat projects", "Something went wrong while trying to fetch chat projects. Please try again.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to fetch chat projects", "Something went wrong while trying to fetch chat projects. Please try again.");
        });
    };
    PublishChatbotComponent.prototype.doPublish = function () {
        var _this = this;
        if (!this.selectedProject) {
            if (this.newChatProject.id && this.newChatProject.name) {
                this.createAndPublish();
            }
            return;
        }
        this.infoDialog.confirm("Publish chatbot to '" + this.selectedProject.name + "'?", "Are you sure you want to publish this chatbot to " + this.selectedProject.name + "?", function (ok) {
            if (ok) {
                _this.infoDialog.showSpinner();
                _this.selectedProject.source = _this.pack;
                _this.selectedProject.flow = _this.globals.normalizeChatNodes(_this.pack.ChatNodes);
                _this.dataService.saveChatProject(_this.selectedProject).subscribe(function (x) {
                    _this.infoDialog.hideSpinner();
                    if (x.success) {
                        _this.infoDialog.alert('Done', 'Chatbot published successfully', function () { return _this.dismiss(); });
                    }
                    else {
                        _this.dataService.handleTypedError(x.error, "Oops!", "Something went wrong while publishing the chat project! Please try again.");
                    }
                }, function (err) {
                    _this.infoDialog.hideSpinner();
                    _this.dataService.handleError(err, "Oops!", "Something went wrong while publishing the chat project! Please try again.");
                });
            }
        });
    };
    PublishChatbotComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    PublishChatbotComponent.prototype.optionSelected = function (event) {
        if (event.option && event.option.value) {
            this.selectedProject = event.option.value;
        }
    };
    PublishChatbotComponent.prototype.displayWith = function (value) {
        return value ? value.name : null;
    };
    PublishChatbotComponent.prototype.filteredOptions = function () {
        var _this = this;
        if (typeof this.filter === 'string') {
            if (this.filter) {
                return this.chatProjects.filter(function (x) { return x.name.toLowerCase().indexOf(_this.filter.toLowerCase()) != -1; });
            }
            return this.chatProjects;
        }
    };
    Object.defineProperty(PublishChatbotComponent.prototype, "chatConnName", {
        get: function () {
            return this.dataService.chatServer.Name;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("chatProjectFormField"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatFormField */])
    ], PublishChatbotComponent.prototype, "chatProjectFormField", void 0);
    PublishChatbotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-publish-chatbot',
            template: __webpack_require__("../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.css")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], PublishChatbotComponent);
    return PublishChatbotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/publish-dialog/publish-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n    width: 100%;\n}\n\nmat-dialog-actions > .spacing {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/publish-dialog/publish-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Publish chatbot</h2>\n<mat-dialog-content>\n    <mat-card *ngIf=\"!savedConns || savedConns.length <= 0\" class=\"text-center\">\n        <h4>\n            Looks like you don't have any saved Ana chat server connections.\n            <br />\n            <br />\n            <button mat-raised-button color=\"primary\" (click)=\"managePublishServers()\">Add Ana chat server connection</button>\n        </h4>\n    </mat-card>\n\n    <mat-form-field *ngIf=\"savedConns && savedConns.length>0\">\n        <mat-select placeholder=\"Server\" [(ngModel)]=\"selectedServer\" name=\"PublishServer\">\n            <mat-option *ngFor=\"let conn of savedConns\" [value]=\"conn\">\n                {{ conn.Name }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"selectedServer\">\n        <mat-select placeholder=\"Chat Project\" [(ngModel)]=\"selectedProject\" name=\"Project\">\n            <mat-option *ngFor=\"let proj of selectedServer.ChatProjects\" [value]=\"proj\">\n                {{ proj.Name }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <div class=\"left\" *ngIf=\"savedConns && savedConns.length>0\">\n        <button mat-raised-button (click)=\"managePublishServers()\">Add/edit Ana chat servers</button>\n    </div>\n    <div class=\"spacing\"></div>\n    <div class=\"right\">\n        <button mat-raised-button [disabled]=\"!selectedServer || !selectedProject\" color=\"primary\" (click)=\"publish()\">Publish</button>\n        <button mat-raised-button (click)=\"dismiss()\">Dismiss</button>\n    </div>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/publish-dialog/publish-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chatflow_service__ = __webpack_require__("../../../../../src/app/services/chatflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_server_manager_chat_server_manager_component__ = __webpack_require__("../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_chatflow_models__ = __webpack_require__("../../../../../src/app/models/chatflow.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var PublishDialogComponent = (function () {
    function PublishDialogComponent(settings, chatFlowService, dialog, infoDialog, dialogRef, pack) {
        this.settings = settings;
        this.chatFlowService = chatFlowService;
        this.dialog = dialog;
        this.infoDialog = infoDialog;
        this.dialogRef = dialogRef;
        this.pack = pack;
        this.savedConns = [];
        this.chatProjects = [];
        this.loadSavedConns();
    }
    PublishDialogComponent.prototype.loadSavedConns = function () {
        this.savedConns = this.settings.loadSavedConnections();
        this.selectedServer = null;
        this.selectedProject = null;
    };
    PublishDialogComponent.prototype.ngOnInit = function () {
    };
    PublishDialogComponent.prototype.publish = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.chatFlowService.chatProjectExists(this.selectedServer, this.selectedProject).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            _this.infoDialog.confirm("Sure?", "Chat project with id '" + _this.selectedProject.Id + "' already exists. Publishing this will overwrite it. Do you want to proceed?", function (ok) {
                if (ok)
                    _this.doPublish();
            });
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.doPublish();
        });
    };
    PublishDialogComponent.prototype.doPublish = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.chatFlowService.publishProject(this.selectedServer, this.selectedProject, this.pack).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            _this.infoDialog.alert('Done', 'Chatbot published successfully', function () { return _this.dismiss(); });
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.infoDialog.alert('Done', 'Oops! Something went wrong while publishing the chat project! Please try again.');
        });
    };
    PublishDialogComponent.prototype.managePublishServers = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__chat_server_manager_chat_server_manager_component__["a" /* ChatServerManagerComponent */], {
            width: '60%',
        });
        dialogRef.afterClosed().subscribe(function (x) {
            _this.loadSavedConns();
        });
    };
    PublishDialogComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    PublishDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-publish-dialog',
            template: __webpack_require__("../../../../../src/app/components/shared/publish-dialog/publish-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/publish-dialog/publish-dialog.component.css")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_chatflow_service__["a" /* ChatFlowService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], PublishDialogComponent);
    return PublishDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/update-password/update-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\nmat-dialog-actions button {\n    margin-left: 0 !important;\n    margin-right: 8px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/update-password/update-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Update Password</h2>\n<mat-dialog-content>\n    <div class=\"center-block center-content\">\n        <form (ngSubmit)=\"save()\" class=\"form\">\n            <mat-form-field>\n                <input type=\"password\" placeholder=\"New Password\" name=\"password\" matInput [(ngModel)]=\"password\" required />\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" matInput [(ngModel)]=\"confirmPassword\" required #pwd=\"ngModel\" />\n                <mat-hint align=\"start\" *ngIf=\"(password!=confirmPassword) && (pwd.dirty || pwd.touched)\" style=\"color:red\">\n                    Passwords do not match\n                </mat-hint>\n            </mat-form-field>\n            <input type=\"submit\" name=\"submit\" hidden />\n        </form>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button matTooltip=\"Save\" color=\"primary\" mat-raised-button (click)=\"save()\">Update Password</button>\n    <button mat-raised-button matDialogClose>Dismiss</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/shared/update-password/update-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UpdatePasswordComponent = (function () {
    function UpdatePasswordComponent(global, infoDialog, dataService, dialogRef, user) {
        this.global = global;
        this.infoDialog = infoDialog;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.user = user;
    }
    UpdatePasswordComponent.prototype.ngOnInit = function () {
    };
    UpdatePasswordComponent.prototype.save = function () {
        var _this = this;
        if (!this.global.pwdMatch(this.password, this.confirmPassword)) {
            this.infoDialog.alert("Passwords do not match or not secure", "Please ensure the password and confirm password is same. Also, a password must be at least 6 characters.");
            return;
        }
        this.infoDialog.showSpinner();
        this.dataService.updatePassword(this.user.id, this.password).subscribe(function (x) {
            _this.infoDialog.hideSpinner();
            if (x.success) {
                _this.infoDialog.alert("Password updated", "Password has been updated successfully", function () {
                    _this.dialogRef.close();
                });
            }
            else {
                _this.dataService.handleTypedError(x.error, "Unable to update password", "Something went wrong while trying to update the password.");
            }
        }, function (err) {
            _this.infoDialog.hideSpinner();
            _this.dataService.handleError(err, "Unable to update password", "Something went wrong while trying to update the password.");
        });
    };
    UpdatePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-password',
            template: __webpack_require__("../../../../../src/app/components/shared/update-password/update-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/update-password/update-password.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialogRef */], Object])
    ], UpdatePasswordComponent);
    return UpdatePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/studio/chatflow/chatflow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** {\n    position: static !important;\n    top: auto !important;\n}*/\n.pointer-events-none {\n    pointer-events: none;\n}\n\n.pointer-cursor {\n    cursor: pointer;\n}\n\n.not-allowed-cursor {\n    cursor: not-allowed;\n}\n\n.moving-cursor {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.section-icon {\n    width: 23px;\n}\n\n.chatflow-actions {\n    margin: 15px 0;\n    z-index: 10;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n    .chatflow-actions > button {\n        margin: 8px 0;\n        font-size: 12px;\n    }\n\n    .chatflow-actions .fab-btn-icon {\n        margin-bottom: -13px !important;\n    }\n\n.chatflow-root-svg {\n    overflow: hidden;\n    width: calc(99vw - 88px);\n    height: 99vh;\n}\n\n.chatflow-designer-wrapper {\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n}\n\n    .chatflow-designer-wrapper .left-sidebar {\n        height: 100vh;\n        background-color: #8cc83c;\n        color: white;\n    }\n\n    .chatflow-designer-wrapper .chatflow-root-svg {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n    }\n\n.chatnode {\n    background: none;\n    cursor: move;\n    border: 2px solid transparent;\n    border-radius: 12px;\n}\n\n    .chatnode:hover {\n        border: 2px solid rgba(140, 200, 60, 0.50);\n    }\n\n    .chatnode.selected {\n        border: 2px solid #8cc83c;\n    }\n\n    .chatnode.click-connect {\n        cursor: alias;\n    }\n\n.chatnode-header {\n    height: 30px;\n    border-radius: 10px 10px 0 0;\n    background-color: #666666;\n}\n\n    .chatnode-header.startnode {\n        background-color: #8cc83c;\n    }\n\n    .chatnode-header > p {\n        padding: 5px;\n        text-align: center;\n        color: white\n    }\n\n.chatnode-body {\n    background-color: white;\n    color: #666666;\n    border-radius: 0 0 10px 10px;\n}\n\n.chatnode-sections {\n    height: 100%;\n    padding: 0 5px\n}\n\n    .chatnode-sections > table {\n        width: 100%;\n    }\n\n        .chatnode-sections > table > tr {\n            border-bottom: 1px dashed #F0F0F0;\n        }\n\n            .chatnode-sections > table > tr > td {\n                padding-left: 5px;\n            }\n\n.section-icon > fa {\n    font-size: 20px;\n}\n\n.section-alias {\n    padding-right: 5px\n}\n\n    .section-alias > div {\n        margin: 10px 0px 10px 5px\n    }\n\n.chatnode-buttons {\n    height: 100%;\n    text-align: center;\n    width: 100%;\n    margin-top: 10px\n}\n\n    .chatnode-buttons > table {\n        width: 100%;\n        table-layout: fixed;\n    }\n\n        .chatnode-buttons > table > tr > td {\n            width: 80px;\n            padding: 10px;\n        }\n\n            .chatnode-buttons > table > tr > td > div {\n                text-align: center;\n            }\n\n                .chatnode-buttons > table > tr > td > div > .fa {\n                    font-size: 20px;\n                }\n\n.chatnode-empty {\n    text-align: center;\n    width: 100%;\n    padding: 5px 0 10px 0; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/studio/chatflow/chatflow.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div [hidden]=\"layoutReady()\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n    <div class=\"chatflow-designer-wrapper\">\n        <div class=\"left-sidebar\">\n            <div class=\"chatflow-actions\" [hidden]=\"!layoutReady()\">\n                <button matTooltip=\"Add new node\" matTooltipPosition=\"right\" type=\"button\" mat-button (click)=\"addNewNode()\">\n                    <mat-icon class=\"fab-btn-icon\">add</mat-icon><br />\n                    ADD\n                </button>\n                <button matTooltip=\"Save chatbot project\" type=\"button\" mat-button matTooltipPosition=\"right\" (click)=\"saveChatFlow(true)\">\n                    <mat-icon class=\"fab-btn-icon\">save</mat-icon><br />\n                    SAVE\n                </button>\n                <button matTooltip=\"Download chatbot project\" type=\"button\" mat-button matTooltipPosition=\"right\" (click)=\"exportChatFlow()\">\n                    <mat-icon class=\"fab-btn-icon\">file_download</mat-icon><br />\n                    EXPORT\n                </button>\n                <button matTooltip=\"Publish to Ana chat server\" type=\"button\" mat-button matTooltipPosition=\"right\" (click)=\"openPublishDialog()\">\n                    <mat-icon class=\"fab-btn-icon\">publish</mat-icon><br />\n                    PUBLISH\n                </button>\n                <button matTooltip=\"Run chat in simulator\" type=\"button\" mat-button matTooltipPosition=\"right\" (click)=\"playChatFlow()\">\n                    <mat-icon class=\"fab-btn-icon\">play_arrow</mat-icon><br />\n                    RUN CHAT\n                </button>\n                <button matTooltip=\"Fit\" type=\"button\" mat-button matTooltipPosition=\"right\" (click)=\"fitViewToAllNodes()\">\n                    <mat-icon class=\"fab-btn-icon\">zoom_out_map</mat-icon><br />\n                    FIT\n                </button>\n                <button matTooltip=\"Close designer\" type=\"button\" mat-button matTooltipPosition=\"right\" (click)=\"gotoStartup()\">\n                    <mat-icon class=\"fab-btn-icon\">close</mat-icon><br />\n                    CLOSE\n                </button>\n            </div>\n        </div>\n        <div class=\"designer-panel\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" #chatflowRoot [attr.visibility]=\"(layoutReady()?'visible':'collapse')\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\" (mousedown)=\"mouseDown($event)\" (mouseleave)=\"mouseLeave($event)\" [attr.viewBox]=\"viewBox()\" (wheel)=\"designerWheel($event)\" class=\"chatflow-root-svg\">\n                <defs>\n                    <linearGradient id=\"NodeBG\">\n                        <stop offset=\"0\" stop-color=\"#CCC\" />\n                    </linearGradient>\n                    <linearGradient id=\"NodeFG\">\n                        <stop offset=\"0\" stop-color=\"black\" />\n                    </linearGradient>\n                    <linearGradient id=\"NodeHeaderBG\">\n                        <stop offset=\"0\" stop-color=\"gray\" />\n                    </linearGradient>\n                    <linearGradient id=\"NodeHeaderFG\">\n                        <stop offset=\"0\" stop-color=\"white\" />\n                    </linearGradient>\n                    <marker id=\"arrow\" markerWidth=\"10\" markerHeight=\"10\" refX=\"0\" refY=\"3\" orient=\"auto\" markerUnits=\"strokeWidth\">\n                        <path d=\"M0,0 L0,6 L9,3 z\" fill=\"darkgray\" opacity=\"0.5\" />\n                    </marker>\n                </defs>\n\n                <g *ngFor=\"let chatNodeVM of chatFlowNetwork.chatNodeVMs\" transform=\"translate(20,20)\">\n                    <foreignObject [attr.transform]=\"ngTr(chatNodeVM.x(), chatNodeVM.y())\" (mousedown)=\"chatNodeVM.mouseDown($event)\" (mouseup)=\"chatNodeVM.mouseUp($event)\" (mouseleave)=\"chatNodeVM.mouseLeave($event)\" (mouseenter)=\"chatNodeVM.mouseEnter($event)\" fill=\"url(#NodeFG)\" class=\"node-section-title noselect\" x=\"0\" y=\"0\" [attr.width]=\"chatNodeVM.width()-30\" [attr.height]=\"chatNodeVM.height()\" height=\"0\" width=\"0\" (dblclick)=\"openEditor(chatNodeVM)\" (click)=\"chatNodeVM.nodeClick()\">\n                        <xhtml:div xmlns=\"http://www.w3.org/1999/xhtml\" [attr.node-id]=\"chatNodeVM.chatNode.Id\">\n                            <xhtml:div onmousedown=\"return false;//to avoid text selection, creates issue with node drag\" class=\"noselect chatnode\" [class.selected]=\"chatNodeVM.isSelected\" [class.click-connect]=\"chatNodeVM.clickConnectionActive()\">\n                                <xhtml:div [ngClass]=\"{'startnode':chatNodeVM.chatNode.IsStartNode}\" class=\"chatnode-header\">\n                                    <xhtml:p>\n                                        {{MH.chatNodeAlias(chatNodeVM.chatNode)}}\n                                    </xhtml:p>\n                                </xhtml:div>\n                                <xhtml:div class=\"chatnode-body\">\n                                    <xhtml:div class=\"chatnode-sections\">\n                                        <xhtml:table>\n                                            <xhtml:tr *ngFor=\"let section of chatNodeVM.chatNode.Sections\" [attr.title]=\"MH.sectionAlias(section)\">\n                                                <xhtml:td valign=\"middle\" class=\"section-icon\">\n                                                    <xhtml:i class=\"fa fa-file-text-o\"></xhtml:i>\n                                                </xhtml:td>\n                                                <xhtml:td valign=\"middle\" class=\"section-alias\">\n                                                    <xhtml:div>{{MH.sectionAlias(section) | ellipsis:50}}</xhtml:div>\n                                                </xhtml:td>\n                                            </xhtml:tr>\n                                        </xhtml:table>\n                                    </xhtml:div>\n                                    <xhtml:div class=\"chatnode-buttons\">\n                                        <xhtml:table [attr.node-id]=\"chatNodeVM.chatNode.Id\">\n                                            <xhtml:tr>\n                                                <xhtml:td *ngFor=\"let chatButton of chatNodeVM.chatNode.Buttons\" valign=\"middle\">\n                                                    <xhtml:div [attr.title]=\"MH.chatButtonAlias(chatButton)\">\n                                                        <xhtml:i class=\"fa fa-link\"></xhtml:i>\n                                                        <br />\n                                                        <xhtml:div>{{MH.chatButtonAlias(chatButton) | ellipsis:50 }}</xhtml:div>\n                                                    </xhtml:div>\n                                                </xhtml:td>\n                                            </xhtml:tr>\n                                        </xhtml:table>\n                                    </xhtml:div>\n                                    <xhtml:div *ngIf=\"chatNodeVM.isNodeEmpty()\" class=\"chatnode-empty\">\n                                        <xhtml:span>\n                                            Double click to edit node\n                                        </xhtml:span>\n                                    </xhtml:div>\n                                </xhtml:div>\n                            </xhtml:div>\n                        </xhtml:div>\n                    </foreignObject>\n                </g>\n\n                <g *ngFor=\"let connection of chatFlowNetwork.chatNodeConnections\" transform=\"translate(15,20)\">\n                    <path [attr.d]=\"connection.path()\" (mouseenter)=\"connection.mouseEnter($event)\" fill=\"transparent\" stroke=\"darkgray\" stroke-opacity=\"0.5\" stroke-width=\"3\" d=\"M 0,0\" (click)=\"connection.remove($event)\" class=\"not-allowed-cursor\" fill-rule=\"evenodd\"></path>\n                </g>\n\n                <g *ngFor=\"let chatNodeVM of chatFlowNetwork.chatNodeVMs\" transform=\"translate(20,20)\">\n                    <g *ngFor=\"let connector of chatNodeVM.chatButtonConnectors()\" transform=\"translate(-7,0)\">\n                        <circle r=\"0\" [attr.r]=\"connector.circleRadius-3\" [attr.cx]=\"connector.x()\" [attr.cy]=\"connector.y()\" [attr.fill]=\"connector.isConnected()?'darkgray':'#F0F0F0'\" stroke=\"#F0F0F0\" stroke-width=\"3\" (mousedown)=\"connector.mouseDown($event)\" (mouseup)=\"connector.startDirectConnection($event)\" style=\"cursor: crosshair; padding: 20px\"></circle>\n                    </g>\n                    <circle r=\"0\" [attr.r]=\"chatNodeVM.circleRadius-3\" [attr.cx]=\"chatNodeVM.nodeConnectorX()\" [attr.cy]=\"chatNodeVM.nodeConnectorY()\" fill=\"darkgray\" stroke=\"#F0F0F0\" stroke-width=\"3\" transform=\"translate(-7,0)\"></circle>\n                </g>\n\n                <g transform=\"translate(15,20)\" [attr.visibility]=\"chatFlowNetwork.newChatNodeConnection.isHidden?'collapse':'visible'\" class=\"pointer-events-none\">\n                    <path [attr.d]=\"chatFlowNetwork.newChatNodeConnection.path()\" fill=\"transparent\" [attr.stroke]=\"chatFlowNetwork.newChatNodeConnection.canConnect?'darkgray':'crimson'\" stroke=\"crimson\" stroke-width=\"3\" d=\"M 0,0\" class=\"pointer-events-none\" fill-rule=\"evenodd\"></path>\n                    <circle r=\"3\" [attr.cx]=\"chatFlowNetwork.newChatNodeConnection.destX\" [attr.cy]=\"chatFlowNetwork.newChatNodeConnection.destY\" fill=\"darkgray\" [attr.fill]=\"chatFlowNetwork.newChatNodeConnection.canConnect?'darkgray':'crimson'\" class=\"pointer-events-none\"></circle>\n                </g>\n            </svg>\n        </div>\n    </div>\n</div>\n<app-simulator-frame #simulator>\n</app-simulator-frame>\n<hotkeys-cheatsheet title=\"Keyboard Shortcuts:\"></hotkeys-cheatsheet>"

/***/ }),

/***/ "../../../../../src/app/components/studio/chatflow/chatflow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatFlowComponent; });
/* unused harmony export ChatNodeVM */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chatflow_service__ = __webpack_require__("../../../../../src/app/services/chatflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_chatflow_models__ = __webpack_require__("../../../../../src/app/models/chatflow.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nodeeditor_nodeeditor_component__ = __webpack_require__("../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bson__ = __webpack_require__("../../../../bson/lib/bson/bson.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bson___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bson__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__simulator_frame_simulator_frame_component__ = __webpack_require__("../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_simulator_service__ = __webpack_require__("../../../../../src/app/services/simulator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_publish_chatbot_publish_chatbot_component__ = __webpack_require__("../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__ = __webpack_require__("../../../../angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_business_picker_business_picker_component__ = __webpack_require__("../../../../../src/app/components/shared/business-picker/business-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ChatFlowComponent = (function () {
    function ChatFlowComponent(chatFlowService, dialog, infoDialog, route, router, dataService, loginService, snakbar, hotkeys, globalsService, simulatorService, settings) {
        var _this = this;
        this.chatFlowService = chatFlowService;
        this.dialog = dialog;
        this.infoDialog = infoDialog;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.loginService = loginService;
        this.snakbar = snakbar;
        this.hotkeys = hotkeys;
        this.globalsService = globalsService;
        this.simulatorService = simulatorService;
        this.settings = settings;
        this.projName = "";
        this.keymapOnDesigner = [
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"](["command+s", "ctrl+s"], function (e, s) {
                _this.saveChatFlow(true);
                return false;
            }, [], "Save the chat flow"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"](["command+r", "ctrl+r"], function (e, s) {
                _this.playChatFlow();
                return false;
            }, [], "Run the chat"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"]("n", function (e, s) {
                _this.addNewNode();
                return false;
            }, [], "Add a new node"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"]("c", function (e, s) {
                _this.cloneSelectedNodes();
                return false;
            }, [], "Clone selected nodes"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"]("esc", function (e, s) {
                _this.clearSelection();
                return false;
            }, [], "Clear selection"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"]("del", function (e, s) {
                _this.deleteSelectedNodes();
                return false;
            }, [], "Delete selected nodes"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"]("alt+f", function (e, s) {
                _this.fitViewToAllNodes();
                return false;
            }, [], "Fit to screen"),
            new __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["Hotkey"]("alt+w", function (e, s) {
                _this.gotoStartup();
                return false;
            }, [], "Close the designer")
        ];
        this._isMouseDown = false;
        this.animationFrameId = 0;
        this.chatFlowNetwork = new ChatFlowNetwork(this, this.infoDialog, this.snakbar);
        this.chatFlowNetwork.newChatNodeConnection.isHidden = true;
        this._viewBoxX = 0;
        this._viewBoxY = 0;
        this._viewBoxWidth = Config.defaultDesignerWidth;
        this._viewBoxHeight = Config.defaultDesignerHeight;
        globalsService.chatFlowComponent = this;
        this.MH = new __WEBPACK_IMPORTED_MODULE_6__models_chatflow_models__["e" /* ModelHelpers */](globalsService, infoDialog);
    }
    ChatFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (x) {
            _this.projName = x.get('proj');
            if (_this.projName) {
                _this.globalsService.setPageTitle(_this.projName);
                var proj = _this.settings.getChatProject(_this.projName);
                if (proj)
                    _this.loadChatFlowPack(proj);
                else
                    _this.router.navigateByUrl('/studio');
            }
        });
        this.bindDesignerShortcuts();
    };
    ChatFlowComponent.prototype.ngOnDestroy = function () {
        this.unbindDesignerShortcuts();
    };
    ChatFlowComponent.prototype.chatFlowRootSVG = function () {
        return this.chatflowRoot.nativeElement;
    };
    ChatFlowComponent.prototype.documentKeyDown = function (event) {
        if (event.keyCode == 17) {
            this.ctrlDown = true;
        }
    };
    ChatFlowComponent.prototype.documentKeyUp = function (event) {
        if (event.keyCode == 17) {
            this.ctrlDown = false;
        }
    };
    ChatFlowComponent.prototype.bindDesignerShortcuts = function () {
        var _this = this;
        this.unbindDesignerShortcuts();
        this.keymapOnDesigner.forEach(function (x) { return _this.hotkeys.add(x); });
    };
    ChatFlowComponent.prototype.unbindDesignerShortcuts = function () {
        var _this = this;
        this.keymapOnDesigner.forEach(function (x) { return _this.hotkeys.remove(x); });
    };
    ChatFlowComponent.prototype.deleteSelectedNodes = function () {
        var _this = this;
        var selectedNodes = this.chatFlowNetwork.selectedNodes();
        if (!selectedNodes || selectedNodes.length <= 0) {
            return;
        }
        var title = "Delete " + selectedNodes.length + " nodes?";
        var message = "Are you sure, you want to delete " + selectedNodes.length + " selected nodes?";
        if (selectedNodes.length == 1) {
            var selectedNode = selectedNodes[0];
            var name_1 = this.MH.chatNodeAlias(selectedNode.chatNode);
            title = "Delete '" + name_1 + "' node?";
            message = "Are you sure, you want to delete " + name_1 + " nodes?";
        }
        this.infoDialog.confirm(title, message, function (ok) {
            if (ok) {
                _this.deleteMultipleNodes(selectedNodes);
                _this.saveChatFlow();
            }
        });
    };
    ChatFlowComponent.prototype.clearSelection = function () {
        this.chatFlowNetwork.chatNodeVMs.forEach(function (x) {
            x.isSelected = false;
        });
    };
    ChatFlowComponent.prototype.cloneSelectedNodes = function () {
        var _this = this;
        var selectedNodes = this.chatFlowNetwork.selectedNodes();
        if (!selectedNodes || selectedNodes.length <= 0) {
            return;
        }
        selectedNodes.forEach(function (node) {
            var cloneNode = _this.globalsService.cloneNode(node.chatNode);
            if (!cloneNode)
                return;
            var newNodeVM = new ChatNodeVM(_this.chatFlowNetwork, cloneNode, _this.snakbar);
            newNodeVM._x = node._x + 100;
            newNodeVM._y = node._y + 100;
            newNodeVM._layoutUpdated = true; //To skip the loading indicator
        });
        this.chatFlowNetwork.updateChatNodeConnections();
        this.updateLayout();
        this.saveChatFlow();
    };
    ChatFlowComponent.prototype.deleteMultipleNodes = function (nodesVMs) {
        var _loop_1 = function (i) {
            var nodeVM = nodesVMs[i];
            elementIdxToDel = this_1.chatFlowNetwork.chatNodeVMs.findIndex(function (x) { return x.chatNode.Id == nodeVM.chatNode.Id; });
            this_1.chatFlowNetwork.chatNodeVMs.splice(elementIdxToDel, 1);
        };
        var this_1 = this, elementIdxToDel;
        for (var i = 0; i < nodesVMs.length; i++) {
            _loop_1(i);
        }
        this.chatFlowNetwork.updateChatNodeConnections();
        this.chatFlowNetwork.parent.updateLayout();
    };
    ChatFlowComponent.prototype.updateLayout = function () {
        var _this = this;
        if (this.chatFlowNetwork &&
            this.chatFlowNetwork.chatNodeVMs &&
            this.chatFlowNetwork.chatNodeVMs.length > 0 &&
            this.chatflowRoot) {
            var ele = this.chatFlowRootSVG();
            if (ele.querySelector) {
                for (var i = 0; i < this.chatFlowNetwork.chatNodeVMs.length; i++) {
                    var chatNode = this.chatFlowNetwork.chatNodeVMs[i];
                    var _updateNodeLayoutInit = this.updateNodeLayout(chatNode);
                    if (!_updateNodeLayoutInit || !chatNode._layoutUpdated) {
                        window.requestAnimationFrame(function () { return _this.updateLayout(); });
                        break;
                    }
                }
            }
        }
    };
    ChatFlowComponent.prototype.updateNodeLayout = function (chatNodeVM) {
        var _this = this;
        var btnsTable = this.chatFlowRootSVG().querySelector("table[node-id='" + chatNodeVM.chatNode.Id + "']");
        if (btnsTable) {
            if (!chatNodeVM._layoutUpdated)
                chatNodeVM._btnTableWidth = btnsTable.getBoundingClientRect().width;
            else
                chatNodeVM._btnTableWidth = btnsTable.clientWidth;
            chatNodeVM._width = ((chatNodeVM._width > chatNodeVM._btnTableWidth) ? chatNodeVM._width : chatNodeVM._btnTableWidth);
            window.requestAnimationFrame(function () {
                var nodeRoot = _this.chatFlowRootSVG().querySelector("div[node-id='" + chatNodeVM.chatNode.Id + "']");
                chatNodeVM._height = nodeRoot.clientHeight;
                chatNodeVM._layoutUpdated = true;
            });
            return true;
        }
        return false;
    };
    ChatFlowComponent.prototype.ngTr = function (x, y) {
        return "translate(" + x + "," + y + ")";
    };
    ChatFlowComponent.prototype.mouseMove = function (event) {
        if (!this.chatFlowNetwork.newChatNodeConnection.isHidden) {
            var targetXY = this.transformCoordinates(event.pageX, event.pageY, event);
            this.chatFlowNetwork.newChatNodeConnection.destX = targetXY.x - 30;
            this.chatFlowNetwork.newChatNodeConnection.destY = targetXY.y - 30;
        }
        if (this.chatFlowNetwork.draggingChatNode) {
            try {
                var targetXY = this.transformCoordinates(event.pageX, event.pageY, event);
                var offset = this.chatFlowNetwork.draggingChatNodeOffset;
                this.chatFlowNetwork.draggingChatNode._x = targetXY.x - offset.x;
                this.chatFlowNetwork.draggingChatNode._y = targetXY.y - offset.y;
                var selectedNodes = this.chatFlowNetwork.selectedNodes();
                if (selectedNodes && selectedNodes.length > 0) {
                    for (var i = 0; i < selectedNodes.length; i++) {
                        var thisNode = selectedNodes[i];
                        var thisOffset = this.chatFlowNetwork.selectedNodeOffsets[thisNode.chatNode.Id];
                        if (thisOffset) {
                            thisNode._x = targetXY.x - thisOffset.x;
                            thisNode._y = targetXY.y - thisOffset.y;
                        }
                    }
                }
            }
            catch (e) {
                this.chatFlowNetwork.draggingChatNode._x += event.movementX;
                this.chatFlowNetwork.draggingChatNode._y += event.movementY;
            }
        }
        if (this._isMouseDown) {
            this._viewBoxX -= event.movementX;
            this._viewBoxY -= event.movementY;
        }
    };
    ChatFlowComponent.prototype.transformCoordinates = function (x, y, event) {
        var svg_elem = this.chatFlowRootSVG();
        var matrix = svg_elem.getScreenCTM();
        var point = svg_elem.createSVGPoint();
        point.x = x - event.view.pageXOffset;
        point.y = y - event.view.pageYOffset;
        return point.matrixTransform(matrix.inverse());
    };
    ChatFlowComponent.prototype.mouseDown = function (event) {
        //cancel any ongoing animation as user might have interrupted it by doing the mouse down.
        this.zoomCancel();
        //Check if mouse is captured by others
        if (this.chatFlowNetwork.newChatNodeConnection.isHidden && !this.chatFlowNetwork.draggingChatNode)
            this._isMouseDown = true;
        else
            this._isMouseDown = false;
    };
    ChatFlowComponent.prototype.mouseUp = function (event) {
        this.resetDraggingState();
    };
    ChatFlowComponent.prototype.mouseLeave = function (event) {
        this.resetDraggingState();
    };
    ChatFlowComponent.prototype.viewBox = function () {
        //0 0 1000 500
        return this._viewBoxX + " " + this._viewBoxY + " " + this._viewBoxWidth + " " + this._viewBoxHeight;
    };
    ChatFlowComponent.prototype.zoomToRect = function (x, y, width, height) {
        this._viewBoxX = x;
        this._viewBoxY = y;
        this._viewBoxWidth = width;
        this._viewBoxHeight = height;
    };
    ChatFlowComponent.prototype.zoomToRectWithAnimation = function (x, y, width, height) {
        this.zoomToRectAnimIntermediate(this._viewBoxX, this._viewBoxY, this._viewBoxWidth, this._viewBoxHeight, x, y, width, height);
    };
    ChatFlowComponent.prototype.zoomCancel = function () {
        if (this.animationFrameId)
            cancelAnimationFrame(this.animationFrameId);
    };
    ChatFlowComponent.prototype.zoomToRectAnimIntermediate = function (x1, y1, width1, height1, x2, y2, width2, height2) {
        var _this = this;
        var step = Config.viewBoxAnimStep * ((Math.abs(x1 - x2) + Math.abs(y1 - y2) + Math.abs(width1 - width2) + Math.abs(height1 - height2)) / 100);
        this._viewBoxX = this.tendValue(x1, x2, step);
        this._viewBoxY = this.tendValue(y1, y2, step);
        this._viewBoxWidth = this.tendValue(width1, width2, step);
        this._viewBoxHeight = this.tendValue(height1, height2, step);
        if (!this.approxEquals(this._viewBoxX, x2, step) ||
            !this.approxEquals(this._viewBoxY, y2, step) ||
            !this.approxEquals(this._viewBoxWidth, width2, step) ||
            !this.approxEquals(this._viewBoxHeight, height2, step))
            this.animationFrameId = requestAnimationFrame(function () {
                _this.zoomToRectAnimIntermediate(_this._viewBoxX, _this._viewBoxY, _this._viewBoxWidth, _this._viewBoxHeight, x2, y2, width2, height2);
            });
        else
            this.animationFrameId = 0;
    };
    ChatFlowComponent.prototype.tendValue = function (value, tendsTo, step) {
        return (Math.abs(value - tendsTo) > step ? (value > tendsTo ? value - step : value + step) : value);
    };
    ChatFlowComponent.prototype.approxEquals = function (a, b, approx) {
        return Math.abs(Math.round(b) - Math.round(a)) <= Math.round(approx);
    };
    ChatFlowComponent.prototype.fitViewToAllNodes = function () {
        this.fitViewToNodes(this.chatFlowNetwork.chatNodeVMs);
    };
    ChatFlowComponent.prototype.fitViewToNodes = function (chatNodeVMs) {
        var Xs = chatNodeVMs.map(function (x) { return x._x; });
        var Ys = chatNodeVMs.map(function (x) { return x._y; });
        var XsWithWidth = chatNodeVMs.map(function (x) { return x._x + x._width; });
        var YsWithHeight = chatNodeVMs.map(function (x) { return x._y + x._height; });
        var minX = Math.min.apply(Math, Xs);
        var minY = Math.min.apply(Math, Ys);
        var maxX = Math.max.apply(Math, XsWithWidth);
        var maxY = Math.max.apply(Math, YsWithHeight);
        var width = maxX - minX;
        var height = maxY - minY;
        if (width < Config.maxZoomWidth)
            width = Config.maxZoomWidth;
        if (height < Config.maxZoomHeight)
            height = Config.maxZoomHeight;
        this.zoomToRectWithAnimation(minX, minY, width, height);
    };
    ChatFlowComponent.prototype.designerWheel = function (event) {
        event.preventDefault();
        //cancel any ongoing animation as user might have interrupted it by doing the mouse down.
        this.zoomCancel();
        var change = Config.zoomCoefficient * event.wheelDelta;
        if (this._viewBoxWidth - change > 0)
            this._viewBoxWidth -= change;
        if (this._viewBoxHeight - change > 0)
            this._viewBoxHeight -= change;
        if (this._viewBoxWidth < Config.maxZoomWidth)
            this._viewBoxWidth = Config.maxZoomWidth;
        if (this._viewBoxHeight < Config.maxZoomHeight)
            this._viewBoxHeight = Config.maxZoomHeight;
    };
    ChatFlowComponent.prototype.openEditor = function (chatNodeVM) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__nodeeditor_nodeeditor_component__["a" /* NodeEditorComponent */], {
            width: '60%',
            backdropClass: 'dark-overlay',
            data: chatNodeVM.chatNode
        });
        dialogRef.afterOpen().subscribe(function (x) {
            _this.unbindDesignerShortcuts();
        });
        dialogRef.afterClosed().subscribe(function (x) {
            _this.bindDesignerShortcuts();
            _this.saveChatFlow(true);
        });
    };
    ChatFlowComponent.prototype.addNewNode = function () {
        var newNodeVM = new ChatNodeVM(this.chatFlowNetwork, {
            Name: 'New Node',
            Id: new __WEBPACK_IMPORTED_MODULE_8_bson__["ObjectID"]().toHexString(),
            Buttons: [],
            Sections: [],
            NodeType: __WEBPACK_IMPORTED_MODULE_6__models_chatflow_models__["f" /* NodeType */].Combination,
        }, this.snakbar);
        newNodeVM._x = (this._viewBoxX + (this._viewBoxWidth / 2)) + (Math.random() * 50);
        newNodeVM._y = (this._viewBoxY + (this._viewBoxHeight / 2)) + (Math.random() * 50);
        newNodeVM._layoutUpdated = true; //To skip the loading indicator
        this.chatFlowNetwork.updateChatNodeConnections();
        this.updateLayout();
    };
    ChatFlowComponent.prototype.resetDraggingState = function () {
        if (!this.chatFlowNetwork.newChatNodeConnection.isHidden)
            this.chatFlowNetwork.newChatNodeConnection.isHidden = true;
        if (this.chatFlowNetwork.draggingChatNode)
            delete this.chatFlowNetwork.draggingChatNode;
        this._isMouseDown = false;
    };
    ChatFlowComponent.prototype.loadChatFlowPack = function (pack) {
        var _this = this;
        if (pack.ChatNodes) {
            this.chatFlowNetwork.chatFlowPack = pack;
            this.chatFlowNetwork.chatNodeVMs = [];
            pack.ChatNodes.forEach(function (cn) {
                new ChatNodeVM(_this.chatFlowNetwork, cn, _this.snakbar);
                cn.Buttons.forEach(function (btn) {
                    btn.AdvancedOptions = ((btn.VariableValue || btn.ConditionMatchKey || btn.ConditionMatchValue || btn.ConditionOperator) ? true : false);
                });
            });
            this.chatFlowNetwork.chatNodeVMs.forEach(function (vm) {
                var locs = pack.NodeLocations;
                if (locs) {
                    var loc = locs[vm.chatNode.Id];
                    vm._x = loc.X;
                    vm._y = loc.Y;
                }
            });
            this.chatFlowNetwork.updateChatNodeConnections();
            this.updateLayout();
            this.initialZoom();
        }
    };
    ChatFlowComponent.prototype.layoutReady = function () {
        if (!this.chatFlowNetwork.chatNodeVMs)
            return true;
        else
            return (this.chatFlowNetwork.chatNodeVMs.filter(function (x) { return x._layoutUpdated; }).length == this.chatFlowNetwork.chatNodeVMs.length);
    };
    ChatFlowComponent.prototype.initialZoom = function () {
        var _this = this;
        if (this.layoutReady())
            this.fitViewToAllNodes();
        else
            setTimeout(function () { return _this.initialZoom(); }, 500);
    };
    ChatFlowComponent.prototype.saveChatFlow = function (showDialog) {
        var nodeLocs = {};
        for (var i = 0; i < this.chatFlowNetwork.chatNodeVMs.length; i++) {
            var item = this.chatFlowNetwork.chatNodeVMs[i];
            nodeLocs[item.chatNode.Id] = {
                X: item._x,
                Y: item._y
            };
        }
        var pack = {
            ProjectId: this.chatFlowNetwork.chatFlowPack.ProjectId,
            ChatNodes: this.chatFlowNetwork.chatNodeVMs.map(function (x) { return x.chatNode; }),
            NodeLocations: nodeLocs,
            _id: this.chatFlowNetwork.chatFlowPack._id,
            CreatedOn: this.chatFlowNetwork.chatFlowPack.CreatedOn,
            UpdatedOn: this.chatFlowNetwork.chatFlowPack.UpdatedOn
        };
        this.settings.saveChatProject(this.projName, pack, true);
        if (showDialog) {
            this.snakbar.open("Chatbot project '" + this.projName + "' saved", 'Dismiss', {
                duration: 2000
            });
        }
        return pack;
    };
    ChatFlowComponent.prototype.exportChatFlow = function () {
        var pack = this.saveChatFlow(true);
        this.globalsService.downloadTextAsFile(this.projName + ".anaproj", JSON.stringify(pack));
    };
    ChatFlowComponent.prototype.playChatFlow = function () {
        //this.infoDialog.alert('Alert', 'Coming soon');
        var pack = this.saveChatFlow(true);
        if (pack.ChatNodes.filter(function (x) { return x.IsStartNode; }).length <= 0) {
            this.infoDialog.alert('Start node not set!', "Tick 'Mark as start node' for the initial node of your chatbot.");
            return;
        }
        var chatNodes = this.chatFlowService.normalizeChatNodes(pack.ChatNodes);
        this.simulatorService.init(chatNodes, this.simulator);
        this.simulator.isOpen = true;
    };
    ChatFlowComponent.prototype.openPublishDialog = function () {
        var _this = this;
        this.infoDialog.showSpinner();
        this.loginService.performLogin(false, null, true, function (done) {
            _this.infoDialog.hideSpinner();
            if (_this.dataService.loggedInUser) {
                if (_this.dataService.isBizAdmin() || _this.dataService.isFlowManager()) {
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__shared_publish_chatbot_publish_chatbot_component__["a" /* PublishChatbotComponent */], {
                        width: 'auto',
                        data: {
                            pack: _this.saveChatFlow(true),
                            bizId: _this.dataService.loggedInUser.businessId
                        }
                    });
                }
                else {
                    var d = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_16__shared_business_picker_business_picker_component__["a" /* BusinessPickerComponent */], {
                        width: "30%",
                        data: {
                            askFlowId: false
                        }
                    });
                    d.afterClosed().subscribe(function (x) {
                        if (x && x.bizAccount) {
                            var ba = x.bizAccount;
                            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__shared_publish_chatbot_publish_chatbot_component__["a" /* PublishChatbotComponent */], {
                                width: 'auto',
                                data: {
                                    pack: _this.saveChatFlow(true),
                                    bizId: ba.id
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    ChatFlowComponent.prototype.gotoStartup = function () {
        var _this = this;
        this.infoDialog.confirm('Save?', 'Do you want to save any unsaved changes before you close?', function (ok) {
            if (ok)
                _this.saveChatFlow(true);
            _this.router.navigateByUrl('/studio');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatflowRoot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatFlowComponent.prototype, "chatflowRoot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('simulator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__simulator_frame_simulator_frame_component__["a" /* SimulatorFrameComponent */])
    ], ChatFlowComponent.prototype, "simulator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ChatFlowComponent.prototype, "documentKeyDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ChatFlowComponent.prototype, "documentKeyUp", null);
    ChatFlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chatflow',
            template: __webpack_require__("../../../../../src/app/components/studio/chatflow/chatflow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/studio/chatflow/chatflow.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_chatflow_service__["a" /* ChatFlowService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_hotkeys__["HotkeysService"],
            __WEBPACK_IMPORTED_MODULE_5__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_11__services_simulator_service__["a" /* SimulatorService */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], ChatFlowComponent);
    return ChatFlowComponent;
}());

var ChatFlowNetwork = (function () {
    function ChatFlowNetwork(parent, infoDialog, snackbar) {
        this.parent = parent;
        this.infoDialog = infoDialog;
        this.snackbar = snackbar;
        this.chatNodeConnections = [];
        this.chatNodeVMs = [];
        this.newChatNodeConnection = new ChatNodeNewConnection();
        this.selectedNodeOffsets = {};
    }
    ChatFlowNetwork.prototype.updateChatNodeConnections = function () {
        var _this = this;
        this.chatNodeConnections = [];
        this.chatNodeVMs.forEach(function (chatNodeVM) {
            chatNodeVM.chatNode.Buttons.forEach(function (srcBtn) {
                if (srcBtn.NextNodeId != null || srcBtn.NextNodeId != "") {
                    var destNode = _this.chatNodeVMs.filter(function (x) { return x.chatNode.Id == srcBtn.NextNodeId; });
                    if (destNode && destNode.length > 0)
                        _this.chatNodeConnections.push(new ChatNodeConnection(new ChatButtonConnector(chatNodeVM, srcBtn, _this.snackbar), destNode[0], _this.infoDialog));
                }
            });
        });
    };
    ChatFlowNetwork.prototype.selectedNodes = function () {
        return this.chatNodeVMs.filter(function (x) { return x.isSelected; });
    };
    return ChatFlowNetwork;
}());
var ChatNodeConnection = (function () {
    function ChatNodeConnection(srcButtonConnector, destChatNodeVM, infoDialog) {
        this.srcButtonConnector = srcButtonConnector;
        this.destChatNodeVM = destChatNodeVM;
        this.infoDialog = infoDialog;
        this.closeButtonVisible = false;
        this.closeButtonPointX = 0;
        this.closeButtonPointY = 0;
        this.circleRadius = Config.buttonCircleRadius;
        this.pathWidth = Config.connectionPathWidth;
    }
    ChatNodeConnection.prototype.srcConnectorX = function () {
        return this.srcButtonConnector.x() - (this.pathWidth / 2);
    };
    ChatNodeConnection.prototype.srcConnectorY = function () {
        return this.srcButtonConnector.y();
    };
    ChatNodeConnection.prototype.destConnectorX = function () {
        return this.destChatNodeVM.nodeConnectorX() - (this.pathWidth / 2);
    };
    ChatNodeConnection.prototype.destConnectorY = function () {
        return this.destChatNodeVM.nodeConnectorY();
    };
    ChatNodeConnection.prototype.calcTangentOffset = function (pt1X, pt2X) {
        return ((pt2X - pt1X) / 2);
    };
    ChatNodeConnection.prototype.calcSrcTangentX = function () {
        var pt1X = this.srcConnectorX();
        var pt2X = this.destConnectorX();
        return pt1X + this.calcTangentOffset(pt1X, pt2X);
    };
    ChatNodeConnection.prototype.calcSrcTangentY = function () {
        return this.srcConnectorY();
    };
    ChatNodeConnection.prototype.calcDestTangentX = function () {
        var pt1X = this.srcConnectorX();
        var pt2X = this.destConnectorX();
        return pt2X - this.calcTangentOffset(pt1X, pt2X);
    };
    ChatNodeConnection.prototype.calcDestTangentY = function () {
        return this.destConnectorY();
    };
    ChatNodeConnection.prototype.path = function () {
        return "M" + this.srcConnectorX() + "," + this.srcConnectorY() + " \n                C" + this.calcSrcTangentX() + "," + this.calcSrcTangentY() + " \n                  " + this.calcDestTangentX() + "," + this.calcDestTangentY() + " \n                " + this.destConnectorX() + "," + this.destConnectorY() + " M" + this.srcConnectorX() + "," + this.srcConnectorY() + " \n                C" + this.calcSrcTangentX() + "," + this.calcSrcTangentY() + " \n                  " + this.calcDestTangentX() + "," + this.calcDestTangentY() + " \n                " + this.destConnectorX() + "," + this.destConnectorY(); //double path to render connections with hollow shapes
    };
    ChatNodeConnection.prototype.mouseEnter = function (event) {
        var _this = this;
        var xy = this.destChatNodeVM.network.parent.transformCoordinates(event.pageX, event.pageY, event);
        this.closeButtonPointX = xy.x; //some offset from the cursor
        this.closeButtonPointY = xy.y; //some offset from the cursor
        this.closeButtonVisible = true;
        setTimeout(function () {
            _this.closeButtonVisible = false;
        }, 50000); //Hide the close button after 5secs
    };
    ChatNodeConnection.prototype.remove = function (event) {
        var _this = this;
        this.infoDialog.confirm('Delete connection?', "This will delete the connection between the button '" + (this.srcButtonConnector.button.ButtonName || 'Unnamed Button') + "' and node '" + (this.destChatNodeVM.chatNode.Name || 'Unnamed Node') + "'. Are you sure?", function (ok) {
            if (ok) {
                _this.srcButtonConnector.setButtonNextNodeId(null);
                _this.destChatNodeVM.network.updateChatNodeConnections();
                _this.destChatNodeVM.network.parent.saveChatFlow();
            }
        });
    };
    return ChatNodeConnection;
}());
var ChatNodeNewConnection = (function () {
    function ChatNodeNewConnection() {
        this.isHidden = false;
        this.canConnect = false;
        this.circleRadius = Config.buttonCircleRadius;
    }
    ChatNodeNewConnection.prototype.srcConnectorX = function () {
        if (this.srcButtonConnector)
            return this.srcButtonConnector.x();
        return 0;
    };
    ChatNodeNewConnection.prototype.srcConnectorY = function () {
        if (this.srcButtonConnector)
            return this.srcButtonConnector.y();
        return 0;
    };
    ChatNodeNewConnection.prototype.calcTangentOffset = function (pt1X, pt2X) {
        return ((pt2X - pt1X) / 2);
    };
    ChatNodeNewConnection.prototype.calcSrcTangentX = function () {
        var pt1X = this.srcConnectorX();
        var pt2X = this.destX;
        return pt1X + this.calcTangentOffset(pt1X, pt2X);
    };
    ChatNodeNewConnection.prototype.calcSrcTangentY = function () {
        return this.srcConnectorY();
    };
    ChatNodeNewConnection.prototype.calcDestTangentX = function () {
        var pt1X = this.srcConnectorX();
        var pt2X = this.destX;
        return pt2X - this.calcTangentOffset(pt1X, pt2X);
    };
    ChatNodeNewConnection.prototype.calcDestTangentY = function () {
        return this.destY;
    };
    ChatNodeNewConnection.prototype.path = function () {
        if (this.isHidden)
            return "M 0,0";
        return "M" + this.srcConnectorX() + "," + this.srcConnectorY() + " \n                C" + this.calcSrcTangentX() + "," + this.calcSrcTangentY() + " \n                  " + this.calcDestTangentX() + "," + this.calcDestTangentY() + " \n                " + this.destX + "," + this.destY;
    };
    return ChatNodeNewConnection;
}());
var ChatButtonConnector = (function () {
    function ChatButtonConnector(chatNodeVM, button, snackbar) {
        this.chatNodeVM = chatNodeVM;
        this.button = button;
        this.snackbar = snackbar;
        this.circleRadius = Config.buttonCircleRadius;
    }
    ChatButtonConnector.prototype.x = function () {
        var btns = this.chatNodeVM.chatNode.Buttons;
        var btnsCount = btns.length;
        var eachPart = (this.chatNodeVM.width() / btnsCount);
        var _x = (this.chatNodeVM.x()
            + ((eachPart) * (this.btnIndex() + 1))
            - eachPart / 2
            - this.chatNodeVM.circleRadius);
        return _x;
    };
    ChatButtonConnector.prototype.y = function () {
        var _y = this.chatNodeVM.y() + this.chatNodeVM.height();
        //console.log("YY- " + this.chatNodeVM.chatNode.Name + ": " + this.chatNodeVM.height());
        return _y;
    };
    ChatButtonConnector.prototype.mouseDown = function (event) {
        var nw = this.chatNodeVM.network;
        if (nw.newChatNodeConnection.isHidden)
            nw.newChatNodeConnection.isHidden = false;
        nw.newChatNodeConnection.srcButtonConnector = this;
        nw.newChatNodeConnection.destX = this.x();
        nw.newChatNodeConnection.destY = this.y();
    };
    ChatButtonConnector.prototype.btnIndex = function () {
        var btns = this.chatNodeVM.chatNode.Buttons;
        return btns.indexOf(this.button);
    };
    ChatButtonConnector.prototype.setButtonNextNodeId = function (nextNodeId) {
        this.button.NextNodeId = nextNodeId;
        this.chatNodeVM.network.updateChatNodeConnections();
        this.chatNodeVM.network.parent.saveChatFlow();
    };
    ChatButtonConnector.prototype.startDirectConnection = function (event) {
        var _this = this;
        this.chatNodeVM.network.clickConnectionStartButton = this;
        if (this.chatNodeVM.network.clickConnectionStartSnackbar) {
            this.chatNodeVM.network.clickConnectionStartSnackbar.dismiss();
            this.chatNodeVM.network.clickConnectionStartSnackbar = null;
        }
        this.chatNodeVM.network.clickConnectionStartSnackbar = this.snackbar.open("Connection started at button '" + this.button.ButtonName + "' of node '" + this.chatNodeVM.chatNode.Name + "'. Click on the target node to connect.", 'Abort');
        this.chatNodeVM.network.clickConnectionStartSnackbar.onAction().subscribe(function () {
            _this.chatNodeVM.network.clickConnectionStartButton = null;
        });
    };
    ChatButtonConnector.prototype.isConnected = function () {
        var _this = this;
        return this.button.NextNodeId && (this.chatNodeVM.network.chatNodeVMs.filter(function (x) { return x.chatNode.Id == _this.button.NextNodeId; }).length > 0);
    };
    return ChatButtonConnector;
}());
var ChatNodeVM = (function () {
    function ChatNodeVM(network, chatNode, snackbar) {
        this.network = network;
        this.chatNode = chatNode;
        this.snackbar = snackbar;
        this._layoutUpdated = false;
        this._x = 0;
        this._y = 0;
        this._btnTableWidth = Config.defaultNodeWidth;
        this._width = Config.defaultNodeWidth;
        this._height = Config.defaultNodeHeight;
        this.cornerRadius = Config.defaultNodeCornerRadius;
        this.headerHeight = Config.defaultNodeHeaderHeight;
        this.circleRadius = Config.buttonCircleRadius;
        this.isSelected = false;
        this.network.chatNodeVMs.push(this);
        this._x = (this.network.chatNodeVMs.indexOf(this)) * Config.defaultNodeWidth;
    }
    ChatNodeVM.prototype.width = function () {
        return this._width;
    };
    ChatNodeVM.prototype.height = function () {
        return this._height;
    };
    ChatNodeVM.prototype.x = function () {
        return this._x;
    };
    ChatNodeVM.prototype.y = function () {
        return this._y;
    };
    ChatNodeVM.prototype.mouseDown = function (event) {
        var _this = this;
        if (!this.network.parent.ctrlDown && this.network.selectedNodes().length <= 1) {
            this.network.parent.clearSelection();
        }
        this.toggleSelection();
        this.network.draggingChatNode = this;
        var targetXY = this.network.parent.transformCoordinates(event.pageX, event.pageY, event);
        var mouseOffsetX = targetXY.x - this._x;
        var mouseOffsetY = targetXY.y - this._y;
        this.network.draggingChatNodeOffset = new Point(mouseOffsetX, mouseOffsetY);
        this.network.selectedNodeOffsets = {}; //clearing
        var selectedNodes = this.network.selectedNodes();
        if (selectedNodes && selectedNodes.length > 0) {
            selectedNodes.forEach(function (n) {
                var mouseOffset = {
                    x: targetXY.x - n._x,
                    y: targetXY.y - n._y,
                };
                _this.network.selectedNodeOffsets[n.chatNode.Id] = new Point(mouseOffset.x, mouseOffset.y);
            });
        }
    };
    ChatNodeVM.prototype.mouseUp = function (event) {
        var nw = this.network;
        if (!nw.newChatNodeConnection.isHidden) {
            nw.newChatNodeConnection.srcButtonConnector.setButtonNextNodeId(this.chatNode.Id);
        }
    };
    ChatNodeVM.prototype.mouseEnter = function (event) {
        var nw = this.network;
        if (!nw.newChatNodeConnection.isHidden) {
            nw.newChatNodeConnection.canConnect = true;
        }
    };
    ChatNodeVM.prototype.mouseLeave = function (event) {
        var nw = this.network;
        if (!nw.newChatNodeConnection.isHidden) {
            nw.newChatNodeConnection.canConnect = false;
        }
    };
    ChatNodeVM.prototype.chatButtonConnectors = function () {
        var _this = this;
        return this.chatNode.Buttons.map(function (btn) { return new ChatButtonConnector(_this, btn, _this.snackbar); });
    };
    ChatNodeVM.prototype.nodeConnectorY = function () {
        return this.y();
    };
    ChatNodeVM.prototype.nodeConnectorX = function () {
        return (this.x()) + (this.width() / 2) - this.circleRadius;
    };
    ChatNodeVM.prototype.clickConnectionActive = function () {
        return this.network.clickConnectionStartButton;
    };
    ChatNodeVM.prototype.nodeClick = function () {
        if (this.clickConnectionActive()) {
            this.network.clickConnectionStartButton.setButtonNextNodeId(this.chatNode.Id);
            this.network.clickConnectionStartButton = null;
            this.network.clickConnectionStartSnackbar.dismiss();
        }
        else {
            if (!this.network.parent.ctrlDown && this.network.selectedNodes().length > 1) {
                this.network.parent.clearSelection();
            }
        }
    };
    ChatNodeVM.prototype.toggleSelection = function () {
        this.isSelected = !this.isSelected;
    };
    ChatNodeVM.prototype.isNodeEmpty = function () {
        if ((!this.chatNode.Sections || this.chatNode.Sections.length <= 0) && (!this.chatNode.Buttons || this.chatNode.Buttons.length <= 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    return ChatNodeVM;
}());

var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Config = (function () {
    function Config() {
    }
    Config.defaultNodeWidth = 300;
    Config.defaultNodeHeight = 200;
    Config.defaultNodeHeaderHeight = 30;
    Config.defaultNodeCornerRadius = 20;
    Config.defaultSectionWidth = 30;
    Config.defaultSectionHeight = 30;
    Config.defaultDesignerWidth = 1366;
    Config.defaultDesignerHeight = 700;
    Config.buttonCircleRadius = 8;
    Config.designerMargin = 40;
    Config.connectionPathWidth = 3;
    Config.zoomCoefficient = 0.3;
    Config.viewBoxAnimStep = 10;
    Config.maxZoomHeight = 600;
    Config.maxZoomWidth = 900;
    return Config;
}());


/***/ }),

/***/ "../../../../../src/app/components/studio/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\nmat-form-field, mat-select {\n    width: 100%;\n}\n\n.bottom-actions > button {\n    margin: 20px 10px;\n}\n\nbutton[color=\"primary\"] {\n    color: white;\n}\n\nmat-action-row > button {\n    margin: 10px;\n}\n\n.bottom-actions {\n    display: block;\n    text-align: center;\n}\n\n.list-action-btn {\n    float: right;\n}\n\n.list-item {\n    width: 100%\n}\n\n.mat-expansion-panel-body {\n    display: none !important;\n}\n\n.app-content {\n    width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 40px;\n    padding-bottom: 40px;\n}\n\n.page-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n    .page-title .text {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n    }\n\n.page-title-actions button:first-child {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/studio/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar #appHeader [title]=\"'Ana Studio'\" [skipAuth]=\"true\" [logoutNavigation]=\"\"></app-header-bar>\n<div class=\"app-content\">\n    <div class=\"center-block center-content\">\n        <mat-card [hidden]=\"savedProjects.length!=0\" class=\"text-center\">\n            <mat-card-content>\n                Looks like you don't have any saved chat projects. Start by adding one.\n            </mat-card-content>\n        </mat-card>\n        <mat-accordion [hidden]=\"savedProjects.length==0\">\n            <div class=\"page-title\">\n                <h4 class=\"text\">Recent chatbot projects</h4>\n                <div class=\"search\">\n                    <mat-form-field>\n                        <input type=\"text\" name=\"search\" value=\"\" matInput [(ngModel)]=\"search\" placeholder=\"Search\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"page-title-actions\">\n                    <button matTooltip=\"Add new chatbot project\" color=\"primary\" mat-mini-fab (click)=\"addProject()\">\n                        <mat-icon>add</mat-icon>\n                    </button>\n                    <button matTooltip=\"Import chatbot project from file\" mat-mini-fab (click)=\"fileInput.click()\">\n                        <mat-icon>arrow_downward</mat-icon>\n                    </button>\n                </div>\n            </div>\n            <mat-expansion-panel *ngFor=\"let projName of searchedProjects(); let i = index\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>{{projName}}</mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-action-row>\n                    <button mat-raised-button color=\"primary\" (click)=\"openChatBotProject(projName)\">\n                        <span>Open</span>\n                    </button>\n                    <button mat-raised-button (click)=\"renameChatBotProject(projName)\">\n                        <span>Rename</span>\n                    </button>\n                    <button mat-raised-button (click)=\"downloadChatBotProject(projName)\">\n                        <span>Download</span>\n                    </button>\n                    <button mat-raised-button (click)=\"deleteChatBotProject(projName)\">\n                        <span>Delete</span>\n                    </button>\n                </mat-action-row>\n            </mat-expansion-panel>\n        </mat-accordion>\n\n        <section class=\"bottom-actions\" *ngIf=\"savedProjects.length==0\">\n            <button matTooltip=\"Add new chatbot project\" color=\"primary\" mat-raised-button (click)=\"addProject()\">Add new chatbot</button>\n            <button matTooltip=\"Import chatbot project from file\" mat-raised-button (click)=\"fileInput.click()\">Import chatbot</button>\n        </section>\n    </div>\n</div>\n<input type=\"file\" name=\"f\" style=\"display:none\" #fileInput (change)=\"fileInputChange()\" />"

/***/ }),

/***/ "../../../../../src/app/components/studio/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_chatflow_models__ = __webpack_require__("../../../../../src/app/models/chatflow.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bson__ = __webpack_require__("../../../../bson/lib/bson/bson.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bson___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bson__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LandingComponent = (function () {
    function LandingComponent(router, globals, infoDialog, settings) {
        this.router = router;
        this.globals = globals;
        this.infoDialog = infoDialog;
        this.settings = settings;
        this.savedProjects = [];
        this.globals.setPageTitle();
        this.loadSavedProjects();
    }
    LandingComponent.prototype.loadSavedProjects = function () {
        this.savedProjects = this.settings.listSavedChatProjectNames();
    };
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.fileInputChange = function () {
        var _this = this;
        var fileInput = this.fileInput.nativeElement;
        if (fileInput.files && fileInput.files[0]) {
            var selectedFile_1 = fileInput.files[0];
            fileInput.value = '';
            if (selectedFile_1.name.endsWith('.anaproj')) {
                var reader_1 = new FileReader();
                reader_1.onload = function (evt) {
                    var pack = JSON.parse(reader_1.result);
                    var projName = selectedFile_1.name.replace(new RegExp('\.anaproj$'), '');
                    _this.settings.saveChatProject(projName, pack, false, function () {
                        _this.openChatBotProject(projName);
                    });
                };
                reader_1.onerror = function () {
                    _this.infoDialog.alert('Oops!', 'Unable to load the file!');
                };
                reader_1.readAsText(selectedFile_1, "UTF-8");
            }
            else
                this.infoDialog.alert('Oops!', 'Invalid file. Please select a valid Ana project file');
        }
    };
    LandingComponent.prototype.searchedProjects = function () {
        var _this = this;
        if (this.search && this.search.length > 0)
            return this.savedProjects.filter(function (x) { return x.toLowerCase().indexOf(_this.search.toLowerCase()) != -1; });
        return this.savedProjects;
    };
    LandingComponent.prototype.addProject = function () {
        var _this = this;
        this.infoDialog.prompt('Chatbot Project Name', 'Enter a name for your new chatbot project', function (name) {
            if (!name)
                return;
            var firstNode = {
                Name: 'New Node',
                Id: new __WEBPACK_IMPORTED_MODULE_6_bson__["ObjectID"]().toHexString(),
                Buttons: [],
                Sections: [],
                NodeType: __WEBPACK_IMPORTED_MODULE_5__models_chatflow_models__["f" /* NodeType */].Combination,
                TimeoutInMs: 0
            };
            var _id = new __WEBPACK_IMPORTED_MODULE_6_bson__["ObjectID"]().toHexString();
            var defaultFlow = {
                ChatNodes: [firstNode],
                CreatedOn: new Date(),
                UpdatedOn: new Date(),
                NodeLocations: {},
                ProjectId: _id,
                _id: _id
            };
            defaultFlow.NodeLocations[firstNode.Id] = { X: 500, Y: 500 };
            _this.settings.saveChatProject(name, defaultFlow, false, function () {
                _this.openChatBotProject(name);
            });
        });
    };
    LandingComponent.prototype.isExpanded = function (proj) {
        return this.savedProjects.indexOf(proj) == this.savedProjects.length - 1;
    };
    LandingComponent.prototype.openChatBotProject = function (name) {
        this.router.navigateByUrl('/studio/designer?proj=' + encodeURIComponent(name));
    };
    LandingComponent.prototype.renameChatBotProject = function (name) {
        var _this = this;
        this.infoDialog.prompt("Rename", 'Enter a new name: ', function (newName) {
            if (newName && name != newName) {
                _this.settings.renameChatProject(name, newName);
                _this.loadSavedProjects();
            }
        }, name);
    };
    LandingComponent.prototype.deleteChatBotProject = function (name) {
        var _this = this;
        this.infoDialog.confirm('Sure?', "Are you sure you want to delete '" + name + "'", function (ok) {
            if (ok) {
                _this.settings.deleteChatProject(name);
                _this.loadSavedProjects();
            }
        });
    };
    LandingComponent.prototype.downloadChatBotProject = function (name) {
        var pack = this.settings.getChatProject(name);
        this.globals.downloadTextAsFile(name + ".anaproj", JSON.stringify(pack));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LandingComponent.prototype, "fileInput", void 0);
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-studio-landing',
            template: __webpack_require__("../../../../../src/app/components/studio/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/studio/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_globals_service__["a" /* GlobalsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field, mat-select {\n    width: 100%;\n}\n\n.text-section-icon {\n    font-size: 20px;\n}\n\n.tab-content {\n    margin: 20px;\n}\n\n.col-centered {\n    float: none;\n    margin: 0 auto;\n}\n\n.panel-header-icon {\n    margin-top: 2px;\n    margin-right: 5px;\n}\n\n.spacing {\n    width: 20px;\n    display: inline-block;\n}\n\n.dialog-actions {\n    margin: 10px;\n}\n\nmat-dialog-actions {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.section-type-button {\n    width: 110px;\n    height: 110px;\n    padding: 11px;\n    cursor: pointer;\n}\n\n    .section-type-button.text {\n        content: url(\"data:image/png;base64,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\");\n    }\n\n        .section-type-button.text:hover {\n            content: url(\"data:image/png;base64,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\");\n            padding: 0;\n        }\n\n    .section-type-button.image {\n        content: url(\"data:image/png;base64,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\");\n    }\n\n        .section-type-button.image:hover {\n            content: url(\"data:image/png;base64,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\");\n            padding: 0;\n        }\n\n    .section-type-button.video {\n        content: url(\"data:image/png;base64,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\");\n    }\n\n        .section-type-button.video:hover {\n            content: url(\"data:image/png;base64,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\");\n            padding: 0;\n        }\n\n    .section-type-button.gif {\n        content: url(\"data:image/png;base64,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\");\n    }\n\n        .section-type-button.gif:hover {\n            content: url(\"data:image/png;base64,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\");\n            padding: 0;\n        }\n\n    .section-type-button.carousel {\n        content: url(\"data:image/png;base64,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\");\n    }\n\n        .section-type-button.carousel:hover {\n            content: url(\"data:image/png;base64,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\");\n            padding: 0;\n        }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit chat node information</h2>\n<mat-dialog-content>\n    <mat-tab-group #tabGroup>\n        <mat-tab label=\"Node Info\" #nodeInfoTab>\n            <div class=\"node-details tab-content\">\n                <div class=\"node-basic-info\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Node Name\" [(ngModel)]=\"chatNode.Name\" name=\"nodeName\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-select placeholder=\"Node Type\" [(ngModel)]=\"chatNode.NodeType\" name=\"nodeType\">\n                            <mat-option *ngFor=\"let nType of MH.nodeTypes\" [value]=\"nType\">\n                                {{ nType }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <section class=\"form-field\">\n                        <mat-checkbox [(ngModel)]=\"chatNode.IsStartNode\" (click)=\"MH.resetOtherStartNodes(chatNode)\" name=\"isStartNode\" align=\"start\">Mark as start node</mat-checkbox>\n                    </section>\n                    <section class=\"form-field\">\n                        <mat-checkbox [(ngModel)]=\"chatNode.IsGoalNode\" name=\"isGoalNode\" align=\"start\">Mark as goal node</mat-checkbox>\n                    </section>\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Variable Name\" [(ngModel)]=\"chatNode.VariableName\" name=\"variableName\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput type=\"text\" disabled readonly placeholder=\"Node Id\" [(ngModel)]=\"chatNode.Id\" name=\"nodeId\">\n                    </mat-form-field>\n                </div>\n                <div class=\"node-condition\" [hidden]=\"chatNode.NodeType!='Condition'\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Condition Details</div>\n                        <div class=\"panel-body\">\n                            <div>\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Fallback Next Node Id\" [(ngModel)]=\"chatNode.NextNodeId\" name=\"NextNodeId-Condition\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"node-api-details\" [hidden]=\"chatNode.NodeType!='ApiCall'\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">API Details</div>\n                        <div class=\"panel-body\">\n                            <div>\n                                <mat-form-field>\n                                    <mat-select placeholder=\"API Method\" [(ngModel)]=\"chatNode.ApiMethod\" name=\"ApiMethod\">\n                                        <mat-option *ngFor=\"let apiMethod of MH.apiMethods\" [value]=\"apiMethod\">\n                                            {{ apiMethod || 'None' }}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput type=\"url\" placeholder=\"API Url\" [(ngModel)]=\"chatNode.ApiUrl\" name=\"ApiUrl\">\n                                </mat-form-field>\n                                <mat-form-field class=\"contains-hint\">\n                                    <textarea rows=\"3\" matInput placeholder=\"Headers\" [(ngModel)]=\"chatNode.Headers\" name=\"Headers\"></textarea>\n                                    <mat-hint>Enter one header per line. Separate Key and value with a colon. Eg: Content-Type:text/plain </mat-hint>\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Fallback Next Node Id\" [(ngModel)]=\"chatNode.NextNodeId\" name=\"NextNodeId\">\n                                </mat-form-field>\n                                <mat-form-field [hidden]=\"!MH.chatNodeApiCallFieldVisible(chatNode, 'RequiredVariables')\">\n                                    <input matInput type=\"text\" placeholder=\"Required Variables\" [(ngModel)]=\"chatNode.RequiredVariables\" name=\"RequiredVariables\">\n                                </mat-form-field>\n                                <mat-form-field [hidden]=\"!MH.chatNodeApiCallFieldVisible(chatNode, 'RequestBody')\">\n                                    <textarea rows=\"6\" matInput placeholder=\"Request Body\" [(ngModel)]=\"chatNode.RequestBody\" name=\"RequestBody\"></textarea>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"node-card-details\" [hidden]=\"chatNode.NodeType!='Card'\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Card Details</div>\n                        <div class=\"panel-body\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" placeholder=\"Card Header\" [(ngModel)]=\"chatNode.CardHeader\" name=\"CardHeader\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput type=\"text\" placeholder=\"Card Footer\" [(ngModel)]=\"chatNode.CardFooter\" name=\"CardFooter\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <mat-select placeholder=\"Card Placement\" [(ngModel)]=\"chatNode.Placement\" name=\"Placement\">\n                                    <mat-option *ngFor=\"let cardPlacement of MH.cardPlacements\" [value]=\"cardPlacement\">\n                                        {{ cardPlacement || 'None' }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"node-jumptobot-details\" [hidden]=\"chatNode.NodeType!='JumpToBot'\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Jump To Bot Details</div>\n                        <div class=\"panel-body\">\n                            <div>\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Target Bot Id\" [(ngModel)]=\"chatNode.TargetBotId\" name=\"TargetBotId\">\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Target Node Id\" [(ngModel)]=\"chatNode.TargetNodeId\" name=\"TargetNodeId\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Content\" *ngIf=\"contentTabVisible()\" #contentTab>\n            <div class=\"node-section-details tab-content\">\n                <div class=\"node-section\" *ngFor=\"let section of chatNode.Sections; let i = index\">\n                    <div [ngSwitch]=\"MH.editorTypeFromSectionType(section.SectionType)\">\n                        <ng-container *ngSwitchCase=\"'Text'\">\n                            <div class=\"node-text-section\">\n                                <mat-form-field>\n                                    <span matPrefix>\n                                        <i class=\"fa fa-file-text-o text-section-icon\"></i>\n                                        &nbsp;\n                                    </span>\n                                    <input [autofocus] matInput type=\"text\" placeholder=\"Section text\" [(ngModel)]=\"section.Text\" name=\"sectionText-{{i}}\">\n                                    <span matSuffix style=\"font-size: 24px\">\n                                        <button mat-icon-button (click)=\"MH.sectionMoveUp(chatNode, section)\">\n                                            <mat-icon>arrow_upward</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionMoveDown(chatNode, section)\">\n                                            <mat-icon>arrow_downward</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionDelete(chatNode, section)\">\n                                            <mat-icon>delete</mat-icon>\n                                        </button>\n                                    </span>\n                                </mat-form-field>\n                            </div>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'TitleCaptionUrl'\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <i [matTooltip]=\"section.SectionType + ' Section'\" class=\"fa panel-header-icon\" [ngClass]=\"MH.sectionIcon(section)\"></i> Section: {{MH.sectionAlias(section)}}\n                                    <div class=\"pull-right panel-heading-actions\">\n                                        <button mat-icon-button (click)=\"MH.sectionMoveUp(chatNode, section)\">\n                                            <mat-icon>arrow_upward</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionMoveDown(chatNode, section)\">\n                                            <mat-icon>arrow_downward</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionDelete(chatNode, section)\">\n                                            <mat-icon>delete</mat-icon>\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"panel-body\">\n                                    <mat-form-field>\n                                        <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"section.Title\" name=\"sectionTitle-{{i}}\">\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput type=\"url\" placeholder=\"Url\" [(ngModel)]=\"section.Url\" name=\"sectionUrl-{{i}}\">\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput type=\"text\" placeholder=\"Caption\" [(ngModel)]=\"section.Caption\" name=\"sectionCaption-{{i}}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'Carousel'\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <i [matTooltip]=\"section.SectionType + ' Section'\" class=\"fa panel-header-icon\" [ngClass]=\"MH.sectionIcon(section)\"></i> Carousel\n                                    <div class=\"pull-right panel-heading-actions\">\n                                        <button matTooltip=\"Add Carousel Item\" mat-icon-button (click)=\"MH.carouselItemAdd(section)\">\n                                            <mat-icon>add</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionMoveUp(chatNode, section)\">\n                                            <mat-icon>arrow_upward</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionMoveDown(chatNode, section)\">\n                                            <mat-icon>arrow_downward</mat-icon>\n                                        </button>\n                                        <button mat-icon-button (click)=\"MH.sectionDelete(chatNode, section)\">\n                                            <mat-icon>delete</mat-icon>\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"panel-body\">\n                                    <div class=\"carousel-container\">\n                                        <span *ngIf=\"!section.Items || section.Items.length<=0\">Add a carousel item using the plus (+) button in this panel's header</span>\n                                        <div class=\"carousel-item\" *ngFor=\"let carItem of section.Items\">\n                                            <div class=\"panel panel-default\">\n                                                <div class=\"panel-heading\">\n                                                    <i matTooltip=\"Carousel Item\" class=\"fa panel-header-icon\" [ngClass]=\"MH.sectionIcon(section)\"></i> Carousel Item: {{carItem.Title}}\n                                                    <div class=\"pull-right panel-heading-actions\">\n                                                        <button mat-icon-button matTooltip=\"Add Carousel Button\" (click)=\"MH.carouselButtonAdd(carItem)\">\n                                                            <mat-icon>add</mat-icon>\n                                                        </button>\n                                                        <button mat-icon-button (click)=\"MH.carouselItemMoveUp(section, carItem)\">\n                                                            <mat-icon>arrow_upward</mat-icon>\n                                                        </button>\n                                                        <button mat-icon-button (click)=\"MH.carouselItemMoveDown(section, carItem)\">\n                                                            <mat-icon>arrow_downward</mat-icon>\n                                                        </button>\n                                                        <button mat-icon-button (click)=\"MH.carouselItemDelete(section, carItem)\">\n                                                            <mat-icon>delete</mat-icon>\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <mat-form-field>\n                                                        <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"carItem.Title\" name=\"carItemTitle-{{i}}\">\n                                                    </mat-form-field>\n                                                    <mat-form-field>\n                                                        <input matInput type=\"url\" placeholder=\"Image Url\" [(ngModel)]=\"carItem.ImageUrl\" name=\"carItemImageUrl-{{i}}\">\n                                                    </mat-form-field>\n                                                    <mat-form-field>\n                                                        <input matInput type=\"text\" placeholder=\"Caption\" [(ngModel)]=\"carItem.Caption\" name=\"carItemCaption-{{i}}\">\n                                                    </mat-form-field>\n                                                    <div class=\"carousel-buttons\" *ngFor=\"let carBtn of carItem.Buttons\">\n                                                        <div class=\"panel panel-default\">\n                                                            <div class=\"panel-heading\">\n                                                                <i matTooltip=\"Carousel Button\" class=\"fa panel-header-icon\" [ngClass]=\"MH.sectionIcon(section)\"></i> Carousel Button: {{carBtn.Text}}\n                                                                <div class=\"pull-right panel-heading-actions\">\n                                                                    <button mat-icon-button (click)=\"MH.carouselButtonMoveUp(carItem, carBtn)\">\n                                                                        <mat-icon>arrow_upward</mat-icon>\n                                                                    </button>\n                                                                    <button mat-icon-button (click)=\"MH.carouselButtonMoveDown(carItem, carBtn)\">\n                                                                        <mat-icon>arrow_downward</mat-icon>\n                                                                    </button>\n                                                                    <button mat-icon-button (click)=\"MH.carouselButtonDelete(carItem, carBtn)\">\n                                                                        <mat-icon>delete</mat-icon>\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"panel-body\">\n                                                                <mat-form-field>\n                                                                    <input matInput type=\"text\" placeholder=\"Text\" [(ngModel)]=\"carBtn.Text\" name=\"carBtnText-{{i}}\">\n                                                                </mat-form-field>\n                                                                <mat-form-field>\n                                                                    <mat-select placeholder=\"Type\" [(ngModel)]=\"carBtn.Type\" name=\"carBtnType\">\n                                                                        <mat-option *ngFor=\"let bType of MH.carouselButtonTypes\" [value]=\"bType\">\n                                                                            {{ bType || 'None' }}\n                                                                        </mat-option>\n                                                                    </mat-select>\n                                                                </mat-form-field>\n                                                                <mat-form-field *ngIf=\"carBtn.Type==MH.CarouselButtonType.OpenUrl || carBtn.Type==MH.CarouselButtonType.DeepLink\">\n                                                                    <input matInput type=\"url\" placeholder=\"Url\" [(ngModel)]=\"carBtn.Url\" name=\"carBtnUrl-{{i}}\">\n                                                                </mat-form-field>\n                                                                <mat-form-field>\n                                                                    <input matInput type=\"text\" placeholder=\"Next Node Id\" [(ngModel)]=\"carBtn.NextNodeId\" name=\"carBtnNextNodeId-{{i}}\">\n                                                                </mat-form-field>\n                                                                <mat-form-field>\n                                                                    <input matInput type=\"text\" placeholder=\"Variable Value\" [(ngModel)]=\"carBtn.VariableValue\" name=\"carBtnVariableValue-{{i}}\">\n                                                                </mat-form-field>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n                <section class=\"text-center\">\n                    <img matTooltip=\"Add a text content\" class=\"section-type-button text\" (click)=\"MH.addSection(chatNode, SectionType.Text)\" />\n                    <img matTooltip=\"Add an image content\" class=\"section-type-button image\" (click)=\"MH.addSection(chatNode, SectionType.Image)\" />\n                    <img matTooltip=\"Add a gif content\" class=\"section-type-button gif\" (click)=\"MH.addSection(chatNode, SectionType.Gif)\" />\n                    <!--<img matTooltip=\"Add an audio content\" class=\"section-type-button audio\" (click)=\"MH.addSection(chatNode, SectionType.Audio)\" />-->\n                    <img matTooltip=\"Add a video content\" class=\"section-type-button video\" (click)=\"MH.addSection(chatNode, SectionType.Video)\" />\n                    <img matTooltip=\"Add a carousel content\" class=\"section-type-button carousel\" (click)=\"MH.addSection(chatNode, SectionType.Carousel)\" />\n                    <!--<mat-menu #addSectionMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"MH.addSection(chatNode, SectionType.Text)\">Text</button>\n        <button mat-menu-item (click)=\"MH.addSection(chatNode, SectionType.Image)\">Image</button>\n        <button mat-menu-item (click)=\"MH.addSection(chatNode, SectionType.Gif)\">Gif</button>\n        <button mat-menu-item (click)=\"MH.addSection(chatNode, SectionType.Audio)\">Audio</button>\n        <button mat-menu-item (click)=\"MH.addSection(chatNode, SectionType.Video)\">Video</button>\n        <button mat-menu-item (click)=\"MH.addSection(chatNode, SectionType.Carousel)\">Carousel</button>\n    </mat-menu>\n                    <button type=\"button\" matTooltip=\"Add Section\" [matMenuTriggerFor]=\"addSectionMenu\" mat-fab>\n                        <mat-icon class=\"fab-btn-icon\">add</mat-icon>\n                    </button>-->\n                </section>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Buttons\" #buttonsTab>\n            <div class=\"tab-content\">\n                <div class=\"node-buttons\" *ngFor=\"let btn of chatNode.Buttons; let i = index\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">\n                            Button: {{MH.chatButtonAlias(btn)}}\n                            <div class=\"pull-right panel-heading-actions\">\n                                <button mat-icon-button (click)=\"MH.buttonMoveUp(chatNode, btn)\">\n                                    <mat-icon>arrow_upward</mat-icon>\n                                </button>\n                                <button mat-icon-button (click)=\"MH.buttonMoveDown(chatNode, btn)\">\n                                    <mat-icon>arrow_downward</mat-icon>\n                                </button>\n                                <button mat-icon-button (click)=\"MH.buttonDelete(chatNode, btn)\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"panel-body\">\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'ButtonType')\">\n                                <mat-select placeholder=\"Type\" [(ngModel)]=\"btn.ButtonType\" name=\"btnType-{{i}}\">\n                                    <mat-option *ngFor=\"let bType of MH.buttonTypes\" [value]=\"bType\">\n                                        {{ bType }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput [autofocus] type=\"text\" [placeholder]=\"['ApiCall', 'Condition'].indexOf(chatNode.NodeType)==-1?'Text on button':'Button Name'\" [(ngModel)]=\"btn.ButtonName\" name=\"btnName-{{i}}\">\n                            </mat-form-field>\n                            <!--<mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'ButtonText')\">\n                                <input matInput type=\"text\" placeholder=\"Text in chat\" [(ngModel)]=\"btn.ButtonText\" name=\"btnText-{ {i}}\">\n                            </mat-form-field>-->\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'ConditionMatchKey')\">\n                                <input matInput type=\"text\" placeholder=\"Condition Match Key\" [(ngModel)]=\"btn.ConditionMatchKey\" name=\"btnConditionMatchKey-{{i}}\">\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'ConditionOperator')\">\n                                <mat-select placeholder=\"Condition Operator\" [(ngModel)]=\"btn.ConditionOperator\" name=\"btnConditionOperator-{{i}}\">\n                                    <mat-option *ngFor=\"let CO of MH.conditionOperators\" [value]=\"CO\">\n                                        {{ CO }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'ConditionMatchValue')\">\n                                <input matInput type=\"text\" placeholder=\"Condition Match Value\" [(ngModel)]=\"btn.ConditionMatchValue\" name=\"btnConditionMatchValue-{{i}}\">\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'PlaceholderText')\">\n                                <input matInput type=\"text\" placeholder=\"Placeholder\" [(ngModel)]=\"btn.PlaceholderText\" name=\"btnPlaceholderText-{{i}}\">\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'DeepLinkUrl')\">\n                                <input matInput type=\"text\" placeholder=\"Deeplink Url\" [(ngModel)]=\"btn.DeepLinkUrl\" name=\"btnDeepLinkUrl-{{i}}\">\n                            </mat-form-field>\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'Url')\">\n                                <input matInput type=\"text\" placeholder=\"Url\" [(ngModel)]=\"btn.Url\" name=\"btnUrl-{{i}}\">\n                            </mat-form-field>\n                            <mat-form-field class=\"contains-hint\" [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'ItemsSource')\" hintLabel=\"Format: 'Key1:Value1, Key2:Value2'  Eg: 'Car:1, Bike:2'\">\n                                <textarea matInput type=\"text\" placeholder=\"Items\" [(ngModel)]=\"btn.ItemsSource\" name=\"btnItemsSource-{{i}}\"></textarea>\n                            </mat-form-field>\n                            <section class=\"form-field\" [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'AllowMultiple')\">\n                                <mat-checkbox [(ngModel)]=\"btn.AllowMultiple\" name=\"btnAllowMultiple-{{i}}\" align=\"start\">Allow Multiple</mat-checkbox>\n                            </section>\n                            <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'NextNodeId')\">\n                                <input matInput type=\"text\" placeholder=\"Next Node Id\" [(ngModel)]=\"btn.NextNodeId\" name=\"btnNextNodeId-{{i}}\">\n                            </mat-form-field>\n                            <section class=\"form-field\">\n                                <mat-checkbox [(ngModel)]=\"btn.AdvancedOptions\" name=\"btnAdvancedOptions-{{i}}\" align=\"start\">Advanced options</mat-checkbox>\n                            </section>\n                            <div class=\"btn-advanced-options\" [hidden]=\"!btn.AdvancedOptions\">\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Variable Value\" [(ngModel)]=\"btn.VariableValue\" name=\"btnVariableValue-{{i}}\">\n                                </mat-form-field>\n\n                                <!--<mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'PrefixText')\">\n                                    <input matInput type=\"text\" placeholder=\"Prefix\" [(ngModel)]=\"btn.PrefixText\" name=\"btnPrefixText-{ {i}}\">\n                                </mat-form-field>\n                                <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'PostfixText')\">\n                                    <input matInput type=\"text\" placeholder=\"Postfix\" [(ngModel)]=\"btn.PostfixText\" name=\"btnPostfixText-{ {i}}\">\n                                </mat-form-field>-->\n                                <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'MinLength')\">\n                                    <input matInput type=\"number\" placeholder=\"Minimum Length\" [(ngModel)]=\"btn.MinLength\" name=\"btnMinLength-{{i}}\">\n                                </mat-form-field>\n                                <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'MaxLength')\">\n                                    <input matInput type=\"number\" placeholder=\"Maximum Length\" [(ngModel)]=\"btn.MaxLength\" name=\"btnMaxLength-{{i}}\">\n                                </mat-form-field>\n                                <mat-form-field [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'DefaultText')\">\n                                    <input matInput type=\"text\" placeholder=\"Default Text\" [(ngModel)]=\"btn.DefaultText\" name=\"btnDefaultText-{{i}}\">\n                                </mat-form-field>\n                                <section class=\"form-field\" [hidden]=\"MH.chatButtonFieldHidden(chatNode, btn, 'IsMultiLine')\">\n                                    <mat-checkbox [(ngModel)]=\"btn.IsMultiLine\" name=\"btnIsMultiLine-{{i}}\" align=\"start\">Multiple line allowed</mat-checkbox>\n                                </section>\n                                <!--<section class=\"form-field\">\n                                    <mat-checkbox [(ngModel)]=\"btn.PostToChat\" name=\"btnPostToChat-{ {i}}\" align=\"start\">Post to chat</mat-checkbox>\n                                </section>-->\n                            </div>\n                            <!--<section class=\"form-field\">\n                                <mat-checkbox [(ngModel)]=\"btn.DoesRepeat\" name=\"btnDoesRepeat-{ {i}}\" align=\"start\">Does repeat</mat-checkbox>\n                            </section>\n                            <div class=\"btn-repeat-options\" [hidden]=\"!btn.DoesRepeat\">\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Repeat On\" [(ngModel)]=\"btn.RepeatOn\" name=\"btnRepeatOn-{ {i}}\">\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput type=\"text\" placeholder=\"Repeat As\" [(ngModel)]=\"btn.RepeatAs\" name=\"btnRepeatAs-{ {i}}\">\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput type=\"number\" placeholder=\"Start Position\" [(ngModel)]=\"btn.StartPosition\" name=\"btnStartPosition-{ {i}}\">\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput type=\"number\" placeholder=\"Max Repeats\" [(ngModel)]=\"btn.MaxRepeats\" name=\"btnMaxRepeats-{ {i}}\">\n                                </mat-form-field>\n                            </div>-->\n                        </div>\n                    </div>\n                </div>\n                <section class=\"text-center\">\n                    <button matTooltip=\"Add Button\" type=\"button\" mat-fab (click)=\"MH.addButton(chatNode)\">\n                        <mat-icon class=\"fab-btn-icon\">add</mat-icon>\n                    </button>\n                </section>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button type=\"button\" (click)=\"dismiss()\" mat-raised-button color=\"primary\">\n        Done\n    </button>\n    <span class=\"spacing\"></span>\n    <button type=\"button\" matTooltip=\"Delete Node\" (click)=\"MH.nodeDelete(chatNode, this)\" mat-raised-button>\n        Delete Node\n    </button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__ = __webpack_require__("../../../../../src/app/models/chatflow.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chatflow_service__ = __webpack_require__("../../../../../src/app/services/chatflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_hotkeys__ = __webpack_require__("../../../../angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_hotkeys__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var NodeEditorComponent = (function () {
    function NodeEditorComponent(chatFlowService, hotkeys, infoDialog, dialogRef, chatNode, globalsService) {
        var _this = this;
        this.chatFlowService = chatFlowService;
        this.hotkeys = hotkeys;
        this.infoDialog = infoDialog;
        this.dialogRef = dialogRef;
        this.chatNode = chatNode;
        this.globalsService = globalsService;
        this.contentTabIndex = 1;
        this.keymapOnNodeEditor = [
            new __WEBPACK_IMPORTED_MODULE_7_angular2_hotkeys__["Hotkey"](["t", "alt+t"], function (e, s) {
                _this.addNewSectionText();
                return false;
            }, [], "Add a new text content (if applicable)"),
            new __WEBPACK_IMPORTED_MODULE_7_angular2_hotkeys__["Hotkey"](["b", "alt+b"], function (e, s) {
                _this.addNewButton();
                return false;
            }, [], "Add a new button")
        ];
        this.SectionType = __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__["g" /* SectionType */];
        this.MH = new __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__["e" /* ModelHelpers */](globalsService, infoDialog);
    }
    NodeEditorComponent.prototype.bindNodeEditorShortcuts = function () {
        var _this = this;
        this.unbindNodeEditorShortcuts();
        this.keymapOnNodeEditor.forEach(function (x) { return _this.hotkeys.add(x); });
    };
    NodeEditorComponent.prototype.unbindNodeEditorShortcuts = function () {
        var _this = this;
        this.keymapOnNodeEditor.forEach(function (x) { return _this.hotkeys.remove(x); });
    };
    NodeEditorComponent.prototype.ngOnDestroy = function () {
        this.unbindNodeEditorShortcuts();
    };
    NodeEditorComponent.prototype.ngOnInit = function () {
        this.bindNodeEditorShortcuts();
        if (this.chatNode && this.contentTabVisible() && this.chatNode.Sections.length > 0) {
            this.tabGroup.selectedIndex = this.contentTabIndex;
        }
    };
    NodeEditorComponent.prototype.contentTabVisible = function () {
        return ['Card', 'Combination'].indexOf(this.chatNode.NodeType) != -1;
    };
    NodeEditorComponent.prototype.addNewSectionText = function () {
        var _this = this;
        if (this.contentTab) {
            var newIndex = this.tabGroup._tabs.toArray().findIndex(function (x) { return x.textLabel == _this.contentTab.textLabel; });
            if (this.tabGroup.selectedIndex == newIndex) {
                this.MH.addSection(this.chatNode, __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__["g" /* SectionType */].Text);
            }
            else {
                this.tabGroup.selectedIndex = newIndex;
                setTimeout(function () {
                    requestAnimationFrame(function () {
                        _this.MH.addSection(_this.chatNode, __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__["g" /* SectionType */].Text);
                    });
                }, 500);
            }
        }
    };
    NodeEditorComponent.prototype.addNewButton = function () {
        var _this = this;
        if (this.buttonsTab) {
            var newIndex = this.tabGroup._tabs.toArray().findIndex(function (x) { return x.textLabel == _this.buttonsTab.textLabel; });
            if (this.tabGroup.selectedIndex == newIndex) {
                this.MH.addButton(this.chatNode);
            }
            else {
                this.tabGroup.selectedIndex = newIndex;
                setTimeout(function () {
                    requestAnimationFrame(function () {
                        _this.MH.addButton(_this.chatNode);
                    });
                }, 500);
            }
        }
    };
    NodeEditorComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("nodeInfoTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatTab */])
    ], NodeEditorComponent.prototype, "nodeInfoTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("contentTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatTab */])
    ], NodeEditorComponent.prototype, "contentTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("buttonsTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatTab */])
    ], NodeEditorComponent.prototype, "buttonsTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("tabGroup"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTabGroup */])
    ], NodeEditorComponent.prototype, "tabGroup", void 0);
    NodeEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nodeeditor',
            template: __webpack_require__("../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_chatflow_service__["a" /* ChatFlowService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_hotkeys__["HotkeysService"],
            __WEBPACK_IMPORTED_MODULE_6__services_info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_5__services_globals_service__["a" /* GlobalsService */]])
    ], NodeEditorComponent);
    return NodeEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ana-full {\n    width: 100%;\n    height: 100%;\n}\n\n.ana-root {\n    z-index: 10;\n    position: fixed;\n    bottom: 35px;\n    right: 20px;\n    background-color: transparent;\n    font-family: 'Open Sans';\n    display: block;\n}\n\n.ana-frame-container {\n    box-shadow: 0px 6px 40px 1px rgba(0,0,0,0.36);\n    border-radius: 10px !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    background-color: #F5F5F5;\n}\n\n.ana-full-screen {\n    background-color: rgba(0, 0, 0, 0.84);\n}\n\n.ana-iframe {\n    border: none;\n    width: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    border-radius: inherit;\n}\n\n.ana-title {\n}\n\n.ana-content {\n    display: inline;\n}\n\n    .ana-content > .title {\n        font-weight: bold;\n        font-size: 18px;\n        position: relative;\n    }\n\n    .ana-content > .subtitle {\n        font-size: 11px;\n    }\n\n.ana-online-dot {\n    border-radius: 5px;\n    height: 5px;\n    width: 5px;\n    background-color: #00DF50;\n    border: 1px solid white;\n    position: absolute;\n    bottom: 4px;\n    -webkit-transform: translate(4px, -0.5px);\n            transform: translate(4px, -0.5px);\n}\n\n.ana-actions > img {\n    width: 50px;\n}\n\n.ana-minmax-btn {\n    z-index: 15;\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    background-color: #8cc83c;\n    height: 60px;\n    width: 60px;\n    border-radius: 60px !important;\n    cursor: pointer;\n    box-shadow: 0px 6px 40px 1px rgba(0,0,0,0.36);\n}\n\n    .ana-minmax-btn:hover {\n        box-shadow: 0px 6px 40px 4px rgba(0,0,0,0.36);\n    }\n\n    .ana-minmax-btn > img,\n    .ana-minmax-btn > .max-btn {\n        width: 36px;\n        height: 36px;\n        margin: 12px;\n    }\n\n.ana-min.ana-root {\n    /*display: none;*/\n}\n\n@-webkit-keyframes maximizeAnimation {\n    0% {\n        opacity: 0;\n        width: 0px;\n        height: 0px;\n    }\n\n    100% {\n        opacity: 1;\n        width: 360px;\n        height: 70vh;\n    }\n}\n\n@keyframes maximizeAnimation {\n    0% {\n        opacity: 0;\n        width: 0px;\n        height: 0px;\n    }\n\n    100% {\n        opacity: 1;\n        width: 360px;\n        height: 70vh;\n    }\n}\n\n.maximizeAnimation {\n    -webkit-animation-name: maximizeAnimation;\n    animation-name: maximizeAnimation;\n    -webkit-animation-duration: 0.3s;\n    animation-duration: 0.3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes minimizeAnimation {\n    0% {\n        opacity: 1;\n        width: 360px;\n        height: 70vh;\n    }\n\n    100% {\n        opacity: 0;\n        display: none;\n        width: 0px;\n        height: 0px;\n    }\n}\n\n@keyframes minimizeAnimation {\n    0% {\n        opacity: 1;\n        width: 360px;\n        height: 70vh;\n    }\n\n    100% {\n        opacity: 0;\n        display: block;\n        width: 0px;\n        height: 0px;\n    }\n}\n\n.minimizeAnimation {\n    -webkit-animation-name: minimizeAnimation;\n    animation-name: minimizeAnimation;\n    -webkit-animation-duration: 0.3s;\n    animation-duration: 0.3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.ana-hidden {\n    display: none;\n}\n\n.ana-max.ana-minmax-btn {\n    border-radius: 3px !important;\n    height: 24px;\n    width: 24px;\n    box-shadow: none;\n    background-color: transparent;\n    position: absolute;\n    top: 15px;\n    right: 10px;\n}\n\n    .ana-max.ana-minmax-btn > .max-btn {\n        display: none;\n    }\n\n    .ana-max.ana-minmax-btn > .min-btn {\n        display: block;\n        opacity: 0.6;\n    }\n\n.powered-by-ana {\n    font-size: 11px;\n    text-align: right;\n    z-index: 20;\n    position: absolute;\n    bottom: -22px;\n    width: 100%;\n    display: none;\n}\n\n    .powered-by-ana > div {\n        display: inline;\n        /*background-color: #F5F5F5;*/\n        border-radius: 0 0 10px 10px;\n        padding: 6px 24px;\n        /*box-shadow: 0px 20px 40px 1px rgba(0,0,0,0.36)*/\n    }\n\n.ana-link {\n    color: #3c3c3c;\n    text-decoration: none;\n}\n\n    .ana-link:hover {\n        text-decoration: underline;\n    }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .ana-root {\n        position: fixed;\n        bottom: 0;\n        right: 0;\n        border: 0;\n        height: 100%;\n        width: 100vw;\n        color: #3c3c3c;\n    }\n\n    .powered-by-ana {\n        display: none;\n    }\n\n    @-webkit-keyframes maximizeAnimation {\n        0% {\n            opacity: 0;\n            width: 0px;\n            height: 0px;\n        }\n\n        100% {\n            opacity: 1;\n            width: 100vw;\n            height: 100%;\n        }\n    }\n\n    @keyframes maximizeAnimation {\n        0% {\n            opacity: 0;\n            width: 0px;\n            height: 0px;\n        }\n\n        100% {\n            opacity: 1;\n            width: 100vw;\n            height: 100%;\n        }\n    }\n\n    @-webkit-keyframes minimizeAnimation {\n        0% {\n            opacity: 1;\n            width: 100vw;\n            height: 100%;\n        }\n\n        100% {\n            opacity: 0;\n            display: none;\n            width: 0px;\n            height: 0px;\n        }\n    }\n\n    @keyframes minimizeAnimation {\n        0% {\n            opacity: 1;\n            width: 100vw;\n            height: 100%;\n        }\n\n        100% {\n            opacity: 0;\n            display: block;\n            width: 0px;\n            height: 0px;\n        }\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ana-root\" id=\"ana-root\" #anaRoot [ngClass]=\"{'ana-min': !isOpen, 'minimizeAnimation': !isOpen, 'ana-max':isOpen, 'maximizeAnimation': isOpen }\">\n    <div class=\"ana-frame-container ana-full\">\n        <iframe [src]=\"iframeUrl\" #simulatorIFrame class=\"ana-iframe\" scrolling=\"no\"></iframe>\n    </div>\n    <div class=\"ana-minmax-btn\" [class.ana-max]=\"isOpen\" (click)=\"minMaxBtnClick()\">\n        <div class=\"min-btn\">\n            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                <path fill=\"#fff\" d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\" />\n            </svg>\n        </div>\n    </div>\n    <div class=\"powered-by-ana\">\n        <div><a class=\"ana-link\" href=\"http://ana.chat\" target=\"_blank\">powered by ana</a></div>\n    </div>\n</div>\n<div class=\"ana-minmax-btn\" [class.ana-max]=\"isOpen\" (click)=\"minMaxBtnClick()\">\n    <div class=\"max-btn\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <style>\n                .st0 {\n                    fill: #fff\n                }\n            </style>\n            <path class=\"st0\" d=\"M0 256c0 68.4 26.6 132.6 75 181 49.4 49.4 115 75 181.2 75 41.2 0 82.8-10 120.8-30.4 34.1 24.6 67.4 29.9 90.1 29.9 8.4 0 15.4-.8 20.2-1.5 10.4-1.6 18.4-9.7 20-20.1s-3.7-20.5-13.1-25.1c-19.6-9.6-32.8-28.9-41-45.5 83.9-101 77.4-250.7-16.1-344.2-48.4-48.4-112.6-75-181-75s-132.6 26.6-181 75S0 187.6 0 256zM95.9 95.7c88.3-88.4 232.2-88.4 320.6 0 84.6 84.6 88.8 221 9.5 310.6-2.1 2.4-3.2 5.3-3.6 8.2-.8 3-.5 6.3.8 9.4 8.1 18.5 22 42.3 43.9 58.3h-.1c-19.1 0-47.8-4.8-77.2-27.5-.3-.3-.8-.6-1.2-.9-4.7-4.7-11.9-5.7-17.8-2.3-89 52.3-202.1 37.8-275.2-35.3-88.2-88.3-88.2-232.1.3-320.5z\" />\n            <circle class=\"st0\" cx=\"256.1\" cy=\"256\" r=\"18\" />\n            <circle class=\"st0\" cx=\"163.5\" cy=\"256\" r=\"18\" />\n            <circle class=\"st0\" cx=\"348.8\" cy=\"256\" r=\"18\" />\n        </svg>\n    </div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatorFrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimulatorFrameComponent = (function () {
    function SimulatorFrameComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.isOpen = false;
        var param = {
            brandingConfig: {
                primaryBackgroundColor: '#8cc83c',
                primaryForegroundColor: 'white',
                secondaryBackgroundColor: '#3c3c3c',
                logoUrl: "favicon.ico",
                agentName: "ANA Simulator",
                frameHeight: '70vh',
                frameWidth: '360px',
            },
            simulatorMode: true,
            appConfig: {
                htmlMessages: true
            }
        };
        var url = "simulator/index.html?s=" + btoa(JSON.stringify(param));
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].local)
            url = "http://localhost:4200/index.html?s=" + btoa(JSON.stringify(param));
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    SimulatorFrameComponent.prototype.ngOnInit = function () {
    };
    SimulatorFrameComponent.prototype.frame = function () {
        return this.simulatorIFrame.nativeElement.contentWindow;
    };
    SimulatorFrameComponent.prototype.minMaxBtnClick = function () {
        this.isOpen = !this.isOpen;
        if (this.anaRoot && this.anaRoot.nativeElement)
            this.anaRoot.nativeElement.classList.remove('ana-hidden');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('anaRoot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SimulatorFrameComponent.prototype, "anaRoot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('simulatorIFrame'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SimulatorFrameComponent.prototype, "simulatorIFrame", void 0);
    SimulatorFrameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simulator-frame',
            template: __webpack_require__("../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SimulatorFrameComponent);
    return SimulatorFrameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/studio/studio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STUDIO_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StudioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatflow_chatflow_component__ = __webpack_require__("../../../../../src/app/components/studio/chatflow/chatflow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeeditor_nodeeditor_component__ = __webpack_require__("../../../../../src/app/components/studio/nodeeditor/nodeeditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simulator_frame_simulator_frame_component__ = __webpack_require__("../../../../../src/app/components/studio/simulator-frame/simulator-frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__ = __webpack_require__("../../../../../src/app/components/studio/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var STUDIO_ROUTES = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: "designer",
        component: __WEBPACK_IMPORTED_MODULE_1__chatflow_chatflow_component__["a" /* ChatFlowComponent */]
    }
];
var StudioModule = (function () {
    function StudioModule() {
    }
    StudioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__chatflow_chatflow_component__["a" /* ChatFlowComponent */],
                __WEBPACK_IMPORTED_MODULE_2__nodeeditor_nodeeditor_component__["a" /* NodeEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_3__simulator_frame_simulator_frame_component__["a" /* SimulatorFrameComponent */],
                __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__nodeeditor_nodeeditor_component__["a" /* NodeEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], StudioModule);
    return StudioModule;
}());



/***/ }),

/***/ "../../../../../src/app/directives/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        if (this._autofocus || typeof this._autofocus === "undefined")
            this.el.nativeElement.focus();
    };
    Object.defineProperty(AutofocusDirective.prototype, "autofocus", {
        set: function (condition) {
            this._autofocus = condition != false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AutofocusDirective.prototype, "autofocus", null);
    AutofocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[autofocus]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "../../../../../src/app/models/ana-chat.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SenderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MessageType; });
/* unused harmony export Bool */
/* unused harmony export InputCategory */
/* unused harmony export MessageContentType */
var InputType;
(function (InputType) {
    InputType[InputType["LOCATION"] = 7] = "LOCATION";
    InputType[InputType["DATE"] = 5] = "DATE";
    InputType[InputType["TIME"] = 6] = "TIME";
    InputType[InputType["ADDRESS"] = 4] = "ADDRESS";
    InputType[InputType["MEDIA"] = 8] = "MEDIA";
    InputType[InputType["OPTIONS"] = 10] = "OPTIONS";
    InputType[InputType["LIST"] = 9] = "LIST";
    InputType[InputType["PHONE"] = 3] = "PHONE";
    InputType[InputType["EMAIL"] = 2] = "EMAIL";
    InputType[InputType["NUMERIC"] = 1] = "NUMERIC";
    InputType[InputType["TEXT"] = 0] = "TEXT";
})(InputType || (InputType = {}));
var SenderType;
(function (SenderType) {
    SenderType[SenderType["AGENT"] = 3] = "AGENT";
    SenderType[SenderType["ANA"] = 1] = "ANA";
    SenderType[SenderType["AI"] = 2] = "AI";
    SenderType[SenderType["USER"] = 0] = "USER";
})(SenderType || (SenderType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["IMAGE"] = 0] = "IMAGE";
    MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
    MediaType[MediaType["FILE"] = 3] = "FILE";
    MediaType[MediaType["AUDIO"] = 1] = "AUDIO";
})(MediaType || (MediaType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["ACTION"] = 2] = "ACTION";
    ButtonType[ButtonType["QUICK_REPLY"] = 1] = "QUICK_REPLY";
    ButtonType[ButtonType["URL"] = 0] = "URL";
})(ButtonType || (ButtonType = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["CAROUSEL"] = 1] = "CAROUSEL";
    MessageType[MessageType["INPUT"] = 2] = "INPUT";
    MessageType[MessageType["EXTERNAL"] = 3] = "EXTERNAL";
    MessageType[MessageType["SIMPLE"] = 0] = "SIMPLE";
})(MessageType || (MessageType = {}));
var Bool;
(function (Bool) {
    Bool[Bool["TRUE"] = 1] = "TRUE";
    Bool[Bool["FALSE"] = 0] = "FALSE";
})(Bool || (Bool = {}));
var InputCategory;
(function (InputCategory) {
    InputCategory[InputCategory["Click"] = 0] = "Click";
    InputCategory[InputCategory["Text"] = 1] = "Text";
})(InputCategory || (InputCategory = {}));
var MessageContentType;
(function (MessageContentType) {
    MessageContentType[MessageContentType["Text"] = 0] = "Text";
    MessageContentType[MessageContentType["Media"] = 1] = "Media";
    MessageContentType[MessageContentType["Typing"] = 2] = "Typing";
})(MessageContentType || (MessageContentType = {}));


/***/ }),

/***/ "../../../../../src/app/models/chatflow.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CarouselButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIMethod; });
/* unused harmony export CardPlacement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ConditionOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ButtonType; });
/* unused harmony export EditorType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ModelHelpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bson__ = __webpack_require__("../../../../bson/lib/bson/bson.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bson___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bson__);

//Enum Start
var SectionType;
(function (SectionType) {
    SectionType["Image"] = "Image";
    SectionType["Text"] = "Text";
    SectionType["Graph"] = "Graph";
    SectionType["Gif"] = "Gif";
    SectionType["Audio"] = "Audio";
    SectionType["Video"] = "Video";
    SectionType["Link"] = "Link";
    SectionType["EmbeddedHtml"] = "EmbeddedHtml";
    SectionType["Carousel"] = "Carousel";
    SectionType["PrintOTP"] = "PrintOTP";
})(SectionType || (SectionType = {}));
var CarouselButtonType;
(function (CarouselButtonType) {
    CarouselButtonType["NextNode"] = "NextNode";
    CarouselButtonType["DeepLink"] = "DeepLink";
    CarouselButtonType["OpenUrl"] = "OpenUrl";
})(CarouselButtonType || (CarouselButtonType = {}));
var NodeType;
(function (NodeType) {
    NodeType["ApiCall"] = "ApiCall";
    NodeType["Combination"] = "Combination";
    NodeType["Card"] = "Card";
    NodeType["JumpToBot"] = "JumpToBot";
    NodeType["Condition"] = "Condition";
    NodeType["HandoffToAgent"] = "HandoffToAgent";
})(NodeType || (NodeType = {}));
var APIMethod;
(function (APIMethod) {
    APIMethod["GET"] = "GET";
    APIMethod["POST"] = "POST";
    APIMethod["PUT"] = "PUT";
    APIMethod["DELETE"] = "DELETE";
    APIMethod["HEAD"] = "HEAD";
    APIMethod["OPTIONS"] = "OPTIONS";
    APIMethod["CONNECT"] = "CONNECT";
})(APIMethod || (APIMethod = {}));
var CardPlacement;
(function (CardPlacement) {
    CardPlacement["Incoming"] = "Incoming";
    CardPlacement["Outgoing"] = "Outgoing";
    CardPlacement["Center"] = "Center";
})(CardPlacement || (CardPlacement = {}));
// Sections - End
var ConditionOperator;
(function (ConditionOperator) {
    ConditionOperator["EqualTo"] = "EqualTo";
    ConditionOperator["NotEqualTo"] = "NotEqualTo";
    ConditionOperator["GreaterThan"] = "GreaterThan";
    ConditionOperator["LessThan"] = "LessThan";
    ConditionOperator["GreaterThanOrEqualTo"] = "GreaterThanOrEqualTo";
    ConditionOperator["LessThanOrEqualTo"] = "LessThanOrEqualTo";
    ConditionOperator["Mod"] = "Mod";
    ConditionOperator["In"] = "In";
    ConditionOperator["NotIn"] = "NotIn";
    ConditionOperator["StartsWith"] = "StartsWith";
    ConditionOperator["EndsWith"] = "EndsWith";
    ConditionOperator["Contains"] = "Contains";
    ConditionOperator["Between"] = "Between";
    ConditionOperator["IsNull"] = "IsNull";
})(ConditionOperator || (ConditionOperator = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["OpenUrl"] = "OpenUrl";
    ButtonType["GetText"] = "GetText";
    ButtonType["GetNumber"] = "GetNumber";
    ButtonType["GetAddress"] = "GetAddress";
    ButtonType["GetEmail"] = "GetEmail";
    ButtonType["GetPhoneNumber"] = "GetPhoneNumber";
    ButtonType["GetItemFromSource"] = "GetItemFromSource";
    ButtonType["GetImage"] = "GetImage";
    ButtonType["GetAudio"] = "GetAudio";
    ButtonType["GetVideo"] = "GetVideo";
    ButtonType["NextNode"] = "NextNode";
    ButtonType["DeepLink"] = "DeepLink";
    ButtonType["GetAgent"] = "GetAgent";
    ButtonType["GetFile"] = "GetFile";
    ButtonType["ShowConfirmation"] = "ShowConfirmation";
    ButtonType["FetchChatFlow"] = "FetchChatFlow";
    /// Format: yyyy-MM-dd
    ButtonType["GetDate"] = "GetDate";
    /// Format: HH:mm:ss
    ButtonType["GetTime"] = "GetTime";
    /// Format: yyyy-MM-ddTHH:mm:ss
    ButtonType["GetDateTime"] = "GetDateTime";
    /// Format: [Latitude],[Longitude]
    ButtonType["GetLocation"] = "GetLocation";
})(ButtonType || (ButtonType = {}));
var EditorType;
(function (EditorType) {
    EditorType["Text"] = "Text";
    EditorType["TitleCaptionUrl"] = "TitleCaptionUrl";
    EditorType["Carousel"] = "Carousel";
})(EditorType || (EditorType = {}));
var ModelHelpers = (function () {
    function ModelHelpers(globalsService, infoDialog) {
        this.globalsService = globalsService;
        this.infoDialog = infoDialog;
        this.CarouselButtonType = CarouselButtonType;
        this.carouselButtonTypes = [
            CarouselButtonType.NextNode,
            CarouselButtonType.OpenUrl,
            CarouselButtonType.DeepLink
        ];
        this.nodeTypes = [
            NodeType.ApiCall,
            NodeType.Combination,
            //NodeType.Card,
            NodeType.Condition,
            NodeType.HandoffToAgent,
            NodeType.JumpToBot
        ];
        this.apiMethods = [
            APIMethod.GET,
            APIMethod.POST,
            APIMethod.PUT,
            APIMethod.HEAD,
            APIMethod.OPTIONS,
            APIMethod.DELETE,
            APIMethod.CONNECT
        ];
        this.cardPlacements = [
            CardPlacement.Center,
            CardPlacement.Incoming,
            CardPlacement.Outgoing,
        ];
        this.buttonTypes = [
            ButtonType.DeepLink,
            //ButtonType.FetchChatFlow,
            ButtonType.GetAddress,
            //ButtonType.GetAgent,
            ButtonType.GetAudio,
            ButtonType.GetDate,
            //ButtonType.GetDateTime,
            ButtonType.GetEmail,
            ButtonType.GetImage,
            ButtonType.GetItemFromSource,
            ButtonType.GetLocation,
            ButtonType.GetNumber,
            ButtonType.GetPhoneNumber,
            ButtonType.GetText,
            ButtonType.GetTime,
            ButtonType.GetVideo,
            ButtonType.GetFile,
            ButtonType.NextNode,
            ButtonType.OpenUrl,
        ];
        this.conditionOperators = [
            ConditionOperator.EqualTo,
            ConditionOperator.NotEqualTo,
            ConditionOperator.GreaterThan,
            ConditionOperator.LessThan,
            ConditionOperator.GreaterThanOrEqualTo,
            ConditionOperator.LessThanOrEqualTo,
            ConditionOperator.Mod,
            ConditionOperator.In,
            ConditionOperator.NotIn,
            ConditionOperator.StartsWith,
            ConditionOperator.EndsWith,
            ConditionOperator.Contains,
            ConditionOperator.Between,
            ConditionOperator.IsNull
        ];
    }
    ModelHelpers.prototype.sectionAlias = function (section) {
        switch (section.SectionType) {
            case SectionType.Text:
                {
                    var ts = section;
                    return ts.Text || ts.SectionType;
                }
            case SectionType.Image:
            case SectionType.Audio:
            case SectionType.Video:
            case SectionType.EmbeddedHtml:
            case SectionType.Gif:
            case SectionType.Graph:
            case SectionType.Carousel:
                {
                    var tcs = section;
                    return tcs.Title || tcs.Caption || tcs.SectionType;
                }
            default:
                return section.SectionType;
        }
    };
    ModelHelpers.prototype.chatNodeAlias = function (chatNode) {
        return chatNode.Name || chatNode.NodeType;
    };
    ModelHelpers.prototype.chatButtonAlias = function (btn) {
        return btn.ButtonName || btn.ButtonText || btn.ButtonType;
    };
    ModelHelpers.prototype.editorTypeFromSectionType = function (secType) {
        switch (secType) {
            case SectionType.Text:
                return EditorType.Text;
            case SectionType.Image:
            case SectionType.Audio:
            case SectionType.Video:
            case SectionType.Gif:
            case SectionType.PrintOTP:
            case SectionType.EmbeddedHtml:
                return EditorType.TitleCaptionUrl;
            case SectionType.Carousel:
                return EditorType.Carousel;
            default:
                return EditorType.Text;
        }
    };
    ModelHelpers.prototype.chatButtonFieldHidden = function (chatNode, btn, fieldName) {
        var HIDDEN = true;
        if (['ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue'].indexOf(fieldName) != -1)
            return [NodeType.ApiCall, NodeType.Condition].indexOf(chatNode.NodeType) != -1 ? !HIDDEN : HIDDEN;
        if (fieldName == 'ButtonType' || fieldName == 'ButtonText')
            return [NodeType.ApiCall, NodeType.Condition].indexOf(chatNode.NodeType) != -1 ? HIDDEN : !HIDDEN;
        //Following fields must only be visible for 'GetText' Buttons
        if (['MinLength', 'MaxLength', 'IsMultiLine', 'DefaultText'].indexOf(fieldName) != -1)
            return btn.ButtonType == ButtonType.GetText ? false : true;
        //Following fields must only be visible for 'GetItemFromSource ' Buttons
        if (['AllowMultiple', 'ItemsSource'].indexOf(fieldName) != -1)
            return btn.ButtonType == ButtonType.GetItemFromSource ? !HIDDEN : HIDDEN;
        var hidden = false;
        switch (btn.ButtonType) {
            case ButtonType.OpenUrl:
                hidden = !(['Url'].indexOf(fieldName) != -1); //Show only Url field
                break;
            case ButtonType.GetText:
            case ButtonType.GetNumber:
            case ButtonType.GetAddress:
            case ButtonType.GetEmail:
            case ButtonType.GetPhoneNumber:
                //if the passed button property is present in the list, that field should not be visible. here placeholder text should not be visible if button type is input(Get[X]) type
                hidden = ['NextNodeId', 'DeepLinkUrl', 'Url', 'ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue'].indexOf(fieldName) != -1;
                break;
            case ButtonType.GetTime:
            case ButtonType.GetDate:
            case ButtonType.GetDateTime:
            case ButtonType.GetLocation:
                hidden = ['NextNodeId', 'DeepLinkUrl', 'Url', 'ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue', 'PostfixText', 'PrefixText', 'PlaceholderText'].indexOf(fieldName) != -1;
                break;
            case ButtonType.GetImage:
            case ButtonType.GetFile:
            case ButtonType.GetAudio:
            case ButtonType.GetVideo:
                //if the passed button property is present in the list, that field should not be visible. here placeholder text should not be visible if button type is input(Get[X]) type
                hidden = ['NextNodeId', 'DeepLinkUrl', 'PlaceholderText', 'Url', 'PostfixText', 'PrefixText', 'ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue'].indexOf(fieldName) != -1;
                break;
            case ButtonType.GetItemFromSource:
                hidden = ['NextNodeId', 'DeepLinkUrl', 'ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue', 'PlaceholderText'].indexOf(fieldName) != -1;
                break;
            case ButtonType.NextNode:
                hidden = ['NextNodeId', 'PostfixText', 'PrefixText', 'DeepLinkUrl', 'Url', 'PlaceholderText'].indexOf(fieldName) != -1;
                break;
            case ButtonType.DeepLink:
                hidden = ['NextNodeId', 'Url', 'PostfixText', 'PrefixText', 'PlaceholderText', 'ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue'].indexOf(fieldName) != -1;
                break;
            case ButtonType.GetAgent:
                hidden = true; //Hide all. Probably!
                break;
            case ButtonType.ShowConfirmation:
                hidden = true; //Hide all. Probably!
                break;
            case ButtonType.FetchChatFlow:
                hidden = ['DeepLinkUrl', 'PlaceholderText', 'PostfixText', 'PrefixText', 'ConditionMatchKey', 'ConditionOperator', 'ConditionMatchValue'].indexOf(fieldName) != -1;
                break;
            default:
                break;
        }
        return hidden;
    };
    ModelHelpers.prototype.chatNodeApiCallFieldVisible = function (chatNode, fieldName) {
        switch (chatNode.ApiMethod) {
            case APIMethod.POST:
            case APIMethod.PUT:
                {
                    if (fieldName == 'RequestBody')
                        return true;
                    if (fieldName == 'RequiredVariables')
                        return false;
                }
            default:
                {
                    if (fieldName == 'RequestBody')
                        return false;
                    if (fieldName == 'RequiredVariables')
                        return true;
                }
        }
        return true;
    };
    ModelHelpers.prototype.sectionIcon = function (section) {
        switch (section.SectionType) {
            case SectionType.Image:
                return 'fa-picture-o';
            default:
                return 'fa-file-o';
        }
    };
    ModelHelpers.prototype.addSection = function (chatNode, sectionType) {
        if (chatNode.NodeType == NodeType.Card) {
            if (chatNode.Sections && chatNode.Sections.length >= 1) {
                this.infoDialog.alert('Not allowed', 'In a Card Node, only one content item can be added.');
                return;
            }
            if ([SectionType.Text, SectionType.Image].indexOf(sectionType) == -1) {
                this.infoDialog.alert('Not allowed', 'In a Card Node, only Text and Image content types can be added.');
                return;
            }
        }
        switch (sectionType) {
            case SectionType.Carousel:
                chatNode.Sections.push({
                    SectionType: sectionType,
                    _id: new __WEBPACK_IMPORTED_MODULE_0_bson__["ObjectID"]().toHexString(),
                    Items: [],
                });
                break;
            default:
                chatNode.Sections.push({
                    SectionType: sectionType,
                    _id: new __WEBPACK_IMPORTED_MODULE_0_bson__["ObjectID"]().toHexString()
                });
                break;
        }
        this.globalsService.chatFlowComponent.updateLayout();
    };
    ModelHelpers.prototype.sectionMoveUp = function (chatNode, section) {
        var current = chatNode.Sections.indexOf(section);
        if (current != -1)
            this.arrayMove(chatNode.Sections, current, current - 1);
    };
    ModelHelpers.prototype.sectionMoveDown = function (chatNode, section) {
        var current = chatNode.Sections.indexOf(section);
        if (current != -1)
            this.arrayMove(chatNode.Sections, current, current + 1);
    };
    ModelHelpers.prototype.sectionDelete = function (chatNode, section) {
        var _this = this;
        var current = chatNode.Sections.indexOf(section);
        if (current != -1) {
            this.infoDialog.confirm('Sure?', "Delete section '" + this.sectionAlias(section) + "'", function (ok) {
                if (ok) {
                    chatNode.Sections.splice(current, 1);
                    _this.globalsService.chatFlowComponent.chatFlowNetwork.updateChatNodeConnections();
                    _this.globalsService.chatFlowComponent.updateLayout();
                }
            });
        }
    };
    ModelHelpers.prototype.addButton = function (chatNode) {
        if (chatNode.NodeType == NodeType.Card) {
            if (chatNode.Buttons && chatNode.Buttons.length >= 2) {
                this.infoDialog.alert('No allowed', 'Card node cannot have more than two buttons');
                return;
            }
        }
        chatNode.Buttons.push({
            _id: new __WEBPACK_IMPORTED_MODULE_0_bson__["ObjectID"]().toHexString(),
            ButtonName: "New Button",
            ButtonType: ButtonType.NextNode
        });
        this.globalsService.chatFlowComponent.updateLayout();
    };
    ModelHelpers.prototype.buttonMoveUp = function (chatNode, btn) {
        var current = chatNode.Buttons.indexOf(btn);
        if (current != -1)
            this.arrayMove(chatNode.Buttons, current, current - 1);
    };
    ModelHelpers.prototype.buttonMoveDown = function (chatNode, btn) {
        var current = chatNode.Buttons.indexOf(btn);
        if (current != -1)
            this.arrayMove(chatNode.Buttons, current, current + 1);
    };
    ModelHelpers.prototype.buttonDelete = function (chatNode, btn) {
        var _this = this;
        var current = chatNode.Buttons.indexOf(btn);
        if (current != -1) {
            this.infoDialog.confirm('Sure?', "Delete button '" + this.chatButtonAlias(btn) + "'?", function (ok) {
                if (ok) {
                    chatNode.Buttons.splice(current, 1);
                    _this.globalsService.chatFlowComponent.chatFlowNetwork.updateChatNodeConnections();
                    _this.globalsService.chatFlowComponent.updateLayout();
                }
            });
        }
    };
    ModelHelpers.prototype.nodeDeleteDirect = function (chatNode) {
        var network = this.globalsService.chatFlowComponent.chatFlowNetwork;
        var elementIdxToDel = network.chatNodeVMs.findIndex(function (x) { return x.chatNode.Id == chatNode.Id; });
        network.chatNodeVMs.splice(elementIdxToDel, 1);
        network.updateChatNodeConnections();
        network.parent.updateLayout();
    };
    ModelHelpers.prototype.nodeDelete = function (chatNode, nodeEditor) {
        var _this = this;
        this.infoDialog.confirm('Sure?', "Are you sure you want to delete '" + (chatNode.Name || chatNode.NodeType) + "' chat node?", function (ok) {
            if (ok) {
                _this.nodeDeleteDirect(chatNode);
                if (nodeEditor)
                    nodeEditor.dialogRef.close();
            }
        });
    };
    ModelHelpers.prototype.nodeContentMenu = function (chatNodeVM, event, options) {
        event.preventDefault();
        var btn = options._elementRef.nativeElement;
        btn.click();
    };
    ModelHelpers.prototype.resetOtherStartNodes = function (chatNode) {
        this.globalsService.chatFlowComponent.chatFlowNetwork.chatNodeVMs.forEach(function (vm) {
            if (vm.chatNode != chatNode)
                vm.chatNode.IsStartNode = false;
        });
    };
    ModelHelpers.prototype.test = function (chatNode) {
        this.infoDialog.alert('Alert', JSON.stringify(chatNode.Sections[chatNode.Sections.length - 1], null, 4));
    };
    ModelHelpers.prototype.arrayMove_RAW = function (array, old_index, new_index) {
        if (new_index >= array.length) {
            var k = new_index - array.length;
            while ((k--) + 1) {
                array.push(undefined);
            }
        }
        array.splice(new_index, 0, array.splice(old_index, 1)[0]);
        return array; // for testing purposes
    };
    ModelHelpers.prototype.arrayMove = function (array, old_index, new_index) {
        if (new_index >= array.length || new_index < 0)
            throw 'new index cannot be greater than or equal to array length or less than zero';
        array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    };
    ModelHelpers.prototype.carouselItemAdd = function (carSection) {
        carSection.Items.push({
            Buttons: [],
            Title: 'New Carousel Item',
            _id: new __WEBPACK_IMPORTED_MODULE_0_bson__["ObjectID"]().toHexString(),
        });
    };
    ModelHelpers.prototype.carouselItemMoveUp = function (carSection, carItem) {
        var current = carSection.Items.indexOf(carItem);
        if (current != -1)
            this.arrayMove(carSection.Items, current, current - 1);
    };
    ModelHelpers.prototype.carouselItemMoveDown = function (carSection, carItem) {
        var current = carSection.Items.indexOf(carItem);
        if (current != -1)
            this.arrayMove(carSection.Items, current, current + 1);
    };
    ModelHelpers.prototype.carouselItemDelete = function (carSection, carItem) {
        this.infoDialog.confirm('Sure?', "Delete carousel item " + carItem.Title + "?", function (ok) {
            var current = carSection.Items.indexOf(carItem);
            if (current != -1)
                carSection.Items.splice(current, 1);
        });
    };
    ModelHelpers.prototype.carouselButtonAdd = function (carItem) {
        carItem.Buttons.push({
            Text: 'New Button',
            Type: CarouselButtonType.NextNode,
            _id: new __WEBPACK_IMPORTED_MODULE_0_bson__["ObjectID"]().toHexString()
        });
    };
    ModelHelpers.prototype.carouselButtonMoveUp = function (carItem, carButton) {
        var current = carItem.Buttons.indexOf(carButton);
        if (current != -1)
            this.arrayMove(carItem.Buttons, current, current - 1);
    };
    ModelHelpers.prototype.carouselButtonMoveDown = function (carItem, carButton) {
        var current = carItem.Buttons.indexOf(carButton);
        if (current != -1)
            this.arrayMove(carItem.Buttons, current, current + 1);
    };
    ModelHelpers.prototype.carouselButtonDelete = function (carItem, carButton) {
        this.infoDialog.confirm('Sure?', "Delete carousel button " + carButton.Text + "?", function (ok) {
            var current = carItem.Buttons.indexOf(carButton);
            if (current != -1)
                carItem.Buttons.splice(current, 1);
        });
    };
    return ModelHelpers;
}());



/***/ }),

/***/ "../../../../../src/app/models/data.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessAccountStatus; });
/* unused harmony export DevicePlatform */
/* unused harmony export DeviceStatus */
var BusinessAccountStatus;
(function (BusinessAccountStatus) {
    BusinessAccountStatus[BusinessAccountStatus["INACTIVE"] = 0] = "INACTIVE";
    BusinessAccountStatus[BusinessAccountStatus["ACTIVE"] = 1] = "ACTIVE";
    BusinessAccountStatus[BusinessAccountStatus["EXPIRED"] = 2] = "EXPIRED";
    BusinessAccountStatus[BusinessAccountStatus["BLOCKED"] = 3] = "BLOCKED";
    BusinessAccountStatus[BusinessAccountStatus["DELETED"] = 4] = "DELETED";
})(BusinessAccountStatus || (BusinessAccountStatus = {}));
var DevicePlatform;
(function (DevicePlatform) {
    DevicePlatform["ANDROID"] = "ANDROID";
    DevicePlatform["IOS"] = "IOS";
    DevicePlatform["WINDOWS"] = "WINDOWS";
    DevicePlatform["FACEBOOK"] = "FACEBOOK";
})(DevicePlatform || (DevicePlatform = {}));
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["ACTIVE"] = "ACTIVE";
    DeviceStatus["INACTIVE"] = "INACTIVE";
    DeviceStatus["BLOCKED"] = "BLOCKED";
})(DeviceStatus || (DeviceStatus = {}));


/***/ }),

/***/ "../../../../../src/app/pipes/ellipsis.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EllipsisPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (value, args) {
        if (args === undefined) {
            return value;
        }
        if (value.length > args) {
            return value.substring(0, args) + '...';
        }
        else {
            return value;
        }
    };
    EllipsisPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'ellipsis'
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/analytics-window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsWindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_electron__ = __webpack_require__("../../../../ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticsWindowService = (function () {
    function AnalyticsWindowService(electron, infoDialog) {
        this.electron = electron;
        this.infoDialog = infoDialog;
    }
    AnalyticsWindowService.prototype.open = function (apiBase, businessId, businessName) {
        if (!this.electron.isElectronApp) {
            var url_1 = "/analytics-dashboard/index.html#/?apiBase=" + encodeURIComponent(apiBase) + "&businessId=" + businessId + "&businessName=" + encodeURIComponent(businessName) + "&chatFlowId=" + businessId;
            window.open(url_1);
            return;
        }
        var url = "file://" + this.electron.remote.app.getAppPath() + "/analytics-dashboard/index.html#/?apiBase=" + encodeURIComponent(apiBase) + "&businessId=" + businessId + "&businessName=" + encodeURIComponent(businessName) + "&chatFlowId=" + businessId;
        var win = new this.electron.remote.BrowserWindow({
            width: 900,
            height: 600,
            center: true
        });
        win.on('closed', function () {
            win = null;
        });
        win.loadURL(url);
    };
    AnalyticsWindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_electron__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_2__info_dialog_service__["a" /* InfoDialogService */]])
    ], AnalyticsWindowService);
    return AnalyticsWindowService;
}());



/***/ }),

/***/ "../../../../../src/app/services/chatflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatFlowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatFlowService = (function () {
    function ChatFlowService(http) {
        this.http = http;
        this.publishChatBotAPI = "bot/business";
    }
    ChatFlowService.prototype.normalizeBaseUrl = function (baseUrl) {
        baseUrl = baseUrl.replace(/\\$/, ''); //Remove ending \ char if any
        if (!baseUrl.endsWith('/'))
            baseUrl += '/';
        return baseUrl;
    };
    ChatFlowService.prototype.publishProject = function (conn, proj, pack) {
        var chatNodes = this.normalizeChatNodes(pack.ChatNodes);
        return this.http.post(this.normalizeBaseUrl(conn.ServerUrl) + this.publishChatBotAPI, {
            business_id: proj.Id,
            flow: chatNodes,
            business_name: proj.Name
        }).map(function (res) { return res.json(); });
    };
    ChatFlowService.prototype.chatProjectExists = function (conn, proj) {
        return this.http.get(this.normalizeBaseUrl(conn.ServerUrl) + this.publishChatBotAPI + "?business_id=" + proj.Id).map(function (res) { return res.json(); });
    };
    ChatFlowService.prototype.normalizeChatNodes = function (chatNodes) {
        chatNodes.forEach(function (x) {
            x.IsStartNode = x.IsStartNode ? true : false; //This field should exist even if it's false
        });
        return chatNodes;
    };
    ChatFlowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ChatFlowService);
    return ChatFlowService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_data_models__ = __webpack_require__("../../../../../src/app/models/data.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http, infoDialog, dialog, router) {
        this.http = http;
        this.infoDialog = infoDialog;
        this.dialog = dialog;
        this.router = router;
        var connJSON = localStorage.getItem("conn");
        if (connJSON)
            this.conn = JSON.parse(connJSON);
    }
    DataService.prototype.getAnalyticsApiBase = function () {
        if (!this.conn || !this.conn.ServerUrl)
            return "";
        return this.conn.ServerUrl + "analytics";
    };
    Object.defineProperty(DataService.prototype, "chatServer", {
        get: function () {
            return this.conn;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.isSuperAdmin = function () {
        if (!this.loggedInUser || !this.loggedInUser.roles)
            return false;
        return this.loggedInUser.roles.map(function (x) { return x.role; }).indexOf("SUPER_ADMIN") != -1;
    };
    DataService.prototype.isBizAdmin = function () {
        if (!this.loggedInUser || !this.loggedInUser.roles)
            return false;
        return this.loggedInUser.roles.map(function (x) { return x.role; }).indexOf("BUSINESS_ADMIN") != -1;
    };
    DataService.prototype.isFlowManager = function () {
        if (!this.loggedInUser || !this.loggedInUser.roles)
            return false;
        return this.loggedInUser.roles.map(function (x) { return x.role; }).indexOf("BUSINESS_FLOW_MANAGER") != -1;
    };
    DataService.prototype.normalizeBaseUrl = function (baseUrl) {
        baseUrl = baseUrl.replace(/\\$/, ''); //Remove ending \ char if any
        if (!baseUrl.endsWith('/'))
            baseUrl += '/';
        return baseUrl;
    };
    DataService.prototype.getHeaders = function () {
        if (this.loggedInUser && this.loggedInUser.accessToken)
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                "access-token": this.loggedInUser.accessToken
            });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
    };
    DataService.prototype.setConnection = function (conn) {
        if (conn && conn.ServerUrl)
            conn.ServerUrl = this.normalizeBaseUrl(conn.ServerUrl);
        localStorage.setItem("conn", JSON.stringify(conn));
        this.conn = conn;
    };
    DataService.prototype.getRoles = function () {
        var h = this.getHeaders();
        return this.http.get(this.conn.ServerUrl + "auth/roles", { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.getBusinessAccounts = function (searchText, page, size) {
        if (searchText === void 0) { searchText = ""; }
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var h = this.getHeaders();
        return this.http.get(this.conn.ServerUrl + "business/accounts?searchText=" + encodeURIComponent(searchText) + "&page=" + page + "&size=" + size, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.getBusinessDetails = function (bizId) {
        var h = this.getHeaders();
        return this.http.get(this.conn.ServerUrl + "business/accounts/" + bizId, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.updateBusinessAccountStatus = function (account, status) {
        var h = this.getHeaders();
        return this.http.put(this.conn.ServerUrl + "business/accounts/" + account.id + "/status/" + __WEBPACK_IMPORTED_MODULE_3__models_data_models__["a" /* BusinessAccountStatus */][status], { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.saveBusinessAccount = function (account, create) {
        if (create) {
            return this.http.post(this.conn.ServerUrl + "business/accounts", account, { headers: this.getHeaders() }).map(function (x) { return x; });
        }
        else {
            return this.http.put(this.conn.ServerUrl + "business/accounts/" + account.id, account, { headers: this.getHeaders() }).map(function (x) { return x; });
        }
    };
    DataService.prototype.getChatProjects = function (businessId, page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var h = this.getHeaders();
        return this.http.get(this.conn.ServerUrl + "business/flows?page=" + page + "&size=" + size + "&businessId=" + businessId, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.createChatProject = function (chatProject) {
        var h = this.getHeaders();
        return this.http.post(this.conn.ServerUrl + "business/flows", chatProject, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.registerOnAnaCloud = function (request) {
        var h = this.getHeaders();
        var serverUrl = "http://gateway.api.dev.ana.chat/";
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            serverUrl = "http://gateway.api.ana.chat/";
        }
        return this.http.post(serverUrl + "business/accounts/publicRegister", request, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.saveChatProject = function (chatProject) {
        var h = this.getHeaders();
        if ((chatProject.flow && Object.keys(chatProject.flow).length <= 0) || chatProject.flow === null) {
            delete chatProject.flow;
        }
        if ((chatProject.source && Object.keys(chatProject.source).length <= 0) || chatProject.source === null) {
            delete chatProject.source;
        }
        return this.http.put(this.conn.ServerUrl + "business/flows/" + chatProject.id, chatProject, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.getUsers = function (bizid, searchText, page, size) {
        if (searchText === void 0) { searchText = ""; }
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var h = this.getHeaders();
        return this.http.get(this.conn.ServerUrl + "auth/users?searchText=" + encodeURIComponent(searchText) + "&page=" + page + "&size=" + size + "&businessId=" + bizid, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.createUser = function (user) {
        var h = this.getHeaders();
        return this.http.post(this.conn.ServerUrl + "auth/users/accounts/register", user, { headers: h })
            .map(function (x) { return x; });
    };
    DataService.prototype.login = function (username, password) {
        return this.http.post(this.conn.ServerUrl + "auth/login", {
            "username": username,
            "password": password
        }).map(function (x) { return x; });
    };
    DataService.prototype.updatePassword = function (userId, password) {
        var h = this.getHeaders();
        return this.http.put(this.conn.ServerUrl + "auth/credentials/" + userId, {
            "newPassword": password
        }, { headers: h }).map(function (x) { return x; });
    };
    DataService.prototype.changeCurrentUserPassword = function (password, newPassword) {
        var h = this.getHeaders();
        return this.http.put(this.conn.ServerUrl + "auth/credentials/reset", {
            "newPassword": newPassword,
            "password": password
        }, { headers: h }).map(function (x) { return x; });
    };
    DataService.prototype.checkLogin = function (data) {
        return this.http.get(this.conn.ServerUrl + "auth/me", {
            headers: { "access-token": data.accessToken }
        }).map(function (x) { return x; });
    };
    DataService.prototype.logout = function () {
        localStorage.removeItem("user");
        var h = this.getHeaders();
        delete this.loggedInUser;
        return this.http.get(this.conn.ServerUrl + "auth/logout", {
            headers: h
        }).map(function (x) { return x; });
    };
    DataService.prototype.userLoggedinCheck = function (callback, hardCheck) {
        var _this = this;
        if (hardCheck === void 0) { hardCheck = false; }
        if (this.conn && this.conn.ServerUrl) {
            var userJSON = localStorage.getItem("user");
            if (userJSON) {
                var user_1 = JSON.parse(userJSON);
                if (user_1.accessToken && !hardCheck) {
                    this.loggedInUser = user_1;
                    callback(true);
                    return;
                }
                this.checkLogin(user_1).subscribe(function (x) {
                    if (x.success) {
                        _this.loggedInUser = user_1;
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                }, function (err) {
                    callback(false);
                });
                return;
            }
        }
        callback(false);
    };
    DataService.prototype.handleError = function (err, title, message) {
        var body = err.error;
        if (body && body.error) {
            this.handleTypedError(body.error, title, message);
        }
        else
            this.infoDialog.alert(title, message);
    };
    DataService.prototype.handleTypedError = function (err, title, message) {
        var msg = err.message || message;
        if (err.errors) {
            err.errors.forEach(function (x) {
                msg += " " + x.message;
            });
        }
        this.infoDialog.alert(title, msg);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__info_dialog_service__["a" /* InfoDialogService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/globals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsService; });
/* unused harmony export VariableType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bson__ = __webpack_require__("../../../../bson/lib/bson/bson.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bson___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bson__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__ = __webpack_require__("../../../../../src/app/models/chatflow.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalsService = (function () {
    function GlobalsService(title) {
        this.title = title;
        this.appName = 'Ana';
        this.loading = false;
        this.EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/;
        this.PHONE_REGEX = /^\+?\d{6,15}$/;
    }
    GlobalsService.prototype.setPageTitle = function (title) {
        if (title)
            this.title.setTitle(title + " - " + this.appName);
        else
            this.title.setTitle(this.appName);
    };
    GlobalsService.prototype.downloadTextAsFile = function (filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    GlobalsService.prototype.uuidv4 = function () {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).toString().replace(/[018]/g, function (c) { return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16); });
    };
    GlobalsService.prototype.getVariableType = function (x) {
        if (Array.isArray(x))
            return VariableType.Array;
        else if (typeof x == 'string')
            return VariableType.String;
        else if (x != null && typeof x == 'object')
            return VariableType.Object;
        else
            return VariableType.Other;
    };
    GlobalsService.prototype.anaDateDisplay = function (anaDate) {
        return parseInt(anaDate.mday) + "-" + parseInt(anaDate.month) + "-" + parseInt(anaDate.year);
    };
    GlobalsService.prototype.anaTimeDisplay = function (anaTime) {
        var hr = parseInt(anaTime.hour);
        var min = parseInt(anaTime.minute);
        var hours = hr > 12 ? hr - 12 : hr;
        var am_pm = hr >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = min < 10 ? "0" + min : min;
        return hours + ":" + minutes + " " + am_pm;
    };
    GlobalsService.prototype.anaAddressDisplay = function (anaAddress) {
        return [anaAddress.line1, anaAddress.area, anaAddress.city, anaAddress.state, anaAddress.country, anaAddress.pin].filter(function (x) { return x; }).join(", ");
    };
    GlobalsService.prototype.anaLocationDisplay = function (anaLoc) {
        return anaLoc.lat + "," + anaLoc.lng;
    };
    GlobalsService.prototype.emailValid = function (val) {
        if (val)
            return this.EMAIL_REGEX.test(val);
        return false;
    };
    GlobalsService.prototype.phoneValid = function (val) {
        if (val)
            return this.PHONE_REGEX.test(val);
        return false;
    };
    GlobalsService.prototype.pwdMatch = function (p1, p2) {
        if (!p1)
            return false;
        if (p1.length < 6)
            return false;
        return p1 == p2;
    };
    GlobalsService.prototype.normalizeChatNodes = function (chatNodes) {
        chatNodes.forEach(function (x) {
            x.IsStartNode = x.IsStartNode ? true : false; //This field should exist even if it's false
        });
        return chatNodes;
    };
    GlobalsService.prototype.cloneNode = function (srcNode) {
        if (!srcNode) {
            return false;
        }
        var targetNode = JSON.parse(JSON.stringify(srcNode));
        targetNode.Id = new __WEBPACK_IMPORTED_MODULE_2_bson__["ObjectID"]().toHexString();
        targetNode.Name += " Copy";
        targetNode.NextNodeId = null;
        if (targetNode.Buttons) {
            targetNode.Buttons.forEach(function (btn) {
                btn._id = new __WEBPACK_IMPORTED_MODULE_2_bson__["ObjectID"]().toHexString();
                btn.NextNodeId = null;
            });
        }
        if (targetNode.Sections) {
            targetNode.Sections.forEach(function (section) {
                section._id = new __WEBPACK_IMPORTED_MODULE_2_bson__["ObjectID"]().toHexString();
                if (section.SectionType == __WEBPACK_IMPORTED_MODULE_3__models_chatflow_models__["g" /* SectionType */].Carousel) {
                    var car = section;
                    car.Items.forEach(function (carItem) {
                        carItem._id = new __WEBPACK_IMPORTED_MODULE_2_bson__["ObjectID"]().toHexString();
                        carItem.Buttons.forEach(function (carBtn) {
                            carBtn._id = new __WEBPACK_IMPORTED_MODULE_2_bson__["ObjectID"]().toHexString();
                            carBtn.NextNodeId = null;
                        });
                    });
                }
            });
        }
        return targetNode;
    };
    GlobalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], GlobalsService);
    return GlobalsService;
}());

var VariableType;
(function (VariableType) {
    VariableType[VariableType["Array"] = 0] = "Array";
    VariableType[VariableType["String"] = 1] = "String";
    VariableType[VariableType["Object"] = 2] = "Object";
    VariableType[VariableType["Other"] = 3] = "Other";
})(VariableType || (VariableType = {}));


/***/ }),

/***/ "../../../../../src/app/services/info-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__ = __webpack_require__("../../../../../src/app/components/shared/info-dialog/info-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shared_loading_mask_loading_mask_component__ = __webpack_require__("../../../../../src/app/components/shared/loading-mask/loading-mask.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoDialogService = (function () {
    function InfoDialogService(dialog) {
        this.dialog = dialog;
    }
    InfoDialogService.prototype.alert = function (title, message, callback) {
        var data = {
            dialogType: __WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__["b" /* InfoDialogType */].Alert,
            message: message,
            title: title
        };
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */], {
            width: 'auto',
            data: data
        });
        if (callback)
            d.afterClosed().subscribe(function (x) {
                if (callback)
                    callback();
            });
    };
    InfoDialogService.prototype.prompt = function (title, message, callback, defaultText) {
        var data = {
            dialogType: __WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__["b" /* InfoDialogType */].Prompt,
            message: message,
            title: title,
            defaultInputText: defaultText
        };
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */], {
            width: 'auto',
            data: data
        });
        d.afterClosed().subscribe(function (x) {
            callback(x);
        });
    };
    InfoDialogService.prototype.confirm = function (title, message, callback) {
        var data = {
            dialogType: __WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__["b" /* InfoDialogType */].Confirm,
            message: message,
            title: title
        };
        var d = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_shared_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */], {
            width: 'auto',
            data: data
        });
        d.afterClosed().subscribe(function (x) {
            callback(x);
        });
    };
    InfoDialogService.prototype.showSpinner = function () {
        this.hideSpinner();
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_shared_loading_mask_loading_mask_component__["a" /* LoadingMaskComponent */], {
            width: 'auto',
            disableClose: true,
            panelClass: 'trans-background'
        });
    };
    InfoDialogService.prototype.hideSpinner = function () {
        if (this.dialogRef) {
            this.dialogRef.close();
            delete this.dialogRef;
        }
    };
    InfoDialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */]])
    ], InfoDialogService);
    return InfoDialogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shared_login_login_component__ = __webpack_require__("../../../../../src/app/components/shared/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(dataService, dialog, router) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
    }
    LoginService.prototype.performLogin = function (skipAuth, fallbackUrl, hardCheck, next) {
        var _this = this;
        if (fallbackUrl === void 0) { fallbackUrl = "/"; }
        if (hardCheck === void 0) { hardCheck = false; }
        this.dataService.userLoggedinCheck(function (loggedin) {
            if (!loggedin && skipAuth == false) {
                var d = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_shared_login_login_component__["a" /* LoginComponent */], {
                    width: '600px',
                });
                d.afterClosed().subscribe(function (x) {
                    if (x == true) {
                        if (next)
                            next(true);
                        return;
                    }
                    if (fallbackUrl)
                        _this.router.navigateByUrl(fallbackUrl);
                    if (next)
                        next(true);
                });
            }
            else {
                if (next)
                    next(loggedin);
            }
        }, hardCheck);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsService = (function () {
    function SettingsService(infoDialog) {
        this.infoDialog = infoDialog;
    }
    SettingsService.prototype.loadSavedConnections = function () {
        var loaded = JSON.parse(localStorage.getItem(SettingKey.SavedConnsKey));
        if (loaded)
            return loaded;
        else
            return [];
    };
    SettingsService.prototype.saveSavedConnections = function (connections) {
        localStorage.setItem(SettingKey.SavedConnsKey, JSON.stringify(connections));
    };
    SettingsService.prototype.saveChatProject = function (chatProjectName, pack, quite, next) {
        chatProjectName += '.anaproj';
        if (quite) {
            localStorage.setItem(chatProjectName, JSON.stringify(pack));
            if (next)
                next();
        }
        else {
            var existing = localStorage.getItem(chatProjectName);
            if (existing) {
                this.infoDialog.confirm('Sure?', 'Chat project the given name already exists. Do you want to overwrite it?', function (ok) {
                    if (ok) {
                        localStorage.setItem(chatProjectName, JSON.stringify(pack));
                        if (next)
                            next();
                    }
                });
            }
            else {
                localStorage.setItem(chatProjectName, JSON.stringify(pack));
                if (next)
                    next();
            }
        }
    };
    SettingsService.prototype.getChatProject = function (chatProjectName) {
        chatProjectName += '.anaproj';
        var existing = localStorage.getItem(chatProjectName);
        if (!existing) {
            this.infoDialog.alert('Not found', "Chat Project with name '" + chatProjectName + "' does not exist");
            return null;
        }
        return JSON.parse(existing);
    };
    SettingsService.prototype.listSavedChatProjectNames = function () {
        var savedProjs = [];
        for (var key in localStorage) {
            if (key.endsWith('.anaproj')) {
                var name_1 = key.replace(new RegExp('\.anaproj$'), '');
                savedProjs.push(name_1);
            }
        }
        return savedProjs.sort(function (x, y) { return ((x && y) ? x.localeCompare(y) : 1); });
    };
    SettingsService.prototype.renameChatProject = function (oldName, newName) {
        if (oldName == newName)
            return;
        oldName += ".anaproj";
        newName += ".anaproj";
        var temp = localStorage.getItem(oldName);
        if (!temp) {
            this.infoDialog.alert('Not found', oldName + " not found");
            return;
        }
        localStorage.setItem(newName, temp);
        localStorage.removeItem(oldName);
    };
    SettingsService.prototype.deleteChatProject = function (name) {
        name += ".anaproj";
        var exists = localStorage.getItem(name);
        if (!exists) {
            this.infoDialog.alert('Not found', name + " not found");
            return false;
        }
        localStorage.removeItem(name);
        return true;
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_info_dialog_service__["a" /* InfoDialogService */]])
    ], SettingsService);
    return SettingsService;
}());

var SettingKey;
(function (SettingKey) {
    SettingKey["SavedConnsKey"] = "SAVED_CONNECTIONS";
})(SettingKey || (SettingKey = {}));


/***/ }),

/***/ "../../../../../src/app/services/simulator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatorService; });
/* unused harmony export SimulatorMessageType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__ = __webpack_require__("../../../../../src/app/models/chatflow.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__ = __webpack_require__("../../../../../src/app/models/ana-chat.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonpath__ = __webpack_require__("../../../../jsonpath/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonpath___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonpath__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SimulatorService = (function () {
    function SimulatorService(http, globals, infoDialog) {
        var _this = this;
        this.http = http;
        this.globals = globals;
        this.infoDialog = infoDialog;
        this.simulatorBusinessId = 'ana-studio';
        this.simulatorCustomerId = 'ana-simulator';
        this.debug = true;
        this.chatFlow = [];
        window.onmessage = function (event) {
            _this.logDebug('On message received from client:');
            _this.logDebug(event.data);
            var msg = event.data;
            if (msg.type == SimulatorMessageType.AnaChatMessage) {
                var cfMsg = msg;
                _this.handleIncomingMessage(cfMsg.data);
            }
        };
    }
    SimulatorService.prototype.init = function (chatFlow, simulatorFrame) {
        this.chatFlow = chatFlow;
        this.simulatorFrame = simulatorFrame;
        if (this.chatFlow && this.chatFlow.length > 0) {
            this.state = {
                variables: {}
            };
            this.pushResetToClient();
            var firstMsg = {
                'meta': {
                    'sender': {
                        'id': this.simulatorBusinessId,
                        'medium': 100
                    },
                    'recipient': {
                        'id': this.simulatorCustomerId,
                        'medium': 100
                    },
                    'senderType': __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["e" /* SenderType */].USER,
                    'timestamp': new Date().getTime(),
                },
                'data': {
                    'type': 2,
                    'content': {
                        'inputType': __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].OPTIONS,
                        'mandatory': 1,
                        'options': [
                            {
                                'title': 'Get Started',
                                'value': 'GetStarted'
                            }
                        ],
                        'input': {
                            'val': 'GET_STARTED'
                        }
                    }
                }
            };
            this.handleIncomingMessage(firstMsg);
        }
    };
    SimulatorService.prototype.handleIncomingMessage = function (message) {
        this.logDebug('Incoming message from client: ');
        this.logDebug(message);
        this.processIncomingMessage(message);
    };
    SimulatorService.prototype.pushMessageToClient = function (message) {
        if (this.simulatorFrame) {
            var resp = {
                data: message,
                type: SimulatorMessageType.AnaChatMessage
            };
            this.simulatorFrame.frame().postMessage(resp, '*');
        }
    };
    SimulatorService.prototype.pushResetToClient = function () {
        if (this.simulatorFrame) {
            this.simulatorFrame.frame().postMessage({
                type: SimulatorMessageType.AnaChatReset
            }, '*');
        }
    };
    SimulatorService.prototype.processIncomingMessage = function (chatMsg) {
        var message = chatMsg.data;
        if (message.type == __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT) {
            var ipMsgContent = message.content;
            if (ipMsgContent.input && Object.keys(ipMsgContent.input).length > 0) {
                var nextNodeId = '';
                var userData = null;
                switch (ipMsgContent.inputType) {
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].LOCATION://Click, Complex
                        {
                            var locIp = ipMsgContent.input;
                            userData = locIp.location;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetLocation);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].DATE://Click, Complex
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.date;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetDate);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].TIME://Click, Complex
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.time;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetTime);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].ADDRESS://Click, Complex
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.address;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetAddress);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].MEDIA://Click, Non Complex
                        {
                            var ip = ipMsgContent.input;
                            if (ip.media && ip.media.length > 0 && ip.media[0]) {
                                if (typeof ip.media[0].url == 'object') {
                                    userData = ip.media[0].url.changingThisBreaksApplicationSecurity;
                                }
                                else {
                                    userData = ip.media[0].url;
                                }
                                var cfmType = __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetFile;
                                switch (ip.media[0].type) {
                                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].AUDIO:
                                        cfmType = __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetAudio;
                                        break;
                                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].VIDEO:
                                        cfmType = __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetVideo;
                                        break;
                                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].IMAGE:
                                        cfmType = __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetImage;
                                        break;
                                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].FILE:
                                    default:
                                        cfmType = __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetFile;
                                        break;
                                }
                                var clickedBtn = this.getNodeButtonByType(cfmType);
                                if (clickedBtn) {
                                    nextNodeId = clickedBtn.NextNodeId;
                                }
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].OPTIONS://Click, Non Complex
                        {
                            var ip = ipMsgContent.input; //Option also has input.val
                            if (ip.val == 'GET_STARTED') {
                                var firstNode = __WEBPACK_IMPORTED_MODULE_5_underscore__["first"](this.chatFlow.filter(function (x) { return x.IsStartNode; }));
                                nextNodeId = (firstNode ? firstNode.Id : this.chatFlow[0].Id);
                            }
                            else {
                                var clickedBtn = this.getNodeButtonById(ip.val);
                                if (clickedBtn) {
                                    nextNodeId = clickedBtn.NextNodeId;
                                    userData = clickedBtn.VariableValue;
                                }
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].LIST://Click, Complex
                        {
                            var ipMsg = ipMsgContent;
                            var ip = ipMsg.input;
                            var listSelectedValues_1 = ip.val.split(',');
                            var listSelectedItems = ipMsg.values.filter(function (x) { return listSelectedValues_1.indexOf(x.value) != -1; });
                            userData = ip.val; //listSelectedItems.map(x => x.text);
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetItemFromSource);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].PHONE:
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.val;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetPhoneNumber);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].EMAIL:
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.val;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetEmail);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].NUMERIC:
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.val;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetNumber);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].TEXT:
                        {
                            var ip = ipMsgContent.input;
                            userData = ip.val;
                            var clickedBtn = this.getNodeButtonByType(__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetText);
                            if (clickedBtn) {
                                nextNodeId = clickedBtn.NextNodeId;
                            }
                        }
                        break;
                    default:
                        break;
                }
                if (typeof userData == 'object') {
                    userData = JSON.stringify(userData);
                }
                this.saveVariable(userData);
                this.gotoNextNode(nextNodeId);
            }
        }
        else if (message.type == __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].CAROUSEL) {
            var msgContent = message.content;
            if (msgContent.input && Object.keys(msgContent.input).indexOf('val') != -1 && msgContent.input.val) {
                var clickedCarBtn = this.getCarouselButtonById(msgContent.input.val);
                this.saveVariable(clickedCarBtn.VariableValue);
                switch (clickedCarBtn.Type) {
                    case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].DeepLink:
                    case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].OpenUrl:
                    case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].NextNode:
                    default:
                        this.gotoNextNode(clickedCarBtn.NextNodeId);
                        break;
                }
            }
        }
    };
    SimulatorService.prototype.gotoNextNode = function (nextNodeId) {
        var nextNode = this.getNodeById(nextNodeId);
        if (nextNode) {
            this.processNode(nextNode);
        }
    };
    SimulatorService.prototype.getNodeById = function (Id) {
        if (Id) {
            var foundNodes = this.chatFlow.filter(function (n) { return n.Id == Id; });
            if (foundNodes && foundNodes.length > 0) {
                return foundNodes[0];
            }
        }
        return null;
    };
    SimulatorService.prototype.getNodeButtonById = function (buttonId) {
        var btn = this.state.currentNode.Buttons.filter(function (x) { return x._id == buttonId; });
        return (btn && btn.length > 0) ? btn[0] : null;
    };
    SimulatorService.prototype.getNodeButtonByType = function (type) {
        var btn = this.state.currentNode.Buttons.filter(function (x) { return x.ButtonType == type; });
        var firstTry = (btn && btn.length > 0) ? btn[0] : null;
        if (firstTry) {
            return firstTry;
        }
        if (type == __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetText) {
            var found = __WEBPACK_IMPORTED_MODULE_5_underscore__["first"](__WEBPACK_IMPORTED_MODULE_5_underscore__["filter"](this.state.currentNode.Buttons, function (x) { return __WEBPACK_IMPORTED_MODULE_5_underscore__["contains"]([
                __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetPhoneNumber,
                __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetEmail,
                __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetNumber
            ], x.ButtonType); }));
            if (found) {
                return found;
            }
        }
        return null;
    };
    SimulatorService.prototype.getCarouselButtonById = function (carItemBtnId) {
        var carSection = this.state.currentSection;
        if (carSection && carSection.SectionType == __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Carousel) {
            var selectedCarBtn = null;
            for (var i = 0; i < carSection.Items.length; i++) {
                var carItem = carSection.Items[i];
                for (var j = 0; j < carItem.Buttons.length; j++) {
                    var carBtn = carItem.Buttons[j];
                    if (carBtn._id == carItemBtnId) {
                        selectedCarBtn = carBtn;
                        break;
                    }
                }
                if (selectedCarBtn) {
                    break;
                }
            }
            return selectedCarBtn;
        }
        return null;
    };
    SimulatorService.prototype.saveVariable = function (value) {
        if (value && this.state.currentNode && this.state.currentNode.VariableName) {
            this.state.variables[this.state.currentNode.VariableName] = value;
        }
    };
    SimulatorService.prototype.logDebug = function (msg) {
        if (this.debug) {
            console.log(msg);
        }
    };
    SimulatorService.prototype.processVerbsForChatNode = function (chatNode) {
        try {
            var nodeJson = this.processVerbs(JSON.stringify(chatNode));
            return JSON.parse(nodeJson);
        }
        catch (e) {
            this.logDebug(e);
        }
    };
    SimulatorService.prototype.replaceTxt = function (subStr, key) {
        if (!key) {
            key = subStr.replace('{{', '').replace('}}', '');
        }
        try {
            if (this.state.variables && this.state.variables[key]) {
                return this.state.variables[key];
            }
            else {
                var rootToken = key.split(/\.|\[/)[0];
                var wrappedResp = {};
                wrappedResp[rootToken] = JSON.parse(this.state.variables[rootToken]);
                var deepValue = __WEBPACK_IMPORTED_MODULE_4_jsonpath__["query"](wrappedResp, key);
                if (deepValue && typeof deepValue == 'object' && deepValue.length == 1) {
                    deepValue = deepValue[0];
                }
                return deepValue;
            }
        }
        catch (e) {
            return subStr;
        }
    };
    SimulatorService.prototype.jsonEscape = function (value) {
        if (value && (typeof value == 'string') && value.replace) {
            var rTxt = value
                .replace(/\n/g, '\\n')
                .replace(/\"/g, '\\"')
                .replace(/\r/g, '\\r')
                .replace(/\t/g, '\\t')
                .replace(/\f/g, '\\f');
            return rTxt;
        }
        return value;
    };
    SimulatorService.prototype.processVerbs = function (txt) {
        var _this = this;
        var processedText = txt.replace(/\[~(.*?)\]|{{(.*?)}}/g, function (subStr, key) {
            return _this.jsonEscape(_this.replaceTxt(subStr, key));
        });
        return processedText;
    };
    SimulatorService.prototype.processNode = function (chatNode, section) {
        var _this = this;
        chatNode = this.processVerbsForChatNode(chatNode);
        this.state.currentNode = chatNode;
        this.state.currentSection = section || __WEBPACK_IMPORTED_MODULE_5_underscore__["first"](chatNode.Sections);
        switch (chatNode.NodeType) {
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["f" /* NodeType */].ApiCall:
                {
                    var apiHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                    if (chatNode.Headers) {
                        var splits = chatNode.Headers.split(/\n|,/);
                        for (var si = 0; si < splits.length; si++) {
                            try {
                                var split = splits[si];
                                if (split.indexOf(':') != -1) {
                                    var key = split.split(':')[0];
                                    var value = split.split(':')[1];
                                    apiHeaders.set(key, value);
                                }
                            }
                            catch (e) {
                                this.logDebug('Invalid format provided in headers');
                                this.logDebug(e);
                            }
                        }
                    }
                    var reqBody = null;
                    if (chatNode.RequestBody) {
                        reqBody = this.processVerbs(chatNode.RequestBody);
                    }
                    var reqParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    if (chatNode.RequiredVariables) {
                        for (var i = 0; i < chatNode.RequiredVariables.length; i++) {
                            if (chatNode.RequiredVariables[i] && Object.keys(this.state.variables).indexOf(chatNode.RequiredVariables[i]) != -1) {
                                reqParams.append(chatNode.RequiredVariables[i], this.state.variables[chatNode.RequiredVariables[i]]);
                            }
                        }
                    }
                    var nextNodeId_1 = chatNode.NextNodeId;
                    this.http.request(chatNode.ApiUrl, {
                        headers: apiHeaders,
                        body: reqBody,
                        method: __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["a" /* APIMethod */][chatNode.ApiMethod],
                        params: reqParams,
                    }).subscribe(function (res) {
                        _this.saveVariable(res.text());
                        _this.processConditionNode(chatNode);
                    }, function (err) {
                        if (Math.trunc(err.status / 100) == 5 || typeof err._body == 'object') {
                            _this.logDebug(err);
                            _this.gotoNextNode(nextNodeId_1); //Fallback node
                        }
                        else {
                            _this.saveVariable(err._body);
                            _this.processConditionNode(chatNode);
                        }
                    });
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["f" /* NodeType */].Card:
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["f" /* NodeType */].Condition:
                this.processConditionNode(chatNode);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["f" /* NodeType */].Combination:
            default:
                {
                    if (chatNode.Sections && chatNode.Sections.length > 0) {
                        var msg = this.convertSection(this.state.currentSection);
                        this.prepareReplyAndSend(msg);
                        var sectionIndex = chatNode.Sections.findIndex(function (x) { return x._id == _this.state.currentSection._id; });
                        var remainingSections = chatNode.Sections.length - (sectionIndex + 1);
                        if (remainingSections > 0) {
                            this.processNode(chatNode, chatNode.Sections[sectionIndex + 1]);
                            return;
                        }
                    }
                    if (this.state.currentNode && this.state.currentNode.Buttons && this.state.currentNode.Buttons.length > 0) {
                        this.convertButtons(this.state.currentNode, function (inputMsgToSend) {
                            _this.prepareReplyAndSend(inputMsgToSend);
                        });
                    }
                }
                break;
        }
    };
    SimulatorService.prototype.prepareReplyAndSend = function (data) {
        var meta = {
            id: this.globals.uuidv4(),
            recipient: {
                id: this.simulatorBusinessId,
                medium: 100
            },
            sender: {
                id: this.simulatorCustomerId,
                medium: 100
            },
            senderType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["e" /* SenderType */].ANA,
            sessionId: '1234',
            timestamp: new Date().getTime(),
            responseTo: ''
        };
        this.pushMessageToClient({
            meta: meta,
            data: data
        });
    };
    SimulatorService.prototype.convertSection = function (section) {
        var _this = this;
        var anaMessageContent = {
            text: ''
        };
        var anaMessageData = {
            content: anaMessageContent,
            type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].SIMPLE
        };
        switch (section.SectionType) {
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Image:
                anaMessageContent.media = {
                    type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].IMAGE,
                    url: section.Url,
                };
                anaMessageContent.text = section.Title;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Text:
            default:
                anaMessageContent.text = section.Text;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Gif:
                anaMessageContent.media = {
                    type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].IMAGE,
                    url: section.Url,
                };
                anaMessageContent.text = section.Title;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Audio:
                anaMessageContent.media = {
                    type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].AUDIO,
                    url: section.Url,
                };
                anaMessageContent.text = section.Title;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Video:
                anaMessageContent.media = {
                    type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].VIDEO,
                    url: section.Url,
                };
                anaMessageContent.text = section.Title;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["g" /* SectionType */].Carousel:
                {
                    var carContent = {
                        items: __WEBPACK_IMPORTED_MODULE_5_underscore__["map"](section.Items, function (x) {
                            return {
                                title: x.Title,
                                desc: x.Caption,
                                media: {
                                    type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].IMAGE,
                                    url: x.ImageUrl
                                },
                                options: __WEBPACK_IMPORTED_MODULE_5_underscore__["map"](x.Buttons, function (y) {
                                    if (y.Type == __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].NextNode) {
                                        return {
                                            title: y.Text,
                                            value: y._id,
                                            type: _this.convertCarouselButtonType(y.Type)
                                        };
                                    }
                                    else {
                                        return {
                                            title: y.Text,
                                            value: JSON.stringify({
                                                url: y.Url,
                                                value: y._id
                                            }),
                                            type: _this.convertCarouselButtonType(y.Type)
                                        };
                                    }
                                }),
                                url: ''
                            };
                        }),
                        mandatory: 1
                    };
                    anaMessageData = {
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].CAROUSEL,
                        content: carContent
                    };
                }
                break;
        }
        return anaMessageData;
    };
    SimulatorService.prototype.convertButtons = function (chatNode, callback) {
        var _this = this;
        var clickInputs = __WEBPACK_IMPORTED_MODULE_5_underscore__["filter"](chatNode.Buttons, function (x) { return __WEBPACK_IMPORTED_MODULE_5_underscore__["contains"]([
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].DeepLink,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].OpenUrl,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetDate,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetImage,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetVideo,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetAddress,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetAudio,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetDateTime,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetTime,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetItemFromSource,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetFile,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetLocation,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].FetchChatFlow,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].ShowConfirmation,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].NextNode,
        ], x.ButtonType); });
        var textInputs = __WEBPACK_IMPORTED_MODULE_5_underscore__["filter"](chatNode.Buttons, function (x) { return __WEBPACK_IMPORTED_MODULE_5_underscore__["contains"]([
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetText,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetEmail,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetPhoneNumber,
            __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetNumber,
        ], x.ButtonType); });
        var mandatory = 1;
        if (textInputs && textInputs.length > 0 && clickInputs && clickInputs.length > 0) {
            mandatory = 0;
        }
        if (clickInputs && clickInputs.length > 0) {
            if (__WEBPACK_IMPORTED_MODULE_5_underscore__["filter"](clickInputs, function (x) { return __WEBPACK_IMPORTED_MODULE_5_underscore__["contains"]([__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].NextNode, __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].OpenUrl], x.ButtonType); }).length > 0) {
                //Build options input and send
                var optionsInput = {
                    inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].OPTIONS,
                    mandatory: mandatory,
                    options: __WEBPACK_IMPORTED_MODULE_5_underscore__["map"](__WEBPACK_IMPORTED_MODULE_5_underscore__["filter"](clickInputs, function (x) { return __WEBPACK_IMPORTED_MODULE_5_underscore__["contains"]([__WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].NextNode, __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].OpenUrl], x.ButtonType); }), function (y) {
                        return {
                            title: y.ButtonName || y.ButtonText,
                            value: (y.ButtonType == __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].OpenUrl ? JSON.stringify({ url: y.Url, value: y._id }) : y._id),
                            type: _this.convertButtonType(y.ButtonType)
                        };
                    })
                };
                return callback({
                    content: optionsInput,
                    type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                });
            }
            var inputButton_1 = __WEBPACK_IMPORTED_MODULE_5_underscore__["first"](clickInputs);
            switch (inputButton_1.ButtonType) {
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetDate:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].DATE,
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetTime:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].TIME,
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetVideo:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].MEDIA,
                            mediaType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].VIDEO
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetImage:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].MEDIA,
                            mediaType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].IMAGE
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetAddress:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].ADDRESS,
                            requiredFields: [
                                'area',
                                'country',
                                'pin',
                                'city',
                                'state',
                                'line1'
                            ]
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetAudio:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].MEDIA,
                            mediaType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].AUDIO
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetItemFromSource: {
                    if (inputButton_1.ItemsSource) {
                        var msg_1 = {
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].LIST,
                            multiple: inputButton_1.AllowMultiple,
                            mandatory: mandatory,
                            values: []
                        };
                        var itemSrc = inputButton_1.ItemsSource.split(',').map(function (x) {
                            var y = x.trim().split(':');
                            return { K: y[0], V: y[1] };
                        });
                        itemSrc.forEach(function (x) { return msg_1.values.push({
                            text: x.K,
                            value: x.V
                        }); });
                        return callback({
                            content: msg_1,
                            type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                        });
                    }
                    if (inputButton_1.Url) {
                        this.http.get(inputButton_1.Url).subscribe(function (x) {
                            var items = x.json();
                            var itemKeys = Object.keys(items);
                            var msg = {
                                inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].LIST,
                                multiple: inputButton_1.AllowMultiple,
                                mandatory: mandatory,
                                values: itemKeys.map(function (key) {
                                    return {
                                        text: key,
                                        value: items[key]
                                    };
                                })
                            };
                            return callback({
                                content: msg,
                                type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                            });
                        });
                        return;
                    }
                }
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetFile:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].MEDIA,
                            mediaType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["c" /* MediaType */].FILE
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetLocation:
                    return callback({
                        content: {
                            mandatory: mandatory,
                            inputType: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].LOCATION,
                        },
                        type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
                    });
                default:
                    break;
            }
        }
        if (textInputs && textInputs.length > 0) {
            var textInput = textInputs[0];
            var inputMsg = {
                inputType: this.convertButtonTypeToInputType(textInput.ButtonType),
                mandatory: mandatory,
                textInputAttr: {
                    defaultText: textInput.DefaultText,
                    maxLength: textInput.MaxLength,
                    minLength: textInput.MinLength,
                    multiLine: textInput.IsMultiLine ? 1 : 0,
                    placeHolder: textInput.PlaceholderText
                }
            };
            return callback({
                content: inputMsg,
                type: __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["d" /* MessageType */].INPUT
            });
        }
    };
    SimulatorService.prototype.convertButtonTypeToInputType = function (srcType) {
        switch (srcType) {
            default:
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetText:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].TEXT;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetEmail:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].EMAIL;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetNumber:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].NUMERIC;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].GetPhoneNumber:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["b" /* InputType */].PHONE;
        }
    };
    SimulatorService.prototype.convertCarouselButtonType = function (srcType) {
        switch (srcType) {
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].DeepLink:
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].OpenUrl:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["a" /* ButtonType */].URL;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["c" /* CarouselButtonType */].NextNode:
            default:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["a" /* ButtonType */].ACTION;
        }
    };
    SimulatorService.prototype.convertButtonType = function (srcType) {
        switch (srcType) {
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].DeepLink:
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].OpenUrl:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["a" /* ButtonType */].URL;
            case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["b" /* ButtonType */].NextNode:
            default:
                return __WEBPACK_IMPORTED_MODULE_3__models_ana_chat_models__["a" /* ButtonType */].ACTION;
        }
    };
    SimulatorService.prototype.processConditionNode = function (chatNode) {
        var done = false;
        try {
            if (chatNode.Buttons) {
                for (var btnIdx = 0; btnIdx < chatNode.Buttons.length; btnIdx++) {
                    var btn = chatNode.Buttons[btnIdx];
                    var rootToken = btn.ConditionMatchKey.split(/\.|\[/)[0];
                    var wrappedResp = {};
                    wrappedResp[rootToken] = JSON.parse(this.state.variables[rootToken]);
                    var deepValue = __WEBPACK_IMPORTED_MODULE_4_jsonpath__["query"](wrappedResp, btn.ConditionMatchKey);
                    if (deepValue && typeof deepValue == 'object' && deepValue.length == 1) {
                        deepValue = deepValue[0];
                    }
                    if (this.match(deepValue, btn.ConditionOperator, btn.ConditionMatchValue)) {
                        this.saveVariable(btn.VariableValue);
                        this.gotoNextNode(btn.NextNodeId);
                        done = true;
                        break;
                    }
                }
            }
        }
        catch (e) {
            if (chatNode.Buttons) {
                for (var btnIdx = 0; btnIdx < chatNode.Buttons.length; btnIdx++) {
                    var btn = chatNode.Buttons[btnIdx];
                    var leftOperand = this.state.variables[btn.ConditionMatchKey];
                    if (this.match(leftOperand, btn.ConditionOperator, btn.ConditionMatchValue)) {
                        this.saveVariable(btn.VariableValue);
                        this.gotoNextNode(btn.NextNodeId);
                        done = true;
                        break;
                    }
                }
            }
        }
        if (!done) {
            this.gotoNextNode(chatNode.NextNodeId);
        } //Fallback node id
    };
    SimulatorService.prototype.match = function (left, op, right) {
        try {
            switch (op) {
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].Between: {
                    var r1 = right.split(',')[0];
                    var r2 = right.split(',')[1];
                    return (r1 < left && left < r2);
                }
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].NotEqualTo:
                    return left != right;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].GreaterThan:
                    return left > right;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].LessThan:
                    return left < right;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].GreaterThanOrEqualTo:
                    return left >= right;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].LessThanOrEqualTo:
                    return left <= right;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].In:
                    return right.split(',').indexOf(left) != -1;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].NotIn:
                    return right.split(',').indexOf(left) == -1;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].StartsWith:
                    return left.startsWith(right);
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].EndsWith:
                    return left.endsWith(right);
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].Contains:
                    return left.indexOf(right) != -1;
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].IsNull:
                    return (left == null || left == undefined);
                case __WEBPACK_IMPORTED_MODULE_2__models_chatflow_models__["d" /* ConditionOperator */].EqualTo:
                default:
                    return left == right;
            }
        }
        catch (e) {
            this.infoDialog.alert('Invalid operation or operands', e);
        }
    };
    SimulatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__services_globals_service__["a" /* GlobalsService */], __WEBPACK_IMPORTED_MODULE_7__services_info_dialog_service__["a" /* InfoDialogService */]])
    ], SimulatorService);
    return SimulatorService;
}());

var SimulatorMessageType;
(function (SimulatorMessageType) {
    SimulatorMessageType["AnaChatMessage"] = "AnaChatMessage";
    SimulatorMessageType["AnaChatReset"] = "AnaChatReset";
})(SimulatorMessageType || (SimulatorMessageType = {}));


/***/ }),

/***/ "../../../../../src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_shared_chat_server_manager_chat_server_manager_component__ = __webpack_require__("../../../../../src/app/components/shared/chat-server-manager/chat-server-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shared_info_dialog_info_dialog_component__ = __webpack_require__("../../../../../src/app/components/shared/info-dialog/info-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shared_loading_indicator_loading_indicator_component__ = __webpack_require__("../../../../../src/app/components/shared/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shared_login_login_component__ = __webpack_require__("../../../../../src/app/components/shared/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_publish_dialog_publish_dialog_component__ = __webpack_require__("../../../../../src/app/components/shared/publish-dialog/publish-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared_edit_business_account_edit_business_account_component__ = __webpack_require__("../../../../../src/app/components/shared/edit-business-account/edit-business-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_app_header_bar_app_header_bar_component__ = __webpack_require__("../../../../../src/app/components/shared/app-header-bar/app-header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shared_get_ana_chat_server_get_ana_chat_server_component__ = __webpack_require__("../../../../../src/app/components/shared/get-ana-chat-server/get-ana-chat-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_electron__ = __webpack_require__("../../../../ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_ellipsis_pipe__ = __webpack_require__("../../../../../src/app/pipes/ellipsis.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_chatflow_service__ = __webpack_require__("../../../../../src/app/services/chatflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_globals_service__ = __webpack_require__("../../../../../src/app/services/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_info_dialog_service__ = __webpack_require__("../../../../../src/app/services/info-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_simulator_service__ = __webpack_require__("../../../../../src/app/services/simulator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_shared_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/components/shared/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_shared_update_password_update_password_component__ = __webpack_require__("../../../../../src/app/components/shared/update-password/update-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_shared_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/shared/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_shared_loading_mask_loading_mask_component__ = __webpack_require__("../../../../../src/app/components/shared/loading-mask/loading-mask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_shared_create_chatbot_create_chatbot_component__ = __webpack_require__("../../../../../src/app/components/shared/create-chatbot/create-chatbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_shared_publish_chatbot_publish_chatbot_component__ = __webpack_require__("../../../../../src/app/components/shared/publish-chatbot/publish-chatbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_analytics_window_service__ = __webpack_require__("../../../../../src/app/services/analytics-window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_hotkeys__ = __webpack_require__("../../../../angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_shared_business_picker_business_picker_component__ = __webpack_require__("../../../../../src/app/components/shared/business-picker/business-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_shared_ana_cloud_signup_ana_cloud_signup_component__ = __webpack_require__("../../../../../src/app/components/shared/ana-cloud-signup/ana-cloud-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__directives_autofocus_directive__ = __webpack_require__("../../../../../src/app/directives/autofocus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/ngx-clipboard.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var MAT_MODULES = [
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["u" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["n" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["t" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["e" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["A" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["C" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["j" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["q" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["o" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["B" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["f" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["v" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material__["s" /* MatRadioModule */]
];
var IMPORT_EXPORT = [
    __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_16_ngx_electron__["b" /* NgxElectronModule */],
    __WEBPACK_IMPORTED_MODULE_32_angular2_hotkeys__["HotkeyModule"],
    __WEBPACK_IMPORTED_MODULE_36_angular2_highlight_js__["HighlightJsModule"],
    __WEBPACK_IMPORTED_MODULE_37_ngx_clipboard__["a" /* ClipboardModule */],
].concat(MAT_MODULES);
var DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_0__components_shared_chat_server_manager_chat_server_manager_component__["a" /* ChatServerManagerComponent */],
    __WEBPACK_IMPORTED_MODULE_1__components_shared_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_shared_loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_shared_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_shared_publish_dialog_publish_dialog_component__["a" /* PublishDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_shared_edit_business_account_edit_business_account_component__["a" /* EditBusinessAccountComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_shared_app_header_bar_app_header_bar_component__["a" /* AppHeaderBarComponent */],
    __WEBPACK_IMPORTED_MODULE_24__components_shared_create_user_create_user_component__["a" /* CreateUserComponent */],
    __WEBPACK_IMPORTED_MODULE_25__components_shared_update_password_update_password_component__["a" /* UpdatePasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_27__components_shared_change_password_change_password_component__["a" /* ChangePasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_28__components_shared_loading_mask_loading_mask_component__["a" /* LoadingMaskComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_shared_get_ana_chat_server_get_ana_chat_server_component__["a" /* GetAnaChatServerComponent */],
    __WEBPACK_IMPORTED_MODULE_29__components_shared_create_chatbot_create_chatbot_component__["a" /* CreateChatbotComponent */],
    __WEBPACK_IMPORTED_MODULE_30__components_shared_publish_chatbot_publish_chatbot_component__["a" /* PublishChatbotComponent */],
    __WEBPACK_IMPORTED_MODULE_33__components_shared_business_picker_business_picker_component__["a" /* BusinessPickerComponent */],
    __WEBPACK_IMPORTED_MODULE_34__components_shared_ana_cloud_signup_ana_cloud_signup_component__["a" /* AnaCloudSignupComponent */],
    __WEBPACK_IMPORTED_MODULE_35__directives_autofocus_directive__["a" /* AutofocusDirective */],
    __WEBPACK_IMPORTED_MODULE_17__pipes_ellipsis_pipe__["a" /* EllipsisPipe */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            declarations: DECLARATIONS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ].concat(IMPORT_EXPORT),
            exports: IMPORT_EXPORT.concat(DECLARATIONS),
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_chatflow_service__["a" /* ChatFlowService */],
                __WEBPACK_IMPORTED_MODULE_19__services_globals_service__["a" /* GlobalsService */],
                __WEBPACK_IMPORTED_MODULE_20__services_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_21__services_info_dialog_service__["a" /* InfoDialogService */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["f" /* Title */],
                __WEBPACK_IMPORTED_MODULE_22__services_simulator_service__["a" /* SimulatorService */],
                __WEBPACK_IMPORTED_MODULE_23__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_26__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_31__services_analytics_window_service__["a" /* AnalyticsWindowService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__components_shared_info_dialog_info_dialog_component__["a" /* InfoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_shared_publish_dialog_publish_dialog_component__["a" /* PublishDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_shared_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_shared_chat_server_manager_chat_server_manager_component__["a" /* ChatServerManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shared_edit_business_account_edit_business_account_component__["a" /* EditBusinessAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_shared_create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_shared_update_password_update_password_component__["a" /* UpdatePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_shared_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_shared_loading_mask_loading_mask_component__["a" /* LoadingMaskComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_shared_get_ana_chat_server_get_ana_chat_server_component__["a" /* GetAnaChatServerComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_shared_create_chatbot_create_chatbot_component__["a" /* CreateChatbotComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_shared_publish_chatbot_publish_chatbot_component__["a" /* PublishChatbotComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_shared_business_picker_business_picker_component__["a" /* BusinessPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_shared_ana_cloud_signup_ana_cloud_signup_component__["a" /* AnaCloudSignupComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    local: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map