import { component$ } from '@builder.io/qwik';

export const Classes_and_Objects = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags: 
aliases:
  - object
  - objects
  - class
  - classes</h2>
<p>Objects are constructs that are used for representing data in unified logical blocks. They are created using classes as <em><strong>blueprints</strong></em> for how an object should behave. Each object contains a collection of variables called <em><strong>fields</strong></em>, which are used to represent the <em><strong>state</strong></em> of that object. Actions can be performed on objects, using <em><strong>[[methods]]</strong></em>.</p>
<h2>Classes</h2>
<p>Classes allow developers to create user-defined types, and maintain objects with custom functionality and data storage. They describe how an object should be created, what that object might store, and any actions that can be performed using the object.</p>
<p>Classes can be considered &#39;blueprints&#39; for creating and operating objects, and do not directly impact any logic executing outside of them.</p>
<h3>Methods</h3>
<p>Classes describe actions that can be performed using [[methods]]. These methods can calculate their results using data stored in the class&#39;s <em><strong>fields</strong></em>, or even manipulate that data.</p>
<h3>Fields</h3>
<p>Classes can specify <em><strong>fields</strong></em> to allow for permanent data storage during the lifetime of the object created using a class. To create a field, simply declare a variable directly in the scope of a class:</p>
<pre><code class="language-cs">public class SomeClass {
    
    // this declares a field &#39;someStringField&#39; inside &#39;SomeClass&#39;
    public string someStringField; 
    
    // the &#39;public&#39; keyword used here is an access specifier.
}
</code></pre>
<p>Fields are a kind of variable that allow for access outside the scope that a variable would normally be accessible. Fields are often referred to as <em><strong>attributes</strong></em> or <em><strong>global variables</strong></em>, while variables created in methods are referred to as <em><strong>local variables</strong></em>.</p>
<p>Fields are able to be accessed and manipulated outside of the scope of a method, but within the same class. This behavior is often used for sharing internal data between methods, or for persisting data that describes the object itself. </p>
<p>Here&#39;s an example of sharing data between methods:</p>
<pre><code class="language-cs">class TheClass {
    private int theVariable = 0;
    
    public void Method1() {
        theVariable = 5;
    }

    public bool Method2() {
        return theVariable &gt; 3;
    }
}
</code></pre>
<pre><code class="language-cs">var myObj = new TheClass();

Console.WriteLine(myObj.Method2()); //&gt; false
myObj.Method1(); // this will update the variable
Console.WriteLine(myObj.Method2()); //&gt; true
</code></pre>
<p>In the above example, the result of <code>Method2</code> will change depending on the value stored in <code>theVariable</code>. This value can be updated inside of <code>Method1</code>, allowing <code>Method1</code> to change data being consumed by another method.</p>
<p>When there is a field that has the same name as a <em>local variable</em>, you can specify the field using the <code>this</code> keyword. Below is an example of how this behavior works in code:</p>
<pre><code class="language-cs">class TheClass {
    private bool myBool; // this is our field
    
    public void TheMethod() {
        var myBool = false; // this is our local variable
        
        // this assigns the field to the value of the local variable.
        this.myBool = myBool; 
        
        // myBool = myBool; // this would just assign the local variable to itself.
    }
}
</code></pre>
<h4>Access Specifiers</h4>
<p>[[Methods]] and fields utilize access specifiers to describe what is allowed to access them. There are two main access specifiers that you should know:</p>
<ul>
<li><code>public</code> - Allows access from external classes, regardless of where the call is made</li>
<li><code>private</code> - Only allows access from within the class it&#39;s specified in</li>
</ul>
<p>There are some <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers">additional access specifiers</a> that won&#39;t be relevant until we cover [[Future Lesson - Inheritance|inheritance]] in a future lesson.</p>
<h3>The &#39;Dot&#39; Operator</h3>
<p>The <code>.</code> operator allows for direct access to methods, properties, and fields that are contained in an object.</p>
<pre><code class="language-cs">var obj = new SomeClass(); // this would create an object from SomeClass

// this would directly access the value of someField stored in the object
var someValue = obj.someField;

