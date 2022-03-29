import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.interface';
import { StoreInfoService } from '../store-info.service';
import { UserInterface } from '../user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  users: UserInterface[] = []
  windowWidth: number = 4
  tiles: Tile[] = []
  errorMessage: string = ''
  showSpinner: boolean = false

  constructor(private storeInfo: StoreInfoService, private usersService: UsersService) { }

  ngOnInit(): void {
    window.addEventListener('resize', () =>{
      this.windowWidth = window.innerWidth
    })

    console.log('StoreInfo:', this.storeInfo);
    this.tiles = this.storeInfo.tiles
    
    this.showSpinner = true
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users
      console.log('UsersService:', users);
      this.showSpinner = false 
      
    })

    // fetch('http://localhost:3000/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     this.users = json
    //   })


  }


  removeUser(id: string): void {
    console.log('removeUser from parent', id);

    if (confirm('Are you sure, you want to delete this user?')) {

      this.usersService.removeUser(id).subscribe(() => {
        console.log('delete from backend');

        this.users = this.users.filter(user => user.id !== id)
      })

    }
  }

  addUser(name: string): void {
    console.log('addUser from parent', name);

    if (!name) {
      this.errorMessage = 'The field is required'
      return
    }
    this.errorMessage = ''

    // const uniqueId = Math.random().toString(16).slice(2)
    // const newUser: UserInterface = {
    //   id: uniqueId,
    //   name,
    //   age: 30,
    // }
    this.usersService.addUser(name).subscribe(newUser => {
      console.log(newUser);
      this.users.push(newUser)
    })
  }
}
