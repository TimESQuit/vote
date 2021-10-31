import React from "react";
import { Button, Container } from "@mui/material";
import { withParentSize } from "@visx/responsive";
import { Box } from "@mui/system";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import HorizontalBarStack from "../../components/horizontalBarStack";
import { selectData, selectKeys } from "../../election/electionSelectors";
import { increment, decrement } from "../../app/store";

const ElectionGraph = () => {
  const data = useAppSelector(selectData);
  const keys = useAppSelector(selectKeys);

  // Redux 'counter' test
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Container sx={{ width: "848px" }}>
      <HorizontalBarStack data={data} keys={keys} />
      <Box
        sx={{ width: "800px", display: "flex" }}
        justifyContent="space-between"
      >
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          Prev
        </Button>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          Next
        </Button>
      </Box>
      <div>{counter}</div>
    </Container>
  );
};

export const responsiveElectionGraph = withParentSize(ElectionGraph);

export default ElectionGraph;
