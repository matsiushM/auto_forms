import {Box, Button, ImageList, ImageListItem} from '@mui/material';
import {ChangeEvent, useEffect, useState} from "react";

interface props {
    partsId: string
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

const AddPhoto = ({partsId}: props) => {
    const [sendUrl, setSendUrl] = useState<string[]>([])
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
        if (!selectedFile || !sendUrl) {
            return;
        }

        selectedFile.forEach((data) => {
            getUploadUrl(data.name.split('.')[0], partsId).then(res => {
                setSendUrl(prevUrl => [...prevUrl, res.href]);
            });
        });
    }, [selectedFile]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return
        }
        setSelectedFile([...event.target.files])
    };

    const handleClick = () => {
        if (!selectedFile) {
            return
        }
        selectedFile.forEach((data, index) => {
            sendFile(sendUrl[index], data).then(() => {
                publishUrl(data.name.split('.')[0], partsId)
                    .then(data => {
                        setFotoUrl(prevUrl => [...prevUrl, data.public_url])
                    });
            });
        })

    }

    return (
        <>
            <Box>
                <input type="file" onChange={handleFileChange} multiple/>
            </Box>
            {fotoUrl && (
                <ImageList sx={{p: "3px"}} cols={3}>
                    {selectedFile.map((item) => (<ImageListItem key={item.name}>
                        <img src={URL.createObjectURL(item)}/>
                    </ImageListItem>))}
                </ImageList>
            )}
            <Button variant="contained" onClick={handleClick}>Отправить</Button>
        </>
    )
};

export default AddPhoto;

