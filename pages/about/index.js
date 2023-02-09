import React from "react";
import Link from "next/link";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import {
  SiFirebase,
  SiPostgresql,
  SiWordpress,
  SiAmazonaws,
  SiGooglecloud,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiAdobecreativecloud,
  SiPython,
  SiLinux,
} from "react-icons/si";

const stacks = [
  {
    Icon: SiNextdotjs,
    url: "https://nextjs.org/",
  },
  {
    Icon: SiAmazonaws,
    url: "https://aws.amazon.com/",
  },
  {
    Icon: SiPrisma,
    url: "https://www.prisma.io",
  },
  {
    Icon: SiWordpress,
    url: "https://www.wordpress.org/",
  },
  {
    Icon: SiReact,
    url: "https://reactjs.org/",
  },
  {
    Icon: SiLinux,
    url: "https://linux.org/",
  },
  {
    Icon: SiGooglecloud,
    url: "https://cloud.google.com/",
  },
  {
    Icon: SiPostgresql,
    url: "https://www.postgresql.org/",
  },
  {
    Icon: SiPython,
    url: "https://www.python.org/",
  },
  {
    Icon: SiMongodb,
    url: "https://www.mongodb.com/",
  },
  {
    Icon: SiAdobecreativecloud,
    url: "https://www.adobe.com/creativecloud.html",
  },
  {
    Icon: SiFirebase,
    url: "https://firebase.google.com",
  },
];

