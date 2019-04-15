import React, { Component, Fragment } from "react"
import ReactPlayer from "react-player"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Video extends Component {
  state = { isPlaying: false }

  togglePlayState = () => {
    this.setState(previousState => ({ isPlaying: !previousState.isPlaying }))
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
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          "&:hover": {
            ".play-button": {
              opacity: 1,
            },
          },
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
              // backgroundColor: "#000",
            }}
          />
          <ReactPlayer
            url={url}
            playing={this.state.isPlaying}
            // controls
            // loop
            onEnded={this.togglePlayState}
            // width={orientation === "portrait" ? "87.25%" : "94.5%"}
            // height={orientation === "portrait" ? "94%" : "auto"}
            width="100%"
            height="100%"
            // height="93.5%"
            style={{
              // backgroundColor: "red",
              position: "absolute",
              top: "0",
              left: "0",
              // top: "2.75%",
              // bottom: "3%",
              // left: "3%",
              // right: "3%",
              // top: orientation === "portrait" ? "2.4%" : "6.3%",
              // left: orientation === "portrait" ? "6.5%" : "2.9%",
              // width: orientation === "portrait" ? "87.25%" : "94.5%",
            }}
          />
          <div
            className="play-button"
            onClick={this.togglePlayState}
            css={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              cursor: "pointer",
              opacity: this.state.isPlaying ? 0 : 1,
              transition: "all 150ms",
              backdropFilter: "blur(10px)",
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.1)",
              },
              "&:active": {
                transform: "translate(-50%, -50%) scale(0.9)",
              },
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
  appTechnology,
  imageSrc,
  orientation = "portrait",
  top,
  paddingTop,
}) => (
  <div
    style={{
      padding: "40px 56px",
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
          // opacity: 0.5,
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
          color: "#000000",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "1.42861",
          letterSpacing: "-.016em",
          fontFamily:
            '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
          color: "#000000",
        }}
      >
        {appInfoText}
      </div>
      <br />
      <div
        style={{
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: 0.25,
          fontFamily:
            '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
          color: "#ff85e9",
          // textTransform: "uppercase",
        }}
      >
        #{appTechnology}
      </div>
    </Fragment>
  </div>
)

const Text = ({ children, style }) => (
  <div
    style={{
      padding: "40px 56px",
      ...style,
    }}
  >
    <p
      style={{
        // maxWidth: 680,
        marginBottom: 0,
        color: "#000000",
        fontSize: 34,
        lineHeight: "1.25",
        fontWeight: "900",
        // textTransform: "uppercase",
        letterSpacing: ".004em",
        fontFamily: "font",
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
      style={{
        // GRID styles
        display: "grid",
        gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
        gridTemplateAreas: `"a a a a a a . b b b" 
                            "c c c c c c c b b b" 
                            "d d d e e e e e e e" 
                            "d d d f f f g g g ." 
                            "i i i f f f g g g ." 
                            "i i i j j j j j j ."
                            ". . . j j j j j j ."`,
        // end GRID styles
        maxWidth: 1440,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Text
        style={{
          gridArea: "a",
          marginTop: 72,
        }}
      >
        Zachary Gibson is a software developer, and sometimes designer, in
        Dallas, TX.
        <br />
        <br />
        I’m interested in art, technology, and using my imagination to make
        things I like. I primarily build mobile apps.
      </Text>
      <DeviceFrame
        imageSrc={require("../images/iPhone-Xs.png")}
        top="2.75%"
        paddingTop="189.5%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/off-white.m3u8"
        style={{ gridArea: "b" }}
        title='"OFF-WHITE Gallery"'
        appInfoText="Experimenting with what an interactive, fun, shoe browsing experience could be like. All the aesthetics borrowed from the great Virgil Abloh."
        appLinks={[" App Store"]}
        appTechnology="React Native"
      />
      <DeviceFrame
        imageSrc={require("../images/iPhone-Xs-landscape.png")}
        top="6%"
        paddingTop="44%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/showcase.m3u8"
        style={{ gridArea: "c" }}
        title="Live Camera Prototype"
        appInfoText="This was for a quick hack-a-thon."
        appLinks={["Expo Snack", "GitHub"]}
        orientation="landscape"
      />
      <DeviceFrame
        imageSrc={require("../images/iPhone-Xs.png")}
        top="2.75%"
        paddingTop="189.5%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/twitter-moments.m3u8"
        style={{ gridArea: "d" }}
        title='"OFF-WHITE Gallery"'
        appInfoText="Experimenting with what an interactive, fun, shoe browsing experience could be like. All the aesthetics borrowed from the great Virgil Abloh."
        appLinks={[" App Store"]}
        appTechnology="React Native"
      />
      <DeviceFrame
        imageSrc={require("../images/macbook-pro.png")}
        top="6.6%"
        paddingTop="47.8%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/local-to-ip.m3u8"
        style={{ gridArea: "e" }}
        title="Live Camera Prototype"
        appInfoText="This was for a quick hack-a-thon."
        appLinks={["Expo Snack", "GitHub"]}
        orientation="landscape"
      />
      <DeviceFrame
        imageSrc={require("../images/iPhone-Xs.png")}
        top="2.75%"
        paddingTop="189.5%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/golden-hour.m3u8"
        style={{ gridArea: "f" }}
        title='"OFF-WHITE Gallery"'
        appInfoText="Experimenting with what an interactive, fun, shoe browsing experience could be like. All the aesthetics borrowed from the great Virgil Abloh."
        appLinks={[" App Store"]}
        appTechnology="React Native"
      />
      <DeviceFrame
        imageSrc={require("../images/iPhone-Xs.png")}
        top="2.75%"
        paddingTop="189.5%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/nike-gallery.m3u8"
        style={{ gridArea: "g" }}
        title='"OFF-WHITE Gallery"'
        appInfoText="Experimenting with what an interactive, fun, shoe browsing experience could be like. All the aesthetics borrowed from the great Virgil Abloh."
        appLinks={[" App Store"]}
        appTechnology="React Native"
      />
      <DeviceFrame
        imageSrc={require("../images/iPhone-Xs.png")}
        top="2.75%"
        paddingTop="189.5%"
        videoUrl="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/balllr.m3u8"
        style={{ gridArea: "i" }}
        title='"OFF-WHITE Gallery"'
        appInfoText="Experimenting with what an interactive, fun, shoe browsing experience could be like. All the aesthetics borrowed from the great Virgil Abloh."
        appLinks={[" App Store"]}
        appTechnology="React Native"
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
