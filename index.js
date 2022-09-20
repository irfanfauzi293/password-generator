let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generatePassword(len) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '0123456789';
  const symbol = '!@#$%^&*(){}[];:/?.,<>~`';
  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = '';
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  if (!passwordLength.value) {
    alert('Please input panjang password before click generate password');
    throw new Error('passwordLength is null');
  }
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}

function savePassword() {
  saveButton.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' +
      encodeURIComponent(`password saya: ${password.value}`)
  );
  saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt');
}
