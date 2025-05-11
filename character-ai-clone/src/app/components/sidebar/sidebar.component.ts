// src/app/components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="w-64 h-screen bg-gray-100 p-4 shadow-lg">
      <h2 class="text-xl font-bold mb-6">Character AI</h2>
      <nav class="space-y-2">
        <a routerLink="/" class="block px-4 py-2 rounded hover:bg-gray-200 transition">Accueil</a>
        <!-- D'autres liens ici -->
      </nav>
    </aside>
  `,
})
export class SidebarComponent {}
