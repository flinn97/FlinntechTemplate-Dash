import { ParentFormComponent, RunButton, UpdateButton, UploadButton, DelButton } from "../../formTech/FormComponentsInterface";
import BaseComponent from "../../templateTech/baseClasses/BaseComponent";


export default class ISRandCampaignPopup extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      defaultClass: "fit scroller",
    }
  }
  render() {
    let text = this.props.obj ? "Edit" : "Add"
    let button = <RunButton content="Save" isPopup={true} callbackFunc={this.props.callbackFunc} />
    if (this.app.state.popupSwitch.includes("update")) {

      button = <UpdateButton obj={this.propsState.currentPopupComponent} content="Update" isPopup={true} callbackFunc={this.props.callbackFunc} />
    }
    return (
      <div style={{ padding: "10px", paddingBottom: "100px", height: "65%" }} className={this.props.pageClass || this.state.defaultClass}>
        <h2>{text} {this.app.state.currentPopupComponent.getJson().text}</h2>
        Title:
        <div style={{ width: "70%", marginLeft: "7px" }}>
          <ParentFormComponent obj={this.props.obj} name="name" inPopup={true} />
        </div>
        Notes:
        <div style={{ width: "90%", backgroundColor: "white", marginLeft: "10px" }}>
          <ParentFormComponent obj={this.props.obj} type="quill" name="notes" inPopup={true} />
        </div>
        {/* Wrap update and delete buttons in a flex container */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "20px"
        }}>
          {this.app.state.popupSwitch.includes("update") && (
            <div style={{ paddingRight: "50px", paddingBottom: "20px" }}>
              <DelButton
                obj={this.app.state.currentPopupComponent}
                isPopup={true}
                content="Delete"
                callbackFunc={() => {
                  this.dispatch({ popupSwitch: "", currentPopupComponent: undefined });
                }}
              />
            </div>
          )}
          <div style={{ paddingRight: "50px", paddingBottom: "20px" }}>
            {button}
          </div>
          
        </div>



      </div>
    )
  }


}