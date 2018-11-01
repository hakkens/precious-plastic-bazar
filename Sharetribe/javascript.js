   // Code from Semeano
  
	jQuery(document).ready(function () {

		// #1
	  var shippingOpt = $('.delivery-label.shipping-options-label[for=delivery_shipping]');
	  if (shippingOpt.length) {
	  	var shippingOptHTML = $(shippingOpt).html();
			$(shippingOpt).html(shippingOptHTML.replace('Shipping', 'International Shipping'));
	  }
		var pickupOpt = $('.delivery-label.shipping-options-label[for=delivery_pickup]');
		if (pickupOpt.length) {
			var pickupOptHTML = $(pickupOpt).html();
			$(pickupOpt).html(pickupOptHTML.replace('Pickup', 'Domestic (Shipping included)'));
		}

		// #2
		var buyOpt = $('div.option-group[name=listing_shape] > a > div').first();
		if (buyOpt.length) buyOpt.html('Sell');

		setTimeout(function () {
			// #3
			var formShippingOpt = $('label.shipping-options-label[for=shipping-checkbox]');
			if (formShippingOpt.length) {
				var formShippingOptHTML = $(formShippingOpt).html();
				$(formShippingOpt).html(formShippingOptHTML.replace('Shipping', 'International Shipping'));
			}
			var formPickupOpt = $('label.shipping-options-label[for=pickup-checkbox]');
			if (formPickupOpt.length) {
				var formPickupOptHTML = $(formPickupOpt).html();
				$(formPickupOpt).html(formPickupOptHTML.replace('Pickup', 'Domestic Shipping (default)'));
			}

			// #4
			var imageUpload = $('article.page-content > div.wrapper > div.new-listing-form.centered-section > div.js-form-fields > form.new_listing.js-listing-form-ready > div#image-uploader-container > div.fileinput-button.upload-image-placeholder > input.fileupload').first();
			if (imageUpload.length) {
				imageUpload.prop('required', true);
				$('label[for=listing_image]').html('Image *');
				$('label[for=listing_image]').next().children('div.info-text-content').children().html('For best results, use JPG, GIF or PNG images that are 660 by 440 pixels. Upload at least 1 image.');
			}
		}, 500);

		// 5
		$('#home_toolbar-select-share-type').find('div.toggle-header').html('Buy & Request');

	});

 // Code from Daniel

document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.home-toolbar .toggle-header')

  if (toggler) {
    var content = toggler.textContent.trim()

    if (content === 'All listing types') {
      toggler.textContent = 'Buy & request'
    }
  }
})
