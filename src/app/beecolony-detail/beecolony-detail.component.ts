import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { Beecolony } from 'src/models/beecolony.class';

@Component({
  selector: 'app-beecolony-detail',
  templateUrl: './beecolony-detail.component.html',
  styleUrls: ['./beecolony-detail.component.scss']
})



export class BeecolonyDetailComponent implements OnInit {
  locationId = '';
  beecolonyId = '';


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.beecolonyId = paramMap.get('id');
     
    })
    

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .valueChanges({ idField: 'customIdName' })
      .subscribe((beecolony: any) => {
        console.log(beecolony);

      })


  }
  getLocation() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .valueChanges()
      .subscribe((locations: any) => {
        //this.locations = new Locations(locations);
      })
    //console.log('Name:', this.locations)
  }

}
