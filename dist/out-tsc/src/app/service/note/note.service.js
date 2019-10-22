var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
var NoteService = /** @class */ (function () {
    function NoteService(service) {
        this.service = service;
    }
    NoteService.prototype.noteServiceEncoded = function (url, data) {
        return this.service.postUrlEncoded(url, data);
    };
    NoteService.prototype.noteServiceGetData = function (url) {
        return this.service.httpGetData(url);
    };
    NoteService.prototype.noteServiceEncodedPost = function (url, data) {
        return this.service.encodedPostForm(url, data);
    };
    NoteService.prototype.noteServiceJSON = function (url, data) {
        return this.service.postJSON(url, data);
    };
    NoteService.prototype.archiveNote = function (data) {
        return this.service.postJSON('notes/archiveNotes', data);
    };
    NoteService.prototype.archiveNotes = function () {
        return this.service.httpGetData('notes/getArchiveNotesList');
    };
    NoteService.prototype.trashNotes = function () {
        return this.service.httpGetData('notes/getTrashNotesList');
    };
    NoteService.prototype.unarchiveNote = function (data) {
        return this.service.postJSON('notes/archiveNotes', data);
    };
    NoteService.prototype.pinUnpinNote = function (data) {
        return this.service.postJSON('notes/pinUnpinNotes', data);
    };
    NoteService.prototype.noteLabel = function (data) {
        return this.service.postJSON('/noteLabels', data);
    };
    NoteService.prototype.getLabels = function () {
        return this.service.httpGetData('noteLabels/getNoteLabelList');
    };
    NoteService.prototype.deleteLabel = function (data) {
        return this.service.encodedPostFormDelete('noteLabels/' + data + '/deleteNoteLabel');
    };
    NoteService.prototype.addUpdateReminderNote = function (data) {
        return this.service.postJSON('notes/addUpdateReminderNotes', data);
    };
    NoteService.prototype.searchUserList = function (data) {
        return this.service.postJSON('user/searchUserList', data);
    };
    NoteService.prototype.updateLabel = function (labelId, RequestBody) {
        return this.service.postJSON('/noteLabels/' + labelId + '/updateNoteLabel', RequestBody);
    };
    NoteService.prototype.deleteReminder = function (body) {
        return this.service.postJSON('notes/removeReminderNotes', body);
    };
    NoteService.prototype.getReminderNotes = function () {
        return this.service.httpGetData('notes/getReminderNotesList');
    };
    NoteService.prototype.addLabelToNote = function (noteId, labelId, body) {
        return this.service.postJSON('notes/' + noteId + '/addLabelToNotes/' + labelId + '/add', body);
    };
    NoteService.prototype.getNotesListByLabel = function (labelName) {
        return this.service.postJSON('notes/getNotesListByLabel/' + labelName, '');
    };
    NoteService.prototype.removeLabelTags = function (id, labelId, body) {
        return this.service.postJSON('/notes/' + id + '/addLabelToNotes/' + labelId + '/remove', body);
    };
    NoteService.prototype.getNoteDetails = function (cardId) {
        return this.service.httpGetData('notes/getNotesDetail/' + cardId);
    };
    // getServiceOfUser() {
    //   return this.service.getConfig('user/service')
    // }
    NoteService.prototype.uploadImage = function (data) {
        console.log("in note service", data);
        return this.service.postImage('user/uploadProfileImage', data);
    };
    NoteService.prototype.addCollaborator = function (noteId, data) {
        return this.service.postJSON('notes/' + noteId + '/AddcollaboratorsNotes', data);
    };
    NoteService.prototype.removeCollaborator = function (noteId, collaboratorId) {
        return this.service.encodedPostFormDelete('notes/' + noteId + '/removeCollaboratorsNotes/' + collaboratorId);
    };
    NoteService.prototype.addQuestionAndAnswer = function (body) {
        return this.service.postJSON('/questionAndAnswerNotes/addQuestionAndAnswer', body);
    };
    NoteService.prototype.ratingQuestionAndAnswer = function (id, data) {
        return this.service.postJSON('questionAndAnswerNotes/rate/' + id, data);
    };
    NoteService.prototype.replyQuestionAndAnswer = function (noteId, data) {
        return this.service.postJSON('questionAndAnswerNotes/reply/' + noteId, data);
    };
    NoteService.prototype.likeQuestionAndAnswer = function (id, data) {
        return this.service.postJSON('questionAndAnswerNotes/like/' + id, data);
    };
    NoteService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpService])
    ], NoteService);
    return NoteService;
}());
export { NoteService };
//# sourceMappingURL=note.service.js.map