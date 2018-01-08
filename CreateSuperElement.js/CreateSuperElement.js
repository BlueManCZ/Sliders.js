var element;
var table;

function createSuperElement(type, attributes, innerHTML, style) {
	if (attributes === undefined) attributes = '';
	if (innerHTML === undefined) innerHTML = '';
	if (style === undefined) style = '';
	
	element = document.createElement(type);

	if (innerHTML !== '' && typeof innerHTML === 'object') element.appendChild(innerHTML);
	else if (innerHTML !== '') element.innerHTML = innerHTML;

	if (attributes !== '') {
		for (var i in attributes) {
			element.setAttribute(i, attributes[i]);
		}
	}

	if (style !== '') {
		var styles = '';
		for (var i in style) {
			styles += i+':'+style[i]+';';
		}
		element.setAttribute('style', styles);
	}

	return element;
}

function createSuperTable(data, attributes) {
	if (attributes === undefined) attributes = '';
	table = createSuperElement('table', attributes);

	for (var i in data) { // rows
		table.appendChild(createSuperElement('tr'));

		for (var j in data[i]) { // cells
			table.lastChild.appendChild(createSuperElement('td', data[i][j][1], data[i][j][0], data[i][j][2]));
		}
	}

	return table;
}
