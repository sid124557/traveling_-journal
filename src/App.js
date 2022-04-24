import './App.css';
import Header from './components/header/headder'
import Card from './components/cards/cards'
import Data from './components/data'
function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="root__div">
      <Header />
      {cards}
    </div>
  );
  }

export default App;
