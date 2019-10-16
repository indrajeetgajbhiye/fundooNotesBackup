import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { DataService } from "../../service/data/data.service";
export interface matdialog {
    title: string;
    description: string;
    color: any;
}
@Component({
    selector: 'app-display-notes',
    templateUrl: './display-notes.component.html',
    styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
    view = true;
    allNotes:any
    @Input() notes: any=[];
    @Output() pinEvent = new EventEmitter();
    @Input() search: boolean = true;
    searchValue: String;
    model: any;
    constructor(private noteService: NoteService, private dataService: DataService) { 
    }
    ngOnInit() {
        this.dataService.currentMessage.subscribe(message => { this.searchValue = message });
        this.notes = this.notes.reverse();
        this.dataService.currentView.subscribe(message => { this.view = message });
    }
    removeEvent($event, card) {
        if ($event) {
            var count = 0;
            this.notes.forEach(note => {
                if (card.id == note.id) {
                    this.notes.splice(count, 1)
                }
                else
                    count++;
            });
        }
        if ($event == 'pin') {
                this.pinEvent.emit(card);
        }
        return;
    }
}
