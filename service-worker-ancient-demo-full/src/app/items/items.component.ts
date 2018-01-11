import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public items;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe((data) => {
      this.items = data;
    })
  }
}
