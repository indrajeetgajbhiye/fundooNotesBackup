var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
var QuestionAnswerComponent = /** @class */ (function () {
    function QuestionAnswerComponent(_location, routes, router, noteService) {
        this._location = _location;
        this.routes = routes;
        this.router = router;
        this.noteService = noteService;
        this.card = new Model();
        this.replyShow = false;
        this.open = true;
        this.rate = 2;
        this.question = '';
        this.down = true;
    }
    QuestionAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routes.params.subscribe(function (params) {
            _this.cardId = params['cardId'];
        });
        this.noteService.getNoteDetails(this.cardId).subscribe(function (result) {
            _this.card = result['data']['data'][0];
            _this.qA = result['data']['data'][0].questionAndAnswerNotes;
            console.log(_this.card);
            console.log(_this.card.questionAndAnswerNotes.length);
            _this.show = result['data']['data'][0].questionAndAnswerNotes.length;
            if (_this.show != 0) {
                _this.questions = result['data']['data'][0].questionAndAnswerNotes[0];
            }
        });
        this.image = environment.profileUrl;
    };
    QuestionAnswerComponent.prototype.close = function () {
        this._location.back();
    };
    QuestionAnswerComponent.prototype.addQuestion = function () {
        if (this.question != '') {
            console.log(this.question);
            this.show = !this.show;
            var body = {
                "message": this.question,
                "notesId": this.cardId
            };
            this.noteService.addQuestionAndAnswer(body).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    QuestionAnswerComponent.prototype.viewReplies = function (questAns) {
        this.replyCount = 0;
        for (var i = 0; i < this.qA.length; i++) {
            if (questAns.id == this.qA[i].parentId) {
                this.replyCount++;
            }
        }
        return this.replyCount;
    };
    QuestionAnswerComponent.prototype.rating = function (data, event) {
        var reqBody = {
            "rate": event
        };
        this.noteService.ratingQuestionAndAnswer(data.id, reqBody).subscribe(function (result) {
            // this.getNote();
            console.log("done", +result);
        });
    };
    QuestionAnswerComponent.prototype.averageRating = function (rateArray) {
        // this.value = 0;
        // if (rateArray.length != 0) {
        //   for (let i = 0; i < rateArray.length; i++) {
        //     this.value += rateArray[i].rate
        //   }
        //   this.avgRate = this.value / rateArray.length;
        //   return this.avgRate.toFixed(1);
        // }
    };
    QuestionAnswerComponent.prototype.checkRating = function (rateArray) {
        this.rate = 0;
        if (rateArray.length == 0) {
            return true;
        }
        for (var i = 0; i < rateArray.length; i++) {
            if (rateArray[i].userId == localStorage.getItem('userId')) {
                this.rate = rateArray[i].rate;
            }
        }
        return true;
    };
    QuestionAnswerComponent.prototype.replyTo = function () {
        var replyRequest = {
            "message": this.editorContent,
        };
        this.noteService.replyQuestionAndAnswer(this.qID, replyRequest).subscribe(function (response) {
            // this.getNote();
        });
    };
    QuestionAnswerComponent.prototype.replyDown = function (replyId) {
        this.down = !this.down;
        this.rID = replyId;
    };
    QuestionAnswerComponent.prototype.answer = function (id) {
        this.replyShow = !this.replyShow;
        this.qID = id;
    };
    QuestionAnswerComponent = __decorate([
        Component({
            selector: 'app-question-answer',
            templateUrl: './question-answer.component.html',
            styleUrls: ['./question-answer.component.scss']
        }),
        __metadata("design:paramtypes", [Location, ActivatedRoute, Router, NoteService])
    ], QuestionAnswerComponent);
    return QuestionAnswerComponent;
}());
export { QuestionAnswerComponent };
//# sourceMappingURL=question-answer.component.js.map