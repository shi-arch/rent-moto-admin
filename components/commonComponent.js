import { Input } from "@nextui-org/input";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";


export const InputBox = () => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="email" label="Email" />
        </div>

    )
}

export const SimpleBackdrop = () => {
    const {loading} = useSelector((state) => state)
    return (
      <div>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
          //onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }