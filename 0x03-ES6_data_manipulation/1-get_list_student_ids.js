function getListStudentIds(arr) {
  if (Array.isArray(arr) === true) {
    const ans = arr.map((value) => value.id);
    return ans;
  }
  return [];
}
export default getListStudentIds;
