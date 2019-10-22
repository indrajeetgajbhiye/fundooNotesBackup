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
        Component({
            selector: 'app-collaborator-dialog',
            templateUrl: './collaborator-dialog.component.html',
            styleUrls: ['./collaborator-dialog.component.scss']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object, NoteService])
    ], CollaboratorDialogComponent);
    return CollaboratorDialogComponent;
}());
export { CollaboratorDialogComponent };
//# sourceMappingURL=collaborator-dialog.component.js.map