//js
var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});

//jquery
$('input[name=checkbox]').change(function(){
    if($(this).is(':checked')) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});