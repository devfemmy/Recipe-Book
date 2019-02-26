import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
   private ingredients: Ingredients[] = [
        new Ingredients('Tomatoes', 50),
        new Ingredients('Onions', 80)
      ];
      getIngredients() {
        return this.ingredients.slice();
      }
      addIngredients(ingredient: Ingredients) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredientsToShopping(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
