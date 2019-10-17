import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { MatDialog } from '@angular/material';
import { DataService } from '../../service/data/data.service'
import { Label } from '../../Models/model.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() card: any
  @Output() removeEvent = new EventEmitter();
  @Output() addNoteEvent = new EventEmitter();
  @Input() show = true;
  labelList: Label
  addLabel: boolean = true;
  count: number = 0;
  model: any;
  colorArray =
    [[
      { 'color': '#B39DDB', 'name': 'purple' },
      { 'color': '#F48FB1', 'name': 'pink' },
      { 'color': '#a0855b', 'name': 'brown' },
      { 'color': '#E0E0E0', 'name': 'gray' }
    ],
    [
      { 'color': '#FFFFFF', 'name': 'White' },
      { 'color': '#d35656', 'name': 'Red' },
      { 'color': '#fb9224', 'name': 'Orange' },
      { 'color': '#eccd8f', 'name': 'Yellow' }],
    [
      { 'color': '#a1dd70 ', 'name': 'green' },
      { 'color': '#69F0AE', 'name': 'teal' },
      { 'color': '#81D4FA', 'name': 'blue' },
      { 'color': '#0288D1', 'name': 'darkblue' }
    ]]
  constructor(private noteService: NoteService, private router: Router, public dialog: MatDialog, public dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentLabels.subscribe(message => { this.labelList = message });

  }
  remove($needed) {
    this.removeEvent.emit($needed);
  }
  changeColor(color) {
    if (this.card.id == undefined) {
      this.card.color = color;
      return;
    }
    else {
      this.card.color = color;
      this.noteService.noteServiceJSON('notes/changesColorNotes', {
        "color": color,
        'noteIdList': [this.card.id]
      }).subscribe(data => {
      },
        err => {
          console.log(err, "err");
        })
    }
  }
  updateNote() {
    if (this.card.id == undefined) {
      this.addNoteEvent.emit();

      return;
    }
    else {
      this.remove(false);
    }
  }
  changeArchiveNote() {
    if (this.card.id == undefined) {
      this.card.isArchived = true;
      this.addNoteEvent.emit();
      return;
    }
    this.card.isArchived = !this.card.isArchived;
    this.model = {
      noteIdList: [this.card.id],
      isArchived: this.card.isArchived
    }
    this.noteService.unarchiveNote(this.model).subscribe(message => {
      console.log(message);
      this.remove(true);
    })
  }

  trashNote() {
    if (this.card.id == undefined) {
      console.log("can't delete creating note");
      return;
    }
    else {
      console.log("Card need to be deleted");
      this.noteService.noteServiceJSON('notes/trashNotes', {

        "isDeleted": true,
        "noteIdList": [this.card.id]
      }).subscribe(data => {
        this.remove(true);
      }, err => console.log(err))
    }
  }
  addCollaborator() {
    console.log("add collabs")
  }
  addLabelToggle() {
    this.addLabel = !this.addLabel;
  }

  labelToNote(label) {
    console.log(label);
    console.log(this.card.noteLabels.indexOf(label));
    this.card.noteLabels.forEach(list => {
      if (list.id == label.id) {
        console.log("Already label exist");
        return;
      }
    }, this.service(label));
    this.addLabel=!this.addLabel
  }
  service(label) {
    this.card.noteLabels.push(label);
    if (this.card.id != undefined) {
      this.noteService.addLabelToNote(this.card.id, label.id, '').subscribe(message => {
        console.log(message);
      })
    }
    else
      this.card.labelIdList.push(label.id);
  }
  isSelected(id) {
    console.log("isSelected")
  }
  openQandA() {
    console.log("q and a ")
  }
  onClickedOutside($event){
    this.addLabel = true
  }
}
