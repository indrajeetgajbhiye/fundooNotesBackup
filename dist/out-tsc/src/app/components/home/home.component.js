var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../service/data/data.service';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { environment } from '../../../environments/environment';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog1, changeDetectorRef, media, router, dataService, noteService) {
        this.dialog1 = dialog1;
        this.router = router;
        this.dataService = dataService;
        this.noteService = noteService;
        this.view = true;
        this.destroy$ = new Subject();
        this.hide = true;
        this.imageFile = null;
        this.header = 'notes';
        this.ArrayOfLabel = [];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.innerWidth = window.innerWidth;
        this.router.navigate(['home']);
    }
    HomeComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLabel();
        this.name = localStorage.getItem('firstName');
        this.email = localStorage.getItem('email');
        this.newImage = localStorage.getItem('imageUrl');
        this.img = environment.profileUrl + "/" + this.newImage;
        console.log("inside home ngOnInit");
        this.dataService.currentPhoto.subscribe(function (message) {
            console.log("variable");
            _this.image = message;
            _this.newImage = localStorage.getItem('imageUrl');
            _this.img = environment.profileUrl + "/" + _this.newImage;
        });
    };
    HomeComponent.prototype.navigateArchive = function () {
        this.router.navigate(['archive']);
    };
    HomeComponent.prototype.navigateHome = function () {
        this.router.navigate(['home']);
    };
    HomeComponent.prototype.navigateTrash = function () {
        this.router.navigate(['trash']);
    };
    HomeComponent.prototype.navigateSearch = function () {
        this.router.navigate(['search']);
    };
    HomeComponent.prototype.navigateReminder = function () {
        this.router.navigate(['reminder']);
    };
    HomeComponent.prototype.navigateCart = function () {
        console.log("cart");
    };
    HomeComponent.prototype.searchfor = function () {
        this.dataService.changeMessage(this.search);
    };
    HomeComponent.prototype.showSearch = function () {
        return this.hide = !this.hide;
    };
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
        this.ngOnInit();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    HomeComponent.prototype.openLabelNotes = function (labelName) {
        this.router.navigate(['label', labelName]);
    };
    HomeComponent.prototype.getLabel = function () {
        var _this = this;
        try {
            this.noteService.getLabels()
                .pipe(takeUntil(this.destroy$))
                .subscribe(function (result) {
                _this.ArrayOfLabel = result["data"]["details"];
                _this.dataService.updateLabels(result["data"]["details"]);
                // this.dataService.currentLabels.subscribe(message => {this.ArrayOfLabel = message });
            });
        }
        catch (_a) {
            console.log("Error in getLabel");
        }
    };
    HomeComponent.prototype.openLabelDialog = function () {
        var dialogRef = this.dialog1.open(LabelDialogComponent, {
            data: { data: this.ArrayOfLabel },
            width: 'auto',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HomeComponent.prototype.changeView = function () {
        this.view = !this.view;
        this.dataService.changeView(this.view);
    };
    HomeComponent.prototype.onFileUpload = function (event) {
        this.imageFile = event.path[0].files[0];
        var uploadImage = new FormData();
        uploadImage.append('file', this.imageFile, this.imageFile.name);
        this.openPicture(event);
    };
    HomeComponent.prototype.openPicture = function (data) {
        var _this = this;
        var dialogRef = this.dialog1.open(ImageDialogComponent, {
            width: 'auto',
            height: 'auto',
            data: data,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "imageChange") {
                console.log("inside");
            }
            _this.dataService.currentPhoto.subscribe(function (response) { return _this.profile = response; });
            if (_this.profile = true) {
                _this.imageProfile = localStorage.getItem('imageUrl');
                _this.img = environment.profileUrl + "/" + _this.imageProfile;
            }
        });
    };
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialog, ChangeDetectorRef, MediaMatcher, Router, DataService, NoteService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map