import {Box, Button, ImageList, ImageListItem} from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";
import {creatDirectory, getUploadUrl, publishUrl, sendFile, sendPhoto} from "../../api/photo";

interface props {
    partsId: string
    openScanner: (scanner: boolean) => void
}

const AddPhoto = ({partsId, openScanner}: props) => {
    const [selectedFile, setSelectedFile] = useState<File[]>([])

    console.log(partsId)

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

        const publishedUrls: string[] = [];

        for (const data of selectedFile) {
            const fileName = data.name.split('.')[0];
            const uploadUrlResponse = await getUploadUrl(fileName, partsId);
            await sendFile(uploadUrlResponse.href, data);
            const publishedUrl = await publishUrl(fileName, partsId);
            publishedUrls.push(publishedUrl.public_url);
        }

        sendPhoto(partsId,publishedUrls);

        setSelectedFile([]);
        openScanner(true);
    }

    return (
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
    )
};

export default AddPhoto;

