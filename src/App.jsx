var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var App = React.createClass({
   render: function () {
      return (
         <div>
            <header>
               <ul>
                  <li><Link to="locations">Locations</Link></li>
                  <li><Link to="favorites">Favorites</Link></li>
               </ul>
            </header>
            <RouteHandler/>
         </div>
      );
   }
});

var Locations = require('./components/Locations.jsx');
var Favorites = require('./components/Favorites.jsx');

var routes = (
   <Route name="app" path="/" handler={App}>
      <Route name="locations" handler={Locations}/>
      <Route name="favorites" handler={Favorites}/>
      <DefaultRoute handler={Locations}/>
   </Route>
);

Router.run(routes, function (Handler) {
   React.render(<Handler/>, document.body);
});

