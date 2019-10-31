import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { environment } from '../../../../src/environments/environment';
import { Location } from '@angular/common';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

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
  firstName: String;
  lastName: String;
  modifiedDate: Date;
  like: boolean = false;
  constructor(private _location: Location,private routes: ActivatedRoute, public router: Router, public noteService: NoteService,
    private snackbar : SnackbarService) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      this.cardId = params['cardId'];
    });
    this.noteService.getNoteDetails(this.cardId).subscribe(result => {
      this.card = result['data']['data'][0];
      this.qA = result['data']['data'][0].questionAndAnswerNotes;
      this.image = environment.profileUrl+'/'+this.card.user.imageUrl;
      this.show = result['data']['data'][0].questionAndAnswerNotes.length;
      this.firstName = this.card.user.firstName;
      this.lastName = this.card.user.lastName;
      this.modifiedDate = this.card.modifiedDate;
      if (this.show) {
        this.questions = result['data']['data'][0].questionAndAnswerNotes[0];
        this.rate = this.questions.rate['0'].rate;
      }
    })
    
  }
  close() {
    this._location.back();
  }
  addQuestion() {
    if (this.question != '') {
      this.show = !this.show;
      let body = {
        "message": this.question,
        "notesId": this.cardId
      }
      this.noteService.addQuestionAndAnswer(body).subscribe(result => {
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
      this.snackbar.open("rating given")
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
    if(this.questions.like){
      this.like= !this.like;
      this.noteService.likeQuestionAndAnswer(this.questions.id, {"like":this.like}).subscribe(data=>{
      })
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
  likeDislike(reply){
      this.like= !this.like;
      this.noteService.likeQuestionAndAnswer(reply.id, {"like":this.like}).subscribe(data=>{
      })
 
  }
}
