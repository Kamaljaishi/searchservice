const {CityRepository}=require('../repository/index');
class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }
   
    async createCity(data) {
        try {
          const city=await this.CityRepository.createCity(data);  
           return city; 
        } catch (error) {
            console.log("Error in service layer");
        }

    }
    async deleteCity(cityId){
        try {
        const city=await this.CityRepository.deleteCity(cityId);
        return city;
            
        } catch (error) {
            console.log("Error in service layer");
            
        }

    }
    async updateCity(data,cityId){
        try {
            const city=await this.CityRepository.updateCity(data,cityId);
            return city;
        } catch (error) {
            console.log("Error in service layers");
            
        }

    }
    async getCity(){
        try {
            const city=await this.CityRepository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("Error in service layer");
            
        }

    }
    async getAll(filter){
        try{
            const city=await this.CityRepository.getAll({name:filter.name});
            return city;
        }
        catch(error){
            console.log("Error in service layer");

        }
    }
}
module.exports = CityService;