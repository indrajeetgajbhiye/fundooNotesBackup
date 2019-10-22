var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
var DeleteIconsComponent = /** @class */ (function () {
    function DeleteIconsComponent(noteService) {
        this.noteService = noteService;
        this.removeEvent = new EventEmitter();
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
        Input(),
        __metadata("design:type", Object)
    ], DeleteIconsComponent.prototype, "card", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DeleteIconsComponent.prototype, "removeEvent", void 0);
    DeleteIconsComponent = __decorate([
        Component({
            selector: 'app-delete-icons',
            templateUrl: './delete-icons.component.html',
            styleUrls: ['./delete-icons.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService])
    ], DeleteIconsComponent);
    return DeleteIconsComponent;
}());
export { DeleteIconsComponent };
//# sourceMappingURL=delete-icons.component.js.map