import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import theme from "../../../config/theme.ts";

interface Props {
    onChange: (date: string) => void
}

const styles = {
    m:1,
    backgroundColor: theme.palette.secondary.main,
}

const DataInput = ({onChange}: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    views={['year']}
                    sx = {styles}
                    label="Год выпуска"
                    maxDate={dayjs().subtract(0, 'day')}
                    format="YYYY"
                    onChange={(newValue) => {
                        onChange(newValue!.format("YYYY"));
                    }}
                />
        </LocalizationProvider>
    )
}
export default DataInput;