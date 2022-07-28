import startApp from './app.mjs';

// Selecting Form Elements
const FORM = document.getElementById('form-content');
const [FIRST_NAME, LAST_NAME, EMAIL, PHONE] =
	document.getElementsByTagName('input');
   const TRUE_ICON = document.getElementById('true-icon');
   const PROVIDER_GRP = document.querySelectorAll('.provider-grp');
   const [Airtel, Etisalat, Glo, Mtn] = document.querySelectorAll('.provider-grp');
   const PROVIDER_TEXT = document.querySelectorAll('.provider-text');
   const AUTO = document.querySelector('.auto');

// Form Validation
FORM.addEventListener('submit', (e) => {
	e.preventDefault();

   if (PHONE.value.length < 11) {
		error = true;
		count = 0;
		ERROR_TEXT4.textContent = 'Phone number too short!!';
		TRUE_ICON.src = './icon-error.svg';
		ERROR_TEXT4.classList.remove('hidden');
	}

	if (FIRST_NAME.value === '') {
		ERROR_ICON1.classList.remove('hidden');
		ERROR_TEXT1.classList.remove('hidden');
		error = true;
	}

	if (LAST_NAME.value === '') {
		ERROR_ICON2.classList.remove('hidden');
		ERROR_TEXT2.classList.remove('hidden');
		error = true;
	}

	if (EMAIL.value === '') {
		EMAIL.classList.add('invalid');
		EMAIL.classList.add('place-holder');
		EMAIL.placeholder = 'email@example/com';
		ERROR_ICON3.classList.remove('hidden');
		ERROR_TEXT3.classList.remove('hidden');
		error = true;
	}

	if (!error) {
		FIRST_NAME.value = '';
		LAST_NAME.value = '';
		EMAIL.value = '';
		PHONE.value = '';
	}
});


document.addEventListener('DOMContentLoaded', startApp); 