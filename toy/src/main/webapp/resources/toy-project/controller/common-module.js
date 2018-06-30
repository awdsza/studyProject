/*Common Module Define
*/
const _context = "";

export default{
    context : _context,
    setListHour(){
        let _list = new Array();
       for(let i=0 ; i<24 ; i++){
           _list.push({value: i<10 ? "0"+i:i, name : (i<10 ? "0"+i:i)+"시"});
       }
       return _list;
   },
   setListMin(){
    let _list = new Array();
       for(let i=0 ; i<60 ; i++){
           _list.push({value: i<10 ? "0"+i:i, name : (i<10 ? "0"+i:i)+"분"});
       }
       return _list;
   },
}