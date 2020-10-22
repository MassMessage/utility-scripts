
(function() {
    const matches = document.body.innerHTML.match(/\R\s*\$\s*\&[^;]+;[\s\d\,]+/g); // extract prices of page's HTML
    let sum = 0;
    for(const match of matches) {
        const p = match
                 .match(/\;([^\n]+)/) [1] // extract monetary value out string
                 .replace(/\s*/, "") // stirp white-spaces
                 .replace(",", "."); // convert from BR concurrencty format to US'
        const price = parseFloat(p);
        console.log(price);
        sum += price;
    }
    console.log('sum result is: ', sum);
}) ();
