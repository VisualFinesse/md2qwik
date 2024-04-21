import { component$ } from '@builder.io/qwik';

export const Lesson_1_-_Variables_and_Expressions = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags:
  - Lesson</h2>
<h2>Getting Started</h2>
<h4>Create a new project</h4>
<ol>
<li>Launch Visual Studio</li>
<li>On the screen that pops up when you boot the application, click &#39;Create a new project&#39;</li>
<li>Select &#39;Console App&#39; and make sure it has &#39;C#&#39; in the tags on the bottom</li>
<li>Click &#39;Next&#39; and name it whatever you want</li>
<li>If you have the option, select .NET 6.0 LTS as the target framework</li>
</ol>
<h2>Useful Functions</h2>
<p>There are two functions that are globally available which are typically used when writing applications. </p>
<pre><code class="language-csharp">Console.WriteLine(someVariable)
</code></pre>
<p>This line will print text to the console window based on that value of whatever variable you pass in. In this case, I am passing in a variable <code>someVariable</code></p>
<pre><code class="language-csharp">Console.ReadLine()
</code></pre>
<p>This statement will pause the program and wait for user input. Once the user has entered data, the string that the user entered will be returned as a string.</p>
<h2>Variables</h2>
<p>Variables are a feature of C# that allow programmers to store data in the computer&#39;s temporary memory. You will need to understand how to utilize [[variables]] and their various [[Data Types|types]] in order to complete the questions below.</p>
<h2>Basic Structure of Code</h2>
<ul>
<li>All expressions must end with a semicolon (a <code>;</code> character)</li>
<li>A value is <em>returned</em> whenever it is the result of a statement (a section of code)<ul>
<li>Return values replace the statement that produced them</li>
</ul>
</li>
<li>Everything written in a line after a <code>//</code> statement will be considered a comment. Comments will not affect code in any way.<ul>
<li>Block comments can be written between <code>/*</code> and <code>*/</code>. These comments can</li>
</ul>
</li>
</ul>
<pre><code class="language-csharp">// This is a comment. it won&#39;t affect your code at all

/*
* This is a block comment.
* You can write as many lines in this comment as you want.
* They will not affect your code in any way.
*/

var input = Console.ReadLine(); // user inputs &#39;potato&#39; here
Console.WriteLine(input);

// the above runs like the below:

var input = &quot;potato&quot;;
Console.WriteLine(input);
//&gt; potato
</code></pre>
<h3>Questions</h3>
<pre><code class="language-csharp">// Q1
// Write the code necessary to print out the phrase &#39;Hello World!&#39;

// Q2
// Determine what the below block of code will print without executing it.
int x = 3;
double y = -7;
int z = -1;

var q2 = x + z * -y % 5;

Console.WriteLine(q2);

// Q3
// Create a variable named &#39;q3&#39; and store the result of a / b in the variable.
// Make sure to check that a / b is mathematically correct. 
int a = 4;
int b = 3;

// Q4
// Ask the user for a phrase, then attach the word &#39;potato&#39; to the end of it. 
// Print out the result.
</code></pre>
'}></div>;
});