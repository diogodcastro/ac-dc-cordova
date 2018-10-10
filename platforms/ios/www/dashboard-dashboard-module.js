(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-right {\r\n  margin-right: 2%;\r\n  margin-top: 0%;\r\n}\r\n\r\n.float-left {\r\n  margin-right: 5%;\r\n}\r\n\r\n.input {\r\n  text-align: center;\r\n}\r\n\r\n.label{\r\n  margin-right: 1%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <div class=\"card\" *ngIf=\"addControllerBoolean\">\n        <div class=\"card-header\">\n          <button class=\"btn btn-info float-right\" (click)=\"addController()\">\n            Add new Controller\n          </button>\n        </div>\n        <div class=\"card-body\" *ngIf=\"addFormBoolean\">\n          <form [formGroup]=\"newControllerForm\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <td>Name</td>\n                  <td>IP</td>\n                  <td>Save</td>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><input type=\"text\" formControlName=\"name\"></td>\n                  <td><input type=\"text\" formControlName=\"ip\"></td>\n                  <td><button class=\"btn btn-info\" (click)=\"addNewController()\">Save</button></td>\n                </tr>\n              </tbody>\n            </table>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12\">\n      <div *ngFor=\"let controller of controllers\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n\n            <form [formGroup]=\"newControllerForm\">\n\n              <div class=\"float-left\">\n                <input id=\"inputName\" class=\"input\" [value]=\"controller.name\" type=\"text\"\n                  formControlName=\"name\" required=\"true\">\n              </div>\n              <div class=\"float-none\">\n                <label class=\"label\" for=\"inputIP\">IP : </label>\n                <input id=\"inputIP\" class=\"input\" [value]=\"controller.ip\" type=\"text\"\n                  formControlName=\"ip\" required=\"true\">\n              </div>\n            </form>\n\n            <a class=\"float-right\" *ngIf=\"saveDeleteBoolean\" (click)=\"deleteController(controller)\"><img\n                src=\"assets/images/delete-button.png\"></a>\n            <a class=\"float-right\" *ngIf=\"saveDeleteBoolean\" (click)=\"updateControllerInfo(controller)\"><img\n                src=\"assets/images/save-button.png\"></a>\n            <a class=\"float-right\" (click)=\"editController(editControllerBoolean)\"><img src=\"assets/images/edit-button.png\"></a>\n\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table\">\n\n              <thead>\n                <tr>\n                  <th>Id</th>\n                  <th>Name</th>\n                  <th>Status</th>\n                  <th>Change</th>\n                  <th *ngIf=\"saveDeleteBoolean\"></th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let windows of controller['windows']\">\n                <tr>\n                  <td>{{windows.id}}</td>\n                  <td>\n                    <input class=\"input\" type=\"text\" [(ngModel)]=\"windows.name\" [disabled]=\"!saveDeleteBoolean\"></td>\n                  <td>{{windows.status}}</td>\n                  <td>\n                    <ui-switch [checked]=\"windows.status\" (change)=\"changeWindowsStatus = !changeWindowsStatus\"\n                      (click)=\"changeStatus(windows, controller)\"></ui-switch>\n                  </td>\n                  <td *ngIf=\"saveDeleteBoolean\">\n                    <a class=\"float-right\" (click)=\"deleteWindows(windows, controller)\"><img\n                        src=\"assets/images/delete-button.png\"></a>\n                    <a class=\"float-right\" (click)=\"updateWindows(controller)\"><img\n                          src=\"assets/images/save-button.png\"></a>\n                  </td>\n                </tr>\n\n              </tbody>\n\n            </table>\n\n            <div class=\"card\" *ngIf=\"controller.windows?.length < 5\">\n              <div class=\"card-header\">\n                <button class=\"btn btn-info float-right\" (click)=\"addWindowsController()\">Add new\n                  Window</button>\n              </div>\n              <div class=\"card-body\" *ngIf=\"addWindowsBoolean\">\n                <form [formGroup]=\"newFormWindows\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <td>Name</td>\n                        <td>Status</td>\n                        <td>Save</td>\n                      </tr>\n                    </thead>\n                    <tbody>\n\n                      <tr>\n                        <td>\n                          <input type=\"text\" formControlName=\"name\">\n                        </td>\n                        <td>\n                          <ui-switch [checked]=\"newWindowsCheck\"></ui-switch>\n                        <td><button class=\"btn btn-info\" (click)=\"addNewWindows(controller)\">Save</button></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_models_windows_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/models/windows.model */ "./src/app/shared/models/windows.model.ts");
/* harmony import */ var _shared_services_windows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/windows.service */ "./src/app/shared/services/windows.service.ts");
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/db.service */ "./src/app/shared/services/db.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_controller_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/controller.model */ "./src/app/shared/models/controller.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function DashboardComponent(dbService, windowsService) {
        this.dbService = dbService;
        this.windowsService = windowsService;
        this.addWindowsBoolean = false;
        this.newWindowsCheck = false;
        this.editControllerBoolean = false;
        this.saveDeleteBoolean = false;
        this.addControllerBoolean = false;
        this.addFormBoolean = false;
        this.changeWindowStatus = null;
        this.newControllerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            ip: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.newFormWindows = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.newWindowsCheck)
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getControllers();
        this.newControllerForm.controls['name'].disable();
        this.newControllerForm.controls['ip'].disable();
    };
    DashboardComponent.prototype.getControllers = function () {
        var _this = this;
        this.dbService.getAllControllers().subscribe(function (response) {
            _this.controllers = response;
            if (_this.controllers.length < 5) {
                _this.addControllerBoolean = true;
            }
        });
    };
    DashboardComponent.prototype.updateController = function (controller) {
        this.dbService.updateController(controller).subscribe(function (response) { return response; });
    };
    DashboardComponent.prototype.changeStatus = function (windows, controller) {
        this.changeWindowStatus = windows.status;
        if (this.changeWindowStatus === false) {
            //this.openWindow();
            windows.status = true;
        }
        else {
            //this.closeWindow();
            windows.status = false;
        }
        this.updateController(controller);
    };
    DashboardComponent.prototype.addNewWindows = function (controller) {
        this.newWindows = new _shared_models_windows_model__WEBPACK_IMPORTED_MODULE_0__["Windows"](controller.windows.length + 1, this.newFormWindows.get('name').value, this.newWindowsCheck);
        controller.windows.push(this.newWindows);
        this.updateController(controller);
        location.reload();
    };
    DashboardComponent.prototype.openWindows = function () {
        this.windowsService.openWindows().subscribe(function (response) { return response; });
    };
    DashboardComponent.prototype.closeWindow = function () {
        this.windowsService.closeWindows().subscribe(function (response) { return response; });
    };
    DashboardComponent.prototype.addWindowsController = function () {
        this.addWindowsBoolean = !this.addWindowsBoolean;
    };
    DashboardComponent.prototype.addController = function () {
        this.addFormBoolean = !this.addFormBoolean;
        if (this.editControllerBoolean === false) {
            this.editController(this.editControllerBoolean);
        }
    };
    DashboardComponent.prototype.addNewController = function () {
        this.newController = new _shared_models_controller_model__WEBPACK_IMPORTED_MODULE_4__["Controller"](null, this.newControllerForm.get('name').value, this.newControllerForm.get('ip').value);
        if (this.newControllerForm.get('name').value != null &&
            this.newControllerForm.get('ip').value != null) {
            this.dbService.newController(this.newController).subscribe(function (data) {
                location.reload();
            });
        }
    };
    DashboardComponent.prototype.editController = function (status) {
        if (status === true) {
            this.newControllerForm.controls['name'].disable();
            this.newControllerForm.controls['ip'].disable();
            this.editControllerBoolean = false;
            this.saveDeleteBoolean = false;
        }
        else {
            this.newControllerForm.controls['name'].enable();
            this.newControllerForm.controls['ip'].enable();
            this.editControllerBoolean = true;
            this.saveDeleteBoolean = true;
        }
    };
    DashboardComponent.prototype.updateControllerInfo = function (controller) {
        if (this.newControllerForm.get('name').value != null) {
            controller.name = this.newControllerForm.get('name').value;
        }
        if (this.newControllerForm.get('ip').value != null) {
            controller.ip = this.newControllerForm.get('ip').value;
        }
        this.updateController(controller);
        location.reload();
    };
    DashboardComponent.prototype.updateWindows = function (controller) {
        this.updateController(controller);
        location.reload();
    };
    DashboardComponent.prototype.deleteController = function (controller) {
        this.dbService.deleteController(controller).subscribe(function (data) {
            location.reload();
        });
    };
    DashboardComponent.prototype.deleteWindows = function (windows, controller) {
        var i = 1;
        controller.windows.splice(controller.windows.indexOf(windows), 1);
        controller.windows.forEach(function (item) {
            item.id = i;
            i++;
        });
        this.updateController(controller);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], _shared_services_windows_service__WEBPACK_IMPORTED_MODULE_1__["WindowsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _shared_services_db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/db.service */ "./src/app/shared/services/db.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_windows_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/windows.service */ "./src/app/shared/services/windows.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            providers: [_shared_services_db_service__WEBPACK_IMPORTED_MODULE_0__["DbService"], _shared_services_windows_service__WEBPACK_IMPORTED_MODULE_6__["WindowsService"]],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/shared/app-constants.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/app-constants.ts ***!
  \*****************************************/
/*! exports provided: APP_URI, APP_DB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_URI", function() { return APP_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DB", function() { return APP_DB; });
var APP_URI = 'http://192.168.4.1';
var APP_DB = 'http://localhost:3000';


/***/ }),

