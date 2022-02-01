const fs = require('fs');

/*

products = {
    product_name: String (required),
    id: (required)
}

*/

const pathToUsers = "./src/files/products.json"

class products{
    createProduct = async (product) =>{
         //Validations
         if(!product_name||!product_id) return {status:"error", error:"missing fields"}
         try{
             if(fs.existsSync(pathToUsers)){
         
                 let data = await fs.promises.readFile(pathToUsers, 'utf-8')
                 let users = JSON.parse(data);
                 let id = products[product.length-1].id+1;
                 product.id = id;
                 product.push(user);
                 await fs.promises.writeFile(pathToUsers, JSON.stringify(product,null,2))
                 return {status:"success", message:"Product Added Succesfully!"}
                 
             }else{// El Archivo no existe
                   product.id = 1
                 await fs.promises.writeFile(pathToUsers, JSON.stringify([product],null,2))
                 return {status:"success", message:"New Product Added!"}
             }
         }catch(error){
             return {status: "error", message:error}
         }
    }
}