const About = ({ experiences }) => (
  <BaseLayout>
    <BasePage>
      <div
        className="container"
        style={{ alignContent: "center", alignItems: "center" }}
      >
        <h2 className="title" fontSize={["3rem", "4rem"]}>
          Passionate Software Developer
        </h2>
        <div
          className="container full-width"
          style={{
            maxWidth: "720px",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <p className="text">
            I&apos;m a Full-Stack/DevOps developer living in California.
          </p>
          <p className="text">
            I find my joy in my faith in Jesus Christ, the peaceful atmosphere
            of the beach and the satisfaction and pleasure of creating something
            from scratch. These three things are important aspects of my life
            and are integral to who i am. The natural beauty of the beach, and
            the process of baking bread allow me to tap into my creativity and
            practice patience and attention to detail.
          </p>
        </div>
      </div>

      <div
        className="container full-width"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          gap: "2rem",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2 className="title" style={{ fontSize: "40px" }}>
          Technologies I frequently use
        </h2>
        <div
          className="grid-container"
          style={{
            gap: "1rem",
            justifyItems: "center",
            maxWidth: "40rem",
            gridTemplateColumns: "repeat(6 , 1fr)",
          }}
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <div className="item-card" key={i}>
                <Icon size="2rem" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="container full-width"
        style={{
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "4rem",
          gap: "3rem",
        }}
      >
        <h2 className="title" style={{ fontSize: "40px" }}>
          Work Experiences
        </h2>
        <div className="container full-width">
          {experiences.map((data, i) => (
            <Link
              className="transparent-link"
              href={`/about/${data.slug}`}
              key={data.slug}
            >
              <div
                className="grid-container"
                key={i}
                style={{
                  gridTemplateColumns: "1fr 4fr",
                  justifyItems: "flex-start",
                  gap: "1rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="container full-width">
                  <p className="text" style={{ fontWeight: "normal" }}>
                    0{experiences.length - i}
                  </p>
                </div>
                <div
                  className="grid-container full-width"
                  style={{ gridTemplateColumns: "4fr 1fr" }}
                >
                  <div
                    className="container full-width"
                    style={{ alignItems: "flex-start", textAlign: "start" }}
                  >
                    <div
                      className="grid-container full-width"
                      style={{
                        justifyItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "1rem",
                        gridTemplateColumns: "repeat(2, auto)",
                      }}
                    >
                      <h3
                        className="title"
                        style={{ fontSize: "1.5rem", margin: 0 }}
                      >
                        {data.position}
                      </h3>
                      <p
                        className="text"
                        style={{ fontSize: "12px", margin: 0 }}
                      >
                        {data.date}
                      </p>
                    </div>
                    <p
                      className="text"
                      style={{ fontSize: "1rem", fontWeight: "normal" }}
                    >
                      {data.description}
                    </p>
                  </div>
                  <p className="text" style={{ fontSize: "1.5rem" }}>
                    &rarr;
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BasePage>
  </BaseLayout>
);

export const getStaticProps = async () => {
  const experiences = [
    {
      slug: "biztech-lead",
      title: "Biztech Eureka",
      position: "Lead Software Developer",
      date: "Mar 2022 - Now",
      description:
        "My experience managing a team, providing technical leadership, and ensuring delivery of high-quality software.",
      image: "/img/lead.jpeg",
      blurImage: "LHL47{A0-TZgx]4o~qX8Q+D%W;s8",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Provide detailed specifications for proposed solutions including:",
          details: [
            "Establishing milestones for necessary contributions from departments",
            "Developing processes to facilitate collaboration",
            "Estimating materials, manpower and time required to complete a project.",
          ],
        },
        {
          description:
            "Generate detailed documentation of processes including product testing, DB schemas, code comments, etc.",
          details: [],
        },
        {
          description:
            "Work with teammates in the migration of legacy applications to current technologies.",
          details: [],
        },
        {
          description:
            "Provided technical leadership to teammates through coaching/mentorship ensuring they adhere to determined software quality standards.",
          details: [],
        },
      ],
    },
    {
      slug: "biztech-devops",
      title: "Biztech Eureka",
      position: "DevOps Engineer",
      date: "Jan 2021 - March 2022",
      description:
        "Optimizing the most automated lumber mill in Northern California.",
      image: "/img/saw-filer.jpeg",
      blurImage: "LFEyVy?b9F0J?w-pIUIU9FIokDxu",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Implemented continuous integration and automate update deployment in technologies including:",
          details: [
            "SQL Databases",
            "Linux and Windows Servers",
            "Websites",
            "Internal back-end systems.",
          ],
        },
        {
          description:
            "Implemented version control of all software preceding my employment.",
          details: [],
        },
        {
          description:
            "Using React/Nextjs, designed/developed programs to modernize outdated processes across 6 companies.",
          details: [],
        },
        {
          description:
            "Deployed 2 software iterations per month for a year. Increased customer satisfaction with software by 25%. Presided over a period of 20% revenue growth.",
          details: [],
        },
      ],
    },

    {
      slug: "biztech-mobile-apps",
      title: "Humboldt Area Foundation",
      position: "Mobile Applications Developer",
      date: "Feb 2020 - Dec 2021",
      description:
        "What I learned about cross-platform development and the app stores.",
      image: "/img/mobile-app-dev.jpeg",
      blurImage: "LHN0*haxyC9F+qbvkrDi?wo~xtR6",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Met with clients weekly to understand their needs, considering time and budget to build estimates.",
          details: [],
        },
        {
          description:
            "Coordinated with development/design teams to develop cross platform mobile applications.",
          details: [],
        },
        {
          description:
            "Using React Native, design/develop scalable UI components for JavaScript-based online and mobile apps.",
          details: [],
        },
        {
          description:
            "Configure AWS NoSQL and Relational DB services while making use of JS libraries for asynchronous API calls as well as improving performance of preexisting mobile apps.",
          details: [],
        },
        {
          description: "App deployment on respective App stores (Apple/Google)",
          details: [],
        },
      ],
    },

    {
      slug: "biztech-web-dev",
      title: "Biztech Eureka",
      position: "Web Developer",
      date: "Aug 2019 - Feb 2020",
      description: "My first job in software development. Full Stack.",
      image: "/img/webdev.png",
      blurImage: "LSP%hmS$~T$$?akCWBjE?Yr=RkR.",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Build, design, and maintain websites/web applications used in Biztech’s network of clients.",
          details: [],
        },
        {
          description:
            "Executed assignments using scripts, and programming languages such as HTML/CSS, JavaScript, and APIs.",
          details: [],
        },
        {
          description:
            "Evaluated written code to ensure it met industry standards and was compatible across all device platforms.",
          details: [],
        },
        {
          description:
            "Maintained a professional understanding of web app development by participating in online seminars/courses.",
          details: [],
        },
        {
          description:
            "Worked with modern tools including YouTrack, Microsoft Teams, GitHub, Google Docs, etc.",
          details: [],
        },
      ],
    },
  ];

  return {
    props: {
      experiences,
    },
  };
};

export default About;
