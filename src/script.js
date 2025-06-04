const products = [
  { id: 1, name: 'Football', price: 20 },
  { id: 2, name: 'Basketball', price: 25 },
  { id: 3, name: 'Tennis Racket', price: 50 }
];

function renderProducts() {
  const container = document.getElementById('product-list');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p>`;
    container.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', renderProducts);
