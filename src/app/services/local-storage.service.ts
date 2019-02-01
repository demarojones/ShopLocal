import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) {}

  set listing(val: any) {
    const v = this.storage.get('listings').then((data) => {
      console.log('Saving...', data);
      if (!Array.isArray(data)) {
        const initArr = [val];
        this.storage.set('listings', JSON.stringify(initArr));
      } else {
        const existingData: any[] = data;
      existingData.push(val);
      this.storage.set('listings', JSON.stringify(existingData));
      }
    });
    console.log('final val: ', v);
  }

  get listing() {
    return this.storage.get('listings');
  }

}
