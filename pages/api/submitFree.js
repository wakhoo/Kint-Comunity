import fs from 'fs';
import path from 'path';
const password='gIcjszTA7dcpUkLs'
export function buildSubmitPath(){
    return path.join(process.cwd(),'data','freePost.json');
}
export function extractFreePost(filePath){
    const fileData= fs.readFileSync(filePath);
    const data=JSON.parse(fileData);
    return data;
}
function handler(req,res){
    if(req.method === 'POST'){
       const title= req.body.title;
       const image=req.body.image;
       const description=req.body.description;
        const tags=req.body.tags;
       const freePostData={
        id: new Date().toISOString(),
        title: title,
        image: image,
        description: description,
        tags: tags
    }

   const filePath= buildSubmitPath();
   const data=extractFreePost(filePath); 
   data.push(freePostData);
   fs.writeFileSync(filePath,JSON.stringify(data));
   res.status(201).json({message:"success!", freepost:freePostData});
    }
    else{
        const filePath=buildSubmitPath();
        const data=extractFreePost(filePath);
        res.status(200).json({freepost:arr});
    }

}
export default handler;