import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customMonthShortNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  customPickerOptions = {
    buttons: [
      {
        text: "Hola",
        handler: ( event: any ) => {
          console.log(event);
        }
      },
      {
        text: "Mundo",
        handler: () => {
          console.log("Mundo");
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event: any ) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
