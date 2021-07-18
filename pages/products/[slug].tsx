import products from "../../data/products.json";
import getSlug from "../../utils/get-slug";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export default function SingleProduct() {
  return <div>fsd</div>;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = products.map((post) => {
    return {
      params: { slug: getSlug(post.title, post.id) },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params !== undefined ? ctx.params.slug : "";
  console.log(slug);
  return {
    props: {
      postsData: "",
      error: false,
    },
  };
};
