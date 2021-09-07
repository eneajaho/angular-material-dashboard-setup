import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <app-header (menuToggled)="toggle()"></app-header>

      <mat-drawer-container>
        <mat-drawer mode="side" [opened]="opened">
          <app-menu-item [menu]="menu"></app-menu-item>
        </mat-drawer>

        <mat-drawer-content [class.margin-left]="opened">
          <router-outlet></router-outlet>
        </mat-drawer-content>
      </mat-drawer-container>
    </div>
  `,
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e'
    },
    {
      title: 'Statistics',
      icon: 'chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/money',
          color: '#ff7f0e'
        },
        {
          title: 'Customers',
          icon: 'person',
          color: '#ff7f0e',
          link: '/customers'
        }
      ]
    }
  ];
}
