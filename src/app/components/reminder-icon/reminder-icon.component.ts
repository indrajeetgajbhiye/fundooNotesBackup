import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { SnackbarService } from '../../service/snackbar/snackbar.service';

@Component({
  selector: 'app-reminder-icon',
  templateUrl: './reminder-icon.component.html',
  styleUrls: ['./reminder-icon.component.scss']
})
export class ReminderIconComponent implements OnInit {
  remindershow: boolean = true;
  @Input() card;
  changed: boolean;
  todaydate: Date = new Date();
  dayCount = 0;
  checker: Date = new Date();
  model
  remindList = [
    { day: 'today', time: '9:00PM', daycount: 0, timeCount: 20 },
    { day: 'tommorow', time: '9:00AM', daycount: 1, timeCount: 8 },
    { day: 'Next Week', time: '9:00AM', daycount: 7, timeCount: 8 },
  ]
  customList = [
    { value: 'option1', timeZone: 'Morning', time: '9:00AM', timeCount: 8 },
    { value: 'option2', timeZone: 'Afternoon', time: '1:00PM', timeCount: 13 },
    { value: "option3", timeZone: 'Evening', time: '6:00PM', timeCount: 18 },
    { value: "option4", timeZone: 'Night', time: '9:00PM', timeCount: 20 },
  ]
  private currentDate = new Date();
  constructor(public noteService: NoteService, private snackbar: SnackbarService) { }
  ngOnInit() {
  }
  toggle() {
    this.remindershow = !this.remindershow;
  }
  reminder(dayCount, timeCount) {
    this.changed = true;
    this.model = {
      "noteIdList": [this.card.id],
      "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(),
        this.currentDate.getDate() + dayCount, timeCount, 0, 0, 0)
    }
    if (this.card.id == undefined) {
      this.card.reminder[0] = this.model.reminder;
    } else {
      this.saveReminder();
    }
  }
  customReminder(timeCount) {
    this.changed = true;
    this.checker.setHours(timeCount, 0, 0);
    this.model = {
      "noteIdList": [this.card.id],
      "reminder": this.checker
    }
  }
  saveReminder() {
    if (this.changed) {
      if (this.card.id == undefined) {
        this.card.reminder[0] = this.model.reminder;
      }
      else {
        this.noteService.addUpdateReminderNote(this.model).subscribe(response => {
          this.snackbar.open("Reminder Added")
          this.card.reminder[0] = this.model.reminder;
        })
      }
    }
  }
}
