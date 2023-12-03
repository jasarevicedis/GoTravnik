import { Component } from '@angular/core';
import { OpenFormsService } from '../../services/open-forms.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private openFormService: OpenFormsService
  ) {}
  
  openSubmitEvent(): void {
    this.openFormService.openSubmitEventPopup();
  }
  openSubmitPlace(): void {
    this.openFormService.openSubmitPlacePopup();
  }
  openFeedback(): void {
    this.openFormService.openFeedbackPopup();
  }
}
