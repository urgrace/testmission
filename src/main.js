console.log('helloooooow')

$('.unit-pack').click( function () {
    $(this).parent().find('.unit-pack').addClass('unit-active');
})

$('.unit-pack').click( function () {
    $(this).parent().find('.unit-alt').removeClass('unit-active');
})

$('.unit-pack').click( function () {
    $(this).parent().parent().find('.price-pack').removeClass('d-none');
})

$('.unit-pack').click( function () {
    $(this).parent().parent().find('.price-alt').addClass('d-none');
})

$('.unit-alt').click( function () {
    $(this).parent().find('.unit-alt').addClass('unit-active');
})

$('.unit-alt').click( function () {
    $(this).parent().find('.unit-pack').removeClass('unit-active');
})

$('.unit-alt').click( function () {
    $(this).parent().parent().find('.price-alt').removeClass('d-none');
})

$('.unit-alt').click( function () {
    $(this).parent().parent().find('.price-pack').addClass('d-none');
})

document.addEventListener('click', function (e) {
  if (e.target.classList.contains("up")) {
    ++e.target.parentElement.querySelector("input").value;
  } else if (e.target.classList.contains("down") && e.target.parentElement.querySelector("input").value > 1) {
    --e.target.parentElement.querySelector("input").value;
  }
})
