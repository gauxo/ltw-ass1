function is_integer(x){
  return parseInt(x, 10) === x;
}
function check_birthday(select_day,select_month,select_year){
    //Kiểm tra thuộc tính ngày tháng năm sinh
    $("#error-birthday").fadeIn();
    if(select_day.val()=="" || select_month.val()=="" || select_year.val()==""){
      console.log(1);
      $("#error-birthday").html("Vui lòng chọn ngày, tháng, năm sinh");
      return false;
    }
    else{
      $("#error-birthday").html("");
      return true;
    }
}
function check_avatar_upload(file_upload){
  var valid_extensions = /(.jpg|.jpeg|.png)$/i;   
  if(valid_extensions.test(file_upload))
    return true;
  else return false;
}
function check_avatar(avatar){
  if(avatar.val()!=""){
      if(!check_avatar_upload(avatar.val())){
        $("#error-avatar").html("Định dụng tệp avatar không đúng");
        return false;
      }
      else {
        $("#error-avatar").html("");
        return true;
      }
  }
  return true;
}