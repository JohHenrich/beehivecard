import { Locations } from 'src/models/location.class';

import { Injectable } from '@angular/core';

export class DataService {
  location = new Locations();
  currentLocationId = "";
  currentBecoloneyId = "";
  currentEntrie = "";
  allLocations = [];
  allBecoloneys = [];
  allEntries = [];

 
}