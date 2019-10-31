import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  cardData: any
  public loading = false;
  constructor(private service: NoteService) { }

  ngOnInit() {
    this.getAllArchiveCard();

  }
  getAllArchiveCard() {
    this.loading=true;
    this.service.archiveNotes().subscribe(data => {
      this.loading=false;
      this.cardData = data["data"]["data"];
      return
    })
  }
}
