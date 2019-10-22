var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { Router } from '@angular/router';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component';
var CardComponent = /** @class */ (function () {
    function CardComponent(dialog, router, noteService) {
        var _this = this;
        this.dialog = dialog;
        this.router = router;
        this.noteService = noteService;
        this.search = true;
        this.pinEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
        this.display = true;
        setTimeout(function () {
            console.log("card", _this.card);
        }, 0);
    }
    CardComponent.prototype.ngOnInit = function () {
        this.card;
    };
    CardComponent.prototype.show = function () {
        this.description = this.card.description;
        // this.title = this.card.title;
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
        var dialogRef = this.dialog.open(NoteDialogComponent, {
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
            console.log(data);
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
        var dialogRef = this.dialog.open(CollaboratorDialogComponent, {
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
        Input(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "view", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "fullIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "search", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "pinEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "removeEvent", void 0);
    CardComponent = __decorate([
        Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialog, Router, NoteService])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map