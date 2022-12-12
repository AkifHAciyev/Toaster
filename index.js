let inputs = document.querySelector('#inputs');
let toasts = document.querySelector('#toasts');
let addBtn = document.querySelector('#add-button');
let clearBtn = document.querySelector('#clear-button');
let error = document.querySelector('#error');
let success = document.querySelector('#success');
let duration = document.querySelector('#duration');
let cancelable = document.querySelector('#cancelable');
let messageContent = document.querySelector('#message-content');
let newMessage;

addEventListener('input', () => {
	newMessage = messageContent.value;
	return newMessage;
});

addBtn.addEventListener('click', () => {
	let toastDiv = document.createElement('div');
	let p = document.createElement('p');
	let button = document.createElement('button');
	toastDiv.classList.add('toast');
	if (success.checked) {
		toastDiv.classList.add('success-toast');
	} else if (error.checked) {
		toastDiv.classList.add('error-toast');
	}
	if (newMessage) {
		p.innerText = `${newMessage}`;
		toastDiv.classList.add('success-toast');
	} else {
		p.innerText = `Error!`;
		toastDiv.classList.remove('success-toast');
		toastDiv.classList.add('error-toast');
	}

	p.classList.add('message');
	button.classList.add('cancel-button');

	if (cancelable.checked) {
		button.innerText = 'x';
	} else {
		button.innerText = '';
	}

	button.addEventListener('click', () => {
		toastDiv.remove();
	});

	setTimeout(() => {
		toastDiv.remove();
	}, duration.value);

	toastDiv.appendChild(p);
	toastDiv.appendChild(button);
	toasts.appendChild(toastDiv);
});

clearBtn.addEventListener('click', () => {
	toasts.innerHTML = '';
});
