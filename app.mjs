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

};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //