import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>$HUMAN — Stay Human</title>
        <meta
          name="description"
          content="$HUMAN — the last human meme coin in a market run by bots."
        />
      </Head>
      <iframe
        title="$HUMAN — Stay Human"
        src="/site.html"
        style={{ width: "100vw", height: "100vh", border: 0, display: "block" }}
      />
    </>
  );
}
