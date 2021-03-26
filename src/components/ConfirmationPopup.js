import style from '../css/ConfirmationPopup.module.css';

function ConfirmationPopup() {
    return (
        <div className={style.popupContainer}>
            <p className={style.confirmationText}>You are now registered!</p>
        </div>
    )
}

export default ConfirmationPopup;