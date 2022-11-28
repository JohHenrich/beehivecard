import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Beecolony } from 'src/models/beecolony.class';
import { Locations } from 'src/models/location.class';
import { DataService } from './data.servie';



@Injectable({
    providedIn: 'root'
})
export class FireService {

    allTasks: any = [];
    allGeneralEntries: any = [];
    entrie: any = [];

    location = [];

    constructor(private data: DataService, private firestore: AngularFirestore) {
    }

    getLocation() {
        this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .valueChanges({ idField: 'customIdName' })
            .subscribe((location: any) => {
                this.data.location = new Locations(location);

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

    getBeecoloney() {
        this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .doc(this.data.currentBecoloneyId)
            .valueChanges({ idField: 'customIdName' })
            .subscribe((beecolony: any) => {
                console.log(beecolony);
                this.data.beecolony = new Beecolony(beecolony);
            })
    }

    getBeecoloneys() {
        this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .valueChanges({ idField: 'customIdName' })
            .subscribe((beecolonys: any) => {
                console.log(beecolonys);
                this.data.allBecoloneys = beecolonys;
            })
    }


    getEntrie(entrieId) {
        return this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .doc(this.data.currentBecoloneyId)
            .collection('entries')
            .doc(entrieId)
            .valueChanges({ idField: 'customIdName' });



    }


    getEntries() {
        return this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .doc(this.data.currentBecoloneyId)
            .collection('entries')
            .valueChanges({ idField: 'customIdName' })


    }


    getTasks(entrieId: string) {
        return this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .doc(this.data.currentBecoloneyId)
            .collection('entries')
            .doc(entrieId)
            .collection('tasks')
            .valueChanges({ idField: 'customIdName' });
    }

    getGeneralEntries(entrieId) {
        return this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .doc(this.data.currentBecoloneyId)
            .collection('entries')
            .doc(entrieId)
            .collection('generalEntries')
            .valueChanges({ idField: 'customIdName' })
    }
    
    getEvaluationTask(entrieId) {
        return this.firestore
            .collection('locations')
            .doc(this.data.currentLocationId)
            .collection('beecolonys')
            .doc(this.data.currentBecoloneyId)
            .collection('entries')
            .doc(entrieId)
            .collection('evaluationTask')
            .valueChanges({ idField: 'customIdName' })
    }
}