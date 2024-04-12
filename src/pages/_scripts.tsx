import { Suspense, use } from "react";
import { getStreamResults } from "./_server.runtime";

export function Scripts() {
  const streamResults = getStreamResults();
  const promises = Object.values(streamResults);
  const paths = Object.keys(streamResults);

  return (
    <div>
      {promises.map((promise, index) => (
        <Suspense key={index} fallback={null}>
          <Script promise={promise} path={paths[index]} />
        </Suspense>
      ))}
    </div>
  );
}

export function Script(props: { promise: Promise<any>; path: string }) {
  const { promise, path } = props;
  const data = use(promise);
  const jsonData = JSON.stringify(data);

  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
              if (!window.streamData) {
                window.streamData = {};
              }
              window.streamData["${path}"] = ${jsonData};
            `,
      }}
    />
  );
}
