import Image from "next/image";
import { Inter } from "next/font/google";
import ImageGallery from "./component/ImageGallery";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(ref.current?.value);

    const endpointURL = `https://pixabay.com/api/?key=44252574-0f66666e1bb0e41e2fc432aa5&q=${ref.current?.value}&image_type=photo`;

    fetch(endpointURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-200">
      <h2 className="text-4xl font-bold text-gray-700 pt-10">My Pixabay</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl m-5">
        <input
          type="text"
          placeholder="画像を探す"
          ref={ref}
          className="w-full outline-none px-2 py-2 bg-white shadow-md rounded-lg"
        />
      </form>
      <ImageGallery fetchData={fetchData} />
    </main>
  );
};

export default Home;
