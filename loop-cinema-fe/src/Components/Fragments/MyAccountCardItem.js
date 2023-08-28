import '../../css/MyAccountCardItem.css'

/**
 * my account dashboard card item link
 */
const MyAccountCardItem = (props) => {
    return (
        <>
            <div className="my-account-tabs-item">
                <button className="my-account-tabs-item-button" onClick={props.navigateTo}>
                    {/* <img src={process.env.PUBLIC_URL + '/Images/' + props.img + '.png'} className="header-profile-button-icon"/> */}
                    <h4 className='my-account-tabs-item-button-title'>{props.title}</h4>
                    <span className='my-account-tabs-item-button-desc'>{props.desc}</span>
                </button>
            </div>
        </>
    )
}

export default MyAccountCardItem