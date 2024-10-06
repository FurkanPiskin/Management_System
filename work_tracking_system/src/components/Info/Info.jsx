import "./info.css"
/* eslint-disable react/prop-types */

export const Info = ({savedUser,onBack}) => {
  return (
    <div className="info-page">
    <div className="info-wrapper">
      <label htmlFor="">Name</label>
      <span>{savedUser.name}</span>
    </div>
    <div className="info-wrapper">
      <label htmlFor="">Email</label>
      <span>{savedUser.email}</span>
    </div>
    <div className="info-wrapper">
      <label htmlFor="">Country</label>
      <span>{savedUser.country}</span>
    </div>
    <div className="info-wrapper">
      <label htmlFor="">TelNo</label>
      <span>{savedUser.telno}</span>
    </div>
    <div className="info-wrapper">
      <label htmlFor="">Password</label>
      <span>{savedUser.password}</span>
    </div>
    <div className="info-page-back-button">
    <button type="button" className="btn btn-primary"
        onClick={onBack}
        >
          Back
        </button>
        </div>
    </div>
  )
}
