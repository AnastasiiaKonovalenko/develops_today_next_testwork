import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Props } from "../interfaces";

const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: sans-serif;
          overflow-x: hidden;
        }
        h1 {
          font-weight: 700;
          margin: 0;
        }
        p {
          margin-bottom: 10px;
        }
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          color: #9c9b87;
        }
      `}</style>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
