 function bubbleSort(arr) {
  if (!arr) return null;
  let result = arr;

  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[j] > arr[j+1]){
        let _tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = _tmp;
      }
    }
  }
  return result;
}

console.log(bubbleSort([6,10,1,5]));
