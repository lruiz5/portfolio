import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import Image from "next/image";
import Separator from "components/Separator";

const AboutDetails = ({ experience }) => {
  return (
    <BaseLayout>
      <BasePage
        indexPage
        metaTitle={`${experience.position} - ${experience.title}`}
      >
        <div className="container">
          <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
            {experience.tags.map((tag) => (
              <p
                className="text"
                style={{ fontSize: "small", color: "plum" }}
                key={tag}
              >
                #{tag}
              </p>
            ))}
          </div>
          <h1
            className="title"
            style={{ textAlign: "start", fontSize: "4rem" }}
          >
            {experience.title} - {experience.position}
          </h1>
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <p className="text">📅 {experience.date}</p>
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
            />
          </div>
          <div
            className="mt-2"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              className="px-4 pt-2 rounded-3"
              style={{
                backgroundColor: "rgb(241, 241, 239)",
                verticalAlign: "center",
              }}
            >
              <h3 className="text" style={{ fontWeight: "normal" }}>
                {experience.description}
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: "smaller" }}>
              {experience.stack.join(", ")}
            </p>
          </div>
        </div>
        <Separator />
        <div className="container">
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
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticPaths = async () => {
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
