var recipes = { 'Pasta': 'Sauce'};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish] = ingredients
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  return Object.assign({ prop: 1 }, { prop2: 2 })
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish] = ingredients
  return recipes
}

function deleteFromObjectByKey(recipes, dish) {
  var recipes2 = Object.assign( {}, {recipes} )
  delete recipes.dish
  return recipes
}
