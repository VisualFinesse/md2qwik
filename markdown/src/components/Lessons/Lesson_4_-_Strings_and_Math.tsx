import { component$ } from '@builder.io/qwik';

export const Lesson_4_-_Strings_and_Math = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>tags:
  - Lesson</h2>
<p>This lesson will cover commonly used [[Math Functions|math]] and [[String Functions|string]] functions. These simple utilities allow for much quicker development of logic for interfaces and math concepts. Please review the two pages associated with this lesson before attempting the below exercises.</p>
<h2>Exercises</h2>
<h3>Math Questions</h3>
<p><em><strong>For the below problems, ask the user for a number. Store that number, and use it to calculate the values of the formulas below. Use the provided number instead of &#39;x&#39;, and round the result to the nearest 5 decimal places.</strong></em></p>
<ol>
<li>$\lceil{x}\rceil$</li>
<li>$2x^4+3$</li>
<li>$3\sqrt{\lvert x \rvert}+5$</li>
<li>$\sum^{15}_{k=0} k$</li>
</ol>
<h3>String Exercises</h3>
<ol>
<li>Get a string as input from the user. Print a string made up of the first 3 and last 3 characters of the user input. If the input string&#39;s length is less than 3, return an empty string instead.</li>
<li>Given any arbitrary list or array of strings (your choice), concatenate all strings in the list to a single string, where each component string is separated by the character <code>-</code>.</li>
<li>Get a string as input from the user. Print a string containing every even character in the user&#39;s input string.</li>
<li>Ask the user for a number. Calculate the average and sum of all digits in the string.</li>
<li>Get a string from the user. Print out a message stating whether or not the string was a palindrome. Assume an empty string is a palindrome.<ul>
<li>A palindrome is a word that is the same when spelled backwards and forwards. For example, &#39;racecar&#39; is a palindrome.</li>
</ul>
</li>
</ol>
'}></div>
  );
});