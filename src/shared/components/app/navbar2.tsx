import { Component, createRef, linkEvent, RefObject } from "inferno";
import { NavLink } from "inferno-router";
import {
  CommentResponse,
  GetReportCount,
  GetReportCountResponse,
  GetSiteResponse,
  GetUnreadCount,
  GetUnreadCountResponse,
  GetUnreadRegistrationApplicationCount,
  GetUnreadRegistrationApplicationCountResponse,
  PrivateMessageResponse,
  UserOperation,
} from "lemmy-js-client";
import { Subscription } from "rxjs";
import { i18n } from "../../i18next";
import { UserService, WebSocketService } from "../../services";
import {
  authField,
  donateLemmyUrl,
  getLanguages,
  isBrowser,
  notifyComment,
  notifyPrivateMessage,
  numToSI,
  setTheme,
  showAvatars,
  toast,
  wsClient,
  wsJsonToRes,
  wsSubscribe,
  wsUserOp,
} from "../../utils";
import { Icon } from "../common/icon";
import { PictrsImage } from "../common/pictrs-image";

interface NavbarProps {
  site_res: GetSiteResponse;
}

interface NavbarState {
  isLoggedIn: boolean;
  expanded: boolean;
  unreadInboxCount: number;
  unreadReportCount: number;
  unreadApplicationCount: number;
  searchParam: string;
  toggleSearch: boolean;
  showDropdown: boolean;
  onSiteBanner?(url: string): any;
}

export class Navbar extends Component<NavbarProps, NavbarState> {
  private wsSub: Subscription;
  private userSub: Subscription;
  private unreadInboxCountSub: Subscription;
  private unreadReportCountSub: Subscription;
  private unreadApplicationCountSub: Subscription;
  private searchTextField: RefObject<HTMLInputElement>;
  emptyState: NavbarState = {
    isLoggedIn: !!this.props.site_res.my_user,
    unreadInboxCount: 0,
    unreadReportCount: 0,
    unreadApplicationCount: 0,
    expanded: false,
    searchParam: "",
    toggleSearch: false,
    showDropdown: false,
  };
  subscription: any;

  constructor(props: any, context: any) {
    super(props, context);
    this.state = this.emptyState;

    this.parseMessage = this.parseMessage.bind(this);
    this.subscription = wsSubscribe(this.parseMessage);
  }

  componentDidMount() {
    // Subscribe to jwt changes
    if (isBrowser()) {
      this.searchTextField = createRef();
      console.log(`isLoggedIn = ${this.state.isLoggedIn}`);

      // On the first load, check the unreads
      if (this.state.isLoggedIn == false) {
        // setTheme(data.my_user.theme, true);
        // i18n.changeLanguage(getLanguage());
        // i18n.changeLanguage('de');
      } else {
        this.requestNotificationPermission();
        WebSocketService.Instance.send(
          wsClient.userJoin({
            auth: authField(),
          })
        );
        this.fetchUnreads();
      }

      this.userSub = UserService.Instance.jwtSub.subscribe(res => {
        // A login
        if (res !== undefined) {
          this.requestNotificationPermission();
          WebSocketService.Instance.send(
            wsClient.getSite({ auth: authField() })
          );
        } else {
          this.setState({ isLoggedIn: false });
        }
      });

      // Subscribe to unread count changes
      this.unreadInboxCountSub =
        UserService.Instance.unreadInboxCountSub.subscribe(res => {
          this.setState({ unreadInboxCount: res });
        });
      // Subscribe to unread report count changes
      this.unreadReportCountSub =
        UserService.Instance.unreadReportCountSub.subscribe(res => {
          this.setState({ unreadReportCount: res });
        });
      // Subscribe to unread application count
      this.unreadApplicationCountSub =
        UserService.Instance.unreadApplicationCountSub.subscribe(res => {
          this.setState({ unreadApplicationCount: res });
        });
    }



 //YOUTUBE
  (function() {
        var v = document.getElementsByClassName("youtube-player");
        for (var n = 0; n < v.length; n++) {
            var p = document.createElement("div");
            p.innerHTML = thumbnailYT(v[n].dataset.id);
            p.onclick = iframeYT;
            v[n].appendChild(p);
        }
    })();
     
    function thumbnailYT(id) {
        return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
    }
     
    function iframeYT() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&showinfo=0&rel=0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("id", "youtube-iframe");
        this.parentNode.replaceChild(iframe, this);
    }


  }

  componentWillUnmount() {
    this.wsSub.unsubscribe();
    this.userSub.unsubscribe();
    this.unreadInboxCountSub.unsubscribe();
    this.unreadReportCountSub.unsubscribe();
    this.unreadApplicationCountSub.unsubscribe();
  }

  updateUrl() {
    const searchParam = this.state.searchParam;
    this.setState({ searchParam: "" });
    this.setState({ toggleSearch: false });
    this.setState({ showDropdown: false, expanded: false });
    if (searchParam === "") {
      this.context.router.history.push(`/search/`);
    } else {
      const searchParamEncoded = encodeURIComponent(searchParam);
      this.context.router.history.push(
        `/search/q/${searchParamEncoded}/type/All/sort/TopAll/listing_type/All/community_id/0/creator_id/0/page/1`
      );
    }
  }



 



