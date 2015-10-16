console.log('Make mine material with a splash of secret sauce!');
(function($){
    'use strict';
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    if ($('#masonry-grid').length > 0){
      var $container = $('#masonry-grid');
      // initialize
      $container.masonry({
        columnWidth: '.col',
        itemSelector: '.col'
      });
    }
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .7
    }
  );
  $('.card-reveal').each(function () {
      $(this).hide();
  });

  $('.card-show').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('data-related');
      $('.card-reveal').each(function () {
          if ($(this).attr('id') === id) {
              $(this).slideToggle('slow');
          }
      });
  });

  $('.card-reveal .close').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('data-related');
      $('.card-reveal').each(function () {
          if ($(this).attr('id') === id) {
              $(this).slideToggle('slow');
          }
      });
  });
var jbforms = document.forms;
  if(jbforms.length > 0) {
  $('form').parsley({
      successClass: 'success',
      errorClass: 'error',
      classHandler: function (el) {
          return el.$element.closest('.input-field');
      },
      errorsWrapper: '<span class=\'help-block\'></span>',
      errorTemplate: '<span class=\'parsley-custom-error-message fa fa-times\'></span>'
  });

  $('input').change(function () {
      if ($(this).parsley().validate() === true) {
          // true
      }
      return false;
  });

  var validateFront = function () {
      if ($('form').parsley().isValid() === true) {
          $('.bs-callout-info').removeClass('hidden');
          $('.bs-callout-warning').addClass('hidden');
      } else {
          $('.bs-callout-info').addClass('hidden');
          $('.bs-callout-warning').removeClass('hidden');
          $('.tooltipError').addClass('tooltipError');
      }
  };

  $.listen('parsley:field:validate', function () {
      validateFront();
  });

  $('form .btn').on('click', function () {
      $('form').parsley().validate();
      validateFront();
  });
  $('form').submit(function () {
      if ($('form').parsley().isValid() === true) {
          document.getElementById('submitButton').disabled = true;
          $('#submitButton').text('Processing…');
          $('form .btn').click(function () {
              return false;
          });
      }
      return false;
  });
  }
  }); // end of document ready
})(jQuery); // end of jQuery name space
