import Image from "next/image";
import { Inter } from "next/font/google";
import ImageGallery from "./component/ImageGallery";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="flex flex-col items-center w-full h-screen bg-gray-200">
      <h2 className="text-4xl font-bold text-gray-700 pt-10">My Pixabay</h2>
      <form className="w-full max-w-xl m-5">
        <input
          type="text"
          placeholder="画像を探す"
          className="w-full outline-none px-2 py-2 bg-white shadow-md rounded-lg"
        />
      </form>
      <ImageGallery />
    </main>
  );
};

export default Home;
