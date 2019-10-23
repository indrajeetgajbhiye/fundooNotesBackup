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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/model.model.ts":
/*!***************************************!*\
  !*** ./src/app/Models/model.model.ts ***!
  \***************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
var Model = /** @class */ (function () {
    function Model() {
        this.title = "";
        this.description = "";
        this.color = "#ffffff";
        this.isArchived = false;
        this.isDeleted = false;
        this.isPined = false;
        this.reminder = [];
        this.noteLabels = [];
        this.labelIdList = [];
        this.noteCheckLists = [];
        this.collaborators = [];
    }
    return Model;
}());



/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/note-dialog/note-dialog.component */ "./src/app/components/note-dialog/note-dialog.component.ts");
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/archive/archive.component */ "./src/app/components/archive/archive.component.ts");
/* harmony import */ var _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/trash/trash.component */ "./src/app/components/trash/trash.component.ts");
/* harmony import */ var _guard_guard_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guard/guard.guard */ "./src/guard/guard.guard.ts");
/* harmony import */ var _components_label_dialog_label_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/label-dialog/label-dialog.component */ "./src/app/components/label-dialog/label-dialog.component.ts");
/* harmony import */ var _components_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reminders/reminders.component */ "./src/app/components/reminders/reminders.component.ts");
/* harmony import */ var _components_labels_labels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/labels/labels.component */ "./src/app/components/labels/labels.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/image-dialog/image-dialog.component */ "./src/app/components/image-dialog/image-dialog.component.ts");
/* harmony import */ var _components_collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/collaborator-dialog/collaborator-dialog.component */ "./src/app/components/collaborator-dialog/collaborator-dialog.component.ts");
/* harmony import */ var _components_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/question-answer/question-answer.component */ "./src/app/components/question-answer/question-answer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registration', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'forgot', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'resetpassword/:token', component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_15__["ResetPasswordComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_guard_guard_guard__WEBPACK_IMPORTED_MODULE_11__["GuardGuard"]], children: [
            { path: 'home', component: _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"] },
            { path: 'archive', component: _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_9__["ArchiveComponent"] },
            { path: 'trash', component: _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_10__["TrashComponent"] },
            { path: 'reminder', component: _components_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_13__["RemindersComponent"] },
            { path: 'label/:labelName', component: _components_labels_labels_component__WEBPACK_IMPORTED_MODULE_14__["LabelsComponent"] },
            { path: 'questionAnswer/:cardId', component: _components_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_19__["QuestionAnswerComponent"] },
            { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"] }
        ]
    },
    { path: 'update-note', component: _components_note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NoteDialogComponent"] },
    { path: 'update-label', component: _components_label_dialog_label_dialog_component__WEBPACK_IMPORTED_MODULE_12__["LabelDialogComponent"] },
    { path: 'upload-image', component: _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ImageDialogComponent"] },
    { path: 'collabs', component: _components_collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CollaboratorDialogComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'Fundoo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_note_icons_note_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/note-icons/note-icons.component */ "./src/app/components/note-icons/note-icons.component.ts");
/* harmony import */ var _components_add_notes_add_notes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-notes/add-notes.component */ "./src/app/components/add-notes/add-notes.component.ts");
/* harmony import */ var _components_display_notes_display_notes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/display-notes/display-notes.component */ "./src/app/components/display-notes/display-notes.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/reminders/reminders.component */ "./src/app/components/reminders/reminders.component.ts");
/* harmony import */ var _components_note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/note-dialog/note-dialog.component */ "./src/app/components/note-dialog/note-dialog.component.ts");
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/archive/archive.component */ "./src/app/components/archive/archive.component.ts");
/* harmony import */ var _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/trash/trash.component */ "./src/app/components/trash/trash.component.ts");
/* harmony import */ var _pipe_search_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipe/search.pipe */ "./src/app/pipe/search.pipe.ts");
/* harmony import */ var _components_delete_icons_delete_icons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/delete-icons/delete-icons.component */ "./src/app/components/delete-icons/delete-icons.component.ts");
/* harmony import */ var _components_reminder_icon_reminder_icon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/reminder-icon/reminder-icon.component */ "./src/app/components/reminder-icon/reminder-icon.component.ts");
/* harmony import */ var _components_label_dialog_label_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/label-dialog/label-dialog.component */ "./src/app/components/label-dialog/label-dialog.component.ts");
/* harmony import */ var _components_labels_labels_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/labels/labels.component */ "./src/app/components/labels/labels.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/image-dialog/image-dialog.component */ "./src/app/components/image-dialog/image-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _components_collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/collaborator-dialog/collaborator-dialog.component */ "./src/app/components/collaborator-dialog/collaborator-dialog.component.ts");
/* harmony import */ var _components_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/question-answer/question-answer.component */ "./src/app/components/question-answer/question-answer.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_note_icons_note_icons_component__WEBPACK_IMPORTED_MODULE_13__["NoteIconsComponent"],
                _components_add_notes_add_notes_component__WEBPACK_IMPORTED_MODULE_14__["AddNotesComponent"],
                _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"],
                _components_display_notes_display_notes_component__WEBPACK_IMPORTED_MODULE_15__["DisplayNotesComponent"],
                _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_16__["NotesComponent"],
                _components_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_17__["RemindersComponent"],
                _components_note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_18__["NoteDialogComponent"],
                _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_19__["ArchiveComponent"],
                _components_trash_trash_component__WEBPACK_IMPORTED_MODULE_20__["TrashComponent"],
                _pipe_search_pipe__WEBPACK_IMPORTED_MODULE_21__["SearchPipe"],
                _components_delete_icons_delete_icons_component__WEBPACK_IMPORTED_MODULE_22__["DeleteIconsComponent"],
                _components_reminder_icon_reminder_icon_component__WEBPACK_IMPORTED_MODULE_23__["ReminderIconComponent"],
                _components_label_dialog_label_dialog_component__WEBPACK_IMPORTED_MODULE_24__["LabelDialogComponent"],
                _components_labels_labels_component__WEBPACK_IMPORTED_MODULE_25__["LabelsComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_26__["CardComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_30__["SearchComponent"],
                _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_31__["ImageDialogComponent"],
                _components_collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_35__["CollaboratorDialogComponent"],
                _components_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_36__["QuestionAnswerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_29__["BarRatingModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__["ImageCropperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_34__["NgxMasonryModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_33__["ClickOutsideModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_28__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_28__["FroalaViewModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-notes/add-notes.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/add-notes/add-notes.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"flag\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"NotesAddNote\">\n        <mat-card (click)=\"flag=!flag\" fxFlex=\"60\" fxFlex.xs='90' class=\"matcard\" fxLayoutAlign=\"space-between start\">\n            <div class=\"Border\" id=\"noteTitle\" fxLayout=\"column\" class=\"maincard\">Take a note...\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"end start\" fxFlex.xs=\"100\">\n                <mat-icon class=\"check\" matTooltip=\"New List\" disabled>check_box</mat-icon>\n                <mat-icon class=\"brush\" matTooltip=\"New note with drawing\">brush</mat-icon>\n                <mat-icon class=\"insert\" matTooltip=\"New note with image\">insert_photo</mat-icon>\n            </div>\n        </mat-card>\n    </div>\n    <div *ngIf=\"!flag\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"NotesAddNote\">\n        <mat-card [style.background]=message fxLayout=\"column\" class=\"matcard\" fxFlex=\"60\" fxFlex.xs='90' [style.backgroundColor]=card.color>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"takenote\">\n                <textarea fxflex=\"80\" class=\"textArea\" matTextareaAutosize placeholder=\"Title \" [formControl]=\"noteTitle\"></textarea>\n                <button fxflex=\"80\" mat-icon-button color=\"basic\" (click)=\"changePin()\">\n                    <div class=\"barpin\" *ngIf=card.isPined >\n                        <img src=\"../../../assets/images/pin_Off.svg\" />\n                    </div>\n                    <div class=\"barpin\" *ngIf=!card.isPined  >\n                        <img src=\"../../../assets/images/pin_On.svg\" />\n                    </div>\n            </button>\n            </div>\n            <div class=\"Border\" fxLayout=\"column\" class=\"takenote\">\n                <textarea class=\"textArea\" matTextareaAutosize placeholder=\"Take a note.. \" [formControl]=\"noteContent\"></textarea>\n            </div>\n            <div *ngIf='show==false'>\n                <div *ngFor='let list of checklistOpen'>\n                    <div *ngIf='list.status==\"open\"'>\n                        <div fxLayoutAlign='space-between center'>\n                            <img src='../../../assets/images/empty_box.svg' (click)=\"update(list,'close')\"><input matInput [(ngModel)]=list.itemName>\n                            <div (click)='delete(list)'>\n                                <img src='../../../assets/images/wrong_mark.svg'>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <mat-divider></mat-divider>\n                <div fxLayout='row'><img src='../../../assets/images/add_mark.svg'><input matInput [(ngModel)]=\"list\" placeholder=\"List Here\" (keydown)='enter($event,list)'></div>\n                <mat-divider></mat-divider>\n                <div *ngFor='let list of checklistOpen'>\n                    <div *ngIf='list.status==\"close\"'>\n                        <div fxLayoutAlign='space-between center'>\n                            <img src='../../../assets/images/right_box.svg' class='decorate' (click)=\"update(list,'open')\"><input matInput style=\"text-decoration:line-through;\" [(ngModel)]=list.itemName>\n                            <div (click)='delete(list)'>\n                                <img src='../../../assets/images/wrong_mark.svg'>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div><br><br>\n            <div *ngIf='card.reminder.length!=0'>\n                <mat-chip class=\"sample\" (mouseenter)=\"cancelIcon=true\" (mouseleave)=\"cancelIcon=false\">\n                    {{card.reminder[0]|date:'medium'}}\n                    <mat-icon *ngIf=cancelIcon (click)=\"removeReminder(card.id)\" matChipRemove>cancel</mat-icon>\n                </mat-chip>\n            </div>\n            <div *ngIf='card.noteLabels.length!=0' fxLayoutGap='3%' fxLayout=\"row wrap\" fxLayoutAlign=\"none center\">\n                <div *ngFor='let item of card.noteLabels'>\n                    <mat-chip-list>\n                        <mat-chip class=\"sample\" (mouseenter)=\"remin=true\" (mouseleave)=\"remin=false\">\n                            {{item.label}}\n                            <mat-icon *ngIf=cancelIcon (click)=\"removeLabelTag(item.id)\" matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                    </mat-chip-list>\n                </div>\n            </div>\n            <div fxLayoutGap='3%' fxLayout=\"row wrap\" fxLayoutAlign=\"none center\">\n                <div *ngFor='let item of card.collaborators'>\n                    <mat-icon class=\"material-icons\" (click)=\"openCollaborator()\" matTooltip={{item.email}}>account_circle\n                    </mat-icon>\n                </div>\n            </div>\n            <div fxFlex='100'>\n                <app-note-icons (addNoteEvent)=\"addNote()\" [card]=card></app-note-icons>\n            </div>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-notes/add-notes.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/add-notes/add-notes.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matcard {\n  margin-top: 20px; }\n\n.maincard {\n  width: 60%;\n  color: #ada6a6;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.addnote {\n  width: 10px; }\n\n.matcard {\n  margin-top: 30px;\n  border-radius: 18px;\n  box-shadow: 1px 1px 1px 1px #888888; }\n\n[contentEditable=true]:empty:not(:focus):before {\n  content: attr(data-text); }\n\n.title {\n  margin-bottom: 20px;\n  color: #555353;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.textArea {\n  background: transparent;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.takenote {\n  margin-bottom: 10px;\n  color: #ada6a6;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.barpin {\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.mat-icon {\n  color: #676b6e; }\n\n.mat-icon:hover {\n  color: black; }\n\n.sample {\n  background: transparent; }\n"

/***/ }),

/***/ "./src/app/components/add-notes/add-notes.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-notes/add-notes.component.ts ***!
  \*************************************************************/
/*! exports provided: AddNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotesComponent", function() { return AddNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _Models_model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/model.model */ "./src/app/Models/model.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNotesComponent = /** @class */ (function () {
    function AddNotesComponent(dialog, noteService) {
        this.dialog = dialog;
        this.noteService = noteService;
        this.flag = true;
        this.flag2 = false;
        this.show = true;
        this.checklistOpen = [];
        this.newNoteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = '#FFFFFF';
        this.noteTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.noteContent = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    AddNotesComponent.prototype.ngOnInit = function () {
        this.card = new _Models_model_model__WEBPACK_IMPORTED_MODULE_3__["Model"]();
        // console.log(this.view)
    };
    AddNotesComponent.prototype.changePin = function () {
        this.card.isPined = !this.card.isPined;
    };
    AddNotesComponent.prototype.addNote = function () {
        var _this = this;
        this.flag = !this.flag;
        if (this.flag) {
            if (this.noteTitle.value == '') {
                this.card.reminder = [];
                return;
            }
            else {
                this.card.title = this.noteTitle.value;
                this.card.description = this.noteContent.value;
                this.card.collaborators = JSON.stringify(this.card.collaborators);
                this.card.collaberators = this.card.collaborators;
                this.card.noteLabels = JSON.stringify(this.card.noteLabels);
                this.card.labelIdList = JSON.stringify(this.card.labelIdList);
                try {
                    this.noteService.noteServiceEncoded('notes/addNotes', this.card).subscribe(function (data) {
                        var note = data;
                        _this.noteTitle.reset();
                        _this.noteContent.reset();
                        _this.card.color = "#FFFFFF";
                        console.log(note['status']['details']);
                        _this.card = new _Models_model_model__WEBPACK_IMPORTED_MODULE_3__["Model"]();
                        _this.card.reminder = [];
                        console.log(_this.card.reminder);
                        _this.newNoteEvent.emit(note['status']['details']);
                    });
                }
                catch (error) {
                    console.log(error + "Error in the note service of add note");
                }
            }
        }
    };
    AddNotesComponent.prototype.openCollaborator = function () {
        console.log('collabs');
    };
    AddNotesComponent.prototype.removeReminder = function () {
        this.card.reminder = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddNotesComponent.prototype, "newNoteEvent", void 0);
    AddNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-notes',
            template: __webpack_require__(/*! ./add-notes.component.html */ "./src/app/components/add-notes/add-notes.component.html"),
            styles: [__webpack_require__(/*! ./add-notes.component.scss */ "./src/app/components/add-notes/add-notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], AddNotesComponent);
    return AddNotesComponent;
}());



/***/ }),

/***/ "./src/app/components/archive/archive.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/archive/archive.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-display-notes class=\"container\" [notes]=\"cardData\"></app-display-notes>\n</div>"

/***/ }),

