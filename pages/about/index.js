import React from "react";
import Text from "components/Text";
import Title from "components/Title";
import Container from "components/Container";
import Grid from "components/Grid";
import Link from "next/link";
import Card from "components/Card";
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
import TransparentLink from "components/TransparentLink";

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
      <Container alignContent="center" alignItems="center">
        <Title fontSize={["3rem", "4rem"]} as="h2">
          Passionate Software Developer
        </Title>
        <Container maxWidth={["100%", "720px"]} marginY="2rem">
          <Text>I&apos;m a Full-Stack/DevOps developer living in Eureka.</Text>
          <Text>
            I find my joy in my faith in Jesus Christ, the peaceful atmosphere
            of the beach and the satisfaction and pleasure of creating something
            from scratch. These three things are important aspects of my life
            and are integral to who i am. The natural beauty of the beach, and
            the process of baking bread allow me to tap into my creativity and
            practice patience and attention to detail.
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          Technologies I frequently use
        </Title>
        <Grid
          gridTemplateColumns={["repeat(3 , 1fr)", "repeat(6 , 1fr)"]}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          Work Experiences
        </Title>
        <Container width="100%">
          {experiences.map((data, i) => (
            <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
              <Grid
                key={i}
                gridTemplateColumns="1fr 4fr"
                justifyItems="flex-start"
                gridGap="1rem"
                paddingY="2rem"
                borderBottom="1px solid rgba(0,0,0,0.1)"
              >
                <Container width="100%">
                  <Text>0{experiences.length - i}</Text>
                </Container>
                <Grid width="100%" gridTemplateColumns="4fr 1fr">
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      gridTemplateColumns="repeat(2, auto)"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.5rem" margin={0} as="h3">
                        {data.position}
                      </Title>
                      <Text fontSize="smaller" margin={0}>
                        {data.date}
                      </Text>
                    </Grid>
                    <Text fontSize="1rem">{data.description}</Text>
                  </Container>
                  <Text fontSize="1.5rem">&rarr;</Text>
                </Grid>
              </Grid>
            </TransparentLink>
          ))}
        </Container>
      </Container>
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
        "Discover more about experience as a Lead Software Developer.",
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
        "Discover more about my first experience as a DevOps Engineer",
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
      description: "What I learned about the app store.",
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
      description: "My first job in tech.",
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
