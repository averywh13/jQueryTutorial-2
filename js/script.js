$(document).ready(function () {
    $('.swatch').on('mouseover', function(){
        $('#product-photo').attr('src', 'img/chair-'+$(this).attr('id')+'@2x.jpg');
        $('.swatch').removerClass('selected');
        $(this).addClass('selected');

    });
});