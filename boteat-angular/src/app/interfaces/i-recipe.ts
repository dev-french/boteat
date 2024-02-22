export interface Recipe {
  _id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  prep_time: string;
  cook_time: string;
  difficulty: string;
  dish_type: string;
  servings: number;
  food_category: string;
  dietary_detail: string;
  origin_region: string;
}
