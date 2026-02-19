import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideNavComponent, TopNavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  isSidebarOpen = true;
  isMobileView = false;

  constructor(private router: Router) {
    this.onResize(); // check screen on load

    // Auto-close on route change (for mobile/tablet)
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd && this.isMobileView) {
        this.isSidebarOpen = false;
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobileView = window.innerWidth <= 1024;
    if (this.isMobileView) this.isSidebarOpen = false;
    else this.isSidebarOpen = true;
  }

  toggleSidebar() { 
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar(){
    this.isSidebarOpen = false;
  }
}
