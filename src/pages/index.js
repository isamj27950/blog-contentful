import Layout from "@/components/Layout/Layout"
import Card from "@/components/cards/Card";
import{ createClient} from "contentful";
import Link from "next/link";

export default function Home({posts}) {
  console.log(posts);
  return (
    <Layout>
      <h1 className="text-blue-500">Hello</h1>
      {
        posts.map(post=>(
          <Link href={`post/${post.fields.slug}`}
          key={post.sys.id} > 
          <Card 
          img={post.fields.featuredImage.fields.file.url}
          title={post.fields.title} 
          excerpt={post.fields.excerpt}  
          />
          </Link>
        ))
      }
    </Layout>
  )}

  export async function getStaticProps( ) {
//1 connect to contentful
const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2 recuperer data en cas de success pour le content_type => escciBlog
//je limite a 8 posts
const data = await client.getEntries({
  content_type:"escciBlog",
  order:"sys.createdAt",
  limit: 8,
});

console.log(data);
//3.on envoie la data ds le props de ma page
return{
  props:{
    posts:data.items,
    }
  }     
}         