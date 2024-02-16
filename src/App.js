
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <div className="app">
//       <Header></Header>
//       <div className='app__page'>
//         <Sidebar />
//         <RecommendedVideos/>
//       </div>
//     </div>
//   );
// }

//

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage></SearchPage>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
