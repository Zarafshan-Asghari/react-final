import { useEffect, useState } from "react";
import ArticleItem from "../../components/articleItem/articleItem";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { ImOpt } from "react-icons/im";
import HeroSection from "../../components/Hero/hero";

function Home() {
  const [articles, setArticle] = useState([]);

  // Using useEffect to get data from our fake API.
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/")
      .then((response) => setArticle(response.data.data));
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* hero */}
      <HeroSection></HeroSection>
      {/* Article section */}
      <section className="max-w-6xl mx-auto py-20 px-8 lg:px-6">
        <h2 className="capitalize text-3xl font-bold mb-12">Articles</h2>

        <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
      </section>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default Home;
