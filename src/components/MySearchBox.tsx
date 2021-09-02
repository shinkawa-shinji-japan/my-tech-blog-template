import * as React from "react";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";

const searchClient = algoliasearch(
  "IJHEWO1FRR",
  "3cdac3eb34cf5bf394e477e1584d8ef8"
);

const MyHits = ({ hits }: any) => (
  <List
    dense
    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
  >
    {hits.map((hit: any) => {
      const labelId = `checkbox-list-secondary-label-${hit.slug}`;
      return (
        <NextLink href={`/blog/${hit.slug}`} passHref>
          <MuiLink variant="subtitle1">
            <ListItem
              key={hit}
              sx={{
                marginBottom: 1,
                boxShadow:
                  "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={hit.title} />
              </ListItemButton>
            </ListItem>
          </MuiLink>
        </NextLink>
      );
    })}
  </List>
);

const CustomHits = connectHits(MyHits);

const MySearchBox = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Box mb={3}>
      <InstantSearch
        indexName="paths_are"
        searchClient={searchClient}
        onSearchStateChange={(searchState) => {
          setSearchQuery(searchState.query);
        }}
      >
        <SearchBox />
        {searchQuery.length > 0 ? (
          <div style={{ position: "absolute", zIndex: 100, width: "100%" }}>
            <CustomHits />
          </div>
        ) : null}
      </InstantSearch>
    </Box>
  );
};
export default MySearchBox;