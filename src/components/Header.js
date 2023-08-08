import React from 'react'

function Header() {
  const products = [
    {
      id: 1,
      name: "apple", 
      price: 5,
    },
    {
      id: 2,
      name: "orange",
      price: 8
    },
    {
      id: 3,
      name: "kiwi",
      price: 10
    }
  ]
  return (
    <div>
      <h1>Hello!</h1>
      {products.map(items =>
        <div key={items.id}>
          name: {items.name}
          price: {items.price}
        </div>
      )}
    </div> 
)
}

export default Header
