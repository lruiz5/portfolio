import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

const BaseLayout = (props) => {
  const { navClass = "with-bg", user, loading, children } = props;
  return (
    <div className="base-container">
      <Header className={navClass} user={user} loading={loading} />

      <main className={`main`}>
        <div className="wrapper">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
