import { format} from "date-fns";

export const useFormattedDate = (str, outputFormat = "yyyy-mm-dd hh:mm:ss") => {
  const result = format(new Date(str), outputFormat);
    if (str) {
        return result;
    }

    return 'Unknown';
};
