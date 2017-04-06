import { Injectable, Inject} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {BASE_URL} from "../../app.tokens";
import {Observable, BehaviorSubject} from "rxjs";
import {Flight} from "../../entities/flight";
import {OAuthService} from "angular2-oauth2/oauth-service";
@Injectable()
export class FlightService {

     constructor(
         private oauthService: OAuthService,
         private http: Http,
         @Inject(BASE_URL) private baseUrl: string
     ) {
     }

     public flights: Array<Flight> = [];

     public flights$ = new BehaviorSubject([]);

     delay() {
         const ONE_MINUTE = 1000 * 60;

         let oldFlights = this.flights;
         let oldFlight = oldFlights[0];
         let oldDate = new Date(oldFlight.date);
         let newDate = new Date(oldDate.getTime() + ONE_MINUTE * 15);

         let newFlight: Flight = {
             id: oldFlight.id,
             from: oldFlight.from,
             to: oldFlight.to,
             date: newDate.toISOString()
         }

         let newFlights = [
             newFlight,
             ...oldFlights.slice(1)
         ];

        this.flights = newFlights;
        this.flights$.next(newFlights);
     }


     findById(id: string): Observable<Flight> {

         // let url = this.baseUrl + "/api/flight";
         let url = "/data/flight.json";

         let headers = new Headers();
         headers.set('Accept', 'text/json');
         headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

         let search = new URLSearchParams();
         search.set('id', id);

         return this
                 .http
                 .get(url, {headers, search})
                 .map(resp => resp.json());

     }

     find(from: string, to: string): void {

         // let url = this.baseUrl + "/api/flight";
         let url = "/data/flights.json";

         let headers = new Headers();
         headers.set('Accept', 'text/json');
         headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

         // this.oauthService.hasValidAccessToken();
         // this.oauthService.hasValidIdToken();

         let search = new URLSearchParams();
         search.set('from', from);
         search.set('to', to);

         this
             .http
             .get(url, {headers, search})
             .map(resp => resp.json())
             .subscribe(
                 (flights) => {
                     this.flights = flights;
                     this.flights$.next(flights);
                 },
                 (err) => { console.warn(err); }
             );
     }

}