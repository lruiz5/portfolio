import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import Container from "components/Container";
import Link from "next/link";
import Button from "components/Button";
import Title from "components/Title";
import Text from "components/Text";
import Grid from "components/Grid";
import styled from "styled-components";
import List from "components/List";

const ProjectImage = styled.img({
  width: "100%",
  height: "367px",
  objectFit: "cover",
  borderRadius: "4px",
  transition: "0.2s ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const ProjectContainer = styled(Container)({
  flexDirection: "column",
  alignItems: "flex-start",
  gridGap: "1.5rem",
  width: "100%",
  "&:hover > *img": {
    transform: "scale(1.03)",
  },
});

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
        <Container alignItems="center">
          <Title>Projects</Title>
          <Text textAlign="center">
            I&apos;m always working on new projects. <br />
            You can find them on my&nbsp;
            <a href="https://github.com/lruiz5">Github</a>.
          </Text>
        </Container>
        <Grid
          py="4rem"
          gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
          width="100%"
          gridGap="10%"
        >
          {projects.map(({ data }) => (
            <ProjectContainer key={data.slug}>
              <Link href={data.url} width="100%">
                <ProjectImage src={data.preview} />
              </Link>
              <Container
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Link href={data.url}>
                  <Title fontSize="2rem" as="h2">
                    {data.title}
                  </Title>
                </Link>
                <Link href={data.url}>
                  <ProjectButton variant="secondary">
                    View Project
                  </ProjectButton>
                </Link>
              </Container>
              <Container gridGap="1rem">
                <Text
                  textAlign="start"
                  margin={0}
                  lineHeight="180%"
                  letterSpacing="0.02rem"
                >
                  {data.caption}
                </Text>
                {
                  <List marginY="1rem">
                    {data.tags.map((tag) => (
                      <ProjectTag key={tag}>{tag}</ProjectTag>
                    ))}
                  </List>
                }
              </Container>
            </ProjectContainer>
          ))}
        </Grid>
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
        title: "DocuSign Online Form",
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
