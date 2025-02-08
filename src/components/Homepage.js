import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ChefHat, Coffee, Pizza, Salad, TrendingUp, Users, Clock } from 'lucide-react';

// Hero Section Component
const HeroSection = () => (
  <div className="hero-section text-center py-5 mb-5">
    <h1 className="display-4 fw-bold mb-3">Discover Delicious Recipes</h1>
    <p className="lead text-muted mb-0">Explore our collection of mouth-watering dishes</p>
  </div>
);


// Categories Component
const Categories = ({ activeCategory, setActiveCategory }) => {
  const navigate = useNavigate();

useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/css/homepage.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
      navigate('/breakfast');
    }
  };

  return (
    <div className="categories-section mb-5">
      <h3 className="section-title text-center mb-4">Explore Categories</h3>
      <div className="categories-container">
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3 justify-content-center">
          {categories.map(({ name, icon: Icon }) => (
            <div className="col" key={name}>
              <button
                className={`category-btn w-100 py-3 ${activeCategory === name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(name)}
              >
                <Icon size={24} className="mb-2" />
                <div className="category-name">{name}</div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Recipe Card Component
const RecipeCard = ({ recipe }) => (
  <div className="recipe-card h-100">
    <div className="card-image-wrapper">
      <img 
        src={recipe.image} 
        className="card-img" 
        alt={recipe.title}
      />
      <div className="card-overlay">
        <button className="view-recipe-btn">View Recipe</button>
      </div>
    </div>
    <div className="card-content p-3">
      <h5 className="recipe-title mb-2">{recipe.title}</h5>
      <div className="recipe-meta d-flex gap-3 mb-2">
        <span className="meta-item">
          <Clock size={16} className="me-1" />
          {recipe.time}
        </span>
        <span className="meta-item">
          <Users size={16} className="me-1" />
          {recipe.servings} servings
        </span>
      </div>
      <div className="recipe-difficulty">
        <span className="badge bg-light text-secondary">
          {recipe.difficulty}
        </span>
      </div>
    </div>
  </div>
);

// Featured Recipes Section
const FeaturedRecipes = ({ recipes }) => (
  <div className="featured-recipes mb-5">
    <h3 className="section-title text-center mb-4">Featured Recipes</h3>
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
  <div className="trending-recipe p-3">
    <div className="d-flex align-items-center gap-3">
      <img 
        src={recipe.image} 
        alt={recipe.title}
        className="rounded"
        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
      />
      <div>
        <h6 className="mb-1">{recipe.title}</h6>
        <small className="text-muted d-flex align-items-center">
          <Clock size={14} className="me-1" />
          {recipe.time}
        </small>
      </div>
    </div>
  </div>
);

// Trending Section Component
const TrendingSection = ({ recipes }) => (
  <div className="trending-section mb-5">
    <h3 className="section-title text-center mb-4">
      <TrendingUp size={24} className="me-2" />
      Trending Now
    </h3>
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

  // Sample featured recipes data
  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Pancakes",
      time: "25 mins",
      servings: 4,
      difficulty: "Easy",
      image: "/images/pancakes.jpg"
    },
    {
      id: 2,
      title: "Mediterranean Salad",
      time: "15 mins",
      servings: 2,
      difficulty: "Easy",
      image: "/images/salad.jpg"
    },
    {
      id: 3,
      title: "Grilled Salmon",
      time: "30 mins",
      servings: 4,
      difficulty: "Medium",
      image: "/images/salmon.jpg"
    }
  ];

  // Sample trending recipes data
  const trendingRecipes = [
    {
      id: 1,
      title: "Avocado Toast",
      time: "10 mins",
      image: "/images/avocado-toast.jpg"
    },
    {
      id: 2,
      title: "Smoothie Bowl",
      time: "15 mins",
      image: "/images/smoothie-bowl.jpg"
    },
    {
      id: 3,
      title: "Chicken Curry",
      time: "45 mins",
      image: "/images/curry.jpg"
    }
  ];

  return (
    <div className="container py-4">
      <HeroSection />
      <Categories 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <FeaturedRecipes recipes={featuredRecipes} />
      <TrendingSection recipes={trendingRecipes} />
    </div>
  );
};

export default RecipeApp;