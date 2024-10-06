<div className="edit-page">
<div className="input-wrapper">
  <label htmlFor="">Name</label>
  <input name="name" type="text" onChange={handleInputChange} />
</div>
<div className="input-wrapper">
  <label htmlFor="">Email</label>
  <input name="email" type="text" onChange={handleInputChange} />
</div>
<div className="input-wrapper">
  <label htmlFor="">Country</label>
  <input name="country" type="text" onChange={handleInputChange} />
</div>
<div className="input-wrapper">
  <label htmlFor="">Contact</label>
  <input name="telno" type="text" onChange={handleInputChange} />
</div>
<div className="input-wrapper">
  <label htmlFor="">Password</label>
  <input name="password" type="text" onChange={handleInputChange} />
</div>
<div className="buttons">
  <button
    type="button"
    className="btn btn-success"
    onClick={() => updateUser(newData, savedUser.id)}
  >
    Save
  </button>
  <button type="button" className="btn btn-primary">
    Back
  </button>
</div>
</div>
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
</div>