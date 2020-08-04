import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  displayModal: boolean;

  @Output() send = new EventEmitter<any>(); 
  
  @Input() users: Users = {
    id: 0,
    name: '',
    email: '',
    age: null,
  };

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }

  closedModal(){
    this.displayModal=false
    this.send.emit(this.users);
  }

  updateUser() {
      this.usersService.updateUser(this.users.id, this.users).subscribe(res => {
        this.displayModal = false;
        alert('Save City');
        this.send.emit(this.users);
      }, err => console.error(err)
      )
  }
}
