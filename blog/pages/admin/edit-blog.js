import axios from 'axios';
import { useRouter } from 'next/router';
const router = useRouter()
export async function getServerSideProps({ params }) {
  const { id } = router.query;
  const res = await axios.get(`https://my-api.com/data/${id}`);
  const data = res.data;
  return { props: { data } };
}

export default function DataPage({ data }) {
  return <div>{data.name}</div>;
}
