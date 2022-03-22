import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  removeUser(id: string): void {
    if (confirm('Are you sure, you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== id)
    }

  }
 
}
