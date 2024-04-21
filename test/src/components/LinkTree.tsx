import { component$, Resource } from '@builder.io/qwik';
export default component$(() => {
  const components = ["test\\src\\components\\LinkTree.tsx"];
  return <ul>
    {components.map(path => <li><a href={'/' + path.replace('/src/components/', '').replace('.tsx', '')}>{path.split('/').pop().replace('.tsx', '')}</a></li>)}
  </ul>;
});