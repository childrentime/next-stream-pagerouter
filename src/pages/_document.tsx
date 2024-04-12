import { Html, Head, Main, NextScript } from "next/document";
import { Scripts } from "./_scripts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* <Scripts/> */}
        <NextScript />
      </body>
    </Html>
  );
}
