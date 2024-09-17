/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './App';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router root= {App}>
    <Route path="/" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Router>
), root);
