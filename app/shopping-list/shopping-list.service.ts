import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    startedEditing = new Subject<number>();
   private ingredients: Ingredients[] = [
        // new Ingredients ('tomato', 50),
        new Ingredients ('ginger', 86),
        new Ingredients ('pepper', 86),
      ];
      getIngredients() {
        return this.ingredients.slice();
      }
      getIngredient(index: number) {
        return this.ingredients[index];
      }
      addIngredients(ingredient: Ingredients) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredientsToShopping(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      updateIngredients(index: number, newIngredients: Ingredients) {
        this.ingredients[index] = newIngredients;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredients(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}
