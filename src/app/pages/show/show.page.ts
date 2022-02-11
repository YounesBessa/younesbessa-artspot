import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage{
    art: any;
    loading = true;

    constructor(route: ActivatedRoute, private artService: ArtService){
        const id = parseInt(route.snapshot.params.id, 10);
        this.load(id);
    }

    load(id: number){
        this.artService.get(id).subscribe(data => {
            this.art = data;
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
}
