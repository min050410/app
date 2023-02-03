import config from "@/config";
import { S3File } from "@/types/file.interface";

export const getFileDownloadUrl = (file: S3File) => {
  return `${config.baseURL}/api/file/download/${file.fileUid}`;
};

export default {};
