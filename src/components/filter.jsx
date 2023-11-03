import {  Component } from 'react';

export class Filter extends Component {

  
  shouldComponentUpdate(prev, next) {
    console.log(prev, next);

    return next && prev && prev.changeFilter !== next.changeFilter

  }

  render() {
    console.log('filter render');

    return (
      <>
        <p>Find contacts by name</p>
        <input onChange={this.props.changeFilter} type="search" name="text" />
      </>
    );
  }
}
