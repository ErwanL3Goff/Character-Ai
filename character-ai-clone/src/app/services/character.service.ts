// src/app/services/character.service.ts
import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: Character[] = [
    {
      id: '1',
      name: 'AI Emma',
      avatarUrl: 'assets/emma.png',
      description: 'Empathetic virtual friend',
    },
    {
      id: '2',
      name: 'AI John',
      avatarUrl: 'assets/john.png',
      description: 'Chill conversation buddy',
    },
    {
      id: '3',
      name: 'AI Nova',
      avatarUrl: 'assets/nova.png',
      description: 'Space explorer AI',
    },
    {
      id: '4',
      name: 'AI Zen',
      avatarUrl: 'assets/zen.png',
      description: 'Mindfulness mentor',
    },
  ];

  getAll(): Character[] {
    return this.characters;
  }

  getById(id: string): Character | undefined {
    return this.characters.find((c) => c.id === id);
  }
}
