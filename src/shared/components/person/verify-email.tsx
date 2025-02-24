import { None } from "@sniptt/monads/build";
import { Component } from "inferno";
import {
  GetSiteResponse,
  UserOperation,
  VerifyEmail as VerifyEmailForm,
  VerifyEmailResponse,
  wsJsonToRes,
  wsUserOp,
} from "lemmy-js-client";
import { Subscription } from "rxjs";
import { i18n } from "../../i18next";
import { WebSocketService } from "../../services";
import {
  isBrowser,
  setIsoData,
  toast,
  wsClient,
  wsSubscribe,
} from "../../utils";
import { HtmlTags } from "../common/html-tags";

interface State {
  verifyEmailForm: VerifyEmailForm;
  siteRes: GetSiteResponse;
}

export class VerifyEmail extends Component<any, State> {
  private isoData = setIsoData(this.context);
  private subscription: Subscription;

  emptyState: State = {
    verifyEmailForm: new VerifyEmailForm({
      token: this.props.match.params.token,
    }),
    siteRes: this.isoData.site_res,
  };

  constructor(props: any, context: any) {
    super(props, context);

    this.state = this.emptyState;

    this.parseMessage = this.parseMessage.bind(this);
    this.subscription = wsSubscribe(this.parseMessage);
  }

  componentDidMount() {
    WebSocketService.Instance.send(
      wsClient.verifyEmail(this.state.verifyEmailForm)
    );
  }

  componentWillUnmount() {
    if (isBrowser()) {
      this.subscription.unsubscribe();
    }
  }

  get documentTitle(): string {
    return this.state.siteRes.site_view.match({
      some: siteView => `${i18n.t("verify_email")} - ${siteView.site.name}`,
      none: "",
    });
  }

  render() {
    return (
      <div className="container">
        <HtmlTags
          title={this.documentTitle}
          path={this.context.router.route.match.url}
          description={None}
          image={None}
        />
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3 mb-4">
            <h5>{i18n.t("verify_email")}</h5>
          </div>
        </div>
      </div>
    );
  }

  parseMessage(msg: any) {
    let op = wsUserOp(msg);
    console.log(msg);
    if (msg.error) {
      toast(i18n.t(msg.error), "danger");
      this.setState(this.state);
      this.props.history.push("/");
      return;
    } else if (op == UserOperation.VerifyEmail) {
      let data = wsJsonToRes<VerifyEmailResponse>(msg, VerifyEmailResponse);
      if (data) {
        toast(i18n.t("email_verified"));
        this.setState(this.emptyState);
        this.props.history.push("/login");
      }
    }
  }
}
