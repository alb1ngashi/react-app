import { lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Loading from './components/shared/Loading/Loading';
import ScrollToTop from './ScrollToTop';
import './App.scss';


const Home = lazy(() => import('./pages/Home/Home'));


function App() {


  return (
    <Router>
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
        <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;

