console.log('ImageChooser initialized');

var choosers = document.getElementsByClassName('imagechooser1');

for (var i = 0; i < choosers.length; i++) {
    var chooser_parent = createSuperElement('div', {'class':'imagechooser1_parent'});
    choosers[i].parentNode.insertBefore(chooser_parent, choosers[i]);
    choosers[i].setAttribute('hidden', '');
    chooser_parent.appendChild(choosers[i]);

    if (choosers[i].getAttribute('text')) {
        var title = createSuperElement('p', {'class':'title'}, choosers[i].getAttribute('text'));
    } else {
        var title = createSuperElement('span');
    }

    var select = createSuperElement('div', {'class':'select'});
    var options = createSuperElement('div', {'class':'options'});
    var table_data = [[[createSuperElement('img', {'src':'https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/jdowler/files/NO%20button.jpg'})],['Cats']]];
    var option = createSuperTable(table_data, {'class':'option'});

    var table_data2 = [[[createSuperElement('img', {'src':'https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/jdowler/files/NO%20button.jpg'})],['Cats']]];
    var selected = createSuperTable(table_data2, {'class':'selected'});

    var preview = createSuperElement('div', {'class':'preview'});
    var nochoosen = createSuperElement('div', {'class':'nochoosen'});
    var warning = createSuperElement('div', {'class':'warning'}, 'Buffer NOT found!');

   // options.appendChild(option);
   // options.appendChild(option.cloneNode(1));

    select.appendChild(selected);

    chooser_parent.appendChild(title);
    chooser_parent.appendChild(select);
    chooser_parent.appendChild(options);
    chooser_parent.appendChild(preview);

    preview.appendChild(warning)


}