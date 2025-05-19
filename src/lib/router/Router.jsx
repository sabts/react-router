import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import Gallery from "../../pages/gallery/Gallery";
import SayHello from "../../components/say-hello/SayHello";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SayHello page="H" />} />
      <Route path="/blog" element={<SayHello page="BLOG" />} />
      <Route path="/gallery" element={<SayHello page="GALLERY" />} />
    </Routes>
  );
};
export default Router;
