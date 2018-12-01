[![Build Status](https://travis-ci.org/bluejamesbond/CharacterMap.svg?branch=master)](https://travis-ci.org/bluejamesbond/CharacterMap)  
# CharacterMap
Online CharacterMap / IconViewer / GlphViewer

## How to run CharacterMap locally 
1. Clone repo somewhere on your computer and cd there
2. `docker run -v $(pwd):/app/ -w /app node:slim npm i`
3. `docker run -p 80:5000 -v $(pwd):/app/ -w /app node:slim node app.js`
4. Open http://localhost/

