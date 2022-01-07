export const Button = ({ text, width }) => {
    return (
        <>
            <button className="button__btn" style={{width: `${width}`}}>{text}</button>
        </>
    )
}


Button.defaultProps = {
    width: '100%'
}