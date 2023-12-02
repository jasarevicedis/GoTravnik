import { Component } from '@angular/core';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss']
})
export class RatingFormComponent {
  constructor(private api: RatingService) {}
  
}
