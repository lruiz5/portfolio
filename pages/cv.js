import { Container, Row, Col } from "reactstrap";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Portfolio - Luis Ruiz">
        <main className="main">
          <div className="description">
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="vercelLogo"
                  width={100}
                  height={24}
                  priority
                />
              </a>
              <h1>CV</h1>
            </div>
          </div>

          <div className="grid"></div>
        </main>
      </BasePage>
    </BaseLayout>
  );
}
