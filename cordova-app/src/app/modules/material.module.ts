import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatCardModule, MatIconModule,MatToolbarModule } from '@angular/material';
import  {MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatSidenavModule, MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule],
  exports: [MatSidenavModule, MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule],
})
export class MaterialModule { }