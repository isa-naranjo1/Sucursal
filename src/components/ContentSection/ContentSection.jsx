import React from "react";
import "../../Screens/AboutUs/AboutUs.css";  // Ajusta la ruta para que sea correcta

const ContentSection = ({
  name,
  fullName,
  contentState,
  setContentState,
  imgSrc,
  tags,
  aboutText,
  credentials,
  extraCredentials
}) => (
  <div className={name === 'Kazura' || name === 'Isabella' ? 'content-reversed' : 'content'}>
    <div className="square">
      <img src={imgSrc} alt={name} className="image" />
    </div>
    <div className={name === 'Kazura' || name === 'Isabella' ? 'details-right' : 'details'}>
      <p className="tags">{tags}</p>
      <div className="buttons">
        {['ABOUT', 'INTEREST', 'CREDENTIALS'].map((button) => (
          <button
            key={button}
            className={`rounded-button ${contentState === button ? 'selected' : ''}`}
            onClick={() => setContentState(button)}
          >
            {button}
          </button>
        ))}
      </div>
      {contentState === 'ABOUT' && (
        <div className="blur-background">
          <p className="description">{aboutText}</p>
        </div>
      )}
      {contentState === 'INTEREST' && (
        <div className="blur-background">
          <div className="interests">
            {name === 'Sophie' && <div className="interest-box">Digital Illustration</div>}
            {name === 'Kazura' && <div className="interest-box">Video Production</div>}
            {name === 'Jaime' && <div className="interest-box">2D Animation</div>}
            {name === 'Isabella' && <div className="interest-box">User Experience (UX)</div>}
          </div>
        </div>
      )}
      {contentState === 'CREDENTIALS' && (
        <div className="blur-background">
          <div className="credentials">
            {credentials.map((square, index) => (
              <div key={index} className={square}></div>
            ))}
          </div>
          <p className="credential-text">Universidad ICESI, Cali Colombia</p>
          {extraCredentials && <p className="credential-text">{extraCredentials}</p>}
        </div>
      )}
      <h2 className="name">{fullName}</h2>
    </div>
  </div>
);

export default ContentSection