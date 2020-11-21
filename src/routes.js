import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from 'src/App';
import MainPage from 'src/MainPage';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Route path="/" component={MainPage}>
        {/*<IndexRoute component={MainPage} />*/}
        {/*<Route path="/some/where" component={SomePage} />*/}
        {/*<Route path="/some/otherpage" component={SomeOtherPage} />*/}
    </Route>
);
