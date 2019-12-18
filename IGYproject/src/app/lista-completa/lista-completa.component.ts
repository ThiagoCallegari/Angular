import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-lista-completa',
  templateUrl: './lista-completa.component.html',
  styleUrls: ['./lista-completa.component.css']
})
export class ListaCompletaComponent implements OnInit {

  users: User[];

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.UserService.getAll().subscribe((resposta: User[]) => {this.users = resposta;})
  }

}
