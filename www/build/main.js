webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/basic-account/basic-account.module": [
		283,
		4
	],
	"../pages/saving-account/saving-account.module": [
		285,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 147;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SmartReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SmartReviewPage = (function () {
    function SmartReviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SmartReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SmartReviewPage');
    };
    return SmartReviewPage;
}());
SmartReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-smart-review',template:/*ion-inline-start:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\pages\smart-review\smart-review.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="ios-menu-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n                <ion-icon name="ios-mail-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Chytry prehled</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="main-card">\n        <div class="main-card_title">\n            <h4>Uroceni bonusovou sazbou</h4>\n        </div>\n\n        <div class="main-card_content">\n            <ion-row>\n                <ion-col col-6>\n                    <ion-row>\n                        <ion-col col-3>\n                            <ion-icon start name="ios-calendar-outline"></ion-icon>\n                        </ion-col>\n                        <ion-col col-7>\n                            <span>Tento mesic</span><br>\n                            <span>Ne</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-row>\n                        <ion-col col-3>\n                            <ion-icon start name="ios-calendar-outline"></ion-icon>\n                        </ion-col>\n                        <ion-col col-7>\n                            <span>Pristi mesic</span><br>\n                            <span>Zatim ne</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n\n        </div>\n\n    </div>\n    <basic-accounts></basic-accounts>\n    <saving-accounts></saving-accounts>\n\n    <ion-fab bottom right>\n        <button ion-fab>\n            <ion-icon name="ios-add-outline"></ion-icon>\n        </button>\n        <ion-fab-list side="top" style="right: 0px;">\n            <ion-item>aslcnaslanc sl</ion-item>\n            <ion-item>aslcnaslanc sl</ion-item>\n            <ion-item>aslcnaslanc sl</ion-item>\n            <ion-item>aslcnaslanc sl</ion-item>\n        </ion-fab-list>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\pages\smart-review\smart-review.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SmartReviewPage);

//# sourceMappingURL=smart-review.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_credentials__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_smart_review_smart_review__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_basic_accounts_basic_accounts__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_saving_accounts_saving_accounts__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_basic_account_basic_account__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_saving_account_saving_account__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_smart_review_smart_review__["a" /* SmartReviewPage */],
            __WEBPACK_IMPORTED_MODULE_9__components_basic_accounts_basic_accounts__["a" /* BasicAccountsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_saving_accounts_saving_accounts__["a" /* SavingAccountsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_basic_account_basic_account__["a" /* BasicAccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_saving_account_saving_account__["a" /* SavingAccountPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/basic-account/basic-account.module#BasicAccountPageModule', name: 'BasicAccountPage', segment: 'basic-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/saving-account/saving-account.module#SavingAccountPageModule', name: 'SavingAccountPage', segment: 'saving-account', priority: 'low', defaultHistory: [] }
                ]
            }),
            // Firebase init credentials
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            // Firebase Database module to interact
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_smart_review_smart_review__["a" /* SmartReviewPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_basic_account_basic_account__["a" /* BasicAccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_saving_account_saving_account__["a" /* SavingAccountPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_smart_review_smart_review__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_smart_review_smart_review__["a" /* SmartReviewPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon start name="ios-home-outline"></ion-icon>\n\n                Chytry prehled\n\n                <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon start name="ios-mail-outline"></ion-icon>\n\n                Zpravy\n\n                <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon start name="ios-redo-outline"></ion-icon>\n\n                Zaplatit\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyDTG7ZdrNHRogG__WIh3uo8sboY0K79uK0",
    authDomain: "airbank-11a72.firebaseapp.com",
    databaseURL: "https://airbank-11a72.firebaseio.com",
    projectId: "airbank-11a72",
    storageBucket: "",
    messagingSenderId: "262889906710"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_basic_account_basic_account__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BasicAccountsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BasicAccountsComponent = (function () {
    function BasicAccountsComponent(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.basicAccountRef$ = this.db.list('basicAccounts');
        console.log(this.basicAccountRef$);
    }
    BasicAccountsComponent.prototype.navigateToBasicAccount = function () {
        // navigate to basic account page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_basic_account_basic_account__["a" /* BasicAccountPage */]);
    };
    return BasicAccountsComponent;
}());
BasicAccountsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'basic-accounts',template:/*ion-inline-start:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\components\basic-accounts\basic-accounts.html"*/'<div class="main-card no-vertical-padding">\n  <div class="main-card_list">\n    <div class="main-card_list-item">\n      <ion-row>\n        <ion-col>\n          Bezne ucty\n        </ion-col>\n        <ion-col text-right>\n          8768,98 Kc\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="main-card_list-item" (click)="navigateToBasicAccount()">\n      <ion-row *ngFor="let account of basicAccountRef$ | async">\n        <ion-col>\n          {{account.name}}\n        </ion-col>\n        <ion-col text-right>\n          {{account.number}}/{{account.bankCode}}\n          {{account.amount}} {{account.currency}}\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\components\basic-accounts\basic-accounts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], BasicAccountsComponent);

//# sourceMappingURL=basic-accounts.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavingAccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_saving_account_saving_account__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SavingAccountsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SavingAccountsComponent = (function () {
    function SavingAccountsComponent(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.savingAccountRef$ = this.db.list('savingAccounts');
        console.log(this.savingAccountRef$);
    }
    SavingAccountsComponent.prototype.navigateToSavingAccount = function (par) {
        console.log(par);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_saving_account_saving_account__["a" /* SavingAccountPage */]);
    };
    return SavingAccountsComponent;
}());
SavingAccountsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'saving-accounts',template:/*ion-inline-start:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\components\saving-accounts\saving-accounts.html"*/'<div class="main-card no-vertical-padding">\n  <div class="main-card_list">\n    <div class="main-card_list-item">\n      <ion-row>\n        <ion-col>\n          Sporici ucty\n        </ion-col>\n        <ion-col text-right>\n          8768,98 Kc\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="main-card_list-item" >\n      <ion-row *ngFor="let account of savingAccountRef$ | async" (click)="navigateToSavingAccount(account.$key)">\n        <ion-col>\n          {{account.name}}\n        </ion-col>\n        <ion-col text-right>\n          {{account.number}}/{{account.bankCode}}\n          {{account.amount}} {{account.currency}}\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\components\saving-accounts\saving-accounts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], SavingAccountsComponent);

//# sourceMappingURL=saving-accounts.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BasicAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasicAccountPage = (function () {
    function BasicAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BasicAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasicAccountPage');
    };
    return BasicAccountPage;
}());
BasicAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-basic-account',template:/*ion-inline-start:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\pages\basic-account\basic-account.html"*/'<!--\n  Generated template for the BasicAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BasicAccount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\pages\basic-account\basic-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], BasicAccountPage);

//# sourceMappingURL=basic-account.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavingAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SavingAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SavingAccountPage = (function () {
    function SavingAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SavingAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SavingAccountPage');
    };
    return SavingAccountPage;
}());
SavingAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-saving-account',template:/*ion-inline-start:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\pages\saving-account\saving-account.html"*/'<!--\n  Generated template for the SavingAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SavingAccount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tadeas.mihula\Documents\my_projects\firebaseAirbank\src\pages\saving-account\saving-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SavingAccountPage);

//# sourceMappingURL=saving-account.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map