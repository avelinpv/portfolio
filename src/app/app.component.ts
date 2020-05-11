import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'portfolio';

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.header');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header-scroll');
    } else {
      element.classList.remove('header-scroll');
    }
  }
}

