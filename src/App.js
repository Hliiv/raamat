import jaapan from './jaapan.webp';
import Jaapan from './Jaapan';
import './jaapan.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="text">
      <h1>Lemmikraamat </h1>
      <Jaapan/>
      </div>
        <img className="image" src={jaapan} alt='jaapan'/>
         </div>
         </div>
  );
}

export default App;