// THE RENDER - qz3 ========================================================= 
  render() {

    return this.navbar();
  }

  // TODO class active corresponding to current page
  navbar() {

    function boostmenu() {
      // BOOST MENU -- qz3 =========================================================
      var x = document.getElementById("bm-wrap");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

      document.onclick = function(e){
        if(e.target.id == 'darkfill'){
            x.style.display = 'none';
        }
      };
    }


    let myUserInfo =
      UserService.Instance.myUserInfo || this.props.site_res.my_user;
    let person = myUserInfo?.local_user_view.person;



    // // TEMP DISALBE MENUS FOR GUESTS
    // if (person = null) {
    //   u = document.getElementsByClassName("newmenu")[0];
    //   u.style.height = '0px';
    
    //   h = document.getElementsByClassName("mobile-app-icon-bar")[0];
    //   h.style.height = '0px';
    // }


    return (

<div> {/* wrapper div   ================ */}

<div class="newmenu"  style="cursor: pointer;"> 
{/*    <a href="https://biglifeboost.quest/u/blq" id="profie"><img id="avi" src="//biglifeboost.quest/wisdom/img/bzwiz.png" height="50" width="50" /></a>
  ================ */}


{this.state.isLoggedIn ? (
  <>
    <a href={`/u/${UserService.Instance.myUserInfo.local_user_view.person.name}`} id="profie">
      {person.avatar ?  
        <img id="avi" src={person.avatar} height="50" width="50" /> : 
        <img id="avi" src="//biglifeboost.quest/wisdom/img/bzwiz.png" height="50" width="50" />
      }
    </a>
  </>
  ) : ( 
     <a href={`/signup`} id="profie">
        <img id="avi" src="//biglifeboost.quest/wisdom/img/bzwiz.png" height="50" width="50" />
    </a>
  )} 


{/* NEW PROFIE ATTEMPT   ================= 
                  <NavLink
                    to={`/u/${UserService.Instance.myUserInfo.local_user_view.person.name}`}
                    className="nav-link"
                    title={i18n.t("profile")}
                    id="avi"
                  >
                    <span>
                      {person.avatar && showAvatars() && (
                        <PictrsImage src={person.avatar} icon />
                      )}
                    </span>
                  </NavLink>
*/}




{/* notifications if logged   ================ */}
          {this.state.isLoggedIn && (
            <>

            <span id="dabell">
              <a href="/inbox" title={i18n.t("unread_messages", {
                      count: this.state.unreadInboxCount,
                      formattedCount: numToSI(this.state.unreadInboxCount),
                    })}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
              
                    {this.state.unreadInboxCount > 0 && (
                      <span id="notif">
                        {numToSI(this.state.unreadInboxCount)}
                      </span>
                    )}
              </a>
            </span>

            </>
          )}



{/* notifications if logged   ================ 
          {this.state.isLoggedIn && (
            <>
                  <NavLink
                    to="/inbox"
                    className="p-1 navbar-toggler nav-link border-0"
                    id="dabell"
                    onMouseUp={linkEvent(this, this.handleHideExpandNavbar)}
                    title={i18n.t("unread_messages", {
                      count: this.state.unreadInboxCount,
                      formattedCount: numToSI(this.state.unreadInboxCount),
                    })}
                  >
                    <Icon icon="bell" />
                    {this.state.unreadInboxCount > 0 && (
                      <span class="mx-1 badge badge-light">
                        {numToSI(this.state.unreadInboxCount)}
                      </span>
                    )}
                  </NavLink>
            </>
          )}

*/}
 
  <div id="topastro" onClick={boostmenu}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-astronaut" class="svg-inline--fa fa-user-astronaut fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg> - Boost Menu <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" class="svg-inline--fa fa-sort fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
  </div><br />
    <div id="bm-wrap" style="display: none;">

      <div id="tito">

        <br /><a href="//biglifeboost.quest/c/enlightenment/"><span id="boosticon"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gripfire" class="svg-inline--fa fa-gripfire fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path></svg></span>ENLIGHTENMENT ></a><br />
        <a href="//biglifeboost.quest/c/champion"><span id="boosticon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mountain" class="svg-inline--fa fa-mountain fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"></path></svg></span>CHAMPION ></a><br />
        <a href="//biglifeboost.quest/wisdom/tags/relationships/"><span id="boosticon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" class="svg-inline--fa fa-user-friends fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg></span>RELATIONSHIPS ></a><br /><br />

        <div id="bothalf">
          <a href="//biglifeboost.quest/wisdom/videos/"><span id="boosticon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg></span>VIDEOS ></a><br />
          <a href="//biglifeboost.quest/"><span id="boosticon"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg></span>COMMUNITY ></a><br />
          <a href="//biglifeboost.quest/wisdom/all-boosts/"><span id="boosticon">✧</span>ALL BOOSTS ></a><br /><span id="boosticon"> </span>
          <br />
        </div>


      </div>

      <div id="darkfill">
        <span></span>
      </div>

    </div>
           


    <div id="bm-wrap2" style="display: none;">
      <div id="tito">
    <p>bigtime hotboost diamond - i mean it's HOT!!</p>
      </div>


    </div>

      <div id="deskmenu">
        <a id="dm-title" href="//biglifeboost.quest/">
          <span id="boosticon">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gripfire" class="svg-inline--fa fa-gripfire fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path></svg></span> BIG LIFE QUEST</a> 
        

        <a id="dm1" href="//biglifeboost.quest/c/enlightenment/">
          <span id="boosticon">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gripfire" class="svg-inline--fa fa-gripfire fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path></svg></span> ENLIGHTENMENT</a> 
        <a id="dm1" href="//biglifeboost.quest/c/champion/">
          <span id="boosticon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mountain" class="svg-inline--fa fa-mountain fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"></path></svg></span> CHAMPION</a> 
        <a id="dm1" href="//biglifeboost.quest/wisdom/tags/relationships/">
          <span id="boosticon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" class="svg-inline--fa fa-user-friends fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg></span> RELATIONSHIPS</a>
        <span id="dm1">-</span>    

        <a id="dm1" href="//biglifeboost.quest/wisdom/videos/">
          <span id="boosticon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg></span> Videos</a> 
        <a id="dm1" href="//biglifeboost.quest/wisdom/all-boosts/">✧ Wiz </a> 
        <a id="dm1" href="//biglifeboost.quest/">
          <span id="boosticon">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg></span> </a>

{/*    settings ================ */}
        <a id="dm1" href="/settings" title="settings"> <Icon icon="settings" /></a>

{/* nav experiment    ================ */}

                  <NavLink
                    to="/admin"
                    className="was-nav-link"
                    onMouseUp={linkEvent(this, this.handleHideExpandNavbar)}
                    title={i18n.t("admin_settings")}
                  >
                    <Icon icon="settings" />
                  </NavLink>



{/* admin settings  ================
              {this.canAdmin && (
    <a id="dm1" href="/admin" title="admin_settings"> <Icon icon="settings" /></a> 
              )}
*/}
              















    {/* search   ================ */} 
          <span>  
            {!this.context.router.history.location.pathname.match(
              /^\/search/
            ) && (
              <form
                class="form-inline mr-2"
                onSubmit={linkEvent(this, this.handleSearchSubmit)}
              >
                <input
                  id="search-input"
                  class={`form-control mr-0 search-input ${
                    this.state.toggleSearch ? "show-input" : "hide-input"
                  }`}
                  onInput={linkEvent(this, this.handleSearchParam)}
                  value={this.state.searchParam}
                  ref={this.searchTextField}
                  type="text"
                  placeholder={i18n.t("search")}
                  onBlur={linkEvent(this, this.handleSearchBlur)}
                ></input>
                <label class="sr-only" htmlFor="search-input">
                  {i18n.t("search")}
                </label>
                <button
                  name="search-btn"
                  onClick={linkEvent(this, this.handleSearchBtn)}
                  class="px-1 btn btn-link"
                  style="color: var(--gray)"
                  aria-label={i18n.t("search")}
                >
                  <Icon icon="search" />
                </button>
              </form>
            )}
          </span>  

    {/* admin settings   ================  
          <span>
              {this.canAdmin && (
                  <NavLink
                    to="/admin"
                    className="nav-link"
                    onMouseUp={linkEvent(this, this.handleHideExpandNavbar)}
                    title={i18n.t("admin_settings")}
                  >
                    <Icon icon="settings" />
                  </NavLink>
              )}
          </span>    
*/}

      </div>
</div>



{/* OG NAVBAR GOES HERE from <nav> to <nav>   ================ */}


{/* wrapper div   ================ */} 
</div>       
    );
  }




