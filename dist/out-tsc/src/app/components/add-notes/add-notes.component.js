var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { MatDialog } from '@angular/material';
var AddNotesComponent = /** @class */ (function () {
    function AddNotesComponent(dialog, noteService) {
        this.dialog = dialog;
        this.noteService = noteService;
        this.flag = true;
        this.flag2 = false;
        this.show = true;
        this.checklistOpen = [];
        this.newNoteEvent = new EventEmitter();
        this.color = '#FFFFFF';
        this.noteTitle = new FormControl('', [Validators.required]);
        this.noteContent = new FormControl('');
    }
    AddNotesComponent.prototype.ngOnInit = function () {
        this.card = new Model();
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
                        _this.card = new Model();
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
        Output(),
        __metadata("design:type", Object)
    ], AddNotesComponent.prototype, "newNoteEvent", void 0);
    AddNotesComponent = __decorate([
        Component({
            selector: 'app-add-notes',
            templateUrl: './add-notes.component.html',
            styleUrls: ['./add-notes.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialog, NoteService])
    ], AddNotesComponent);
    return AddNotesComponent;
}());
export { AddNotesComponent };
//# sourceMappingURL=add-notes.component.js.map