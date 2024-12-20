import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage'
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import NavBar from './pages/Navbar';
import AddArticle from './components/AddArticle';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticlesListPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addarticle" element={<AddArticle />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
