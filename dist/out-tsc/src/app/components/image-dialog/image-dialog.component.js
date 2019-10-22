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
import { DataService } from '../../service/data/data.service';
import { NoteService } from '../../service/note/note.service';
import { environment } from '../../../environments/environment';
var ImageDialogComponent = /** @class */ (function () {
    function ImageDialogComponent(dialogRef, data, dataService, noteService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.noteService = noteService;
        this.imageBefore = environment.profileUrl + "/" + localStorage.getItem("imageUrl");
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
        Component({
            selector: 'app-image-dialog',
            templateUrl: './image-dialog.component.html',
            styleUrls: ['./image-dialog.component.scss']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object, DataService, NoteService])
    ], ImageDialogComponent);
    return ImageDialogComponent;
}());
export { ImageDialogComponent };
//# sourceMappingURL=image-dialog.component.js.map