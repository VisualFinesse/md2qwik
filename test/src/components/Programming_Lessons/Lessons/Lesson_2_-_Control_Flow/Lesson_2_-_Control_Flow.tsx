import { component$ } from '@builder.io/qwik';

export const Lesson_2_-_Control_Flow = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags:
  - Lesson
aliases:
  - control flow</h2>
<p>In this lesson, we will be covering control flow structures, and using them to create conditional logic within your code.</p>
<p><strong>Control Flow</strong> is the order in which the computer runs each line in a program. Being able to manipulate this allows developers to create code that runs conditionally, any number of times. We typically use this to create programs that make decisions based on the values provided to them.</p>
<p>Control flow is manipulated using [[control flow structures]]. You will need to read through and understand each of these structures before being able to complete the problems below.</p>
<h2>Problems</h2>
<p><strong>Problem 1:</strong>   In a new program, place the below line at the top.
<code>int totalCents = 21881;</code></p>
<p>Print out the maximum number of dollars, quarters, dimes, nickels, and pennies that would equal the total given at the top. For example, if the total cents was 213, we would print the below.</p>
<pre><code>Dollars: 2
Quarters: 0
Dimes: 1
Nickels: 0
Pennies: 3
</code></pre>
<p><em><strong>Use loops to solve the below problems. Explain why you decided to use the kind of loop you chose for each problem.</strong></em></p>
<p><strong>Problem 2:</strong> Pick a large integer. Print all digits of that integer on separate lines.</p>
<p><strong>Problem 3:</strong> Pick a word, and repeatedly ask the user to guess the word you&#39;re thinking of. Keep asking until they guess correctly.</p>
<p><strong>Problem 4:</strong> Pick a large positive integer. Calculate and print out its left-most digit.</p>
<p><strong>Problem 5:</strong> Print out every third integer between 1 and 31, starting with 1. For example, if we wanted to print every third integer between 1 and 7, we would print the below.</p>
<pre><code>1
4
7
</code></pre>
<p><strong>Problem 6:</strong> Print the sum of each integer from 1 to 20 with each of its previous positive integers. For example, if we desire to print the sum of 4, the value we need to print would be the sum of 4 + 3 + 2 + 1, which equals 10. Try solving this with one loop, then try solving this problem again with two loops.</p>
'}></div>;
});