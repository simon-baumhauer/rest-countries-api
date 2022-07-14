import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ObserversModule } from '@angular/cdk/observers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CountryComponent } from './country/country.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, CountryComponent, CountryDetailsComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ObserversModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
