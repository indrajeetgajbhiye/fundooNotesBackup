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
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from '../../service/note/note.service';
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
        Component({
            selector: 'app-label-dialog',
            templateUrl: './label-dialog.component.html',
            styleUrls: ['./label-dialog.component.scss']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object, NoteService])
    ], LabelDialogComponent);
    return LabelDialogComponent;
}());
export { LabelDialogComponent };
//# sourceMappingURL=label-dialog.component.js.map