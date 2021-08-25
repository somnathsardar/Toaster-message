document.getElementById('error-taost-btn').addEventListener('click', ()=>{
	let message = document.getElementById('toast-message-box').value;
	showToast('error', message).then((d)=>{
		console.log(d);
	});
})

document.getElementById('success-taost-btn').addEventListener('click', ()=>{
	let message = document.getElementById('toast-message-box').value;
	showToast('success', message).then((d)=>{
		console.log(d);
	});
})

document.getElementById('warning-taost-btn').addEventListener('click', ()=>{
	let message = document.getElementById('toast-message-box').value;
	showToast('warning', message).then((d)=>{
		console.log(d);
	});
})