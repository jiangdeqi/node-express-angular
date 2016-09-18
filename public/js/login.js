$(function(){
    $(".login-submit").click(function(){
        $.ajax({
             type: "POST",
             url: "/ucenter",
             data: {user:$("#userid").val(), pwd:$("#password").val()},
             success: function(data){
                 if(data == 'success'){
                     localStorage.setItem("user",$("#userid").val());
                     
                    console.log("前台成功");
                    window.location.href ="/#/index";
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