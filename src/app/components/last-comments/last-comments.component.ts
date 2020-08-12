import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-last-comments',
  templateUrl: './last-comments.component.html',
  styleUrls: ['./last-comments.component.scss']
})
export class LastCommentsComponent implements OnInit {

  constructor(public db: DatabaseService) { }

  /**
   * Chama o serviço para atualizar o banco de dados ao iniciar o componente.
   */
  ngOnInit(): void {
    this.db.getComments();
  }

}
