
$(document).ready(function(){ 

    $('#add_task').click(function(){
        let input = prompt("Add Task:");
        if (input != ""){
            $('tbody').append('<tr><td>' + input + '</td><td><button class="btn btn-danger" id="delete">Delete</button></td></tr>');
        }
    });

    $('#delete').click(function(){
        $(this).parent().parent().fadeOut(200, function(){
            $(this).remove();
        });
    });
});