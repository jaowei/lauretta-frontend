import React from 'react';
import page from '../../images/robertson.jpg'

const Preview = () => {
    return (
        <div className="bg-gray-100 max-w-full max-h-full text-center align-middle px-6 py-6">
            <img src={page} alt="page" className="w-full" />
        </div>
    )
}

export default Preview;