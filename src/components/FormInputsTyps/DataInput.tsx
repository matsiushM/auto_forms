import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

interface Props {
    getValueDate: (date: string) => void
}

const DataInput = ({getValueDate}: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    sx = {{m:1}}
                    label="Год выпуска"
                    maxDate={dayjs().subtract(0, 'day')}
                    format="DD.MM.YYYY"
                    onChange={(newValue) => getValueDate(newValue.format("DD.MM.YYYY"))}
                />
        </LocalizationProvider>
    )
}
export default DataInput;