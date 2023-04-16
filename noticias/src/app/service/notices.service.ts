import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  constructor(private _http:HttpClient) { }

  
  getNoticias(parametros:any): Observable<any>{
  const url ='https://newsapi.org/v2/top-headlines?country='+ parametros.pais +  '&category=' + parametros.categoria + '&apiKey=42121f0dd96d40b5a4af1ac9ee2240e1'

  return this._http.get(url)
  }
}
