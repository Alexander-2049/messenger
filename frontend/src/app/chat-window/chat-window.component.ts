import { CommonModule } from '@angular/common';
import {
  Component,
  type ElementRef,
  ViewChild,
  type OnInit,
  type AfterViewChecked,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { randomFloat } from '../utils/random';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  wrapperDegAngle = randomFloat(-1.5, 1.5);
  messageForm = new FormGroup({
    message: new FormControl('', Validators.required),
  });

  defaultNameColor = '#000000';
  defaultAvatar =
    'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg';

  isShaking = false;
  roomTitle = 'General Chat';
  activeUsers = 12;

  messages = [
    {
      type: 'other',
      name: 'Alice Johnson',
      avatarUrl: '',
      text: 'Hey everyone! Welcome to the chat! 👋',
      nameColor: '#2563eb',
      timestamp: new Date(Date.now() - 25 * 60000).toISOString(),
    },
    {
      type: 'self',
      name: 'You',
      avatarUrl: this.defaultAvatar,
      text: 'Thanks! Excited to be here.',
      timestamp: new Date(Date.now() - 24 * 60000).toISOString(),
    },
    {
      type: 'other',
      name: 'Bob Smith',
      avatarUrl: '',
      text: 'How is everyone doing today?',
      nameColor: '#dc2626',
      timestamp: new Date(Date.now() - 20 * 60000).toISOString(),
    },
    {
      type: 'other',
      name: 'Carol Davis',
      avatarUrl: '',
      text: 'Pretty good! Working on an interesting project.',
      nameColor: '#059669',
      timestamp: new Date(Date.now() - 18 * 60000).toISOString(),
    },
    {
      type: 'self',
      name: 'You',
      avatarUrl: this.defaultAvatar,
      text: 'Oh cool, what kind of project?',
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      type: 'other',
      name: 'Carol Davis',
      avatarUrl: '',
      text: 'Building a chat application with Angular! It is really fun.',
      nameColor: '#059669',
      timestamp: new Date(Date.now() - 10 * 60000).toISOString(),
    },
    {
      type: 'self',
      name: 'You',
      avatarUrl: this.defaultAvatar,
      text: 'That sounds amazing! I would love to know more.',
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    },
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.scrollToBottom();
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  shouldShowAvatar(index: number): boolean {
    if (index === 0) return true;
    const currentMsg = this.messages[index];
    const previousMsg = this.messages[index - 1];
    return currentMsg.name !== previousMsg.name;
  }

  formatTimestamp(isoString: string): string {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    let relativeTime = '';
    if (diffMins === 0) {
      relativeTime = 'just now';
    } else if (diffMins < 60) {
      relativeTime =
        diffMins === 1 ? '1 minute ago' : `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      relativeTime = diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
    } else if (diffDays < 7) {
      relativeTime = diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
    } else {
      relativeTime = date.toLocaleDateString();
    }

    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const dateStr = date.toLocaleDateString();
    return `${dateStr} ${time} (${relativeTime})`;
  }

  private triggerShake() {
    const now = Date.now();
    if (this.isShaking) {
      this.isShaking = false;
      setTimeout(() => {
        this.isShaking = true;
      }, 10);
    } else {
      this.isShaking = true;
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
      name: 'You',
      text: message.value,
      type: 'self',
      nameColor: '#000000',
      timestamp: new Date().toISOString(),
    });
    message.setValue('');

    setTimeout(() => {
      const responses = [
        "That's interesting!",
        'I totally agree with you.',
        'Great point!',
        'Sounds good to me.',
        'Love that idea!',
        'Tell me more about that.',
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      this.messages.push({
        avatarUrl: '',
        name: 'Alice Johnson',
        text: randomResponse,
        type: 'other',
        nameColor: '#2563eb',
        timestamp: new Date().toISOString(),
      });
    }, 500 + Math.random() * 1000);

    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  private scrollToBottom() {
    if (!this.messagesContainer) return;

    try {
      const el = this.messagesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    } catch {}
  }
}
