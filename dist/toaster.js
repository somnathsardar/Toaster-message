/*
* 	13/12/2020 - Somnath Sardar
* 	Toaster Message helps you to show custom messages
* 	Trough Toaster message you can show Error message, Success message and warning message
* 	Each message has it's own backgrond color.
*
*
* 	To show Toast message you need to call showToast function
* 	This function requires two arguments.
*	First argument is status (error, success, warning)
*	Second arguments is the message.
*	
*	
*	Errror Toast Message:   showToast('error',message);
*	Success Toast Message:   showToast('success',message);
*	Warning Toast Message:   showToast('warning',message);
*/

function showToast(status,message)
{
	if(status === 'error')
	{
		let $toastError = $("<div>", {"class": "toast-message toast-error show"});
		$toastError.html(message);
		$('body').append($toastError);
	  	setTimeout(()=>{ 
	  		$toastError.removeClass("show");
	  		$($toastError).remove();
	  	}, 5000);
	}
	else if(status === 'success')
	{
		let $toastSuccess = $("<div>", {"class": "toast-message toast-success show"});
		$toastSuccess.html(message);
		$('body').append($toastSuccess);
	  	setTimeout(()=>{ 
	  		$toastSuccess.removeClass("show");
	  		$($toastSuccess).remove();
	  	}, 5000);
	}
	else if(status === 'warning')
	{
		let $toastWarning = $("<div>", {"class": "toast-message toast-warning show"});
		$toastWarning.html(message);
		$('body').append($toastWarning);
	  	setTimeout(()=>{ 
	  		$toastWarning.removeClass("show");
	  		$($toastWarning).remove();
	  	}, 5000);
	}
}