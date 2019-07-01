(function() {
    "use strict"

    const oldObj = {
        x: 1,
        y: {
            z: [1, null, undefined, 'Hello'],
        },
    };

    const oldJson = JSON.stringify(oldObj); // json of old object

    const newObj = JSON.parse(oldJson); // deep copy of oldObj

    console.group('Objects %cserialization', 'color: red;');
        console.log('oldObj: ', oldObj);
        console.log('oldJson: ', oldJson);
        console.log('newObj: ', newObj);

})();
