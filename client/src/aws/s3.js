import S3 from "react-aws-s3";

const config = {
  bucketName: "pvrentals",
  region: "us-east-2",
  accessKeyId: "AKIAQPAA2ZU65HH2FRXC",
  secretAccessKey: "D58ICLvqt93U9/k9Wc13Uyie/oYQdc5pPFhv5Y3m",
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

export const deleteFile = (filename) => {
  ReactS3Client.deleteFile(filename)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
