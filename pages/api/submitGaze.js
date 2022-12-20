import fs from 'fs';
import path from 'path';

export function buildSubmitPath(){
    return path.join(process.cwd(),'data','gazePost.json');
}
export function extractGazePost(filePath){
    const fileData= fs.readFileSync(filePath);
    const data=JSON.parse(fileData);
    return data;
}
function handler(req,res){
    if(req.method === 'POST'){
       const t_name= req.body.t_name;
       const image=req.body.image;
       const description=req.body.description;
       const row = req.body.row;
       const col = req.body.col;
       const niddle_s = req.body.niddle_s;
       const gazePostData={
        id: new Date().toISOString(),
        t_name: t_name,
        image: image,
        description: description,
        row:row,
        col:col,
        niddle_s:niddle_s
    }

   const filePath= buildSubmitPath();
   const data=extractGazePost(filePath); 
   data.push(gazePostData);
   fs.writeFileSync(filePath,JSON.stringify(data));
   res.status(201).json({message:"success!", gazepost:gazePostData});
    }
    else{
        const filePath=buildSubmitPath();
        const data=extractGazePost(filePath);
        res.status(200).json({gazepost:arr});
    }

}
export default handler;