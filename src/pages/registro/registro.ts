import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario={
    email:"",
    password1:"",
    password2:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertController:AlertController,
      private afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  alerta(titulo,subtitulo){
    let alerta=this.alertController.create({
      title:titulo,
      subTitle:subtitulo,
      buttons:['listo']
    });
    alerta.present();
  }
  crearCuenta(){
    if(this.usuario.password1 !==this.usuario.password2 ){
        this.alerta("Error contraseña","Las contraseñas no coinciden");
        this.usuario.password1="";
        this.usuario.password2="";

    }else{
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(this.usuario.email,this.usuario.password1)
      .then(resultado => console.log(resultado))
      .catch(error => console.log(this.alerta('error',error)))
    }
  }

}
