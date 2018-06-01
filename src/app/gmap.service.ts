import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GmapService {

  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
      // console.log(data)
      });
  }
  public getJSON(): Observable<Response> {
   return this.http.get("./assets/latlong.json");
  }

  public plotMap(){
    var mapdiv= document.getElementById("gmap");
    var mapProp = {
      center: new google.maps.LatLng(-24.134293, 133.665762),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(mapdiv,mapProp);
    return map;
  }

  public plotPolyline(latlong){
    var lineRoute = new google.maps.Polyline({
      path: latlong,
      geodesic: true,
      strokeColor: '#F88013',
      strokeOpacity: 1.0,
      strokeWeight: 4
  });
  return lineRoute;
  }

  public inOutPoints(latlong, map,lineRoute){
    var contentPanel='<div id="content">'+
    '<input type="radio" value="Input Nomination Point" name="type" ngModel> Input Nomination Point'+'<hr>'+'<input type="radio" value="Exit Nomination Point" name="type" ngModel> Exit Nomination Point'+'<hr>'+
    '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentPanel
    });
    //for (var i = 0; i < latlong.length; i++){
      var d = latlong,
      latLng = new google.maps.LatLng(d.lat, d.lng); 

      var Pointer={
        url:"assets/Pointer.png",
        anchor: new google.maps.Point(11,11)
      }
      
      // Creating a marker and putting it on the map
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon:Pointer
      });
    
      marker.addListener('click', function() {
        map.setZoom(6);
        map.setCenter(latlong);     
        // this.addMarker(latlong, map);
        marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
      });
      
    //} 
    
    lineRoute.setMap(map);
  }
  
  // public addMarker(latlong, map) {
  //   var mapMarker={
  //     url:"assets/map-marker.png",
  //     anchor: new google.maps.Point(28,70)
  //   }
    
  //   var marker = new google.maps.Marker({
  //     position: latlong,
  //     map: map,
  //     icon:mapMarker
  //   });
  // }
}
