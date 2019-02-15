import React from 'react'
import { ListItem, ReadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

const List = props => {
  const { articleList, getMoreList, articlePage } = props;
  return (
    <div>
      <ul>
        {
          articleList.map((item, index) => (
            <Link to={'/detail/' + item.id} key={ index }>
              <ListItem>
                <div className='info'>
                  <h3 className='title'>{ item.title }</h3>
                  <p className='text'>{ item.contain }</p>
                </div>
                <img src={ item.imgUrl } alt={ item.title } className='article-img'/>
              </ListItem>
            </Link>
          ))
        }
      </ul>
      <ReadMore onClick={ () => { getMoreList(articlePage) } }>阅读更多</ReadMore>
    </div>
  );
};

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']).toJS(),
  articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatch = dispatch => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapState, mapDispatch)(List)