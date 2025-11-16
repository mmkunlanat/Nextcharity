type Props = {
product: { id: string; name: string; price: number; image: string }
}


export default function ProductCard({ product }: Props) {
return (
<a
href={`/products/${product.id}`}
style={{
display: 'block',
border: '1px solid #ccc',
borderRadius: '8px',
padding: '10px',
textDecoration: 'none',
color: '#000'
}}
>
<img src={product.image} width="100%" />
<h3>{product.name}</h3>
<p>${product.price}</p>
</a>
)
}