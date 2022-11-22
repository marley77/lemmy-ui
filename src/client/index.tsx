import { hydrate } from "inferno-hydrate";
import { BrowserRouter } from "inferno-router";
import { App } from "../shared/components/app/app";
import { initializeSite } from "../shared/utils";

const site = window.isoData.site_res;
initializeSite(site);

const wrapper = (
<div><p>hiiiiiiiiiiii</p></div>
  <BrowserRouter>
    <App siteRes={window.isoData.site_res} />
  </BrowserRouter>
<div><p>hiiiiiiiiiiii</p></div>
);

hydrate(wrapper, document.getElementById("root"));
