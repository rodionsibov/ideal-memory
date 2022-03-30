import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: string = '';
  joke: string = '';

  constructor() {}

  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();

    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((json) => {
        this.joke = json.value;
      });
  }
}
