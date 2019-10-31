import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { SnackbarService } from '../../service/snackbar/snackbar.service';
@Component({
    selector: 'app-delete-icons',
    templateUrl: './delete-icons.component.html',
    styleUrls: ['./delete-icons.component.scss']
})
export class DeleteIconsComponent implements OnInit {
    @Input() card: any;
    @Output() removeEvent = new EventEmitter();
    constructor(private noteService: NoteService, private snackbar: SnackbarService) { }
    ngOnInit() {
    }
    deleteNote(card) {
        this.noteService.deleteNote({
            "isDeleted": true,
            "noteIdList": [card.id]
        }).subscribe(message => {
            this.remove();
            this.snackbar.open('Note Deleted')
        },
        error=>{
            this.snackbar.open('Error deleting note', 'try again')
        });
    }
    remove() {
        this.removeEvent.emit();
    }
    restoreNote() {
        this.noteService.trashNote({
            "isDeleted": false,
            "noteIdList": [this.card.id]
        }).subscribe(data => {
            this.remove();
            this.snackbar.open('Note Restored')
        }, err =>{
            this.snackbar.open('Error in restoring note')
        })
    }
}