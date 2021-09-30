import React, {useState} from 'react'
import './styles/popup.scss'

const Popup = () => {

    const [popup, setPopup] = useState(false)

    const showPopup = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }
    return (
        <div className='popup-container'>
            <div className='click'>
                <h1>Click the button and show the popup</h1>
                <button type='button' onClick={showPopup}>POPUP</button>
            </div>

            <div className='popup-card' style={{display: popup ? 'block' : 'none'}}>
                <div className='title'>
                    <h6>Theme Color</h6>
                    <span>Change Theme</span>
                </div>

                <div className='colors'>
                    <p>Font Color</p>
                    <div className='color'>
                        #444444 <div className='col1'></div>
                    </div>
                </div>

                <div className='colors'>
                    <p>Background Color</p>
                    <div className='color'>
                        #FFFFFF <div className='col2'></div>
                    </div>
                </div>
                <div className='colors'>
                    <p>Button Color</p>
                    <div className='color'>
                        #2072EF <div className='col3'></div>
                    </div>
                </div>

                <div className='colors'>
                    <p className ='p1'>Button Border Color</p>
                    <div className='color'>
                    #2072EF <div className='col4'></div>
                    </div>
                </div>
                <div className='colors'>
                    <p className='p1'>Buttons Mousover Color</p>
                    <div className='color'>
                        #0053D1 <div className='col5'></div>
                    </div>
                </div>

                <div className='buttons'>
                    <button className='button button1' type='button'>Cancel</button>
                    <button className='button button2' type='button'>Save</button>
                </div>
            </div>

            <div className='popup-backdrop' 
                style={{display: popup ? 'block' : 'none'}}
                onClick={closePopup}
            >
            </div>

        </div>
    )
}

export default Popup
