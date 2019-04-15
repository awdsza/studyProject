/*  
 * @ example "my name is Rick Rick Rick".replaceAll('Rick','John'); 
 * @ result -> my name is John John John
*/
String.prototype.replaceAll = function(reg,returnStr){
    var regExp = new RegExp(reg,"gm"); //정규식 객체 생성.(전역 + 다중행)
    return this.replace(regExp,returnStr);
}
