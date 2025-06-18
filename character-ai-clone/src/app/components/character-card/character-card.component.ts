// src/app/components/character-card/character-card.component.ts

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})


export class CharacterCardComponent {
  @Input() character!: {
    id: string;
    name: string;
    avatarUrl: string;
    description: string;
  };
}
