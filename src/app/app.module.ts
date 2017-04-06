import { AuthModule } from './auth/auth.module';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BASE_URL} from "./app.tokens";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {FlightHistoryComponent} from "./flight-history/flight-history.component";
import {BookingsComponent} from "./bookings/bookings.component";
import {FlightBookingModule} from "./flight-booking/flight-booking.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AppRouterModule,
        AuthModule.forRoot()
        // FlightBookingModule  
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        BookingsComponent,
        FlightHistoryComponent
    ],
    providers: [
        { provide: BASE_URL, useValue: "http://www.angular.at"}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}