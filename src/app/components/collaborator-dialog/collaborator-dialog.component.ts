import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from '../../service/note/note.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-collaborator-dialog',
  templateUrl: './collaborator-dialog.component.html',
  styleUrls: ['./collaborator-dialog.component.scss']
})
export class CollaboratorDialogComponent implements OnInit {
  name: string;
  email: string;
  searchResultList;
  collaborator;
  collaborators: any[];
  collaboratorBody;
  constructor(public dialogRef: MatDialogRef<CollaboratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public noteService: NoteService, private snackbar: SnackbarService) { }

  ngOnInit() {
    this.name = localStorage.getItem('firstName');
    this.email = localStorage.getItem('email');
    console.log(this.data.collaborators)
    this.collaborators = this.data.collaborators
    if (this.data['id'] == undefined) {
      if (this.data['collaborators'] == undefined) {
        this.collaborators = [];
      }
    }
  }

  searchlist(data) {
    if (data != '') {
      this.noteService.searchUserList(
        { "searchWord": data }).subscribe(data => {
          console.log(data)
          this.searchResultList = data['data']['details'];
        })
    }
  }
  addCollaborator() {
    try {
      if (this.email !== this.collaboratorBody.email && this.collaboratorBody.email != '') {

        if (this.data['id'] == undefined) {
          this.collaborators.push(this.collaboratorBody);
          this.collaborator = "";
        }
        else {
          this.noteService.addCollaborator(this.data['id'], this.collaboratorBody).subscribe(result => {

            this.collaborators.push(this.collaboratorBody);
            this.collaborator = "";
            this.snackbar.open("Collaborator added successfully")
          })
        }
      }
    } catch (error) {
      this.snackbar.open("Error during adding collaborator",'Retry');
    }
  }
  setCollaborator(userDetails) {
    console.log(userDetails)
    if (this.email !== userDetails.email && userDetails.email != '') {
      this.collaborator = userDetails.email;
      console.log(userDetails);
      this.collaboratorBody = {
        "firstName": userDetails.firstName,
        "lastName": userDetails.lastName,
        "email": userDetails.email,
        "userId": userDetails.userId
      }
    }
  }
  removeCollaborator(collaboratorId) {
    if (this.data['id'] !== undefined) {
      this.noteService.removeCollaborator(this.data['id'], collaboratorId).subscribe(result => {
        this.snackbar.open('Collaborator removed successfully')
      },
      error=>{
        this.snackbar.open('Error in removing Collaborator', 'Retry')
      })
    }
    var count = 0;
    this.collaborators.forEach(collaborator => {
      if (collaborator.userId == collaboratorId) {
        this.collaborators.splice(count, 1);
      }
      else
        count++;
    });
    return;
  }
  cancel() {
    this.dialogRef.close();
  }
}