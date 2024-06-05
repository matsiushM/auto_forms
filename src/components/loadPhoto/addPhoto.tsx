import {Box, Button, CircularProgress, ImageList, ImageListItem} from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";
import {creatDirectory, getUploadUrl, publishUrl, sendFile, sendPhoto} from "../../api/photo";
import {DataItem} from "./type.ts";

interface props {
    partsId: string
    openScanner: (scanner: boolean) => void
    setMessage: (massage: string) => void
}

const AddPhoto = ({partsId, openScanner,setMessage}: props) => {
    const [selectedFile, setSelectedFile] = useState<File[]>([])
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

        sendPhoto(partsId,publishedUrls).then(res=> {setMessage(res.id_1c)}).finally(() => {
            setLoading(false)
            openScanner(true);
        });

        setSelectedFile([]);

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
                </>
            )}
        </>
    )
};

export default AddPhoto;

