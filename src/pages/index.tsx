import * as React from "react"
import styled from "@emotion/styled"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { interpolate } from "@popmotion/popcorn"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AnimatedCircleContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const AnimatedCircle = styled(motion.div)({
  position: "absolute",
  zIndex: -1,
  width: "50vw",
  maxWidth: 640,
  height: "50vw",
  maxHeight: 640,
  backgroundColor: "#FF85E9",
  borderRadius: "50%",
})

const Link = styled(motion.a)({
  position: "relative",
  zIndex: 2,
  fontSize: "calc(16px + 6 * ((100vw - 320px) / 680))",
})

const HomeLink = styled(Link)({
  border: "1px dashed #999",
})

const TwitterLinkContainer = styled.div({
  gridArea: "3 / 2 / 5 / 4",
})

const HomeLinkContainer = styled.div({
  gridArea: "5 / 1 / 6 / 15",
  textAlign: "right",
})

const FeaturedWorkLinkContainer = styled.div({
  gridArea: "11 / 2 / 12 / 15",
})

const ExperimentsLinkContainer = styled.div({
  gridArea: "17 / 5 / 18 / 15",
})

const DribbbleLinkContainer = styled.div({
  gridArea: "20 / 13 / 22 / 15",
})

const GitHubLinkContainer = styled.div({
  gridArea: "22 / 3 / 24 / 5",
})

const InstagramLinkContainer = styled.div({
  gridArea: "2 / 11 / 4 / 13",
})

const WritingsLinkContainer = styled.div({
  gridArea: "6 / 4 / 7 / 15",
})

const TwitchLinkContainer = styled.div({
  gridArea: "10 / 2 / 12 / 6",
})

const BiographyLinkContainer = styled.div({
  gridArea: "13 / 8 / 15 / 15",
})

const WildcardLinkContainer = styled.div({
  gridArea: "18 / 3 / 20 / 15",
})

const AppleMusicLinkContainer = styled.div({
  gridArea: "22 / 10 / 24 / 12",
})

const MainGridContainer = styled.div({
  display: "grid",
  gridTemplateRows: "1fr auto",
  gridTemplateColumns: "1fr 1.6fr 1fr",
  height: "100vh",
  "@media(max-width: 640px)": {
    display: "none",
  },
})

const LinksContainer = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(24, 1fr)",
  gridTemplateColumns: "repeat(14, 1fr)",
})

const circleAnimationConfig = {
  type: "spring",
  damping: 17,
  mass: 0.5,
  tension: 2,
  stiffness: 200,
}

const Desktop = () => {
  const animatedCircle = React.useRef<HTMLDivElement>(null)
  const animatedCircleContainer = React.useRef<HTMLDivElement>(null)
  const [[x, y, s], setAnimatedValues] = React.useState([0, 0, 0])
  const [hasAnimatedOnce, setHasAnimatedOnce] = React.useState(false)

  React.useEffect(() => {
    if (!hasAnimatedOnce) {
      setTimeout(() => {
        setAnimatedValues([0, 0, 1])
      }, 200)
    }

    setHasAnimatedOnce(true)
  })

  const animateCircle = ({ target }) => {
    const linkMiddleX =
      target.getBoundingClientRect().left +
      target.getBoundingClientRect().width / 2
    const linkMiddleY =
      target.getBoundingClientRect().top +
      target.getBoundingClientRect().height / 2
    const circleContainerMiddleX =
      animatedCircleContainer.current.getBoundingClientRect().left +
      animatedCircleContainer.current.getBoundingClientRect().width / 2
    const circleContainerMiddleY =
      animatedCircleContainer.current.getBoundingClientRect().top +
      animatedCircleContainer.current.getBoundingClientRect().height / 2

    setAnimatedValues([
      linkMiddleX - circleContainerMiddleX,
      linkMiddleY - circleContainerMiddleY,
      0.25,
    ])
  }

  const animateCircleHomeLink = () => {
    setAnimatedValues([0, 0, 1.2])
  }

  const animateBackCircle = () => {
    setAnimatedValues([0, 0, 1])
  }
  return (
    <MainGridContainer>
      <LinksContainer>
        <TwitterLinkContainer>
          <a href="https://twitter.com/zacharykeith_">
            <img
              src={require("../images/twitter.png")}
              style={{ display: "block", maxWidth: 48 }}
            />
          </a>
        </TwitterLinkContainer>
        <HomeLinkContainer>
          <HomeLink
            href="/"
            onMouseOver={animateCircleHomeLink}
            onMouseOut={animateBackCircle}
          >
            zachgibson.me
          </HomeLink>
        </HomeLinkContainer>
        <FeaturedWorkLinkContainer>
          <Link
            href="/work"
            onMouseOver={animateCircle}
            onMouseOut={animateBackCircle}
          >
            Featured Work
          </Link>
        </FeaturedWorkLinkContainer>
        <ExperimentsLinkContainer>
          <Link
            href="/experiments"
            onMouseOver={animateCircle}
            onMouseOut={animateBackCircle}
          >
            Experiments
          </Link>
        </ExperimentsLinkContainer>
        <DribbbleLinkContainer>
          <a href="https://dribbble.com/zacharygibson">
            <img
              src={require("../images/dribbble.png")}
              style={{ display: "block", maxWidth: 44 }}
            />
          </a>
        </DribbbleLinkContainer>
        <GitHubLinkContainer>
          <a href="https://dribbble.com/zacharygibson">
            <img
              src={require("../images/github.png")}
              style={{ display: "block" }}
            />
          </a>
        </GitHubLinkContainer>
      </LinksContainer>
      <AnimatedCircleContainer ref={animatedCircleContainer}>
        <AnimatedCircle
          ref={animatedCircle}
          transition={circleAnimationConfig}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: x,
            y: y,
            scale: s,
          }}
        />
      </AnimatedCircleContainer>
      <LinksContainer>
        <InstagramLinkContainer>
          <a
            href="https://instagram.com/zacharykeith_"
            style={{ display: "block", maxWidth: 48 }}
          >
            <img
              src={require("../images/instagram.png")}
              style={{ display: "block" }}
            />
          </a>
        </InstagramLinkContainer>
        <WritingsLinkContainer>
          <Link
            href="/writings"
            onMouseOver={animateCircle}
            onMouseOut={animateBackCircle}
          >
            Writings
          </Link>
        </WritingsLinkContainer>
        <TwitchLinkContainer>
          <a
            href="https://www.twitch.tv/zacharykeith_"
            style={{ display: "block" }}
          >
            <img
              src={require("../images/twitch.png")}
              style={{ display: "block" }}
            />
          </a>
        </TwitchLinkContainer>
        <BiographyLinkContainer>
          <Link
            href="/biography"
            onMouseOver={animateCircle}
            onMouseOut={animateBackCircle}
          >
            Biography
          </Link>
        </BiographyLinkContainer>
        <WildcardLinkContainer>
          <Link
            href="#"
            onMouseOver={animateCircle}
            onMouseOut={animateBackCircle}
          >
            Wildcard
          </Link>
        </WildcardLinkContainer>
        <AppleMusicLinkContainer>
          <a
            href="https://www.twitch.tv/zacharykeith_"
            style={{ display: "block", maxWidth: 48 }}
          >
            <img
              src={require("../images/spotify.png")}
              style={{ display: "block" }}
            />
          </a>
        </AppleMusicLinkContainer>
      </LinksContainer>
    </MainGridContainer>
  )
}

