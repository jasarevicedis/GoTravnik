import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { PlannerService } from '../../services/planner.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  // Add entries for other tables as needed...


@Component({
  templateUrl: './planner-results.component.html',
  styleUrls: ['./planner-results.component.scss']
})
export class PlannerResultsComponent {
[x: string]: any;
  
  private apiUrl = 'https://localhost:7142/api'; // Replace with your API URL

  constructor(private chatGptService: OpenaiService,
    private dataService: PlannerService,
    private http: HttpClient) {}

  selectedValues: string[] = [];
  combinedApiData: any[] = [];
  

  ngOnInit() {
    this.dataService.selectedValues$.subscribe(values => {
      this.selectedValues = values;
    
      // Do something with the selected values in this component
    });
    this.dataService.combinedApiData$.subscribe(data => {
      this.combinedApiData = data;
  });
}

  sendMessage() {
    this.chatGptService.sendMessage('Hello, ChatGPT!').subscribe((response) => {
      console.log('ChatGPT Response:', response);
      // Handle the response from ChatGPT
    });
  }
}
