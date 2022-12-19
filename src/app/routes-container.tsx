import { AppBar, Grid, Tabs, Tab } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "one",
        element: <TabContent value={"one"} />,
      },
      {
        path: "two",
        element: <TabContent value={"two"} />,
      },
      {
        path: "three",
        element: <TabContent value={"three"} />,
      },
    ],
  },
]);


export function RoutesContainer() {

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar>app bar</AppBar>
      </Grid>
      <Grid item xs={12} height="auto">
        <Tabs
          sx={{ paddingTop: "10rem" }}
          value={window.location.pathname || "/one"}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" value="/one" href={"one"} />
          <Tab label="Item Two" value="/two" href={"two"} />
          <Tab label="Item Three" value="/three" href={"three"} />
        </Tabs>
      </Grid>
      <Grid item xs={12} height="auto">
        <RouterProvider router={router} />
      </Grid>

    </Grid>
  );
}

function TabContent({ value }: TabContentProps) {
  return (
    <div>Tab panel {value}</div>
  )
}

interface TabContentProps {
  value: string;
}
