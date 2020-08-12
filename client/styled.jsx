import styled from 'styled-components';

export const Body = styled.div`
  background-color:white;
  border: 1px solid rgb(211,211,211);
  overflow: hidden;
  width: auto;
  height: auto;
`;

export const Next = styled.button`
  border: none;
  outline: none;
  width: 45px;
  border-radius: 60%;
  position: fixed;
  right: -10%;
  top: 40%;
  opacity: .5;
  transform: translateY(-50%);
  transition: opacity .2s,right .2s,left .2s;
  background-color: white;
  :hover {
    cursor: pointer;
    opacity: .9;
  }
`;

export const Previous = styled.button`
  border: none;
  outline: none;
  width: 45px;
  border-radius: 60%;
  position: fixed;
  left: -10%;
  top: 40%;
  opacity: .5;
  transform: translateY(-50%);
  transition: opacity .2s,right .2s,left .2s;
  background-color: white;
  :hover {
    cursor: pointer;
    opacity: .9;
  }
`;

export const PrimaryWrapper = styled.div`
  display: flex;
  width: auto;
  height: 600px;
  cursor: zoom-in;
  text-align: center;
  &:hover ${Next} {
    right: 4%;
  }
  &:hover ${Previous} {
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
  border: 1px solid rgb(211,211,211);
  border-style: solid none solid none;
  overflow: auto;
`;

export const Thumbnails = styled.img`
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
