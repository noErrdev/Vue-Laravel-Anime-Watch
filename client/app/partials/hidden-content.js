import React from 'react';
import Api from '../api';

import Rating from 'react-rating';
import Select from 'react-select';

class HiddenContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      removed: false
    }
  }

  render() {
    let title = this.props.title;


    var options = [
      { value: 'no', label: 'No Category' },
      { value: 'one', label: 'Movies' },
      { value: 'two', label: 'Series' },
      { value: 'three', label: 'Animes' }
    ];

    return (

      <div className="item-hidden-content">

        <span className="item-date" title={"Released on " + this.props.released().full}>{this.props.released().year}</span>
        <span className="item-title">{title}</span>

        {this.props.logged ?
          <div className="edit-mode-wrap">
            <div className="category-box">
              <span className="category-label">In</span>
              <Select
                name="category-select"
                clearable={false}
                value="no"
                placeholder="Select Category"
                searchable={false}
                options={options}
                clearable={false}
                menuBuffer={10}
              />
            </div>
            <div className="icons-rating">
              <Rating
                empty='fa fa-star-o fa-2x'
                full='fa fa-star fa-2x'
                fractions={2}
                initialRate={+this.props.rating}
                onRate={this.props.onHoverRate}
                onChange={this.props.onChangeRate}
              />
            </div>
          </div>: ''}

        <i className="icon-close-small" onClick={this.closeHiddenContent.bind(this)} />

        <a href={"https://www.youtube.com/results?search_query=" + title + " Trailer"} target="_blank" className="trailer-btn">Watch Trailer</a>

        {this.props.logged ?
          <span className={'remove-btn' + (this.state.removed ? ' reset' : '')} onClick={this.handleItemRemove.bind(this)}>
            {this.state.removed ? "Bring it back" : "Remove from list"}
          </span> : ''}
      </div>

    );
  }

  handleItemRemove() {
    Api.handleItemRemove(this.props.id).done((value) => {
      this.setState({
        removed: ! this.state.removed
      })
    }).fail((value) => {
      if(value.status === 401) {
        alert('Unauthorized');
      } else {
        alert('Server Error');
      }
    });
  }

  closeHiddenContent() {
    this.props.changeActiveKey(null);
  }
}

export default HiddenContent;
