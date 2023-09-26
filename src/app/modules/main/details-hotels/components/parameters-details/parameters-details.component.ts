import { Component, Input, OnInit } from '@angular/core';
import { Parameter, ParameterDto } from '@core/models';
import { ParameterService } from '@core/services/parameter/parameter.service';

@Component({
  selector: 'app-parameters-details',
  templateUrl: './parameters-details.component.html',
  styleUrls: ['./parameters-details.component.css'],
})
export class ParametersDetailsComponent implements OnInit {
  @Input() hotelId!: string;
  parameters!: ParameterDto;
  errorLoadingParameters = false;

  constructor(private parametersService: ParameterService) {}

  ngOnInit(): void {
    if (this.hotelId) {
      this.parametersService.getParametersByHotelId(this.hotelId).subscribe(
        (data) => {
          this.parameters = data;
          console.log(data);
        },
        (error) => {
          console.error('Error parameters:', error);
          if (error.status === 404) {
            this.errorLoadingParameters = true;
          }
        },
      );
    }
  }
}