// STATES AND PERMISSIONS =========

  handleToggleExpandNavbar(i: Navbar) {
    i.state.expanded = !i.state.expanded;
    i.setState(i.state);
  }

  handleHideExpandNavbar(i: Navbar) {
    i.setState({ expanded: false, showDropdown: false });
  }

  handleSearchParam(i: Navbar, event: any) {
    i.state.searchParam = event.target.value;
    i.setState(i.state);
  }

  handleSearchSubmit(i: Navbar, event: any) {
    event.preventDefault();
    i.updateUrl();
  }

  handleSearchBtn(i: Navbar, event: any) {
    event.preventDefault();
    i.setState({ toggleSearch: true });

    i.searchTextField.current.focus();
    const offsetWidth = i.searchTextField.current.offsetWidth;
    if (i.state.searchParam && offsetWidth > 100) {
      i.updateUrl();
    }
  }

  handleSearchBlur(i: Navbar, event: any) {
    if (!(event.relatedTarget && event.relatedTarget.name !== "search-btn")) {
      i.state.toggleSearch = false;
      i.setState(i.state);
    }
  }

  handleLogoutClick(i: Navbar) {
    i.setState({ showDropdown: false, expanded: false });
    UserService.Instance.logout();
    window.location.href = "/";
    location.reload();
  }

  handleToggleDropdown(i: Navbar) {
    i.state.showDropdown = !i.state.showDropdown;
    i.setState(i.state);
  }

  parseMessage(msg: any) {
    let op = wsUserOp(msg);
    console.log(msg);
    if (msg.error) {
      if (msg.error == "not_logged_in") {
        UserService.Instance.logout();
        location.reload();
      }
      return;
    } else if (msg.reconnect) {
      console.log(i18n.t("websocket_reconnected"));
      WebSocketService.Instance.send(
        wsClient.userJoin({
          auth: authField(),
        })
      );
      this.fetchUnreads();
    } else if (op == UserOperation.GetUnreadCount) {
      let data = wsJsonToRes<GetUnreadCountResponse>(msg).data;
      this.state.unreadInboxCount =
        data.replies + data.mentions + data.private_messages;
      this.setState(this.state);
      this.sendUnreadCount();
    } else if (op == UserOperation.GetReportCount) {
      let data = wsJsonToRes<GetReportCountResponse>(msg).data;
      this.state.unreadReportCount = data.post_reports + data.comment_reports;
      this.setState(this.state);
      this.sendReportUnread();
    } else if (op == UserOperation.GetUnreadRegistrationApplicationCount) {
      let data =
        wsJsonToRes<GetUnreadRegistrationApplicationCountResponse>(msg).data;
      this.state.unreadApplicationCount = data.registration_applications;
      this.setState(this.state);
      this.sendApplicationUnread();
    } else if (op == UserOperation.GetSite) {
      // This is only called on a successful login
      let data = wsJsonToRes<GetSiteResponse>(msg).data;
      console.log(data.my_user);
      UserService.Instance.myUserInfo = data.my_user;
      setTheme(
        UserService.Instance.myUserInfo.local_user_view.local_user.theme
      );
      i18n.changeLanguage(getLanguages()[0]);
      this.state.isLoggedIn = true;
      this.setState(this.state);
    } else if (op == UserOperation.CreateComment) {
      let data = wsJsonToRes<CommentResponse>(msg).data;

      if (this.state.isLoggedIn) {
        if (
          data.recipient_ids.includes(
            UserService.Instance.myUserInfo.local_user_view.local_user.id
          )
        ) {
          this.state.unreadInboxCount++;
          this.setState(this.state);
          this.sendUnreadCount();
          notifyComment(data.comment_view, this.context.router);
        }
      }
    } else if (op == UserOperation.CreatePrivateMessage) {
      let data = wsJsonToRes<PrivateMessageResponse>(msg).data;

      if (this.state.isLoggedIn) {
        if (
          data.private_message_view.recipient.id ==
          UserService.Instance.myUserInfo.local_user_view.person.id
        ) {
          this.state.unreadInboxCount++;
          this.setState(this.state);
          this.sendUnreadCount();
          notifyPrivateMessage(data.private_message_view, this.context.router);
        }
      }
    }
  }

  fetchUnreads() {
    console.log("Fetching inbox unreads...");

    let unreadForm: GetUnreadCount = {
      auth: authField(),
    };
    WebSocketService.Instance.send(wsClient.getUnreadCount(unreadForm));

    console.log("Fetching reports...");

    let reportCountForm: GetReportCount = {
      auth: authField(),
    };
    WebSocketService.Instance.send(wsClient.getReportCount(reportCountForm));

    if (UserService.Instance.myUserInfo?.local_user_view.person.admin) {
      console.log("Fetching applications...");

      let applicationCountForm: GetUnreadRegistrationApplicationCount = {
        auth: authField(),
      };
      WebSocketService.Instance.send(
        wsClient.getUnreadRegistrationApplicationCount(applicationCountForm)
      );
    }
  }

  get currentLocation() {
    return this.context.router.history.location.pathname;
  }

  sendUnreadCount() {
    UserService.Instance.unreadInboxCountSub.next(this.state.unreadInboxCount);
  }

  sendReportUnread() {
    UserService.Instance.unreadReportCountSub.next(
      this.state.unreadReportCount
    );
  }

  sendApplicationUnread() {
    UserService.Instance.unreadApplicationCountSub.next(
      this.state.unreadApplicationCount
    );
  }

  get canAdmin(): boolean {
    return (
      UserService.Instance.myUserInfo &&
      this.props.site_res.admins
        .map(a => a.person.id)
        .includes(UserService.Instance.myUserInfo.local_user_view.person.id)
    );
  }

  get canCreateCommunity(): boolean {
    let adminOnly =
      this.props.site_res.site_view?.site.community_creation_admin_only;
    return !adminOnly || this.canAdmin;
  }

  requestNotificationPermission() {
    if (UserService.Instance.myUserInfo) {
      document.addEventListener("DOMContentLoaded", function () {
        if (!Notification) {
          toast(i18n.t("notifications_error"), "danger");
          return;
        }

        if (Notification.permission !== "granted")
          Notification.requestPermission();
      });
    }
  }
}
