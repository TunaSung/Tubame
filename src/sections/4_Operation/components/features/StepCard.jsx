function StepCard({step, icon, label}) {
    return (
        <div className="operation__step-card">

            {/* Start icon */}
            <div className="operation__icon-wrapper">
                {icon}
            </div>
            {/* End icon */}

            {/* Start label */}
            <h3 className="operation__label operation__label--mobile">{step}.{label}</h3>
            <h3 className="operation__label operation__label--desktop">{label}</h3>
            {/* End label */}

        </div>
    )
}

export default StepCard