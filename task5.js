// Задание 4
console.log("Задание 4:");

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log("Продукты с фотографиями:", productsWithPhotos);

const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
console.log("Отсортированные продукты по цене:", sortedProducts);
