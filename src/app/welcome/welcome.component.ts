import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';
import { StoreInfoService } from '../store-info.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
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

  tiles: Tile[] = []

  constructor(private storeInfo: StoreInfoService) { }

  ngOnInit(): void {
    console.log(this.storeInfo);
    this.tiles = this.storeInfo.tiles
  }


  removeUser(id: string): void {
    if (confirm('Are you sure, you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== id)
    }

  }
}
