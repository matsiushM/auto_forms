import {Box, Typography, Modal} from "@mui/material";
import {useEffect, useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    borderRadius: 4,
    maxWidth: {
        xs: 150,
        sm: 300,
    }
};

interface Props  {
    massage: string,
    isOpen: boolean,
}

const ModalMessage = ({massage, isOpen}: Props) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {massage}
                </Typography>
            </Box>
        </Modal>
    )
}

export default ModalMessage;