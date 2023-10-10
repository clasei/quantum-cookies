import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class FeynmanSaysService { 

  private readonly QUOTES_URL = 'assets/feynman-says.json';

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<string> {
    return this.http.get<string[]>(this.QUOTES_URL).pipe(
      map(quotes => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      })
    );
  }
}
