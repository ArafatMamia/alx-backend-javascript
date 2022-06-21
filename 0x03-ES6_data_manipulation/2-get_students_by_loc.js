function getStudentsByLocation(arr, city) {
  const ans = arr.filter((value) => value.location === city);
  return ans;
}
export default getStudentsByLocation;
