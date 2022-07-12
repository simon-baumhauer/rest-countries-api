import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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
  countryNumber: number = 0;
  message: number = 0;
  selected = 'Europe';
  result: string = '';
  selectedRegion: any;
  searchBar: string = '';
  searchResults: any = [];
  constructor(
    private service: PostService,
    private router: Router,
    private currentCountry: CountryServiceService
  ) {}

  ngOnInit() {
    this.selectRegion();
  }

  SeachCounrties() {}

  selectRegion() {
    this.service.getCountries().subscribe((response: any) => {
      this.countries = response;
      this.result = this.countries.filter(
        (country: any) => country.region === this.selected
      );
      this.selectedRegion = this.result;
    });
  }

  asyncText() {
    console.log(this.selectedRegion);
  }

  countryDetailsView(i: any) {
    this.router.navigateByUrl('/country-details');
    this.countryNumber = i;
    console.log(this.countryNumber);
    this.currentCountry.changeMessage(this.countryNumber);
  }

  searchEngine() {
    for (let i = 0; i < this.selectedRegion.length; i++) {
      const country = this.selectedRegion[i];
      if (country.name.toLowerCase().includes(this.searchBar.toLowerCase())) {
        let indx = this.searchResults.indexOf(country);
        if (indx > -1) {
          console.log('already in');
        } else {
          this.searchResults.push(country);
        }
      }
    }
    console.log('searchResults', this.searchResults);
  }

  test() {
    this.selectedRegion = this.searchResults;

    console.log('testFunction:', this.selectedRegion);
  }
}
