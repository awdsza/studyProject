function selectionSort(arr){
      let result = arr;
      let swap = false; //배열 데이터 변경여부. 값이 false라면 정렬이 완벽하게 됐다는 뜻.
      for(let i=0;i<arr.length;i++){
        let small_val = arr[i];//제일 작은 기준 값
        let selectedIndex=i;//제일 작은 기준 값이 있는 index
        for(let j=i+1;j<arr.length;j++){
          if(small_val>=arr[j]){ //다음 값이 가장작은 값을 지정한 배열 보다 작을때.
              small_val = arr[j];
              selectedIndex=j;
              swap=true;
          }
        }
        if(!swap){ //배열이 변경될일 없으면 반복문을 빠져나간다.
          break;  
        }
        let _tmp = arr[i];
        arr[i]=small_val;
        arr[selectedIndex]=_tmp;
      }
      return result;
    }
