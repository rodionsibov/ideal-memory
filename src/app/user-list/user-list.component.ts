import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: any
  @Output() removeUser = new EventEmitter()
  
  // arr = Array.from({ length: 10 }, (_, i) => i + 1)

  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
  }



  addUser(user: string): void {
    if (user) {
      const uniqueId = Math.random().toString(16).slice(2)
      const newUser = {
        id: uniqueId,
        name: user,
      }
      this.users.unshift(newUser)
      console.table(this.users);
    }

  }

  openModal(modal: any, user: any): void {
    modal.showModal()
    console.log(user.id);

  }

  closeModal(modal: any, event: any): void {
    if (event.target.innerText === 'Cancel') {
      modal.close()
      console.log('Canceled');

    } else {
      modal.close()
      console.log(this.users);
      console.log('Saved');
    }
  }

}
