import Container from "components/Container";
import Title from "components/Title";
import Text from "components/Text";
import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import Image from "next/image";
import Separator from "components/Separator";

const AboutDetails = ({ experience }) => {
  console.log(experience);
  return (
    <BaseLayout>
      <BasePage
        indexPage
        metaTitle={`${experience.position} - ${experience.title}`}
      >
        <Container>
          <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
            {experience.tags.map((tag) => (
              <Text fontSize="small" color="plum" key={tag}>
                #{tag}
              </Text>
            ))}
          </div>
          <Title style={{ textAlign: "start" }} fontSize={["2.5rem", "4rem"]}>
            {experience.title} - {experience.position}
          </Title>
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Text>📅 {experience.date}</Text>
            <a href={experience.link}>🔗 Website</a>
          </div>
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src={experience.image}
              alt={experience.positon}
              fill={true}
              style={{ objectFit: "fill" }}
              placeholder="blur"
              blurDataURL="LAL}W_WC00WAH;-:IVxu00M{~pof"
              S
            />
          </div>
          <div
            className="mt-2"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              className="px-4z pt-2 rounded-3"
              style={{
                backgroundColor: "rgb(241, 241, 239)",
                verticalAlign: "center",
              }}
            >
              <Text as="h3" fontWeight="normal">
                {experience.description}
              </Text>
            </div>
            <Text m="0" fontSize="smaller">
              {experience.stack.join(", ")}
            </Text>
          </div>
        </Container>
        <Separator />
        <Container>
          <ul style={{ lineHeight: "2.25em" }}>
            {experience.details.map((detail, index) => {
              return (
                <>
                  <li key={index}>{detail.description}</li>
                  {detail.details.length > 0 && (
                    <ul>
                      {detail.details.map((subdetail, subindex) => {
                        return <li key={subindex}>{subdetail}</li>;
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </ul>
        </Container>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticPaths = async () => {
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
    paths: experiences.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
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
  const experience = experiences.find(
    (experience) => experience.slug === params?.slug
  );
  if (!experience) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      experience,
    },
  };
};

export default AboutDetails;
