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
    },
    {
      id: '2',
      name: 'John',
    },
    {
      id: '3',
      name: 'Sam',
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
      const uniqueId = Math.random().toString(16).slice(2)
      const newUser = {
        id: uniqueId,
        name: user,
      }
      this.users.unshift(newUser)
      console.table(this.users);
    }

  }

}
