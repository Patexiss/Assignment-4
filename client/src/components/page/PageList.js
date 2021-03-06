import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function PageList(props) {
  const params = useParams();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages();
    // eslint-disable-next-line
  }, []);

  const getPages = async () => {
    const res = await axios.get(`/api/page/website/${params.wid}`);
    setPages(res.data);
  };

  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link to={`/user/${params.uid}/website`} className="text-dark">
            <i className="fas fa-less-than" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4">Pages</span>
        </div>
        <Link
          to={`/user/${params.uid}/website/${params.wid}/page/new`}
          className="text-dark"
        >
          <i className="fas fa-cross" />
        </Link>
      </nav>
      <main className="container">
        <ul className="list-group list-group-flush">
          {pages.map(page => (
            <li className="list-group-item" key={page._id}>
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}/widget`}
              >
                {page.name}
              </Link>
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}`}
                className="float-right"
              >
                <i className="fas fa-sun" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.uid}`} className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}