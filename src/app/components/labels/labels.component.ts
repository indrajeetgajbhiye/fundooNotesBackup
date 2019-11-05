import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  labelNotes = [];
  constructor(private router: Router, private routes: ActivatedRoute, public noteService: NoteService) { }
  sub
  labelName
  public loading = false;
  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      this.labelName = params['labelName'];
      this.getLabel();
    });
  }
  getLabel() {
    this.loading=true;
    this.noteService.getNotesListByLabel(this.labelName).subscribe(message => {
      this.loading=false;
      this.labelNotes = message['data']['data']
    })
  }
}
