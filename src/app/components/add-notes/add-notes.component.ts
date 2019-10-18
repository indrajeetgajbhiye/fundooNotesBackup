import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'app-add-notes',
    templateUrl: './add-notes.component.html',
    styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
    flag = true;
    flag2 = false;
    card: any;
 
    show = true;
    checklistOpen = [];
    @Output() newNoteEvent = new EventEmitter();
    constructor(public dialog: MatDialog, private noteService: NoteService) {
    }
    color: string = '#FFFFFF';
    ngOnInit() {
        this.card = new Model();
        // console.log(this.view)
    }
    changePin() {
        this.card.isPined = !this.card.isPined;
    }
    noteTitle = new FormControl('', [Validators.required]);
    noteContent = new FormControl('');
    addNote() {
        this.flag = !this.flag;
        if (this.flag) {
            if (this.noteTitle.value == '') {
                this.card.reminder = [];
                return
            }
            else {
                this.card.title = this.noteTitle.value;
                this.card.description = this.noteContent.value;
                this.card.collaborators = JSON.stringify(this.card.collaborators);
                this.card.collaberators = this.card.collaborators;
                this.card.noteLabels = JSON.stringify(this.card.noteLabels);
                this.card.labelIdList = JSON.stringify(this.card.labelIdList);
                try {
                    this.noteService.noteServiceEncoded('notes/addNotes',this.card).subscribe(data => {
                        let note = data;
                        this.noteTitle.reset();
                        this.noteContent.reset();
                        this.card.color = "#FFFFFF";
                        console.log(note['status']['details']);
                        this.card = new Model();
                        this.card.reminder = [];
                        this.newNoteEvent.emit(note['status']['details']);
                    })
                } catch (error) {
                    console.log(error + "Error in the note service of add note");
                }
            }
        }
    }
    openCollaborator() {
        console.log('collabs')
    }
    removeReminder() {
        this.card.reminder = [];
    }
}
