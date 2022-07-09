import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countries: any;
  selected = 'Europe';

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getCountries().subscribe((response) => {
      this.countries = response;
    });
  }

  test() {
    console.log(this.countries);
  }
}
