import  config  from './../config.js'
import  {getConnection}  from './../database/database.js'

export const getAllProducts = async (req, res, next) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query( 'SELECT name, url_image, price, discount category FROM product')
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
          });
        return res.status(200).json(result)
    } catch (error) {
        return  res.status(500).json(error).message  
    }
}

export const getProductByIdCategory = async (req, res, next) =>{

   const categoriaId = req.params.id

    try {
        const connection = await getConnection();   
        const result = await connection.query( `SELECT
        name, url_image, price, 
        discount, category FROM 
        product 
        WHERE product.category = ${categoriaId}` );
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;;
        });
         return res.status(200).json(result);     
    } catch (error) {
        console.log(error.message)
        return res.json(error.message)
    }
}

export const getProductByName = async (req, res) => {
    const name = req.params.name;
    try {
        const connection = await getConnection();   
        const result = await connection.query( `SELECT
        name, url_image, price, 
        discount, category FROM 
        product 
        WHERE product.name LIKE  '%${name}%'`);
        console.log(result)
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });
        
         return res.status(200).json(result); 
    
    } catch (error) {
        console.log(error.message)
        return res.json(error.message)
    }
}

