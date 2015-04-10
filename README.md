# alt-tutorial-react-router
The Alt tutorial with react-router goodness on top

The original tutorial can be found [here]()


## Getting Started

    git clone https://github.com/schmidlop/alt-tutorial-react-router.git
    cd alt-tutorial
    npm install
    mkdir build
    npm run build

then point your browser at index.html

## What's Changed

I've split the location list and the favorites into 2 separate components.
The new favorites component is defined in `components/Favorites.jsx`. In
addition I've implemented routing via react-router here are the routes
excerpted from `App.jsx`.

### The routes


    var routes = (
       <Route name="app" path="/" handler={App}>
          <Route name="locations" handler={Locations}/>
          <Route name="favorites" handler={Favorites}/>
          <DefaultRoute handler={Locations}/>
       </Route>
    );

## Complications

The location data is loaded from a file changes made to the locations via the
app aren't persisted back to the file as they would be if served from a web
service. Whenever the location route loads `Locations.componentDidMount`
executes which in turn calls `LocationActions.fetchLocations` reloading the
location data sans changes.

Consequently, navigating away from the locations route appeared to reset the
favorites. However, with the next favorite clicked the previous favorites were
suddenly restored. The happened because `LocationStore.setFavorites` is called
every time you click the favorite button and it re-establishes all the
favorites via the FavoriteStore which is thankfully not reset during
`fetchLocations`!

So to make the locations view show the correct state of its favorited locations
upon return navigation from the favorites page. I added a call to
`LocationStore.setFavorites` in the `LocationStore.handleUpdateLocations`
function which is called as a consequence of `fetchLocations`. This ensures that
if the `FavoritesStore` has any favorite the Location component always reflects
them even if loading the Locations again fresh off the disk.

## Next Steps

- Change this tutorial to call a real REST based backend.
- That ought to be enough, no?