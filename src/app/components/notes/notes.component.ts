import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
import { DataService } from 'src/app/service/data/data.service';
@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnChanges {
    pinNotes = [];
    unPinNotes = [];
    cardData = [];
    constructor(private service: NoteService, private dataService : DataService) { }
    ngOnInit() {
        this.getAllCard();
    }
    getNewNote($event) {
        this.cardData.push($event);
        if ($event["isArchived"] == false) {
            if ($event["isPined"] == false) {
                this.unPinNotes.push($event);
                this.unPinNotes.reverse();
            }
            else
                this.pinNotes.push($event);
                this.pinNotes.reverse();
        }
    }
    ngOnChanges() {
        console.log("Onchanges");
    }
    getAllCard() {
        this.service.noteServiceGetData('notes/getNotesList').subscribe(data => {
            console.log(data)
            this.cardData = data["data"].data;
            this.cardData;
            this.check();
            return
        })
    }
    check() {
        this.cardData.forEach(element => {
            if (element["isDeleted"] == false && element["isArchived"] == false) {
                if (element["isPined"] == false) {
                    this.unPinNotes.push(element);
                    this.unPinNotes.reverse();
                }
                else
                    this.pinNotes.push(element);
                    this.pinNotes.reverse();
            }
        });
    }
}
