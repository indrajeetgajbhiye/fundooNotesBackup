import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { environment } from '../../../../src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  card = new Model();
  private qID;
  replyShow:boolean=false;
  image;
  private open = true;
  show
  rate = 2
  cardId: any
  question: string = '';
  sub
  questions
  replyCount;
  private down = true;
  private rID;
  public editorContent: string ;
  qA;
  constructor(private _location: Location,private routes: ActivatedRoute, public router: Router, public noteService: NoteService) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      this.cardId = params['cardId'];
    });
    this.noteService.getNoteDetails(this.cardId).subscribe(result => {
      this.card = result['data']['data'][0];
      console.log('card===============', this.card.user.imageUrl)
      this.qA = result['data']['data'][0].questionAndAnswerNotes;
      this.image = environment.profileUrl+'/'+this.card.user.imageUrl;
      this.show = result['data']['data'][0].questionAndAnswerNotes.length;
      if (this.show) {
        this.questions = result['data']['data'][0].questionAndAnswerNotes[0];
        this.rate = this.questions.rate['0'].rate;
        console.log("questions", this.questions)
      }
    })
    
  }
  close() {
    this._location.back();
  }
  addQuestion() {
    if (this.question != '') {
      console.log(this.question)
      this.show = !this.show;
      let body = {
        "message": this.question,
        "notesId": this.cardId
      }
      this.noteService.addQuestionAndAnswer(body).subscribe(result => {
        console.log(result);
      })
    }
  }
  viewReplies(questAns) {
    this.replyCount = 0;
    for (let i = 0; i < this.qA.length; i++) {
      if (questAns.id == this.qA[i].parentId) {
        this.replyCount++
      }
    }
    return this.replyCount;
  }
  rating(data, event) {

    let reqBody = {
      "rate": event
    }
    this.noteService.ratingQuestionAndAnswer(data.id, reqBody).subscribe(result => {
      // this.getNote();
      console.log("done", +result);
    })
  }
  averageRating(rateArray) {
    let value = 0;
    if (rateArray.length != 0) {
      for (let i = 0; i < rateArray.length; i++) {
        value += rateArray[i].rate
      }
      let avgRate = value / rateArray.length;

      return avgRate.toFixed(1);
    }
  }
  addRemoveLike(){
    if(this.questions.like.length == 0){
      this.noteService.likeQuestionAndAnswer(this.questions.id, true).subscribe(data=>{
        console.log(data);
      })
    }
    else{
      this.noteService.likeQuestionAndAnswer(this.questions.id, false)
    }
  }
  checkRating(rateArray) {
    this.rate = 0;
    if (rateArray.length == 0) {
      return true;
    }
    for (let i = 0; i < rateArray.length; i++) {
      if (rateArray[i].userId == localStorage.getItem('userId')) {
        this.rate = rateArray[i].rate;
      }
    }
    return true;
  }
  replyTo() {
    let replyRequest = {
      "message": this.editorContent,
    }
    this.noteService.replyQuestionAndAnswer(this.qID, replyRequest).subscribe(response => {
      if(response){
        console.log('done')
      }
    })
  }
  replyDown(replyId) {
    this.down = !this.down;
    this.rID = replyId;
  }
  answer(id) {
    this.replyShow = !this.replyShow;
    this.qID = id;
  }
}
