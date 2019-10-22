import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { Router } from '@angular/router';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() view;
  @Input() fullIcon;

  /** 
   * @default {object} card to have default value
   */
  @Input()
  card: any = {};

  @Input() search: boolean = true;
  @Output() pinEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();
  searchValue: String;
  model: any;
  // card: any = {};
  isArchived: any;
  isDeleted: any;
  isPined: any;
  description: any;
  title 
  newList
  addCheck
  question
  display=true;
  collaborators: any;
  constructor(public dialog: MatDialog, private router: Router, private noteService: NoteService) { 
    // setTimeout(() => {
    //   console.log("card", this.card)
    // }, 0);
  }
  ngOnInit() {
    this.card;
  }
  show() {
    console.log("this.card", this.card);
    this.description = this.card.description;
    this.title = this.card.title;
    this.isArchived = this.card.isArchived;
    this.isDeleted = this.card.isDeleted;
    this.isPined = this.card.isPined;
  }
  check() {
    if (!this.fullIcon) {
      this.openDialog(this.card);
      this.show();
    }
    return;
  }
  openDialog(card): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      position: { top: '15.5%' },
      data: card,
      panelClass: 'myClass1',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'deleted') {
        this.removeEvent.emit('true');
      }
      else {
        console.log(card.description + " = " + this.description);
        if (card.title != this.title || card.description != this.description) {
          this.model = {
            noteId: card.id,
            title: card.title,
            description: card.description
          }
          this.noteService.noteServiceEncodedPost('notes/updateNotes',this.model).subscribe(message => {

            console.log(message);
          })
        }
        else if (card.isPined != this.isPined) {
          this.updatePin(this.card);
          this.pinEvent.emit(this.card)
        }
        else {
          console.log("changes not needed");
        }
      }
    });
  }
  changePin(card) {
    card.isPined = !card.isPined;
    if (!this.fullIcon)
      this.updatePin(card);
    return
  }

  updatePin(card) {
    this.model = {
      noteIdList: [card.id],
      isPined: card.isPined
    }
    this.noteService.pinUnpinNote(this.model).subscribe(message => {
      console.log(message);
      this.removeEvent.emit('pin');

    })
  }
  removeReminder(id) {
    console.log(id);
    this.noteService.deleteReminder(
      {
        "noteIdList": [id]
      })
      .subscribe(
        (data) => {
          console.log('response:', data);
          this.card.reminder=[]
        },
        error => {
        })
  }
  removeLabelTag(labelId) {
    this.noteService.removeLabelTags(this.card.id, labelId,
      {
        "noteId": this.card.id,
        "lableId": labelId
      })
      .subscribe(data => {
        console.log(data);
        this.remove(labelId);
      })
  }
  removeEvent1($event) {
    this.removeEvent.emit($event)
  }
  remove(labelId) {
    var count = 0;
    this.card.noteLabels.forEach(label => {
      if (labelId == label.id) {
        this.card.noteLabels.splice(count, 1);
      }
      else
        count++;
    });
    return;

  }
  openCollaborator() {
    const dialogRef = this.dialog.open(CollaboratorDialogComponent,{
      panelClass : "myclass",
      height : 'auto',
      width : 'auto',
      data :{
        collaborators : this.card.collaborators,
        id: this.card.id
      }
    })
  }
  addList() {
    console.log("add list")
  }
  openQandA() {
    this.router.navigate(['questionAnswer'])
  }
  openLabelNotes(labelName) {
    this.router.navigate(['label', labelName]);
    this.removeEvent1(false);
  }
}
