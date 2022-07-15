import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countries: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getCountries().subscribe((response) => {
      this.countries = response;
    });
  }

  darkMode() {
    document.body.classList.add('dark-body');
    let toolbar = document.getElementById('tool-bar');
    toolbar?.classList.add('dark-toolbar');
  }
}
