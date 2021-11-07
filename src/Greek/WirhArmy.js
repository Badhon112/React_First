import React from "react";
import { Component } from "react";

const Army = (Man) => {
  class NewMan extends Component {
    render() {
      return <Man hocunman="Ak47" />;
    }
  }
  return NewMan;
};

export default Army;