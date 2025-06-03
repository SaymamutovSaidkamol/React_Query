import type React from 'react'
import './modal.css'
import type { FC } from 'react'

interface Props {
    setisOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
    children: React.ReactNode
}

const Modal: FC<Props> = ({ isOpen, setisOpen, children }) => {

    if (!isOpen) {
        return null
    }

    const handleClose = () => {
        setisOpen(false)
    }
    return (
        <div className='modal'>
            <div className='modal__content'>
                <button onClick={handleClose} className='close-modal'>X</button>{children}</div>
        </div>
    )
}

export default Modal
