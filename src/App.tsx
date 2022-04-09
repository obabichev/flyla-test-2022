import React from 'react';
import logo from './logo.svg';
import './App.css'
import {mockCategories} from "./mock";

function App() {
    const a: string = 'qwe';
    return (
        <div className="App">
            {mockCategories.trivia_categories.map(category => (
                <div key={category.id}>
                    {category.name}
                </div>
            ))}
        </div>
    );
}

export default App;
