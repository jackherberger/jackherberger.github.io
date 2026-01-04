import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import ProjectDetail from './components/ProjectDetail';
import Post from './components/Post';
import NewPostForm from './components/NewPostForm'; // Import the new form component
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/admin/new-post" element={<NewPostForm />} /> {/* Route for the new post form */}
          <Route path="/:projectId" element={<ProjectDetail />} />
          <Route path="/:projectId/:postId" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
