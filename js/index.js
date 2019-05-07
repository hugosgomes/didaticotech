$(document).ready(function(){
    $('#ajax_form').submit(function(){
        var dados = $( this ).serialize();
        jQuery.ajax({
            type: "POST",
            url: "/didaticotech/api/api.php",
            data: dados,
            dataType: 'json',
            success: function( data )
            {
                console.log(data.query.search.length);
                $('#result tr td').remove();
                if (data.query.search.length > 0) {
                    $.each(data.query.search, function(i, obj){
                        $('#result').append('<tr><td>'+obj.ns+'</td><td>'+obj.title+'</td><td>'+obj.pageid+'</td><td>'+obj.size+'</td><td>'+obj.wordcount+'</td><td>'+obj.snippet+'</td><td>'+obj.timestamp+'</td></tr>');
                    });
                }else{
                    $('#result').append('<tr><td colspan="7">Sem Resultados</td><tr>');
                }
                
            }
        });        
        return false;
    });    
});