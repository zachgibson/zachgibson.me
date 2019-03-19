import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IPhone = ({ image, style, videoSrc, appInfoText, appLinks }) => (
  <div
    style={{
      padding: 32,
      ...style,
    }}
  >
    <video
      // controls
      src={videoSrc}
      poster={image}
      style={{ display: "block", width: "100%" }}
    />
    <div
      style={{
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 13,
        color: "#000000",
        textTransform: "uppercase",
      }}
    >
      {appInfoText}
    </div>
    <div
      style={{
        display: "flex",
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 13,
        color: "#000000",
        textTransform: "uppercase",
      }}
    >
      {appLinks &&
        appLinks.map(link => <a href={link.href || "#"}>{link} ⇢</a>)}
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
        maxWidth: 640,
        marginBottom: 0,
        fontFamily: "HelveticaNeue-Bold",
        fontSize: "24px",
        color: "#000000",
        lineHeight: "32px",
        textTransform: "uppercase",
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
        appInfoText="This is a cool app title"
        appLinks={[" App Store"]}
      />
      <IPhone
        style={{ gridArea: "c" }}
        image={require("../images/camera.jpg")}
        videoSrc={require("../videos/showcase-live-stream.mp4")}
        appInfoText="It is so lit"
        appLinks={["Expo Snack", "GitHub"]}
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
