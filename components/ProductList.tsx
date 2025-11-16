import ProductCard from './ProductCard'


type Props = {
products: any[]
}


export default function ProductList({ products }: Props) {
return (
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
{products.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>
)
}