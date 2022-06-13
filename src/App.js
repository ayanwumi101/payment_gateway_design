import React from 'react'
import './App.css';
import avatar from './image-avatar.png'
import visa from './visa.jpeg'
import paypal from './paypal.png'
import discover from './discover.jpeg'

function App() {
  return (
    <main className="App">

     <header>
       <nav>
          <a href='#'>trips</a>
          <a href='#'>recently viewed</a>
          <a href='#'>bookings</a>
       </nav>
       <button>
          <img src={avatar} alt='user-avatar' />
       </button> 
     </header>
     

     <section className='payment_info'>
          <article className='container'>
              <h2>Payment Information</h2>
              <p className='choose'>Choose your method of payment</p>

              <section className='card'>
                <h6>CARD NUMBER</h6>
                <p>4324 5433 9382 1030</p>
                <p className='chip'></p>
                <h6>EXPIRY DATE</h6>
                <p>03/24</p>
                <h5>John Doe</h5>
                <article>
                  <p className='red'></p>
                  <p className='gold'></p>
                </article>
              </section>

          </article>


        <article className='container'>

          <form action='#' mathod='POST'>
              <div className='payments'>
                  <div className='payment'>
                      <button><img src={visa} alt='visa logo' /></button>
                      <button><img src={discover} alt='discover logo' /></button>
                  </div>
                  <div className='payment'>
                    <input type='radio' />
                    <button><img src={paypal} alt='paypal logo' /></button>
                  </div>
              </div>
              
              <div className='inputs'>
                  <div className='input_container'>
                     <label>Credit card number</label>
                     <input type='text' />
                  </div>

                  <div className='input_container'>
                     <label>Expiration date</label>
                     <input type='text' />
                  </div>
              </div>           
              
            
              <div className='inputs'>
                  <div className='input_container'>
                     <label>Security code</label>
                     <input type='text' />
                  </div>

                  <div className='input_container'>
                     <label>Postal Code</label>
                     <input type='text' />
                  </div>
              </div>           

             <div>
              <input type='radio'/> Use this card for next time purchase
              <button className='add_btn'>Add card</button>
             </div>

          </form>
        </article>

     </section>

      
     <section className='payment_details'>
       <div className='price'>
         <h5>Subtotal</h5>
         <h5>#2,497.00</h5>
       </div>
       <div className='price'>
         <h5>Estimated TAX</h5>
         <h5>#119.64</h5>
       </div>
       <div className='price'>
         <h5>Promotional Code: <strong>Z4KXLM9A</strong></h5>
         <h5>#-60.00</h5>
       </div> 
     </section>


     <section className='complete_payment'>
        <button>complete payment</button>
        <h4>TOTAL: #2556.64</h4>
     </section>

    </main>
  );
}

export default App;
