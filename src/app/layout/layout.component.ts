import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from '../menu.model';

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
      title: 'TASK',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e'
    },
    {
      title: 'RETE VENDITA',
      icon: 'stacked_bar_chart',
      link: '/sales-network',
      color: '#0e2660'
    },
    {
      title: 'CONTRATTI',
      icon: 'assignment',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Gestione contratti',
          icon: 'assignment',
          link: '/contracts',
          color: '#ff7f0e'
        },
        {
          title: 'Contratti generati',
          icon: 'work',
          color: '#ff7f0e',
          link: '/contracts/jobs'
        }
      ]
    },
    {
      title: 'FATTURE',
      icon: 'money',
      color: '#0e2660',
      subMenu: [
        {
          title: 'Gestione fatture',
          icon: 'money',
          link: '/commissions',
          color: '#0e2660'
        },
        {
          title: 'Fatture generate',
          icon: 'work',
          color: '#ff7f0e',
          link: '/commissions/jobs'
        }
      ]
    },
    {
      title: 'SOCIETÀ MANDANTE',
      icon: 'home_work',
      link: '/society',
      color: '#ff7f0e'
    },
    {
      title: 'PAGAMENTI EXTRA',
      icon: 'monetization_on',
      link: '/extra-payments',
      color: '#0e2660',
      hideFor: 'Agent'
    },

    {
      title: 'SEPA',
      icon: 'how_to_vote',
      color: '#ff7f0e',
      expanded: false,
      hideFor: 'Agent',
      subMenu: [
        {
          title: 'Distinte Pagamenti',
          icon: 'payment',
          color: '#ff7f0e',
          link: 'sepa/sepa-pagamenti'
        },
        {
          title: 'Distinte Fatture',
          icon: 'addchart',
          color: '#ff7f0e',
          link: '/sepa/sepa-fatture'
        },
        {
          title: 'Distinte Generate',
          icon: 'work',
          color: '#ff7f0e',
          link: 'sepa/jobs'
        }
      ]
    }
  ];
}
