import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccommodationData } from 'src/app/interfaces/AccommodationData';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-accommodation-card',
  templateUrl: './accommodation-card.component.html',
  styleUrls: ['./accommodation-card.component.scss']
})
export class AccommodationCardComponent  {
  @Input() item:any | undefined;

  

  constructor(private router: Router) {}

  openItempage() {
    this.router.navigate(['/accommodationitem/', this.item.id]);
  }
  
}
