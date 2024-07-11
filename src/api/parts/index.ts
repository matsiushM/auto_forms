import {DescriptionParts} from "../../components/FormInput/type.ts";
import {searchPartsDate} from "../../components/ListParts/type.ts";

export const sendPrats = (autoParts: DescriptionParts) => {
     const options = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(autoParts),
     };

     return  fetch('https://auto-forms-server.onrender.com/data', options)
         .then(response => {
             if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
             }
             return response.json();
         })
         .catch(error => console.error('Error:', error));
 }


export const getPratsData = (searchData: searchPartsDate) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchData),
    };

    return  fetch('https://auto-forms-server.onrender.com/load-parts/loadParts', options)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}
