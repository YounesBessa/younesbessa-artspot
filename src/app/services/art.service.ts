import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { environment } from '../../environments/environment';
import { Art } from '../models/art';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtService {
    private url = environment.apiUrl;

    constructor(private http: HttpClient){}

    getAll(){
        const observable = new Observable<Array<any>>(observer => {
            Storage.get({
                key: 'arts',
            }).then(cached => {
                if(cached.value){
                    observer.next(JSON.parse(cached.value));
                }else{
                    this.http.get<Array<any>>(this.url).subscribe(data => {
                        observer.next(data);
                        Storage.set({
                            key: 'arts',
                            value: JSON.stringify(data),
                        });
                    });
                }
            });
        });

        return observable;
    }

    get(id: number){
        return this.http.get<any>(this.url + id);
    }

    add(art: Art){
        return this.http.post(this.url, art);
    }
}
