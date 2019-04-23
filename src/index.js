import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Card from "./Card";
import Footer from "./Footer";
import "tachyons";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  HandleSearch = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filter = this.state.items.filter(items => {
      return items.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    const cardItems = filter.map(items => (
      <Card key={items.name} name={items.name} />
    ));

    return (
      <div className="App">
        <Header />
        <SearchBox searchChange={this.HandleSearch} />
        {cardItems}
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
