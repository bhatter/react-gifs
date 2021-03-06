import React, { Component } from 'react';
import Gif from './gif.jsx';

// class GifList extends Component {
//   render () {
//     return (
//       <div className="gif-list">
//         {this.props.gifs.map(gif => {
//           return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/>
//         })}
//       </div>
//     )
//   }

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
}

export default GifList;
