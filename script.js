function priceChange() {
    let toggle = document.querySelector('input[type="checkbox"]');
    let one = document.querySelector('.one');
    let two = document.querySelector('.two');
    let three = document.querySelector('.three');

    if (toggle.checked) {
        one.innerHTML = "$19.99"
        two.innerHTML = "$24.99"
        three.innerHTML = "$39.99"
    } else {
        one.innerHTML = "$199.99"
        two.innerHTML = "$249.99"
        three.innerHTML = "$399.99"
    }
}