$(document).ready(
function(){$(".refresh-project-timer").click(function(e){e.preventDefault();var data_mysql_record_id=$(this).attr("data-mysql-record-id");var data_project_id=$(this).attr("data-project-id");var data_ajax_url=$(this).attr("data-ajax-url");var $next=1;if($next===1){$.ajax({type:'post',url:data_ajax_url,dataType:'json',data:'data_mysql_record_id='+data_mysql_record_id+'&data_project_id='+data_project_id,success:function(data){ajax_response=data.message;current_time=data.current_time;project_total_time=data.project_total_time;if(ajax_response==''||ajax_response=='undefined'){ajax_response=lang_timer_has_been_updated;}$("#my-project-time").text(current_time);$("#project-timer").text(project_total_time);setTimeout(function(){noty({text:ajax_response,layout:'bottomRight',type:'information',timeout:1500});},300);},error:function(data){var data=data.responseJSON;$ajax_response=data.message;if($ajax_response==''||typeof $ajax_response==='undefined'){$ajax_response='Error!- This request could not be completed';}noty({text:''+$ajax_response,layout:'bottomRight',type:'warning',timeout:1500});}});}});});