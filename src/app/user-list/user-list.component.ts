import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [
    {
      id: '1',
      name: 'Jack',
      age: 21
    },
    {
      id: '2',
      name: 'John',
      age: 28
    },
    {
      id: '3',
      name: 'Sam',
      age: 58
    }
  ]

  // arr = Array.from({ length: 10 }, (_, i) => i + 1)

  constructor() { }

  ngOnInit(): void {
  }

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
    console.log('removeUser', id);

  }

  addUser(user: string): void {
    if (user) {
      this.users.unshift({
        id: (this.users.length + 1).toString(),
        name: user,
      })
    }
    console.log(this.users);

  }

}
