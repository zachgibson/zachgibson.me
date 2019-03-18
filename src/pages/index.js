import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IPhone = ({ image, style }) => (
  <div
    style={{
      padding: 32,
      ...style,
    }}
  >
    <video
      controls
      src={require("../videos/off-white-gallery.mp4")}
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
      App Info
    </div>
    <div
      style={{
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 13,
        color: "#000000",
        textTransform: "uppercase",
      }}
    >
      Links
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
                            ". . . f f f g g g ." 
                            "i i i j j j j j j ."
                            "i i i k k k k k k k"`,
        // end GRID styles
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
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
        image={require("../images/balllr.jpeg")}
      />
      <IPhone
        style={{ gridArea: "c" }}
        image={require("../images/camera.jpg")}
      />
      <IPhone
        style={{ gridArea: "d" }}
        image={require("../images/balllr.jpeg")}
      />
      <IPhone
        style={{ gridArea: "e" }}
        image={require("../images/camera.jpg")}
      />
      <IPhone
        style={{ gridArea: "f" }}
        image={require("../images/balllr.jpeg")}
      />
      <IPhone
        style={{ gridArea: "g" }}
        image={require("../images/balllr.jpeg")}
      />
      <IPhone
        style={{ gridArea: "i" }}
        image={require("../images/balllr.jpeg")}
      />
      <Text
        style={{
          gridArea: "j",
        }}
      >
        Zachary Gibson is an app developer, and sometimes designer, living in
        Dallas, Texas.
        <br />
        <br />
        He primarily writes React Native apps but is slowly and surely falling
        in love with Swift.
        <br />
        Say hello on <a href="https://twitter.com/zacharykeith_">
          Twitter
        </a> or <a href="mailto:zackgib@aol.com">email</a>.
      </Text>
    </div>
  </Layout>
)

export default IndexPage
