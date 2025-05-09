import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [ngClass]="{
        'self-end bg-blue-600 text-white': isUser,
        'self-start bg-gray-200 text-gray-900': !isUser
      }"
      class="max-w-xs px-4 py-2 rounded-xl mb-2 shadow text-sm"
    >
      {{ text }}
    </div>
  `,
})
export class MessageBubbleComponent {
  @Input() text!: string;
  @Input() isUser: boolean = false;
}
