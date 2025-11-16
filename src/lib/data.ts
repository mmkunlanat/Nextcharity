export const products = [
{ id: '1', name: 'T-Shirt', price: 299, image: '/products/sample.jpg', description: 'Comfortable cotton t-shirt' },
{ id: '2', name: 'Hoodie', price: 799, image: '/products/sample.jpg', description: 'Warm and cozy hoodie' },
]


export function getProducts() {
return products
}


export function getProductById(id: string) {
return products.find((p) => p.id === id)
}