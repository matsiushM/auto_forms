import {DataItem} from "../../components/loadPhoto/type.ts";

const Authorization = "OAuth y0_AgAAAAA8WrUJAADLWwAAAAD_JgSYAAAEIXKzAnBNdoW4jkq0KubJvKqX9w"

export const creatDirectory = (partsId: string) => {
   return fetch(`https://cloud-api.yandex.net/v1/disk/resources?path=${partsId}`, {
        method: "PUT",
        headers: {
            'Authorization': Authorization
        }
    })
}

export const getUploadUrl = async (filename: string, directory: string) => {
    try {
        const path = encodeURIComponent(`/${directory}/${filename}`)
        const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=${path}&overwrite=true`, {
            method: "GET",
            headers: {
                'Authorization': Authorization
            },
        })
        return response.json()
    } catch (e) {
        console.error("Error when getting upload url", e)
    }
}

export const sendFile = async (url: string, file: File) => {
    const formData = new FormData()
    formData.append('file', file, file.name)

   return await fetch(url, {
        method: 'PUT',
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error("Ошибка отправки файла на диск");
        }
    })
}

export const publishUrl = async (filename: string, directory: string) => {
    const path = encodeURIComponent(`/${directory}/${filename}`)
    const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/publish?path=${path}`, {
        method: "PUT",
        headers: {
            'Authorization': Authorization
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
            'Authorization': Authorization
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error("ошибка публекаци файла")
        }
        return response.json();
    })
}

export const sendPhoto = (partsId: string, publishedUrls: DataItem[]) => {
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

   return fetch('https://auto-forms-server.onrender.com/dataPhoto', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
}

export const searchAuto = (id: string) => {
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }

    return fetch(`https://auto-forms-server.onrender.com/searchAuto?id=${id}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json();
        })
        .catch(error => console.error('Error:', error));
}