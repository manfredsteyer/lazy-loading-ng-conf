import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FlightHistoryComponent} from "./flight-history/flight-history.component";
import {CustomPreloadingStrategy} from "./shared/preload/custom-preloading.strategy";
import {AuthLoadGuard} from "./shared/auth/auth.load.guard";
import {BookingsComponent} from "./bookings/bookings.component";
import {AuthChildGuard} from "./shared/auth/auth.child.guard";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";

let APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'bookings',
        component: BookingsComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    {
        path: 'history',
        component: FlightHistoryComponent,
        outlet: 'aux'
    },

    {
        path: '**',
        redirectTo: 'home'
    }
];

export let AppRouterModule = 
            RouterModule.forRoot(
                APP_ROUTES, {
                    preloadingStrategy: PreloadAllModules
                });

































//
//
//
//
//









//
/*
 {
 path: 'flight-booking',
 loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
 },
 */