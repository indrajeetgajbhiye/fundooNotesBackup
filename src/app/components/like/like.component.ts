import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  constructor(public askService: NoteService) { }
  liked = false;
  count = 0;
  likeObject;
  @Input()
  public set likeMessage(v: any) {
    console.log(v);
    this.likeObject = v;
    this.likeCheck(v);
  }

  likeCheck(v) {
    console.log(v);

    for (let i = 0; i < v.like.length; i++) {
      if (v.userId == v.like[i].userId && v.like[i].like) {
        this.liked = true;
      }
      if (v.like[i].like) {

        this.count++;
      }

    }
  }

  ngOnInit() {
  }

  like() {
    this.liked = true;
    this.likeDislikeService(this.likeObject.id, true);
    this.count++;

  }

  unlike() {
    this.liked = false;
    this.likeDislikeService(this.likeObject.id, false);
    this.count--;
  }

  likeDislikeService(userId, value) {
    try {
      const body = {
        id: userId,
        like: value
      }

      this.askService.likeQuestionAndAnswer(userId, body).subscribe(data => {
        console.log('data after like dislike', data);

      }, err => {
        console.log('error after like dislike', err);

      })

    } catch (error) {
      console.log('error in like component in likeDislike method');

    }

  }

}
