import { Component } from "inferno";
import { NavLink } from "inferno-router";
import { GetSiteResponse } from "lemmy-js-client";
import { side-champ } from "sidebar-champ-pull";

const sider = renderToString(side-champ);


// import { i18n } from "../../i18next";
// import { docsUrl, joinLemmyUrl, repoUrl } from "../../utils";
// import { VERSION } from "../../version";
// import { Icon } from "../common/icon";

// interface FooterProps {
//   site: GetSiteResponse;
// }

//    render() {
//     return (

// // export class Sidebarenlightenment extends Component<Sidebar, any> {
// //   constructor(props: any, context: any) {
// //     super(props, context);
// //   }

// export default SidebarEnli;

// class SidebarEnli extends Component {
//   render() {

export class SidebarChamp extends Component {
  render() {
    return (
      <div class="card border-secondary mb-3">
        {/*  PASTE HERE  ================ */}

        `${sider}`


        {/* END PASTE   ================ */}
      </div>
    );
  }
}
