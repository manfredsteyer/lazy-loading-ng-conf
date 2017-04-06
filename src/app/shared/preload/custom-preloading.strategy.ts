import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from 'rxjs';


export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {

        return Observable.of(true).delay(7000).flatMap(_ => fn());

    }
}

/*
export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {

        if (route.data['preload']) {
            return fn();
        }
        else {
            return Observable.of(null);
        }

    }

}
*/