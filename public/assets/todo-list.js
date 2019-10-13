$(document).ready(function(){

  // $("#login-land").click(function(){
  //   $.ajax({
  //     type:'GET',
  //     url: '/login-landlord',
  //     success: function(data){
  //       //$("#regDiv").html(data)
  //       location.reload();
  //     }
  //   })
  // });
  //
  $('form').on('submit', function(){

    $("form:input").each(function(){
   var input = $(this); // This is the jquery object of the input, do what you will
  });
      // var item = $('form input');
      // var tenant = {name:item.val(), mobileno:item.val(), username:item.val() , password: item.val(), email:item.val() };

      $.ajax({
        type: 'POST',
        url: '/signup-rentee',
        data: input,
        success: function(data){
          //do something with the data via front-end framework
          $("#mainDiv").html(data);
        }
      });

      return false;

  });

  $("#loginForm").click(function(){
    //console.log("Hey");
   var uname  = $("#Username").val();
   var upass = $("#Password").val();
   var loginData ={'name': uname,'pass':upass};
   $.ajax({
       type : 'POST',
       url : '/login-rentee',
       data : loginData,
       success: function(data){
       $("#mainDiv").html(data);
       }
     });
 });

 $("#SignupFormOwn").click(function(){
   //console.log("Hey");
  var name  = $("#name").val();
  var mobileno = $('#mobileno').val();
  var username  = $("#username").val();
  var password  = $("#password").val();
  var email  = $("#email").val();
  var loginData ={'name': name, 'phone':mobileno, 'uname':username,  'pass':password, 'email':email};
  $.ajax({
      type : 'POST',
      url : '/signup-owner',
      data : loginData,
      success: function(data){
      $("#mainDiv").html(data);
      }
    });
 });

 $("#loginFormOwn").click(function(){
   //console.log("Hey");
  var uname  = $("#Username").val();
  var upass = $("#Password").val();
  var loginData ={'name': uname,'pass':upass};
  $.ajax({
      type : 'POST',
      url : '/login-owner',
      data : loginData,
      success: function(data){
      $("#mainDiv").html(data);
      }
    });
});

$("#SignupFormProp").click(function(){
  //console.log("Hey");
 var type  = $("#type").val();
 var area = $('#area').val();
 var address  = $("#address").val();
 var ownName  = $("#ownName").val();
 var status  = $("#status").val();
 var contact  = $("#contact").val();
 var rent  = $("#rent").val();
 var security  = $("#security").val();
 var features  = $("#features").val();
 var loginData1 ={'type': type, 'area':area, 'address':address,  'ownName':ownName, 'status':status, 'contact': contact, 'rent': rent, 'security': security, 'features': features};
 $.ajax({
     type : 'POST',
     url : '/profile-owner',
     data : loginData1,
     success: function(data){
     $("#mainDiv").html(data);
     }
   });
});

$("#SelectType").click(function(){
  //console.log("Hey");
 var type  = $("#type").val();
 var loginData1 ={'type': type};
 $.ajax({
     type : 'POST',
     url : '/cars',
     data : loginData1,
     success: function(data){
     $("#mainDiv").html(data);
     }
   });
});
  //
  // $('li').on('click', function(){
  //     var item = $(this).text().replace(/ /g, "-");
  //     $.ajax({
  //       type: 'DELETE',
  //       url: '/signup-tenant/' + item,
  //       success: function(data){
  //         //do something with the data via front-end framework
  //         location.reload();
  //       }
  //     });
  });

});
