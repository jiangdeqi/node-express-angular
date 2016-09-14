$(function(){
    $(".login-submit").click(function(){
        $.ajax({
             type: "POST",
             url: "/ucenter",
             data: {user:$("#userid").val(), pwd:$("#password").val()},
             success: function(data){
                 if(data == 'success'){
                    window.location.href ="/#/index";
                    console.log("前台成功");
                 }
                 if(data == 'error'){
                     console.log("用户名密码错误");
                 }
             },
             error: function(data){
             }
         });
    })
});