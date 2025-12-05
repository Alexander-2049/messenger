import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  messageForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });
  defaultNameColor = '#000000';
  defaultAvatar =
    'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg';

  isShaking = false;
  lastShaked = 0;

  messages = [
    {
      type: 'other',
      name: 'Alice Johnson',
      avatarUrl: '',
      text: 'Hi there! How can I help you today?',
      nameColor: '#000000',
    },
    {
      type: 'self',
      name: 'Me',
      avatarUrl: this.defaultAvatar,
      text: 'Hello! I have a question about my order.',
    },
    {
      type: 'other',
      name: 'Alice Johnson',
      avatarUrl: '',
      text: 'Sure, what would you like to know?',
    },
    {
      type: 'self',
      name: 'Me',
      avatarUrl: this.defaultAvatar,
      text: 'When will it be delivered?',
    },
  ];

  constructor() {}

  private triggerShake() {
    const now = Date.now();
    if (this.isShaking) {
      this.isShaking = false;
      setTimeout(() => {
        this.isShaking = true;
        this.lastShaked = now;
      }, 10);
    } else {
      this.isShaking = true;
      this.lastShaked = now;
    }

    setTimeout(() => {
      this.isShaking = false;
    }, 500);
  }

  submitMessage() {
    const message = this.messageForm.get('message');
    if (message === null || message.value === null) return;
    if (message.hasError('required') || message.value.trim() === '') {
      this.triggerShake();
      return;
    }

    this.messages.push({
      avatarUrl: this.defaultAvatar,
      name: 'someone',
      text: message.value,
      type: 'self',
    });
    message.setValue('');

    setTimeout(() => {
      this.scrollToBottom();
    });
    return false;
  }

  private scrollToBottom() {
    if (!this.messagesContainer) return;

    try {
      const el = this.messagesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    } catch {}
  }
}
