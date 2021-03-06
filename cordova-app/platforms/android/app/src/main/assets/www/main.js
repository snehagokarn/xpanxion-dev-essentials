(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-stock/add-stock.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-stock/add-stock.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ss-full-width{\r\n    width: 100%;\r\n}\r\n\r\n.ss-hidden{\r\n    display: none!important;\r\n    visibility: hidden!important;\r\n}\r\n\r\n.ss-floatRight{\r\n    float: right;\r\n}\r\n\r\n.ss-mb-1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.ss-headline{\r\n    text-align: center;\r\n    margin: 0.5rem 0 1.5rem;\r\n  }"

/***/ }),

/***/ "./src/app/add-stock/add-stock.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-stock/add-stock.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"ss-headline\">\r\n  Add Stock\r\n</h1>\r\n<mat-card fullscreen>\r\n  <mat-card-content>\r\n    <form>\r\n\t\t<mat-form-field class=\"ss-full-width\">\r\n\t\t\t<input name=\"name\" [(ngModel)]=\"name\" matInput placeholder=\"Name\">\r\n\t\t</mat-form-field>\r\n\t\t<mat-form-field class=\"ss-full-width\">\r\n\t\t\t<textarea name=\"description\" matInput placeholder=\"Describe achievements\"  [(ngModel)]=\"description\"></textarea>\r\n\t\t</mat-form-field>\r\n\t\t<mat-form-field>\r\n\t\t\t<input name=\"score\" type=\"number\" matInput placeholder=\"Score\" [(ngModel)]=\"score\">\r\n\t\t</mat-form-field>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<!-- <mat-form-field>\r\n\t\t\t\t<input readonly=\"readonly\" [(ngModel)]=\"visibleImageName\" name=\"image\" matInput placeholder=\"Image Name\">\r\n\t\t\t</mat-form-field>\t\t\t -->\r\n\t\t\t\r\n\t\t\t<!-- <input name=\"browseImage\" id=\"browserImage\" class=\"ss-hidden\" type=\"file\" (change)=\"updateImageName()\" \r\n\t\t\taccept=\"image/x-png,image/gif,image/jpeg\">\t\t\t -->\r\n\t\t\t<button class=\"ss-full-width ss-mb-1\" mat-stroked-button color=\"primary\" (click)=\"triggerBrowse()\"><mat-icon>camera</mat-icon> Take a snap with your mate</button>\r\n\t\t\t<div style=\"text-align: center\" class=\"ss-full-width ss-mb-1\">OR</div>\r\n\t\t\t<button class=\"ss-full-width ss-mb-1\" mat-stroked-button color=\"primary\" (click)=\"photoBrowse()\"><mat-icon>insert_photo</mat-icon> Upload a photo from your phone</button>\r\n\t\t</div>\r\n\t\t<button class=\"ss-full-width ss-mb-1\" mat-raised-button color=\"primary\" (click)=\"resetStock()\">Reset</button>\r\n\t\t<button type=\"submit\" (click)=\"addStock()\" class=\"ss-full-width\" mat-raised-button color=\"primary\">Add</button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/add-stock/add-stock.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-stock/add-stock.component.ts ***!
  \**************************************************/
