//@flow

import React from "react";
import { Link } from "react-router-dom";

type HomePageProps = {}

const HomePage = (props: HomePageProps) => (
  <div className="jumbotron">
    <h1>Hello there</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
