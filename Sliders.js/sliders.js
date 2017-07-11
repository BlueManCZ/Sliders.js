var mousePosition, active_element;
var offset = [0,0];
var isDown = false;
var slider_min = -11;

var slider_positions = {};
var slider_percentages = {};
var slider_values = {};

document.addEventListener('mouseup', function() {
    isDown = false;
    document.body.style.webkitUserSelect = '';
    document.body.style.mozUserSelect = '';
    document.body.style.msUserSelect = '';
}, true);

document.addEventListener('mousemove', function(event) {
    //event.preventDefault();
    if (isDown) {
        mousePosition = {x:event.clientX, y:event.clientY};

        var current_input = active_element.parentElement.parentElement.parentElement.childNodes[1];
        var slider_groover = active_element.parentElement.firstChild;
        var name = current_input.name;
        var slider_max = slider_groover.clientWidth+slider_min;
        var range = [parseInt(current_input.min) || 0, parseInt(current_input.max) || 100];
        var left_pos = mousePosition.x + offset[0];

        if (left_pos < slider_min) {
            slider_positions[name] = slider_min;
            left_pos = slider_min;
        } else if (left_pos > slider_max) {
            slider_positions[name] = slider_max+2;
            left_pos = slider_max+2;
        } else {
            slider_positions[name] = left_pos;
        }

        var percentages = 100*(slider_positions[name]-slider_min-2)/slider_groover.clientWidth;
        var value = range[0]+(range[1]-range[0])*percentages/100;
        setSliderTo(name, value);
    }
}, true);

var sliders = document.getElementsByClassName('slider1');

for (var i = 0; i < sliders.length; i++) {
    var slider_parent = createSuperElement('div', {'class':'slider1_parent'});
    sliders[i].parentNode.insertBefore(slider_parent, sliders[i]);
    slider_parent.appendChild(sliders[i]);

    var text = createSuperElement('p', {'class':'title'}, sliders[i].getAttribute('text'));
    slider_parent.insertBefore(text, sliders[i]);

    var slider_main_block = createSuperElement('div', {'class':'slider_main_block'});
    var slider_groove_parent = createSuperElement('div', {'class':'slider_groove_parent'});
    var slider_groove = createSuperElement('div', {'class':'slider_groove'});
    var slider_fill = createSuperElement('div', {'class':'slider_fill'});
    var slider_rider = createSuperElement('div', {'class':'slider_rider'});

    var table_data = [[[sliders[i].min, {'class':'left'}],[sliders[i].max, {'class':'right'}]]];
    var slider_range = createSuperTable(table_data, {'class':'slider_range'});

    slider_groove.appendChild(slider_fill);
    slider_groove_parent.appendChild(slider_groove);
    slider_groove_parent.appendChild(slider_rider);
    slider_main_block.appendChild(slider_groove_parent);
    slider_main_block.appendChild(slider_range);
    slider_parent.appendChild(slider_main_block);

    slider_rider.addEventListener('mousedown', function(e) {
        var current_input = this.parentElement.parentElement.parentElement.childNodes[1];

        isDown = true;
        offset[0] = this.offsetLeft - e.clientX;
        active_element = this;

        if (current_input.getAttribute('animate') !== 'no') {
            this.parentNode.lastChild.style.transition = '';
            this.parentNode.firstChild.firstChild.style.transition = '';
        }

        document.body.style.webkitUserSelect = 'none';
        document.body.style.mozUserSelect = 'none';
        document.body.style.msUserSelect = 'none';

    }, true);

    slider_groove.addEventListener('click', function(e) {
        var current_input = this.parentElement.parentElement.parentElement.childNodes[1];
        var name = current_input.name;
        var click_position = e.clientX-my_offset(this).left;
        var range = [parseInt(current_input.min) || 0, parseInt(current_input.max) || 100];

        if (current_input.getAttribute('animate') !== 'no') {
            this.parentNode.lastChild.style.transition = 'left 0.2s ease-in-out';
            this.parentNode.firstChild.firstChild.style.transition = 'width 0.2s ease-in-out';
        }

        var percentages = 100*(click_position)/(this.clientWidth+2);
        var value = range[0]+(range[1]-range[0])*percentages/100;
        setSliderTo(name, value);

    }, true);

    sliders[i].addEventListener('change', function(e) {
        setSliderTo(this.name, this.value);
        console.log(this.value);
    }, true);

    if (!sliders[i].value) sliders[i].value = 0;
    setSliderTo(sliders[i].name, sliders[i].value);
}

function setSliderTo(name, value) {
    var slider = document.getElementsByName(name)[0];
    value = parseFloat(value);

    if (value >= parseFloat(slider.min) && value <= parseFloat(slider.max) && !isNaN(value)) {
        var data_round = slider.getAttribute('round') || 0;
        value = round(value, data_round);
        slider_percentages[name] = 100*(value - slider.min)/(slider.max - slider.min);
        slider_values[name] = value;
        slider.parentNode.childNodes[2].firstChild.firstChild.firstChild.style.width=Math.round(slider_percentages[name])+'%';
        slider.parentNode.childNodes[2].firstChild.lastChild.style.left = 'calc('+Math.round(slider_percentages[name])+'% - 11px )';
        slider.value = value;
    } else {
        console.log('Value is out of slider range: '+slider.min+'-'+slider.max);
        if (value < parseFloat(slider.min) && !isNaN(value)) {
            setSliderTo(name, slider.min);
        } else if (value > parseFloat(slider.max) && !isNaN(value)) {
            setSliderTo(name, slider.max);
        } else {
            slider.value = slider_values[name];
        }
    }
}

function my_offset(elem) {
    if(!elem) elem = this;

    var x = elem.offsetLeft;
    var y = elem.offsetTop;

    while (elem = elem.offsetParent) {
        x += elem.offsetLeft;
        y += elem.offsetTop;
    }

    return { left: x, top: y };
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}