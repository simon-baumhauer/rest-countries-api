import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../country-service.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  message: number = 0;
  countries: any;

  constructor(
    private currentCountry: CountryServiceService,
    private service: PostService
  ) {}

  ngOnInit(): void {
    this.service.getCountries().subscribe((response: any) => {
      this.countries = response;
    });
    this.currentCountry.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
