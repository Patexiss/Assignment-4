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

// user data
const [users, setUsers] = useState([
  {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
  {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},     
{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
{_id: "456", username: "patexiss", password: "patexiss", firstName: "Patexiss", lastName: "Patexiss" email: "patexiss1@gmail.com"}
]);

const [websites, setWebsites]= useState([
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Msimbo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
 ]);

const [pages, setPages] = useState([
  { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
]
);

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

// Add a new user into users
const addUser = user => {
 setUsers([...users, user]);
};

// update user by id
const updateUser = newUser => {
 setUsers(users.map(user=>{
    if(user._id === newUser._id) {
      return newUser;
    } else {
      return user;
    }
  })
 );
};

// get websites by user id
const getWebsites = uid => { const curWebs = [];
  for(let website of websites) {
  if(website.developerId === uid) {
    curWebs.push(website);
  }
  }
return curWebs;
};

// getWebsite
const getWebsite = wid => {
  for(let website of websites) {
    if (website._id === wid) {
      return website;
    }
  }
};

// add new website
const addWebsite = newWeb => {
  setWebsites([...websites, newWeb]);
 };

//  remove website
const removeWebsite = wid => {
  setWebsites(websites.filter(website => website._id !== wid));
};

// update website
const updateWebsite = newWeb => {setWebsites(websites.map(website =>{
  if(website._id === newWeb._id) {
    return newWeb;
  } else {
    return website;
  }
  })
  )
  };

// get pages by website id
const getPages = (wid) => {
return pages.filter(page=>page.websiteId === wid);
};

// add new page into pages
cost addPage = newPage =>{
setPages([...pages, newPage])
};

// get page by pid
const getPage =pid => {
for (let page of pages) {
if (page._id === pid) {
  return page;
}
}
};

// remove Page by pid
const removePage =pid => {
setPages(pages.filter(page => page._id !== pid)); 
};

//  update page
const updatePage = newPage => {
setPages(pages.map(page =>{
if(page._id === newWeb._id) {
  return newPage;
} else {
  return page;
}
})
)
};

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
        <Route exact path="/user/:uid">
          <Profile />
        </Route>
        <Route exact path="/user/:uid/website">
          <WebsiteList />
        </Route>
        <Route exact path="/user/:uid/website/new">
          <WebsiteNew />
        </Route>
        <Route exact path="/user/:uid/website/:wid">
          <WebsiteEdit />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page">
          <PageList />
        </Route>
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
