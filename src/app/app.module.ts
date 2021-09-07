import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: TestComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    TestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
