var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService() {
        this.labelDefault = {
            id: '',
            label: '',
            isDeleted: false,
            userId: ''
        };
        this.messageSource = new BehaviorSubject('searching');
        this.currentMessage = this.messageSource.asObservable();
        this.labelNotes = new BehaviorSubject(this.labelDefault);
        this.currentLabels = this.labelNotes.asObservable();
        this.view = new BehaviorSubject(true);
        this.currentView = this.view.asObservable();
        this.view1 = new BehaviorSubject(true);
        this.currentView1 = this.view1.asObservable();
        this.changephoto = new BehaviorSubject(true);
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
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map