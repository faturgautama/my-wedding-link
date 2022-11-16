import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDaftarUndangan, IUcapan } from '../model/kiki-sandy.model';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(
        private httpClient: HttpClient,
        private utilityService: UtilityService,
    ) { }

    getAllUcapan(): Observable<IUcapan[]> {
        return this.httpClient.get(`${environment.databaseUrl}ucapan.json`)
            .pipe(
                map((result: any) => {
                    let data = [];

                    for (const key in result) {
                        if (result.hasOwnProperty(key)) {
                            data.push({ ...result[key], id: key });
                        }
                    };

                    return data;
                })
            )
    }

    submitUcapan(data: IUcapan): Observable<any> {
        return this.httpClient.post(`${environment.databaseUrl}ucapan.json`, data);
    }
}
