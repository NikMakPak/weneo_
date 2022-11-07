import React from 'react'
import Navbar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
        <Navbar />
        <div className="wrap">
          <img className='logo' width={404} height={464} src="img/logo.svg" alt="" />
          <div className="infoBlock">
            <h1>Инновационная веб студия для вашего вашего бизнеса</h1>
            <p>Cоздание нового или редизайне существующего проекта с помощью искусственного интеллекта и нашей современной платформы.</p>
            <button className='btn'>Попробовать инновации</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
