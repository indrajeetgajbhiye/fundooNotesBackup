import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note/note.service';
import { rating } from 'src/app/Models/model.model';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  public ratingModel: rating;
  constructor(public askService: NoteService) { }

  ngOnInit() {
  }

  rate = 0;
  object;
  count = 0;
  @Input() 
  public set rateMessage(v: any) {
    this.object = v;
    var sum = 0;
    if (v.rate != undefined)
      v.rate.forEach(element => {
        sum += element.rate;
      });
    this.rate = sum / v.rate.length;
  }


  giveRating() {
    this.ratingModel = new rating();
    if (this.count != 2) {
      this.count++;
      return;
    }
    this.ratingModel.rate = JSON.stringify(this.rate);
    this.ratingModel.id = this.object.id;
    this.ratingService(this.ratingModel);

  }

  ratingService(body) {
    this.askService.ratingQuestionAndAnswer(body.id, {
      "rate": body.rate
    }).subscribe(data => {
    }, err => {
    })
  }
}
