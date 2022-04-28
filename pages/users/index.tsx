import Layout from "../../components/Layout";

export default function Users({dataUsers}) {
    console.log(dataUsers);
  return (
    <Layout pageTitle="Users page">
        {dataUsers.map(user => {
            return(
                <>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </>
            )
        })}
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
