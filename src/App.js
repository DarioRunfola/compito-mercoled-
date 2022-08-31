import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import WarningSign from './Component/WarningSign';
import MyBadg from './Component/MyBadge';
import SingleBook from './Component/SingleBook';
import fantasyBooks from './data/books/fantasy.json'

function App() {
  return (
    <div className="App">
      <WarningSign text="ciao sono un Alert" />
      <MyBadg text="sono un badg" badg="info"/>
      <SingleBook book={fantasyBooks[0]}/>
    </div>
  );
}

export default App;
