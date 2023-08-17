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
  SiNetlify,
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
    Icon: SiNetlify,
    url: "https://www.netlify.com/",
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
        <h2 className="title">Passionate Software Developer</h2>
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
            {/* I find my joy in my faith in Jesus Christ, the peaceful atmosphere
            of the beach and the satisfaction and pleasure of creating something
            from scratch. These three things are important aspects of my life
            and are integral to who i am. The natural beauty of the beach, and
            the process of baking bread allow me to tap into my creativity and
            practice patience and attention to detail. Ultimately, my life is
            fulfilled in the knowing that if I had nothing else, I know The One
            who loves me. */}
            I have a deep love for web development, specializing in React and
            Next.js for enterprise-level applications. I thrive in complex
            environments where scalability and performance are critical
            considerations. Crafting seamless user experiences, designing
            intuitive interfaces, and architecting robust solutions tailored to
            the unique needs of large-scale businesses are what I do best. I am
            committed to staying up-to-date with the latest trends and best
            practices, ensuring that I can harness the full potential of web
            development tools to build cutting-edge applications.
          </p>
          <p className="text">
            From optimizing performance to integrating APIs and implementing
            dynamic features, my dedication and extensive knowledge make me an
            invaluable asset to your development team.
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
          className="grid-container technologies"
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
                      <h3 className="title experience">{data.position}</h3>
                      <p
                        className="text"
                        style={{ fontSize: "smaller", margin: 0 }}
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
      slug: "biztech-react-developer",
      title: "Biztech Eureka",
      position: "React JS Developer",
      date: "Dec 2021 - Now",
      description:
        "My experience building and maintaining web applications with React and Next.js",
      image: "/img/lead.jpg",
      blurImage: "LHL47{A0-TZgx]4o~qX8Q+D%W;s8",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Lead the development and delivery of web-based applications, providing technical expertise and guidance to a small team of developers.",
          details: [],
        },
        {
          description:
            "Designed and implemented scalable and maintainable web solutions using React, Next.js, Express, and AWS Technologies, ensuring high performance and optimal user experiences.",
          details: [],
        },
        {
          description:
            "Collaborated with stakeholders, including designers, product managers, and crossfunctional teams, to translate business requirements into technical specifications and actionable development plans.",
          details: [],
        },
        {
          description:
            "Conducted code reviews, ensuring adherence to coding standards, code quality, and performance optimization.",
          details: [],
        },
        {
          description:
            "Implemented and promoted Agile development methodologies, such as Scrum, facilitating effective project management, efficient collaboration, and on-time delivery.",
          details: [],
        },
        {
          description:
            "Researched and evaluated emerging web technologies and trends, recommending and implementing innovative solutions to enhance the company's web development capabilities.",
          details: [],
        },
        {
          description:
            "Actively contributed to architectural discussions and decisions, ensuring scalability, security, and maintainability of web applications.",
          details: [],
        },
        {
          description:
            "Kept up-to-date with industry trends and best practices in web development, continuously enhancing technical skills and knowledge.",
          details: [],
        },
      ],
    },
    {
      slug: "biztech-mobile-apps",
      title: "Humboldt Area Foundation",
      position: "Mobile Applications Developer",
      date: "Feb 2021 - Dec 2021",
      description:
        "What I learned about cross-platform development and the app stores.",
      image: "/img/mobile-app-dev.jpg",
      blurImage: "LHN0*haxyC9F+qbvkrDi?wo~xtR6",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Created mobile applications using React Native, resulting in published apps on both Google Play Store and iOS App Store.",
          details: [],
        },
        {
          description:
            "Collaborated with designers and product managers to define application features and user experience.",
          details: [],
        },
        {
          description:
            "Integrated backend APIs to fetch and update data, ensuring smooth data flow between frontend and backend systems.",
          details: [],
        },
        {
          description:
            "Conducted thorough testing, debugging, and performance optimization to deliver high quality user experiences.",
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
      date: "Aug 2020 - Feb 2021",
      description: "My first job in software development. Full Stack.",
      image: "/img/webdev.png",
      blurImage: "LSP%hmS$~T$$?akCWBjE?Yr=RkR.",
      stack: ["React", "AWS", "Wordpress", "mySql"],
      tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      details: [
        {
          description:
            "Developed web applications using Node.js, React, and Next.js, delivering high-quality, responsive websites.",
          details: [],
        },
        {
          description:
            "Collaborated with cross-functional teams to gather requirements and translate them into functional user interfaces.",
          details: [],
        },
        {
          description:
            "Implemented RESTful APIs to interact with backend services and ensured seamless integration with frontend components.",
          details: [],
        },
        {
          description:
            "Utilized Auth0 for authentication and Google Firebase for real-time data synchronization and cloud functions.",
          details: [],
        },
        {
          description:
            "Deployed applications on AWS and optimized performance using AWS services such as Amplify, EC2 and S3.",
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
