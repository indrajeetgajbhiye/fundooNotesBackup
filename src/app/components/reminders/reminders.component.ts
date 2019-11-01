import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  loading: boolean;

  constructor(public noteService: NoteService) { }
  reminderNotes
  ngOnInit() {
    this.getReminder();
  }
  getReminder() {
    this.loading = true
    this.noteService.getReminderNotes().subscribe(data => {
      this.loading = false
      this.reminderNotes = data['data']['data']
    })
  }
}
