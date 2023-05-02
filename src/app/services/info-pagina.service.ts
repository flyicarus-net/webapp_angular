import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
providedIn: 'root'
})
export class InfoPaginaService {
info: InfoPagina = {}; // Si no tenim la interfase InfoPagina seria de tipus any
equipo:any = []; //Donde guardamos el equipo
item:any = [];
cargada = false; // No cal dir boolean
constructor(private http: HttpClient) {
    // console.log("Servicio de infoPagina listo")
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarItem();

  }
  // Leer el archivo JSON interno
  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
  // Leer el archivo JSON externo en la Real Time DataBase de Firebase de Google
  private cargarEquipo() {
    this.http
      .get('https://webapp-angular-4d85b-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe((resp: InfoPagina) => {
        this.equipo = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
 // Leer el archivo JSON externo en la Real Time DataBase de Firebase de Google
 private cargarItem() {
  this.http
    .get('https://webapp-angular-4d85b-default-rtdb.europe-west1.firebasedatabase.app/item.json')
    .subscribe((resp: InfoPagina) => {
      this.item = resp; // provar resp. I veurem les propietats JSON
      console.log(resp);
    });
}

}