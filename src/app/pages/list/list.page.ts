import { Component } from '@angular/core';
import { ArtService } from '../../services/art.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage{
    arts: Array<any>;
    loading = true;

    constructor(private artService: ArtService){
        this.load();
    }

    load(){
        this.artService.getAll().subscribe(data => {
            this.arts = data;
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
}
