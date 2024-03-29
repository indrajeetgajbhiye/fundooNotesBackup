import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { MatDialog } from '@angular/material';
import { DataService } from '../../service/data/data.service'
import { Label } from '../../Models/model.model'
import { Router } from '@angular/router';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component'
import { SnackbarService } from '../../service/snackbar/snackbar.service';
import { AddImageComponent } from '../add-image/add-image.component';
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
  @Output() toggleEvent = new EventEmitter<boolean>();
  labelList: Label
  addLabel: boolean = true;
  count: number = 0;
  model: any;
  colorArray =
    [[
      { 'color': '#ffffff', 'name': 'white' },
      { 'color': '#f28b82', 'name': 'red' },
      { 'color': '#fbbc04', 'name': 'orange' },
      { 'color': '#fff475', 'name': 'yellow' }
    ],
    [
      { 'color': '#ccff90', 'name': 'green' },
      { 'color': '#a7ffeb', 'name': 'teal' },
      { 'color': '#cbf0f8', 'name': 'blue' },
      { 'color': '#aecbfa', 'name': 'dark blue' }],
    [
      { 'color': '#d7aefb', 'name': 'purple' },
      { 'color': '#fdcfe8', 'name': 'pink' },
      { 'color': '#e6c9a8', 'name': 'brown' },
      { 'color': '#e8eaed', 'name': 'grey' }
    ]]
  listToggle: boolean = false
  constructor(private noteService: NoteService, private router: Router, public dialog: MatDialog, public dataService: DataService, private snackbar: SnackbarService) { 
  }

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
      this.noteService.updateColor({
        "color": color,
        'noteIdList': [this.card.id]
      }).subscribe(data => {
        this.snackbar.open("Note Color changed")
      },
        err => {
          this.snackbar.open("Error in changing note color", 'retry')
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
      this.remove(true);
    })
  }

  trashNote() {
    if (this.card.id == undefined) {
      this.snackbar.open('Cant delete this note')
      return;
    }
    else {
      let body={
        "isDeleted": true,
        "noteIdList": [this.card.id]
      }
      this.noteService.trashNote(body).subscribe(data => {
        this.snackbar.open('Note trashed')
        this.remove(true);
      }, err => {
        this.snackbar.open('Error trashing note')
      })
    }
  }
  addCollaborator() {
    const dialogRef = this.dialog.open(CollaboratorDialogComponent, {
      width : 'auto',
      height : 'auto',
      data : {
        collaborators : this.card.collaborators,
        id : this.card.id
      }
    })
  }
  addImage(){
    const dialogRef = this.dialog.open(AddImageComponent,{
      height:'auto',
      width: 'auto',
      data:{
        id: this.card.id,
        title: this.card.title,
        description: this.card.description,
        imageUrl : this.card.imageUrl
      }
    })
  }
  addLabelToggle() {
    this.addLabel = !this.addLabel;
  }

  labelToNote(label) {
    let flag=true; 
    this.card.noteLabels.forEach(list => {
      if (list.id == label.id) {
      this.snackbar.open('Label already exists')
        flag=false;
      }
    });
    if(flag){
      this.service(label)
    }
    this.addLabel=!this.addLabel
  }
  service(label) {
    this.card.noteLabels.push(label);
    if (this.card.id != undefined) {
      this.noteService.addLabelToNote(this.card.id, label.id, '').subscribe(message => {
        this.snackbar.open("Label Added Successfully")
      })
    }
    else
      this.card.labelIdList.push(label.id);
  }
  isSelected(id) {
  }
  openQandA() {
    this.router.navigate(['questionAnswer', this.card.id]);
  }
  onClickedOutside($event){
    this.addLabel = true
  }
  openCheckbox(){
    this.listToggle = !this.listToggle
    this.toggleEvent.emit(this.listToggle);
  }
}
