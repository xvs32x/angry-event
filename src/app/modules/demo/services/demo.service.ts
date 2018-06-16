import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoI } from '../interfaces/demo';
import { Observable } from 'rxjs';

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {

    }

    getList(): Observable<DemoI[]> {
        return this.http.get<DemoI[]>('./assets/json/demo.json');
    }

}
