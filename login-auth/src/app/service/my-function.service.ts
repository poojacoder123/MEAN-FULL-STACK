import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyFunctionService {
apiURL = "http://localhost:8080/api/hospital/"
  constructor(private _http: HttpClient) { }

  registerSuperAdmin(data:any){
  return this._http.post<any>(this.apiURL, data)
  }
  loginSuperAdmin(data:any){
    return this._http.post<any>("http://localhost:8080/api/login", data)
    }
}
