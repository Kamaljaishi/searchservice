const {City}=require('../models/index');
class CityRepository{
    async createCity({name}){
        try{
            const city= await City.create({name});
            return city;
        }
        catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try{
            City.destroy({
                where:{
                    id:cityId
                }
            }
            )}
            catch(error){
                console.log("something went wrong in repository layer");
                throw {error};
            }
        }
     async updateCity(data,cityId) {
        try {
            const city =await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
            
        } catch (error) {

            console.log("something went wrong in repository layer");
                throw {error};
        }

     }  
     async getCity(cityId){
        try {
            const city= await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
            
        }
     } 
    }
   
