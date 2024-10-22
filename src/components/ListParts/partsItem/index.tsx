import {ListItem, ListItemText} from "@mui/material";
import {ListPartData} from "../type.ts";
import {green, yellow} from "@mui/material/colors";

interface props {
    parts: ListPartData;
}

const PartsItemIn1c = ({parts}: props) => {
    const foto = JSON.parse(parts.foto)

    return (
        <ListItem sx={{backgroundColor: foto? '#a5d6a7' : '#fff59d'}}
                  key={parts.ID}
        >
            <ListItemText>{parts.Name}</ListItemText>
        </ListItem>
    )
}

export default PartsItemIn1c;
