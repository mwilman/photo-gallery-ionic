import {Component, effect, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFabButton,
  IonFab,
  IonIcon,
  IonRow, IonGrid, IonImg, IonCol, ActionSheetController
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {PhotoService, UserPhoto} from "../services/photo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon, IonRow, IonGrid, IonImg, IonCol]
})
export class Tab2Page {
  actionSheetController = inject(ActionSheetController);
  photoService = inject(PhotoService)

  constructor() {
    effect(async () => {
      await this.photoService.loadSaved()
    })
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery()
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }
}
