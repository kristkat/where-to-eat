import {AfterContentInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

declare var google: any;
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit {

    @ViewChild('Map') mapElement: ElementRef;
    map: any;
    location = {lat: null, lng: null};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;

    /*Your API Key*/

    constructor(public zone: NgZone, public geolocation: Geolocation) {

    }

    ngAfterContentInit() {

    }

    ngOnInit() {
        this.loadMap();
    }

    loadMap() {
        /*Get Current location*/
        /*Map options*/
        const mapOptions = {
            center: {lat: -34.397, lng: 150.644},
            zoom: 21,
            mapTypeControl: google.maps.MapTypeId.ROADMAP
        };
        console.log('work ', mapOptions.center);
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


        /**
         setTimeout(() => {

        }, 3000);
         **/
    }

}
