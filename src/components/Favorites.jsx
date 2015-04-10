var React = require('react');
var FavoritesStore = require('../stores/FavoritesStore');
var LocationActions = require('../actions/LocationActions');

var Favorites = React.createClass({
   getStoreState() {
   return {
      favorites: FavoritesStore.getState()
   };
},
getInitialState() {
   return this.getStoreState();
},

componentDidMount() {
   FavoritesStore.listen(this.onChange);
},

componentWillUnmount() {
   FavoritesStore.unlisten(this.onChange);
},

onChange() {
   this.setState(this.getStoreState());
},

render() {
   if (this.state.errorMessage) {
      return (
         <div>Something is wrong</div>
   );
   }


   return (
      <div>
         <h1>Favorites</h1>
         <ul>
         {this.state.favorites.locations.map((location) => {
            return (
            <li>{location.name}</li>
         );
         })}
         </ul>
      </div>
   );
}
});

module.exports = Favorites;
