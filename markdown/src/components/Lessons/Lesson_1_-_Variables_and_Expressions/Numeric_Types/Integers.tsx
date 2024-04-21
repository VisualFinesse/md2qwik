import { component$ } from '@builder.io/qwik';

export const Integers = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - int
  - integer</h2>
<p>Integer is a signed, integral <a href="Numeric%20Types.md">numeric type</a> that is used for representing whole numbers. They can represent any whole number in the range -2,147,483,648 to 2,147,483,647.</p>
<p>Because it is a numeric type, integers may use any of the operators available to [[Numeric Types]].</p>
<h2>Integer Division</h2>
<p>^IntegerDivision</p>
<p>When dividing two integers, most programming languages &#39;truncate&#39; any resulting decimal points. C# does this logic whenever division is performed on two integral types. When truncating remainder values, C# never rounds to the nearest whole number. It simply drops whatever would come after the decimal point.</p>
<pre><code class="language-csharp">int x = 7;
int y = 2;

var z = x / y; 
// mathematically this should be 3.5, but in code it results in a 3.
// this result will be an integer

Console.WriteLine(z);
//&gt; 3
</code></pre>
<p>If any of the variables used in division is a floating-point numeric type like a [[Doubles|double]], then regular division will be performed.</p>
<pre><code class="language-csharp">double x = 7;
int y = 2;

var z = x / y; 
// this result will be a double

Console.WriteLine(z);
//&gt; 3.5
</code></pre>
<p>If two integers are used for division, the result will be a truncated integer. If we want to divide two integers normally, we can cast one of the operands to a floating-point type like [[Doubles|double]].</p>
<pre><code class="language-csharp">int x = 7;
int y = 2;

// casting any of the variables involved in the division to double 
// will make the program use normal division instead of integer division
var z = x / (double) y; 
// this result will be a double

Console.WriteLine(z);
//&gt; 3.5
</code></pre>
'}></div>
  );
});