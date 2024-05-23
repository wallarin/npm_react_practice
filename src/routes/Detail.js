import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const {id} = useParams();
  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json) // 해당 페이지로 접근시 로딩 처리, 데이터를 출력시켜보기
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;