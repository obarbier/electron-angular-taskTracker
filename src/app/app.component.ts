import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from './_services/firebase-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'electron-app';
 constructor(private firebaseServiceService: FirebaseServiceService) { }
  ngOnInit() {

    var getDoc = this.firebaseServiceService.getPolicies()
      .subscribe(doc => {
    console.log(doc)
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
  })
}
}
