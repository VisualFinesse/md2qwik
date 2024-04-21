import { component$ } from '@builder.io/qwik';

export const Control_Flow_Structures = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - loop
  - loops
  - code block
  - code blocks</h2>
<h2>Overview</h2>
<p>Control flow structures are structures that modify the order in which lines are executed in a program. These are typically used to make branching, decision-making logic when writing code. </p>
<p>There are three types of control flow structures in C#: <strong>If Statements</strong>, <strong>Switch Case Statements</strong> and <strong>Loops</strong>.</p>
<h2>If Statements</h2>
<p>[[If Statements]] are control flow structures that perform logic conditionally based on a [[Booleans|boolean]] value provided to them. If statements will only execute the [[Control Flow Structures#^CodeBlocks|code block]] in their body if the condition provided to it evaluates to <strong>true</strong>.</p>
<h2>Switch Case Statements</h2>
<p>[[Lessons/Lesson 2 - Control Flow/Control Flow Structures/Switch Case Statements|Switch Case Statements]] are control flow structures that are used to quickly define cases for when a variable is equal to specified discrete values.</p>
<h2>Loops</h2>
<p>Loops are control flow structures that allow programs to execute the same [[Control Flow Structures#^CodeBlocks|code block]] repeatedly. There are three types of basic loops: [[For Loop|for]], [[While Loop|while]], and [[Do-While Loop|do-while]]. Each of these loops changes the control flow differently, so it&#39;s important know the order in which expressions are executed in each type of loop.</p>
<h4>Special Keywords for Loops</h4>
<p>There are two keywords that can be used inside of loops: <code>break</code> and <code>continue</code>. </p>
<p><code>break</code> - When a break statement is encountered (and is not a part of a [[Switch Case Statements|switch case]]), the innermost loop that the current line is inside of will be considered finished. This will immediately end the current iteration of the loop, and not attempt to execute any future loop iterations.</p>
<p><code>continue</code> - When a continue statement is encountered, the innermost loop that the current line is inside of will end its current iteration. The the loop will then immediately attempt to begin another iteration of its containing code if possible.</p>
<pre><code class="language-csharp">var x = 5;

for (int i = 0; i &lt; x; i++) {
    Console.WriteLine(&quot;Running iteration: &quot; + i);
    
    // if i is an odd number, this below section will end the loop
    if (i % 2 == 1) {
        break;
    } 
}
// The above loop will print out the below:
//&gt; Running iteration: 0
//&gt; Running iteration: 1

for (int i = 0; i &lt; x; i++) {
    // if i is an odd number, this below section skip the current iteration
    if (i % 2 == 1) {
        continue;
    } 
    Console.WriteLine(&quot;Running iteration: &quot; + i);
}
// The above loop will print out the below:
//&gt; Running iteration: 0
//&gt; Running iteration: 2
//&gt; Running iteration: 4
</code></pre>
<h2>Code Blocks</h2>
<p>^CodeBlocks</p>
<p>Whenever a structure uses curly braces (<code>{</code> and <code>}</code> ) to describe a block of code, that code can be considered a <strong>Code Block</strong>. These blocks aren&#39;t necessary to create a structure, they simply group a collection of lines into one statement.</p>
<p>Here is an example of using an if statement without a code block:</p>
<pre><code class="language-csharp">var foo = true;

// there is no code block containing the body of this if statement, but it still works
if (foo)
    Console.WriteLine(&quot;Hello World!&quot;);

// there is a code block surrounding the body of this if statement
if (foo) {
    Console.WriteLine(&quot;Hello World!&quot;);
}
</code></pre>
<p>Code blocks are only necessary when you have multiple statements that you would like to execute as a part of your control flow structure. You can visualize the difference between using a code block and not using one by looking at the example below:</p>
<pre><code class="language-csharp">bool condition = false;

Console.WriteLine(&quot;Before the if statement&quot;);
if (true) {
    Console.WriteLine(&quot;This is line 1&quot;);
    Console.WriteLine(&quot;This is line 2&quot;);
} 
Console.WriteLine(&quot;After the if statement&quot;);
// the above section would print the below lines:
//&gt; Before the if statement
//&gt; After the if statement

// if we remove the curly braces, we end up with a section like below:

if (true) 
    Console.WriteLine(&quot;This is line 1&quot;);
    Console.WriteLine(&quot;This is line 2&quot;);
Console.WriteLine(&quot;After the if statement&quot;);
// the above section would print the below lines:
//&gt; Before the if statement
//&gt; This is line 2
//&gt; After the if statement
</code></pre>
<p>In the above example, <code>&quot;This is line 2&quot;</code> is printed to the console because the line <code>Console.WriteLine(&quot;This is line 2&quot;);</code> is not considered a part of the if statement. This is because the if statement only considers the code block directly in front of it, which is simply <code>Console.WriteLine(&quot;This is line 1&quot;);</code> because there are no curly braces.</p>
<h2>Nesting Statements</h2>
<p>Control flow structures can be nested inside of code blocks that are a part of control flow structures. </p>
<p>Here is an example of nesting [[If Statements]]:</p>
<pre><code class="language-csharp">var potato = true;
var salad = false;

// this if statement would print &quot;Potato Salad&quot; only if both 
// &#39;potato&#39; and &#39;salad&#39; are true.
if (potato) {
    if (salad) {
        Console.WriteLine(&quot;Potato Salad&quot;);
    }
}
</code></pre>
<p>Below is an example of nesting [[For Loop|For Loops]]. The outer loop will execute the inner loop multiple times. The inner loop is comparing <code>j</code> to <code>i</code>, which will run the inner loop an increasing number of times.</p>
<pre><code class="language-csharp">for (int i = 1; i &lt;= 3; i++) {
    for (int j = 0; j &lt; i; j++) {
        Console.WriteLine(j);
    }
    Console.WriteLine(&quot;Inner Loop Complete&quot;);
}
Console.WriteLine(&quot;Outer Loop Complete&quot;);

// The above block will run the inner loop multiple times, 
// resulting in the below output:
//&gt; 0
//&gt; Inner Loop Complete
//&gt; 0
//&gt; 1
//&gt; Inner Loop Complete
//&gt; 0
//&gt; 1
//&gt; 2
//&gt; Inner Loop Complete
//&gt; Outer Loop Complete
</code></pre>
'}></div>;
});