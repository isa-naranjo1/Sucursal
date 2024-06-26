import React, { useState, useEffect } from 'react';
import { useColor } from '../../Context/ColorContext';
import './AboutUs.css'

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
                      className={`rounded-button ${
                          contentState === button ? 'selected' : ''
                      }`}
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
                      {name === 'Sophie' && (
                          <>
                              <div className="interest-box">Digital Illustration</div>
                          </>
                      )}
                      {name === 'Kazura' && (
                          <>
                              <div className="interest-box">Video Production</div>
                          </>
                      )}
                      {name === 'Jaime' && (
                          <>
                              <div className="interest-box">2D Animation</div>
                          </>
                      )}
                      {name === 'Isabella' && (
                          <>
                              <div className="interest-box">User Experience (UX)</div>
                          </>
                      )}
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
                  {extraCredentials && (
                      <p className="credential-text">{extraCredentials}</p>
                  )}
              </div>
          )}
         <h2 className="name">{fullName}</h2>
      </div>
  </div>
);

export function AboutUs() {
  const [sophieContent, setSophieContent] = useState('ABOUT');
  const [kazuraContent, setKazuraContent] = useState('ABOUT');
  const [jaimeContent, setJaimeContent] = useState('ABOUT'); // Corrigiendo la inicialización
  const [isabellaContent, setIsabellaContent] = useState('ABOUT');
  const { setBackgroundColor } = useColor();

  useEffect(() => {
    setBackgroundColor('#E83D2E');
    return () => {
      setBackgroundColor('#FCF2E6');
    };
  }, [setBackgroundColor]);

  return (
      <div className="about-us">
          <h1 className="main-title">OUR TEAM</h1>
          <h2 className="sub-title">¿WHO ARE WE?</h2>

          <ContentSection
              name="Sophie"
              fullName="Sophie Padilla"
              contentState={sophieContent}
              setContentState={setSophieContent}
              imgSrc="https://i.ibb.co/0FBgfYY/Sophie.png"
              tags="UI • ILLUSTRATION • GRAPHIC DESIGN • 3D MODELING"
              aboutText="21-year-old Colombian designer with creative and artistic abilities, passionate about creating original, interesting, and innovative designs."
              credentials={['square-small-sophie', 'square-small-sophie']}
          />

          <ContentSection
              name="Kazura"
              fullName="Kazura Collins"
              contentState={kazuraContent}
              setContentState={setKazuraContent}
              imgSrc="https://i.ibb.co/Kb1yStS/Kazura.png"
              tags="UX • IMAGE AND VIDEO EDITING • ADVERTISING"
              aboutText="Passionate about video games, channels his creativity through the production of digital media with a clear purpose: to advocate for his ideals and promote justice."
              credentials={['square-small-kazura', 'square-small-kazura']}
          />

          <ContentSection
              name="Jaime"
              fullName="Jaime Vargas"
              contentState={jaimeContent}
              setContentState={setJaimeContent}
              imgSrc="https://i.ibb.co/TqLs3QR/Jaime.png"
              tags="UI • 2D ANIMATION • GRAPHIC DESIGN"
              aboutText="Jaime, a 23-year-old from Cali, Colombia, discovered his passion for design at a young age."
              credentials={['square-small-jaime', 'square-small-jaime']}
              extraCredentials="Universitat De Valencia, Valencia - España"
          />

          <ContentSection
              name="Isabella"
              fullName="Isabella Naranjo"
              contentState={isabellaContent}
              setContentState={setIsabellaContent}
              imgSrc="https://i.ibb.co/7bvtGcf/Isa.png"
              tags="UX • INVESTIGATION • DEVELOPMENT"
              aboutText="Seven semesters of telematics engineering, six semesters of interactive media design, and courses in user experience."
              credentials={['square-small-isabella', 'square-small-isabella']}
          />

          <div className="bottom-rectangle">
              <p className="rectangle-text">SUCURSAL • SUCURSAL • SUCURSAL • SUCURSAL • SUCURSAL • SUCURSAL • SUCURSAL</p>
          </div>
      </div>
  );
}