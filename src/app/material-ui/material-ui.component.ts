import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-ui',
  templateUrl: './material-ui.component.html',
  styleUrls: ['./material-ui.component.css']
})
export class MaterialUiComponent implements OnInit {
  notifications: number = 2
  showSpinner: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void {
    this.showSpinner = true
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }
}
