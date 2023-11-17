import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { PlannerService } from '../../services/planner.service';

@Component({
  templateUrl: './planner-results.component.html',
  styleUrls: ['./planner-results.component.scss']
})
export class PlannerResultsComponent {
  constructor(private chatGptService: OpenaiService,
    private dataService: PlannerService) {}

  selectedValues: string[] | undefined;

  

  ngOnInit() {
    this.dataService.selectedValues$.subscribe(values => {
      this.selectedValues = values;
      // Do something with the selected values in this component
    });
  }

  sendMessage() {
    this.chatGptService.sendMessage('Hello, ChatGPT!').subscribe((response) => {
      console.log('ChatGPT Response:', response);
      // Handle the response from ChatGPT
    });
  }
}
