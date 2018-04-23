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
  delete recipes.dish
}

  1) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object 
  and returns the new object (it is non-destructive):