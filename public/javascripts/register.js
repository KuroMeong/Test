$(function(){
    let search = window.location.search;
    let params = new URLSearchParams(search);

    if(params.has('facebook_id'))
    {
        $('#facebook_id').val(params.get('facebook_id'))
    }

})