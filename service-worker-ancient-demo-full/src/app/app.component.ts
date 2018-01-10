import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate) {}


  ngOnInit() {
    this.swUpdate.available.subscribe(event => {
      console.log('hey we got the new version deployed :D');
    })
  }
}
