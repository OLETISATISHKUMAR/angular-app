import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showSidebar = false;

  constructor(private observer: BreakpointObserver) {}

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    
    if (this.showSidebar) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.showSidebar = false; // Hide the sidebar by default
      } else {
        this.sidenav.mode = 'side';
        this.showSidebar = true; // Show the sidebar on larger screens
      }
    });
  }
}
