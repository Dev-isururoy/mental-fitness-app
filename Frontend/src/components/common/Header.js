import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Mental Fitness App</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/meditation">Meditation</a></li>
                    <li><a href="/mood">Mood Tracker</a></li>
                    <li><a href="/journal">Journal</a></li>
                    {/* Add links to other sections as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
