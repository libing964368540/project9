/*将时间戳改变成 X年X月X日；
         *
         *
         * */
function get_date(tm) {
    if(tm) {
        var d = new Date(tm); //根据时间戳生成的时间对象
        var date = (d.getFullYear()) + "年" +
            (d.getMonth() + 1) + "月" +
            (d.getDate()) + "日"

        return date;
    }

}
//时间转换方法（开始）

var yeardate=[];
var NewDate=new Date();
NewDate=NewDate.getTime();
for(var i=0;i<30;i++){
    yeardate.push(get_date(NewDate));
    NewDate += 86400000;
}