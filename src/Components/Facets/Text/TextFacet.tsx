import {
  FunctionComponent,
  useEffect,
  useState,
  useContext,
  memo,
} from "react";
import {
  RegularFacet as HeadlessFacet,
  RegularFacetValue,
} from "@coveo/headless/commerce";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import "./Facet.css";
import {
  Collapse,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import { chevronUp } from "react-icons-kit/feather/chevronUp";
import { Icon } from "react-icons-kit";
import FacetSkeleton from "../Generic/FacetSkeleton";
import TextFacetSearch from "./TextFacetSearch";

interface FacetProps {
  title: string | undefined;
  field: string;
}

interface FacetRendererProps extends FacetProps {
  controller: HeadlessFacet;
}

const FacetRenderer: FunctionComponent<any> = (props) => {
  const { controller } = props;
  const [state, setState] = useState(controller.state);
  const [collapse, setCollapse] = useState(true);
  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  const toggleSelect = (value: RegularFacetValue) => {
    controller.toggleSelect(value);
  };

  const showMore = () => {
    controller.showMoreValues();
  };

  const showLess = () => {
    controller.showLessValues();
  };

  // if(state.isLoading) {
  //   return <FacetSkeleton />;
  // }

  return (
        <>
          {state.values.length > 0 ? (
            <Wrapper>
              <Box mb={0} mr={3} p={1}>
                <Box
                  pb={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" component="h6">
                    {state.displayName}
                  </Typography>
                  <div
                    onClick={() => setCollapse(!collapse)}
                    style={{ cursor: "pointer" }}
                  >
                    {!collapse ? (
                      <Icon icon={chevronDown} size={20} />
                    ) : (
                      <Icon icon={chevronUp} size={20} />
                    )}
                  </div>
                </Box>
                {state.canShowMoreValues && <TextFacetSearch controller={controller} facetState={state}/>}
                <Collapse in={collapse}>
                  <List dense>
                    {state.values.map((value: RegularFacetValue) => {
                      const labelId = `checkbox-list-label-${value}`;

                      return (
                        <ListItem
                          style={{ padding: 0 }}
                          key={value.value}
                          role={undefined}
                          button
                          onClick={() => toggleSelect(value)}
                        >
                          <Checkbox
                            size="small"
                            edge="start"
                            checked={controller.isValueSelected(value)}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                          <ListItemText
                            className="truncate inline"
                            primary={`${value.value}`}
                            secondary={`(${value.numberOfResults})`}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                  {state.canShowLessValues && (
                    <Button size="small" onClick={() => showLess()}>
                      Show Less
                    </Button>
                  )}
                  {state.canShowMoreValues && (
                    <Button size="small" onClick={() => showMore()}>
                      Show More
                    </Button>
                  )}
                </Collapse>
              </Box>
            </Wrapper>
          ) : null}
        </>
  );
};

const Wrapper = styled.div`
  border: 1px #e5e8e8 solid;
  border-radius: 16px;
  padding: 24px 16px;
  margin-bottom: 20px;
  font-family: inherit;
`;

export default FacetRenderer;