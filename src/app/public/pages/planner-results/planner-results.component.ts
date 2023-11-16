import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  templateUrl: './planner-results.component.html',
  styleUrls: ['./planner-results.component.scss']
})
export class PlannerResultsComponent {
  constructor(private chatGptService: OpenaiService) {}

  sendMessage() {
    this.chatGptService.sendMessage('Hello, ChatGPT!').subscribe((response) => {
      console.log('ChatGPT Response:', response);
      // Handle the response from ChatGPT
    });
  }
}
