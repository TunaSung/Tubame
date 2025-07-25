// library
import { useMediaQuery } from "react-responsive";

function ServiceCard({ subtitle, imageUrl = "", description, note = "" }) {
  // Media query breakpoints
  const isBelow1440 = useMediaQuery({ maxWidth: 1439 });

  return (
    <>
      {
        isBelow1440 ? (

          // Start mobile layout
          <div className="service__card">
            <h2 className="service__subtitle">{subtitle}</h2>
            <div className="service__content service__content--grid">
              <div
                className="service__image"
                style={{ backgroundImage: imageUrl }}
                aria-hidden="true"
              />
              <div className="service__text">
                <p className="service__description">{description}</p>
                <p className="service__note">{note}</p>
              </div>
            </div>
          </div>
          // End mobile layout

        ) : (

          // Start desktop layout
          <div className="service__card">
            <div className="service__content service__content--grid">
              <div
                className="service__image"
                style={{ backgroundImage: imageUrl }}
                aria-hidden="true"
              >
                <h2 className="service__subtitle">{subtitle}</h2>
              </div>
              <div className="service__text">
                <p className="service__description">{description}</p>
                <p className="service__note">{note}</p>
              </div>
            </div>
          </div>
        )
        // End desktop layout
        
      }
    </>
  );
}

export default ServiceCard;
