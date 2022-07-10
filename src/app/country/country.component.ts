import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryServiceService } from '../country-service.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: any;
  countryNumber!: number;
  message!: number;
  selected = 'Europe';
  constructor(
    private service: PostService,
    private router: Router,
    private currentCountry: CountryServiceService
  ) {}

  ngOnInit() {
    this.service.getCountries().subscribe((response: any) => {
      this.countries = response;
    });
  }

  checkRegion() {
    const result = this.countries.filter(
      (country: any) => country.region === this.selected
    );
    console.log(result);
  }

  countryDetailsView(i: any) {
    this.router.navigateByUrl('/country-details');
    this.countryNumber = i;
    console.log(this.countryNumber);
    this.currentCountry.changeMessage(this.countryNumber);
  }
}