/***/ "./src/app/components/archive/archive.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/archive/archive.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/archive/archive.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/archive/archive.component.ts ***!
  \*********************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(service) {
        this.service = service;
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.getAllArchiveCard();
    };
    ArchiveComponent.prototype.getAllArchiveCard = function () {
        var _this = this;
        this.service.archiveNotes().subscribe(function (data) {
            _this.cardData = data["data"]["data"];
            console.log(data);
            return;
        });
    };
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/components/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.scss */ "./src/app/components/archive/archive.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"display-note\" [style.background]=card.color fxLayout=\"column\">\n    <div (click)=\"check()\" fxLayout=\"column\">\n        <div fxFlex=50 class=\"Border\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"takenote\">\n            <div fxFlex='100' class=\"description\">\n                <textarea fxFlex='100' cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"3\" class=\"textArea\" style=\"font-weight: bold;\" [(ngModel)]=\"card.title\">\n            </textarea>\n                <!-- #autosize=\"cdkTextareaAutosize\" -->\n            </div>\n            <button *ngIf=!card.isDeleted fxFlex=10 mat-icon-button color=\"basic\" (click)=\"changePin(card)\" (click)=\"$event.stopPropagation()\">\n                <div class=\"barpin\" *ngIf=card.isPined>\n                    <img src=\"../../../assets/images/pin_Off.svg\" />\n                </div>\n                <div class=\"barpin\" *ngIf=!card.isPined>\n                    <img src=\"../../../assets/images/pin_On.svg\" />\n                </div>\n            </button>\n        </div>\n        <div fxFlex=100 class=\"description\">\n            <textarea fxFlex='100' cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"15\" class=\"textArea\" [(ngModel)]=\"card.description\">\n            </textarea>\n        </div>\n        <div *ngIf='!display'>\n            <div *ngFor='let list of card.noteCheckLists'>\n                <div *ngIf='!list.isDeleted'>\n                    <div fxLayout='column'>{{list.itemName}}</div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf='display'>\n            <div *ngFor='let list of card.noteCheckLists'>\n                <div *ngIf=\"list.status=='open' && list.status!='close' && !list.isDeleted\" fxLayout='center center'>\n                    <img src=\"../../../assets/images/empty_box.svg\" (click)='removeCheckList(list)'>{{list.itemName}}\n                </div>\n            </div>\n            <div *ngFor='let list of card.noteCheckLists'>\n                <div *ngIf=\"list.status=='close' && !list.isDeleted\" fxLayout='center center'>\n                    <img src=\"../../../assets/images/right_box.svg\" (click)='addCheckList(list)'>\n                    <del>\n                            {{list.itemName}}\n                        </del>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf='card.reminder.length>0'>\n        <mat-chip class=\"sample\" (mouseenter)=\"cancelIcon=true\" (mouseleave)=\"cancelIcon=false\" matTooltip=\"reminder\">\n            <div *ngFor=\"let reminderItem of card.reminder \">\n                {{reminderItem|date:shortdate}}\n            </div>\n            <mat-icon *ngIf=cancelIcon (click)=\"removeReminder(card.id)\" matChipRemove>cancel</mat-icon>\n        </mat-chip>\n    </div>\n    <div *ngIf='card.noteLabels' fxLayoutGap='3%' fxLayout=\"row wrap\" fxLayoutAlign=\"none center\">\n        <div *ngFor='let item of card.noteLabels'>\n            <mat-chip-list>\n                <mat-chip class=\"sample\" (click)=\"openLabelNotes(item.label)\" (mouseenter)=\"item.hover=true\" (mouseleave)=\"item.hover=false\" matTooltip=\"label\">\n                    {{item.label}}\n                    <mat-icon *ngIf=item.hover (click)=\"removeLabelTag(item.id)\" matChipRemove>cancel</mat-icon>\n                </mat-chip>\n            </mat-chip-list>\n        </div>\n    </div>\n    <div fxLayoutGap='3%' fxLayout=\"row wrap\" fxLayoutAlign=\"none center\">\n        <div *ngFor='let item of card.collaborators'>\n            <mat-icon class=\"material-icons\" (click)=\"openCollaborator()\" matTooltip={{item.email}}>account_circle\n            </mat-icon>\n        </div>\n    </div>\n    <div fxFlex='100' fxLayout=\"row\">\n        <app-note-icons class=\"iconClass\" fxFlex=100 *ngIf=!card.isDeleted (removeEvent)=\"removeEvent1($event)\" [show]=fullIcon [card]=card>\n        </app-note-icons>\n        <app-delete-icons *ngIf=card.isDeleted (removeEvent)=\"removeEvent1(true)\" [card]=card></app-delete-icons>\n    </div>\n    <div *ngIf=\"question!=undefined\" (click)=\"openQandA()\">\n        <mat-divider></mat-divider>\n        <div [innerHTML]=\"question\"></div>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sample {\n  background: transparent; }\n\n.textArea {\n  background: transparent;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: roboto; }\n\n.display-note {\n  border-radius: 14px; }\n\n.mat-icon {\n  color: #676b6e; }\n\n.mat-icon:hover {\n  color: black; }\n\n.display-note .iconClass {\n  opacity: 0; }\n\n.display-note .barpin {\n  opacity: 0; }\n\n.display-note:hover .iconClass {\n  opacity: 1; }\n\n.display-note:hover .barpin {\n  opacity: 1; }\n\n.description textarea {\n  overflow: hidden; }\n\n.descriptionOpen textarea {\n  overflow: scroll; }\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../note-dialog/note-dialog.component */ "./src/app/components/note-dialog/note-dialog.component.ts");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collaborator-dialog/collaborator-dialog.component */ "./src/app/components/collaborator-dialog/collaborator-dialog.component.ts");
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
    function CardComponent(dialog, router, noteService) {
        this.dialog = dialog;
        this.router = router;
        this.noteService = noteService;
        /**
         * @default {object} card to have default value
         */
        this.card = {};
        this.search = true;
        this.pinEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.display = true;
        // setTimeout(() => {
        //   console.log("card", this.card)
        // }, 0);
    }
    CardComponent.prototype.ngOnInit = function () {
        this.card;
    };
    CardComponent.prototype.show = function () {
        console.log("this.card", this.card);
        this.description = this.card.description;
        this.title = this.card.title;
        this.isArchived = this.card.isArchived;
        this.isDeleted = this.card.isDeleted;
        this.isPined = this.card.isPined;
    };
    CardComponent.prototype.check = function () {
        if (!this.fullIcon) {
            this.openDialog(this.card);
            this.show();
        }
        return;
    };
    CardComponent.prototype.openDialog = function (card) {
        var _this = this;
        var dialogRef = this.dialog.open(_note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NoteDialogComponent"], {
            position: { top: '15.5%' },
            data: card,
            panelClass: 'myClass1',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'deleted') {
                _this.removeEvent.emit('true');
            }
            else {
                console.log(card.description + " = " + _this.description);
                if (card.title != _this.title || card.description != _this.description) {
                    _this.model = {
                        noteId: card.id,
                        title: card.title,
                        description: card.description
                    };
                    _this.noteService.noteServiceEncodedPost('notes/updateNotes', _this.model).subscribe(function (message) {
                        console.log(message);
                    });
                }
                else if (card.isPined != _this.isPined) {
                    _this.updatePin(_this.card);
                    _this.pinEvent.emit(_this.card);
                }
                else {
                    console.log("changes not needed");
                }
            }
        });
    };
    CardComponent.prototype.changePin = function (card) {
        card.isPined = !card.isPined;
        if (!this.fullIcon)
            this.updatePin(card);
        return;
    };
    CardComponent.prototype.updatePin = function (card) {
        var _this = this;
        this.model = {
            noteIdList: [card.id],
            isPined: card.isPined
        };
        this.noteService.pinUnpinNote(this.model).subscribe(function (message) {
            console.log(message);
            _this.removeEvent.emit('pin');
        });
    };
    CardComponent.prototype.removeReminder = function (id) {
        var _this = this;
        console.log(id);
        this.noteService.deleteReminder({
            "noteIdList": [id]
        })
            .subscribe(function (data) {
            console.log('response:', data);
            _this.card.reminder = [];
        }, function (error) {
        });
    };
    CardComponent.prototype.removeLabelTag = function (labelId) {
        var _this = this;
        this.noteService.removeLabelTags(this.card.id, labelId, {
            "noteId": this.card.id,
            "lableId": labelId
        })
            .subscribe(function (data) {
            console.log(data);
            _this.remove(labelId);
        });
    };
    CardComponent.prototype.removeEvent1 = function ($event) {
        this.removeEvent.emit($event);
    };
    CardComponent.prototype.remove = function (labelId) {
        var _this = this;
        var count = 0;
        this.card.noteLabels.forEach(function (label) {
            if (labelId == label.id) {
                _this.card.noteLabels.splice(count, 1);
            }
            else
                count++;
        });
        return;
    };
    CardComponent.prototype.openCollaborator = function () {
        var dialogRef = this.dialog.open(_collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CollaboratorDialogComponent"], {
            panelClass: "myclass",
            height: 'auto',
            width: 'auto',
            data: {
                collaborators: this.card.collaborators,
                id: this.card.id
            }
        });
    };
    CardComponent.prototype.addList = function () {
        console.log("add list");
    };
    CardComponent.prototype.openQandA = function () {
        this.router.navigate(['questionAnswer']);
    };
    CardComponent.prototype.openLabelNotes = function (labelName) {
        this.router.navigate(['label', labelName]);
        this.removeEvent1(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "fullIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "pinEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "removeEvent", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_note_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/collaborator-dialog/collaborator-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/collaborator-dialog/collaborator-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"collab\" fxFlex=\"column\">\n        <span mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <div>\n                Collaborators\n            </div>\n        </span>\n        <mat-divider style=\"margin-top:-10px\"></mat-divider>\n        <div mat-dialog-content fxLayout=\"column\" style=\"overflow: hidden;\">\n            <span fxLayout=\"row\">\n                <button mat-icon-button class=\"icon\">\n                    <mat-icon>person_outline</mat-icon>\n                </button>\n                <div fxLayout=\"column\">\n                    <div class=\"usernameStyle\">\n                        {{name}}\n                        <span style=\"font-style: italic\">(Owner)</span>\n        </div>\n        <div class=\"emailStyle\">\n            {{email}}\n        </div>\n    </div>\n\n    </span>\n    <div *ngFor=\"let array of collaborators\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"position: relative;\">\n            <button fxFlex=10 mat-icon-button class=\"icon\">\n                        <mat-icon>person_outline</mat-icon>\n                    </button>\n            <div fxFlex=90 fxLayout=\"column\">\n                <div class=\"usernameStyle\">\n                    {{array.firstName}}\n                </div>\n                <div class=\"emailStyle\">\n                    {{array.email}}\n                </div>\n            </div>\n            <button fxFlex=10 mat-icon-button class=\"btnCollab\" (click)=\"removeCollaborator(array.userId)\">\n                        <mat-icon>close</mat-icon>\n                    </button>\n        </div>\n    </div>\n\n    <div fxLayout=\"row\" style=\"position: relative;\">\n        <button mat-icon-button class=\"icon\">\n                    <mat-icon>person_add</mat-icon>\n                </button>\n        <input matInput [(ngModel)]='collaborator' (keyup)='searchlist(collaborator)' class=\"emailStyle\" placeholder=\"Enter the email-id...\" [matMenuTriggerFor]='menu'>\n        <button mat-icon-button class=\"btnCollab\" (click)=\"addCollaborator()\">\n                    <mat-icon>done</mat-icon>\n                </button>\n    </div>\n    <mat-menu #menu='matMenu'>\n        <div *ngFor='let array of searchResultList'>\n            <div (click)='setCollaborator(array)'>{{array.email}}</div>\n        </div>\n\n    </mat-menu>\n    </div>\n    <div mat-dialog-actions class=\"actionDialog\" fxLayoutAlign=\"space-around center\">\n        <button mat-raised-button class=\"actionButton\" color=\"warn\" [mat-dialog-close]>Cancel</button>\n        <button mat-raised-button class=\"actionButton\" color=\"primary\" [mat-dialog-close]>Save</button>\n    </div>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/collaborator-dialog/collaborator-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/collaborator-dialog/collaborator-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/collaborator-dialog/collaborator-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/collaborator-dialog/collaborator-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CollaboratorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaboratorDialogComponent", function() { return CollaboratorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CollaboratorDialogComponent = /** @class */ (function () {
    function CollaboratorDialogComponent(dialogRef, data, noteService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noteService = noteService;
    }
    CollaboratorDialogComponent.prototype.ngOnInit = function () {
        this.name = localStorage.getItem('firstName');
        this.email = localStorage.getItem('email');
        console.log(this.data.collaborators);
        this.collaborators = this.data.collaborators;
        if (this.data['id'] == undefined) {
            if (this.data['collaborators'] == undefined) {
                this.collaborators = [];
            }
        }
    };
    CollaboratorDialogComponent.prototype.searchlist = function (data) {
        var _this = this;
        if (data != '') {
            this.noteService.searchUserList({ "searchWord": data }).subscribe(function (data) {
                console.log(data);
                _this.searchResultList = data['data']['details'];
            });
        }
    };
    CollaboratorDialogComponent.prototype.addCollaborator = function () {
        var _this = this;
        try {
            if (this.email !== this.collaboratorBody.email && this.collaboratorBody.email != '') {
                if (this.data['id'] == undefined) {
                    this.collaborators.push(this.collaboratorBody);
                    this.collaborator = "";
                }
                else {
                    this.noteService.addCollaborator(this.data['id'], this.collaboratorBody).subscribe(function (result) {
                        _this.collaborators.push(_this.collaboratorBody);
                        _this.collaborator = "";
                        console.log(result);
                    });
                }
            }
        }
        catch (error) {
            console.log(error + "Error during adding collaborator");
        }
    };
    CollaboratorDialogComponent.prototype.setCollaborator = function (userDetails) {
        console.log(userDetails);
        if (this.email !== userDetails.email && userDetails.email != '') {
            this.collaborator = userDetails.email;
            console.log(userDetails);
            this.collaboratorBody = {
                "firstName": userDetails.firstName,
                "lastName": userDetails.lastName,
                "email": userDetails.email,
                "userId": userDetails.userId
            };
        }
    };
    CollaboratorDialogComponent.prototype.removeCollaborator = function (collaboratorId) {
        var _this = this;
        console.log(this.collaborators);
        console.log(collaboratorId);
        console.log(this.data['id']);
        if (this.data['id'] !== undefined) {
            this.noteService.removeCollaborator(this.data['id'], collaboratorId).subscribe(function (result) {
                console.log(result);
            });
        }
        var count = 0;
        this.collaborators.forEach(function (collaborator) {
            console.log("enter for each");
            console.log(collaborator.userId + "=" + collaboratorId);
            if (collaborator.userId == collaboratorId) {
                console.log("enter each");
                _this.collaborators.splice(count, 1);
                console.log(_this.collaborators);
            }
            else
                count++;
        });
        return;
    };
    CollaboratorDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CollaboratorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collaborator-dialog',
            template: __webpack_require__(/*! ./collaborator-dialog.component.html */ "./src/app/components/collaborator-dialog/collaborator-dialog.component.html"),
            styles: [__webpack_require__(/*! ./collaborator-dialog.component.scss */ "./src/app/components/collaborator-dialog/collaborator-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], CollaboratorDialogComponent);
    return CollaboratorDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-icons/delete-icons.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-icons/delete-icons.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div fxFlex='15'><button mat-icon-button [matMenuTriggerFor]=\"More\">\n      <mat-icon class=\"material-icons\">more_vert</mat-icon>\n    </button></div>\n  <mat-menu #More=\"matMenu\" class=\"matmenu\">\n    <div>\n      <button mat-menu-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\" (click)=\"deleteNote(card)\">\n          Delete forever\n        </div>\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\" (click)=\"restoreNote()\">\n          restore\n        </div>\n      </button>\n    </div>\n  </mat-menu>\n</div>"

/***/ }),

/***/ "./src/app/components/delete-icons/delete-icons.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-icons/delete-icons.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/delete-icons/delete-icons.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/delete-icons/delete-icons.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeleteIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconsComponent", function() { return DeleteIconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteIconsComponent = /** @class */ (function () {
    function DeleteIconsComponent(noteService) {
        this.noteService = noteService;
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DeleteIconsComponent.prototype.ngOnInit = function () {
    };
    DeleteIconsComponent.prototype.deleteNote = function (card) {
        var _this = this;
        this.noteService.noteServiceJSON('notes/deleteForeverNotes', {
            "isDeleted": true,
            "noteIdList": [card.id]
        }).subscribe(function (message) {
            console.log(message);
            _this.remove();
        });
    };
    DeleteIconsComponent.prototype.remove = function () {
        this.removeEvent.emit();
    };
    DeleteIconsComponent.prototype.restoreNote = function () {
        var _this = this;
        this.noteService.noteServiceJSON('notes/trashNotes', {
            "isDeleted": false,
            "noteIdList": [this.card.id]
        }).subscribe(function (data) {
            _this.remove();
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeleteIconsComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeleteIconsComponent.prototype, "removeEvent", void 0);
    DeleteIconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-icons',
            template: __webpack_require__(/*! ./delete-icons.component.html */ "./src/app/components/delete-icons/delete-icons.component.html"),
            styles: [__webpack_require__(/*! ./delete-icons.component.scss */ "./src/app/components/delete-icons/delete-icons.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]])
    ], DeleteIconsComponent);
    return DeleteIconsComponent;
}());



/***/ }),

/***/ "./src/app/components/display-notes/display-notes.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-notes/display-notes.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"fixed\" fxLayoutAlign=\"space-between start\">\n\n    <div [ngClass]=\"{'gridView':view,'listView':!view}\" [fxLayout]=\"view?'row wrap':'column'\" fxLayoutGap=\"10px\" [fxLayoutAlign]=\"view? 'start start': 'space-around center'\">\n\n        <div *ngFor=\"let card of notes|search:(search?null:searchValue)\">\n            <app-card class=\"example-card\" [card]=\"card\" (removeEvent)=\"removeEvent($event,card)\"></app-card>\n        </div>\n\n    </div>\n</div> -->\n<div *ngIf=\"view\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"15\" fxFlex.sm=\"10\" fxFlex.xs=\"5\">\n\n    </div>\n    <div fxFlex='70' fxFlex.sm=\"80\">\n        <!-- <div> -->\n        <ngx-masonry [options]=\"masonryOptions\" [updateLayout]=\"updateMasonryLayout\">\n            <div fxLayoutGap=\"1%\">\n                <div ngxMasonryItem *ngFor=\"let card of notes|search:(search?null:searchValue)\" class=\"display\">\n                    <app-card class=\"example-card\" [card]=\"card\" (load)=\"updateMasonryLayout!=updateMasonryLayout\" (removeEvent)=\"removeEvent($event,card)\"></app-card>\n                </div>\n            </div>\n        </ngx-masonry>\n        <!-- </div> -->\n    </div>\n    <div fxFlex=\"15\" fxFlex.sm=\"10\" fxFlex.xs=\"5\">\n\n    </div>\n</div>\n<div *ngIf=\"!view\" fxLayoutAlign=\"space-around stretch\">\n\n    <div fxLayout='column' fxLayoutAlign=\"center stretch\" fxFlex=\"60\" fxFlex.sm=\"90\" fxFlex.xs=\"90\" fxLayoutGap=\"10px\">\n        <div *ngFor=\"let card of notes|search:(search?null:searchValue)\">\n            <app-card class=\"example-card\" [view]='!view' [card]=\"card\" (removeEvent)=\"removeEvent($event,card) \"></app-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/display-notes/display-notes.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-notes/display-notes.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-note {\n  box-sizing: border-box; }\n\n.sample {\n  background: transparent; }\n\n.textArea {\n  background: transparent;\n  border: none;\n  outline: none;\n  min-height: auto;\n  resize: none; }\n\n.listView {\n  flex-direction: column;\n  flex: auto;\n  flex-flow: column; }\n\n::ng-deep .temp {\n  background-color: black; }\n\n.display {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/components/display-notes/display-notes.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-notes/display-notes.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayNotesComponent", function() { return DisplayNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data/data.service */ "./src/app/service/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayNotesComponent = /** @class */ (function () {
    function DisplayNotesComponent(noteService, dataService) {
        this.noteService = noteService;
        this.dataService = dataService;
        this.view = true;
        this.notes = [];
        this.pinEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = true;
        this.card = {};
    }
    DisplayNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMessage.subscribe(function (message) { _this.searchValue = message; });
        this.dataService.currentView.subscribe(function (message) { _this.view = message; });
    };
    DisplayNotesComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 600) {
            this.view = false;
        }
        if (this.innerWidth > 600) {
            this.view = true;
        }
    };
    DisplayNotesComponent.prototype.removeEvent = function ($event, card) {
        var _this = this;
        if ($event) {
            var count = 0;
            this.notes.forEach(function (note) {
                if (card.id == note.id) {
                    _this.notes.splice(count, 1);
                }
                else
                    count++;
            });
        }
        if ($event == 'pin') {
            this.pinEvent.emit(card);
        }
        return;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayNotesComponent.prototype, "notes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayNotesComponent.prototype, "pinEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DisplayNotesComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DisplayNotesComponent.prototype, "onResize", null);
    DisplayNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-notes',
            template: __webpack_require__(/*! ./display-notes.component.html */ "./src/app/components/display-notes/display-notes.component.html"),
            styles: [__webpack_require__(/*! ./display-notes.component.scss */ "./src/app/components/display-notes/display-notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], DisplayNotesComponent);
    return DisplayNotesComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"logo\" fxLayoutAlign=\"space-around center\">\n        <img mat-card-image fxFlex=\"50\" src=\"https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Keep_icon.svg\">\n    </div>\n    <mat-card-header id=\"forgotPage\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n        Forgot Password\n    </mat-card-header>\n    <mat-card-content class=\"container\">\n        <mat-form-field appearance=\"outline\">\n            <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n        <div id=\"resetButton\"><button mat-raised-button (click)=\"passwordReset(email.value)\">send mail</button></div>\n    </mat-card-actions>\n</mat-card>\n<div *ngIf=\"isValid\" class=\"msg\">\n    <p>Verification email has been sent to your email : {{email.value}}\n        <p>\n            <p>Click on the link in verification mail to change the password</p>\n</div>"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forgotPage {\n  font-size: 25px; }\n"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.isValid = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]); //Email validation
        if (localStorage.getItem("userToken") != null) {
            this.router.navigate(['']);
        }
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ForgotPasswordComponent.prototype.passwordReset = function (email) {
        var _this = this;
        console.log(email);
        var user = {
            "email": email
        };
        this.service.postRequest('user/reset', user).subscribe(function (data) {
            if (data.success == true) {
                _this.snackBar.open("mail sent", "Okay");
            }
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/components/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar class=\"example-toolbar\" fxLayoutAlign=\"space-between center\">\n        <div fxFlex=\"5\" fxLayoutAlign=\"space-between center\">\n            <button mat-icon-button matTooltip=\"menu-bar\" (click)=\"snav.toggle()\">\n\t\t\t\t<mat-icon>menu</mat-icon>\n\t\t\t</button>\n            <div *ngIf=\"innerWidth>600\" fxFlex=\"10\" fxLayout.gt-xs=\"row\" fxFlex.gt=\"500px\" fxLayout=\"row\">\n                <img id=\"img1\" src=\"../../../assets/images/logo.png\" />\n                <div *ngIf=\"innerWidth>600\" fxLayoutAlign=\"center center\">\n                    <h2>Fundoo</h2>\n                </div>\n            </div>\n\n        </div>\n        <div fxFlex=\"80\" fxLayoutAlign=\"space-around center\" *ngIf=\"innerWidth>600\">\n            <mat-form-field appearance=\"outline\" [style.fontSize.px]=\"2\" class=\"search\">\n                <button mat-icon-button>\n\t\t\t\t\t<mat-icon class=\"searchIcon\">search</mat-icon>\n\t\t\t\t</button>\n                <input fxFlex=\"90\" (click)=\"navigateSearch()\" [(ngModel)]=\"search\" (keyup)=\"searchfor()\" matInput placeholder=\"search\" [style.fontSize.px]=\"18\" class=\"searchText\" autocomplete=\"off\">\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"100\" fxFlex.xs=\"60\" fxLayoutAlign=\"space-around center\" *ngIf=\"innerWidth<600\">\n            <mat-icon *ngIf=\"hide\" class=\"searchIcon\" (click)=\"showSearch()\">search</mat-icon>\n            <mat-form-field *ngIf=\"!hide\" appearance=\"outline\" [style.fontSize.px]=\"2\" class=\"search\">\n                <button mat-icon-button>\n\t\t\t\t\t<mat-icon class=\"searchIcon\">search</mat-icon>\n\t\t\t\t</button>\n                <input fxFlex=\"90\" (click)=\"navigateSearch()\" [(ngModel)]=\"search\" (keyup)=\"searchfor()\" matInput placeholder=\"search\" [style.fontSize.px]=\"18\" class=\"searchText\" autocomplete=\"off\">\n                <button mat-icon-button (click)=\"showSearch()\">\n\t\t\t\t\t<mat-icon (click)=(navigateHome())>cancel</mat-icon>\n\t\t\t\t</button>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"25\" fxLayoutAlign=\"space-around center\" class=\"settingbtn\">\n            <button fxFlex=\"20\" aria-label=\"Toggle sidenav\" matTooltip=\"cart\" mat-icon-button (click)=\"navigateCart()\">\n\t\t\t\t<mat-icon>shopping_cart</mat-icon>\n\t\t\t</button>\n            <button *ngIf=\"innerWidth>600\" mat-icon-button color=\"basic\" id=\"grid\" (click)=\"changeView()\" matTooltip=\"grid\">\n\t\t\t\t<mat-icon *ngIf=view>view_stream</mat-icon>\n\t\t\t\t<mat-icon *ngIf=!view>view_module</mat-icon>\n\t\t\t</button>\n            <div class=\"profilepic\">\n                <button *ngIf=\"newImage\" (click)=\"$event.stopPropagation()\" matTooltip=\"fundoo Account\" mat-mini-fab [ngStyle]=\"{'background-image':'url('+img+')','background-size':'cover'}\" [matMenuTriggerFor]=\"account\" class=\"imageText\">\n\t\t\t\t</button>\n                <button *ngIf=\"!newImage\" (click)=\"$event.stopPropagation()\" matTooltip=\"fundoo Account\" mat-mini-fab [matMenuTriggerFor]=\"account\" class=\"imageText\">\n\t\t\t\t\t{{email | uppercase | slice : 0 : 1 }}</button>\n            </div>\n        </div>\n        <mat-menu #account=\"matMenu\" fxLayoutGap=\"4px\" fxLayoutAlign=\"center center\" class=\"userMenu\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"4px\">\n                <div>\n                    <button *ngIf=\"!newImage\" (click)=\"$event.stopPropagation()\" (click)=\"openPicture(image)\" matTooltip=\"Profile\" mat-fab class=\"imageSelect\">\n                                {{email | uppercase | slice : 0 : 1 }}</button>\n                    <button *ngIf=\"newImage\" (click)=\"$event.stopPropagation()\" (click)=\"openPicture(image)\" matTooltip=\"Profile\" mat-fab [ngStyle]=\"{'background-image': 'url(' + img + ')', 'background-size': 'cover'}\" class=\"imageSelect\">\n\t\t\t\t\t</button>\n                </div>\n                <div fxLayout=\"column\" fxLayoutAlign=\"left left\" class=\"settingBox\">\n                    <span class=\"usernameStyle\">{{name}}</span>\n                    <span class=\"emailStyle\">{{email}}</span>\n                </div>\n            </div>\n            <div fxLayoutAlign=\"center center\">\n\n                <button mat-button (click)=\"logout()\" class=\"logoutButton\">Log Out</button>\n            </div>\n        </mat-menu>\n    </mat-toolbar>\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n        <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\">\n            <!-- <mat-nav-list> -->\n            <mat-list role=\"List\">\n                <mat-list-item role=\"listitem\" id=\"note\" (click)=\"navigateHome()\" (click)=\" header='notes'\" class=\"navField\" [ngClass]=\"{'highlight':header=='notes', 'normal':header!='notes'}\">\n                    <img id=\"img1\" src=\"../../../assets/images/bulb.svg\" />Note\n                </mat-list-item>\n                <mat-list-item role=\"listitem\" id=\"rem\" class=\"navField\" (click)=\"navigateReminder()\" (click)=\"header='reminder'\" [ngClass]=\"{'highlight':header=='reminder', 'normal':header!='reminder'}\">\n                    <img id=\"img2\" src=\"../../../assets/images/bell.svg\" />Reminder\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <p id=\"para\">labels</p>\n                <div *ngFor='let label of ArrayOfLabel'>\n                    <mat-nav-list>\n                        <mat-list-item class=\"navField\" (click)=\"openLabelNotes(label.label)\" (click)=\"header= label.label\" [ngClass]=\"{'highlight':header==label.label, 'normal':header!=label.label}\">\n                            <mat-icon>label_outline</mat-icon>\n                            {{label.label}}\n                        </mat-list-item>\n                    </mat-nav-list>\n                </div>\n                <mat-list-item role=\"listitem\" id=\"lable\" class=\"navField\" (click)=\"openLabelDialog()\" (click)=\"header='editLabel'\" [ngClass]=\"{'highlight':header=='editLabel', 'normal':header!='editLabel'}\">\n                    <mat-icon id=\"edit\">edit</mat-icon>\n                    Edit label\n                </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item role=\"listitem\" id=\"arch\" class=\"navField\" (click)=\"navigateArchive()\" (click)=\"header='archive'\" [ngClass]=\"{'highlight':header=='archive', 'normal':header!='archive'}\">\n                    <img id=\"img4\" src=\"../../../assets/images/archive.svg\" /> Archive\n                </mat-list-item>\n                <mat-list-item role=\"listitem\" id=\"bin\" class=\"navField\" (click)=\"navigateTrash()\" (click)=\"header='trash'\" [ngClass]=\"{'highlight':header=='trash', 'normal':header!='trash'}\">\n                    <img id=\"img5\" src=\"../../../assets/images/trash.svg\" /> Trash\n                </mat-list-item>\n            </mat-list>\n            <!-- </mat-nav-list> -->\n        </mat-sidenav>\n        <mat-sidenav-content>\n            <router-outlet></router-outlet>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.searchIcon {\n  cursor: pointer; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  flex: 1 0 auto; }\n\n.sear {\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n.search {\n  width: 100%;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.example-toolbar {\n  box-shadow: 0px 3px lightgray; }\n\n.example-app-name {\n  padding-left: 5%; }\n\n#searchbtn {\n  background-color: #cec1c1; }\n\n.searchText {\n  margin-left: 10px;\n  margin-bottom: 4px; }\n\n.account {\n  margin-left: 10px; }\n\n#grid {\n  margin-left: 15px; }\n\n#setting {\n  margin-left: 15px; }\n\n#apps {\n  margin-left: 15px; }\n\n#notification {\n  margin-right: 30px; }\n\n#rema {\n  font-size: 20px;\n  font-family: sans-serif; }\n\nmat-sidenav {\n  width: 250px; }\n\n.search {\n  margin-left: 25%; }\n\n#img1 {\n  margin-right: 10%; }\n\n#img2 {\n  margin-right: 10%; }\n\n#edit {\n  margin-right: 10%; }\n\n#img4 {\n  margin-right: 10%; }\n\n#img5 {\n  margin-right: 10%; }\n\n.container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 2%; }\n\n.example-is-mobile .example-sidenav-container {\n  flex: 1 0 auto; }\n\n#para {\n  margin-left: 9%; }\n\n.settings {\n  display: flex;\n  flex-direction: row;\n  float: right; }\n\n.apps {\n  display: flex;\n  flex-direction: row;\n  width: 4%; }\n\n.example-toolbar {\n  display: flex;\n  flex-direction: row; }\n\n.matMenu {\n  width: 10px; }\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-left: 36%; }\n\n.mat-stroked-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12);\n  width: 140px; }\n\n.mat-icon {\n  color: #676b6e; }\n\n.mat-icon:hover {\n  color: black; }\n\n.logoutButton {\n  background-color: navy;\n  margin-top: 25px;\n  color: aliceblue; }\n\n.userMenu {\n  border-radius: 18px; }\n\n::ng-deep .userMenu {\n  background-color: #dde0df;\n  padding: 6px; }\n\n.navField:hover {\n  background-color: #e6e6e6;\n  border-radius: 0 50px 50px 0;\n  font-size: 18px; }\n\n.highlight {\n  background-color: #f9fac1;\n  border-radius: 0 50px 50px 0;\n  font-size: 18px; }\n\n.imageText,\n.imageSelect {\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/data/data.service */ "./src/app/service/data/data.service.ts");
/* harmony import */ var _label_dialog_label_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label-dialog/label-dialog.component */ "./src/app/components/label-dialog/label-dialog.component.ts");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image-dialog/image-dialog.component */ "./src/app/components/image-dialog/image-dialog.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog1, changeDetectorRef, media, router, dataService, noteService) {
        this.dialog1 = dialog1;
        this.router = router;
        this.dataService = dataService;
        this.noteService = noteService;
        this.view = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.hide = true;
        this.imageFile = null;
        this.header = 'notes';
        this.ArrayOfLabel = [];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.innerWidth = window.innerWidth;
        this.router.navigate(['home']);
    }
    HomeComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLabel();
        this.name = localStorage.getItem('firstName');
        this.email = localStorage.getItem('email');
        this.newImage = localStorage.getItem('imageUrl');
        this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].profileUrl + "/" + this.newImage;
        console.log("inside home ngOnInit");
        this.dataService.currentPhoto.subscribe(function (message) {
            console.log("variable");
            _this.image = message;
            _this.newImage = localStorage.getItem('imageUrl');
            _this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].profileUrl + "/" + _this.newImage;
        });
    };
    HomeComponent.prototype.navigateArchive = function () {
        this.router.navigate(['archive']);
    };
    HomeComponent.prototype.navigateHome = function () {
        this.router.navigate(['home']);
    };
    HomeComponent.prototype.navigateTrash = function () {
        this.router.navigate(['trash']);
    };
    HomeComponent.prototype.navigateSearch = function () {
        this.router.navigate(['search']);
    };
    HomeComponent.prototype.navigateReminder = function () {
        this.router.navigate(['reminder']);
    };
    HomeComponent.prototype.navigateCart = function () {
        console.log("cart");
    };
    HomeComponent.prototype.searchfor = function () {
        this.dataService.changeMessage(this.search);
    };
    HomeComponent.prototype.showSearch = function () {
        return this.hide = !this.hide;
    };
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
        this.ngOnInit();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    HomeComponent.prototype.openLabelNotes = function (labelName) {
        this.router.navigate(['label', labelName]);
    };
    HomeComponent.prototype.getLabel = function () {
        var _this = this;
        try {
            this.noteService.getLabels()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
                .subscribe(function (result) {
                _this.ArrayOfLabel = result["data"]["details"];
                _this.dataService.updateLabels(result["data"]["details"]);
                // this.dataService.currentLabels.subscribe(message => {this.ArrayOfLabel = message });
            });
        }
        catch (_a) {
            console.log("Error in getLabel");
        }
    };
    HomeComponent.prototype.openLabelDialog = function () {
        var dialogRef = this.dialog1.open(_label_dialog_label_dialog_component__WEBPACK_IMPORTED_MODULE_5__["LabelDialogComponent"], {
            data: { data: this.ArrayOfLabel },
            width: 'auto',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HomeComponent.prototype.changeView = function () {
        this.view = !this.view;
        this.dataService.changeView(this.view);
    };
    HomeComponent.prototype.onFileUpload = function (event) {
        this.imageFile = event.path[0].files[0];
        var uploadImage = new FormData();
        uploadImage.append('file', this.imageFile, this.imageFile.name);
        this.openPicture(event);
    };
    HomeComponent.prototype.openPicture = function (data) {
        var _this = this;
        var dialogRef = this.dialog1.open(_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ImageDialogComponent"], {
            width: 'auto',
            height: 'auto',
            data: data,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "imageChange") {
                console.log("inside");
            }
            _this.dataService.currentPhoto.subscribe(function (response) { return _this.profile = response; });
            if (_this.profile = true) {
                _this.imageProfile = localStorage.getItem('imageUrl');
                _this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].profileUrl + "/" + _this.imageProfile;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _service_note_note_service__WEBPACK_IMPORTED_MODULE_6__["NoteService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/image-dialog/image-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-dialog/image-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"padding:5px;height:80%;\">\n    <div mat-dialog-title>\n        <span>Select Profile Photo</span>\n    </div>\n    <div class=\"body\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n        <button mat-button (click)=\"photoInput.click()\">Select a photo from your computer</button>\n\n        <input #photoInput type=\"file\" style=\"display:none\" (change)=\"fileChangeEvent($event)\">\n        <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"1\" [resizeToWidth]=\"168\" format=\"png\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n\n\n        <img [src]=\"imageBefore\" />\n    </div>\n    <div style=\"bottom:5;margin-top: 5%\" fxLayout=\"row\">\n        <div style=\"padding:5px;\">\n            <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"{'image':croppedImage}\" (click)=setimage()>Save as\n        profile picture</button>\n        </div>\n        <div style=\"padding:5px;\">\n            <button mat-button [mat-dialog-close]=\"{'title':false}\" cdkFocusInitial>Cancel</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/image-dialog/image-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-dialog/image-dialog.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/image-dialog/image-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-dialog/image-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDialogComponent", function() { return ImageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data/data.service */ "./src/app/service/data/data.service.ts");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ImageDialogComponent = /** @class */ (function () {
    function ImageDialogComponent(dialogRef, data, dataService, noteService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.noteService = noteService;
        this.imageBefore = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].profileUrl + "/" + localStorage.getItem("imageUrl");
        this.imageChangedEvent = null;
        this.croppedImage = null;
    }
    ImageDialogComponent.prototype.ngOnInit = function () {
    };
    ImageDialogComponent.prototype.fileChangeEvent = function (event) {
        console.log(event, "FLE CHNAGE");
        this.imageChangedEvent = event;
    };
    ImageDialogComponent.prototype.imageCropped = function (event) {
        console.log("event-----", event);
        this.croppedImage = event.file;
        console.log(this.croppedImage);
    };
    ImageDialogComponent.prototype.imageLoaded = function () {
        console.log("image loaded");
    };
    ImageDialogComponent.prototype.loadImageFailed = function () {
        console.log("image failed");
    };
    ImageDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ImageDialogComponent.prototype.setimage = function () {
        var _this = this;
        var uploadData = new FormData();
        console.log("croppeed image", this.croppedImage);
        uploadData.append('file', this.croppedImage);
        console.log("uploadData", uploadData);
        this.noteService.uploadImage(uploadData).subscribe(function (data) {
            localStorage.setItem('imageUrl', data['status'].imageUrl);
            _this.dataService.changeImage(true);
            _this.dialogRef.close("imageChange");
            console.log(data);
        });
    };
    ImageDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-dialog',
            template: __webpack_require__(/*! ./image-dialog.component.html */ "./src/app/components/image-dialog/image-dialog.component.html"),
            styles: [__webpack_require__(/*! ./image-dialog.component.scss */ "./src/app/components/image-dialog/image-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _service_note_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"]])
    ], ImageDialogComponent);
    return ImageDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/label-dialog/label-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/label-dialog/label-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div mat-dialog-title>Edit Labels </div>\n    <div fxLaoutGap=\"space-between\" fxlayoutAlign=\"row\" mat-dialog-content>\n        <div class=\"clear done\">\n            <mat-icon fxFlex=10 (click)=\"clear()\" class=\"visible\" mat-icon-button>clear</mat-icon>\n        </div>\n        <input class=\"textArea\" fxFlex=80 [(ngModel)]=\"labelName\" placeholder=\"Create new Label\">\n        <div>\n            <mat-icon fxFlex=10 fxLayoutAlign=\"space-between end\" (click)=\"addLabel()\" class=\"visible\" mat-icon-button>done</mat-icon>\n        </div>\n    </div>\n    <mat-divider class=\"divider\"></mat-divider>\n    <div class=\"divider\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" *ngFor=\"let label of ArrayOfLabel\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <mat-icon (click)=\"deleteLabel(label.id)\" class=\"visible\" fxFlex=10 mat-icon-button>\n                delete</mat-icon>\n        </div>\n        <input class=\"textArea\" fxFlex=\"80\" [(ngModel)]=\"label.label\" id=label.id>\n        <div fxFlex=\"10\">\n            <mat-icon (click)=edit(label) class=\"visible\">edit</mat-icon>\n        </div>\n    </div>\n    <mat-divider class=\"divider\"></mat-divider>\n    <div>\n        <div mat-button class=\"visible\" fxLayoutAlign=\"end end\" (click)=\"close(); addLabel()\">Done</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/label-dialog/label-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/label-dialog/label-dialog.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textArea {\n  background: transparent;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.divider {\n  margin-bottom: 7%; }\n"

/***/ }),

/***/ "./src/app/components/label-dialog/label-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/label-dialog/label-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: LabelDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelDialogComponent", function() { return LabelDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LabelDialogComponent = /** @class */ (function () {
    function LabelDialogComponent(dialogRef, data, noteService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noteService = noteService;
        this.ArrayOfLabel = [];
        this.ArrayOfLabel = data.data;
    }
    LabelDialogComponent.prototype.ngOnInit = function () {
        // this.ArrayOfLabel = this.data;
    };
    LabelDialogComponent.prototype.clear = function () {
        this.labelName = ' ';
    };
    LabelDialogComponent.prototype.addLabel = function () {
        var _this = this;
        try {
            if (this.labelName != undefined && this.labelName !== '') {
                var userid = localStorage.getItem('userId');
                var flag_1 = true;
                this.ArrayOfLabel.forEach(function (element) {
                    if (element.label == _this.labelName) {
                        flag_1 = false;
                        console.log("label already present");
                        return;
                    }
                });
                var label = {
                    userId: userid,
                    label: this.labelName,
                    isDeleted: "false"
                };
                if (flag_1) {
                    this.noteService.noteLabel(label).subscribe(function (message) {
                        console.log(message);
                        _this.labelName = '';
                        _this.ArrayOfLabel.push(message);
                    });
                    return;
                }
            }
        }
        catch (error) {
            console.log("Error in add Label" + error);
        }
        ;
    };
    LabelDialogComponent.prototype.deleteLabel = function (labelid) {
        var _this = this;
        try {
            this.noteService.deleteLabel(labelid).subscribe(function (data) {
                console.log(data);
                var count = 0;
                _this.ArrayOfLabel.forEach(function (label) {
                    if (label.id == labelid) {
                        _this.ArrayOfLabel.splice(count, 1);
                    }
                    else
                        count++;
                });
            });
        }
        catch (error) {
            console.log("Errror in delete label" + error);
        }
    };
    LabelDialogComponent.prototype.edit = function (label) {
        console.log(label);
        var body = {
            "label": label.label,
            "isDeleted": false,
            "id": label.id,
            "userId": localStorage.getItem('userid')
        };
        this.noteService.updateLabel(label.id, body).subscribe(function (message) {
            console.log(message);
        });
    };
    LabelDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LabelDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label-dialog',
            template: __webpack_require__(/*! ./label-dialog.component.html */ "./src/app/components/label-dialog/label-dialog.component.html"),
            styles: [__webpack_require__(/*! ./label-dialog.component.scss */ "./src/app/components/label-dialog/label-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], LabelDialogComponent);
    return LabelDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/labels/labels.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/labels/labels.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-display-notes [notes]=\"labelNotes\"></app-display-notes>"

/***/ }),

/***/ "./src/app/components/labels/labels.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/labels/labels.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/labels/labels.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/labels/labels.component.ts ***!
  \*******************************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabelsComponent = /** @class */ (function () {
    function LabelsComponent(router, routes, noteService) {
        this.router = router;
        this.routes = routes;
        this.noteService = noteService;
        this.labelNotes = [];
    }
    LabelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routes.params.subscribe(function (params) {
            console.log(params);
            _this.labelName = params['labelName'];
            _this.getLabel();
        });
    };
    LabelsComponent.prototype.getLabel = function () {
        var _this = this;
        this.noteService.getNotesListByLabel(this.labelName).subscribe(function (message) {
            _this.labelNotes = message['data']['data'];
        });
    };
    LabelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-labels',
            template: __webpack_require__(/*! ./labels.component.html */ "./src/app/components/labels/labels.component.html"),
            styles: [__webpack_require__(/*! ./labels.component.scss */ "./src/app/components/labels/labels.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], LabelsComponent);
    return LabelsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <mat-card class=\"card\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\" fxLayoutGap=\"1px\">\n        <mat-card class=\"loginCard\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1px\">\n            <div class=\"logo\" fxLayoutAlign=\"center center\">\n                <img mat-card-image fxFlex='50' src=\"https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Keep_icon.svg\">\n            </div>\n            <mat-label id=\"loginPage\">Log In</mat-label>\n            <mat-card-content>\n                <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayout.xs=\"column\" fxLayoutGap=\"5px\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                        <mat-label>Email</mat-label>\n                        <input matInput name=\"email\" [formControl]=\"email\" required>\n                        <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                        <mat-label>Password</mat-label>\n                        <input matInput name=\"password\" [formControl]=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\n                        <mat-icon class=\"visible\" matSuffix (click)=\"hide = !hide\">{{hide ?'visibility' : 'visibility_off'}}</mat-icon>\n                        <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                </div>\n            </mat-card-content>\n            <mat-card-actions>\n                <div id=\"logInButton\"><button mat-raised-button color=\"primary\" (click)=\"secureLogin(email.value, password.value)\">Log In</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"register()\"> Sign Up</button></div>\n            </mat-card-actions>\n            <mat-card-actions>\n                <div id=\"forgotLink\"><a routerLink=\".\" (click)=\"forgot()\">Forgot Password</a></div>\n            </mat-card-actions>\n        </mat-card>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.visible {\n  cursor: pointer; }\n.main {\n  background: #d1d1d1;\n  height: 100%; }\n.card {\n  height: 100vh;\n  min-height: 640px;\n  min-width: 360px; }\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif; }\n#loginPage {\n  font-size: 25px; }\n.logo {\n  padding: 5px; }\n.visible {\n  cursor: pointer; }\n.main {\n  background: #d1d1d1;\n  height: 100%; }\n.card {\n  height: 100vh;\n  min-height: 640px;\n  min-width: 360px; }\n.loginCard {\n  border-radius: 12px; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
    function LoginComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.router);
        console.log(this.service);
    };
    LoginComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ?
            'You must enter email' : this.email.hasError('email') ? 'Not a Valid Email' : '';
    };
    LoginComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : '';
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['registration']);
    };
    LoginComponent.prototype.forgot = function () {
        this.router.navigate(['forgot']);
    };
    LoginComponent.prototype.secureLogin = function (email, password) {
        var _this = this;
        if (email != null && password != null) {
            var user = {
                "email": email,
                "password": password
            };
            this.service.postRequest('user/login', user).subscribe(function (data) {
                console.log(data);
                localStorage.setItem('userToken', data.id);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('email', data.email);
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                localStorage.setItem('imageUrl', data.imageUrl);
                if (data.id) {
                    _this.router.navigate(['home']);
                    return true;
                }
                else {
                    _this.snackBar.open('login unsuccessfull', "okay");
                    _this.router.navigate(['login']);
                    return false;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/note-dialog/note-dialog.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/note-dialog/note-dialog.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex='100' class=\"dialog\" fxLayout=\"column\">\n    <app-card [fullIcon]=\"fullIcon\" (removeEvent)=\"remove($event)\" [card]=\"card\"></app-card>\n</div>"

/***/ }),

/***/ "./src/app/components/note-dialog/note-dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/note-dialog/note-dialog.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".takenote {\n  background: transparent;\n  margin-bottom: 10px;\n  color: #ada6a6;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.textArea {\n  background: transparent;\n  border: none;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: scroll; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0%;\n  border-radius: 18px !important; }\n\n.display-note {\n  border-radius: 0px; }\n\n.example {\n  width: 100%;\n  border-radius: 18px; }\n\n@media only screen and (max-width: 2520px) {\n  .dialog {\n    width: 750px; } }\n\n@media only screen and (max-width: 1200px) {\n  .dialog {\n    width: 700px; } }\n\n@media only screen and (max-width: 900px) {\n  .dialog {\n    width: 650px; } }\n\n@media only screen and (max-width: 600px) {\n  .dialog {\n    width: 450px; } }\n\n@media only screen and (max-width: 450px) {\n  .dialog {\n    width: 400px; } }\n\n@media only screen and (max-width: 350px) {\n  .dialog {\n    width: 320px; } }\n"

/***/ }),

/***/ "./src/app/components/note-dialog/note-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/note-dialog/note-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: NoteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDialogComponent", function() { return NoteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NoteDialogComponent = /** @class */ (function () {
    function NoteDialogComponent(dialogRef, data, noteService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noteService = noteService;
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.card = this.data;
    }
    NoteDialogComponent.prototype.ngOnInit = function () {
        this.fullIcon = true;
        console.log(this.data);
    };
    NoteDialogComponent.prototype.changeColor = function ($event) {
        this.card.color = $event;
    };
    NoteDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    NoteDialogComponent.prototype.remove = function ($event) {
        if ($event) {
            this.dialogRef.close("deleted");
        }
        else
            this.closeDialog();
    };
    NoteDialogComponent.prototype.changePin = function (card) {
        card.isPined = !card.isPined;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoteDialogComponent.prototype, "removeEvent", void 0);
    NoteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-dialog',
            template: __webpack_require__(/*! ./note-dialog.component.html */ "./src/app/components/note-dialog/note-dialog.component.html"),
            styles: [__webpack_require__(/*! ./note-dialog.component.scss */ "./src/app/components/note-dialog/note-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], NoteDialogComponent);
    return NoteDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/note-icons/note-icons.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/note-icons/note-icons.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <div fxFlex='13'><button id=\"Remind\" matTooltip=\"Remind me\" mat-icon-button [matMenuTriggerFor]=\"remindMenu\">\n      <mat-icon class=\"material-icons\">notification_important</mat-icon>\n    </button>\n    </div>\n    <mat-menu #remindMenu=\"matMenu\" class=\"Remaindermatmenu\">\n        <app-reminder-icon [card]=card></app-reminder-icon>\n    </mat-menu>\n    <div fxFlex='13'>\n        <button mat-icon-button matTooltip=\"Collaborator\" (click)=\"addCollaborator()\">\n      <mat-icon class=\"material-icons\">person_add</mat-icon>\n    </button>\n    </div>\n    <div fxFlex='13'>\n        <button mat-icon-button matTooltip=\"Select theme\" [matMenuTriggerFor]=\"selectTheme\">\n      <mat-icon class=\"material-icons\">color_lens</mat-icon>\n    </button>\n    </div>\n    <mat-menu #selectTheme=\"matMenu\">\n        <div fxLayout=row *ngFor='let row of colorArray' fxLayoutAlign=\"space-around center\">\n            <div *ngFor='let color of row'>\n                <div *ngIf=\"color.color == card.color\">\n                    <button [ngStyle]=\"{'background-color': color.color }\" (click)='changeColor(color.color)' matTooltip=\"{{color.name}}\" mat-card-avatar class=\"visible\">\n                    <mat-icon>\n                      done\n                    </mat-icon>\n                  </button>\n                </div>\n                <div *ngIf=\"color.color != card.color\">\n                    <button [ngStyle]=\"{'background-color': color.color }\" (click)='changeColor(color.color)' matTooltip=\"{{color.name}}\" mat-card-avatar class=\"visible\"></button>\n                </div>\n\n            </div>\n        </div>\n    </mat-menu>\n    <div fxFlex='13'>\n        <button mat-icon-button>\n      <mat-icon class=\"material-icons\">image</mat-icon>\n    </button>\n    </div>\n    <div fxFlex='13'>\n        <button mat-icon-button (click)=\"changeArchiveNote()\">\n      <mat-icon matTooltip=\"unarchive\" *ngIf=card.isArchived class=\"material-icons\">unarchive</mat-icon>\n      <mat-icon matTooltip=\"archive\" *ngIf=!card.isArchived class=\"material-icons\">archive</mat-icon>\n    </button>\n    </div>\n    <div fxFlex='13'>\n        <button mat-icon-button [matMenuTriggerFor]=\"More\">\n      <mat-icon class=\"material-icons\">more_vert</mat-icon>\n    </button>\n    </div>\n    <mat-menu #More=\"matMenu\" class=\"matmenu\" fxLayoutAlign=\"space-between start\">\n        <div *ngIf=addLabel (click)=\"$event.stopPropagation()\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\" class=\"mainMenus\">\n            <button mat-menu-item (click)=\"trashNote()\">\n        <span>Delete</span>\n      </button>\n            <button mat-menu-item (click)=\"addLabelToggle()\" (click)=\"$event.stopPropagation()\">\n        <span>Add Label</span>\n      </button>\n            <button mat-menu-item (click)=\"$event.stopPropagation()\">\n        <span>Add drawing</span>\n      </button>\n            <button mat-menu-item (click)=\"openQandA()\">\n        <span>Ask Question</span>\n      </button>\n            <button mat-menu-item>\n        <span>Make a copy</span>\n      </button>\n            <button mat-menu-item>\n        <span>\n          Show checkboxes\n        </span>\n      </button>\n        </div>\n        <div (clickOutside)=\"onClickedOutside($event)\" *ngIf=!addLabel fxLayout=\"column\" fxLayoutAlign=\"space-around start\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-around start\">\n                <span>Label note</span>\n                <div>\n                    <input class=\"textArea\" fxFlex=80 [(ngModel)]=\"labelName\" placeholder=\"Search for Label\">\n                </div>\n                <div *ngFor=\"let label of labelList\">\n                    <div *ngIf=\"label.id!=''\">\n                        <mat-checkbox (click)=\"labelToNote(label)\">\n                            {{label.label}}</mat-checkbox>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-menu>\n    <div *ngIf=\"show\">\n        <button class=\"addnote\" color=\"primary\" mat-button (click)=\"updateNote()\">close</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/note-icons/note-icons.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/note-icons/note-icons.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\n  color: #676b6e; }\n\n.mat-icon:hover {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/components/note-icons/note-icons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/note-icons/note-icons.component.ts ***!
  \***************************************************************/
/*! exports provided: NoteIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteIconsComponent", function() { return NoteIconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data/data.service */ "./src/app/service/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collaborator-dialog/collaborator-dialog.component */ "./src/app/components/collaborator-dialog/collaborator-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NoteIconsComponent = /** @class */ (function () {
    function NoteIconsComponent(noteService, router, dialog, dataService) {
        this.noteService = noteService;
        this.router = router;
        this.dialog = dialog;
        this.dataService = dataService;
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addNoteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = true;
        this.addLabel = true;
        this.count = 0;
        this.colorArray = [[
                { 'color': '#ffffff', 'name': 'white' },
                { 'color': '#f28b82', 'name': 'red' },
                { 'color': '#fbbc04', 'name': 'orange' },
                { 'color': '#fff475', 'name': 'yellow' }
            ],
            [
                { 'color': '#ccff90', 'name': 'green' },
                { 'color': '#a7ffeb', 'name': 'teal' },
                { 'color': '#cbf0f8', 'name': 'blue' },
                { 'color': '#aecbfa', 'name': 'dark blue' }
            ],
            [
                { 'color': '#d7aefb', 'name': 'purple' },
                { 'color': '#fdcfe8', 'name': 'pink' },
                { 'color': '#e6c9a8', 'name': 'brown' },
                { 'color': '#e8eaed', 'name': 'grey' }
            ]];
    }
    NoteIconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentLabels.subscribe(function (message) { _this.labelList = message; });
    };
    NoteIconsComponent.prototype.remove = function ($needed) {
        this.removeEvent.emit($needed);
    };
    NoteIconsComponent.prototype.changeColor = function (color) {
        if (this.card.id == undefined) {
            this.card.color = color;
            return;
        }
        else {
            this.card.color = color;
            this.noteService.noteServiceJSON('notes/changesColorNotes', {
                "color": color,
                'noteIdList': [this.card.id]
            }).subscribe(function (data) {
            }, function (err) {
                console.log(err, "err");
            });
        }
    };
    NoteIconsComponent.prototype.updateNote = function () {
        if (this.card.id == undefined) {
            this.addNoteEvent.emit();
            return;
        }
        else {
            this.remove(false);
        }
    };
    NoteIconsComponent.prototype.changeArchiveNote = function () {
        var _this = this;
        if (this.card.id == undefined) {
            this.card.isArchived = true;
            this.addNoteEvent.emit();
            return;
        }
        this.card.isArchived = !this.card.isArchived;
        this.model = {
            noteIdList: [this.card.id],
            isArchived: this.card.isArchived
        };
        this.noteService.unarchiveNote(this.model).subscribe(function (message) {
            console.log(message);
            _this.remove(true);
        });
    };
    NoteIconsComponent.prototype.trashNote = function () {
        var _this = this;
        if (this.card.id == undefined) {
            console.log("can't delete creating note");
            return;
        }
        else {
            console.log("Card need to be deleted");
            console.log(this.card.id);
            var body = {
                "isDeleted": true,
                "noteIdList": [this.card.id]
            };
            this.noteService.noteServiceJSON('notes/trashNotes', body).subscribe(function (data) {
                _this.remove(true);
            }, function (err) { return console.log(err); });
        }
    };
    NoteIconsComponent.prototype.addCollaborator = function () {
        var dialogRef = this.dialog.open(_collaborator_dialog_collaborator_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CollaboratorDialogComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                collaborators: this.card.collaborators,
                id: this.card.id
            }
        });
    };
    NoteIconsComponent.prototype.addLabelToggle = function () {
        this.addLabel = !this.addLabel;
    };
    NoteIconsComponent.prototype.labelToNote = function (label) {
        console.log(label);
        console.log(this.card.noteLabels.indexOf(label));
        var flag = true;
        this.card.noteLabels.forEach(function (list) {
            if (list.id == label.id) {
                console.log("Already label exist");
                flag = false;
            }
        });
        if (flag) {
            this.service(label);
        }
        this.addLabel = !this.addLabel;
    };
    NoteIconsComponent.prototype.service = function (label) {
        this.card.noteLabels.push(label);
        if (this.card.id != undefined) {
            this.noteService.addLabelToNote(this.card.id, label.id, '').subscribe(function (message) {
                console.log(message);
            });
        }
        else
            this.card.labelIdList.push(label.id);
    };
    NoteIconsComponent.prototype.isSelected = function (id) {
        console.log("isSelected");
    };
    NoteIconsComponent.prototype.openQandA = function () {
        this.router.navigate(['questionAnswer', this.card.id]);
    };
    NoteIconsComponent.prototype.onClickedOutside = function ($event) {
        this.addLabel = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "removeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "addNoteEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "show", void 0);
    NoteIconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-icons',
            template: __webpack_require__(/*! ./note-icons.component.html */ "./src/app/components/note-icons/note-icons.component.html"),
            styles: [__webpack_require__(/*! ./note-icons.component.scss */ "./src/app/components/note-icons/note-icons.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], NoteIconsComponent);
    return NoteIconsComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/notes.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notesArea\">\n    <div>\n        <app-add-notes (newNoteEvent)=\"getNewNote($event)\"></app-add-notes>\n    </div>\n    <div *ngIf=\"pinNotes.length\" class=\"pins\">Pinned</div>\n    <div class=\"note\">\n        <app-display-notes (pinEvent)=\"getNewNote($event)\" [notes]=\"pinNotes\"></app-display-notes>\n    </div>\n    <div *ngIf=\"unPinNotes.length\" class=\"pins\">Un Pinned</div>\n    <div class=\"note\">\n        <app-display-notes (pinEvent)=\"getNewNote($event)\" [notes]=\"unPinNotes\"></app-display-notes>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/notes/notes.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pins {\n  margin-bottom: 20px;\n  margin-left: 12%; }\n"

/***/ }),

/***/ "./src/app/components/notes/notes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/notes/notes.component.ts ***!
  \*****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var src_app_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data/data.service */ "./src/app/service/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotesComponent = /** @class */ (function () {
    function NotesComponent(service, dataService, router, location) {
        this.service = service;
        this.dataService = dataService;
        this.router = router;
        this.location = location;
        this.pinNotes = [];
        this.unPinNotes = [];
        this.cardData = [];
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.getAllCard();
    };
    NotesComponent.prototype.getNewNote = function ($event) {
        this.cardData.push($event);
        if ($event["isArchived"] == false) {
            if ($event["isPined"] == false) {
                this.unPinNotes.reverse();
                this.unPinNotes.push($event);
                this.unPinNotes.reverse();
            }
            else {
                this.pinNotes.reverse();
                this.pinNotes.push($event);
                this.pinNotes.reverse();
            }
        }
    };
    NotesComponent.prototype.printCards = function () {
        this.pinNotes;
        this.unPinNotes;
    };
    NotesComponent.prototype.ngOnChanges = function () {
        console.log("Onchanges");
    };
    NotesComponent.prototype.getAllCard = function () {
        var _this = this;
        this.service.noteServiceGetData('notes/getNotesList').subscribe(function (data) {
            console.log(data);
            _this.cardData = data["data"].data;
            console.log("carddata", _this.cardData);
            _this.check();
            return;
        });
    };
    NotesComponent.prototype.check = function () {
        var _this = this;
        this.cardData.forEach(function (element) {
            if (element["isDeleted"] == false && element["isArchived"] == false) {
                if (element["isPined"] == false) {
                    _this.unPinNotes.push(element);
                    _this.unPinNotes.reverse();
                }
                else
                    _this.pinNotes.push(element);
                _this.pinNotes.reverse();
            }
        });
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/components/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/components/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"], src_app_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/components/question-answer/question-answer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/question-answer/question-answer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"answerCard\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n        <div fxFlex=90 fxLayout=\"column\">\n            <div class=\"noteContent\" matTooltip=\"Note Title\">{{card.title}} </div>\n            <div class=\"noteContent\" matTooltip=\"Note Description\">{{card.description}}</div>\n        </div>\n        <div fxFlex=10 matTooltip=\"Go back to notes\" (click)=\"close()\">\n            <button mat-stroked-button color='primary'>Close</button>\n        </div>\n    </div>\n    <hr>\n    <div *ngIf=\"show==0\">\n        <div [froalaEditor] [(froalaModel)]=\"question\" id=\"froala-editor\"></div>\n        <div fxLayoutAlign=\"end center\"><button (click)=\"addQuestion()\" mat-button>Done</button> </div>\n    </div>\n    <div *ngIf=\"show!=0\">\n        <div> Question:</div>\n        <div *ngIf=\"question.message\" [innerHTML]=\"questions.message\"></div>\n    </div>\n</mat-card>\n<div *ngIf=\"show!=0\" class=\"answerCard\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n        <button [ngStyle]=\"{'background-image':'url(' +image+card.user.imageUrl+ ')','background-size':'cover'}\" mat-mini-fab></button>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-around start\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n                <div>{{card.user.firstName | titlecase}} {{card.user.lastName | titlecase}}</div>\n                <div>{{card.modifiedDate | date:'medium'}}</div>\n            </div>\n            <div [innerHTML]=\"questions.message\"></div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n                <mat-icon matTooltip=\"Reply\" (click)=\"answer(questions.id)\">reply</mat-icon>\n                <mat-icon matTooltip=\"Like\">thumb_up_alt</mat-icon>\n                <div> {{questions.like.length}}</div>\n                <div *ngIf=\"checkRating(questions.rate)\">\n                    <bar-rating matTooltip=\"Rate\" [(rate)]=\"rate\" [max]=\"5\" (rateChange)=\"rating(questions, $event)\"></bar-rating>\n                </div>\n                <div>{{averageRating(questions.rate)}}</div>\n                <div>\n                    <mat-icon *ngIf=\"open==true\" (click)=\"open=!open\">keyboard_arrow_down</mat-icon>\n                    <mat-icon matTooltip=\"Hide {{viewReplies(questions)}} replies\" *ngIf=\"open==false\" (click)=\"open = !open\">keyboard_arrow_up</mat-icon>\n                </div>\n            </div>\n            <div *ngIf=\"show==0 && cardId==card.id\">\n                <div [froalaEditor] [(froalaModel)]=\"question\"></div>\n                <div><button (click)=\"replying()\" mat-button>Reply</button> </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"replyShow && qID==questions.id\">\n        <div fxLayout=\"row\">\n            <div>\n                <button [ngStyle]=\"{'background-image':'url('+image+card.user.imageUrl+')','background-size':'cover'}\" mat-mini-fab>\n          </button>\n            </div>\n            <div fxFlex=80 fxLayout=\"column\" fxLayoutGap=\"10px\">\n                <div [froalaEditor] [(froalaModel)]=\"editorContent\"></div>\n                <div>\n                    <button (click)=\"replyTo()\" mat-raised-button>Reply</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div style=\"margin-left: 50px\" *ngFor=\"let item of qA\">\n        <div *ngIf=\"item.parentId==questions.id && open==false\">\n            <div>\n                <div fxLayout=\"row\">\n                    <div>\n                        <button [ngStyle]=\"{'background-image':'url('+image+card.user.imageUrl+')','background-size':'cover'}\" mat-mini-fab></button>\n                    </div>\n                    <div fxLayout=\"column\">\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                            <div>{{item.user.firstName}} {{item.user.lastName}}</div>\n                            <div fxLayout=\"row \">{{item.modifiedDate | date:'medium'}}</div>\n                        </div>\n                        <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n                            <div [innerHTML]=\" item.message\"></div>\n                            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                                <div>\n                                    <mat-icon matTooltip=\"Reply\" (click)=\"answer(item.id)\">reply</mat-icon>\n                                </div>\n                                <div fxLayout=\"row\">\n                                    <mat-icon matTooltip=\"Like\" (click)=\"like(item)\">thumb_up_alt</mat-icon>\n                                    <div> {{item.like.length}}</div>\n                                </div>\n                                <div *ngIf=\"checkRating(item.rate)\">\n                                    <bar-rating matTooltip=\"Rate\" [max]=\"5\" [(rate)]=\"rate\" (rateChange)=\"rating(item, $event)\">\n                                    </bar-rating>\n                                </div>\n                                <div>{{averageRating(item.rate)}}</div>\n                                <div>\n                                    <mat-icon matTooltip=\" View {{viewReplies(item)}} replies\" *ngIf=\"down==true\" (click)=\"replyDown(item.id)\">keyboard_arrow_down</mat-icon>\n                                    <mat-icon matTooltip=\" Hide {{viewReplies(item)}} replies\" *ngIf=\"down==false\" (click)=\"replyDown(item.id)\">keyboard_arrow_up</mat-icon>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"replyShow && qID==item.id\">\n                    <div fxLayout=\"row\">\n                        <div fxFlex.xs=20 fxFlex.sm=10 fxFlex.md:=10 fxFlex.lg=5 fxFlex.xl=5>\n                            <button [ngStyle]=\"{'background-image':'url('+image+card.user.imageUrl+')','background-size':'cover'}\" mat-mini-fab>\n                </button>\n                        </div>\n                        <div fxFlex=80 fxLayout=\"column\" fxLayoutGap=\"15px\">\n                            <div [froalaEditor]=\"options\" [(froalaModel)]=\"editorContent\"></div>\n                            <div><button (click)=\"replyTo()\" mat-raised-button>Reply</button> </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div style=\"margin-left: 40px\">\n            <div *ngFor=\"let item2 of qA\">\n                <div *ngIf=\"item2.parentId==item.id && down==false &&  rID==item.id\">\n                    <div>\n                        <div fxLayout=\"row\">\n                            <div>\n                                <button [ngStyle]=\"{'background-image':'url('+image+card.user.imageUrl+')','background-size':'cover'}\" mat-mini-fab></button>\n                            </div>\n                            <div fxLayout=\"column\">\n                                <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                                    <div>{{item2.user.firstName}} {{item2.user.lastName}}</div>\n                                    <div fxLayout=\"row\">{{item2.modifiedDate|date:'medium'}}</div>\n                                </div>\n                                <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n                                    <div [innerHTML]=\"item2.message\"></div>\n                                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                                        <div>\n                                            <mat-icon matTooltip=\"Reply\" (click)=\"answer(item.id)\">reply</mat-icon>\n                                        </div>\n                                        <div fxLayout=row>\n                                            <mat-icon matTooltip=\"Like\" (click)=\"like(item2)\">thumb_up_alt</mat-icon>\n                                            <div> {{item2.like.length}}</div>\n                                        </div>\n                                        <div *ngIf=\"checkRating(item2.rate)\">\n                                            <bar-rating matTooltip=\"Rate\" [max]=\"5\" [(rate)]=\"rate\" (rateChange)=\"rating(item2, $event)\">\n                                            </bar-rating>\n                                        </div>\n                                        <div>{{averageRating(item2.rate)}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/question-answer/question-answer.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/question-answer/question-answer.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noteContent {\n  margin-bottom: 20px; }\n\n.userName {\n  margin-left: 5px; }\n\nquestionCard {\n  padding-top: 90px; }\n\n.answerCard {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 5%; }\n"

/***/ }),

/***/ "./src/app/components/question-answer/question-answer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/question-answer/question-answer.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuestionAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswerComponent", function() { return QuestionAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _Models_model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/model.model */ "./src/app/Models/model.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionAnswerComponent = /** @class */ (function () {
    function QuestionAnswerComponent(_location, routes, router, noteService) {
        this._location = _location;
        this.routes = routes;
        this.router = router;
        this.noteService = noteService;
        this.card = new _Models_model_model__WEBPACK_IMPORTED_MODULE_3__["Model"]();
        this.replyShow = false;
        this.open = true;
        this.rate = 2;
        this.question = '';
        this.down = true;
    }
    QuestionAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routes.params.subscribe(function (params) {
            _this.cardId = params['cardId'];
        });
        this.noteService.getNoteDetails(this.cardId).subscribe(function (result) {
            _this.card = result['data']['data'][0];
            _this.qA = result['data']['data'][0].questionAndAnswerNotes;
            console.log(_this.card);
            console.log(_this.card.questionAndAnswerNotes.length);
            _this.show = result['data']['data'][0].questionAndAnswerNotes.length;
            if (_this.show) {
                _this.questions = result['data']['data'][0].questionAndAnswerNotes[0];
            }
        });
        this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].profileUrl;
    };
    QuestionAnswerComponent.prototype.close = function () {
        this._location.back();
    };
    QuestionAnswerComponent.prototype.addQuestion = function () {
        if (this.question != '') {
            console.log(this.question);
            this.show = !this.show;
            var body = {
                "message": this.question,
                "notesId": this.cardId
            };
            this.noteService.addQuestionAndAnswer(body).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    QuestionAnswerComponent.prototype.viewReplies = function (questAns) {
        this.replyCount = 0;
        for (var i = 0; i < this.qA.length; i++) {
            if (questAns.id == this.qA[i].parentId) {
                this.replyCount++;
            }
        }
        return this.replyCount;
    };
    QuestionAnswerComponent.prototype.rating = function (data, event) {
        var reqBody = {
            "rate": event
        };
        this.noteService.ratingQuestionAndAnswer(data.id, reqBody).subscribe(function (result) {
            // this.getNote();
            console.log("done", +result);
        });
    };
    QuestionAnswerComponent.prototype.averageRating = function (rateArray) {
        // this.value = 0;
        // if (rateArray.length != 0) {
        //   for (let i = 0; i < rateArray.length; i++) {
        //     this.value += rateArray[i].rate
        //   }
        //   this.avgRate = this.value / rateArray.length;
        //   return this.avgRate.toFixed(1);
        // }
    };
    QuestionAnswerComponent.prototype.checkRating = function (rateArray) {
        this.rate = 0;
        if (rateArray.length == 0) {
            return true;
        }
        for (var i = 0; i < rateArray.length; i++) {
            if (rateArray[i].userId == localStorage.getItem('userId')) {
                this.rate = rateArray[i].rate;
            }
        }
        return true;
    };
    QuestionAnswerComponent.prototype.replyTo = function () {
        var replyRequest = {
            "message": this.editorContent,
        };
        this.noteService.replyQuestionAndAnswer(this.qID, replyRequest).subscribe(function (response) {
            // this.getNote();
        });
    };
    QuestionAnswerComponent.prototype.replyDown = function (replyId) {
        this.down = !this.down;
        this.rID = replyId;
    };
    QuestionAnswerComponent.prototype.answer = function (id) {
        this.replyShow = !this.replyShow;
        this.qID = id;
    };
    QuestionAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-answer',
            template: __webpack_require__(/*! ./question-answer.component.html */ "./src/app/components/question-answer/question-answer.component.html"),
            styles: [__webpack_require__(/*! ./question-answer.component.scss */ "./src/app/components/question-answer/question-answer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], QuestionAnswerComponent);
    return QuestionAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <mat-card class=\"card\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\">\n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap.xs=\"0.1px\">\n            <div class=\"logo\" fxLayoutAlign=\"center center\">\n                <img mat-card-image fxFlex=\"50\" src=\"https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Keep_icon.svg\">\n            </div>\n            <mat-label id=\"registerPage\">Sign Up</mat-label>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"1px\">\n                <div class=\"container\" fxLayoutAlign=\"center stretch\" fxLayout.xs=\"column\" fxLayoutGap=\"5px\" fxLayoutGap.xs=\"2px\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                        <mat-label>First Name</mat-label>\n                        <input matInput name=\"firstname\" [formControl]=\"firstname\" required>\n                        <mat-error *ngIf=\"firstname.invalid\">{{getFirstnameErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                        <mat-label>Last Name</mat-label>\n                        <input matInput name=\"lastname\" [formControl]=\"lastname\" required>\n                        <mat-error *ngIf=\"lastname.invalid\">{{getLastnameErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"container\" fxLayoutAlign=\"start stretch\" fxLayoutGap.xs=\"2px\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\">\n                        <mat-label>Email</mat-label>\n                        <input matInput name=\"email\" [formControl]=\"email\" required>\n                        <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"container\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"2px\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                        <mat-label>Password</mat-label>\n                        <input matInput name=\"password\" [formControl]=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\n                        <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                        <mat-label>Confirm Password</mat-label>\n                        <input matInput name=\"confirmpassword\" [formControl]=\"confirmpassword\" [type]=\"hide ? 'password' : 'text'\" required>\n                        <mat-icon class=\"visible\" matSuffix (click)=\"hide = !hide\">{{hide ?'visibility' : 'visibility_off'}}</mat-icon>\n                        <mat-error *ngIf=\"confirmpassword.invalid\">{{matchPassword(password.value, confirmpassword.value)}}</mat-error>\n                        <!-- <mat-error>{{matchPassword(password.value, confirmpassword.value)}}</mat-error> -->\n                    </mat-form-field>\n                </div>\n            </mat-card-content>\n            <mat-button-toggle-group fxLayoutGap=\"5px\" fxLayoutAlign=\"space-around center\">\n                <mat-button-toggle fxFlex=\"49\">Advance</mat-button-toggle>\n                <mat-button-toggle fxFlex=\"52\">Basic</mat-button-toggle>\n            </mat-button-toggle-group>\n            <mat-card-actions>\n                <div id=\"signupButton\"><button mat-raised-button color=\"primary\" (click)=\"secureRegister()\">Sign Up</button></div>\n            </mat-card-actions>\n            <mat-card-actions>\n                <div>Already a User</div>\n                <div id=\"loginLink\" fxLayoutAlign=\"center center\"><a routerLink=\".\" (click)=\"login()\">Log In</a></div>\n            </mat-card-actions>\n        </mat-card>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#registerPage {\n  font-size: 25px; }\n\n/* You can add global styles to this file, and also import other style files */\n\n.visible {\n  cursor: pointer; }\n\n.main {\n  background: #d1d1d1;\n  height: 100%; }\n\n.card {\n  height: 100vh;\n  min-height: 640px;\n  min-width: 360px; }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif; }\n\n.visible {\n  cursor: pointer; }\n\n.main {\n  background: #d1d1d1;\n  height: 100%; }\n\n.card {\n  height: 100vh;\n  min-height: 640px;\n  min-width: 360px; }\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.hide = true;
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        this.confirmpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        if (localStorage.getItem("userToken") != null) {
            this.router.navigate(['']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(this.router);
    };
    RegisterComponent.prototype.getFirstnameErrorMessage = function () {
        return this.firstname.hasError('required') ? "You must enter First Name" : '';
    };
    RegisterComponent.prototype.getLastnameErrorMessage = function () {
        return this.lastname.hasError('required') ? "You must enter Last Name" : '';
    };
    RegisterComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ?
            'You must enter email' : this.email.hasError('email') ? 'Not a Valid Email' : '';
    };
    RegisterComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : '';
    };
    RegisterComponent.prototype.getConfirmPasswordErrorMessage = function () {
        console.log(this.confirmpassword);
        if (this.confirmpassword.hasError('required')) {
            return "You must enter the confirm password";
        }
        else if (this.confirmpassword.hasError('minlength')) {
            return 'password at least 8 letters ';
        }
        else if (this.confirmpassword != this.password) {
        }
    };
    RegisterComponent.prototype.login = function () {
        console.log('fff', this.firstname.value);
        this.router.navigate(['login']);
    };
    RegisterComponent.prototype.forgot = function () {
        this.router.navigate(['forgot']);
    };
    RegisterComponent.prototype.matchPassword = function (password, confirmpassword) {
        if (password != confirmpassword) {
            return "password not matched";
        }
        if (password == confirmpassword) {
            return "password matched";
        }
    };
    RegisterComponent.prototype.secureRegister = function () {
        var _this = this;
        if (this.confirmpassword.value == this.password.value && this.firstname != null && this.lastname != null && this.email != null && this.password != null) {
            var user = {
                "firstName": this.firstname.value,
                "lastName": this.lastname.value,
                "service": "advance",
                "email": this.email.value,
                "password": this.password.value
            };
            console.log(user);
            this.service.postRequest('user/userSignUp', user).subscribe(function (data) {
                console.log('data==========', data);
                if (data.data.success == true) {
                    console.log("inside");
                    _this.snackBar.open("User Registerd", "Okay");
                    _this.router.navigate(['login']);
                }
            });
        }
        else {
            this.router.navigate['register'];
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reminder-icon/reminder-icon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/reminder-icon/reminder-icon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"remindershow\" fxflex=\"100\">\n    <div *ngFor=\"let remind of remindList\">\n        <div fxLayoutAlign=\"space-around center\">\n            <button mat-menu-item (click)=\"reminder(remind.daycount,remind.timeCount)\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <div>{{remind.day}}</div>\n          <div fxFlexOffset='20'>{{remind[\"time\"]}}</div>\n        </div>\n      </button>\n        </div>\n    </div>\n    <div>\n        <button overlapTrigger=\"true\" mat-menu-item (click)=\"toggle()\" (click)=\"$event.stopPropagation()\">\n      <div fxLayout=\"row\">\n        <div fxLayoutAlign=\"space-around center\" class=\"material-icons\">schedule</div>\n        <div fxFlexOffset='8'>Pick date & time</div>\n      </div>\n    </button>\n    </div>\n</div>\n<div *ngIf=\"!remindershow\" fxflex=\"100\" fxLayout=\"column\">\n    <div>\n        <button overlapTrigger=\"true\" mat-menu-item>\n      <div fxLayout=\"row\" (click)=\"$event.stopPropagation()\">\n        <div fxLayoutAlign=\"space-around center\" (click)=\"$event.stopPropagation()\" (click)=\"toggle()\"\n          class=\"material-icons\">arrow_back</div>\n        <div fxFlexOffset='8'>Pick date & time</div>\n      </div>\n    </button>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput [min]=\"todaydate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"checker\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n            </mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" (click)=\"$event.stopPropagation()\">\n        <mat-form-field>\n            <mat-label>Add a Time</mat-label>\n            <mat-select [(value)]=\"selected\">\n                <mat-option *ngFor=\"let remind of customList\" value=remind.value>\n                    <div>\n                        <button mat-menu-item (click)=\"customReminder(remind.timeCount)\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div>{{remind.timeZone}} </div>\n                <div fxFlexOffset='18'>{{remind.time}}</div>\n              </div>\n            </button>\n                    </div>\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"row\">\n        <div fxFlex=\"90\" fxLayoutAlign=\"end end\">\n            <button mat-button (click)=\"saveReminder()\">\n        Save\n      </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/reminder-icon/reminder-icon.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/reminder-icon/reminder-icon.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-menu-panel {\n  min-width: 220px; }\n"

/***/ }),

/***/ "./src/app/components/reminder-icon/reminder-icon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/reminder-icon/reminder-icon.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReminderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderIconComponent", function() { return ReminderIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReminderIconComponent = /** @class */ (function () {
    function ReminderIconComponent(noteService) {
        this.noteService = noteService;
        this.remindershow = true;
        this.todaydate = new Date();
        this.dayCount = 0;
        this.checker = new Date();
        this.remindList = [
            { day: 'today', time: '9:00PM', daycount: 0, timeCount: 20 },
            { day: 'tommorow', time: '9:00AM', daycount: 1, timeCount: 8 },
            { day: 'Next Week', time: '9:00AM', daycount: 7, timeCount: 8 },
        ];
        this.customList = [
            { value: 'option1', timeZone: 'Morning', time: '9:00AM', timeCount: 8 },
            { value: 'option2', timeZone: 'Afternoon', time: '1:00PM', timeCount: 13 },
            { value: "option3", timeZone: 'Evening', time: '6:00PM', timeCount: 18 },
            { value: "option4", timeZone: 'Night', time: '9:00PM', timeCount: 20 },
        ];
        this.currentDate = new Date();
    }
    ReminderIconComponent.prototype.ngOnInit = function () {
    };
    ReminderIconComponent.prototype.toggle = function () {
        this.remindershow = !this.remindershow;
    };
    ReminderIconComponent.prototype.reminder = function (dayCount, timeCount) {
        console.log(this.model);
        this.changed = true;
        this.model = {
            "noteIdList": [this.card.id],
            "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + dayCount, timeCount, 0, 0, 0)
        };
        if (this.card.id == undefined) {
            this.card.reminder[0] = this.model.reminder;
        }
        else {
            this.saveReminder();
        }
    };
    ReminderIconComponent.prototype.customReminder = function (timeCount) {
        this.changed = true;
        this.checker.setHours(timeCount, 0, 0);
        this.model = {
            "noteIdList": [this.card.id],
            "reminder": this.checker
        };
    };
    ReminderIconComponent.prototype.saveReminder = function () {
        var _this = this;
        if (this.changed) {
            console.log(this.model, "model");
            if (this.card.id == undefined) {
                this.card.reminder[0] = this.model.reminder;
            }
            else {
                this.noteService.addUpdateReminderNote(this.model).subscribe(function (response) {
                    // this.remindEvent.emit();
                    console.log(response, "responce");
                    _this.card.reminder[0] = _this.model.reminder;
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReminderIconComponent.prototype, "card", void 0);
    ReminderIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminder-icon',
            template: __webpack_require__(/*! ./reminder-icon.component.html */ "./src/app/components/reminder-icon/reminder-icon.component.html"),
            styles: [__webpack_require__(/*! ./reminder-icon.component.scss */ "./src/app/components/reminder-icon/reminder-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]])
    ], ReminderIconComponent);
    return ReminderIconComponent;
}());



/***/ }),

/***/ "./src/app/components/reminders/reminders.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/reminders/reminders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-display-notes [notes]=\"reminderNotes\"></app-display-notes>"

/***/ }),

/***/ "./src/app/components/reminders/reminders.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/reminders/reminders.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reminders/reminders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/reminders/reminders.component.ts ***!
  \*************************************************************/
/*! exports provided: RemindersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindersComponent", function() { return RemindersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemindersComponent = /** @class */ (function () {
    function RemindersComponent(noteService) {
        this.noteService = noteService;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        this.getReminder();
    };
    RemindersComponent.prototype.getReminder = function () {
        var _this = this;
        this.noteService.getReminderNotes().subscribe(function (data) {
            _this.reminderNotes = data['data']['data'];
        });
    };
    RemindersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminders',
            template: __webpack_require__(/*! ./reminders.component.html */ "./src/app/components/reminders/reminders.component.html"),
            styles: [__webpack_require__(/*! ./reminders.component.scss */ "./src/app/components/reminders/reminders.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]])
    ], RemindersComponent);
    return RemindersComponent;
}());



/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <mat-card class=\"card\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\" fxLayoutGap=\"1px\">\n        <div class=\"logo\" fxLayoutAlign=\"center center\">\n            <img mat-card-image fxFlex='50' src=\"https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Keep_icon.svg\">\n        </div>\n        <mat-label id=\"loginPage\">Reset</mat-label>\n        <mat-card-content fxLayout=\"column\">\n            <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayout.xs=\"column\" fxLayoutGap=\"5px\">\n                <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                    <mat-label>Password</mat-label>\n                    <input matInput name=\"password\" [formControl]=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\n                    <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" fxFlex=\"50\">\n                    <mat-label>Confirm Password</mat-label>\n                    <input matInput name=\"confirmpassword\" [formControl]=\"confirmpassword\" [type]=\"hide ? 'password' : 'text'\" required>\n                    <mat-icon class = \"visible\" matSuffix (click)=\"hide = !hide\">{{hide ?'visibility' : 'visibility_off'}}</mat-icon>\n                    <mat-error *ngIf=\"confirmpassword.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n                </mat-form-field>\n            </div>\n        </mat-card-content>\n        <mat-card-actions >\n            <button mat-raised-button color=\"primary\" (click) = \"reset()\">Reset</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginPage {\n  font-size: 25px; }\n\n/* You can add global styles to this file, and also import other style files */\n\n.visible {\n  cursor: pointer; }\n\n.main {\n  background: #d1d1d1;\n  height: 100%; }\n\n.card {\n  height: 100vh;\n  min-height: 640px;\n  min-width: 360px; }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif; }\n"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, service, activeRoute, snackBar) {
        this.router = router;
        this.service = service;
        this.activeRoute = activeRoute;
        this.snackBar = snackBar;
        this.hide = true;
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        this.confirmpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        this.accessToken = this.activeRoute.snapshot.paramMap.get('token');
        if (localStorage.getItem("userToken") != null) {
            this.router.navigate(['']);
        }
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        console.log(this.router);
        console.log(this.service);
        localStorage.setItem('token', this.accessToken);
    };
    ResetPasswordComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : '';
    };
    ResetPasswordComponent.prototype.getConPasswordErrorMessage = function () {
        return this.confirmpassword.hasError('required') ?
            'You must enter password' : this.confirmpassword.hasError('minlength') ? 'Wrong password' : '';
    };
    ResetPasswordComponent.prototype.reset = function () {
        var _this = this;
        if (this.confirmpassword != null && this.password != null && this.confirmpassword.value == this.password.value) {
            var user = {
                "newPassword": this.password.value
            };
            console.log(user);
            this.service.postUrlEncoded('user/reset-password', user).subscribe(function (data) {
                console.log('resolve', data);
                _this.router.navigate(['login']);
            }, function (error) {
                console.log('error', error);
                _this.snackBar.open("Unknown error occurred", "try again");
                _this.router.navigate(['forgot']);
            });
        }
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/components/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-display-notes class=\"container\" [notes]=\"cardData\" [search]=false></app-display-notes>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data/data.service */ "./src/app/service/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(noteService, dataService) {
        this.noteService = noteService;
        this.dataService = dataService;
        this.cardData = [];
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getAllCard();
    };
    SearchComponent.prototype.getAllCard = function () {
        var _this = this;
        this.noteService.noteServiceGetData('notes/getNotesList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy))
            .subscribe(function (data) {
            _this.cardData = [];
            for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
                if (data["data"]['data'][i].isDeleted == false) {
                    _this.cardData.push(data["data"]['data'][i]);
                }
            }
            console.log("Search cards", _this.cardData);
        }, function (error) {
            console.log(error);
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "keyword", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/trash/trash.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/trash/trash.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-display-notes [notes]=\"cardData\"></app-display-notes>"

/***/ }),

/***/ "./src/app/components/trash/trash.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/trash/trash.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trash/trash.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/trash/trash.component.ts ***!
  \*****************************************************/
/*! exports provided: TrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashComponent", function() { return TrashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_note_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/note/note.service */ "./src/app/service/note/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrashComponent = /** @class */ (function () {
    function TrashComponent(noteService) {
        this.noteService = noteService;
    }
    TrashComponent.prototype.ngOnInit = function () {
        this.getAllTrachCards();
    };
    TrashComponent.prototype.getAllTrachCards = function () {
        var _this = this;
        this.noteService.trashNotes().subscribe(function (data) {
            _this.cardData = data["data"]["data"];
            console.log(data);
            return;
        });
    };
    TrashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trash',
            template: __webpack_require__(/*! ./trash.component.html */ "./src/app/components/trash/trash.component.html"),
            styles: [__webpack_require__(/*! ./trash.component.scss */ "./src/app/components/trash/trash.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_note_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]])
    ], TrashComponent);
    return TrashComponent;
}());



/***/ }),

/***/ "./src/app/pipe/search.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/search.pipe.ts ***!
  \*************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        if (value == '') {
            return value;
        }
        if (!args) {
            return value;
        }
        return value.filter(function (array) {
            return array.title.toLowerCase().indexOf(args.toLowerCase()) !== -1 || array.description.toLowerCase().indexOf(args.toLowerCase()) !== -1;
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/service/data/data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/data/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.labelDefault = {
            id: '',
            label: '',
            isDeleted: false,
            userId: ''
        };
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('searching');
        this.currentMessage = this.messageSource.asObservable();
        this.labelNotes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.labelDefault);
        this.currentLabels = this.labelNotes.asObservable();
        this.view = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.currentView = this.view.asObservable();
        this.view1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.currentView1 = this.view1.asObservable();
        this.changephoto = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.currentPhoto = this.changephoto.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService.prototype.updateLabels = function (message) {
        this.labelNotes.next(message);
    };
    DataService.prototype.changeView = function (message) {
        this.view.next(message);
    };
    DataService.prototype.changeView1 = function (message) {
        this.view1.next(message);
    };
    DataService.prototype.changeImage = function (message) {
        this.changephoto.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/service/http/http.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/http/http.service.ts ***!
  \**********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    HttpService.prototype.postRequest = function (url, user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
        });
        console.log("service");
        return this.http.post(this.API_URL + url, user, { headers: headers });
    };
    HttpService.prototype.encode = function (data) {
        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    HttpService.prototype.postUrlEncoded = function (url, notes) {
        console.log("In service");
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post(this.API_URL + url, this.encode(notes), this.httpOptions);
    };
    HttpService.prototype.httpGetData = function (url) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('userToken')
        });
        return this.http.get(this.API_URL + url, { headers: headers });
    };
    HttpService.prototype.encodedPostForm = function (url, data) {
        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + url;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post(url, this.encode(data), httpOptions);
    };
    HttpService.prototype.encodedPostFormDelete = function (url) {
        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + url;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.delete(url, httpOptions);
    };
    HttpService.prototype.postJSON = function (url, body) {
        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + url;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post(url, body, httpOptions);
    };
    HttpService.prototype.postImage = function (url, body) {
        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + url;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem('userToken')
            })
        };
        console.log(localStorage.getItem('userToken'), "token");
        return this.http.post(url, body, httpOptions);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/service/note/note.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/note/note.service.ts ***!
  \**********************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/service/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteService = /** @class */ (function () {
    function NoteService(service) {
        this.service = service;
    }
    NoteService.prototype.noteServiceEncoded = function (url, data) {
        return this.service.postUrlEncoded(url, data);
    };
    NoteService.prototype.noteServiceGetData = function (url) {
        return this.service.httpGetData(url);
    };
    NoteService.prototype.noteServiceEncodedPost = function (url, data) {
        return this.service.encodedPostForm(url, data);
    };
    NoteService.prototype.noteServiceJSON = function (url, data) {
        return this.service.postJSON(url, data);
    };
    NoteService.prototype.archiveNote = function (data) {
        return this.service.postJSON('notes/archiveNotes', data);
    };
    NoteService.prototype.archiveNotes = function () {
        return this.service.httpGetData('notes/getArchiveNotesList');
    };
    NoteService.prototype.trashNotes = function () {
        return this.service.httpGetData('notes/getTrashNotesList');
    };
    NoteService.prototype.unarchiveNote = function (data) {
        return this.service.postJSON('notes/archiveNotes', data);
    };
    NoteService.prototype.pinUnpinNote = function (data) {
        return this.service.postJSON('notes/pinUnpinNotes', data);
    };
    NoteService.prototype.noteLabel = function (data) {
        return this.service.postJSON('/noteLabels', data);
    };
    NoteService.prototype.getLabels = function () {
        return this.service.httpGetData('noteLabels/getNoteLabelList');
    };
    NoteService.prototype.deleteLabel = function (data) {
        return this.service.encodedPostFormDelete('noteLabels/' + data + '/deleteNoteLabel');
    };
    NoteService.prototype.addUpdateReminderNote = function (data) {
        return this.service.postJSON('notes/addUpdateReminderNotes', data);
    };
    NoteService.prototype.searchUserList = function (data) {
        return this.service.postJSON('user/searchUserList', data);
    };
    NoteService.prototype.updateLabel = function (labelId, RequestBody) {
        return this.service.postJSON('/noteLabels/' + labelId + '/updateNoteLabel', RequestBody);
    };
    NoteService.prototype.deleteReminder = function (body) {
        return this.service.postJSON('notes/removeReminderNotes', body);
    };
    NoteService.prototype.getReminderNotes = function () {
        return this.service.httpGetData('notes/getReminderNotesList');
    };
    NoteService.prototype.addLabelToNote = function (noteId, labelId, body) {
        return this.service.postJSON('notes/' + noteId + '/addLabelToNotes/' + labelId + '/add', body);
    };
    NoteService.prototype.getNotesListByLabel = function (labelName) {
        return this.service.postJSON('notes/getNotesListByLabel/' + labelName, '');
    };
    NoteService.prototype.removeLabelTags = function (id, labelId, body) {
        return this.service.postJSON('/notes/' + id + '/addLabelToNotes/' + labelId + '/remove', body);
    };
    NoteService.prototype.getNoteDetails = function (cardId) {
        return this.service.httpGetData('notes/getNotesDetail/' + cardId);
    };
    // getServiceOfUser() {
    //   return this.service.getConfig('user/service')
    // }
    NoteService.prototype.uploadImage = function (data) {
        console.log("in note service", data);
        return this.service.postImage('user/uploadProfileImage', data);
    };
    NoteService.prototype.addCollaborator = function (noteId, data) {
        return this.service.postJSON('notes/' + noteId + '/AddcollaboratorsNotes', data);
    };
    NoteService.prototype.removeCollaborator = function (noteId, collaboratorId) {
        return this.service.encodedPostFormDelete('notes/' + noteId + '/removeCollaboratorsNotes/' + collaboratorId);
    };
    NoteService.prototype.addQuestionAndAnswer = function (body) {
        return this.service.postJSON('/questionAndAnswerNotes/addQuestionAndAnswer', body);
    };
    NoteService.prototype.ratingQuestionAndAnswer = function (id, data) {
        return this.service.postJSON('questionAndAnswerNotes/rate/' + id, data);
    };
    NoteService.prototype.replyQuestionAndAnswer = function (noteId, data) {
        return this.service.postJSON('questionAndAnswerNotes/reply/' + noteId, data);
    };
    NoteService.prototype.likeQuestionAndAnswer = function (id, data) {
        return this.service.postJSON('questionAndAnswerNotes/like/' + id, data);
    };
    NoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NoteService);
    return NoteService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://fundoonotes.incubation.bridgelabz.com/api/',
    profileUrl: 'http://fundoonotes.incubation.bridgelabz.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/guard/guard.guard.ts":
/*!**********************************!*\
  !*** ./src/guard/guard.guard.ts ***!
  \**********************************/
/*! exports provided: GuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardGuard", function() { return GuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuardGuard = /** @class */ (function () {
    function GuardGuard(router) {
        this.router = router;
    }
    GuardGuard.prototype.canActivate = function (path, state) {
        if (!this.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    GuardGuard.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('userToken');
        if (token)
            return true;
        return false;
    };
    GuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GuardGuard);
    return GuardGuard;
}());



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/admin126/Desktop/angularProject/fundooNotesBackup/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map