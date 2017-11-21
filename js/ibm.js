function getEndNumber (str) {
  var dash = str.indexOf('-');
  return Number(str.slice(dash+1));
}

$('div.photo').on("click", function () {
  newSpotlight = $(this);
  $('div.spotlight').removeClass('spotlight');
  newSpotlight.addClass('spotlight');
  newBio = $(`div#bio-${getEndNumber(newSpotlight.attr('id'))}`);
  $('div.bio-spotlight').removeClass('bio-spotlight');
  newBio.addClass('bio-spotlight');
});

$('div.photo').mouseenter( function () {
  $(this).fadeTo(200, 0.5);
});

$('div.photo').mouseleave( function () {
  $(this).fadeTo(200, 1);
});
