import {ChangeEvent, useEffect, useState} from "react";
import {Html5Qrcode} from "html5-qrcode";
import AddPhoto from "./addPhoto.tsx";
import {Box, Button, CircularProgress, TextField} from "@mui/material";
import AutoCard from "./AutoCard.tsx";
import {BarcodeFormat} from "@zxing/library";
import {searchAuto} from "../../api/photo";
import ModalMessage from "../ModalMessage.tsx";

const styles = {
    backgroundStyle: {
        display: "flex",
        flexDirection: "column",
        width: {
            xs: 350,
            sm: 600,
        },
    },
    laudeder: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}
const LoadPhoto = () => {
    const [isEnable, setEnable] = useState(true)
    const [idParts, setIdParts] = useState('')
    const [autoInfo, setAutoInfo] = useState("")
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("")

    useEffect(() => {
        const config = {
            fps: 60,
            qrbox: {width: 300, height: 200},
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIdParts(event.target.value.trim());
    }

    const handleClick = async () => {
        try {
            setLoading(true)
            const data = await searchAuto(idParts);
            setAutoInfo(data.id_1c);
            setEnable(false);
        } catch (error) {
            console.error("Error searching auto", error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <Box sx={styles.backgroundStyle}>
            <ModalMessage massage={responseMessage} isOpen={!!responseMessage}/>
            {loading ? (<CircularProgress sx={styles.laudeder}/>) : (
                <>
                    <Box>
                        <Box id="qrCodeContainer"/>
                    </Box>
                    {isEnable ? (
                        <>
                            <TextField
                                id="outlined-basic"
                                onChange={handleChange}
                                label={"Номер"}
                                variant="outlined"
                                value={idParts}
                                sx={{m: 1}}
                            />
                            <Button variant="contained" sx={{m: 1}} onClick={handleClick}>Поиск</Button>
                        </>
                    ) : (
                        <>
                            <AutoCard value={autoInfo}/>
                            <AddPhoto partsId={idParts} openScanner={checkStatusOpen} setMessage={setResponseMessage}/>
                        </>
                    )}
                </>
            )}
        </Box>
    )
}
export default LoadPhoto;
