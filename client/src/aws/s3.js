import S3 from "react-aws-s3";

const config = {
  bucketName: "pvrentals",
  region: "us-east-2",
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
};

const ReactS3Client = new S3(config);

export const handleUpload = async (file) => {
  let newFileName = file.name.replace(/\..+$/, "");
  console.log(config);
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

export const deleteFile = (filename) => {
  ReactS3Client.deleteFile(filename)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
