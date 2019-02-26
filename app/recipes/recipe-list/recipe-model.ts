import { Ingredients } from 'src/app/shared/ingredients.model';

export class Recipe {
public ingredients: Ingredients[];
public name: string;
public description: string;
public imagePath: string;

constructor(name: string, des: string, imagePath: string, ingredients: Ingredients[]) {
this.name = name;
this.description = des;
this.imagePath = imagePath;
this.ingredients = ingredients;
 }
}
