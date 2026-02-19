import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuItem } from '../../../shared/models/navigation.model';
import { MenuUtils } from '../../../core/utils/navigation.utlis';
import { MENU_ITEMS } from '../../../config/navigation.config';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    MatTooltipModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      transition('expanded <=> collapsed', [animate('250ms ease-in-out')]),
    ])
  ]
})
export class SideNavComponent implements OnInit {
  menuItems: MenuItem[] = [];
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() isMobileView = false;
  @Input() isSidebarOpen = true;
  user: any = JSON.parse(localStorage.getItem('user') || '{}')?.user;
  userDetails: any = JSON.parse(localStorage.getItem('user') || '{}');
  userPlan:any = localStorage.getItem("userPlan") || 'free';
  currentUserRole = localStorage.getItem("currentUserRole") || 'employee';
  constructor(
    private router: Router,
    private authService: AuthService,
    private matDialog:MatDialog
  ) {
  }
  ngOnInit(): void {
    let menus = MENU_ITEMS;

    // ✅ Auto-expand matching route
    menus = MenuUtils.expandMenusForRoute(menus, this.router.url);

    this.menuItems = menus;
  }
  getInitials(first: string, last: string): string {
    if (!first && !last) return 'U';
    return `${first?.[0] || ''}${last?.[0] || ''}`.toUpperCase();
  }

  toggle(clickedItem: any) {
    this.menuItems.forEach((item) => {
      if (item.children) {
        item.expanded = item.id === clickedItem.id ? !item.expanded : false;
      }
    });
  }
  isParentRouteActive(item: any): boolean {
    return !!item.children?.some((child: any) =>
      this.router.url.startsWith(child.route || '')
    );
  }
  onNavClick() {
    if(this.isMobileView){
      this.closeSidebar.emit();
    }
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  copyToClipboard(text: string | null) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
    });
  }
}
