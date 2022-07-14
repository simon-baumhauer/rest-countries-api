import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', component: CountryComponent },
  { path: 'country-details', component: CountryDetailsComponent },
  { path: 'search/:searchTerm', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
