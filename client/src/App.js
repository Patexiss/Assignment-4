import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// User Components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Website Components
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Page Components
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widget Components
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";
// Routing Components
import PrivateRoute from "./components/routing/PrivateRoute"; 

function App() {

const [widgets, setWidgets] = useState([
  {
    _id: "123",
    widgetType: "HEADING",
    pageId: "321",
    size: "2",
    text: "GIZMODO"
  },
  {
    _id: "234",
    widgetType: "HEADING",
    pageId: "321",
    size: "4",
    text: "Lorem ipsum"
  },
  {
    _id: "345",
    widgetType: "IMAGE",
    pageId: "321",
    width: "100%",
    url:
      "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  },
  {
    _id: "567",
    widgetType: "HEADING",
    pageId: "321",
    size: "4",
    text: "Lorem ipsum"
  },
  {
    _id: "678",
    widgetType: "YOUTUBE",
    pageId: "321",
    width: "100%",
    url: "https://www.youtube.com/embed/X1JjPS40a-E"
  }
]);

// Get widgets by page id
const getWidgets = (pid) => {
  return widgets.filter(widget => widget.pageId === pid);
}

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <PrivateRoute exact path="/user/:uid">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/user/:uid/website">
          <WebsiteList />
        </PrivateRoute>
        <Route exact path="/user/:uid/website/new">
          <WebsiteNew />
        </Route>
        <Route exact path="/user/:uid/website/:wid">
          <WebsiteEdit />
        </Route>
        <PrivateRoute exact path="/user/:uid/website/:wid/page">
          <PageList />
        </PrivateRoute>
        <Route exact path="/user/:uid/website/:wid/page/new">
          <PageNew />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid">
          <PageEdit />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget">
          <WidgetList />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new">
          <WidgetChooser />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <WidgetEdit />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
  
export default App;
