import { Component } from "inferno";
import { NavLink } from "inferno-router";
import { GetSiteResponse } from "lemmy-js-client";
import { i18n } from "../../i18next";
import { docsUrl, joinLemmyUrl, repoUrl } from "../../utils";
import { VERSION } from "../../version";
import { Icon } from "../common/icon";

interface FooterProps {
  site: GetSiteResponse;
}

export class Footer2 extends Component<FooterProps, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    // HOT BOOST
    function hotboost() {
      var x = document.getElementById("bm-wrap2");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    return (
      <div class="mobile-app-icon-bar" id="myDIV">
        {/*
<button onClick = {() => redirectMe('//biglifeboost.quest/wisdom/all-boosts')}
<button onClick = {() => redirectMe('//biglifeboost.quest/wisdom/videos')}
<button onClick={hotboost} class="buttonstyle"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="gem" class="svg-inline--fa fa-gem fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"></path></svg></button>
<button onClick = {() => redirectMe('/wisdom/images')}
<button onClick = {() => redirectMe('/')}
 */}

        <a href="/wisdom/all-boosts">
          <button class="buttonstyle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="list"
              class="svg-inline--fa fa-list fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
            </svg>
          </button>
        </a>
        <a href="/wisdom/videos">
          <button class="buttonstyle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="video"
              class="svg-inline--fa fa-video fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
              ></path>
            </svg>
          </button>
        </a>
        <button onClick={hotboost} class="buttonstyle">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="gem"
            class="svg-inline--fa fa-gem fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"
            ></path>
          </svg>
        </button>
        <a href="/wisdom/images">
          <button class="buttonstyle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="film"
              class="svg-inline--fa fa-film fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"
              ></path>
            </svg>
          </button>
        </a>
        <a href="/">
          <button class="buttonstyle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="comments"
              class="svg-inline--fa fa-comments fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"
              ></path>
            </svg>
          </button>
        </a>

        {/* icon function test (works but formatting needs tweaks)
      <a href="//biglifeboost.quest/"><button class="buttonstyle"><Icon icon="comments" inline /></button></a>
*/}

        {/*
      <a href="//biglifeboost.quest/wisdom/all-boosts"><span class="buttonstyle"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" class="svg-inline--fa fa-list fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg></button></span></a>
      <a href="//biglifeboost.quest/wisdom/videos"><span class="buttonstyle"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg></button></span></a>
      <button onClick={hotboost} class="buttonstyle"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="gem" class="svg-inline--fa fa-gem fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"></path></svg></button>
      <a href="/wisdom/images"><span class="buttonstyle"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="film" class="svg-inline--fa fa-film fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg></button></span></a>
      <a href="//biglifeboost.quest/"><span class="buttonstyle"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg></button></span></a>
*/}
      </div>
    );
  }
}
