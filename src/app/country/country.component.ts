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
  posts: any;
  countryNumber!: number;
  message!: number;

  constructor(
    private service: PostService,
    private router: Router,
    private currentCountry: CountryServiceService
  ) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
    this.currentCountry.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  test() {
    console.log(this.posts);
  }

  countryDetailsView(i: any) {
    this.router.navigateByUrl('/country-details');
    this.countryNumber = i;
    console.log(this.countryNumber);
    this.currentCountry.changeMessage(this.countryNumber);
  }
}
