import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component{
  render () {
    const gifs = [
      { id: "J4OdZ1GdCDBDVOkcKp" },
      { id: "3o6fIXKrZTkNl0lh7i" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="J4OdZ1GdCDBDVOkcKp"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
