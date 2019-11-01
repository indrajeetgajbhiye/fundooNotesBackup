import { Component, OnInit, Inject } from '@angular/core';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from 'src/app/service/data/data.service';
import { NoteService } from 'src/app/service/note/note.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

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
    console.log("data", this.data);
    this.imageBefore= environment.profileUrl+"/"+this.data.imageUrl.replace('client', '')
    console.log("hajhajh",this.imageBefore)
  }
  fileChangeEvent(event: any): void {
    console.log(event, "FLE CHNAGE");
    this.imageChangedEvent = event;
  }
  imageCropped(event:ImageCroppedEvent) {
    console.log('Event', event.file)
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
    console.log("croppeed image", this.croppedImage)
    uploadData.append('file', this.croppedImage)
    uploadData.append('noteId', this.data.id)
    uploadData.append('title', this.data.title)
    uploadData.append('description', this.data.description)
    this.noteService.updateImageNote(uploadData).subscribe(data => {
      this.snackbar.open("Profile image chnaged")
      this.dataService.changeImage(true)
      this.dialogRef.close("imageChange")
    })
  }
}
