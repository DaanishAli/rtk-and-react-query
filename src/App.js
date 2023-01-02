import * as React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "./services/ApiSlice";

export default function App() {
  const [product, setProduct] = React.useState();
  // const [isProduct, setIsProduct] = React.useState(true);
  // Using a query hook automatically fetches data and returns query values
  const { data: allProductsData, isSuccess } = useGetAllProductsQuery();
  console.log(isSuccess);
  const { data, error, isError, isLoading } = useGetProductQuery("iphone", {
    skip: !isSuccess,
  });

  React.useEffect(() => {
    if (data) {
      setProduct([data]);
    }
  }, [data]);

  if (isLoading) return <h1>Loading..</h1>;
  return (
    <div className="App">
      {product &&
        product.map((item, index) => <h1 key={index}>{item.limit}</h1>)}
      {/* <button onClick={() => setIsProduct(!isProduct)}> fetch data</button> */}
    </div>
  );
}
