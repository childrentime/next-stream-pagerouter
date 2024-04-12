import { Inter } from "next/font/google";
import { Suspense, use } from "react";
import streamRequests, { getData1Key } from "./data";
import { getStreamResults, setStreamResults } from "./_server.runtime";

const inter = Inter({ subsets: ["latin"] });

const promise = new Promise((resolve) => setTimeout(() => {
  resolve(1000);
}, 5000));
const StreamAbleComponent = () => {
  // const promise = getStreamResults()[getData1Key];
  const data = use(promise);
  console.log('data',data);
  return (
    <div>
      stream suspense
      {/* <span suppressHydrationWarning>{JSON.stringify(data)}</span> */}
    </div>
  );
};
export default function Home(props: any) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
      <div>hello world</div>
      <Suspense fallback="loading">
        <StreamAbleComponent />
      </Suspense>
    </main>
  );
}

export async function getServerSideProps() {
  // mock long rt request, it need to be streamed to pass data to clien
  // const streamResults: Record<string, Promise<any>> = {};
  // for (let key of Object.keys(streamRequests)) {
  //   // @ts-ignore
  //   const promise = streamRequests[key] as () => Promise<any>;
  //   streamResults[key] = promise();
  // }
  // setStreamResults(streamResults);
  // mock ssr request
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    props: {
      data: "data1",
    },
  };
}
