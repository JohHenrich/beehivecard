import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { DialogTaskFoodComponent } from '../dialog-task-feeding/dialog-task-feeding.component';
import { DialogTaskTreatmentComponent } from '../dialog-task-treatment/dialog-task-treatment.component';
import { DialogTaskHarvestComponent } from '../dialog-task-harvest/dialog-task-harvest.component';
import { DialogEditHarvestComponent } from '../dialog-edit-harvest/dialog-edit-harvest.component';
import { DialogTaskGeneralComponent } from '../dialog-task-general/dialog-task-general.component';
import { DialogTaskEvaluationComponent } from '../dialog-task-evaluation/dialog-task-evaluation.component';
import { Task } from 'src/models/task.class';
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
  feedingData: boolean = false;
  treatmentData: boolean = false;
  havestData: boolean = false;
  
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
        this.getTaskData();
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
        if (generalEntries.length != 0) {
          this.generalCustomId = generalEntries[0].customIdName;
          this.convertGeneralData();
        }
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

  getTaskData() {
    for (let index = 0; index < this.allTasks.length; index++) {

      if (this.allTasks[index].header == "Treatment") {
        this.treatmentData = true;
      }
      if (this.allTasks[index].header == "Feeding") {
        this.feedingData = true;
      }
      if (this.allTasks[index].header == "Harvest") {
        this.havestData = true;
      }
    }

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




  editTask(task: Task, treatment, customIdName) {
    switch (treatment) {
      case 'Treatment':
        this.openDialogeEditTaskTreatment(task, customIdName);
        break;

      case 'Feeding':
        this.openDialogeEditFeeding(task, customIdName);

        break

      case 'Honey harvest':
        this.openDialogeEditTaskHarvest(task, customIdName);

        break

      default:
        break;
    }

  }
  deleteTask(customIdName) {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .collection('tasks')
      .doc(customIdName)
      .delete();

  }

  openDialogeAddTaskFeeding() {
    const dialog = this.dialog.open(DialogTaskFoodComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
  }
  openDialogeEditFeeding(task: Task, customIdName) {
    const dialog = this.dialog.open(DialogTaskFoodComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.feedingCustomId = customIdName;
    dialog.componentInstance.task = task;
  }

  openDialogeAddTaskTreatment() {
    const dialog = this.dialog.open(DialogTaskTreatmentComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;

  }

  openDialogeEditTaskTreatment(task: Task, customIdName) {
    const dialog = this.dialog.open(DialogTaskTreatmentComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.task = task;
    dialog.componentInstance.treatmentCustomId = customIdName;
  }

  openDialogeAddTaskHarvest() {
    const dialog = this.dialog.open(DialogTaskHarvestComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;

  }

  openDialogeEditTaskHarvest(task: Task, customIdName) {
    const dialog = this.dialog.open(DialogTaskHarvestComponent);
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.entrieId = this.entriesId;
    dialog.componentInstance.havestCustomId = customIdName;
    dialog.componentInstance.saveValue = task;
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
