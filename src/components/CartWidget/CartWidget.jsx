import './CartWidget.css'
import { RiShoppingCart2Line } from 'react-icons/ri';


const CartWidget = () => {
    return (
      <div>
        <RiShoppingCart2Line className='imgCarrito' />
        <strong> 3 </strong>
      </div>
    )
  }
  

export default CartWidget
