var recipes = { 'Pasta': 'Sauce'};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish] = ingredients
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  Object.assign({Pasta: Sauce}, {dish: ingredients})
};

  1) Objects updateObjectWithKeyAndValue(object, key, value) it does not modify the original object,
   but rather returns a clone with the new data: