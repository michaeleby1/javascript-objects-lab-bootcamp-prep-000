var recipes = { 'Pasta': 'Sauce'};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish] = ingredients
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  return Object.assign({ prop: 1 }, { prop2: 2 })
};
