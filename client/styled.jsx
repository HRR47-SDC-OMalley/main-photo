import styled from 'styled-components';

export const Body = styled.div`
  position: relative;
  background-color:white;
  border: 1px solid rgb(211,211,211);
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 700px;
  height: auto;
`;

export const Next = styled.button`
  border: none;
  outline: none;
  width: 45px;
  border-radius: 60%;
  position: absolute;
  right: -4%;
  top: 40%;
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity .2s,right .25s,left .25s;
  background-color: white;
  :hover {
    cursor: pointer;
    opacity: .9 !important;
  }
`;

export const Previous = styled.button`
  border: none;
  outline: none;
  width: 45px;
  border-radius: 60%;
  position: absolute;
  left: -4%;
  top: 40%;
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity .2s,right .25s,left .25s;
  background-color: white;
  :hover {
    cursor: pointer;
    opacity: .9 !important;
  }
`;

export const PrimaryWrapper = styled.div`
  display: flex;
  width: auto;
  height: 600px;
  cursor: zoom-in;
  text-align: center;
  &:hover ${Next} {
    opacity: .5;
    right: 4%;
  }
  &:hover ${Previous} {
    opacity: .5;
    left: 4%;
  }
`;

export const Primary = styled.img`
  display: flex;
  margin: auto;
  width: auto;
  max-width: 100%;
  max-height: 600px;
  min-height: 500px;
  object-fit: cover;
`;

export const FootWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid rgb(211,211,211);
  overflow: auto;
`;

export const Thumbnails = styled.img`
  display: stretch;
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin: 6px;
  opacity: 50%;
  transition: opacity .2s;
  cursor: pointer;
  :hover {
    opacity: .70;
  }
`;
