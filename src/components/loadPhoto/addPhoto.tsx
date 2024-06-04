import {Box, Button, CircularProgress, ImageList, ImageListItem} from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";
import {creatDirectory, getUploadUrl, publishUrl, sendFile, sendPhoto} from "../../api/photo";
import {DataItem} from "./type.ts";
import ModalMessage from "../ModalMessage.tsx";

interface props {
    partsId: string
    openScanner: (scanner: boolean) => void
}

const AddPhoto = ({partsId, openScanner}: props) => {
    const [selectedFile, setSelectedFile] = useState<File[]>([])
    const [responseMessage, setResponseMessage] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        creatDirectory(partsId);
    }, []);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return
        }
        const files = Array.from(event.target.files);
        setSelectedFile((prev) => ([...prev, ...files]));
    };

    const handleClick = async () => {
        if (!selectedFile) {
            return
        }
        setLoading(true)
        const publishedUrls: DataItem[] = [];

        for (const data of selectedFile) {
            const fileName = data.name.split('.')[0];
            const uploadUrlResponse = await getUploadUrl(fileName, partsId);
            await sendFile(uploadUrlResponse.href, data);
            const publishedUrl = await publishUrl(fileName, partsId);
            publishedUrls.push({f_id: publishedUrl.public_url});
        }

        sendPhoto(partsId,publishedUrls).then(res=> {setResponseMessage(res.id_1c)}).finally(() => setLoading(false));

        setSelectedFile([]);
        openScanner(true);
    }

    return (
        <>
            {loading ? (<CircularProgress/>) : (
                <>
                    <Box>
                        <input type="file" onChange={handleFileChange} multiple accept="image/*"/>
                    </Box>
                    {selectedFile && (
                        <ImageList sx={{p: "3px"}} cols={3}>
                            {selectedFile.map((item) => (<ImageListItem key={item.name}>
                                <img src={URL.createObjectURL(item)} alt={item.name}/>
                            </ImageListItem>))}
                        </ImageList>
                    )}
                    <Button variant="contained" onClick={handleClick}>Отправить</Button>

                    <ModalMessage massage={responseMessage} isOpen={!!responseMessage}/>
                </>
            )}
        </>
    )
};

export default AddPhoto;

