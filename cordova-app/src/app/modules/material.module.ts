import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatMenuModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule,MatToolbarModule,MatProgressBarModule } from '@angular/material';
import  {MatSidenavModule } from '@angular/material/sidenav';
import {ErrorStateMatcher} from '@angular/material/core';

@NgModule({
  imports: [MatInputModule,MatFormFieldModule,MatMenuModule,MatSidenavModule, MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatProgressBarModule, MatSnackBarModule],
  exports: [MatInputModule,MatFormFieldModule,MatMenuModule,MatSidenavModule, MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatProgressBarModule, MatSnackBarModule],
})
export class MaterialModule { } 