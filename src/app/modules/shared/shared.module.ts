import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ErrorComponent } from '../../components/error/error.component';
import { CountryFlagPipe } from '../../pipes/country-flag.pipe';
import { ExpandableDirective } from '../../directives/expandable.directive';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

const directives: Array<any> = [
    HeaderComponent,
    LoaderComponent,
    ErrorComponent,
    CountryFlagPipe,
    ExpandableDirective,
];

@NgModule({
    declarations: directives,
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    providers: [BatteryStatus],
    exports: directives,
})
export class SharedModule { }
