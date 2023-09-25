const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function Table() {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
            </tr>
            <tr>
              <th>Fruits</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) =>
              p.category === "Fruits" ? (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                </tr>
              ) : null
            )}
          </tbody>
          <thead>
            <tr>
              <th>Vegetables</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) =>
              p.category === "Vegetables" ? (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { Table };
