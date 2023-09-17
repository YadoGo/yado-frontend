import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Population } from '@core/models';
import { SearchService } from '@core/services/search/search.service';
import { debounceTime, filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() resultSelected = new EventEmitter<Population>();
  searchForm: FormGroup;
  searchResults: Population[] = [];
  showRecommendations = false;
  selectedResult: Population | null = null;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router,
  ) {
    this.searchForm = this.fb.group({
      cityQuery: [''],
    });

    this.searchForm
      .get('cityQuery')
      ?.valueChanges.pipe(
        debounceTime(300),
        filter((query) => query.length >= 3),
      )
      .subscribe((query) => {
        if (query.length > 3) {
          this.showRecommendations = true;
          this.searchCities(query);
        } else {
          this.searchResults = [];
          this.showRecommendations = false;
        }
      });
  }

  searchCities(query: string) {
    if (query.startsWith('hotel')) {
      // Hoteles
    } else {
      this.searchService.searchCities(query).subscribe(
        (results) => {
          this.searchResults = results;

          if (results.length > 0) {
            this.selectedResult = results[0];
          } else {
            this.selectedResult = null;
          }
        },
        (error) => {
          console.error('Error searching cities:', error);
        },
      );
    }
  }

  selectResult(result: Population) {
    this.resultSelected.emit(result);
    this.router.navigate(['/hotels', result.name]);
  }
}
