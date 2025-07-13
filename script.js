
let balance = 1000;

function showMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
}

function buyProduct(price, name) {
    if(balance >= price) {
        balance -= price;
        document.getElementById('user-balance').innerText = balance;
        alert(`Você investiu em ${name} por ${price} MZN. Você receberá 8-12% diariamente!`);
    } else {
        alert('Saldo insuficiente!');
    }
}
