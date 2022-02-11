import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPageRoutingModule } from './show-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';

import { ShowPage } from './show.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowPageRoutingModule,
        SharedModule,
    ],
    declarations: [ShowPage]
})
export class ShowPageModule {}
