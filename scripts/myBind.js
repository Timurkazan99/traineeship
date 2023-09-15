function myBind (
  func,
  newContext,
  ...arg
) {

  return function (...newArgs) {
    return func.call(
      newContext,
      ...arg,
      ...newArgs
    );
  };
}

export default myBind;