const scrollContainerHeight = 420

const Moobile = styled.div({
  height: "100%",
  // position: "absolute",
  // top: 0,
  // left: 0,
  // bottom: 0,
  // right: 0,
  backgroundColor: "red",
  "@media(min-width: 640px)": {
    display: "none",
  },
})

const ScrollContainer = styled.div({
  display: "flex",
  WebkitScrollSnapType: "mandatory",
  scrollSnapType: "x mandatory",
  WebkitScrollSnapPointsY: "repeat(100%)",
  scrollSnapPointsY: "repeat(100%)",
  width: "100%",
  height: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  WebkitOverflowScrolling: "touch",
})

const MotionCard = styled(motion.div)({
  // display: "inline-block",
  scrollSnapAlign: "start",
  width: "100%",
  height: "100%",
  // backgroundColor: "blue",
})

const MotionCardChildrenContainer = styled.div({
  width: "100vw",
})

const colors = ["skyblue", "rebeccapurple", "lime", "plum", "gray", "orange"]

const Card = ({ y, animatedScrollVal, i, children }) => {
  // const scale = useTransform(
  //   y,
  //   [
  //     (window.innerHeight / 2) * (i - 1),
  //     (window.innerHeight / 2) * i,
  //     (window.innerHeight / 2) * (i + 1),
  //   ],
  //   [0.75, 1, 0.75]
  // )

  // const farts = animatedScrollVal - i * scrollContainerHeight

  return (
    <MotionCard
      style={{
        backgroundColor: colors[i],
        // transform: `translate3d(${farts}px, -${farts * 1.5}px, 0)`,
      }}
    >
      <MotionCardChildrenContainer>{children}</MotionCardChildrenContainer>
    </MotionCard>
  )
}

const Mobile = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null)
  const [animatedScrollVal, setAnimatedScrollVal] = React.useState(0)
  const y = useMotionValue(0)

  React.useEffect(() => {
    scrollContainer.current.onscroll = handleScroll
  }, [])

  const handleScroll = (e: Event) => {
    const target = e.target as HTMLDivElement
    console.log(target.scrollLeft)
    setAnimatedScrollVal(target.scrollLeft)
    // y.set(target.scrollTop)
  }

  return (
    <Moobile>
      <ScrollContainer ref={scrollContainer}>
        <Card y={y} animatedScrollVal={animatedScrollVal} i={0}>
          <h1>Lit fam!</h1>
        </Card>
        <Card y={y} animatedScrollVal={animatedScrollVal} i={1} />
        <Card y={y} animatedScrollVal={animatedScrollVal} i={2} />
        <Card y={y} animatedScrollVal={animatedScrollVal} i={3} />
        <Card y={y} animatedScrollVal={animatedScrollVal} i={4} />
        <Card y={y} animatedScrollVal={animatedScrollVal} i={5} />
      </ScrollContainer>
      {/* <h1>{scrollY}</h1> */}
    </Moobile>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Mobile />
      <Desktop />
    </Layout>
  )
}

export default IndexPage
