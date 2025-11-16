import { getProductById } from '../../../lib/data'


export default function ProductDetail({ params }: { params: { id: string } }) {
const product = getProductById(params.id)
if (!product) return <p>Product not found.</p>


return (
<div style={{ display: 'flex', gap: '20px' }}>
<img src={product.image} width="300" />
<div>
<h2>{product.name}</h2>
<p>{product.description}</p>
<p><b>Price:</b> ${product.price}</p>
<button>Add to Cart</button>
</div>
</div>
)
}