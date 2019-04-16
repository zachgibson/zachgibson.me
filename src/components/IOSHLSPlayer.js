import React, { Component } from "react"

class IOSHLSPlayer extends Component {
  video = React.createRef()

  componentDidUpdate(props) {
    if (props.playing !== this.props.playing) {
      this.togglePlayBack()
    }
  }

  togglePlayBack = () => {
    console.log(this.video);
    
    if (this.props.playing) {
      this.video.current.play()
    } else {
      this.video.current.pause()
    }
  }

  render() {
    const {
      url,
      playing,
      controls,
      playsinline,
      width,
      height,
      style,
    } = this.props

    return (
      <video
        ref={this.video}
        width={width}
        height={height}
        controls={controls}
        style={style}
        playsInline={playsinline}
      >
        <source src={url} type="application/x-mpegURL" />
      </video>
    )
  }
}

export default IOSHLSPlayer
