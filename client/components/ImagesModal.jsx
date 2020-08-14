import React from 'react';
import styled from 'styled-components';

const ImageBooth = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
 `;

const Next = styled.button`
  border: none;
  outline: none;
  position: fixed;
  background: none;
  top: 40%;
  right: 2%;
  opacity: .5;
  transition: opacity .2s;
  :hover {
    cursor: pointer;
    opacity: .9;
  }
`;

const Previous = styled.button`
  border: none;
  outline: none;
  position: fixed;
  background: none;
  top: 40%;
  left: 2%;
  opacity: .5;
  transition: opacity .2s;
  :hover {
    cursor: pointer;
    opacity: .9;
  }
`;

const PrimaryWrapper = styled.div`
  display: flex;
  width: auto;
  height: 600px;
  text-align: center;
`;

const Primary = styled.img`
  display: flex;
  padding-top: 50px;
  margin: auto;
  width: auto;
  max-width: 100%;
  max-height: 600px;
  min-height: 500px;
  object-fit: cover;
`;

const FootWrapper = styled.div`
  display: block;
  position: relative;
  text-align: center;
  top: 8%;
  overflow: auto;
`;

const Thumbnails = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin: 10px;
  opacity: 50%;
  transition: opacity .2s;
  cursor: pointer;
  :hover {
    opacity: .70;
  }
`;

const ExitModal = styled.button`
  border: none;
  outline: none;
  position: fixed;
  background: none;
  top: 2%;
  right: 2%;
  transition: opacity .2s;
  -webkit-tap-highlight-color: transparent;
  opacity: .5;
  :hover {
    cursor: pointer;
    opacity: .9;
  }
`;

class ImagesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: props.mainImage,
      images: props.images,
    };
    this.thumbClick = this.thumbClick.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
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

  render() {
    const { mainImage, images } = this.state;
    const { renderImageBooth } = this.props;
    return (
      <ImageBooth>
        <Previous onClick={this.prevImage}><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 36' width='16px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='%23fff'%3E%3Cpath d='M14,31.54A1.5,1.5,0,0,1,13,31.1l-12-12a1.5,1.5,0,0,1,0-2.12l12-12A1.5,1.5,0,0,1,15.08,7L4.1,18l11,11A1.5,1.5,0,0,1,14,31.54Z'/%3E%3C/g%3E%3C/svg%3E" alt="left-arrow" /></Previous>
        <PrimaryWrapper>
          <Primary src={mainImage.url} />
        </PrimaryWrapper>
        <Next onClick={this.nextImage}><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 36' width='16px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='%23fff'%3E%3Cpath d='M2,31.55A1.5,1.5,0,0,1,.92,29l11-11L.92,7A1.5,1.5,0,0,1,3,4.9l12,12a1.5,1.5,0,0,1,0,2.12l-12,12A1.5,1.5,0,0,1,2,31.55Z'/%3E%3C/g%3E%3C/svg%3E" alt="right-arrow" /></Next>
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
        <ExitModal onClick={renderImageBooth}><img src="data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 36 36' width='36px' height='36px' preserveAspectRatio='defer' shape-rendering='geometricPrecision'%3E%3Cg fill='white'%3E%3Cpath d='M19.81,18h0l11-11A1.5,1.5,0,1,0,28.67,4.9L18,15.56,7.33,4.9A1.5,1.5,0,0,0,5.21,7l11,11h0l-11,11A1.5,1.5,0,1,0,7.33,31.1L18,20.44,28.67,31.1A1.5,1.5,0,0,0,30.79,29Z'/%3E%3C/g%3E%3C/svg%3E" alt="close" /></ExitModal>
      </ImageBooth>
    );
  }
}

export default ImagesModal;
