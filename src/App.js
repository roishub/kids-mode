import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Centre from './components/Centre';
import Practice from './components/Pages/practice/Practice';
import Story1 from './components/stories/stories1';
import Story2 from './components/stories/stories2';
import Story3 from './components/stories/story3';
import Story4 from './components/stories/story4';
import Story5 from './components/stories/story5';
import Story6 from './components/stories/story6';
import Story7 from './components/stories/story7';
import Story8 from './components/stories/story8';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Centre headerName="lovesh" />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/story1" element={<Story1 />} />
          <Route path="/story2" element={<Story2 />} />
          <Route path="/story3" element={<Story3 />} />
          <Route path="/story4" element={<Story4 />} />
          <Route path="/story5" element={<Story5 />} />
          <Route path="/story6" element={<Story6 />} />
          <Route path="/story7" element={<Story7 />} />
          <Route path="/story8" element={<Story8 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
