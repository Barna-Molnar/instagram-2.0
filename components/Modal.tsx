import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms';

export interface ModalProps { };


const Modal: FC<ModalProps> = (props) => {
    const [open, setOpen] = useRecoilState(modalState)
    return (
        <div>
            I am a modal
            {
                open && (
                    <p>the modal is currently open !</p>
                )
            }
        </div>
    );
};

export default Modal;