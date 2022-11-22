import axios from 'axios';
import { useEffect,useState } from "react";

function ProxyTest() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/survey/1/receiver')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

  return (

    <div className="App">
      <h1>hi</h1>
      <h1>백엔드에서 가져온 데이터입니다 : {JSON.stringify(hello)}</h1>
    </div>

  );
}

export default ProxyTest;