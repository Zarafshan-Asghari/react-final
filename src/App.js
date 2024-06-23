// import { BsInstagram } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Article from "./pages/article/article";
import AddArticle from "./pages/addArticle/AddArticle";
import EditArticle from "./pages/editArticle/editArticle";
import Articles from "./components/allArticles/articles";
function App() {
  return (
    <>
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/add-article" element={<AddArticle />} />{" "}
          {/* New route for adding an article */}
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/edit-article/:articleId" element={<EditArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
