import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: props.items,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    // Remove the clicked item from the array
    const clickedItem = this.state.listItems.splice(index, 1)[0];

    // Add the clicked item to the beginning of the array
    this.setState({
      listItems: [clickedItem, ...this.state.listItems],
    });
  }

  render() {
    return (
      <ul>
        {this.state.listItems.map((item, index) => (
          <li key={index} onClick={() => this.handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

// Render the component
const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

// Simulate a click on the third item
const listItem = document.querySelectorAll("li")[2];
if (listItem) {
  listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));
