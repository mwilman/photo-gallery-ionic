import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFabButton,
  IonFab,
  IonIcon,
  IonRow, IonGrid, IonImg, IonCol
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon, IonRow, IonGrid, IonImg, IonCol]
})
export class Tab2Page {

  constructor() {}
  photoService = inject(PhotoService)

  addPhotoToGallery() {
    this.photoService.addNewToGallery()
  }
}
