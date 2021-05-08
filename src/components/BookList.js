import React from 'react';
import ImageCard from './ImageCard';
import books from '../books';
import BookView from './pages/BookView';
import Preview from './pages/Preview';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BookList = ({ title }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Router>
                <div>
                    {books.map(book => {
                        return (                        
                            <Link to="/preview">
                            <ImageCard 
                            key={book.id} 
                            title={book.title}
                            description={book.description}
                            genre={book.genre}
                            />
                            </Link>
                        )
                        }
                    )}
                </div>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <BookView />
                        </Route>
                        <Route path="/preview">
                            <Preview />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default BookList;