import { Component, OnInit, OnChanges } from '@angular/core';
import { Location }from '@angular/common'
import { NoteService } from '../../service/note/note.service'
import { DataService } from 'src/app/service/data/data.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnChanges {
    pinNotes = [];
    unPinNotes = [];
    cardData = [];
    constructor(private service: NoteService, private dataService : DataService, public router: Router, private location: Location) { }
    ngOnInit() {
        this.getAllCard();
    }
    getNewNote($event) {
        this.cardData.push($event);
        if ($event["isArchived"] == false) {
            if ($event["isPined"] == false) {
                this.unPinNotes.reverse()
                this.unPinNotes.push($event);
                this.unPinNotes.reverse();
            }
            else{
                this.pinNotes.reverse();
                this.pinNotes.push($event);
                this.pinNotes.reverse();
            }

                
        }
    }
    printCards(){
        this.pinNotes;
        this.unPinNotes;
    }
    ngOnChanges() {
        console.log("Onchanges");
    }
    getAllCard() {
        this.service.noteServiceGetData('notes/getNotesList').subscribe(data => {
            console.log(data)
            this.cardData = data["data"].data
            console.log("carddata", this.cardData)
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
