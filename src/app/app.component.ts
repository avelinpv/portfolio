import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  gtMd: boolean;
  gtSm: boolean;
  panelOpen = false;

  constructor(public breakpointObserver: BreakpointObserver) { 
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.gtMd = true;
      }else{
        this.gtMd = false;
      }
    });

    
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

