import { getConnection } from '../database/database.js'

export const getAllCategories = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name FROM category")
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            return res.status(200).json( result);
        });    
    } catch (error) {
        return  res.status(500).json(error).message  
    }
}

