import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface User{
    dataUsers:Array<any>;
}

export default function Users(props:User) {

    const {dataUsers} = props;
    const router = useRouter();
  return (
    <Layout pageTitle="Users page">
        <div className="grid md:grid-cols-3 gap-4">
            {dataUsers.map( user => {
                return(
                    <div key={user.id} className="relative bg-green-300 p-3  rounded">
                        <button className="text-left w-60" onClick={()=> router.push(`/users/${user.id}`)}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </button>
                        <div className="absolute top-0 right-0">{user.id}</div>
                    </div>
                )
            })}
        </div>
    </Layout>
  )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    return {
        props:{
            dataUsers,
        }
    }
}
