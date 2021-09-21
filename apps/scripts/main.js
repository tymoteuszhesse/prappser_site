requirejs.config({
    paths: {
        'text': './require/text'
    }
})

var root = document.querySelector('.js-root');

define(function (require) {
    require(['text!../metadata.json'], function (data) {
        var obj = JSON.parse(data)
        obj.apps.forEach(function (elem) {
            var b = document.createElement('b');
            b.append(elem.name);

            var dt = document.createElement('dt');
            dt.append(b);

            root.append(dt);

            var a = document.createElement('a');
            a.setAttribute('href', './' + elem.name + '/' + elem.name + '.json');
            a.append(elem.name);

            var dd = document.createElement('dd');
            dd.append(a);

            root.append(dd);
        });

    });
});
