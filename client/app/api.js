import React from 'react';

class Api extends React.Component {

  static categories() {
    return $.get(config.api + 'all-categories');
  }

  static categoryItems(category) {
    return $.get(config.api + 'category-items/' + category + '/' + this.usersFilterFor(category));
  }

  static usersFilterFor(category) {
    if( ! localStorage.getItem('category-' + category)) {
      localStorage.setItem('category-' + category, 'seen');
    }

    return localStorage.getItem('category-' + category);
  }

  static changeUsersFilterFor(category, type) {
    localStorage.setItem('category-' + category, type);
  }

  static search(type, value) {
    return $.get(config.api + 'search/' + type + '/' + value);
  }

  /*static searchTMDBByID(id) {
    return $.get(config.api + 'search/tmdb/id/' + id);
  }

  static searchItemBySlug(slug) {
    return $.get(config.api + 'item/' + slug)
  }*/
}

export default Api;
