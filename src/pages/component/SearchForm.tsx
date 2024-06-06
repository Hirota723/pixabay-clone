import React, { useRef } from "react";

interface SearchFormProps {
  setFetchData: (data: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ setFetchData }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const endpointURL = `https://pixabay.com/api/?key=44252574-0f66666e1bb0e41e2fc432aa5&q=${ref.current?.value}&image_type=photo`;

    fetch(endpointURL)
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data.hits);
      });
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
