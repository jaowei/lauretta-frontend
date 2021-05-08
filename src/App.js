import React from 'react';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';

function App() { 

  return (
    <div className="container mx-auto">
        <BookSearch />
        <BookList />
    </div>
  );
}

export default App;
