import fs from "fs";
import path from "path";
import matter from "gray-matter";

const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <div className="home">
      <h2>Welcom to H. M. Illustration</h2>

      {/* <div className="posts">
        {posts.map((post, index) => {
          <h2 key={index}>{post}</h2>;
        })}
      </div> */}
    </div>
  );
};

export default HomePage;

export async function getInitialProps() {
  const files = fs.readdirSync(path.join("posts"));

  console.log(posts);

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    console.log(markdownWithMeta);

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: "the posts",
    },
  };
}
