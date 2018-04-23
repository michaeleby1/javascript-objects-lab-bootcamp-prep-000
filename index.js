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

function deleteFromObjectByKey(obj, prop) {
  var obj = { prop: 1 }
  var newObj = deleteFromObjectByKey(obj, 'prop')
  return newObj
}