/***/ "./src/app/shared/models/controller.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/controller.model.ts ***!
  \***************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
var Controller = /** @class */ (function () {
    function Controller(id, name, ip, windows) {
        if (name === void 0) { name = null; }
        if (ip === void 0) { ip = null; }
        if (windows === void 0) { windows = new Array(); }
        this.id = id;
        this.name = name;
        this.ip = ip;
        this.windows = windows;
    }
    return Controller;
}());



/***/ }),

/***/ "./src/app/shared/models/windows.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/windows.model.ts ***!
  \************************************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Windows", function() { return Windows; });
var Windows = /** @class */ (function () {
    function Windows(id, name, status) {
        if (name === void 0) { name = null; }
        if (status === void 0) { status = null; }
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return Windows;
}());



/***/ }),

/***/ "./src/app/shared/services/db.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/db.service.ts ***!
  \***********************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../app-constants */ "./src/app/shared/app-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbService = /** @class */ (function () {
    function DbService(httpService) {
        this.httpService = httpService;
        this.endpoint = 'controller';
    }
    DbService.prototype.getController = function (controlerId) {
        return this.httpService
            .get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_DB"] + "/" + this.endpoint + "/" + controlerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DbService.prototype.getAllControllers = function () {
        return this.httpService.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_DB"] + "/" + this.endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DbService.prototype.newController = function (controller) {
        return this.httpService
            .post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_DB"] + "/" + this.endpoint, controller)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DbService.prototype.updateController = function (controller) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.httpService
            .put(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_DB"] + "/" + this.endpoint + "/" + controller.id, controller, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DbService.prototype.deleteController = function (controller) {
        return this.httpService
            .delete(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_DB"] + "/" + this.endpoint + "/" + controller.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "./src/app/shared/services/windows.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/windows.service.ts ***!
  \****************************************************/
/*! exports provided: WindowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsService", function() { return WindowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants */ "./src/app/shared/app-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WindowsService = /** @class */ (function () {
    function WindowsService(http) {
        this.http = http;
        this.endpoint = 'windows';
    }
    WindowsService.prototype.getWindows = function () {
        console.log(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_URI"] + "/" + this.endpoint + "/open");
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_URI"] + "/" + this.endpoint + "/open").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('here', response);
            return response;
        }));
    };
    WindowsService.prototype.openWindows = function () {
        console.log(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_URI"] + "/" + this.endpoint + "/open");
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_URI"] + "/" + this.endpoint + "/open");
    };
    WindowsService.prototype.closeWindows = function () {
        console.log(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_URI"] + "/" + this.endpoint + "/close");
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APP_URI"] + "/" + this.endpoint + "/close");
    };
    WindowsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WindowsService);
    return WindowsService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map