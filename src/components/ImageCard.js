import React from 'react';

const ImageCard = ({ title, description, genre }) => {
    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-blue-500 text-xl mb-2">
              {title}
            </div>
            <ul>
              <li>
                <strong>Description: </strong>
                {description}
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full 
            px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {genre}
            </span>
          </div>
        </div>
    )
}

export default ImageCard;