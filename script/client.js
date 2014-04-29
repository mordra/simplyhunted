/**
 * Created by mordrax on 29/04/14.
 */

function updateTime() {
    $.ajax({
        async: true,
        type:'GET',
        url:'/updatetime'})
        .done(function(res) {
            console.log(res);
        });
}

setInterval(updateTime, 2000);