import styled from 'styled-components'
import backToTop from '../../static/backToTop.png'

export const HomeWrapper = styled.div`
  width: 960px;
  height: 500px;
  margin: 0 auto;
  display: flex;
`;

export const HomeLeft = styled.div`
  flex: 1;
  padding: 30px 0 0 15px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 8px;
  }
`;

export const HomeRight = styled.div`
  flex: 0 0 280px;
  margin-left: 40px;
  padding-top: 26px;
`;

export const TopicWrapper = styled.ul`
  padding: 20px 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: 30px;
`;

export const TopicItem = styled.li`
  font-size: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 20px 12px 0;
  img {
    width: 32px;
    height: 32px;
  }
  span {
    font-size: 13px;
    display: inline-block;
    padding: 0 12px;
    line-height: 32px;
    vertical-align: top;
    color: #666;
    background-color: #f8f8f8;
  }
`;

export const ReadMore = styled.div`
  height: 40px;
  font-size: 15px;
  color: #fff;
  background-color: #a5a5a5;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  margin: 30px 0;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #888;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  transition: background-color .4s;
  &:hover {
    background-color: #fafafa;
  }
  .info {
    flex: 1;
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #444;
      margin-bottom: 14px;
    }
    .text {
      font-size: 14px;
      color: #999;
      line-height: 22px;
    }
  }
  .article-img {
    flex: 0 0 150px;
    height: 100px;
    margin-left: 15px;
  }
`;

// 接收传来的属性：${props => props.imgUrl}
export const RecommendItem = styled.li`
  height: 50px;
  margin-bottom: 6px;
  background: url(${props => props.imgUrl}) 0 0 no-repeat;
  background-size: 100% 100%;
`;

export const WriterWrapper = styled.div`
  margin-top: 40px;
  h4 {
    font-size: 14px;
    color: #999;
    margin-bottom: 6px;
  }
`;

export const WriterItem = styled.li`
  display: flex;
  padding: 8px 0;
  img {
    flex: 0 0 48px;
    height: 48px;
    margin-right: 6px;
    border-radius: 50%;
  }
  .author {
    flex: 1;
    padding-top: 8px;
    .name {
      font-size: 14px;
      color: #333;
      margin-bottom: 8px;
    }
    .detail {
      font-size: 12px;
      color: #999;
    }
  }
  .watch {
    font-size: 13px;
    color: #42c02e;
    padding-top: 8px;
  }
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  background: url(${backToTop}) center center no-repeat;
  border: 1px solid #ddd;
  cursor: pointer;
`;
