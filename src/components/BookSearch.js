import React from 'react';

const BookSearch = () => {

    return (
        <div className="flex py-6">
            <div className="w-1/8 rounded overflow-hidden my-auto mx-4">
                <i className="fas fa-dove fa-3x"></i>
            </div>
            <div className="w-7/8 rounded overflow-hidden my-10 mx-auto">
                <form className="w-full max-w-sm">
                    <div className="flex items-center border-b border-b-2 border-gray-400 py-2">
                        <input className="appearance-none bg-transparent border-none w-full
                        text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                        type="text" placeholder="Search Your Library..." />
                        <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700
                        border-blue-500 hover:border-blue-700 text-sm border-4 text-white
                        py-1 px-2 rounded" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookSearch;