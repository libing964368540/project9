var data=[{content:'屏碎（能正常显示操作）',price:199},{content:'屏碎（不能显示操作）',price:499},{content:'屏未碎（不能显示操作）',price:499}];
var repair_status=(function () {
    var _m = {};
    var self = _m;
    //初始化
    _m.init=function (data) {
        $('#repair_status ul li').unbind('click').bind('click',function () {
            $('#repair_status ul li').removeClass('price');
            $(this).addClass('price');
            var num = $(this).attr('data');
            self.clone(data,num);
        })
    }
    //发起ajax请求
    _m.ajax=function () {
        
    }
    //克隆遮罩
    _m.clone=function (data,num) {
       var cloneObject = $('#DeatilsClone').find('#statusDeatils').clone();
       var dom="";
        for(var i=0;i<data.length;i++){
            var content=data[i].content;
            var price = data[i].price;
            if(num==i){
                dom+='<li class="clear active" onclick="repair_status.choosePrice($(this))"num='+i+'><span class="lf">'+content+'</span><span class="rg">'+price+'</span></li>';
            }else{
                dom+='<li class="clear" onclick="repair_status.choosePrice($(this))"num='+i+'><span class="lf">'+content+'</span><span class="rg">'+price+'</span></li>';
            }

           }
           cloneObject.find('ul').append(dom);
           cloneObject.find('.YesBtn').unbind('click').bind('click',function () {
               var price = cloneObject.find('li.active .rg').text();
               var num = cloneObject.find('li.active').attr('num');
                  if(price){
                      $('#repair_status .item li.price .rg').text('￥'+price);
                      $('#repair_status .item li.price').addClass('active').attr('data',num);
                  }else {
                      $('#repair_status .item li.price .rg').text('');
                      $('#repair_status .item li.price').removeClass('active').removeAttr('data');
                  }

                    cloneObject.remove();
           })
           cloneObject.find('.NoBtn').unbind('click').bind('click',function () {
               cloneObject.remove();
           })
           cloneObject.find('.mask').unbind('click').bind('click',function () {
              cloneObject.remove();
           })
           $('body').append(cloneObject);
        }
   // 遮罩的内容部分的点击事件
    _m.choosePrice = function (that) {
        if(that.hasClass('active')){
            that.toggleClass('active');
        }else{
            $('#statusDeatils ul li').removeClass('active');
            that.addClass('active');
        }

       }
        
    

   return _m;
}());
repair_status.init(data);