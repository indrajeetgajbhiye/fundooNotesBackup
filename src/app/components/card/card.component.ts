import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { Router } from '@angular/router';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component'
import { SnackbarService } from '../../service/snackbar/snackbar.service';
import { environment } from 'src/environments/environment.prod';
import { DataService } from 'src/app/service/data/data.service';
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
  @Input() card: any = {};

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
  imageUrl: any;
  img 
  loading: boolean= false
  image: any;
  listToggle 
  constructor(public dialog: MatDialog, private router: Router, private noteService: NoteService, private snackbar : SnackbarService , private dataService: DataService) { 
  }
  ngOnInit() {
    this.loading=true;
    if(this.card.questionAndAnswerNotes.length!>0){
      this.question=this.card.questionAndAnswerNotes[0].message
    }
    this.img = environment.profileUrl+(this.card.imageUrl.replace('client',''))
    console.log("card", this.card)
    console.log('jhsjkh',this.img);
    
    this.dataService.currentPhoto.subscribe(message => {
      this.image = message
      this.loading=false;
  })
  console.log("view", this.view)
  }
  show() {
    this.description = this.card.description;
    this.title = this.card.title;
    this.isArchived = this.card.isArchived;
    this.isDeleted = this.card.isDeleted;
    this.isPined = this.card.isPined;
    this.imageUrl = this.card.imageUrl.replace('client','')
    this.img = environment.profileUrl+this.imageUrl
    console.log('imaghe', this.img)
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
      height : 'auto',
      width : 'auto',
      data: card,
      maxHeight: '90vh',
      panelClass: 'myClass1',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'deleted') {
        this.removeEvent.emit('true');
      }
      else {
        if (card.title != this.title || card.description != this.description) {
          this.model = {
            noteId: card.id,
            title: card.title,
            description: card.description,
            imageUrl : environment.profileUrl + this.card.imageUrl.replace('client', '')
          }
          this.noteService.updatenote(this.model).subscribe(message => {
            this.snackbar.open('Note updated successfully')
          },
          error=>{
            this.snackbar.open('Error updating note', 'Retry')
          })
        }
        else if (card.isPined != this.isPined) {
          this.updatePin(this.card);
          this.pinEvent.emit(this.card)
        }
        else {
          // console.log("changes not needed");
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
      this.snackbar.open('Pin changed','');
      this.removeEvent.emit('pin');
    },
    error=>{
      this.snackbar.open('Error changing pin')
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
          this.snackbar.open('Reminder Deleted')
          this.card.reminder=[]
        },
        error => {
          this.snackbar.open('Error deleting reminder', 'Retry')
        })
  }
  removeLabelTag(labelId) {
    this.noteService.removeLabelTags(this.card.id, labelId,
      {
        "noteId": this.card.id,
        "lableId": labelId
      })
      .subscribe(data => {
        this.remove(labelId);
        this.snackbar.open('Label Removed')
      },
      error=>{
        this.snackbar.open('Error removing label', 'retry')
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
    this.router.navigate(['questionAnswer', this.card.id])
  }
  openLabelNotes(labelName) {
    this.router.navigate(['label', labelName]);
    this.removeEvent1(false);
  }
  addCheckList(list){
    console.log("lost", list)
    list.status="open"
    this.noteService.checklistUpdate(this.card.id, list.id, list).subscribe(success=>{
      console.log("success",success)
    })
  }
  removeCheckList(list){
    console.log("list", list)
    list.status="close"
    this.noteService.checklistUpdate(this.card.id, list.id, list).subscribe(success=>{
      console.log("success",success)
    })
  }
  toggle($event){
    console.log("event", $event)
    this.listToggle = $event;
  }
  addlist(event, list){
    console.log("event", event);
    console.log("list", list)
    status="open"
    this.noteService.checklistAdd(this.card.id, {
      "itemName":list,
    "status":"open"}).subscribe(data=>{
      console.log("data", data)
      
    })
  }
}
