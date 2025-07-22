function ServiceCard({subtitle, image='', description, note=''}) {
    return(
        <>
            {/* start mobile layout */}
            <div className="service__card service__card--mobile">
                <h2 className="service__subtitle">{subtitle}</h2>
                <div className="service__content service__content--grid">
                    <div className="service__image" style={{backgroundImage: image}}/>
                    <div className="service__text">
                        <p className="service__description">{description}</p>
                        <p className="service__note">{note}</p>
                    </div>
                </div>
            </div>
            {/* end mobile layout */}

            {/* start desktop layout */}
            <div className="service__card service__card--desktop">
                <div className="service__content service__content--grid">
                    <div className="service__image">
                        <h2 className="service__subtitle">{subtitle}</h2>
                    </div>
                    <div className="service__text">
                        <p className="service__description">{description}</p>
                        <p className="service__note">{note}</p>
                    </div>
                </div>
            </div>
            {/* end desktop layout */}
        </>
        
    )
}

export default ServiceCard