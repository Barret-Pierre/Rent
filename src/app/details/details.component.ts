import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../interfaces/housinglocation';
import { HousingService } from '../services/housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  public route: ActivatedRoute = inject(ActivatedRoute);
  public housingLocation: Housinglocation | undefined;
  public housingService: HousingService = inject(HousingService);

  constructor() {
    const housingLocation = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocation);
  }
}
