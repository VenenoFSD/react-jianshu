import styled from 'styled-components'
import logoUrl from '../../static/logo.png' /* 图片资源要引入再使用 */

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  height: 56px;
  position: relative;
  margin: 0 auto;
`;

export const Logo = styled.a`
  display: block;
  width: 100px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(${logoUrl}) 0 0 no-repeat;
  background-size: 100% 100%;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  box-sizing: border-box;
  >div {
    display: flex;
    align-items: center;
  }
`;

export const NavLeft = styled.div`
  color: #333;
`;

export const NavRight = styled.div`
  color: #969696;
`;

export const NavItem = styled.div`
  padding: 0 16px;
  font-size: 16px;
  &.active {
    color: #e96e5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  .search-icon {
    position: absolute;
    top: 7px;
    right: 10px;
    padding: 4px;
    transition: all 0.4s;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  background-color: #eee;
  transition: width 0.4s;
  &::placeholder {
    color: #999;
  }
  &:focus {
    width: 300px;
    +.search-icon {
      color: #fff;
      border-radius: 50%;
      background-color: #777;
    }
    ~.hot-search {
      display: block;
    }
  }
`;

export const HotSearch = styled.div`
  position: absolute;
  width: 240px;
  left: 0;
  top: 48px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  padding: 20px 20px 4px 20px;
  box-sizing: border-box;
  display: none;
  &.show {
    display: block;
  }
`;

export const HotTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Change = styled.div`
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #666;
  }
  .iconfont {
    display: inline-block;
    font-size: 13px;
    margin-right: 3px;
    transition: all 0.5s;
		transform-origin: center center;
  }
`;

export const HotItem = styled.li`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0 8px 10px 0;
  padding: 3px 5px;
  font-size: 12px;
  color: #888;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border-color: #aaa;
    color: #555;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  line-height: 36px;
  cursor: pointer;
  padding: 0 20px;
  border-radius: 20px;
  color: #e96e5a;
  border: 1px solid #e96e5a;
  margin-right: 14px;
  font-size: 14px;
  &.article {
    background-color: #e96e5a;
    color: #fff;
  }
`;
