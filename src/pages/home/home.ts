import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage='LoginPage';
  constructor(
    public navCtrl: NavController,
    private afAuth:AngularFireAuth) {
        
  }
  iniciarSecionFacebook(){
     this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
     .then(resultado =>console.log(resultado));
  }
  
}
