import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { authRouteTransitionAnimations } from '../../shared/components/page.animations';
import { FabToggleComponent } from '../../shared/components/fab-toggle/fab-toggle.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,TranslateModule,FabToggleComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  animations: [authRouteTransitionAnimations],
  
})
export class AuthLayoutComponent implements AfterViewInit {
  constructor(private router: Router,private cdRef: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
    this.cdRef.detectChanges(); // 🧯 Suppresses NG0100
  }
  getRouteAnimationData(outlet: RouterOutlet) {
      return (
        outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData['animation']
      );
  }
}
