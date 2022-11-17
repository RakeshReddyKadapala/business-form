import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata, Idata1 } from './data';

import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ServicefileService {
    public search = new BehaviorSubject<string>("")
    addDataURL: string;
    getDataUrl: string;

    constructor(private http: HttpClient) {
        this.addDataURL = 'http://localhost:8085/api/data';
        this.getDataUrl = 'http://localhost:8085/api/data';
    }

    //get

    getData(): Observable<Idata[]> {

        return this.http.get<Idata[]>(this.getDataUrl);

    }
    //post

    addingData(emp: Idata1): Observable<Idata1> {

        return this.http.post<Idata1>(this.addDataURL, emp);

    }

    // //get
    // public getData(): Observable<Idata[]> {
    // return this.httpc.get<Idata[]>('http://localhost:8085/api/data');
    // }

    // //post
    // public addingData(body: Idata): Observable<any> {
    // // const headers = { 'content-type': 'application/json' }
    // // const emp = JSON.stringify(body);
    // // console.log(emp);
    // //return this.httpc.post('http://localhost:8085/api/data', emp, { 'headers': headers });//use emp only
    // return this.httpc.post('http://localhost:8085/api/data', body);
    // }
}