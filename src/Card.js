function Card({item,addToCart,cartItems}){
    return <div className='col-lg-4 border mt-2 p-2 ml-2'>
    <div className='row'>
      <div className='col-lg-12'>
        <img className='img-fluid' src='https://picsum.photos/500/450'/>
      </div>
      <div className='col-lg-12'>
        <h3>{item.name}</h3>
        <h6>Price Rs.{item.price}</h6>
        <button disabled={cartItems.some(obj => obj.id === item.id)} onClick = {() =>{
            addToCart(item)
        }}          
         className='btn btn-sm btn-primary'>
          Add to Cart
        </button>
        </div>
            </div>
          </div>
}
export default Card;  