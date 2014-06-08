function init() {
	var btnSave = document.getElementById('btnSave');
	btnSave.addEventListener('click', onSaveButtonClick)
	updateList();
}

function onSaveButtonClick(e) {
	var newKey = document.getElementById('newKey');
	var newValue = document.getElementById('newValue');
	if (newKey.value.length < 1) {
		alert('You must enter key');
		return;
	}
	if (newValue.value.length < 1) {
		alert('You must enter value');
		return;
	}
	// eq. localStorage.setItem(newKey.value, newValue.value);
	localStorage[newKey.value] = newValue.value;
	updateList();
}

function updateList() {
	var list = document.getElementById('storedList');
	var items = '';
	for (var i = 0; i < localStorage.length; i++) {
		items += '<li>';
		items += 'key : ' + localStorage.key(i);
		// eq. localStorage.getItem(localStorage.key(i));
		items += ', value : ' + localStorage[localStorage.key(i)]; 
		items += ' <button onclick="removeDataAt(' + i + ')">Remove</button>';
		items += '</li>';
	}
	list.innerHTML = items;
}

function removeDataAt(idx) {
	localStorage.removeItem(localStorage.key(idx));
	updateList();
}

onload = init;