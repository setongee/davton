import './App.scss';
import Header from './header';
import Posts from './posts';

function App() {
  return (

    <div className="community">

       <Header/>

       <div className="postArea-bd">

          <Posts srcgd = 'https://firebasestorage.googleapis.com/v0/b/geophotography-5460b.appspot.com/o/postImg.jpg?alt=media&token=d1339d93-0c3a-4de7-b8e0-85ca7080800b' />

          <Posts srcgd = 'https://firebasestorage.googleapis.com/v0/b/geophotography-5460b.appspot.com/o/395Z_3.jpg?alt=media&token=f2050b38-cec1-4f78-969c-88245d1ad5f0' />

          <Posts srcgd = 'https://firebasestorage.googleapis.com/v0/b/geophotography-5460b.appspot.com/o/woman-getting-vaccinated-close-up.jpg?alt=media&token=d064c485-891e-412c-be98-e9169d0ac787' />

       </div>

    </div>

  );
}

export default App;