/*! exports provided: AddStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStockComponent", function() { return AddStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
/* harmony import */ var rxjs_add_operator_first__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs-compat/_esm5/add/operator/first.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddStockComponent = /** @class */ (function () {
    function AddStockComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.visibleImageName = "";
        this.APIUrl = " https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/";
    }
    AddStockComponent.prototype.ngOnInit = function () {
    };
    AddStockComponent.prototype.triggerBrowse = function () {
        // this.browseImage = document.getElementById("browserImage");
        // this.browseImage.click();
        var nav = navigator;
        var that = this;
        nav.camera.getPicture(function (imageData) {
            that.base64FileStream = imageData;
            console.log(imageData);
        }, function () { }, { destinationType: 0 });
    };
    AddStockComponent.prototype.photoBrowse = function () {
        // this.browseImage = document.getElementById("browserImage");
        // this.browseImage.click();
        var nav = navigator;
        var that = this;
        nav.camera.getPicture(function (imageData) {
            that.base64FileStream = imageData;
            console.log(imageData);
        }, function () { }, { destinationType: 0,
            sourceType: nav.camera.PictureSourceType.PHOTOLIBRARY });
    };
    AddStockComponent.prototype.updateImageName = function () {
        var actualImagePath = this.browseImage.value;
        var imageName = actualImagePath.replace(/.*[\/\\]/, '');
        if ((actualImagePath.toLowerCase().indexOf('png') > -1) ||
            (actualImagePath.toLowerCase().indexOf('jpg') > -1) ||
            (actualImagePath.toLowerCase().indexOf('gif') > -1)) {
            this.visibleImageName = imageName;
            this.getBase64(this.browseImage.files[0], this.base64FileStream);
        }
        else {
            this.openSnackBar('Upload Images only', '');
        }
    };
    AddStockComponent.prototype.resetStock = function () {
        this.browseImage.val = '';
        this.visibleImageName = '';
        this.description = '';
        this.name = '';
        this.score = 0;
    };
    AddStockComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    AddStockComponent.prototype.addStock = function () {
        var _this = this;
        debugger;
        var obj = {
            Id: Math.random().toString(),
            GiverId: "null",
            Description: this.description,
            Score: this.score,
            GetterId: this.name,
            ImageUrl: null
        };
        var fileObject = {};
        var save = this.http.post(this.APIUrl + "scores", obj);
        if (this.base64FileStream) {
            fileObject = {
                name: "UploadedImage" + Date.now().toLocaleString(),
                file: this.base64FileStream,
                extension: "image/jpeg"
            };
            this.http.post(this.APIUrl + "uploadFile", fileObject).subscribe(function (resp) {
                if (resp) {
                    obj.ImageUrl = resp.Location;
                    save.subscribe(function (saveResp) {
                        _this.openSnackBar('You shared some love', '');
                    });
                }
            });
        }
        else {
            save.subscribe(function (saveResp) {
                _this.openSnackBar('You shared some love', '');
            });
        }
    };
    AddStockComponent.prototype.getBase64 = function (file, converter) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var that = this;
        reader.onload = function () {
            that.base64FileStream = reader.result;
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('browseImage'),
        __metadata("design:type", Object)
    ], AddStockComponent.prototype, "browseImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('visibleImageName'),
        __metadata("design:type", String)
    ], AddStockComponent.prototype, "visibleImageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('name'),
        __metadata("design:type", String)
    ], AddStockComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('description'),
        __metadata("design:type", String)
    ], AddStockComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('score'),
        __metadata("design:type", Number)
    ], AddStockComponent.prototype, "score", void 0);
    AddStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-stock',
            template: __webpack_require__(/*! ./add-stock.component.html */ "./src/app/add-stock/add-stock.component.html"),
            styles: [__webpack_require__(/*! ./add-stock.component.css */ "./src/app/add-stock/add-stock.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddStockComponent);
    return AddStockComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".minHtWindow{\r\n  min-height: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<section class=\"minHtWindow\">\r\n    <app-stock-stash-nav></app-stock-stash-nav> \r\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", function () {
            alert(device.platform);
        }, false);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_stock_add_stock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-stock/add-stock.component */ "./src/app/add-stock/add-stock.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/my-account/my-account.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _stock_stash_nav_stock_stash_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-stash-nav/stock-stash-nav.component */ "./src/app/stock-stash-nav/stock-stash-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _add_stock_add_stock_component__WEBPACK_IMPORTED_MODULE_6__["AddStockComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_8__["MyAccountComponent"],
                _stock_stash_nav_stock_stash_nav_component__WEBPACK_IMPORTED_MODULE_11__["StockStashNavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ss-image-wrapper{\r\n    text-align: center;\r\n    background: beige;\r\n}\r\n\r\n.ss-image-wrapper img{\r\n    width: auto;\r\n    max-width: 100%;\r\n    margin: 0 !important;\r\n}\r\n\r\n/* todo add media query */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-title>{{card.title}}</mat-card-title>\r\n  <div class=\"ss-image-wrapper\">\r\n    <img mat-card-image src=\"{{card.imageUrl}}\" alt=\"{{imageAlt}}\">\r\n  </div>\r\n  <mat-card-content>\r\n    <p>\r\n      {{card.description}}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button *ngIf=\"card.allowLike\" mat-raised-button color=\"primary\">\r\n      <mat-icon>thumb_up</mat-icon>LIKE</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('card'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-button{\r\n  position: fixed;\r\n  right: 1rem;\r\n  bottom: 1rem;\r\n}\r\n\r\n.ss-headline{\r\n  text-align: center;\r\n  margin: 0.5rem 0 1.5rem;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"ss-headline\">\r\n  Leader Dashboard\r\n</h1>\r\n<div *ngIf=\"leaders\" class=\"ss-dashboard-card\">\r\n  <div *ngFor=\"let leader of leaders\">\r\n    <app-card [card]=\"translateToCard(leader)\"></app-card>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!leaders\">\r\n  No results to display\r\n</div>\r\n<button mat-fab class=\"add-button\" (click)=\"addStock()\" ><mat-icon>add</mat-icon></button> "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router) {
        this.http = http;
        this.router = router;
        this.APIUrl = " https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/";
    }
    DashboardComponent.prototype.translateToCard = function (leader) {
        return {
            allowLike: true,
            description: leader.description,
            imageUrl: leader.image,
            title: leader.fullName,
            imageAlt: ""
        };
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaders = new Array();
        return this.http.get(this.APIUrl + "dashboard").subscribe(function (response) {
            var data = response;
            if (data.Items && data.Items.length > 0) {
                data.Items.forEach(function (element) {
                    _this.leaders.push({
                        fullName: element.GetterId,
                        score: element.Score,
                        image: element.ImageUrl,
                        description: element.Description
                    });
                });
            }
            return _this.leaders;
        }, function (err) { return console.error(err); }, function () { return console.log('done loading foods'); });
    };
    DashboardComponent.prototype.addStock = function () {
        this.router.navigate(["addstock"]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\r\n    width: 100%;\r\n}\r\n.actions{\r\n    text-align: center;\r\n}\r\n.social-media{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-content: center;\r\n}\r\n.input-with-icon{\r\n    display: flex;\r\n    width: 10%;\r\n}\r\n.input-with-icon .input{\r\n   flex-grow: 10;\r\n}\r\n.input-with-icon .icon{\r\n    flex-grow: 0;\r\n }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fullscreen>\r\n  <mat-card-title>Login</mat-card-title>\r\n  <mat-card-content>\r\n    <form>\r\n      <!-- <div class=\"social-media\">\r\n        <div>\r\n          FB\r\n        </div>\r\n        <div>\r\n          Google\r\n        </div>\r\n      </div> -->\r\n      <mat-form-field  class=\"full-width\" >\r\n        <!-- <div class=\"icon\"><mat-icon>person</mat-icon></div> -->\r\n        <div class=\"input\"><input [(ngModel)]=\"email\" name=\"email\" matInput type=\"email\" placeholder=\"Email\"></div>\r\n      </mat-form-field>\r\n      <!-- <mat-form-field class=\"full-width\" >\r\n      <input  matInput id=\"password\" type=\"password\" placeholder=\"Password\" />\r\n    </mat-form-field> -->\r\n      <button type=\"submit\" (click)=\"login()\" class=\"full-width\" mat-raised-button color=\"primary\">Login</button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.APIUrl = " https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        return this.http.get(this.APIUrl + 'users/email/' + this.email).subscribe(function (response) {
            var data = response;
            if (data.Items && data.Items.length > 0) {
                //todo set the userservice here to have the logged in user details
                _this.router.navigate(["/dashboard"]);
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done loading foods'); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/my-account/my-account.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-account/my-account.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-account/my-account.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-account/my-account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  my-account works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/my-account/my-account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-account/my-account.component.ts ***!
  \****************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent() {
    }
    MyAccountComponent.prototype.ngOnInit = function () {
    };
    MyAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-account',
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.css */ "./src/app/my-account/my-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _add_stock_add_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-stock/add-stock.component */ "./src/app/add-stock/add-stock.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: "addstock",
        component: _add_stock_add_stock_component__WEBPACK_IMPORTED_MODULE_4__["AddStockComponent"]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/stock-stash-nav/stock-stash-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/stock-stash-nav/stock-stash-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n  }\r\n  \r\n  .container .toolbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .container .toolbar .user{\r\n      width: 100px;\r\n  }\r\n  \r\n  .ss-fix-header{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n  }\r\n  \r\n  .sidenav-container {\r\n    flex: 1 0 auto;\r\n    margin-top: 56px;\r\n  }\r\n  \r\n  .sidenav-content{\r\n      padding: 1rem;\r\n  }\r\n  \r\n  .sidenav{\r\n      position: fixed;\r\n      top: 56px;\r\n  }\r\n  \r\n  .sidenav .mat-button{\r\n      width: 100%;\r\n      text-align: left;\r\n  }\r\n  \r\n  .navbar-header .logo{\r\n      padding: 10px;\r\n  }\r\n  \r\n  .navbar-header .logo .logo-text {\r\n    margin-left: 8px;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    letter-spacing: .4px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/stock-stash-nav/stock-stash-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/stock-stash-nav/stock-stash-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"ss-fix-header\">\r\n    <mat-toolbar color=\"primary\" class=\"toolbar\">\r\n        <button class=\"hamburger\" class=\"hamburger\" (click)=\"sideNav.toggle()\" mat-icon-button >\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <div class=\"user\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n              <mat-icon>sentiment_very_satisfied</mat-icon>\r\n            <span>Sarah Conner</span>\r\n            <mat-icon>arrow_drop_down</mat-icon>\r\n          </button>\r\n          <mat-menu #appMenu=\"matMenu\">\r\n            <button mat-menu-item>My Account</button>\r\n            <button mat-menu-item>Logout</button>\r\n          </mat-menu>\r\n        </div> \r\n    </mat-toolbar>\r\n  </div>\r\n  <mat-sidenav-container class=\"sidenav-container\">\r\n      <mat-sidenav class=\"sidenav\" #sideNav mode=\"push\" opened=\"false\">\r\n      <div class=\"navbar-header\">\r\n          <div class=\"logo\">\r\n            <img class=\"logo-icon\" src=\"\">\r\n            <span class=\"logo-text\">Stock Share</span>\r\n          </div>\r\n      </div>\r\n      <div>\r\n        <button routerLink=\"/dashboard\" routerLinkActive=\"active\" mat-button color=\"primary\">\r\n        <mat-icon>stars</mat-icon>\r\n        Leader Dashboard</button>\r\n      </div>\r\n      <div>\r\n        <button routerLink=\"/addstock\" routerLinkActive=\"active\"  mat-button color=\"primary\">\r\n            <mat-icon>attach_money</mat-icon>\r\n            Give Points</button>\r\n      </div>\r\n      <div>\r\n          <button mat-button color=\"primary\">\r\n              <mat-icon>history</mat-icon>\r\n              My History</button>\r\n        </div>\r\n      </mat-sidenav>\r\n      <mat-sidenav-content class=\"sidenav-content\">\r\n        <div>\r\n        <router-outlet></router-outlet>  \r\n        </div>\r\n      </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/stock-stash-nav/stock-stash-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock-stash-nav/stock-stash-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: StockStashNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStashNavComponent", function() { return StockStashNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockStashNavComponent = /** @class */ (function () {
    function StockStashNavComponent() {
    }
    StockStashNavComponent.prototype.ngOnInit = function () {
    };
    StockStashNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-stash-nav',
            template: __webpack_require__(/*! ./stock-stash-nav.component.html */ "./src/app/stock-stash-nav/stock-stash-nav.component.html"),
            styles: [__webpack_require__(/*! ./stock-stash-nav.component.css */ "./src/app/stock-stash-nav/stock-stash-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StockStashNavComponent);
    return StockStashNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gsneh.NYMERIA\workspaces\xpanxion-dev-essentials\cordova-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map