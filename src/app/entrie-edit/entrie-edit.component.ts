import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { DialogTaskFoodComponent } from '../dialog-task-feeding/dialog-task-feeding.component';
import { DialogTaskTreatmentComponent } from '../dialog-task-treatment/dialog-task-treatment.component';
import { DialogTaskHarvestComponent } from '../dialog-task-harvest/dialog-task-harvest.component';
import { DialogTaskGeneralComponent } from '../dialog-task-general/dialog-task-general.component';
import { DialogTaskEvaluationComponent } from '../dialog-task-evaluation/dialog-task-evaluation.component';
import { GeneralTask } from 'src/models/generaltask.class';
import { EvaluationTask } from 'src/models/evaluationtask.class';

@Component({
  selector: 'app-entrie-edit',
  templateUrl: './entrie-edit.component.html',
  styleUrls: ['./entrie-edit.component.scss']
})
export class EntrieEditComponent implements OnInit {
  beecolony: Beecolony = new Beecolony();
  locationId = '';
  beecolonyId = '';
  entriesId = '';

  entries: Entries = new Entries();
  allEntries = [];
  entrieDate: Date;
  allBeecolonys = [];
  allTasks = [];
  generalCustomId = '';
  generalEntries: GeneralTask = new GeneralTask();
  generalList = [];
  generalData: boolean = false;
  dataList = [];
  evaluationEntries: EvaluationTask = new EvaluationTask();
  evaluationList = [];
  evaluationListData = [];
  evaluationCustomId = '';
  evaluationData: boolean = false;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.beecolonyId = paramMap.get('id');
      this.beecolonyId = this.beecolonyId.slice(20, 40);
      this.locationId = paramMap.get('id');
      this.locationId = this.locationId.slice(0, 20);
      this.entriesId = paramMap.get('id');
      this.entriesId = this.entriesId.slice(40, 60);
    })
    this.getBecolony();
    this.getEntries();
    this.getTasks();
    this.getGeneral();
    this.getEvaluationTask();

  }
  getBecolony() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .valueChanges()
      .subscribe((beecolony: any) => {
        console.log(beecolony);
        this.beecolony = new Beecolony(beecolony);
        console.log('Name:', this.beecolony.name);
      })
    //console.log('Name:', this.locations)
  }

  getEntries() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .valueChanges()
      .subscribe((entries: any) => {
        this.entries = new Entries(entries);
        console.log('Entries Des.:', this.entries);
        this.entrieDate = new Date(Number(this.entries.date));
      })

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .valueChanges({ idField: 'customIdName' })
      .subscribe((entries: any) => {

        this.allEntries = entries;
        console.log('allEntries:', this.allEntries);

      })
    //console.log('Name:', this.locations)
  }

  getTasks() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .collection('tasks')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((alltasks: any) => {
        console.log(alltasks);
        this.allTasks = alltasks;
      })
  }

  getGeneral() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .collection('generalEntries')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((generalEntries: any) => {
        this.generalEntries = new GeneralTask(generalEntries[0]);
        console.log('generalEntries: ', this.generalEntries);
        this.generalCustomId = generalEntries[0].customIdName;
        this.convertGeneralData();
      })
  }

  getEvaluationTask() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .collection('evaluationTask')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((evaluationEntries: any) => {
        this.evaluationEntries = new EvaluationTask(evaluationEntries[0]);
        console.log('allTasks: ', this.evaluationEntries);
        this.evaluationCustomId = evaluationEntries[0].customIdName;
        this.convertEvalutionData();
      })
  }


  convertGeneralData() {
    this.generalList = Object.keys(this.generalEntries);
    if (this.generalList.length > 0) {
      this.generalData = true;
    }


    Object.entries(this.generalEntries).forEach(entry => {
      const [key, value] = entry;

      this.dataList.push(value);

    });

  }

  convertEvalutionData() {
    this.evaluationList = Object.keys(this.evaluationEntries);
    if (this.evaluationList.length > 0) {
      this.evaluationData = true;
    }


    Object.entries(this.evaluationEntries).forEach(entry => {
      const [key, value] = entry;

      this.evaluationListData.push(value);

    });

  }


  editTask(task: Task, treatment) {
    switch (treatment) {
      case 'Treatment':
        this.openDialogeAddTaskTreatment(task);
        break;

      case 'Feeding':
        this.openDialogeAddTaskFood();

        break

      case 'Honey harvest':
        this.openDialogeAddTaskHarvest();

        break

      default:
        break;
    }

  }
  deleteTask(customIdName) {
    

  }

  openDialogeAddTaskFood() {
    const dialog = this.dialog.open(DialogTaskFoodComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
  }

  openDialogeAddTaskTreatment(task) {
    const dialog = this.dialog.open(DialogTaskTreatmentComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.task = task;
  }


  openDialogeAddTaskHarvest() {
    const dialog = this.dialog.open(DialogTaskHarvestComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
  }


  openDialogeAddTaskGeneral() {
    const dialog = this.dialog.open(DialogTaskGeneralComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.generalTask = this.generalEntries;
  }


  openDialogeEditTaskGeneral() {
    const dialog = this.dialog.open(DialogTaskGeneralComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.generalTask = this.generalEntries;
    dialog.componentInstance.customIdName = this.generalCustomId;
  }

  openDialogeAddTaskEvaluation() {
    const dialog = this.dialog.open(DialogTaskEvaluationComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
  }


  openDialogeEditTaskEvaluation() {
    const dialog = this.dialog.open(DialogTaskEvaluationComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.evaluationEntries = this.evaluationEntries;
    dialog.componentInstance.evaluationCustomId = this.evaluationCustomId;
  }

}
