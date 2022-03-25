import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';
import { StoreInfoService } from '../store-info.service';
import { UserInterface } from '../types/user.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  users: UserInterface[] = [
    {
      id: '1',
      name: 'Jack',
      age: 22
    },
    {
      id: '2',
      name: 'John',
      age: 12
    },
    {
      id: '3',
      name: 'Sam',
      age: 83
    }
  ]

  tiles: Tile[] = []
  errorMessage: string = ''

  constructor(private storeInfo: StoreInfoService) { }

  ngOnInit(): void {
    console.log(this.storeInfo);
    this.tiles = this.storeInfo.tiles
  }


  removeUser(id: string): void {
    console.log('removeUser from parent', id);
    
    if (confirm('Are you sure, you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== id)
    }
  }

  addUser(name: string): void {
    console.log('addUser from parent', name);

    if (!name) {
      this.errorMessage = 'The field is required'
      return
    }
    this.errorMessage = ''
    const uniqueId = Math.random().toString(16).slice(2)
    const newUser: UserInterface = {
      id: uniqueId,
      name,
      age: 30,
    }
    this.users.unshift(newUser)
    console.table(this.users);
  }
}
