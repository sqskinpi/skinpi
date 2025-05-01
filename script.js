$('#catalog').on('mouseenter', function() {
    anime({
        targets: '#catalog',  // Обрати внимание на правильный селектор
        filter: ['invert(0)', 'invert(1)'],
        duration: 200,
        loop: false,
        easing: 'easeInOutSine',
    });
});

$('#catalog').on('mouseleave', function() {
    anime({
        targets: '#catalog',  // Обрати внимание на правильный селектор
        filter: ['invert(1)', 'invert(0)'],
        duration: 200,
        loop: false,
        easing: 'easeInOutSine',
    });
});

$('#catalog').on('click', function(){
    window.location.href = 'catalog.html';
});
$('#balencers').on('click', function(){
    window.location.href = 'index.html';
});
$('#user').on('click', function(){
    window.location.href = 'form.html';
});

$('#1').on('click', function(){
    window.location.href = 'item.html';
});
