 function bubbleSort(arr) {
    if (!arr) return null;
    let result = arr;
    let swap = false; //변 경 여부 확인 변수. 변경이 안됐다면 정렬이 되었다는 의미이기때문에 불필요한 로직을 거치지 않고 종료할수 있다.
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr.length-i-1;j++){ //배열의 맨끝데이터는 가장 큰 데이터들로 정렬이 되었기 때문에, 한칸씩 줄여가면서 search
        if(arr[j] > arr[j+1]){ //다음요소가 현재요소보다 작을때 순서변경
          let _tmp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = _tmp;
          swap=true;
        }
      }
      if(!swap){
        break;
      }
    }
    return result;
}

console.log(bubbleSort([6,10,1,5]));
