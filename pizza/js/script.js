jQuery(document).ready(function () {
     
    
    jQuery('.order__button').click( function() {
    	let form = jQuery(this)
    	
    	if ( form.valid() ) {
    		let actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function() {
                    alert('hello');
    			},
    			error:function() {
    			     alert('error')
    			}
    		});
    	}
    });


});