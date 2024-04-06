import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

interface Props {
    getValueDate: (date: string) => void
}

const styles = {
    m:1,
    backgroundColor: "#efffea"
}

const DataInput = ({getValueDate}: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    views={['year']}
                    sx = {styles}
                    label="Год выпуска"
                    maxDate={dayjs().subtract(0, 'day')}
                    format="YYYY"
                    onChange={(newValue) => {
                        // @ts-ignore
                        getValueDate(newValue.format("YYYY"));
                    }}
                />
        </LocalizationProvider>
    )
}
export default DataInput;