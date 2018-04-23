var recipes = { 'Pasta': 'Sauce'};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish] = ingredients
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {
  return Object.assign({ prop: 1 }, { prop2: 2 })
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, dish, ingredients) {
  recipes[dish]: ingredients
  return recipes
}

1) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value)
updates `object` with the given `key` and `value` (it is destructive) and re
turns the entire updated object:
