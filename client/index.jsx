import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

//styled-components

const Body = styled.div`
  background-color:white;
  border: 1px solid rgb(211,211,211);
  overflow: hidden;
  width: auto;
  height: auto;
`;

const Next = styled.button`
  border: none;
  width: 50px;
  border-radius: 60%;
  position: fixed;
  right: -10%;
  top: 40%;
  opacity: .2;
  transform: translateY(-50%);
  transition: opacity .2s,right .2s,left .2s;
  :hover {
    cursor: pointer;
    /* background: transparent 50% no-repeat; */
    opacity: .9;
    background-color: white;
  }
`;

const Previous = styled.button`
  border: none;
  width: 50px;
  border-radius: 60%;
  position: fixed;
  left: -10%;
  top: 40%;
  opacity: .2;
  transform: translateY(-50%);
  transition: opacity .2s,right .2s,left .2s;
  :hover {
    cursor: pointer;
    opacity: .9;
    background-color: white;
  }
`;

const PrimaryWrapper = styled.div`
  display: flex;
  width: auto;
  height: 600px;
  cursor: zoom-in;
  text-align: center;
  &:hover ${Next} {
    right: 3%;
  }
  &:hover ${Previous} {
    left: 3%;
  }
`;

const Primary = styled.img`
  display: flex;
  margin: auto;
  width: auto;
  max-width: 100%;
  max-height: 600px;
  min-height: 500px;
  object-fit: cover;
`;

const FootWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(211,211,211);
  overflow: auto;
  /* white-space: nowrap; */
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
        console.log(data);
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
          <Next><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 36' width='16px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='%23414141'%3E%3Cpath d='M2,31.55A1.5,1.5,0,0,1,.92,29l11-11L.92,7A1.5,1.5,0,0,1,3,4.9l12,12a1.5,1.5,0,0,1,0,2.12l-12,12A1.5,1.5,0,0,1,2,31.55Z'/%3E%3C/g%3E%3C/svg%3E"></img></Next>
          <Primary src={mainImage.url} />
          <Previous><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 36' width='16px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='%23414141'%3E%3Cpath d='M14,31.54A1.5,1.5,0,0,1,13,31.1l-12-12a1.5,1.5,0,0,1,0-2.12l12-12A1.5,1.5,0,0,1,15.08,7L4.1,18l11,11A1.5,1.5,0,0,1,14,31.54Z'/%3E%3C/g%3E%3C/svg%3E"></img></Previous>
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
