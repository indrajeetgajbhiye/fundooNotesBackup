import { Component, OnInit, Input, PipeTransform } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { DataService } from '../../service/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() keyword;
  cardData = [];
  destroy: Subject<boolean> = new Subject<boolean>();
  loading: boolean;
  constructor(private noteService: NoteService, private dataService: DataService) { }
  ngOnInit() {
    this.getAllCard();
  }
  getAllCard() {
    this.loading = true;
    this.noteService.getnotes().pipe(takeUntil(this.destroy))
      .subscribe(data => {
        for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
          if(data["data"]['data'][i].isDeleted==false){
            this.cardData.push(data["data"]['data'][i])
          }
        }
        this.loading = false;
      }, error => {
        console.log(error);
      })
  }
  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}