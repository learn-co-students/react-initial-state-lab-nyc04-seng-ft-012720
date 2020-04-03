import React from 'react';


class ImageSlider extends React.Component {

    state = {
        currentSlideIndex: 0
      }

    render() {
      const CURRENT_SLIDE = this.state.currentSlideIndex
    
      return (
      <div>
        <h1>I am on slide {CURRENT_SLIDE}</h1>
      </div>
      )
    }
  }
  
  export default ImageSlider;
  