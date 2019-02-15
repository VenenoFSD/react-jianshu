import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 620px;
  padding-top: 50px;
  margin: 0 auto;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
`;

export const Author = styled.div`
  margin: 30px 0 40px 0;
  display: flex;
  align-items: center;
  >img {
    flex: 0 0 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 10px;
  }
  .info {
    flex: 1;
    .name {
      font-size: 16px;
    }
    .author-detail {
      margin-top: 6px;
      font-size: 12px;
      color: #969696;
      span {
        display: inline-block;
        padding-right: 8px;
      }
    }
  }
`;

export const Content = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 25px;
  }
  img {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const Watch = styled.span`
  display: inline-block;
  padding: 3px 8px;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  border-radius: 40px;
  background-color: #42c02e;
  margin-left: 6px;
`;