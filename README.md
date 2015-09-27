### Setup:
----
* cd into `api/`:
    * The backend persists board information to PostgreSQL. Once you have your database server running, create the app database and tables with `rake db:create` and `rake db:migrate`.
    * Install dependencies with `bundle install`
* cd into `web/`
    * Install dependencies with `npm install`
* And to run: `foreman start`


### Challenge prompt:
----

Create a board of n x m tiles on a web page. Each tile on the board will start as white, but when clicked will toggle between a generated random color and returning to white. Each time a tile is toggled to a random color it should generate a new random color value.

Include a button so that users can clear (set all tiles to white) on their board.

And additionally include a save button that will persist the state of the board to a server side datastore.

Instructions:

* Respond with your attached completed solution at the end of the allotted 3 hour period.
* Use any languages, frameworks, or 3rd party libraries as you see fit.
* Get as far as you can through the challenge starting with the front-end experience of rendering and user interaction of the board.
* Let us know if you have any questions as you're attempting the challenge.

Bonus:

* Create a gallery of all boards which are viewable and editable by any user.

You will be judged on:

* Simplicity of solution
* Best practices and idioms
* Use of a framework or sensible data/view separation
* Code quality, abstractions, and overall architecture
* Look, feel, and UI embellishments.
