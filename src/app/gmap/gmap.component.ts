import { Component, OnInit } from '@angular/core';
import { GmapService } from '../gmap.service';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  
  constructor(private gmap : GmapService) { }

  ngOnInit() {
    let latlong;
    //Display map
    var map=this.gmap.plotMap();

    this.gmap.getJSON().subscribe(data => {
      latlong=data.json();
    
      //console.log(latlong);
      //Plot Polyline
      var lineroute=this.gmap.plotPolyline(latlong);

      // var infowindow = new google.maps.InfoWindow();
      //marker
      for (var i = 0; i < latlong.length; i++){
        this.gmap.inOutPoints(latlong[i],map,lineroute);
      }
      
    });
  }

}
