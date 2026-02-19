import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PartialLoaderComponent } from './components/partial-loader/partial-loader.component';

@NgModule({
  declarations:[  // 👈 Declare the directive here
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    PartialLoaderComponent
  ],
  exports: [
    CommonModule,
    TranslateModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class SharedModule {}
