import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function WebsiteList(props) {
  const params = useParams();

  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    getWebsites();
    // eslint-disable-next-line  
  }, []);

  const getWebsites = async () => {
    const res = await axios.get(`/api/website/user/${params.uid}`);
    setWebsites(res.data);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div>
          <Link className="text-light" to={`/user/${params.uid}`}>
            <i className="fas fa-less-than" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4">Websites</span>
        </div>
        <Link className="text-light" to={`/user/${params.uid}/website/new`}>
          <i className="fas fa-cross" />
        </Link>
      </nav>
      <div className="container">
        <ul className="list-group list-group-flush">
          {websites.map(website => (
            <li key={website._id} className="list-group-item">
              <Link
                to={`/user/${website.developerId}/website/${website._id}/page`}
              >
                {website.name}
              </Link>
              <Link
                className="float-right"
                to={`/user/${website.developerId}/website/${website._id}`}
              >
                <i className="far fa-sun" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link className="text-light" to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
