import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";

interface Props {
    value: string,
}

const AutoCard = ({value}: Props) => {
    return (
        <TableContainer sx={{width: '300px', m: 2}} component={Paper}>
            <Table aria-label="customized table">
                <TableBody>
                    <TableRow>
                        <TableCell>Описания запчасти: {value}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AutoCard;