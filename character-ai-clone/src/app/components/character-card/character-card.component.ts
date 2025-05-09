// src/app/components/character-card/character-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['/chat', character.id]" class="block bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 text-center">
      <img [src]="character.avatarUrl" [alt]="character.name" class="w-20 h-20 mx-auto rounded-full object-cover mb-3" />
      <h3 class="text-lg font-semibold">{{ character.name }}</h3>
      <p class="text-sm text-gray-500">{{ character.description }}</p>
    </a>
  `,
})
export class CharacterCardComponent {
  @Input() character!: {
    id: string;
    name: string;
    avatarUrl: string;
    description: string;
  };
}
