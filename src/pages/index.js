import React, { Component, Fragment } from "react"
import ReactPlayer from "react-player"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Video extends Component {
  state = { isPlaying: false, playButtonIsVisible: true }
  timeoutId

  handleContainerClick = () => {
    this.setState({ playButtonIsVisible: true }, () => {
      clearTimeout(this.timeoutId)
      if (this.state.isPlaying) {
        this.timeoutId = setTimeout(() => {
          this.setState({ playButtonIsVisible: false })
        }, 750)
      }
    })
  }

  togglePlayState = () => {
    this.setState(previousState => ({ isPlaying: !previousState.isPlaying }))
  }

  stopVideo = () => {
    this.setState({ isPlaying: false, playButtonIsVisible: true })
  }

  render() {
    const {
      url,
      image = null,
      orientation = "portrait",
      top,
      paddingTop,
    } = this.props
    return (
      <div
        onClick={this.handleContainerClick}
        css={{
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <div
          style={{
            position: "relative",
            top,
            paddingTop,
          }}
        >
          <div
            css={{
              position: "absolute",
              top: 0,
              left: 16,
              bottom: 0,
              right: 16,
            }}
          />
          <ReactPlayer
            url={url}
            playing={this.state.isPlaying}
            controls={false}
            playsinline={true}
            onEnded={this.stopVideo}
            width="100%"
            height="100%"
            style={{
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          />
          {this.state.playButtonIsVisible && (
            <div
              css={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "all 150ms",
                "@media(min-width: 800px)": {
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.1)",
                  },
                },
                cursor: "pointer",
                "&:active": {
                  transform: "translate(-50%, -50%) scale(0.9)",
                },
              }}
            >
              <div
                className="play-button"
                onClick={this.togglePlayState}
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 80,
                  height: 80,
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  css={{
                    display: "block",
                    boxSizing: "border-box",
                    width: 0,
                    height: 24,
                    marginRight: this.state.isPlaying ? 0 : -4,
                    borderColor: "transparent transparent transparent #fff",
                    borderStyle: this.state.isPlaying ? "double" : "solid",
                    borderWidth: this.state.isPlaying
                      ? "0px 0 0px 24px"
                      : "12px 0 12px 20px",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const DeviceFrame = ({
  image,
  videoUrl,
  style,
  videoSrc,
  title,
  appInfoText,
  appLinks,
  imageSrc,
  orientation = "portrait",
  top,
  paddingTop,
  color,
}) => (
  <div
    css={{
      padding: "40px 56px",
      maxWidth: orientation === "portrait" ? 424 : "none",
      marginLeft: "auto",
      marginRight: "auto",
      "@media(max-width: 800px)": {
        padding: "40px 24px",
      },
      ...style,
    }}
  >
    <div style={{ position: "relative", marginBottom: 16 }}>
      <Video
        url={videoUrl}
        orientation={orientation}
        top={top}
        paddingTop={paddingTop}
      />
      <img
        style={{
          pointerEvents: "none",
          position: "relative",
        }}
        src={imageSrc}
      />
    </div>
    <Fragment>
      <div
        style={{
          marginBottom: 6,
          fontSize: 16,
          fontWeight: "700",
          lineHeight: "1.42861",
          letterSpacing: "-.016em",
          fontFamily:
            '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
          display: "inline-block",
          backgroundColor: color,
          padding: 4,
          color: "#fff",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "1.42861",
          letterSpacing: -0.2,
          fontFamily:
            '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
          display: "inline-block",
          backgroundColor: color,
          padding: 4,
          color: "#fff",
        }}
      >
        {appInfoText}
      </div>
    </Fragment>
  </div>
)

const Text = ({ children, style }) => (
  <div
    css={{
      padding: "40px 56px",
      "@media(max-width: 800px)": {
        padding: "40px 24px",
      },
      ...style,
    }}
  >
    <p
      css={{
        marginBottom: 0,
        color: "#000000",
        fontSize: 34,
        lineHeight: "1.25",
        fontWeight: "900",
        letterSpacing: ".004em",
        fontFamily: "font",
        "@media(max-width: 800px)": {
          fontSize: 24,
        },
      }}
    >
      {children}
    </p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      css={{
        "@media(min-width: 900px)": {
          display: "grid",
          gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
          gridTemplateAreas: `"a a a a a a . b b b" 
                            "c c c c c c c b b b" 
                            "d d d e e e e e e e" 
                            "d d d f f f g g g ." 
                            "i i i f f f g g g ." 
                            "i i i j j j j j j ."
                            ". . . j j j j j j ."`,
        },
        maxWidth: 1440,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Text
        style={{
          gridArea: "a",
          "@media(min-width: 800px)": { marginTop: 72 },
        }}
      >
        Zachary Gibson is a software developer, and sometimes designer, in
        Dallas, TX.
        <br />
        <br />
        I’m interested in art, technology, and using my imagination to make
        things I like. I primarily build mobile apps.
      </Text>
      <ReactPlayer
        url="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/off-white.m3u8"
        controls
      />
      <div
        style={{
          gridArea: "j",
        }}
      >
        <Text>
          <img src={require("../images/profile.jpg")} />
          <br />
          I spend my time Tweeting, taking photos, making art, and writing code.
          I also write about design, courage, and lack thereof.
          <br />
          <br />
          I’m currently unavailable for work, but you can take a look at{" "}
          <a href="#">my résumé</a> anyway.
        </Text>
      </div>
    </div>
  </Layout>
)

export default IndexPage
