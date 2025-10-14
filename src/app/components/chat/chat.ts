import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

interface ChatMessage {
  sender: 'sender' | 'receiver';
  name: string;
  avatar: string;
  text: string;
  time: string;
  status: string;
  statusIcon?: boolean;
}

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat.html',
  styleUrls: ['./chat.scss'],
  standalone: false,
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  newMessage: string = '';
  messages: ChatMessage[] = [
    { sender: 'receiver', name: 'Lead Frans', avatar: 'https://via.placeholder.com/40?text=LF', text: 'Hey everyone! Just wanted to kick off the day by saying how excited I am to dive into our latest project. Who\'s ready to work some design magic?', time: '01:20 AM', status: 'Delivered' },
    { sender: 'receiver', name: 'Floyd Miles', avatar: 'https://via.placeholder.com/40?text=FM', text: 'Definitely pumped to get started. Did everyone get a chance to review the brief for Project Crypto?', time: '01:24 AM', status: 'Delivered' },
    { sender: 'receiver', name: 'Guy Hawkins', avatar: 'https://via.placeholder.com/40?text=GH', text: 'Yes, I looked it over. Seems like a fun challenge. Do we have any initial ideas brewing?', time: '01:25 AM', status: 'Delivered' },
    { sender: 'sender', name: 'You', avatar: 'https://via.placeholder.com/40?text=You', text: 'I\'ve got a few sketches already. Thinking of incorporating some sleek animations for the website interface. What do you all think?', time: '01:32 AM', status: 'Sent' },
    { sender: 'receiver', name: 'Theresa Web', avatar: 'https://via.placeholder.com/40?text=TW', text: 'Sounds cool, Max! I was playing around with some color palettes today. I\'ll share them soon for feedback.', time: '01:33 AM', status: 'Delivered' }
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      sender: 'sender',
      name: 'You',
      avatar: 'https://via.placeholder.com/40?text=You',
      text: this.newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Sent'
    });

    this.newMessage = '';
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}