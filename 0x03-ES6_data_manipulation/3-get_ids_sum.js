function getStudentIdsSum(arr) {
  const reducer = (next, number) => next + number.id;
  const sum = arr.reduce(reducer, 0);
  return sum;
}
export default getStudentIdsSum;
