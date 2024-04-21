import { component$ } from '@builder.io/qwik';

export const Lesson_5.5_-_Project_1 = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags:
  - Project
  - Lesson</h2>
<p>In this project, we are going to make a console app for managing song and playlist information. It does not need to have any visual interface, but if you&#39;re interested in setting that up, you could look into <a href="https://learn.microsoft.com/en-us/dotnet/desktop/winforms/getting-started-with-windows-forms?view=netframeworkdesktop-4.8">using windows forms.</a></p>
<p>Before starting on the project, take a look at some small things that will be useful for formatting print statements [[Printing Strings|here]].</p>
<h1>Project 1</h1>
<h2>Model Specifications</h2>
<ul>
<li><p>Playlist</p>
<ul>
<li>Playlist Name</li>
<li>Can contain any number of songs</li>
</ul>
</li>
<li><p>Songs have the below attributes</p>
<ul>
<li>Title</li>
<li>Artist (The artist name)</li>
<li>Album (The album name)</li>
<li>Duration (In Seconds)</li>
</ul>
</li>
</ul>
<h2>Menu Specifications</h2>
<h3>Main Menu</h3>
<p>Displays a list of playlists, along with some id numbers the user can use to select them. Allow the user to enter a number and select a playlist with the corresponding id. Once selected, display the playlist menu.</p>
<p>Additionally, display a list of commands to available to the user:</p>
<ul>
<li><code>exit</code><ul>
<li>Exits the app</li>
</ul>
</li>
<li><code>addplaylist</code><ul>
<li>Displays a menu to create a new playlist and prompts the user for information to create it</li>
</ul>
</li>
<li><code>totalduration</code> <ul>
<li>Displays the sum of all playlist durations currently stored in the system</li>
</ul>
</li>
</ul>
<h3>Playlist Menu</h3>
<p>Displays a list of songs, along with some id numbers the user can use to select them. Allow the user to enter a number and select a song with the corresponding id. Once selected, display the song menu.</p>
<p>Additionally, display a list of commands to available to the user:</p>
<ul>
<li><code>delete</code><ul>
<li>Deletes the playlist</li>
</ul>
</li>
<li><code>addsong</code> <ul>
<li>Adds a song to the playlist</li>
</ul>
</li>
<li><code>duration</code> <ul>
<li>Prints out the total duration of the playlist (rounded to the nearest minute)</li>
</ul>
</li>
</ul>
<h3>Song Menu</h3>
<p>Display all attributes stored for the specified song. Additionally, display a list of commands available to the user:</p>
<ul>
<li><code>changetitle</code><ul>
<li>Allows the user to change the title of a song</li>
</ul>
</li>
<li><code>changeartist</code><ul>
<li>Allows the user to change the artist name of a song</li>
</ul>
</li>
<li><code>changealbum</code><ul>
<li>Allows the user to change the album name of a song</li>
</ul>
</li>
<li><code>changeduration</code><ul>
<li>Allows the user to change the duration of a song</li>
</ul>
</li>
<li><code>delete</code> <ul>
<li>Deletes the selected song</li>
</ul>
</li>
</ul>
'}></div>;
});