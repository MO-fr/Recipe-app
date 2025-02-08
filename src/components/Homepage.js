import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Search, Clock, Users, ChefHat, TrendingUp, Coffee, Pizza, Salad } from 'lucide-react';

// Hero Section Component
const HeroSection = () => (
  <div className="p-5 mb-4 bg-dark text-white rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold mb-4">Find Your Perfect Recipe</h1>
      <div className="col-md-8">
        <div className="input-group mb-3">
          <span className="input-group-text bg-white">
            <Search size={20} className="text-secondary" />
          </span>
          <input 
            type="text" 
            className="form-control form-control-lg border-start-0" 
            placeholder="Search recipes..."
          />
          <button className="btn btn-danger px-4">Search</button>
        </div>
      </div>
    </div>
  </div>
);

// Categories Component
const Categories = ({ activeCategory, setActiveCategory }) => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const categories = [
    { name: 'All', icon: ChefHat },
    { name: 'Breakfast', icon: Coffee },
    { name: 'Main Dish', icon: Pizza },
    { name: 'Salads', icon: Salad },
    { name: 'Desserts', icon: TrendingUp },
    { name: 'Side Dishes', icon: Users },
    { name: 'Drinks', icon: Coffee },
    { name: 'Snacks', icon: Users },
    { name: 'Appetizers', icon: Users },
  ];

  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    if (name === 'Breakfast') {
      navigate('/breakfast'); // Navigate to the Breakfast page
    }
  };

  return (
    <div className="mb-5">
      <h4 className="mb-3">Categories</h4>
      <div className="d-flex gap-3">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className={`btn ${activeCategory === name ? 'btn-danger' : 'btn-outline-secondary'} px-4`}
            onClick={() => handleCategoryClick(name)}
          >
            <Icon size={18} className="me-2" />
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Recipe Card Component
const RecipeCard = ({ recipe }) => (
  <div className="card h-100 border-0 shadow-sm">
    <img 
      src={recipe.image} 
      className="card-img-top" 
      alt={recipe.title}
    />
    <div className="card-body">
      <h5 className="card-title">{recipe.title}</h5>
      <div className="d-flex gap-3 text-secondary mb-2">
        <small>
          <Clock size={16} className="me-1" />
          {recipe.time}
        </small>
        <small>
          <Users size={16} className="me-1" />
          {recipe.servings} servings
        </small>
      </div>
      <span className="badge bg-light text-secondary">
        {recipe.difficulty}
      </span>
    </div>
  </div>
);

// Featured Recipes Component
const FeaturedRecipes = ({ recipes }) => (
  <div className="mb-5">
    <div className="row g-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="col-md-4">
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  </div>
);

// Trending Recipe Item Component
const TrendingRecipeItem = ({ recipe }) => (
  <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
    <img 
      src={recipe.image} 
      alt={recipe.title}
      className="rounded"
      width={80}
      height={80}
    />
    <div>
      <h6 className="mb-1">{recipe.title}</h6>
      <small className="text-secondary">
        <Clock size={14} className="me-1" />
        {recipe.time}
      </small>
    </div>
  </div>
);

// Trending Section Component
const TrendingSection = ({ recipes }) => (
  <div>
    <h4 className="mb-3">
      <TrendingUp size={24} className="text-danger me-2" />
      Trending Now
    </h4>
    <div className="row g-3">
      {recipes.map(recipe => (
        <div key={recipe.id} className="col-md-4">
          <TrendingRecipeItem recipe={recipe} />
        </div>
      ))}
    </div>
  </div>
);

// Main App Component
const RecipeApp = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredRecipes = [
    // Add your featured recipes here
  ];

  return (
    <div className="container py-4">
      <HeroSection />
      <Categories 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <FeaturedRecipes recipes={featuredRecipes} />
    </div>
  );
};

export default RecipeApp;