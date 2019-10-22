var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { DataService } from '../../service/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(noteService, dataService) {
        this.noteService = noteService;
        this.dataService = dataService;
        this.cardData = [];
        this.destroy = new Subject();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getAllCard();
    };
    SearchComponent.prototype.getAllCard = function () {
        var _this = this;
        this.noteService.noteServiceGetData('notes/getNotesList').pipe(takeUntil(this.destroy))
            .subscribe(function (data) {
            _this.cardData = [];
            for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
                if (data["data"]['data'][i].isDeleted == false) {
                    _this.cardData.push(data["data"]['data'][i]);
                }
            }
            console.log("Search cards", _this.cardData);
        }, function (error) {
            console.log(error);
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "keyword", void 0);
    SearchComponent = __decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService, DataService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map