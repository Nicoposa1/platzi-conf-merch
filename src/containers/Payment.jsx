import React, { useContext } from 'react';
import { PaypalButtom } from 'react-paypal-button'
import AppContext from '../context/AppContext'
import handleSumTotal from '../utils/index'
import '../styles/components/Payment.css';

const Payments = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state

  const paypalOptions = {
    clientId: 'AThy537979SJX4RHp923p6TiXmpPXvgp5uYZN7cKJMtqZ74fM40VN5j6NWInBaRQmd9o1UcnETkDbfx5',
    intent: 'capture',
    currency: 'USD'
  }

  const buttomStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        paments: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalButtom 
            paypalOptions={paypalOptions}
            buttomStyles={buttomStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;