import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-lista-id',
  templateUrl: './lista-id.component.html',
  styleUrls: ['./lista-id.component.css']
})
export class ListaIdComponent implements OnInit {

  id: number;
  user: User = new User(0, 0, "", false);

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  procuraClick() {
    this.UserService.getId(this.id).subscribe((resposta: User) => {this.user = resposta})
  }

}
