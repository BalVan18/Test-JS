$(document).ready(function() {
    $('input.deletable').wrap('<span class="deleteicon"></span>').after($('<span>⨉</span>').click(function(){
        $(this).prev('input').val('').trigger('change').focus();
    }));
});