function updateObjectWithKeyAndValue(obj, key, value) {
  newObj = Object.assign({}, obj)
  newObj[key] = value
  return newObj
}
