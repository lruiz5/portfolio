import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "reactstrap";
import styled from "styled-components";

const ProjectTag = styled.li`
  color: rgb(105, 105, 105);
  font-size: 13px;
  letter-spacing: 0.03em;
`;

const ProjectButton = styled(Button)({
  padding: "10px 25px",
});
export default function Projects({ projects }) {
  return (
    <BaseLayout>
      <BasePage>
        <div className="container" style={{ alignItems: "center" }}>
          <h1 className="title">Projects</h1>
          <p className="text" style={{ textAlign: "center" }}>
            I&apos;m always working on new projects. <br />
            You can find them on my&nbsp;
            <Link href="https://github.com/lruiz5" target={"_blank"}>
              Github
            </Link>
            .
          </p>
        </div>
        <div
          className="grid-container full-width responsive-grid"
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10%",
          }}
        >
          {projects.map(({ data }) => (
            <div className="project-container" key={data.slug}>
              <Link
                href={data.url}
                width="100%"
                target={"_blank"}
                referrerPolicy="no-referrer"
              >
                <Image
                  className="project-image"
                  src={data.preview}
                  alt={data.slug}
                  width={500}
                  height={250}
                />
              </Link>
              <div
                className="container full-width"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 className="title" style={{ fontSize: "2rem" }}>
                  {data.title}
                </h2>

                {data.url != "" && (
                  <Link
                    href={data.url}
                    target={"_blank"}
                    referrerPolicy="no-referrer"
                  >
                    <ProjectButton
                      size="md"
                      className="custom-button secondary project-button"
                    >
                      View Project
                    </ProjectButton>
                  </Link>
                )}
              </div>
              <div className="container" style={{ gap: "1rem" }}>
                <p
                  className="text"
                  style={{
                    textAlign: "start",
                    margin: 0,
                    lineHeight: "180%",
                    letterSpacing: "0.02rem",
                  }}
                >
                  {data.caption}
                </p>
                {
                  <ul
                    className="list"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    {data.tags.map((tag) => (
                      <ProjectTag key={tag}>{tag}</ProjectTag>
                    ))}
                  </ul>
                }
              </div>
            </div>
          ))}
        </div>
      </BasePage>
    </BaseLayout>
  );
}

export const getStaticProps = async () => {
  let projects = [
    {
      data: {
        url: "https://nextchat.rzhomelab.com",
        slug: "next-chat",
        title: "NextChat",
        caption:
          "An interactive chatbot experience powered by OpenAI's GPT-4 API. Built with Next.js and Tailwindcss.",
        preview: "/img/nextchat-promo.webp",
        tags: ["Next.js", "OpenAI", "Tailwindcss", "Vercel"],
      },
    },
    {
      data: {
        url: "https://tasteandsee.luisruiz.me",
        slug: "taste-and-seee",
        title: "Taste & See",
        caption:
          "My online recipe book. Create/Edit/Delete options with admin login. Built with React.js, Firebase Authentication and Firestore.",
        preview: "/img/tns-promo.webp",
        tags: ["React", "Firebase Auth", "Firebase Firestore", "Vercel"],
      },
    },
    {
      data: {
        url: "https://bloomify.luisruiz.me",
        slug: "bloomify",
        title: "Bloomify",
        caption:
          "An e-commerce shop that showcases React Route Handling, Authentication, and API's.",
        preview: "/img/bloomify-promo.webp",
        tags: ["React", "json-server", "json-server-auth", "Netlify"],
      },
    },

    {
      data: {
        url: "https://account.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=f19d49ee-ed75-4a74-aa70-1c2213a9d290&redirect_uri=https://apply.northforklumbercompany.com",
        slug: "nfl-jobs",
        title: "SignAssure",
        caption:
          "A responsive, scalable online application that allows for identity verification using Embedded Signing via DocuSign's API.",
        preview: "/img/nfl-docusign-promo.webp",
        tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      },
    },
    /* {
      data: {
        url: "",
        slug: "nfl-saws",
        title: "LumberLogger",
        caption:
          "A real-time collaborative data tracking program complete with Admin Portal. Build with Next.js, Prisma, and SQLite.",
        preview: "/img/nflc-saws-promo.webp",
        tags: ["Next.js", "Prisma", "SQLite"],
      },
    }, */
  ];

  return {
    props: {
      projects,
    },
  };
};
