import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  message!: number;

  constructor(private currentCountry: CountryServiceService) {}

  ngOnInit(): void {
    this.currentCountry.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
