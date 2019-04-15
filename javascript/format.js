String.prototype.format = function(){
    var result = this ;
    for(var i=0;i<arguments.length;i++){
       var patExp = new RegExp("\\{"+i+"\\}","gm");
       result = result.replace(patExp,arguments[i]);
    }
    return result ; 
}
(function(){
    "{0}{1}{0}".format('A','B','C');
})()
