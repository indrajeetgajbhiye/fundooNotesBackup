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
var ReminderIconComponent = /** @class */ (function () {
    function ReminderIconComponent(noteService) {
        this.noteService = noteService;
        this.remindershow = true;
        this.todaydate = new Date();
        this.dayCount = 0;
        this.checker = new Date();
        this.remindList = [
            { day: 'today', time: '9:00PM', daycount: 0, timeCount: 20 },
            { day: 'tommorow', time: '9:00AM', daycount: 1, timeCount: 8 },
            { day: 'Next Week', time: '9:00AM', daycount: 7, timeCount: 8 },
        ];
        this.customList = [
            { value: 'option1', timeZone: 'Morning', time: '9:00AM', timeCount: 8 },
            { value: 'option2', timeZone: 'Afternoon', time: '1:00PM', timeCount: 13 },
            { value: "option3", timeZone: 'Evening', time: '6:00PM', timeCount: 18 },
            { value: "option4", timeZone: 'Night', time: '9:00PM', timeCount: 20 },
        ];
        this.currentDate = new Date();
    }
    ReminderIconComponent.prototype.ngOnInit = function () {
    };
    ReminderIconComponent.prototype.toggle = function () {
        this.remindershow = !this.remindershow;
    };
    ReminderIconComponent.prototype.reminder = function (dayCount, timeCount) {
        console.log(this.model);
        this.changed = true;
        this.model = {
            "noteIdList": [this.card.id],
            "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + dayCount, timeCount, 0, 0, 0)
        };
        if (this.card.id == undefined) {
            this.card.reminder[0] = this.model.reminder;
        }
        else {
            this.saveReminder();
        }
    };
    ReminderIconComponent.prototype.customReminder = function (timeCount) {
        this.changed = true;
        this.checker.setHours(timeCount, 0, 0);
        this.model = {
            "noteIdList": [this.card.id],
            "reminder": this.checker
        };
    };
    ReminderIconComponent.prototype.saveReminder = function () {
        var _this = this;
        if (this.changed) {
            console.log(this.model.reminder, "model");
            if (this.card.id == undefined) {
                this.card.reminder[0] = this.model.reminder;
            }
            else {
                this.noteService.addUpdateReminderNote(this.model).subscribe(function (response) {
                    // this.remindEvent.emit();
                    console.log(response, "responce");
                    _this.card.reminder[0] = _this.model.reminder;
                });
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ReminderIconComponent.prototype, "card", void 0);
    ReminderIconComponent = __decorate([
        Component({
            selector: 'app-reminder-icon',
            templateUrl: './reminder-icon.component.html',
            styleUrls: ['./reminder-icon.component.scss']
        }),
        __metadata("design:paramtypes", [NoteService])
    ], ReminderIconComponent);
    return ReminderIconComponent;
}());
export { ReminderIconComponent };
//# sourceMappingURL=reminder-icon.component.js.map