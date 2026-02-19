import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../../core/services/admin.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatBadgeModule } from '@angular/material/badge';
import { TranslationService } from '../../../core/services/translation.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
   SharedModule,
   MatBadgeModule
  ],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit,OnDestroy {
  profileMenuOpen = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() isMobileView = false;
  @Input() isSidebarOpen = true;
  user: any = JSON.parse(localStorage.getItem('user') || '{}')?.user;
  userDetails:any = JSON.parse(localStorage.getItem('user') || '{}');
  notifications: any[] = [];
  private sub!: Subscription;
  unreadCount = 0;
  selectedLang:string = localStorage.getItem("lang") || 'en';
  userPlan:any = localStorage.getItem("userPlan") || 'free';
  currentUserRole = localStorage.getItem("currentUserRole") || 'employee';
  constructor(
    private router: Router,
    private authService: AuthService,
    private translationService: TranslationService,
  ) {
    this.authService.userSubject$.subscribe({
      next: (user:any) =>{
        this.user = user?.user || JSON.parse(localStorage.getItem('user') || '{}')?.user ;
      }
    });
  }
  getInitials(first: string, last: string): string {
    if (!first && !last) return 'U';
    return `${first?.[0] || ''}${last?.[0] || ''}`.toUpperCase();
  }
  ngOnInit(): void {
  }
  onProfileClick() {
    this.router.navigate(['/profile'])
  }
  onSupportClick(){
    this.router.navigate(['/support']);
  }
  onBusinessClick(){
    this.router.navigate(['/business']);
  }
  onLogout() {
    this.authService.logout();
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  changeLang() {
    this.translationService.setLanguage(this.selectedLang);
  }
  formatNotification = (n: any) => ({
    ...n,
    relativeTime: this.formatRelativeTime(n.created_at),
    emoji: this.getEmoji(n.type)
  });

  formatRelativeTime(date: string | Date): string {
    const now = new Date();
    const target = new Date(date);
    const diff = Math.floor((now.getTime() - target.getTime()) / 1000);

    if (diff < 60) return `${diff} sec ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  }

  getEmoji(type: string) {
    switch (type) {
      case 'order': return '📦';
      case 'user': return '👤';
      case 'system': return '⚠️';
      case 'support': return '🛠️';
      case 'product': return '🛍️';
      default: return '🔔';
    }
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
