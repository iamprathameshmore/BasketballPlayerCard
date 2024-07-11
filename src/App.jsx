import BasketballPlayerCard from "./BasketballPlayerCard/BasketballPlayerCard.jsx";
import "./App.css";

function App() {
  const stats = {
    pointsPerGame: 25.4,
    assistsPerGame: 7.1,
    reboundsPerGame: 10.2
};
  return (
    <div
      className="body"
      
    >
      <BasketballPlayerCard
        // className="hello"
        name="Michael Jordan"
        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMzBOvRSYNbchM69HgUffECIMuMjFq87ywnhR6Xk_9fIlGwbG'}
        position="Shooting guard"
        stats={stats}
        
        
      />
    </div>
  );
}

export default App;
