import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  
  constructor(private auth : AuthService) { }

  ngOnInit() {
    var latlong;
    var mapdiv= document.getElementById("gmap");
    var mapProp = {
      center: new google.maps.LatLng(-24.134293, 133.665762),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(mapdiv,mapProp);
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.auth.getJSON().subscribe(data => {
      
      latlong=data.json();
      // latlong=JSON.parse(data);
      
    //  console.log(data);
      // JSONObject json = new JSONObject(latlong);
      console.log(latlong);
  });
    var latlong1 = [
        {
            "lat":-13.434869,
            "lng":130.232978,
      },
      {
        "lat":-13.364786,
        "lng":131.179467,
      },
      {
        "lat":-14.955298,
        "lng":133.020396,
      },
      {
        "lat":-16.280472,
        "lng":133.278566,
      },
      {
        "lat":-21.990372,
        "lng":131.644910,
      }
    ];
    // var length = Object.keys(latlong).length;
    // for (var i = 0, length = length; i < length; i++){
    //   var coords=latlong[i];
      var lineRoute = new google.maps.Polyline({
        path: latlong1,
        geodesic: true,
        strokeColor: '#F88013',
        strokeOpacity: 1.0,
        strokeWeight: 4
      });
    // }
    // for (var i = 0, length = latlong.length; i < length; i++) {
    //   var data = latlong[i],
    //       latLng = new google.maps.LatLng(data.lat, data.lng); 
    
    //   // Creating a marker and putting it on the map
    //   var marker = new google.maps.Marker({
    //     position: latLng,
    
    //   });
    // } 
    
    lineRoute.setMap(map);
  }

}
