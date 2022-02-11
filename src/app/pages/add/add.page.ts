import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from '@capacitor/geolocation';

import { Art } from '../../models/art';
import { countries } from '../../constants/countries';
import { ArtService } from '../../services/art.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    art = new Art();
    countries = countries;

    constructor(
        private geocoder: NativeGeocoder,
        private router: Router,
        private toastCtrl: ToastController,
        private artService: ArtService
    ){}

    ngOnInit(){
        this.fillPosition();
    }

    async fillPosition(){
        Geolocation.watchPosition({enableHighAccuracy: true}, async (position, err) => {
            if(!err){
                const results = await this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude);
                const address = results.pop();
                if(address.locality){
                    this.art.name = address.locality;
                }
                if(address.countryCode){
                    this.art.country = address.countryCode.toLowerCase();
                }
            }
        });
    }

    save(){
        this.artService.add(this.art).subscribe(async () => {
            const toast = await this.toastCtrl.create({
                message: 'Votre destination à été ajoutée',
                duration: 5000,
                color: 'success',
            });
            toast.present();
            this.router.navigate(['/list']);
        });
    }
}
