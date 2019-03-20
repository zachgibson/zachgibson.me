import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IPhone = ({
  image,
  style,
  videoSrc,
  appInfoText,
  appLinks,
  appTechnology,
  orientation = "portrait",
}) => (
  <div
    style={{
      padding: 32,
      ...style,
    }}
  >
    <div style={{ position: "relative" }}>
      <video
        // controls
        src={videoSrc}
        poster={image}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "block",
          width: "100%",
        }}
      />
      <img
        style={{ position: "relative" }}
        src={
          orientation === "portrait"
            ? require("../images/iPhone-Xs.png")
            : require("../images/iPhone-Xs-landscape.png")
        }
      />
    </div>
    <div
      style={{
        marginTop: 16,
        // padding: 8,
        // border: "1px dashed #000",
        // borderTop: "none",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "1.42861",
          letterSpacing: "-.016em",
          fontFamily:
            '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
          color: "#000000",
          textTransform: "uppercase",
        }}
      >
        OFF-WHITE Gallery
      </div>
      <br />
      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "1.42861",
          letterSpacing: "-.016em",
          fontFamily:
            '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
          color: "#000000",
          // textTransform: "uppercase",
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
    </div>
  </div>
)

const Text = ({ children, style }) => (
  <div
    style={{
      padding: 32,
      ...style,
    }}
  >
    <p
      style={{
        maxWidth: 680,
        marginBottom: 0,
        // fontFamily: "system-ui",
        // fontWeight: "500",
        // fontSize: "30px",
        color: "#000000",
        // lineHeight: 1.25,
        // FONT FROM 
        fontSize: "32px",
        lineHeight: "1.125",
        fontWeight: "600",
        letterSpacing: ".004em",
        fontFamily:
          '"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
        // textTransform: "uppercase",
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
        // maxWidth: 1200,
        // marginLeft: "auto",
        // marginRight: "auto",
      }}
    >
      <Text
        style={{
          gridArea: "a",
          marginTop: 80,
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
        image={require("../images/off-white.jpeg")}
        videoSrc={require("../videos/off-white-gallery.mp4")}
        appInfoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua."
        appLinks={[" App Store"]}
        appTechnology="React Native"
      />
      <IPhone
        style={{ gridArea: "c" }}
        image={require("../images/camera.jpg")}
        videoSrc={require("../videos/showcase-live-stream.mp4")}
        appInfoText="It is so lit"
        appLinks={["Expo Snack", "GitHub"]}
        orientation="landscape"
      />
      <IPhone
        style={{ gridArea: "d" }}
        image={require("../images/balllr.jpeg")}
        videoSrc={require("../videos/off-white-gallery.mp4")}
        appInfoText="App Info"
      />
      <IPhone
        style={{ gridArea: "e" }}
        image={require("../images/camera.jpg")}
        videoSrc={require("../videos/showcase-live-stream.mp4")}
      />
      <IPhone
        style={{ gridArea: "f" }}
        image={require("../images/balllr.jpeg")}
        videoSrc={require("../videos/off-white-gallery.mp4")}
        appInfoText="App Info"
      />
      <IPhone
        style={{ gridArea: "g" }}
        image={require("../images/balllr.jpeg")}
        videoSrc={require("../videos/off-white-gallery.mp4")}
        appInfoText="App Info"
      />
      <IPhone
        style={{ gridArea: "i" }}
        image={require("../images/balllr.jpeg")}
        videoSrc={require("../videos/off-white-gallery.mp4")}
        appInfoText="App Info"
      />
      <div
        style={{
          gridArea: "j",
        }}
      >
        <Text>
          <img
            style={{ maxWidth: "50%" }}
            src="https://scontent-dfw5-2.cdninstagram.com/vp/ba96a31af096bc7327306aa89caee9bc/5D1842F6/t51.2885-15/sh0.08/e35/p640x640/53425015_2229018100749097_2835631967224202949_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com"
          />
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
