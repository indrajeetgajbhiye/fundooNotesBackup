var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { MatDialog } from '@angular/material';
import { DataService } from '../../service/data/data.service';
import { Router } from '@angular/router';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component';
var NoteIconsComponent = /** @class */ (function () {
    function NoteIconsComponent(noteService, router, dialog, dataService) {
        this.noteService = noteService;
        this.router = router;
        this.dialog = dialog;
        this.dataService = dataService;
        this.removeEvent = new EventEmitter();
        this.addNoteEvent = new EventEmitter();
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
        var dialogRef = this.dialog.open(CollaboratorDialogComponent, {
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
        Input(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "card", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "removeEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "addNoteEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NoteIconsComponent.prototype, "show", void 0);
    NoteIconsComponent = __decorate([
        Component({
            selector: 'app-note-icons',
            templateUrl: './note-icons.component.html',
            styleUrls: ['./note-icons.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService, Router, MatDialog, DataService])
    ], NoteIconsComponent);
    return NoteIconsComponent;
}());
export { NoteIconsComponent };
//# sourceMappingURL=note-icons.component.js.map