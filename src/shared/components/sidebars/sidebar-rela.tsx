import { Component } from "inferno";
import { NavLink } from "inferno-router";
import { GetSiteResponse } from "lemmy-js-client";
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

export class SidebarRela extends Component {
  render() {
    return (
      <div class="card border-secondary mb-3">
        {/*  PASTE HERE  ================ */}

        <div class="inner">
          <div class="post-feed">
            <article
              class="post-card post"
              style="margin-left: 8px; margin-right: 8px; margin-bottom: 20px;"
            >
              <a
                class="post-card-image-link"
                href="//biglifeboost.quest/wisdom/new-friend/"
              >
                <div class="post-card-image" style="">
                  <img src="//biglifeboost.quest/wisdom/img/new-friend.jpg" />
                </div>
              </a>

              <div class="post-card-content">
                <a
                  class="post-card-content-link"
                  href="//biglifeboost.quest/wisdom/new-friend/"
                >
                  <header class="post-card-header">
                    <h2 class="post-card-title">
                      How to Make a New Best Friend
                    </h2>
                  </header>
                  <section class="post-card-excerpt" id="jolt">
                    <p>
                      <blockquote>
                        <ul>
                          <li>Be yourself completely</li>
                          <li>Join them in their world</li>
                          <li>Open your world to them</li>
                        </ul>
                      </blockquote>
                      <p>I’m all alone now in a town where I know no one. </p>
                      <p>
                        It’s 100 degrees out and there’s no way to escape it, so
                        I decide to drive up the town’s tallest mountain to see
                        the highest view.
                      </p>
                      <p>
                        Driving up the mountain road, I see ahead in the
                        distance&hellip;a strange green streak carving fast down
                        the mountain.
                      </p>
                      <p>
                        Closer comes the streak and I see it’s a young guy
                        crouched low on a longboard, swerving with arms out for
                        balance, green shirt fluttering, leaned into the
                        wind&hellip;and this is how I met my new good buddy
                      </p>{" "}
                      <span id="contblue">[continue ➾]</span>{" "}
                    </p>
                  </section>
                </a>

                <footer class="post-card-meta">
                  <span class="post-card-tags">#relationships </span>

                  <img
                    class="author-profile-image"
                    src="//biglifeboost.quest/wisdom/img/bzwiz.png"
                    alt="Author"
                  />
                  <span class="post-card-author">
                    <a href="//biglifeboost.quest/wisdom/">boost wizard</a>
                  </span>
                </footer>
              </div>
            </article>

            <article
              class="post-card post"
              style="margin-left: 8px; margin-right: 8px; margin-bottom: 20px;"
            >
              <a
                class="post-card-image-link"
                href="//biglifeboost.quest/wisdom/break-up/"
              >
                <div class="post-card-image" style="">
                  <img src="//biglifeboost.quest/wisdom/img/break-up.jpg" />
                </div>
              </a>

              <div class="post-card-content">
                <a
                  class="post-card-content-link"
                  href="//biglifeboost.quest/wisdom/break-up/"
                >
                  <header class="post-card-header">
                    <h2 class="post-card-title">How to Get Over a Break-Up</h2>
                  </header>
                  <section class="post-card-excerpt" id="jolt">
                    <p>
                      <p>First&hellip;I understand…</p>
                      <p>
                        I know how it feels to love and be loved for exactly
                        what you are…all your scars and all your brightness too.
                        I know what it is to miss that and feel like
                        there&rsquo;s nothing left without it.
                      </p>
                      <p>
                        To lay awake at night and think maybe it would have
                        played out different if this or that.
                      </p>
                      <p>But you cannot go backwards in life.</p>
                      <p>There is only now and the future. That&rsquo;s it.</p>
                      <p>
                        Let it go. Let them go. Focus your energy on stuff you
                        love doing.
                      </p>{" "}
                      <span id="contblue">[continue ➾]</span>{" "}
                    </p>
                  </section>
                </a>

                <footer class="post-card-meta">
                  <span class="post-card-tags">#relationships </span>

                  <img
                    class="author-profile-image"
                    src="//biglifeboost.quest/wisdom/img/bzwiz.png"
                    alt="Author"
                  />
                  <span class="post-card-author">
                    <a href="//biglifeboost.quest/wisdom/">boost wizard</a>
                  </span>
                </footer>
              </div>
            </article>
          </div>

          <nav class="pagination" role="navigation">
            <span class="page-number">
              <span class="hide">Page 1 of 1</span>&nbsp;
            </span>
          </nav>
        </div>

        {/* END PASTE   ================ */}
      </div>
    );
  }
}
