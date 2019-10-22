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
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
var LabelsComponent = /** @class */ (function () {
    function LabelsComponent(router, routes, noteService) {
        this.router = router;
        this.routes = routes;
        this.noteService = noteService;
        this.labelNotes = [];
    }
    LabelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routes.params.subscribe(function (params) {
            console.log(params);
            _this.labelName = params['labelName'];
            _this.getLabel();
        });
    };
    LabelsComponent.prototype.getLabel = function () {
        var _this = this;
        this.noteService.getNotesListByLabel(this.labelName).subscribe(function (message) {
            _this.labelNotes = message['data']['data'];
        });
    };
    LabelsComponent = __decorate([
        Component({
            selector: 'app-labels',
            templateUrl: './labels.component.html',
            styleUrls: ['./labels.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, NoteService])
    ], LabelsComponent);
    return LabelsComponent;
}());
export { LabelsComponent };
//# sourceMappingURL=labels.component.js.map