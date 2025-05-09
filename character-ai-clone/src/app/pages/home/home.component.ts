// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  template: `
    <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <app-character-card
        *ngFor="let character of characters"
        [character]="character"
      ></app-character-card>
    </div>
  `,
})
export class HomeComponent {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getAll();
  }
}

