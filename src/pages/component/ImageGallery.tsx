import React from "react";

interface ImageGalleryProps {
  fetchData: {
    id: number;
    pageURL: string;
    largeImageURL: string;
  }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ fetchData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {fetchData.map((data) => (
        <div key={data.id} className="w-64 h-64">
          <a href={data.pageURL} target="_blank">
            <img
              src={data.largeImageURL}
              alt={data.pageURL}
              className="w-full h-full object-cover rounded shadow-md bg-center cursor-pointer hover:shadow-none"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
