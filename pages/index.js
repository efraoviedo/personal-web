import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-2 md:px-2 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <footer className="pt-6">
        <span
          className="bg-gray-900  text-white w-full h-32 
      grid items-center justify-evenly text-xs md:text-base md:flex rounded-md"
        >
          Atencion Personalizada. {""}
          <p className="hover:text-cyan-500">Contacto: Bogota Colombia.</p>
          <p className="hover:text-cyan-500">Telefono: 57 320 2937958</p>
          <p className="hover:text-cyan-500">Email: efraoviedo@gmail.com</p>
        </span>
      </footer>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
