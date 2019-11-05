import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  constructor(public askService: NoteService, private snackbar: SnackbarService) { }
  liked = false;
  count = 0;
  likeObject;
  @Input()
  public set likeMessage(v: any) {
    this.likeObject = v;
    this.likeCheck(v);
  }

  likeCheck(v) {
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
        this.snackbar.open("like updated")
      }, err => {
        this.snackbar.open("error in updating like", 'okay')
      })

    } catch (error) {
    }

  }

}
