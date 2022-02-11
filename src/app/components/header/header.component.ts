import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy{
    @Input() title = 'ArtSpot';
    @Input() icon = 'assets/logo.svg';
    batteryLevel: number;
    batterySubscription: Subscription;

    constructor(private battery: BatteryStatus){
    }

    ngOnInit(){
        console.log('enter');
        this.batterySubscription = this.battery.onChange().subscribe(data => {
            this.batteryLevel = data.level;
            this.batterySubscription.unsubscribe();
        });
    }

    ngOnDestroy(){
        console.log('test');
    }
}
