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
      avatarUrl: 'assets/emma.webp',
      description: 'Empathetic virtual friend',
    },
    {
      id: '2',
      name: 'AI John',
      avatarUrl: 'assets/john.jpeg',
      description: 'Chill conversation buddy',
    },
    {
      id: '3',
      name: 'AI Nova',
      avatarUrl: 'assets/Nova.jpg',
      description: 'Space explorer AI',
    },
    {
      id: '4',
      name: 'AI Zen',
      avatarUrl: 'assets/Zen.webp',
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
