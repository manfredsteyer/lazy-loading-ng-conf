import { Component } from '@angular/core';
import {Flight} from "../../entities/flight";
import {Http, URLSearchParams, Headers } from '@angular/http';
import {FlightService} from "../services/flight.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";
    public selectedFlight: Flight;

    constructor(private flightService: FlightService, route: ActivatedRoute) {

        route.queryParams.subscribe((p) => {
            console.debug('queryParams', p);
        })


    }

    // cmp.flights
    public get flights() {
        return this.flightService.flights;
    }

    public get flights$() {
        return this.flightService.flights$;
    }

    public delay() {
        this.flightService.delay();
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        this.flightService
            .find(this.from, this.to);

            // .map(function(resp) { return resp.json() })

    }
}