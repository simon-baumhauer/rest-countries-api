import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CountryServiceService } from '../country-service.service';
import { SearchComponent } from '../search/search.component';
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
  searchText: string = '';

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

  countryDetailsView(i: any) {
    this.router.navigateByUrl('/country-details');
    this.countryNumber = i;
    console.log(this.countryNumber);
    this.currentCountry.changeMessage(this.countryNumber);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
