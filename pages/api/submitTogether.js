import fs from 'fs';
import path from 'path';

export function buildSubmitPath(){
    return path.join(process.cwd(),'data','togetherPost.json');
}
export function extractTogetherPost(filePath){
    const fileData= fs.readFileSync(filePath);
    const data=JSON.parse(fileData);
    return data;
}
function handler(req,res){
    if(req.method === 'POST'){
       const title= req.body.title;
       const image=req.body.image;
       const blueprint=req.body.blueprint;
       const description=req.body.description;
        const tags=req.body.tags;
       const togetherPostData={
        id: new Date().toISOString(),
        title: title,
        image: image,
        description: description,
        blueprint: blueprint,
        tags: tags
    }

   const filePath= buildSubmitPath();
   const data=extractTogetherPost(filePath); 
   data.push(togetherPostData);
   fs.writeFileSync(filePath,JSON.stringify(data));
   res.status(201).json({message:"success!", togetherpost:togetherPostData});
    }
    else{
        const filePath=buildSubmitPath();
        const data=extractTogetherPost(filePath);
        res.status(200).json({togetherpost:arr});
    }

}
export default handler;