import {Box, Button, ImageList, ImageListItem} from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";

interface props {
    partsId: string
    openScanner: (scanner: boolean) => void
}

const AUTHORIZATION = 'OAuth y0_AgAAAAA8WrUJAADLWwAAAAD_JgSYAAAEIXKzAnBNdoW4jkq0KubJvKqX9w'

const getUploadUrl = async (filename: string, directory: string) => {
    try {
        const path = encodeURIComponent(`/${directory}/${filename}`)
        const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=${path}&overwrite=true`, {
            method: "GET",
            headers: {
                'Authorization': AUTHORIZATION,
            },
        })
        return response.json()
    } catch (e) {
        console.error("Error when getting upload url", e)
    }
}
const sendFile = async (url: string, file: File) => {
    const formData = new FormData()
    formData.append('file', file, file.name)

    await fetch(url, {
        method: 'PUT',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error("Ошибка отправки файла на диск");
        }
    })
}
const publishUrl = async (filename: string, directory: string) => {
    const path = encodeURIComponent(`/${directory}/${filename}`)
    const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/publish?path=${path}`, {
        method: "PUT",
        headers: {
            'Authorization': AUTHORIZATION,
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error("Ошибка публикации файла")
        }
        return response.json()
    })

    return await fetch(response.href, {
        method: response.method,
        headers: {
            'Authorization': AUTHORIZATION,
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error("ошибка публекаци файла")
        }
        return response.json();
    })

}

const AddPhoto = ({partsId, openScanner}: props) => {
    const [fotoUrl, setFotoUrl] = useState<string[]>([])
    const [selectedFile, setSelectedFile] = useState<File[]>([])

    useEffect(() => {
        fetch(`https://cloud-api.yandex.net/v1/disk/resources?path=${partsId}`, {
            method: "PUT",
            headers: {
                'Authorization': AUTHORIZATION
            }
        })
    }, []);

    useEffect(() => {
        console.log(JSON.stringify(fotoUrl))
    }, [fotoUrl]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return
        }
        setSelectedFile(prevImg => [...prevImg, ...Array.from(event.target.files)]);
    };


    const handleClick = async () => {
        if (!selectedFile) {
            return
        }



        const publishedUrls = [];

        for (const data of selectedFile) {
            const fileName = data.name.split('.')[0];
            const uploadUrlResponse = await getUploadUrl(fileName, partsId);
            await sendFile(uploadUrlResponse.href, data);
            const publishedUrl = await publishUrl(fileName, partsId);
            publishedUrls.push(publishedUrl.public_url);
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    id: partsId,
                    data: publishedUrls,
                }),
        };

        fetch('https://auto-forms-server.onrender.com/dataPhoto', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

        setSelectedFile([]);
        setFotoUrl([]);
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

