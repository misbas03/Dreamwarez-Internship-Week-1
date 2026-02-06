const products = [
  { title: 'Apple', isFruit: true, id: 1 },
  { title: 'Carrot', isFruit: false, id: 2 },
  { title: 'Banana', isFruit: true, id: 3 },
];

export default function App() {
  return (
    <div>
      <h1>Rendering Lists</h1>
      <ul>
        {products.map(product => (
          <li
            key={product.id}
            style={{
              color: product.isFruit ? 'red' : 'green'
            }}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}