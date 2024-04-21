import { component$ } from '@builder.io/qwik';

export const Switch_Case_Statements = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - switch
  - switch case
  - switch statement</h2>
<p>[[Lessons/Lesson 2 - Control Flow/Control Flow Structures/Switch Case Statements|Switch Case Statements]] are control flow structures that are used to quickly define cases for when a variable is equal to specified discrete values. Values used in switch statements are limited to values of primitive [[Data Types|types]], and [[strings]].</p>
<p>Switch case statements do not use [[Control Flow Structures|code blocks]] in their body, unlike most other control flow structures. They are instead written using <code>case</code>, <code>break</code>, and <code>default</code> statements using the format in the block below.</p>
<p><code>case</code> - The case statement denotes a specific value for which we are going to run conditional logic.
<code>break</code> - The break statement will move the control flow to the statement after the switch case, ending the switch case.
<code>default</code> - The default statement denotes logic that should run whenever no case is found for the input value.</p>
<pre><code class="language-csharp">var x = 3;

switch (x) {
    case 1:
        Console.WriteLine(&quot;x was one&quot;);
        break;
    
    // you can put as many statements in a line as you want
    case 2:
        Console.WriteLine(&quot;x was two&quot;);
        Console.WriteLine(&quot;we can print multiple lines in a case like this&quot;);
        break;
    
    // you can have multiple values assigned to a case like this
    case 3:
    case 4:
        Console.WriteLine(&quot;x was either three or four&quot;);
        break;
        
    default:
        Console.WriteLine(&quot;x was not one, two, three, or four&quot;);
        break;
}
</code></pre>
'}></div>
  );
});