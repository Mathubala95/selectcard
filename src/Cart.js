import React from 'react'

function Cart({cartItems,removeFromCart,quantity}) {
  return (
    <>
    {
      cartItems.length == 0 ? <div>No items Selected</div>:
      <>
          <ol className="list-group list-group-numbered">
  {
    cartItems.map((item) => {
      return <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{item.name}</div>
      Rs.{item.price} 
    </div>
    <span>
      
      <select onChange={(element) => {
        quantity(element)
        console.log(element.target.value)

      }} classNameName='form-control ' style={{width:90,marginRight:25}}>
    <option value="1">Quantity</option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
  
      </select>
    </span>
    
    <button onClick={() => {
      removeFromCart(item)
    }} className="badge bg-primary rounded-pill ">X</button>
   
  </li>  
    })
    
  }
</ol>
<h3>Total : Rs.{
  cartItems.reduce((prev,curr) => {
    return prev = prev + curr.price
  },0)
  }

</h3>
      </>
    }


    </>
  )
}

export default Cart;