import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "components/Container";
import Title from "components/Title";
import Button from "components/Button";
import Grid from "components/Grid";
import Link from "next/link";
import Text from "components/Text";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const Home = () => (
  <BaseLayout>
    <BasePage>
      <Container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        paddingY="25px"
        paddingBottom="40px"
        gridGap="4rem"
      >
        <Container alignItems="center" alignContent="center">
          <Image
            src="/me.webp"
            alt="Luis Ruiz"
            width={140}
            height={140}
            style={{ objectFit: "cover" }}
            className="image"
          />
          <Title>Luis Ruiz</Title>
          <Title
            fontSize="2rem"
            color="rgba(0, 0, 0, 0.6)"
            fontWeight="500"
            as="h2"
          >
            I build web apps.
          </Title>
        </Container>
        <Container maxWidth="700px" gridGap="3rem">
          <Container>
            <Text textAlign="center">
              I&apos;m a Full Stack developer with experience in DevOps,
              Backend, Frontend and mobile development. Currently Lead Software
              Developer at&nbsp;
              <a className="link-text" href="https://trustbiztech.com">
                Biztech
              </a>{" "}
              and living in California.
            </Text>
          </Container>
          <Link href="/about">
            <Button>More about me &rarr;</Button>
          </Link>
        </Container>
      </Container>

      <Container alignItems="center" paddingY="4rem">
        <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Title fontSize="3rem" as="h3">
            Get in touch
          </Title>
          <Text textAlign="center">
            Although I&apos;m not actively looking for job opportunities, my
            inbox is still open for you. Feel free to ask me anything!
          </Text>
          <Grid
            gridGap="2rem"
            marginTop="2rem"
            gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="mailto:hello@shellbear.me">
              <Button width="100%">
                <motion.span
                  initial={{ display: "inline-block" }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                  }}
                >
                  👋
                </motion.span>{" "}
                Say hello
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://calendly.com/antoine-ordonez/intro"
            >
              <Button
                width="100%"
                backgroundColor="rgb(226,232,240)"
                color="black"
                variant="secondary"
              >
                Schedule a meeting
              </Button>
            </Link>
          </Grid>
        </Container>
      </Container>
    </BasePage>
  </BaseLayout>
);

export default Home;
