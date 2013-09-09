// http://stackoverflow.com/questions/12700534/jquery-to-calculate-live-output-based-on-form-entries

$(function() {
    $('#brand_choice').on('change', function() {
        calculate();
    });

    $('input[name=kWh]').on('keyup', function() {
        calculate();
    });
});

function calculate() {
    var $select = $('#brand_choice').val();
    var $text = $('input[name=kWh]').val();

    if ($select == undefined || $select == '' ||$select == 'Select One') {
        $select = 0;
    }
    else {
        $select = parseFloat($select);
    }
    //
    if ($text == undefined || $text == '') {
        $text = 0;
    }
    else {
        $text = parseFloat($text);
    }

	var sum = $select * $text;
	
	var n=sum.toFixed(2);
	
    $('.output').html(n).prepend("&pound;");
}

