import { component$, Slot } from '@builder.io/qwik';
import { Router, Route } from '@builder.io/qwik-city';

import { LinkTree } from './components/LinkTree';

export default component$(() => {
  return (
    <Router>
      <Route path="/" component={Home} />
      { path: '/LinkTree', component: LinkTree }
      <Slot />
    </Router>
  );
});