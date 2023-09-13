import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from '@environments/environment';
import { Match } from '@core/models/champions/match/match.model';

@Component({
  selector: 'app-champions-page',
  templateUrl: './champions-page.component.html',
  styleUrls: ['./champions-page.component.css'],
})
export class ChampionsPageComponent implements OnInit {
  upcomingMatches: Match[] = [];
  datePipe = new DatePipe('en-US');
  visibleMatches = 20;

  showCityName(match: Match) {
    const cityName = match.fixture.venue.city;
    console.log('City:', cityName);
  }

  onMatchCardKeydown(event: KeyboardEvent, match: Match) {
    if (event.keyCode === 13) {
      this.showCityName(match);
    }
  }

  ngOnInit() {
    this.fetchApiData();
  }

  async fetchApiData() {
    const championsApiUrl = environment.championsApiUrl;
    const championsApiKey = environment.championsApiKey;

    try {
      const response = await fetch(championsApiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': championsApiKey,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
      });

      if (response.ok) {
        const result = await response.json();
        const currentDate = new Date();

        this.upcomingMatches = result.response.filter((match: Match) => {
          const matchDate = new Date(match.fixture.date);
          return matchDate > currentDate;
        });

        this.upcomingMatches.forEach((match: Match) => {
          const venueParts = match.fixture.venue.name.split(',');
          if (venueParts.length >= 2) {
            match.fixture.venue.country =
              venueParts[venueParts.length - 1].trim();
          } else {
            match.fixture.venue.country = '';
          }
        });
      } else {
        console.error('Error en la solicitud HTTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
    }
  }
  loadMore() {
    this.visibleMatches += 8;
  }
}
