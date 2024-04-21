import { component$ } from '@builder.io/qwik';

export const Numeric_Types = component$(() => {
  return <div innerHTML={'<p>Numeric types are [[Data Types]] used for storing numbers. There are two types of numeric types: Integers and Floating Points.</p>
<h2>Integral vs Floating Point Numeric Types</h2>
<p>Integral types like [[Integers]] are stored as numbers without a decimal point, while floating point numbers like [[Doubles]] are stored with a decimal.</p>
<p>Here is a visual example of how two variables might display differently based on their types, even if they had the same exact values.</p>
<pre><code class="language-csharp">int x = 3;
double y = 3;

Console.WriteLine(x);
//&gt; 3
Console.WriteLine(y);
//&gt; 3.0, but the &#39;.0&#39; may be stripped off depending on your print settings

// the below line throws an error because you 
// can&#39;t save a floating point value to an integer
int x = 3.5; 
double y = 3.5;

Console.WriteLine(y);
//&gt; 3.5
</code></pre>
<p>For more information on numeric types, read the MSDN article for <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types">integral</a> and <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types">floating point</a> types. </p>
<h2>Operators on Numeric Types</h2>
<p>All numeric types have the same basic operators for performing regular mathematical functions:</p>
<ul>
<li><code>+</code> - for addition</li>
<li><code>-</code> - for subtraction</li>
<li><code>*</code> - for multiplication</li>
<li><code>/</code> - for regular division, and [[Integers|integer]] division</li>
<li><code>%</code> - the modulus operator (gets the remainder of division)</li>
</ul>
<p>Additionally, numeric types can be compared using <strong>comparison operators</strong>, which will all return [[Booleans|boolean]] result values:</p>
<ul>
<li><code>==</code> - equal to</li>
<li><code>!=</code> - not equal to</li>
<li><code>&gt;</code> - greater than</li>
<li><code>&gt;=</code> - greater than or equal to</li>
<li><code>&lt;</code> - less than</li>
<li><code>&lt;=</code> - less than or equal to</li>
</ul>
<p>All of the above operators do not save their values to any variables you use in them, and will instead output a result to wherever you are using the value.</p>
<pre><code class="language-csharp">double x = 6.5;
double y = 2.5;

var z = x % y; // gets the remainder of 6.5 divided by 2.5

// the highest multiple of 2.5 that is less than 6.5 is 5
// 6.5 - 5 = 1.5
// the result of the modulus operator should be 1.5

Console.WriteLine(z);
//&gt; 1.5
</code></pre>
<p>There are also a few useful [[math functions]] that can be used in the future.</p>
<h4>Assignment Operators</h4>
<p>All mathematical operators have assignment versions. These assignment versions of operators all perform their respective mathematical function and then update the value store in the left-hand variable.</p>
<ul>
<li><code>x += y</code> - add x and y and save the result in x</li>
<li><code>x -= y</code> - subtract y from x and save the result in x</li>
<li><code>x *= y</code> - multiply x and y and save the result in x</li>
<li><code>x /= y</code> - divide x by y and save the result in x</li>
<li><code>x %= y</code> - divide x by y and save the remainder in x</li>
</ul>
<p>Two other types of operators exist that assign values: The increment and decrement operators.</p>
<ul>
<li><code>x++</code> - Add 1 to x and save the result in x (postfix operator, executes <em>after</em> the line is run)</li>
<li><code>++x</code> - Add 1 to x and save the result in x (prefix operator, executes <em>before</em> the line is run)</li>
<li><code>x--</code> - Subtract 1 from x and save the result in x (postfix operator, executes <em>after</em> the line is run)</li>
<li><code>--x</code> - Subtract 1 from x and save the result in x (prefix operator, executes <em>before</em> the line is run)</li>
</ul>
<p>Here are some examples of assignment operators in use:</p>
<pre><code class="language-csharp">var x = 0;
var y = 5;

x++;
Console.WriteLine(x);
//&gt; 1

x += 2;
Console.WriteLine(x);
//&gt; 3

x -= y;
Console.WriteLine(x);
//&gt; -2

// The above operator was not an assignment operator.
// This means that the result will not be saved in x, so the program 
// will still print -2 from the previous result.

// The below code will use the result of x * 15, without saving the value back to x.
Console.WriteLine(x * 15);
//&gt; -30

// x is -2 before running this
var a = ++x; // adds 1 to x BEFORE the line is run, saving the changed version to a
Console.WriteLine(x);
//&gt; -1
Console.WriteLine(a);
//&gt; -1

// x is -1 before running this
var b = x++; // adds 1 to x AFTER the line is run, saving the unchanged version to b
Console.WriteLine(x);
//&gt; 0
Console.WriteLine(b);
//&gt; -1
</code></pre>
<h4>Order of Operations</h4>
<p>Mathematical operators all follow the order of operations as used in any everyday math class. This means that you don&#39;t have to worry about expressions on the same line being evaluated from left-to-right, because the C# compiler already takes this into account.</p>
<pre><code class="language-csharp">int x = 2;
int y = 7;

// order of operations (PEMDAS) dictates that 3 * x will be evaluated before y
Console.WriteLine(y + 3 * x);
//&gt; 13

// here we force y + 3 to be evaluated first using parentheses
Console.WriteLine((y + 3) * x);
//&gt; 20
</code></pre>
<p>Microsoft has some documentation on order of operations for operators <a href="https://learn.microsoft.com/en-us/cpp/c-language/precedence-and-order-of-evaluation?view=msvc-170">here</a>. This documentation includes operators not covered in this class.</p>
<h4>Integer Division</h4>
<p>It&#39;s important to note that division performed on two integral numbers behaves differently than division using any other combination of numeric types.</p>
<p>[[Integers#^IntegerDivision|Integer division]] is a special case where all remainders are discarded. Because of this, the resulting values are always integers.</p>
<h2>Signed vs Unsigned Types</h2>
<p><em><strong>This is interesting information on how numeric types work behind the scenes. It is not necessary for you to understand this right now, but it&#39;s good foundational knowledge to pick up.</strong></em></p>
<p>***I will assume that you already have some basic knowledge of binary here, but if you are interested in learning this and do not already understand binary, there is a quick guide <a href="http://www.steves-internet-guide.com/binary-numbers-explained/">here</a></p>
<p>Most numeric types are &#39;signed types&#39;, like [[Integers|int]] and [[Doubles|double]]. <strong>Signed types</strong> may have a positive or negative value, up to whatever their maximum or minimum values are. <strong>Unsigned Types</strong> must always be positive or zero. They do not support negative values.</p>
<p>Storing a value as a signed type will typically restrict the number of possible values to about half of what the unsigned version would normally allow. This is because when the number is being stored in memory, the leading bit is used to denote the sign of the stored number, instead of extending its value.</p>
<p>Here is an example of this using the &#39;short&#39; and &#39;ushort&#39; (unsigned short) data types. Shorts store their values in only 8 bits, so they are easy to visualize.</p>
<pre><code>Short
1 0 1 0 0 1 0 1
|   |     |   |
128 32    4   1
-------------------
Represents Value: 165

Unsigned Short (ushort, using sign-magnitude representation for simplicity) 
1 0 1 0 0 1 0 1
|   |     |   |
-   32    4   1
-------------------
Represents Value: -37
</code></pre>
<p>The two numbers above are stored using the exact same string of bits, but the two numbers represent different values. This is because the first bit on the left is the &#39;leading bit&#39;, which represents the positive or negative sign in a signed type. When using an unsigned type, the leading bit is simply a continuation of the other bits, allowing for more possible values to be represented.</p>
<p>You can read more about the sign-magnitude representation used above <a href="https://en.wikipedia.org/wiki/Signed_number_representations#Sign%E2%80%93magnitude">here</a>, but it shouldn&#39;t be needed to understand the topics covered in this lesson.</p>
'}></div>;
});