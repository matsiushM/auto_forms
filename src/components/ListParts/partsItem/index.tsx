import {ListItem, ListItemText} from "@mui/material";
import {ListPartData} from "../type.ts";
import {green, yellow} from "@mui/material/colors";

interface props {
    parts: ListPartData;
}

const PartsItemIn1c = ({parts}: props) => {
    const foto = JSON.parse(parts.foto)

    return (
        <ListItem sx={{backgroundColor: foto? green[200] : yellow[200]}}
                  key={parts.ID}
        >
            <ListItemText>{parts.Name}</ListItemText>
        </ListItem>
    )
}

export default PartsItemIn1c;
