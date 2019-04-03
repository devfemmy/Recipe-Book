import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageData } from '../shared/data-storage.data';
import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
OnSelect(feature: string) {
this.featureSelected.emit(feature);
}
  constructor(private dataStorageData: DataStorageData) { }


  ngOnInit() {
  }
  onSaveData() {
    this.dataStorageData.storeRecipes()
    .subscribe((response: Response) => {
      console.log(response);
    });
  }
  // onFetchData() {
  //   // this.dataStorageData.getRecipes();
  // }

}
