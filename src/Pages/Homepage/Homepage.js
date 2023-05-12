import React from 'react';
import Homebanner from './Homebanner/Homebanner';
import Providecare from './Providecare/Providecare';
import Homeservices from './Homeservices/Homeservices';

const Homepage = () => {
    return (
        <div>
        <Homebanner></Homebanner>
<Providecare></Providecare>
<Homeservices></Homeservices>
        </div>
    );
};

export default Homepage;