import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Label } from '../../Models/model.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  labelDefault: Label = {
    id: '',
    label: '',
    isDeleted: false,
    userId: ''
  }
  imageUrl : string
  private messageSource = new BehaviorSubject('searching');
  public currentMessage = this.messageSource.asObservable();

  private labelNotes = new BehaviorSubject<Label>(this.labelDefault);
  public currentLabels = this.labelNotes.asObservable();

  private view = new BehaviorSubject(true);
  public currentView = this.view.asObservable();

  private view1 = new BehaviorSubject(true);
  public currentView1= this.view1.asObservable();

  private changephoto = new BehaviorSubject(true);
  currentPhoto = this.changephoto.asObservable();
  
  private addPhoto = new BehaviorSubject(this.imageUrl);
  recievedPhoto  = this.addPhoto.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  updateLabels(message: Label) {
    this.labelNotes.next(message)
  }
  changeView(message: boolean) {
    this.view.next(message);
  }
  changeView1(message:any) {
    this.view1.next(message);
  }
  changeImage(message: boolean) {
    this.changephoto.next(message);
  }
  addImage(message: string){
    this.addPhoto.next(message)
  }
}
