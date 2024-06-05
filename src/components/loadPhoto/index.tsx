import {useEffect, useState} from "react";
import {Html5Qrcode} from "html5-qrcode";
import AddPhoto from "./addPhoto.tsx";
import {Box, Button, CircularProgress, TextField} from "@mui/material";
import AutoCard from "./AutoCard.tsx";
import {BarcodeFormat} from "@zxing/library";
import {searchAuto} from "../../api/photo";


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
    const [idParts, setIdParts] = useState('')
    const [autoInfo, setAutoInfo] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const config = {
            fps: 30,
            qrbox: {width: 350, height: 250},
            formatsToSupport: [
                BarcodeFormat.CODE_128,
                BarcodeFormat.CODE_39,
                BarcodeFormat.CODE_93,
                BarcodeFormat.EAN_8,
                BarcodeFormat.EAN_13,
                BarcodeFormat.ITF,
                BarcodeFormat.UPC_A,
                BarcodeFormat.UPC_E,
                BarcodeFormat.PDF_417,
                BarcodeFormat.AZTEC,
                BarcodeFormat.CODABAR,
                BarcodeFormat.DATA_MATRIX,
                BarcodeFormat.MAXICODE,
                BarcodeFormat.RSS_14,
                BarcodeFormat.RSS_EXPANDED,
                BarcodeFormat.UPC_EAN_EXTENSION,
            ]
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
            setIdParts(decodedText);
            setEnable(false);
        }

        if (isEnable) {
            // @ts-ignore
            html5QrCode.start({facingMode: 'environment'}, config, qrCodeSuccess);
        } else {
            qrScannerStop()
        }

        return (() => {
            qrScannerStop()
        })
    }, [isEnable]);

    const checkStatusOpen = (scannerStatus: boolean) => {
        setEnable(scannerStatus);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdParts(event.target.value.trim());
    }

    const handleClick = async () => {
        try {
            setLoading(true)
            const data = await searchAuto(idParts).finally(() => setLoading(false));
            setAutoInfo(data.id_1c);
            setEnable(false);
        } catch (error) {
            console.error("Error searching auto", error);
        }
    };

    return (
        <>
            {loading ? (<CircularProgress/>) : (
                <>
                    <Box>
                        <Box id="qrCodeContainer" sx={styles.qrCodeContainerStyle}/>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        onChange={handleChange}
                        label={"Номер"}
                        variant="outlined"
                        value={idParts}
                        sx={{m: 1}}
                    />
                    <Button variant="contained" sx={{m: 1}} onClick={handleClick}>Поиск</Button>
                    {autoInfo && (
                        <>
                            <AutoCard value={autoInfo}/>
                            <AddPhoto partsId={idParts} openScanner={checkStatusOpen}/>
                        </>
                    )}
                </>
            )
            };
        </>
    )}
    export default LoadPhoto;
