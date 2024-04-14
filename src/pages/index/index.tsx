import React, { Suspense, useEffect } from "react";
import { Box, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { Welcome } from "./welcome";
import { Banner } from "./banner";
import { Categories } from "./categories";
import { Recommend } from "./recommend";
import { ProductList } from "./product-list";
import { Divider } from "components/divider";

const HomePage: React.FunctionComponent = () => {
  // useEffect(() => {
  //   fetch(
  //     "https://notionapi.longnt-en.workers.dev/https://api.notion.com/v1/databases/5b19c7b7f122477d83426381412e4ba7/query",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Notion-Version": "2022-06-28",
  //         Authorization: `Bearer secret_A6BZNUN147ukm18683mwktO8V6neuaD3wsdR4Kjnjlv`,
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Inquiry />
        <Banner />
        <Suspense>
          <Categories />
        </Suspense>
        <Divider />
        <Recommend />
        <Divider />

        {/* Danh sách sản phẩm */}
        <ProductList />
        <Divider />
      </Box>
    </Page>
  );
};

export default HomePage;
