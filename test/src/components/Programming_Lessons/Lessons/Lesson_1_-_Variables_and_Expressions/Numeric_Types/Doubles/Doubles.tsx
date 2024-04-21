import { component$ } from '@builder.io/qwik';

export const Doubles = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - double</h2>
<p>Doubles are a signed, floating-point <a href="Numeric%20Types.md">numeric type</a> used for storing decimal numbers. They can represent any decimal number in the approximate range $±5.0\ ×\ 10^{−324}$ to $±1.7\ ×\ 10^{308}$ </p>
<p>This type is named &#39;double&#39; because it uses double the normal space in memory for storing numbers with increased precision compared to a regular &#39;float&#39; type.</p>
<p>Because it is a numeric type, doubles may use any of the operators available to [[Numeric Types]].</p>
'}></div>;
});