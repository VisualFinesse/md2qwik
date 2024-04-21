import { component$ } from '@builder.io/qwik';

export const Math_Functions = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - math
  - math functions</h2>
<p>There are a collection of static functions provided in C# as a part of the Math class, which can be found <a href="https://learn.microsoft.com/en-us/dotnet/api/system.math?view=net-8.0">here</a>. Below is a list of commonly used properties and functions that can be used when performing calculations.</p>
<h2>Properties</h2>
<ul>
<li><code>Math.E</code> - Represents the value of the mathematical constant e.</li>
<li><code>Math.PI</code> - Represents the value of the mathematical constant π.</li>
<li><code>Math.Tau</code> - Represents the value of the mathematical constant τ.</li>
</ul>
<h2>Commonly Used Functions</h2>
<ul>
<li><code>Math.Abs(num)</code> - Returns the absolute value of a number</li>
<li><code>Math.Sqrt(num)</code> - Returns the square root of a number</li>
<li><code>Math.Pow(baseNum, exponentNum)</code> - Returns the value of the base raised to the exponent&#39;s power</li>
<li><code>Math.Ceiling(num)</code> - Returns the smallest whole number that is greater than the provided decimal number</li>
<li><code>Math.Floor(num)</code> - Returns the largest whole number that is less than the provided decimal number</li>
<li><code>Math.Max(num1, num2)</code> - Returns the larger of the two provided numbers</li>
<li><code>Math.Min(num1, num2)</code> - Returns the smaller of the two provided numbers</li>
<li><code>Math.Round(num, [places])</code> - Returns the value of num rounded to the nearest whole number if <code>places</code> is not provided. If places is provided, it instead rounds to the nearest number with the amount of decimal places specified in <code>places</code>.</li>
</ul>
<h2>Parsing</h2>
<p>Strings can be parsed into any primitive type to be used within a C# environment. To do this, you will need to call the built-in <code>.Parse(string)</code> method from the [[Data Types|data type]] that you&#39;re trying to parse the string into.</p>
<h4>Parseable Data Types</h4>
<p>All primitive [[data types]] except for char and string are able to be parsed from strings. Do do this, you simply need to call one of the two methods below:</p>
<ul>
<li><code>.Parse(yourStringInput)</code> - Parses the string directly to an int and throws an exception if the string was not the correct format for an integer.</li>
<li><code>.TryParse(yourStringInput, out var someResultVariable)</code> - Attempts to parse the string to an int the same way <code>.Parse</code> would work, but instead returns a [[Booleans|bool]] that represents whether or not the parse was successful. The result is then stored in a newly defined out variable to be used later.</li>
</ul>
<pre><code class="language-csharp">string input1 = &quot;42&quot;; // this will be able to parse properly to an integer
string input2 = &quot;potato&quot;; // this will not be able to parse properly to an integer

int parseResult1 = int.Parse(input1);
Console.WriteLine(&quot;Input 1 - Parse:&quot;);
Console.WriteLine(parseResult1.GetType().Name);
Console.WriteLine(parseResult1);

Console.WriteLine(&quot;Input 1 - TryParse:&quot;);
if (int.TryParse(input1, out var tryParseResult1)) {
    Console.WriteLine(tryParseResult1.GetType().Name);
    Console.WriteLine(tryParseResult1);
} else {
    Console.WriteLine(&quot;Could not parse&quot;);
}

// Input 2 is not a number, so the below line will throw an 
// exception and crash the program. Comment out this block if 
// you want to test the result of the TryParse logic. 
int parseResult1 = int.Parse(input2);
Console.WriteLine(&quot;Input 2 - Parse:&quot;);
Console.WriteLine(parseResult2.GetType().Name);
Console.WriteLine(parseResult2);

Console.WriteLine(&quot;Input 2 - TryParse:&quot;);
if (int.TryParse(input2, out var tryParseResult2)) {
    Console.WriteLine(tryParseResult2.GetType().Name);
    Console.WriteLine(tryParseResult2);
} else {
    Console.WriteLine(&quot;Could not parse&quot;);
}
</code></pre>
<h2>Random Numbers</h2>
<p>Pseudorandom numbers can be generated using the <strong>Random</strong> class. To do this, we must first create an [[Classes and Objects|object]] using the Random class. We can then use this object to repeatedly get different values.</p>
<pre><code class="language-csharp">var rand = new Random();

Console.WriteLine(rand.Next());
Console.WriteLine(rand.Next());
Console.WriteLine(rand.Next());
// this would print three different numbers.
</code></pre>
<h4>Seed Values</h4>
<p>The random class can be instantiated using a <em>seed value</em>, which can be used to reproduce the values generated using that specific random object.</p>
<pre><code class="language-csharp">int someSeedValue = 69420;

var rand1 = new Random(someSeedValue);

Console.WriteLine(rand1.Next());
Console.WriteLine(rand1.Next());
Console.WriteLine(rand1.Next());

var rand2 = new Random(someSeedValue);

Console.WriteLine(rand2.Next());
Console.WriteLine(rand2.Next());
Console.WriteLine(rand2.Next());

// Both of the above blocks of print statements will print the same numbers


var randWithNoSeedValue = new Random();

Console.WriteLine(rand2.Next());
Console.WriteLine(rand2.Next());
Console.WriteLine(rand2.Next());

// These print statements will be different values, 
// because a different (random) seed will be used 
// when constructing the Random object
</code></pre>
'}></div>;
});