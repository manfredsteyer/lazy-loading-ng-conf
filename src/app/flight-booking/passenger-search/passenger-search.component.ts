import { Component, OnInit } from '@angular/core';
import {SimpleAuthService} from "../../shared/auth/simple-auth.service";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
    templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent{
    name: string;

    constructor(authService: AuthService) {
        this.name = authService.userName;
    }
}