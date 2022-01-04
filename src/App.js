import "./App.css";

function App() {
  return (
    //BEM convention
    <div className="app">
      <div className="app_top">
        {/*TOP instagram logo*/}
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="logo"
        />
        {/*Reels text*/}
        <h1>Reels</h1>
      </div>
      <div className="app_videos">{/*container for scrollable videos */}</div>
    </div>
  );
}

export default App;
