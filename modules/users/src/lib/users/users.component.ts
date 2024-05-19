import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { UsersService } from './shared/users.service';
import { Observable } from 'rxjs';
import { User } from './types/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass',
})
export class UsersComponent {

  constructor(
    private users_service: UsersService
  ) {}
  
  users$: Observable<User[]> = this.users_service.getUsers();       
}
