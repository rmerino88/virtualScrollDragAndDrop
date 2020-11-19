import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { PaisesService } from '../../../app/services/paises.service';
import { Pais } from '../models/paises.model';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  paisesAlt: any = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {

    this.paisesService.getPaises().subscribe(
      (countries: any[]) =>
        countries.forEach(country => {
          this.paises.push(new Pais(country.name, country.alpha2Code));
        })
    );

    this.paisesService.getPaises().subscribe(
      countries => this.paisesAlt = countries
    );
  }

  drop(event: CdkDragDrop<Pais>) {
    console.log(event);
    // Para persistir este cambio de desplzar un elemento
    // dentro de un array es necesario hacer uso de la siguiente funcion
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }

}
