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
import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from '../../service/note/note.service';
var NoteDialogComponent = /** @class */ (function () {
    function NoteDialogComponent(dialogRef, data, noteService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noteService = noteService;
        this.removeEvent = new EventEmitter();
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
        Output(),
        __metadata("design:type", Object)
    ], NoteDialogComponent.prototype, "removeEvent", void 0);
    NoteDialogComponent = __decorate([
        Component({
            selector: 'app-note-dialog',
            templateUrl: './note-dialog.component.html',
            styleUrls: ['./note-dialog.component.scss']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object, NoteService])
    ], NoteDialogComponent);
    return NoteDialogComponent;
}());
export { NoteDialogComponent };
//# sourceMappingURL=note-dialog.component.js.map