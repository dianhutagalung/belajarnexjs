import Layout from "../components/Layout"

interface Post{
  id:number;
  title: string;
  body: string;
}

interface blogProps  {
  dataBlog:Post[]
}

const blog = (props:blogProps) => {
  const {dataBlog} = props;
  return (
    <Layout pageTitle='Blog Page'>
      <div className="grid grid-flow-row gap-4">
        {dataBlog.map(blog =>{
          return(
            <div className=" shadow-md" key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default blog;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  
  return{
    props:{
      dataBlog,
    }
  }
}