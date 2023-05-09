
//달력
$.datepicker.setDefaults({
    dateFormat: 'yy-mm',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });

  $(function() {
    $("#datepicker01, #datepicker02").datepicker({
      // showOn:"button"
      // , buttonImage: "../../assets/images/calendar.png"
      // ,buttonImageOnly: true
      dateFormat:"yy-mm-dd"
    });
    
  });

//체크박스
$(document).ready(function() {
	$("#chkAll").click(function() {
		if($("#chkAll").is(":checked")) $("input[name=chkBox]").prop("checked", true);
		else $("input[name=chkBox]").prop("checked", false);
	});

	$("input[name=chkBox]").click(function() {
		var total = $("input[name=chkBox]").length;
		var checked = $("input[name=chkBox]:checked").length;

		if(total != checked) $("#chkAll").prop("checked", false);
		else $("#chkAll").prop("checked", true); 
	});
});