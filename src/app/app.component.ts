import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  openMenu = () => {
    document.querySelector(".burger-menu").classList.toggle("open");
    document.querySelector(".wrapper").classList.toggle("open");
  }
}
