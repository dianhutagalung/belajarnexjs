import { useRouter } from "next/router"
export default function detail() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>detail {id}</div>
  )
}
