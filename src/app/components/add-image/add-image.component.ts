import { Component, OnInit, Inject } from '@angular/core';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from 'src/app/service/data/data.service';
import { NoteService } from 'src/app/service/note/note.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  imageBefore
  imageChangedEvent: any = null;
  croppedImage: any = null;
  image
  constructor(public dialogRef: MatDialogRef<AddImageComponent>, @Inject(MAT_DIALOG_DATA) public data, public dataService: DataService, public noteService: NoteService,
  private snackbar: SnackbarService) { }
  ngOnInit() {
    this.imageBefore= environment.profileUrl+"/"+this.data.imageUrl.replace('client', '')
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  setimage() {
    const uploadData = new FormData();
    uploadData.append('file', this.imageChangedEvent.target.files[0])
    uploadData.append('noteId', this.data.id)
    uploadData.append('title', this.data.title)
    uploadData.append('description', this.data.description)
    this.noteService.updateImageNote(uploadData).subscribe(data => {
      this.snackbar.open("Image added successfully")
      this.dataService.changeImage(true)
      this.dialogRef.close("imageChange")
    })
    uploadData.delete("file")
  }
}
