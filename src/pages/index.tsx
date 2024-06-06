import SearchForm from "./component/SearchForm";
import ImageGallery from "./component/ImageGallery";
import { useState } from "react";

const Home = () => {
  const [fetchData, setFetchData] = useState([]);

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-200">
      <h2 className="text-4xl font-bold text-gray-700 pt-10">My Pixabay</h2>

      <SearchForm setFetchData={setFetchData} />

      <ImageGallery fetchData={fetchData} />
    </main>
  );
};

export default Home;
