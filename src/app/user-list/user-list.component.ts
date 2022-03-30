import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users!: UserInterface[];
  @Output() onRemoveUser = new EventEmitter<string>();
  @Output() onAddUser = new EventEmitter<string>();

  errorMessage: string = '';

  // arr = Array.from({ length: 10 }, (_, i) => i + 1)

  constructor() {}

  ngOnInit(): void {}

  addUser(user: string): void {
    if (!user) {
      this.errorMessage = 'The field is required';
      return;
    }
    this.errorMessage = '';
    this.onAddUser.emit(user);
  }

  openModal(modal: any, user: any): void {
    modal.showModal();
    console.log(user.id);
  }

  closeModal(modal: any, event: any): void {
    if (event.target.innerText === 'Cancel') {
      modal.close();
      console.log('Canceled');
    } else {
      modal.close();
      console.log(this.users);
      console.log('Saved');
    }
  }
}
