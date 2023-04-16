import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

@Output() parametrosSeleccionados = new EventEmitter<any>()



categoriaSeleccionada = 'general';
paisSeleccionado = 'mx'

  categorias: { value: string; nombre: string; }[] = [
    {value: 'general', nombre: 'General' },
    {value: 'business', nombre: 'Negocios' },
    {value: 'entertainment', nombre: 'Entretenimiento' },
    {value: 'health', nombre: 'Salud' },
    {value: 'science', nombre: 'Ciencia' },
    {value: 'sports', nombre: 'Deportes' },
    {value: 'technology', nombre: 'Tecnología' },
  ]

  paises: any[] =[
    {value: 'mx', nombre: 'México'},
    {value: 'ar', nombre:'Argentina'},
    {value: 'ca', nombre:'Canada'},
    {value: 'br', nombre:'Brazil'},
    {value: 'id', nombre:'India'},
    {value: 'fr', nombre:'Francia'},
    {value: 'us', nombre:'Estados Unidos'},
    {value: 'gb', nombre:'Reino Unido'},

  ]



  ngOnInit(): void {
    
  }

constructor(){

}

buscarNoticia(){
 const PARAMETROS = {
  categoria: this.categoriaSeleccionada,
  pais: this.paisSeleccionado
 }

this.parametrosSeleccionados.emit(PARAMETROS)

}

}

