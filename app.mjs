 const ERROR_ICON1 = document.getElementById('error-icon1');
   const ERROR_ICON2 = document.getElementById('error-icon2');
   const ERROR_ICON3 = document.getElementById('error-icon3');
   const ERROR_TEXT1 = document.getElementById('ERROR_TEXT1');
   const ERROR_TEXT2 = document.getElementById('ERROR_TEXT2');
   const ERROR_TEXT3 = document.getElementById('ERROR_TEXT3');
   const ERROR_TEXT4 = document.getElementById('ERROR_TEXT4');

const MTN = [
	'703',
	'704',
	'706',
	'803',
	'806',
	'810',
	'813',
	'814',
	'816',
	'903',
	'906',
	'913',
	'916',
];
const GLO = ['705', '805', '807', '811', '815', '905', '915'];
const AIRTEL = ['701', '708', '802', '808', '812', '904', '907', '912', '901'];
const ETISALAT = ['809', '817', '818', '909', '908'];

// Selecting Form Elements
  const FORM = document.getElementById('form-content');
  const [FIRST_NAME, LAST_NAME, EMAIL, PHONE] =
	document.getElementsByTagName('input');
   const TRUE_ICON = document.getElementById('true-icon');
   const PROVIDER_GRP = document.querySelectorAll('.provider-grp');
   const [Airtel, Etisalat, Glo, Mtn] = document.querySelectorAll('.provider-grp');
   const PROVIDER_TEXT = document.querySelectorAll('.provider-text');
   const AUTO = document.querySelector('.auto');

function startApp() {
  
  FIRST_NAME.addEventListener('input', () => {
	if (FIRST_NAME.value === '') {
		ERROR_ICON1.classList.remove('hidden');
		ERROR_TEXT1.classList.remove('hidden');
		error = true;
	} else {
		ERROR_ICON1.classList.add('hidden');
		ERROR_TEXT1.classList.add('hidden');
		error = false;
	}
});

LAST_NAME.addEventListener('input', () => {
	if (LAST_NAME.value === '') {
		ERROR_ICON2.classList.remove('hidden');
		ERROR_TEXT2.classList.remove('hidden');
		error = true;
	} else {
		ERROR_ICON2.classList.add('hidden');
		ERROR_TEXT2.classList.add('hidden');
		error = false;
	}
});

EMAIL.addEventListener('input', () => {
	if (EMAIL.value === '') {
		EMAIL.classList.add('invalid');
		EMAIL.classList.add('place-holder');
		EMAIL.placeholder = 'email@example.com';
		ERROR_ICON3.classList.remove('hidden');
		ERROR_TEXT3.classList.remove('hidden');
		error = true;
	} else {
		const emailTestRe =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var isValidEmail = emailTestRe.test(String(EMAIL.value).toLowerCase());

		if (!isValidEmail) {
			EMAIL.classList.add('invalid');
			EMAIL.classList.add('place-holder');
			EMAIL.placeholder = 'email@example/com';
			ERROR_ICON3.classList.remove('hidden');
			ERROR_TEXT3.classList.remove('hidden');
			error = true;
		} else {
			EMAIL.classList.remove('invalid');
			ERROR_ICON3.classList.add('hidden');
			ERROR_TEXT3.classList.add('hidden');
			error = false;
		}
	}
});
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
};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //