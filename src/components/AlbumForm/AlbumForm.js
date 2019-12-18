import React from "react";
import "./albumform.css";
import { Field, reduxForm } from "redux-form";
import BottomButton from "../BottomButton/BottomButton";
import createAlbum from "../../actionCreators/createAlbum";
import { connect } from "react-redux";
class AlbumForm extends React.Component {
  imageRef = React.createRef();
  labelRef = React.createRef();
  renderFileInput = () => {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div className="custom-file">
          <input
            name="cover"
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            ref={this.imageRef}
            onChange={e =>
              (this.labelRef.current.innerText = e.target.files[0].name)
            }
          />
          <label
            ref={this.labelRef}
            className="custom-file-label"
            htmlFor="inputGroupFile01"
          >
            album cover
          </label>
        </div>
      </div>
    );
  };
  renderInput = props => {
    return (
      <div className="form-group">
        <label className="my-label">{props.label}</label>
        <input
          {...props.input}
          className="form-control form-input"
          type="text"
        />
      </div>
    );
  };
  onFormSubmit = formInputs => {
    const file = this.imageRef.current.files[0];
    let formData = new FormData();
    formData.append("cover", file);
    formData.append("title", formInputs.title);
    formData.append("artist", formInputs.artist);
    this.props.createAlbum(formData);
  };
  render() {
    return (
      <div className="hold-form container-fluid">
        <div className="row">
          <form
            onSubmit={this.props.handleSubmit(this.onFormSubmit)}
            className="col-xs-4 col-sm-8 col-md-6 col-lg-5 col-xl-3 album-form m-auto"
          >
            <Field
              name="title"
              label="Album title"
              component={this.renderInput}
            />
            <Field name="artist" label="Artist" component={this.renderInput} />
            {this.renderFileInput()}
            <div className="bottom-button-holder">
              <BottomButton actionText="create album" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default connect(null, { createAlbum })(
  reduxForm({
    form: "albumForm"
  })(AlbumForm)
);
