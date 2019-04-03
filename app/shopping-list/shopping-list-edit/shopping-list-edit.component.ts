import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ingredients;
  @ViewChild('f') slForm: NgForm;

// @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  this.subscription =  this.slService.startedEditing.subscribe(
    (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    }
  );
  }
  OnSubmitNewitem(form: NgForm) {
   const value = form.value;
  const newIngredient = new Ingredients(value.name, value.amount);
  if (this.editMode) {
    this.slService.updateIngredients(this.editedItemIndex, newIngredient);
  } else {
    this.slService.addIngredients(newIngredient);
  }
  this.editMode = false;
  form.reset();


  // this.ingredientAdded.emit(newIngredient);

  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
 this.onClear();
 this.slService.deleteIngredients(this.editedItemIndex);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
