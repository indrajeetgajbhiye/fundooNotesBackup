import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Question, Reply } from '../../Models/model.model';
import { environment } from '../../../../src/environments/environment';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { DataService } from 'src/app/service/data/data.service'

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  public QuestionModel: Question;
  public replyModel: Reply;
  constructor(public route: Router, public activeRoute: ActivatedRoute,
    public noteService: NoteService,
    private snackBar: SnackbarService, private dataservice: DataService) { }

  cardToken
  title = '';
  description = '';
  card: any;
  editorContent: any;
  secondId = '';
  questions = ''
  AnswerArray = [];
  question: any;
  display = false;
  user: any;
  rate = 5;
  htmlField: any;
  parentId = ''
  sidnav = false;
  likeCount = 3;
  showId = '';
  showFirstReply = false;
  showSecondReply = false;
  showSecondId = '';
  showEditorId = false;
  imgUrl = environment.profileUrl
  mainClass = {
    sideNavOpen: this.sidnav,
    sideNavClose: !this.sidnav
  }
  ngOnInit() {


    this.activeRoute.params.subscribe((params: Params) => {
      this.cardToken = params['cardId'];
    })
    this.getCardDetails();
  }

  getCardDetails() {
    try {
      this.noteService.getNoteDetails(this.cardToken).subscribe(data => {
        this.card = data['data']['data'];
        this.title = this.card[0].title;
        this.user = this.card[0].user;
        this.description = this.card[0].description;
        this.question = this.card[0].questionAndAnswerNotes[0];
        this.AnswerArray = this.card[0].questionAndAnswerNotes;
        if (this.card[0].questionAndAnswerNotes[0] != undefined)
          this.parentId = this.card[0].questionAndAnswerNotes[0].id;
        this.AnswerArray.splice(0, 1);
        this.display = true;
        if (this.AnswerArray != null)
          for (let i = 0; i < this.AnswerArray.length; i++) {
          }

      }, err => {
      })
    } catch (error) {
    }

  }
  Askquestion() {
    if (this.editorContent == '') {
      return;
    }
    else {
      this.submit();
    }
  }

  submit() {
    try {
      this.showEditorId = false;
      this.QuestionModel = new Question();
      this.QuestionModel.createdDate = new Date();
      this.QuestionModel.like = [];
      this.QuestionModel.rate = [];
      this.QuestionModel.user = this.user;
      this.QuestionModel.message = this.editorContent;
      this.question = this.QuestionModel;
      this.question.notesId = this.cardToken
      this.noteService.addQuestionAndAnswer(this.question).subscribe(data => {
        this.openSnackBar('Question Added successfully', '');
        this.editorContent = '';
      }, err => {
      })
    } catch (error) {
    }
  }
 
  close() {
    this.route.navigate(['../dashboard'])
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,
    );
  }

  replyIt(id) {
    this.replyModel = new Reply();
    this.showEditorId = false;
    this.replyModel.message = this.editorContent;
    this.replyModel.id = id;
    if (this.editorContent.length < 10 && this.question != undefined) {
      this.openSnackBar('Not a proper Answer', '');
      this.editorContent = '';
      return;
    }
    this.replyService(this.replyModel);
  }


  replyService(body) {
    this.noteService.replyQuestionAndAnswer(body.id,{
      "message": body.message
    }).subscribe(data => {
      this.openSnackBar('Thankyou For Your Answer', '');
    }, err => {
    })
  }

  setId(index) {
    this.showId = index.id;
  }
  setSecondId(index) {
    this.secondId = index.id;
  }
  showSecondReplyMethod(id) {
    this.showSecondReply = true;
    this.showSecondId = id;
  }
  hideSecondReplyMethod(id) {
    if (this.showSecondId == id) {
      this.showSecondId = '';
    }
  }
  showEditor(question) {
    this.showEditorId = question.id
  }
}
