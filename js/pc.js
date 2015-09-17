/**
 * Created by tellis on 9/15/2015.
 */
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

var Ppc = {
    toggleStatsView : function(a, b, c) {
        document.getElementById(a+b).style.display = 'none';
        document.getElementById(a+c).style.display = 'block';
    },
    toggleTabs : function(a) {
        //removeClass(document.getElementById('tabItem'+a), 'selected');
        //addClass(document.getElementById())
        if (a == 1) {
            removeClass(document.getElementById('tabItem0'), 'selected');
            addClass(document.getElementById('tabItem1'), 'selected');
            document.getElementById('tabView0').style.display = 'none';
            document.getElementById('tabView1').style.display = 'block';

        } else {
            removeClass(document.getElementById('tabItem1'), 'selected');
            addClass(document.getElementById('tabItem0'), 'selected');
            document.getElementById('tabView1').style.display = 'none';
            document.getElementById('tabView0').style.display = 'block';
        }
    }
};