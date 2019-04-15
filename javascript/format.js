/* @ parameter 
 * @ example "{0}{1}{0}".format('A','B','C'); 
 * @ result -> ABC
*/
String.prototype.format = function(){
    var result = this ;
    //호출로 넘긴 인자(arguments)를 for문으로 돌리면서 replace를 시킨다.
    for(var i=0;i<arguments.length;i++){
       var patExp = new RegExp("\\{"+i+"\\}","gm");
       result = result.replace(patExp,arguments[i]);
    }
    return result ; 
}
