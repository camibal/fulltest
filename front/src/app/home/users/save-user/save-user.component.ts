import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.scss']
})
export class SaveUserComponent implements OnInit {

  @Output() send = new EventEmitter<any>();

  displayModal: boolean;
  UsersForm: FormGroup;
  users: Users = {
    id: 0,
    name: '',
    email: '',
    age: null
  }
  constructor(public formbuilder: FormBuilder, private usersService: UsersService) {
    //validate form
    this.UsersForm = this.formbuilder.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }

  saveUser(): void {
    if (this.UsersForm.valid) {
      //subscribe and send service
      this.usersService.saveUser(this.UsersForm.value).subscribe(data => {
        this.users = data;
        //reset form
        this.UsersForm.reset();
        this.displayModal = false;
        alert('User Saved');
        this.send.emit(this.users);
      }, error => {
        console.error(error)
      });
    }
  }

  get name() { return this.UsersForm.get('name'); }
  get email() { return this.UsersForm.get('email'); }
  get age() { return this.UsersForm.get('age'); }

}
