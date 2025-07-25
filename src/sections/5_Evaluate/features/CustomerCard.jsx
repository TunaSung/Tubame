import { memo } from "react"
function CustomerCard({index, avatarUrl, name, date, hashtag=[], description, imageUrl}) {
    return (
        <section className={`evaluate__card evaluate__card--${index}`}>

            {/* Start Header */}
            <header className="evaluate__head">

                {/* Start avatar img */}
                <div className="evaluate__avatar" style={{backgroundImage: avatarUrl}}/>
                {/* End avatar img */}

                {/* Start text */}
                <div className="evaluate__text">

                    {/* Start name & date */}
                    <div className="evaluate__info">
                        <p className="evaluate__name">{name}</p>
                        <p className="evaluate__date">{date}</p>
                    </div>
                    {/* End name & date */}

                    {/* Start tags */}
                    <div className="evaluate__tags">
                        {hashtag.map((item, i) => (
                            <p key={i} className="evaluate__tag">{item}</p>
                        ))}
                    </div>
                    {/* End tags */}
                    
                </div>
                {/* End text */}

            </header>
            {/* End Header */}

            {/* Start description */}
            {description &&
                <p className="evaluate__description">
                    {description}
                </p>
            }
            {/* End description */}
            
            {/* Start image */}
            {imageUrl &&
                <div className="evaluate__image" style={{backgroundImage: imageUrl}} />
            }
            {/* End image */}
            
        </section>
    )
}

export default memo(CustomerCard)