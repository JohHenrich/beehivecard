import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { DataService } from './data.servie';



@Injectable({
    providedIn: 'root'
})
export class FireService {

    location = [];

    constructor(private data: DataService, private firestore: AngularFirestore) {
    }

    getLocation() {
        this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .valueChanges({ idField: 'customIdName' })
            .subscribe((location: any) => {
                this.data.location = new  Locations(location);
                
            })
        console.log('Name:', this.location)
    }

    getLocations() {
        this.firestore
            .collection('locations')
            .valueChanges({ idField: 'customIdName' })
            .subscribe((location: any) => {
                this.data.allLocations = location;
                
            })
        console.log('Name:', this.location)
    }
    getBeecoloneys() {
        this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .valueChanges({ idField: 'customIdName' })
            .subscribe((beecolony: any) => {
                console.log(beecolony);
                this.data.allBecoloneys = beecolony;
            })
    }
}