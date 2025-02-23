import "../assets/HoverCard.css"
import changeToCrazy from "../changeToCrazy";
const HoverCard = ({text, glowColour="bluish", footerText, backgroundImageUrl, cardHeading} : {glowColour : string, cardHeading:string,text : string,backgroundImageUrl:string, footerText : string}) => {
  return (
    <> 
<div className="card">
  <div className="content">
    <div className={`back ${glowColour}`}>
      <div className="back-content">
        <strong className="font-[Rajdhani] text-2xl">{text}</strong>
      </div>
    </div>
    <div className="front">
      
      <div className="img" style={{backgroundImage:`url(${backgroundImageUrl})`}}>
      </div>

      <div className="front-content">
        <strong className="badge text-center">{changeToCrazy(text)}</strong>
        <div className="description">
          <div className="title">
            <p className="title">
              <strong>{cardHeading}</strong>
            </p>
          </div>
          <p className="card-footer">
            {footerText}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default HoverCard;