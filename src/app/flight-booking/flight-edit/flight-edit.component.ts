import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Flight} from "../../entities/flight";
import {ComponentWithCanDeactivate} from "../../shared/deactivation/component-with-can-deactivate";

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements ComponentWithCanDeactivate, OnInit {

    id: string;
    flight: Flight;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.params.subscribe(p => {
            this.id = p['id'];
        });

        this.route.data.subscribe((d) => {

            this.flight = d['flight'];

        })

    }

    exitWarning = {
        show: false,
        resolve: null
    }

    decide(decision: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    }

    canDeactivate() {
        this.exitWarning.show = true;
        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        });
    }

    save() {

    }

}