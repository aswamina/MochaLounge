function toggle(object) {
    document.getElementById(object).style.display = "block";
    if (document.getElementById) {
        if (document.getElementById(object).style.visibility == 'visible')
            document.getElementById(object).style.visibility = 'hidden';
        else
            document.getElementById(object).style.visibility = 'visible';
    } else if (document.layers && document.layers[object] != null) {
        if (document.layers[object].visibility == 'visible' ||
            document.layers[object].visibility == 'show')
            document.layers[object].visibility = 'hidden';
        else
            document.layers[object].visibility = 'visible';
    } else if (document.all) {
        if (document.all[object].style.visibility == 'visible')
            document.all[object].style.visibility = 'hidden';
        else
            document.all[object].style.visibility = 'visible';
    }

    return false;
}