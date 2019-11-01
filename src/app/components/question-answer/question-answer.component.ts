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
      console.log("this.noteId in ask question================>", this.cardToken);
    })
    console.log(this.cardToken);
    this.getCardDetails();
  }

  getCardDetails() {
    console.log("question",this.question);

    try {
      this.noteService.getNoteDetails(this.cardToken).subscribe(data => {
        console.log('data ', data['data']['data']);
        this.card = data['data']['data'];
        this.title = this.card[0].title;
        this.user = this.card[0].user;
        this.description = this.card[0].description;
        this.question = this.card[0].questionAndAnswerNotes[0];
        console.log("question",this.question);
        this.AnswerArray = this.card[0].questionAndAnswerNotes;
        if (this.card[0].questionAndAnswerNotes[0] != undefined)
          this.parentId = this.card[0].questionAndAnswerNotes[0].id;
        this.AnswerArray.splice(0, 1);
        console.log(this.question);
        this.display = true;
        console.log(this.AnswerArray);
        if (this.AnswerArray != null)
          for (let i = 0; i < this.AnswerArray.length; i++) {
            console.log(this.AnswerArray[i].id, 'Id and parent id', this.AnswerArray[i].parentId);
          }

      }, err => {
        console.log('error ', err);

      })
    } catch (error) {
      console.log('error in getCardDetails in askQuestion ', error);

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
      console.log(this.editorContent, '   data');
      this.QuestionModel = new Question();
      this.QuestionModel.createdDate = new Date();
      this.QuestionModel.like = [];
      this.QuestionModel.rate = [];
      this.QuestionModel.user = this.user;
      this.QuestionModel.message = this.editorContent;
      console.log(this.QuestionModel);
      this.question = this.QuestionModel;
      const obj = {
        message: this.editorContent,
        notesId: this.cardToken
      }
      this.noteService.addQuestionAndAnswer(obj).subscribe(data => {
        console.log(data);
        this.openSnackBar('Question Added successfully', '');
        this.editorContent = '';
      }, err => {
        console.log(err);

      })
    } catch (error) {
      console.log('error in submit method in ask component');

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
    console.log(id);

    this.replyModel = new Reply();
    this.showEditorId = false;
    this.replyModel.message = this.editorContent;
    this.replyModel.id = id;
    if (this.editorContent.length < 10 && this.question != undefined) {
      this.openSnackBar('Not a proper Answer', '');
      this.editorContent = '';
      return;
    }
    console.log(this.replyModel);

    this.replyService(this.replyModel);
  }


  replyService(body) {
    this.noteService.replyQuestionAndAnswer(body.id,{
      "message": body.message
    }).subscribe(data => {
      console.log('data after reply the question', data);
      this.openSnackBar('Thankyou For Your Answer', '');

    }, err => {
      console.log('err after reply ', err);

    })
  }

  setId(index) {
    console.log('data is ', index);
    console.log('id is ', index.id);

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
    console.log(question);

    this.showEditorId = question.id
  }
}
