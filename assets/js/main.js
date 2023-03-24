const words = [
    'Hello there.',
    'Do you know who am I?',
    'I don\'t recommend you to find out',
    'Wait for it..'
];

for (let i = 0; i < words.length; i++) {
    setTimeout(function () {
        $('#root').append(`<h1 class="n-${i}">${words[i]}</h1>`);
        $(`.n-${i}`).fadeIn(1000);
        setTimeout(function () {
            $(`.n-${i}`).fadeOut(1000);
        })
    }, ((i + 1) * 2) + '000')
}