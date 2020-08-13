import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import ImagesModal from './components/ImagesModal.jsx';
import {
  Body, Next, Previous, PrimaryWrapper, Primary, FootWrapper, Thumbnails,
} from './styled.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: 'item',
      images: [],
      boothView: false,
    };
    this.thumbClick = this.thumbClick.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.renderImageBooth = this.renderImageBooth.bind(this);
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

  nextImage() {
    const { images, mainImage } = this.state;
    const lastId = images[images.length - 1].id;
    if (mainImage.id === lastId) {
      return this.setState({
        mainImage: images[0],
      });
    }
    let next;
    images.forEach((image) => {
      if (image.id === mainImage.id + 1) {
        next = image;
      }
    });
    return this.setState({
      mainImage: next,
    });
  }

  prevImage() {
    const { images, mainImage } = this.state;
    const firstId = images[0].id;
    if (mainImage.id === firstId) {
      return this.setState({
        mainImage: images[images.length - 1],
      });
    }
    let next;
    images.forEach((image) => {
      if (image.id === mainImage.id - 1) {
        next = image;
      }
    });
    return this.setState({
      mainImage: next,
    });
  }

  thumbClick(e) {
    let newMain;
    const { images } = this.state;
    images.forEach((image) => {
      if (image.url === e.target.src) {
        newMain = image;
      }
    });
    this.setState({
      mainImage: newMain,
    });
  }

  renderImageBooth() {
    const { boothView } = this.state;
    this.setState({
      boothView: !boothView,
    });
  }

  render() {
    const { images, mainImage, boothView } = this.state;
    if (boothView) {
      return (
        <ImagesModal
          mainImage={mainImage}
          images={images}
          renderImageBooth={this.renderImageBooth}
        />
      );
    }
    return (
      <Body>
        <PrimaryWrapper>
          <Next onClick={this.nextImage}><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 36' width='16px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='%23414141'%3E%3Cpath d='M2,31.55A1.5,1.5,0,0,1,.92,29l11-11L.92,7A1.5,1.5,0,0,1,3,4.9l12,12a1.5,1.5,0,0,1,0,2.12l-12,12A1.5,1.5,0,0,1,2,31.55Z'/%3E%3C/g%3E%3C/svg%3E" alt="right-arrow" /></Next>
          <Primary src={mainImage.url} onClick={this.renderImageBooth} />
          <Previous onClick={this.prevImage}><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 36' width='16px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='%23414141'%3E%3Cpath d='M14,31.54A1.5,1.5,0,0,1,13,31.1l-12-12a1.5,1.5,0,0,1,0-2.12l12-12A1.5,1.5,0,0,1,15.08,7L4.1,18l11,11A1.5,1.5,0,0,1,14,31.54Z'/%3E%3C/g%3E%3C/svg%3E" alt="left-arrow" /></Previous>
        </PrimaryWrapper>
        <FootWrapper>
          {
            images.map((image) => {
              if (mainImage.url === image.url) {
                return (
                  <Thumbnails
                    key={image.id}
                    src={image.url}
                    style={{
                      opacity: '1',
                    }}
                  />
                );
              }
              return (
                <Thumbnails
                  onClick={this.thumbClick}
                  key={image.id}
                  src={image.url}
                />
              );
            })
        }
        </FootWrapper>
      </Body>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
