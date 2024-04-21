import { component$ } from '@builder.io/qwik';

export const Lesson_3_-_Arrays_and_Lists = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags:
  - Lesson</h2>
<p>[[Lists]] are complex types that allow you to store multiple things in one variable. They are [[Classes and Objects]] that have internal [[Arrays]], and use methods to perform their normal operations. You will need to read through and understand [[Lists]], [[Arrays]], and [[ForEach Loop|For-Each Loops]] before being able to complete this lesson&#39;s exercises.
[[Lists]] are complex types that allow you to store multiple things in one variable. They are [[Classes and Objects]] that have internal [[Arrays]], and use methods to perform their normal operations. You will need to read through and understand [[Lists]], [[Arrays]], and [[ForEach Loop|For-Each Loops]] before being able to complete this lesson&#39;s exercises.</p>
<h3>Exercises</h3>
<p><em><strong>Problem 1:</strong></em> Populate the elements of an array containing all values from 1-100 raised to the 3rd power. Print out the array afterward.</p>
<p><em><strong>Problem 2:</strong></em> Ask the user if they would like to store a word. If they say &#39;yes&#39;, then ask them for a word and store it. Keep repeating this until they no longer wish to store a word. Print out all of the stored words once they stop wanting to store words.</p>
<p><em><strong>Problem 3:</strong></em> Ask the user for a lowercase word or phrase. Convert the provided string to a [[Characters|char]] array by writing <code>yourString.ToCharArray()</code> and saving the result. Then, encode the char array by performing the below operation on the char array. Convert your char array back to a string using <code>new string(yourCharArray)</code>. Print out the encoded string. Decode the string by performing the process in reverse and print out the decoded string. </p>
<p><strong>Process for encoding a string:</strong>
&#39;Shift&#39; the characters in the array up by an amount based on their position, as described below. To do this, add the amount you want to shift to the ASCII value of the character.</p>
<p>First Character: Shift up by 1
Second Character: Shift up by 2
Third Character: Shift up by 3
Next Character: Start again at the first character step, continuing downward for each character</p>
<p>Here is a visual example of this:</p>
<pre><code>Character Index: 0    1    2    3    4    5    6 ...         
Transformation:  1 -&gt; 2 -&gt; 3 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 1 ...
</code></pre>
<p>NOTE: If the original character to shift is a non-alphabetical character, do not perform any transformations to it. Additionally, if a character would be adjusted to an ASCII value above 172 (lowercase &#39;z&#39;), then &#39;wrap around&#39; and start counting from 97 (lowercase &#39;a&#39;).</p>
<p><em><strong>Problem 4:</strong></em> Store the 3 x 3 matrix below in your code using a two-dimensional array. Multiply the matrix by a scalar value of 4. Print out the array after the transformation. 
$$ \begin{pmatrix} 
121 &amp; -19 &amp; 12 \
413 &amp; 2 &amp; 156 \
-200 &amp; 7 &amp; 34
\end{pmatrix} \times 4 $$</p>
<p><em><strong>Problem 5:</strong></em> Given the below jagged two-dimensional array, print out the sum of all elements in each row. Then, print out the sum of all elements in the array.
$$ \begin{matrix} 
121 &amp; 19 \
413 &amp; 2 &amp; 56 &amp; 37 &amp; 15 \
201 &amp; 7 &amp; 34 \
12 \
29 &amp; 47
\end{matrix} $$</p>
'}></div>;
});