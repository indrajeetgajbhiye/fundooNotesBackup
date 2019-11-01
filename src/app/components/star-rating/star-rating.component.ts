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
  //  @Input() rateMessage:any
  constructor(public askService: NoteService) { }

  ngOnInit() {
    // this.rate=this.rateMessage.rate.length;
    // console.log(" rate message",this.rateMessage);
    // console.log('ratemsg', this.rateMessage)
  }

  rate = 0;
  object;
  count = 0;
  @Input() 
  public set rateMessage(v: any) {
    console.log('message in rate', v);
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
    console.log("hello");
    if (this.count != 2) {
      this.count++;
      return;
    }
    this.ratingModel.rate = JSON.stringify(this.rate);


    this.ratingModel.id = this.object.id;
    this.ratingService(this.ratingModel);

  }

  /**
   * @description this method is for call rate service 
   * @returns body
   */
  ratingService(body) {
    this.askService.ratingQuestionAndAnswer(body.id, {
      "rate": body.rate
    }).subscribe(data => {
      console.log('data after rating', data);

    }, err => {
      console.log('error after rating ', err);

    })
  }


}
