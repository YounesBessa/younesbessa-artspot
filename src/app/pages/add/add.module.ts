import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../modules/shared/shared.module';
import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddPageRoutingModule,
        SharedModule
    ],
    providers: [
        NativeGeocoder
    ],
    declarations: [AddPage]
})
export class AddPageModule {}
