var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { DataService } from "../../service/data/data.service";
var DisplayNotesComponent = /** @class */ (function () {
    function DisplayNotesComponent(noteService, dataService) {
        this.noteService = noteService;
        this.dataService = dataService;
        this.view = true;
        this.notes = [];
        this.pinEvent = new EventEmitter();
        this.search = true;
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
        Input(),
        __metadata("design:type", Object)
    ], DisplayNotesComponent.prototype, "notes", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DisplayNotesComponent.prototype, "pinEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DisplayNotesComponent.prototype, "search", void 0);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DisplayNotesComponent.prototype, "onResize", null);
    DisplayNotesComponent = __decorate([
        Component({
            selector: 'app-display-notes',
            templateUrl: './display-notes.component.html',
            styleUrls: ['./display-notes.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService, DataService])
    ], DisplayNotesComponent);
    return DisplayNotesComponent;
}());
export { DisplayNotesComponent };
//# sourceMappingURL=display-notes.component.js.map