import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>nextjs-metadata</h1>
      <p>
        This is a project to test Next.js Metadata API. It contains two pages -
        homepage and a subpage, each with different title and description
        metadata.
      </p>
      <a href="/subpage">Navigate to subpage</a>
    </main>
  );
}
