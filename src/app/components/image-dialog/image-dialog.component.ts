import { Component, OnInit, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../service/data/data.service';
import { NoteService } from '../../service/note/note.service';
import { environment } from '../../../environments/environment'
import { SnackbarService } from '../../service/snackbar/snackbar.service';
@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  imageBefore = environment.profileUrl+"/"+ localStorage.getItem("imageUrl")
  imageChangedEvent: any = null;
  croppedImage: any = null;
  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data, public dataService: DataService, public noteService: NoteService,
  private snackbar: SnackbarService) { }
  ngOnInit() {
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event:ImageCroppedEvent) {
    this.croppedImage = event.file;
  }
  imageLoaded() {
  
  }
  loadImageFailed() {
    this.snackbar.open("Image loading failed")
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  setimage() {
    const uploadData = new FormData();
    uploadData.append('file', this.croppedImage)
    this.noteService.uploadImage(uploadData).subscribe(data => {
      localStorage.setItem('imageUrl', data['status'].imageUrl)
      this.snackbar.open("Profile image chnaged")
      this.dataService.changeImage(true)
      this.dialogRef.close("imageChange")
    })
  }
}
