var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(service) {
        this.service = service;
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.getAllArchiveCard();
    };
    ArchiveComponent.prototype.getAllArchiveCard = function () {
        var _this = this;
        this.service.archiveNotes().subscribe(function (data) {
            _this.cardData = data["data"]["data"];
            console.log(data);
            return;
        });
    };
    ArchiveComponent = __decorate([
        Component({
            selector: 'app-archive',
            templateUrl: './archive.component.html',
            styleUrls: ['./archive.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService])
    ], ArchiveComponent);
    return ArchiveComponent;
}());
export { ArchiveComponent };
//# sourceMappingURL=archive.component.js.map