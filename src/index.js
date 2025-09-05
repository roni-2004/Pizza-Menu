import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
    return <div className='container'> 
            <Header/>
            <Menu/>
            <Footer/>
        </div>;

}

function Header(){
  return (
  <header className='header'>
    <h1 > Cheesy Bliss </h1>
  </header>);
}

function Menu(){

  const pizzas = pizzaData.length

  return <main className='menu'>
          <h2 > Our Menu </h2> 

          {pizzas>0 && 
          <>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (<Pizza pizzaObject={pizza} key={pizza.name}/>))}

          </ul>
          </>

          }
          

         </main>
}

function Pizza({pizzaObject}) {
  
    return <li className='pizza'>
              <img src = {pizzaObject.photoName} alt = "pizza margherita"></img>
              <div>
                <h3>{pizzaObject.name}</h3> <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.price}</span>
              </div>
            </li>
}


function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;

  const isOpen = hour>=openHour && hour <= closeHour;
  console.log(isOpen);


  return <footer className='footer'> 
    {isOpen && 
      <Order openHour={openHour} closedHour={closeHour}/>  
    }
   </footer> 
  // return React.createElement('footer', null, "We're currently open!");
}


function Order({closedHour, openHour}){
  return <div className='order'>
      <p>
        We're open from {openHour}:00 to {closedHour}:00. Come visit us!!
      </p>

      <button className='btn'>Order Now</button>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);