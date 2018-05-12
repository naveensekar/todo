$(document).ready(function() {
    $('.item').click(function() {
        var taskId = $(this).data('id');
        
        $.ajax({
            url: '/update',
            type: 'PUT',
            data: {id:taskId},
            success: function(data) {
                window.location = '/';
                
            }
        });
        
    });
    
});