import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
import { DataService } from 'src/app/service/data/data.service';
@Component({
  selector: 'app-mansonry',
  templateUrl: './mansonry.component.html',
  styleUrls: ['./mansonry.component.scss']
})
export class MansonryComponent implements OnInit {
  cardData=[];
  constructor(private service: NoteService, private dataService : DataService) {
    this.getAllCard();
   }


  ngOnInit() {
  }
  getAllCard() {
    this.service.noteServiceGetData('notes/getNotesList').subscribe(data => {
        console.log(data)
        this.cardData = data["data"].data;
        
      
    })
}

}
