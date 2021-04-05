import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  // Manejar componente de la vista. Evita el uso del [disable].
  @ViewChild( IonInfiniteScroll ) ioninfiteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData (event): any {
    console.log(event);

    setTimeout(() => {

      if (this.data.length > 50){
        this.ioninfiteScroll.complete();
        this.ioninfiteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      //event.target.complete();
      this.ioninfiteScroll.complete();
    }, 1500);
  }
}
