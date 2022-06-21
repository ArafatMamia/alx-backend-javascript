function getListStudentIds(arr) {
  if (Array.isArray(arr) === true) {
    const ans = arr.map(function(value) {
    return value.id;
    });
    return ans;
  }
    return [];
}
export default getListStudentIds;
