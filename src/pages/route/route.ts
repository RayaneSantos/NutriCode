import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;
declare var geolib: any;

@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})

export class RoutePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private geolocation: Geolocation, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutePage');
    this.initPage();
  }

  private initPage(){
    this.loadMap();
  }

  private loadMap(){
        this.geolocation.getCurrentPosition().then((result) => {
          let mapOptions = {
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          let mapDiv = document.getElementById('route-map');

          let map = new google.maps.Map(mapDiv, mapOptions);

          let directionsRenderer = new google.maps.DirectionsRenderer();
          directionsRenderer.setMap(map);

          let origin = new google.maps.LatLng(result.coords.latitude, result.coords.longitude);
          let destination = new google.maps.LatLng(-3.7253282, -38.5543709);

          let directionsService = new google.maps.DirectionsService();

          var params = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
          };
          directionsService.route(params, (result,status)=> {
            if (status === google.maps.DirectionsStatus.OK){
              directionsRenderer.setDirections(result)
            }
          });

        });
}
}
