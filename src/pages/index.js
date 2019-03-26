import React, { Fragment, Component } from "react"
import { Link } from "gatsby"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Video extends Component {
  render() {
    const { image = null, orientation = "portrait" } = this.props
    return (
      <div
        style={{
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
            top: "2.75%",
            paddingTop: "189%" /* Player ratio: 100 / (1280 / 720) */,
          }}
        >
          <ReactPlayer
            url="https://s3-us-west-2.amazonaws.com/zachgibson.me/streams/foo.m3u8"
            playing
            controls
            loop
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
        </div>
      </div>
    )
  }
}

const IPhone = ({
  image,
  style,
  videoSrc,
  title,
  appInfoText,
  appLinks,
  appTechnology,
  orientation = "portrait",
}) => (
  <div
    style={{
      padding: "40px 56px",
      ...style,
    }}
  >
    <div style={{ position: "relative", marginBottom: 16 }}>
      <Video />
      <img
        style={{
          pointerEvents: "none",
          position: "relative",
          // opacity: 0.5,
        }}
        src={
          orientation === "portrait"
            ? require("../images/iPhone-Xs.png")
            : require("../images/iPhone-Xs-landscape.png")
        }
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
          textTransform: "uppercase",
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
        maxWidth: 680,
        marginBottom: 0,
        color: "#000000",
        fontSize: "32px",
        lineHeight: "1.125",
        fontWeight: "600",
        letterSpacing: ".004em",
        fontFamily:
          '"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
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
        Zachary Gibson is an app developer, and sometimes designer, living in
        Dallas, Texas.
        <br />
        <br />
        He primarily writes React Native apps but is slowly and surely falling
        in love with Swift.
        <br />
        You can reach him on{" "}
        <a href="https://twitter.com/zacharykeith_">Twitter</a> or{" "}
        <a href="mailto:zackgib@aol.com">email</a>.
      </Text>
      <IPhone
        style={{ gridArea: "b" }}
        // image={require("../images/off-white.jpeg")}
        videoSrc={require("../videos/1.mp4")}
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

//   < IPhone
// style = {{ gridArea: "c" }}
// // image={require("../images/camera.jpg")}
// videoSrc = { require("../videos/showcase-live-stream.mp4") }
// title = "Live Camera Prototype"
// appInfoText = "This was for a quick hack-a-thon."
// appLinks = { ["Expo Snack", "GitHub"]}
// orientation = "landscape"
//   />
//   <IPhone
//     style={{ gridArea: "d" }}
//     // image={require("../images/twitter-moments.jpeg")}
//     videoSrc={require("../videos/2.mp4")}
//     appInfoText="App Info"
//   />
//   <IPhone
//     style={{ gridArea: "e" }}
//     // image={require("../images/camera.jpg")}
//     videoSrc={require("../videos/showcase-live-stream.mp4")}
//     orientation="landscape"
//   />
//   <IPhone
//     style={{ gridArea: "f" }}
//     // image={require("../images/balllr.jpeg")}
//     videoSrc={require("../videos/3.mp4")}
//     appInfoText="App Info"
//   />
//   <IPhone
//     style={{ gridArea: "g" }}
//     // image={require("../images/balllr.jpeg")}
//     videoSrc={require("../videos/off-white-gallery.mp4")}
//     appInfoText="App Info"
//   />
//   <IPhone
//     style={{ gridArea: "i" }}
//     // image={require("../images/balllr.jpeg")}
//     videoSrc={require("../videos/off-white-gallery.mp4")}
//     appInfoText="App Info"
//   />
