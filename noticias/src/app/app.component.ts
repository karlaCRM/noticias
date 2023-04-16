import { Component } from '@angular/core';
import { NoticesService } from './service/notices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  listNoticias : any[] = [];
  loading: boolean = false;

constructor(private _noticiaService : NoticesService){
  this.loading=true

}

buscarNoticias(parametros: any){
  this.loading= true;
  this.listNoticias = [];
setTimeout(() => {
  this._noticiaService.getNoticias(parametros).subscribe({
    next: (data) =>{ console.log(data)
   
     this.listNoticias = data.articles;
     this.loading = false;
   
     },
     error: (error) =>{
       console.log(error)
       this.loading = false;
     }
   
   })
}, 1000);







 }



}
