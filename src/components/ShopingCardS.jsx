import { useState } from 'react'

export default function ShopingCardS() {
  const [card, setCard] = useState([])
  const [itemName, setItemName] = useState("")
  const [itemQuantity, setItemQuantity] = useState(1)
  const addItemToCard = () => {
    if (itemName.trim()) {
      setCard((prevcard) => [
        ...prevcard, { id: Date.now(), name: itemName, quantity: itemQuantity }
      ])
      setItemName('')
      setItemQuantity(1)
    }
  };
  const removeCardItem = (id) => {
    setCard((cardfilter) => cardfilter.filter((card) => card.id !== id))
  };
  const updateQuantity = (id, newQuantity) => {
    setCard((updatecard) =>
      updatecard.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item)
    )
  }
  return (
    <div>
      <h1>Shoping Card</h1>
      <div>
        <input
          type="text"
          placeholder="enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(Number(e.target.value))}
        />
        <button onClick={addItemToCard} >Add Item</button>
      </div>
      <h2>card details</h2>
      {card.length === 0 ?
        <p>your card items is empty</p>
        : (
          <ul>
            {card.map((item) => (
              <li key={item.id}>
                itemName : {item.name}  and   Quantity : {item.quantity}
                <button onClick={() => removeCardItem(item.id)}>remove</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>increse quantity</button>
                <button onClick={()=> updateQuantity(item.id , Math.max(1 , item.quantity - 1) )}>decrese quantity</button>
              </li>
            ))}
          </ul>
        )}
    </div>

  )
}

