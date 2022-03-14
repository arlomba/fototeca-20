import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const Input = styled("input")({
  display: "none",
});

export default function ButtonUpload({ register }) {
  return (
    <label htmlFor="contained-button-file">
      <Input
        {...register("uploader", { required: true })}
        name="upload"
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
      />
      <Button variant="contained" component="span">
        <AddIcon sx={{ fontSize: 600 }} />
      </Button>
    </label>
  );
}