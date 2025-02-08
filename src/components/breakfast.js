import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Breakfast = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/css/breakfast.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="container py-4">
      <button 
        onClick={handleBackToHome} 
        className="btn btn-secondary mb-4"
      >
        ← Back to Home
      </button>

      <h1 className="mb-4">Breakfast Recipes</h1>
      <div className="row g-4">
        {[
          { name: "Pancakes", image: "pancakes.jpg", description: "Fluffy pancakes with maple syrup." },
          { name: "Avocado Toast", image: "avocado-toast.jpg", description: "Healthy avocado toast with a sprinkle of salt and pepper." },
          { name: "Omelette", image: "omelette.jpg", description: "A classic omelette with cheese and veggies." },
          { name: "French Toast", image: "french-toast.jpg", description: "Golden brown French toast with syrup." },
          { name: "Breakfast Burrito", image: "breakfast-burrito.jpg", description: "Eggs, cheese, and sausage wrapped in a tortilla." },
          { name: "Smoothie Bowl", image: "smoothie-bowl.jpg", description: "A colorful smoothie bowl topped with fruits and granola." },
          { name: "Bagel & Cream Cheese", image: "bagel.jpg", description: "Toasted bagel with cream cheese and smoked salmon." },
          { name: "Yogurt Parfait", image: "yogurt-parfait.jpg", description: "Layers of yogurt, granola, and fresh berries." },
          { name: "Scrambled Eggs & Toast", image: "scrambled-eggs.jpg", description: "Creamy scrambled eggs with buttered toast." },
          { name: "Waffles", image: "waffles.jpg", description: "Crispy waffles topped with berries and syrup." },
          { name: "Cinnamon Rolls", image: "cinnamon-rolls.jpg", description: "Soft, gooey cinnamon rolls with icing." },
          { name: "Chia Pudding", image: "chia-pudding.jpg", description: "Chilled chia pudding with coconut and fruit." },
          { name: "Breakfast Sandwich", image: "breakfast-sandwich.jpg", description: "Egg, cheese, and bacon on an English muffin." }
        ].map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img 
                src={`${process.env.PUBLIC_URL}/images/${item.image}`} 
                className="card-img-top" 
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary">View Recipe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;