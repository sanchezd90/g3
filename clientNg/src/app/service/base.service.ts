import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class BaseService {
  
    baseUrl: string = 'http://localhost:4000/api';
    endPoint: string = '';    

    constructor(private http: HttpClient) { }    

    setEndPoint(endpoint: string) {
      this.endPoint = endpoint;
    }
  
    handlerError({status}: any) { 
      if (status === 404) {
        console.log('Not found')
      } else if (status ===500){
        console.log('Server error')
      }
    }
  
    async get(){
      try {
        return await this.http.get(`${this.baseUrl}/${this.endPoint}`).toPromise();
      } catch (error) {
        return console.log(error)
      }
    }
  
    async post(params:any){
      try {        
        return await this.http.post(`${this.baseUrl}/${this.endPoint}`, params).toPromise();
      } catch (error) {
        return console.log(error)
      }
    }
  }