import { Component, OnInit } from '@angular/core';

import { CommentPost } from '../../models/comment-post';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment: CommentPost = {
    author: '',
    message: '',
    timestamp: null
  };

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
  }

  /**
   * Chama o serviço para postar o comentário e limpa os camposd entrada.
   */
  onSubmit(): void {
    if (this.comment.author !== '' && this.comment.message !== '') {
      this.db.postComment(this.comment).then(() => {
        this.db.getComments();
        this.comment.author = '';
        this.comment.message = '';
      });
    }
  }

}
