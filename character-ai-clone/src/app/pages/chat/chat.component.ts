import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { ChatStorageService } from '../../services/chat-storage.service';
import { Character } from '../../models/character.model';
import { Message } from '../../models/message.model';
import { MessageBubbleComponent } from '../../components/message-bubble/message-bubble.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageBubbleComponent],
  styleUrls: ['./chat.component.scss'],
  template: `
<div class="chat">
  <h2 class="chat__header">Discussion avec {{ character?.name }}</h2>

  <div class="chat__messages">
    <app-message-bubble
      *ngFor="let msg of messages"
      [text]="msg.text"
      [isUser]="msg.from === 'user'"
    ></app-message-bubble>
  </div>

  <div class="chat__input-area">
    <input
      type="text"
      [(ngModel)]="userInput"
      placeholder="Écris un message..."
      (keydown.enter)="sendMessage()"
    />
    <button (click)="sendMessage()">Envoyer</button>
  </div>
</div>

  `,
})
export class ChatComponent {
  character?: Character;
  characterId!: string;
  userInput: string = '';
  messages: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private chatStorage: ChatStorageService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterId = id;
      this.character = this.characterService.getById(id);
      this.messages = this.chatStorage.load(id);

      // Si aucun message enregistré, démarrer avec un message d’accueil
      if (this.messages.length === 0) {
        this.messages.push({
          text: `Bonjour ! Je suis ${this.character?.name}. Que puis-je faire pour toi ?`,
          from: 'ai',
        });
        this.chatStorage.save(this.characterId, this.messages);
      }
    }
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    this.messages.push({ text: this.userInput, from: 'user' });
    const userText = this.userInput;
    this.userInput = '';
    this.chatStorage.save(this.characterId, this.messages);

    // Simuler une réponse
    setTimeout(() => {
      const response = this.getMockResponse(userText);
      this.messages.push({ text: response, from: 'ai' });
      this.chatStorage.save(this.characterId, this.messages);
    }, 800);
  }

  getMockResponse(input: string): string {
    return `Tu as dit : "${input}". Intéressant !`;
  }
}
