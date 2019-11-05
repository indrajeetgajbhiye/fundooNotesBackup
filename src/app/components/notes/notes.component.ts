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
export class NotesComponent implements OnInit {
    pinNotes = [];
    unPinNotes = [];
    cardData = [];
    public loading = false;
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
    getAllCard() {
        this.loading = true;
        this.service.getnotes().subscribe(data => {
            this.loading = false;
            this.cardData = data["data"].data
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
                else{
                    this.pinNotes.push(element);
                    this.pinNotes.reverse();
                }
            }
        });
    }
}
