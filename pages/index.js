import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "reactstrap";
import Link from "next/link";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const Home = () => (
  <BaseLayout>
    <BasePage>
      <div
        className="container py-25"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "4rem",
          paddingBottom: "40px",
        }}
      >
        <div
          className="container"
          style={{ alignContent: "center", alignItems: "center" }}
        >
          <Image
            src="/me.webp"
            alt="Luis Ruiz"
            width={140}
            height={140}
            style={{ objectFit: "cover" }}
            className="image"
          />
          <h1 className="title">Luis Ruiz</h1>
          <h2
            className="title"
            style={{
              fontSize: "2rem",
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight: "500",
            }}
          >
            I build web apps.
          </h2>
        </div>
        <div className="container" style={{ maxWidth: "700px", gap: "3rem" }}>
          <div className="container">
            <p className="text" style={{ textAlign: "center" }}>
              I&apos;m a Full Stack developer with experience in DevOps,
              Backend, Frontend and mobile development. Currently Lead Software
              Developer at&nbsp;
              <a className="link-text" href="https://trustbiztech.com">
                Biztech
              </a>{" "}
              and living in California.
            </p>
          </div>
          <Link href="/about">
            <Button size="lg" className="custom-button primary">
              More about me &rarr;
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="container"
        style={{
          alignItems: "center",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "600px",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ fontSize: "3rem" }}>Get in touch</h3>
          <p className="text" style={{ textAlign: "center" }}>
            I am actively seeking new employment opportunities, my inbox is open
            to any inqueries. Feel free to ask me anything!
          </p>
          <div
            className="grid-container"
            style={{
              gap: "2rem",
              marginTop: "2rem",
              gridTemplateColumns: "repeat(2, 1fr)",
              justifyItems: "stretch",
              alignItems: "stretch",
            }}
          >
            <Link href="mailto:hello@shellbear.me">
              <Button size="lg" className="custom-button primary full-width">
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
            <Link target="_blank" href="https://calendly.com/lruiz5/intro">
              <Button size="lg" className="custom-button secondary full-width">
                Schedule a meeting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BasePage>
  </BaseLayout>
);

export default Home;
