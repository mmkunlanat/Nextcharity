import ProductList from '../components/ProductList'
import { getProducts } from '../lib/data'


export default function Home() {
const products = getProducts()


return (
<div>
<h1>New Arrivals</h1>
<ProductList products={products} />
</div>
)
}