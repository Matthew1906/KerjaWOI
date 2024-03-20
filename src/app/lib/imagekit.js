import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLICKEY,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint : process.env.IMAGEKIT_URL,
});

export const uploadImage = (file, filename, folder) => 
    imagekit.upload({
        file : file,
        fileName : filename,
        useUniqueFileName: false,
        folder: `/kerjawoi/${folder}/`
    }).then(res=>({imageId:res.fileId, image:res.url}))
    .catch(err=>{console.log(err);console.log(filename)});