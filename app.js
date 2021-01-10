function checkTextBox()
{
	if($('#toast-message-box').val() == ''){
		$('#toast-message-box').focus()
		return false;
	}
	else
		return true;
}

$('#error-taost-btn').click(()=>{
	if(checkTextBox()){
		showToast('error', $('#toast-message-box').val());
	}
});

$('#success-taost-btn').click(()=>{
	if(checkTextBox()){
		showToast('success', $('#toast-message-box').val());
	}
});

$('#warning-taost-btn').click(()=>{
	if(checkTextBox()){
		showToast('warning', $('#toast-message-box').val());
	}
});