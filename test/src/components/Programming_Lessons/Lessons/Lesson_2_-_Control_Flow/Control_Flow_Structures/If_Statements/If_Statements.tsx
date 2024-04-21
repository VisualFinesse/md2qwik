import { component$ } from '@builder.io/qwik';

export const If_Statements = component$(() => {
  return <div innerHTML={'<p>If statements are control flow structures that perform logic conditionally based on a [[Booleans|boolean]] value provided to them. If statements will only execute the code in their body if the condition provided to it evaluates to <strong>true</strong>.</p>
<pre><code class="language-csharp">bool someValue = true;

if (someValue) { // here we use &#39;someValue&#39; as the condition

    // if someValue is true, run the code written here
    
}

// regardless of what was in the if statement, run the code after the block
</code></pre>
<p>If statements may also have an <strong>else if</strong> or <strong>else</strong> clause, which denotes a block of code to execute if the condition was <strong>false</strong>.</p>
<pre><code class="language-csharp">bool someValue = true;
bool someOtherValue = false;

if (someValue) {
    // if someValue is true, run the code written here
} else if (someOtherValue) {
    // if someValue is false, and if someOtherValue is true, run the code written here 
} else {
    // if someOtherValue is false, run the code written here
}

// regardless of what was in the if statement, run the code after the block
</code></pre>
<p>It&#39;s important to note that the condition provided to an if statement doesn&#39;t necessarily have to be a boolean <em>variable</em>, it could also be an expression. Here&#39;s an example of using a condition instead of a boolean directly:</p>
<pre><code class="language-csharp">int x = 3;

if (x &gt; 7) {
    // this will not run, because (x &gt; 7) = false
} else {
    // this will run, because the condition evaluated to true
}
// regardless of what was in the if statement, run the code after the block
</code></pre>
<p>If statements can use single lines or [[Control Flow Structures#^CodeBlocks|code blocks]] as their body. This means that you don&#39;t need the curly braces to make an if statement function, but omitting them will restrict you to using a single line in the statement.</p>
<h2>Ternary If Statements</h2>
<p>Inline ternary if statements can be written using the <code>?</code> operator. This allows if statements that would normally be multiple lines to be shortened to expression. </p>
<p>Ternary if statements are expressions that will evaluate to a result value. They are primarily used when assigning variables to minimize the amount of boilerplate code needed to assign conditional values.</p>
<p>Ternary if statements are written using the below format:</p>
<pre><code>condition ? valueIfConditionWasTrue : valueIfConditionWasFalse
</code></pre>
<p>Here is an example of an inline ternary if statement compared to the normal multi-line if statement:</p>
<pre><code class="language-csharp">int x = 50;

// if x &gt; 10, this will print x / 2.
// if x &lt;= 10, this will print x.
int result;
if (x &gt; 10) {
    result = x / 2;
} else {
    result = x;
}
Console.WriteLine(result);
//&gt; 25

// this ternary statement condenses the above if statement&#39;s logic to a single line
Console.WriteLine(x &gt; 10 ? x / 2 : x);
//&gt; 25
</code></pre>
'}></div>;
});