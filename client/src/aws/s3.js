import S3 from "react-aws-s3";

const config = {
  bucketName: "pvrentals",
  region: "us-east-2",
  accessKeyId: "",
  secretAccessKey: "",
};

const ReactS3Client = new S3(config);

export const handleUpload = async (file) => {
  let newFileName = file.name.replace(/\..+$/, "");
  let dataKey;
  await ReactS3Client.uploadFile(file, newFileName).then((data) => {
    if (data.status === 204) {
      dataKey = data.key;
    } else {
      dataKey = "image error";
    }
  });
  return dataKey;
};
