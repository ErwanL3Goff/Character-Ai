import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatStorageService {
  private getKey(characterId: string): string {
    return `chat_${characterId}`;
  }

  save(characterId: string, messages: Message[]): void {
    localStorage.setItem(this.getKey(characterId), JSON.stringify(messages));
  }

  load(characterId: string): Message[] {
    const data = localStorage.getItem(this.getKey(characterId));
    return data ? JSON.parse(data) : [];
  }
}
