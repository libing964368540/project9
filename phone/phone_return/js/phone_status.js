var data=[
    {title:'型号',content:['A16060-全网通','A1780-移动联通4G','其他']},
    {title:'存储容量',content:['32G','128G','256G']},
    {title:'购买渠道',content:['大陆国行','国行官换机','香港行货','水货无锁','水货有锁','展示机']},
    {title:'机身颜色',content:['玫瑰金','金色','白色','黑色','红色','亮黑色']},
    {title:'国内保修情况',content:['保修一个月以上','保修一个月内或过保']},
    {title:'iCloud是否注销',content:['iCloud已注销','iCloud无法注销']},
    {title:'边框背板',content:['全新机,包装配件齐全未使用','外壳完美，无任何使用痕迹','外壳有轻微使用痕迹','外壳有轻微掉漆、磕碰']},
    {title:'屏幕外观',content:['屏幕完美，无任何痕迹','屏幕有轻微划痕','屏幕有缺角/碎裂']},
    {title:'屏幕显示',content:['显示完美，无任何异常','显示异常，有漏液/错乱/严重老化','屏幕无法显示']},
    {title:'维修情况',content:['无维修情况','屏幕情况','主板维修/多次拆修']}
];
var phone_status = (function () {
    var _m={};
    var self=_m;
        //初始化
        _m.init=function () {
            self.ajax(data);
            //第十一条多选题效果
            $('#phone_status .content .Work dd').unbind('click').bind('click',function () {
                   if($(this).find('img').length>0){
                       $(this).find('img').remove();
                   }else{
                       $(this).find('i').append('<img src="img/selected.png">');
                   }
            })
        }
        //克隆列表
        _m.clone = function (data,num) {
           var ClonedObj = $('#statusClone').find('li').clone();
               if(num==0){
                   ClonedObj.addClass('active');
               }
           var dom="";
           var content=data.content;
               ClonedObj.find('.title').text((num+1)+'.'+data.title);
               for(var i=0;i<content.length;i++){
                  if(i==(content.length-1)){
                      dom+='<dd onclick="phone_status.btn($(this))" data='+num+'><i></i><p class="active">'+content[i]+'</p></dd>';
                  }else{
                      dom+='<dd onclick="phone_status.btn($(this))"data='+num+'><i></i><p>'+content[i]+'</p></dd>';
                  }
               }
              ClonedObj.find('dl').append(dom);
              $('#phone_status ul .Work').before(ClonedObj);

        }
        //获取数据，刷新页面
        _m.ajax = function (data) {
             for(var i=0;i<data.length;i++){
                 self.clone(data[i],i);
             }
        }

        //选择按钮添加事件
        _m.btn=function (that) {
            var parents=that.parent().parent();
            var heights= parents.next().height();
            var num=that.attr('data');
            if(parents.find('img').length==0){
                self.Progress(num);
                self.scrollToEnd(heights);
            }
            parents.find('img').remove();
            that.find('i').append('<img src="img/selected.png">');
            parents.next().show();


            if(num==9){
               $('#phone_status .searchBtn').show();
            }
        }
        //查看按钮的页面的跳转
        _m.jump=function () {

        }
        //进度条的变化
        _m.Progress=function (num) {
            var num=parseInt(num);
            var widths=(num+1)*10+'%';
            $('#phone_status .status .progress').css('width',widths);
            $('#phone_status .status .Percentage em').text(num+1);
        }
        //滚动到底部
        _m.scrollToEnd=function (heights) {
                var h = $('#phone_status .content').height();
                $('html,body').animate({scrollTop:h},1000);

        }
        return _m;
}())
phone_status.init();