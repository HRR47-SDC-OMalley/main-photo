import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: {},
      images: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/item',
      type: 'GET',
      success: (data) => {
        this.setState({
          mainImage: data[0].url,
          images: data,
        }, () => console.log(this.state.images));
      },
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.mainImage}></img>
        <div>ReBurke</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
