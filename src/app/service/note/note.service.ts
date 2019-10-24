import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private service: HttpService) { }
  noteServiceEncoded(url, data) {
    return this.service.postUrlEncoded(url, data)
  }
  noteServiceGetData(url) {
    return this.service.httpGetData(url);
  }
  noteServiceEncodedPost(url, data) {
    return this.service.encodedPostForm(url, data)
  }
  noteServiceJSON(url, data) {
    return this.service.postJSON(url, data)
  }
  archiveNote(data) {
    return this.service.postJSON('notes/archiveNotes', data)
  }
  archiveNotes() {
    return this.service.httpGetData('notes/getArchiveNotesList')
  }
  trashNotes() {
    return this.service.httpGetData('notes/getTrashNotesList')
  }
  unarchiveNote(data) {
    return this.service.postJSON('notes/archiveNotes', data);
  }
  pinUnpinNote(data) {
    return this.service.postJSON('notes/pinUnpinNotes', data);
  }
  noteLabel(data) {
    return this.service.postJSON('/noteLabels', data);
  }
  getLabels() {
    return this.service.httpGetData('noteLabels/getNoteLabelList');
  }
  deleteLabel(data) {
    return this.service.encodedPostFormDelete('noteLabels/' + data + '/deleteNoteLabel')
  }
  addUpdateReminderNote(data) {
    return this.service.postJSON('notes/addUpdateReminderNotes', data);
  }
  searchUserList(data) {
    return this.service.postJSON('user/searchUserList', data)
  }
  updateLabel(labelId, RequestBody) {
    return this.service.postJSON('/noteLabels/' + labelId + '/updateNoteLabel', RequestBody)
  }
  deleteReminder(body) {
    return this.service.postJSON('notes/removeReminderNotes', body)
  }
  getReminderNotes() {
    return this.service.httpGetData('notes/getReminderNotesList');
  }
  addLabelToNote(noteId, labelId, body) {
    return this.service.postJSON('notes/' + noteId + '/addLabelToNotes/' + labelId + '/add', body)
  }
  getNotesListByLabel(labelName) {
    return this.service.postJSON('notes/getNotesListByLabel/' + labelName, '');
  }
  removeLabelTags(id, labelId, body) {
    return this.service.postJSON('/notes/' + id + '/addLabelToNotes/' + labelId + '/remove', body);
  }
  getNoteDetails(cardId) {
    return this.service.httpGetData('notes/getNotesDetail/' + cardId);
  }

  // getServiceOfUser() {
  //   return this.service.getConfig('user/service')
  // }
  uploadImage(data) {
    console.log("in note service", data);
    
    return this.service.postImage('user/uploadProfileImage', data)
  }
  addCollaborator(noteId, data) {
    return this.service.postJSON('notes/' + noteId + '/AddcollaboratorsNotes', data)
  }
  removeCollaborator(noteId, collaboratorId) {
    return this.service.encodedPostFormDelete('notes/' + noteId + '/removeCollaboratorsNotes/' + collaboratorId)
  }
  addQuestionAndAnswer(body) {
    return this.service.postJSON('questionAndAnswerNotes/addQuestionAndAnswer', body)
  }
  ratingQuestionAndAnswer(id, data) {
    return this.service.postJSON('questionAndAnswerNotes/rate/' + id, data)
  }
  replyQuestionAndAnswer(noteId, data) {
    return this.service.postJSON('questionAndAnswerNotes/reply/' + noteId, data)
  }
  likeQuestionAndAnswer(id, data) {
    return this.service.postJSON('questionAndAnswerNotes/like/' + id, data)
  }
}
