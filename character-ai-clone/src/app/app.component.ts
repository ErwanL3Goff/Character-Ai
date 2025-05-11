import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';








@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex">
      <app-sidebar></app-sidebar>
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {}
