import {useEffect, useState} from "react";
import {Html5Qrcode} from "html5-qrcode";
import AddPhoto from "./addPhoto.tsx";
import {Box} from "@mui/material";


const styles = {

    qrCodeContainerStyle: {
        position: 'relative',
        borderRadius: '7px',

        width: '80vw',
        maxWidth: '500px',
        height: 'auto',
    }
}
const LoadPhoto = () => {
    const [isEnable, setEnable] = useState(true)
    const [qrMessage, setQrMessage] = useState('')

    useEffect(() => {
        const config = {
            fps: 30,
            qrbox: 200,
        };
        const html5QrCode = new Html5Qrcode("qrCodeContainer");

        const qrScannerStop = () => {
            if (html5QrCode && html5QrCode.isScanning) {
                html5QrCode.stop()
                    .then(() => console.log("Scanner Stop"))
                    .catch(() => console.log("Scanner error"))
            }
        }

        const qrCodeSuccess = (decodedText: string) => {
            setQrMessage(decodedText);
            setEnable(false);
        }

        if (isEnable) {
            // @ts-ignore
            html5QrCode.start({facingMode: 'environment'}, config, qrCodeSuccess);
            setQrMessage("")
        } else {
            qrScannerStop()
        }

        return (() => {
            qrScannerStop()
        })
    }, [isEnable]);

    const checkStatusOpen = (scannerStatus : boolean) => {
        setEnable(scannerStatus);
    }

    return (
        <>
            <Box>
                <Box id="qrCodeContainer" sx={styles.qrCodeContainerStyle}/>
            </Box>
            {!isEnable && <AddPhoto partsId={qrMessage} openScanner={checkStatusOpen}/>}

        </>
    )
};

export default LoadPhoto;
