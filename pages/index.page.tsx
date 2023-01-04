import Head from "next/head";
import React, { useState } from "react";
import { Container } from "@mui/material";
import theme from "styles/theme";

import { SearchForm } from "./Form";
import { List, LoadingList, T_List } from "./Location/List";

export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<T_List>(undefined);

  const handleReset = () => {
    setList(undefined);
  };

  return (
    <>
      <Head>
        <title>Search Nearby Activity!</title>
        <meta name="description" content="Search Nearby Activity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh",
          padding: theme.spacing(3),
        }}
      >
        {!list && !isLoading && (
          <SearchForm setLoading={setLoading} setList={setList} />
        )}
        {isLoading ? (
          <LoadingList />
        ) : (
          <List data={list} handleReset={handleReset} />
        )}
      </Container>
    </>
  );
}
