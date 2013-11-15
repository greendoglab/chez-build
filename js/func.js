var Gallery = function(){
    $('.gallery_images').cycle({ 
        fx:     'fade',
        speed:  'normal',
        timeout: 0, 
        next:   '.control_left', 
        prev:   '.control_right'
    });
}

$(function(){
    Gallery();
})