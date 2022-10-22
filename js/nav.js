const btnsAmbully = [
  document.querySelector('.ambully1'),
  document.querySelector('.ambully2'),
  document.querySelector('.ambully3'),
];
const btnsAmstaff = [
  document.querySelector('.amstaff1'),
  document.querySelector('.amstaff2'),
  document.querySelector('.amstaff3'),
];
const btnsFrench = [
  document.querySelector('.french1'),
  document.querySelector('.french2'),
  document.querySelector('.french3'),
];

function showAmstf() {
  for (let i = 0; i < btnsAmstaff.length; i++) {
    if (
      !btnsAmstaff[i].style.display ||
      btnsAmstaff[i].style.display == 'none'
    ) {
      btnsAmstaff[i].style.display = 'block';
    } else {
      btnsAmstaff[i].style.display = 'none';
    }
  }
}

function showAmBully() {
  for (let i = 0; i < btnsAmbully.length; i++) {
    if (
      !btnsAmbully[i].style.display ||
      btnsAmbully[i].style.display == 'none'
    ) {
      btnsAmbully[i].style.display = 'block';
    } else {
      btnsAmbully[i].style.display = 'none';
    }
  }
}

function showFrench() {
  for (let i = 0; i < btnsFrench.length; i++) {
    if (!btnsFrench[i].style.display || btnsFrench[i].style.display == 'none') {
      btnsFrench[i].style.display = 'block';
    } else {
      btnsFrench[i].style.display = 'none';
    }
  }
}
