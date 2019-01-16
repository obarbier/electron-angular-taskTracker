import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { }

  getPolicies() {
    return this.firestore.collection('policies').doc('test').get();
}
}
