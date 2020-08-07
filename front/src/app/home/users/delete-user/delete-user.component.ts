import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  displayModal: boolean;

  @Output() send = new EventEmitter<any>(); 

  @Input() users: Users = {
    id: 0,
    name: '',
    email: '',
    age: null
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }

  deleteUser() {
    this.usersService.deleteUser(this.users.id).subscribe(res => {
      this.users = res;
      this.displayModal = false;
      alert('User Deleted');
      this.send.emit(this.users);
    }, err => console.error(err)
    )
  }


}
