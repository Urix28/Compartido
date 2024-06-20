document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('book-list')) loadBooks();
    if (document.getElementById('cart-list')) loadCart();
});

function loadBooks() {
    const books = [
        { id: 1, title: 'La Austeridad Mata', author: 'Nayeli Roldán Sánchez', price: 298, image: 'img/book1.jpg', tag: 'Novedad' },
        { id: 2, title: 'Yo Nunca vi Televisión', author: '31 Minutos', price: 148, image: 'img/book2.jpg', tag: 'Preventa' },
        { id: 3, title: 'El Lugar de la Herida', author: 'Laura Baeza', price: 269, image: 'img/book3.jpg', tag: 'Novedad' },
        { id: 4, title: 'Pequeño Hablante', author: 'Andrés Neuman', price: 199, image: 'img/book4.jpg', tag: 'Novedad' },
        // Otros libros
    ];
    const bookList = document.getElementById('book-list');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'col-md-3';
        bookItem.innerHTML = `
            <div class="card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <p class="card-text">$${book.price}</p>
                    <button class="btn btn-primary" onclick="viewBook(${book.id})">Ver Detalles</button>
                </div>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}

function viewBook(bookId) {
    // Redirige a la página de detalle del libro
    window.location.href = `book.html?bookId=${bookId}`;
}

function addToCart(bookId) {
    // Agrega el libro a la bolsa de compras (localStorage o backend)
}

function viewCart() {
    // Redirige a la bolsa de compras
    window.location.href = 'cart.html';
}

function loadCart() {
    const cart = [
        { id: 1, title: 'La Austeridad Mata', price: 298 },
        { id: 2, title: 'Yo Nunca vi Televisión', price: 148 },
        // Otros libros en la bolsa
    ];
    const cartList = document.getElementById('cart-list');
    cart.forEach(book => {
        const cartItem = document.createElement('div');
        cartItem.className = 'list-group-item bg-dark text-white';
        cartItem.innerHTML = `
            <span>${book.title}</span>
            <span>$${book.price}</span>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${book.id})">Eliminar</button>
        `;
        cartList.appendChild(cartItem);
    });
}

function removeFromCart(bookId) {
    // Elimina el libro de la bolsa de compras (localStorage o backend)
}

function checkout() {
    // Redirige a la página de venta
    window.location.href = 'checkout.html';
}

function goHome() {
    // Redirige a la página principal
    window.location.href = 'index.html';
}
