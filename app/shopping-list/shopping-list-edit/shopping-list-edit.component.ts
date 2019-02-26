import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
// @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  OnAddNewitem() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmt = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredients(ingName, ingAmt);
  this.slService.addIngredients(newIngredient);


  // this.ingredientAdded.emit(newIngredient);

  }

}
