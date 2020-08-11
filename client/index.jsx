import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

//styled-components

const Body = styled.div`
  background-color:white;
  border: 1px solid rgb(211,211,211);
  overflow: hidden;
`;

const PrimaryWrapper = styled.div`
  position:relative;
  height: auto;
  cursor: zoom-in;
  object-fit: contain;
`;

const Primary = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const FootWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(211,211,211);
  overflow: auto;
  white-space: nowrap;
`;

const Thumbnails = styled.img`
  display: stretch;
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin: 10px;
  opacity: 50%;
  cursor: pointer;
  :hover {
    opacity: .70;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: 'item',
      images: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/item',
      type: 'GET',
      success: (data) => {
        this.setState({
          mainImage: data[0],
          images: data,
        });
      },
    });
  }

  thumbClick(e) {
    this.setState({
      mainImage: {
        url: e.target.src,
      },
    });
  }

  render() {
    const { images, mainImage } = this.state;
    return (
      <Body>
        <PrimaryWrapper>
          <Primary src={mainImage.url} />
        </PrimaryWrapper>
        <FootWrapper>
          {
            images.map((image) => (
              <Thumbnails onClick={this.thumbClick.bind(this)}
                key={image._id}
                src={image.url}
              />
            ))
          }
        </FootWrapper>
      </Body>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
