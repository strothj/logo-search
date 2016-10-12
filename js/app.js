'use strict';

$(function main() {
  $('#search-button').click(function handleSearch() {
    $('.logo-aci').addClass('logo-aci_color');
    $('.logo-acm').addClass('logo-acm_color');
    $('.logo-afe').addClass('logo-afe_color');
    var program = $('#program').val();
    var education = $('#education').val();

    if (program === 'scholarship') {
      $('.logo-aci').removeClass('logo-aci_color');
    }

    if (program === 'loan') {
      $('.logo-acm, .logo-afe').removeClass('logo-acm_color logo-afe_color');
    }

    if (education === 'k12') {
      $('.logo-aci, .logo-afe').removeClass('logo-aci_color logo-afe_color');
    }

    if (education === 'highschool') {
      $('.logo-acm').removeClass('logo-acm_color');
    }
  });
});
