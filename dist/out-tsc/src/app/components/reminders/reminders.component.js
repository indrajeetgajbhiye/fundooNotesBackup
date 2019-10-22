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
var RemindersComponent = /** @class */ (function () {
    function RemindersComponent(noteService) {
        this.noteService = noteService;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        this.getReminder();
    };
    RemindersComponent.prototype.getReminder = function () {
        var _this = this;
        this.noteService.getReminderNotes().subscribe(function (data) {
            _this.reminderNotes = data['data']['data'];
        });
    };
    RemindersComponent = __decorate([
        Component({
            selector: 'app-reminders',
            templateUrl: './reminders.component.html',
            styleUrls: ['./reminders.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService])
    ], RemindersComponent);
    return RemindersComponent;
}());
export { RemindersComponent };
//# sourceMappingURL=reminders.component.js.map