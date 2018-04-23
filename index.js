var recipes = { 'Pasta': 'Sauce' };

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish] = ingredients
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  Object.assign({recipes2}, { 'Pasta': 'Sauce' }, { dish: ingredients })
};
