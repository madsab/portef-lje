const ApiSection = async () => {
  const fetchData = async () => {
    const res = await fetch("http://localhost:80/items", {
      method: "GET",
    })
    const data = await res.json()
    console.log("Fetched data:", data)
    return data.items
    /*
    {
      "items": [
        {
          "id": 1,
          "name": "Item 1",
          "price": 9.99
        },
        {
          "id": 2,
          "name": "Item 2",
          "price": 19.99
        }
      ]
    }

    */
  }

  const items = await fetchData()

  return (
    <div>
      <h1 className="font-bold">API Section</h1>
      {items.map((item: { id: number; name: string; price: number }) => (
        <div key={item.id} className="border p-4 m-2">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiSection
