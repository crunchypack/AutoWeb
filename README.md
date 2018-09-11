# AutoWeb

----
## Webdevelopment with automatisation 
The purpose of the automatisation is to work more efficiently. By minifying, concating and moving files automatically you save alot of time and maintain a concurrent structure on your files.

----
## What packages are used?
* **gulp-concat** - Used for concating JavaScript and CSS files
* **gulp-uglify** - Used for minifying JavaScript
* **gulp-clean-css** - Used for minifying CSS
* **gulp-imagemin** - Used for minigying images

----
## How it all works
The system checks for changes in any of the files and sends them, minified and concated if it applies, to a folder made for publishing. The files it checks are in a sorce folder, aptly named src.
When checking changes in any html-file no concation or minifying is applied, the file is simply copied to the publication folder (pub).
Changes in js- and css-files are concated and minified before being sent to the pub folder. Imaged are minified before being sent.

By having NodeJS and npm installed you simply navigate to the main folder (AutoWeb) in a terminal and execute the following commands:

```sh
$ npm install gulp -g
$ npm install
$ gulp
```
The first command is to install gulp globally, can be ignored if you already have it installed.
Now you can open any html file in the publication folder using liveserver with Visual Studio Code. And you can start working on the source folder. Everytime you save, the changes will immediately occour in the pub-folder.
