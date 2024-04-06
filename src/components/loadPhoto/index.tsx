// import {useEffect, useState} from "react";
// import {Html5Qrcode} from "html5-qrcode";
import AddPhoto from "./addPhoto.tsx";
// import {Box, Typography} from "@mui/material";


// const styles = {
//     qrCodeContainerStyle: {
//         position: 'relative',
//         borderRadius: '7px',
//         overflow: 'hidden'
//     }
// }
const LoadPhoto = () => {
    // const [isEnable, setEnable] = useState(true)
    // const [qrMessage, setQrMessage] = useState('')

    // useEffect(() => {
    //     const config = {fps: 30, qrbox: {width: 300, height: 300}};
    //     const html5QrCode = new Html5Qrcode("qrCodeContainer");
    //
    //     const qrScannerStop = () => {
    //         if (html5QrCode && html5QrCode.isScanning) {
    //             html5QrCode.stop()
    //                 .then(() => console.log("Scanner Stop"))
    //                 .catch(() => console.log("Scanner error"))
    //         }
    //     }
    //
    //     const qrCodeSuccess = (decodedText: string) => {
    //         setQrMessage(decodedText);
    //         setEnable(false);
    //     }
    //
    //     if (isEnable) {
    //         // @ts-ignore
    //         html5QrCode.start({facingMode: 'environment'}, config, qrCodeSuccess);
    //         setQrMessage("")
    //     } else {
    //         qrScannerStop()
    //     }
    //
    //     return (() => {
    //         qrScannerStop()
    //     })
    // }, [isEnable]);

    return (
        <>
            {/*<Box>*/}
            {/*    <Box id="qrCodeContainer" sx={styles.qrCodeContainerStyle}/>*/}
            {/*</Box>*/}
            {/*{!isEnable &&  >}*/}
            <AddPhoto partsId={"parts"}/>
        </>
    )
};

export default LoadPhoto;
