import { Recipe } from './recipe-list/recipe-model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
    // recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe ('Beans', 'Ingredients needed to prepare beans', 'assets/img/beans.jpg', [
        new Ingredients('Onions', 2),
        new Ingredients('Beans', 3),
        new Ingredients('salt', 6),
        new Ingredients('maggi', 5)
        ]),
        new Recipe ('Fried Rice', 'Ingredients needed to prepare fried rice', 'assets/img/fried_rice.jpg', [
            new Ingredients('Rice', 2),
            new Ingredients('salt', 7),
            new Ingredients('Maggi', 6),
            new Ingredients('spices', 6)
        ]),
        // new Recipe ('Beans', 'This is my favourite meal', 'assets/img/cates.png')
      ];
      constructor(private slService: ShoppingListService) {}
      setRecipe(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());

      }
      getRecipes() {

      return  this.recipes.slice();
      }
      getRecipe(index: number) {
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredientsToShopping(ingredients);

      }
      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

}
