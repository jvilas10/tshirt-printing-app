import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to T-Shirt Printing</h1>
        <p>Create your custom T-shirt designs easily and quickly.</p>
      </header>
      
      <main>
        <section>
          <h2>Get Started</h2>
          <p>To start designing your T-shirt, click the button below.</p>
          <Link to="/design">
            <button>Design Your T-Shirt</button>
          </Link>
        </section>
        
        <section>
          <h2>Your Cart</h2>
          <p>View the items you have added to your cart.</p>
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 T-Shirt Printing. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
