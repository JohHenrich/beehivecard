import { Locations } from 'src/models/location.class';

import { Injectable } from '@angular/core';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';

export class DataService {
  location = new Locations();
  beecolony = new Beecolony();
  entrie = new Entries();
  currentLocationId = "";
  currentBecoloneyId = "";
  currentEntrieId = "";
  allLocations = [];
  allBecoloneys = [];
  allEntries = [];
  allTasks =[];
  allGeneralEntries =[];

 
}