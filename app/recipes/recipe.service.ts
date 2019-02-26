import { Recipe } from './recipe-list/recipe-model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe ('Beans', 'Ingredients needed to prepare beans', 'assets/img/beans.jpg', [
        new Ingredients('Onions', 2),
        new Ingredients('Beans', null),
        new Ingredients('salt', null),
        new Ingredients('maggi', 5)
        ]),
        new Recipe ('Fried Rice', 'Ingredients needed to prepare fried rice', 'assets/img/fried_rice.jpg', [
            new Ingredients('Rice', 2),
            new Ingredients('salt', null),
            new Ingredients('Maggi', null),
            new Ingredients('spices', null)
        ]),
        // new Recipe ('Beans', 'This is my favourite meal', 'assets/img/cates.png')
      ];
      constructor(private slService: ShoppingListService) {}
      getRecipes() {

      return  this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredientsToShopping(ingredients);

      }
}
