import React, { useRef } from "react";

interface SearchFormProps {
  setFetchData: (data: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ setFetchData }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiKey = "44252574-0f66666e1bb0e41e2fc432aa5";
    const query = ref.current?.value;
    if (!apiKey || !query) return;

    const endpointURL = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`;

    try {
      const response = await fetch(endpointURL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setFetchData(data.hits);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl m-5">
      <input
        type="text"
        placeholder="画像を探す"
        ref={ref}
        className="w-full outline-none px-2 py-2 bg-white shadow-md rounded-lg"
      />
    </form>
  );
};

export default SearchForm;
