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
import { Location } from '@angular/common';
import { NoteService } from '../../service/note/note.service';
import { DataService } from 'src/app/service/data/data.service';
import { Router } from '@angular/router';
var NotesComponent = /** @class */ (function () {
    function NotesComponent(service, dataService, router, location) {
        this.service = service;
        this.dataService = dataService;
        this.router = router;
        this.location = location;
        this.pinNotes = [];
        this.unPinNotes = [];
        this.cardData = [];
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.getAllCard();
    };
    NotesComponent.prototype.getNewNote = function ($event) {
        this.cardData.push($event);
        if ($event["isArchived"] == false) {
            if ($event["isPined"] == false) {
                this.unPinNotes.reverse();
                this.unPinNotes.push($event);
                this.unPinNotes.reverse();
            }
            else {
                this.pinNotes.reverse();
                this.pinNotes.push($event);
                this.pinNotes.reverse();
            }
        }
    };
    NotesComponent.prototype.printCards = function () {
        this.pinNotes;
        this.unPinNotes;
    };
    NotesComponent.prototype.ngOnChanges = function () {
        console.log("Onchanges");
    };
    NotesComponent.prototype.getAllCard = function () {
        var _this = this;
        this.service.noteServiceGetData('notes/getNotesList').subscribe(function (data) {
            console.log(data);
            _this.cardData = data["data"].data;
            console.log("carddata", _this.cardData);
            _this.check();
            return;
        });
    };
    NotesComponent.prototype.check = function () {
        var _this = this;
        this.cardData.forEach(function (element) {
            if (element["isDeleted"] == false && element["isArchived"] == false) {
                if (element["isPined"] == false) {
                    _this.unPinNotes.push(element);
                    _this.unPinNotes.reverse();
                }
                else
                    _this.pinNotes.push(element);
                _this.pinNotes.reverse();
            }
        });
    };
    NotesComponent = __decorate([
        Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService, DataService, Router, Location])
    ], NotesComponent);
    return NotesComponent;
}());
export { NotesComponent };
//# sourceMappingURL=notes.component.js.map