// this would call the code described in &#39;someMethod&#39; and run it
// the result will be returned, and stored in &#39;someOtherValue&#39;
var someOtherValue = obj.someMethod(someParameter); 
</code></pre>
<h3>Instances of Classes</h3>
<p>The objects created from classes are called <em>instances</em> of the class, which each operate independently.</p>
<p>An object <em>must</em> be created from a class using the <code>new</code> keyword, using the format below:</p>
<pre><code class="language-cs">var yourVariable = new YourClassName(/* constructor args go here, if needed */);
</code></pre>
<p>Each object is an <em>instance</em> of the class it was created from. This means that the object has all properties, fields, and methods available to it that are described in the class. Objects also have their own concept of <em>state</em>, which allows objects to maintain different values for fields described in their parent classes.</p>
<pre><code class="language-mermaid">flowchart TD
ParentClass[&quot;Parent Class
public int someInt;&quot;]
ParentClass --&gt; Obj1([&quot;Object 1
someInt = 5&quot;])
ParentClass --&gt; Obj2([&quot;Object 2
someInt = 1&quot;])
ParentClass --&gt; Obj3([&quot;Object 3
someInt = 3&quot;])
</code></pre>
<p>In the above diagram, a parent class declares a field <code>someInt</code>. This field acts as a way to store int data in each object created from the parent class. Each instance of <code>someInt</code> stores data separately, and changing the value stored will not affect any other objects created from the parent class.</p>
<h3>Constructors</h3>
<p>Constructors are a special kind of [[Methods|method]] that gets called whenever a new instance of a class is created. Constructors are different from methods because they do not return anything, and can only be executed once per object.</p>
<p>A method must meet the following requirements to be considered a constructor:</p>
<ul>
<li>It must have the same name as the class it&#39;s in</li>
<li>It must have no return type</li>
</ul>
<p>Here is an example of a constructor for a class named <code>SomeClass</code>:</p>
<pre><code class="language-cs">class SomeClass {
    public SomeClass() {
        // the constructor body would go here
        Console.WriteLine(&quot;This is the Constructor&quot;);
    }
}
</code></pre>
<p>Constructors will only be executed whenever an instance of the class is created. Using the above example, we can call the constructor whenever an object is created:</p>
<pre><code class="language-cs">var obj1 = new SomeClass();
var obj2 = new SomeClass();
new SomeClass(); // we don&#39;t even need to save the object value to call the constructor

// the above code would print this:
//&gt; This is the Constructor
//&gt; This is the Constructor
//&gt; This is the Constructor
</code></pre>
<h2>Example Class</h2>
<p>Here is an example class that combines the concepts covered in this page. It represents data that could be used to describe a Stanley bottle, and provides some methods to the user for manipulating this data.</p>
<pre><code class="language-csharp">public class StanleyBottle {
    public readonly int capacityInOunces;
    private double amountStored;
    public readonly string color;

    // this is a constructor for creating instances of the StanleyBottle class
    public StanleyBottle(string color, int capacity) {
        // the parameter &#39;color&#39; and the field &#39;color&#39; have the same name,
        // so we need to specify which value is which using the &#39;this&#39; keyword
        this.color = color; 
        
        // because the parameter and values have a different name,
        // we don&#39;t need to use the &#39;this&#39; keyword here
        capcityInOunces = capacity; 

        // because we don&#39;t have a value for amountStored, we will default this to 0
        amountStored = 0;
    }

    // this is an overload of the StanleyBottle constructor
    public StanleyBottle(string color, int capacity, double amountStored) {
        this.color = color;
        this.amountStored = amountStored;
        
        // we don&#39;t need the &#39;this&#39; keyword here, 
        // but we can still use it if we want to
        this.capcityInOunces = capacity;
    }

    // this is a simple &#39;getter&#39; method. its purpose is to access the value stored in
    // a private variable and return it directly. because we do not provide direct
    // access to the private variable, code outside of our class will be able to read
    // the value, but not be able to modify it.
    public double GetAmountStored() {
        return amountStored;
    }

    // the two below methods change the value of &#39;amountStored&#39;, which will manipulate 
    // the state of the object. some methods can change
    public void StoreLiquid(double amount) {
        return amountStored += amount;
    }
    
    public void EmptyLiquid(double amount) {
        return amountStored -= amount;
    }
    
    public double GetCapacityRemaining() {
        return capacity - amountStored;
    }

    // this method returns a bool as specified in the method signature
    // the bool returned will be the result of &#39;amountStored &gt; 0&#39;
    public bool ContainsLiquid() {
        return amountStored &gt; 0;
    }
    
    public bool IsOverflowing() {
        return amountStored &gt; capacity;
    }
}
</code></pre>
<p>The above class can be mapped to the below UML diagram:</p>
<pre><code class="language-mermaid">classDiagram
        StanleyBottle : +StanleyBottle(int capacity)
        StanleyBottle : +StanleyBottle(int capacity, double amountStored)
        StanleyBottle : +int capacityInOunces
        StanleyBottle : -double amountStored
        StanleyBottle : +string color
        StanleyBottle : +bool ContainsLiquid()
        StanleyBottle : +bool IsOverflowing()
        StanleyBottle : +double GetCapacityRemaining()
        StanleyBottle : +double GetAmountStored()
        StanleyBottle : +void StoreLiquid(double amount)
        StanleyBottle : +void EmptyLiquid(double amount)
        class gabbysBottle{
            capacityInOunces: 32
            amountStored: 5.61
            color: &quot;blue&quot;
        }
        class mattsBottle{
            capacityInOunces: 64
            amountStored: 57.02
            color: &quot;red&quot;
        }
        class sofiasBottle{
            capacityInOunces: 48
            amountStored: 48.00
            color: &quot;purple&quot;
        }
        

        StanleyBottle --|&gt; gabbysBottle
        StanleyBottle --|&gt; mattsBottle
        StanleyBottle --|&gt; sofiasBottle
</code></pre>
'}></div>;
});