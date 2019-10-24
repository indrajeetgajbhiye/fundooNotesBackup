import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Label } from '../../Models/model.model';
import { NoteService } from '../../service/note/note.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss']
})
export class LabelDialogComponent implements OnInit {

  labelName: string;
  ArrayOfLabel=[];
  label: Label;
  constructor(public dialogRef: MatDialogRef<LabelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public noteService: NoteService, private snackbar: SnackbarService) { 
      this.ArrayOfLabel = data.data;
    }

  ngOnInit() {
    // this.ArrayOfLabel = this.data;
  }
  clear() {
    this.labelName = ' ';
  }

  addLabel() {
    try {
      if (this.labelName != undefined && this.labelName !== '') {
        let userid = localStorage.getItem('userId');
        let flag = true;
        this.ArrayOfLabel.forEach(element=>{
          if(element.label==this.labelName){
            flag=false;
            console.log("label already present")
            return
          }
        })
        let label = {
          userId: userid,
          label: this.labelName,
          isDeleted: "false"
        }
        if(flag){
          this.noteService.noteLabel(label).subscribe(message => {
            console.log(message);
            this.labelName = '';
            this.ArrayOfLabel.push(message);
          })
          return;
        }
        
       
      }
    }
    catch (error) {
      console.log("Error in add Label" + error);
    };
  }
  deleteLabel(labelid) {
    try {
      this.noteService.deleteLabel(labelid).subscribe(data => {
        this.snackbar.open('Label deleted')
        console.log(data);
        let count = 0;
        this.ArrayOfLabel.forEach(label => {
          if (label.id == labelid) {
            this.ArrayOfLabel.splice(count, 1);
          }
          else
            count++;
        });
      })
    } catch (error) {
      this.snackbar.open("Error in deleting the label");
    }

  }
  edit(label) {
    console.log(label);
    let body = {
      "label": label.label,
      "isDeleted": false,
      "id": label.id,
      "userId": localStorage.getItem('userid')
    }
    this.noteService.updateLabel(label.id, body).subscribe(message => {
      this.snackbar.open("Label Updated");
      console.log(message);
    },
    error=>{
      this.snackbar.open("Error in Updating the label");
    })
  }
  close() {
    this.dialogRef.close();
  }
}
