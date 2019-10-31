import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  constructor(public noteService: NoteService) { }
  cardData: any;
  public loading = false;
  ngOnInit() {
    this.getAllTrachCards();
  }
  getAllTrachCards() {
    this.loading=true;
    this.noteService.trashNotes().subscribe(data => {
      this.loading=false
      this.cardData = data["data"]["data"];
      console.log(data);
      return
    })
  }
}