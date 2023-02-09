import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import Link from "next/link";
import { Button } from "reactstrap";
import styled from "styled-components";

const ProjectTag = styled.li`
  color: rgb(105, 105, 105);
  font-size: 13px;
  letter-spacing: 0.03em;
`;

const ProjectButton = styled(Button)({
  padding: "12px 30px",
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
            <a href="https://github.com/lruiz5">Github</a>.
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
              <Link href={data.url} width="100%">
                <img className="project-image" src={data.preview} />
              </Link>
              <div
                className="container full-width"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href={data.url}>
                  <h2 className="title" style={{ fontSize: "2rem" }}>
                    {data.title}
                  </h2>
                </Link>
                <Link href={data.url}>
                  <Button
                    size="md"
                    className="custom-button secondary project-button"
                  >
                    View Project
                  </Button>
                </Link>
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
        url: "https://account.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=f19d49ee-ed75-4a74-aa70-1c2213a9d290&redirect_uri=https://apply.northforklumbercompany.com",
        slug: "nfl-jobs",
        title: "SignAssure",
        caption:
          "A responsive, scalable online application that allows for identity verification using Embedded Signing via DocuSign's API.",
        preview: "/img/nfl-docusign-promo.webp",
        tags: ["Next.js", "AWS", "Vercel", "Docusign API"],
      },
    },
    {
      data: {
        url: "",
        slug: "nfl-saws",
        title: "LumberLogger",
        caption:
          "A real-time collaborative data tracking program complete with Admin Portal. Build with Next.js, Prisma, and SQLite.",
        preview: "/img/nflc-saws-promo.webp",
        tags: ["Next.js", "Prisma", "SQLite"],
      },
    },
  ];

  return {
    props: {
      projects,
    },
  };
};
