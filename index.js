function updateObjectWithKeyAndValue(obj, key, value) {
  newObj = obj.assign({}, obj)
  newObj[key] = value
  return newObj
}
