import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectI } from '../interfaces/project';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient) {

    }

    getList(): Observable<ProjectI[]> {
        return this.http.get<ProjectI[]>('./assets/json/project.json');
    }

}
