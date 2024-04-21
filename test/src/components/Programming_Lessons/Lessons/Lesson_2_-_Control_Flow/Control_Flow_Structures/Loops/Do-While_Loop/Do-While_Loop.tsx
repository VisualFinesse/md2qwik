import { component$ } from '@builder.io/qwik';

export const Do-While_Loop = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - do while
  - do-while
  - do while loop</h2>
<p><strong>Do-While loops</strong> are a type of loop that will iterate <em>at least once, until a condition is met</em>. Conditions used in a do-while loop must be expressions that evaluate to a [[Booleans|boolean]] value.</p>
<h2>Order of Iteration</h2>
<p>While loops will execute using the below steps when encountered:</p>
<ol>
<li>Run the [[Control Flow Structures|code block]] in the loop.</li>
<li>Evaluate the condition expression, and retrieve its boolean value</li>
<li>If the condition evaluates to <strong>True</strong>, return to Step 1.</li>
<li>If the condition evaluates to <strong>False</strong>, the loop ends. Continue executing lines below the loop as normal.</li>
</ol>
<h2>Example Loops</h2>
<pre><code class="language-csharp">int x = 50;

do {
    Console.WriteLine(x);
    x /= 2;
} while (x &gt;= 10); // in this do-while loop, &#39;x &gt;= 10&#39; is the condition

Console.WriteLine(&quot;Final Value: &quot; + x);

// This will print the below values:
//&gt; 50
//&gt; 25
//&gt; 12
//&gt; Final Value: 6
</code></pre>
<p>If the condition evaluates to false in the first iteration, the loop body will still have executed the first time. </p>
<pre><code class="language-csharp">int x = 50;

do { // this condition evaluates to false, so the loop will not run.
    Console.WriteLine(x);
    x /= 2;
} while (x &lt; 10);

Console.WriteLine(&quot;Final Value: &quot; + x);

// This will print the below values:
//&gt; 50
//&gt; Final Value: 25
</code></pre>
'}></div>;
});