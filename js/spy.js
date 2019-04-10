function spyOn(func) {
  let count = 0;
  const callingValuesCollection = new Set();
  const returningValuesCollection = new Set();

  const spy = (...args) => {
    const returnValue = func(...args);

    args.forEach(item => {
      callingValuesCollection.add(item);
    });
    returningValuesCollection.add(returnValue);
    count += 1;
    return returnValue;
  };

  spy.callCount = () => count;
  spy.wasCalledWith = val => callingValuesCollection.has(val);
  spy.returned = val => returningValuesCollection.has(val);

  return spy;
}
