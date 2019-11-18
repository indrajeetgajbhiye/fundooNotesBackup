import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
    view 
    allNotes:any
    @Input() notes: any=[];
    @Output() pinEvent = new EventEmitter();
    @Input() search: boolean = true;
    searchValue: String;
    innerWidth;
    model: any;
    card: any = {};
    constructor(private noteService: NoteService, private dataService: DataService) { 
        this.innerWidth = window.innerWidth
        if(this.innerWidth<=600){
            this.view = false
        }
        if(this.innerWidth>600){
            this.view=true;
        }
    }
    ngOnInit() {
        this.dataService.currentMessage.subscribe(message => { 
            if(message!='' || message != null){
                this.searchValue = message 
            }});
        this.dataService.currentView.subscribe(message => { this.view = message });
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        if(this.innerWidth<=600){
            this.view=false;
        }
        if(this.innerWidth>600){
            this.view=true;
        }
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
