import React from 'react';

export default class UserInput extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <div className="well">
              <h1>Guest book</h1>
            </div>
            <div className="bg-info meeting-form">
                <div className="row">
                  <div className="col-sm-4 col-md-2">
                    <b>Name:</b>
                  </div>
                  <div className="col-sm-8 col-md-10">
                    <input
                      type="text"
                      onChange={this.props.onChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-2">
                    <b>Image:</b>
                  </div>
                  <div className="col-sm-8 col-md-10">
                    <input
                      type="file"
                      id="inputFileToLoad"
                      onChange={this.props.getImgPreview}
                    />
                  <img src="" height="300" alt="Image preview..."  />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.props.onClick}
                    >
                      I am coming!
                    </button>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}
