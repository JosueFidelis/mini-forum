import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { firestore } from 'firebase';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { CommentPost } from '../models/comment-post';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  commentsCollection: AngularFirestoreCollection<CommentPost>;
  commentsObservable: Observable<CommentPost[]>;
  comments: CommentPost[];

  constructor(public db: AngularFirestore) {
    this.commentsCollection = this.db.collection('Comments', ref => ref.orderBy('timestamp', 'desc'));

    this.commentsObservable = this.commentsCollection.valueChanges() as Observable<CommentPost[]>;
   }

   /**
    * Atualiza a lista de comentários ao ser chamada.
    */
  getComments(): void {
    this.commentsObservable.pipe(first()).subscribe( commentsList => {
      this.comments = commentsList;
    });
  }

  /**
   * Envia para o servidor o comentário a ser postado.
   */
  async postComment(comment: CommentPost): Promise<void> {
    comment.timestamp = firestore.FieldValue.serverTimestamp();
    await this.commentsCollection.add(comment);
  }
}
