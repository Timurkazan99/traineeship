function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function deepEqual(obj1, obj2) {
  if(!isObject(obj1) || !isObject(obj2)) {
    return (
      (obj1.toString() == obj2.toString()) &&
      (typeof obj1 == typeof obj2)
    );
  }

  const keys = Object.keys(obj2);
  const keysLengthOfObj2 = Object.keys(obj2).length;

  if(keysLengthOfObj2 !== keys.length) return false

  for (const key of keys) {
    if(!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

export default deepEqual;
