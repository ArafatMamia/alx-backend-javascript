function getStudentsByLocation(arr, city) {
  const ans = arr.filter(getElement);
  function getElement(value){
    if (value.location == city){
          return value;
       }
	  
    }
	return ans;
}
export default getStudentsByLocation;
