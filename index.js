const Distance = require('./lib/search_algo');
const QuickSort = require('./lib/quickSort');

class Search {

    constructor(users,range,destination){
        if(!(users instanceof Array)) return new Error('Invalid data set')

        this.users = users; // Array of users Object
        this.range = range; //in KM
        this.destination = destination; // { latitude : 12.341 , longitude: 89.788 }
        this.validUser = [];
        this.validate();
    }

    validate(){
        let tmp = []
        this.users.forEach( val => {
            try{
                val = JSON.parse(val)
            }catch (e){
            }
            let r = this.validateData(val);
            if(r)
                tmp.push(r)
        })
        this.users = tmp;
        tmp = undefined;
    }

    validateData(d){

        let lat = d['latitude'] && typeof d['latitude'] === 'string' && d['latitude'].length > 0 ? Number(d['latitude']) : null;
        let lon = d['longitude'] && typeof d['longitude'] === 'string' && d['longitude'].length > 0 ? Number(d['longitude']) : null;
        let uId = d['user_id'] && typeof d['user_id'] === 'number' ? d['user_id'] : null;
        let name = d['name'] && typeof d['name'] == 'string' ? d['name'] : null;

        if(lat && lon && uId && name){
            return {
                latitude : lat,
                longitude : lon,
                user_id : uId,
                name : name
            }
        } else{
            console.log('Invalid data encounter , Hence Skipping')
            return null;
        }
    }

    filter(){

        this.users.forEach((val) => {

            let distance = new Distance(val.latitude,val.longitude,this.destination)

            if(distance.findDistance() <= this.range){
                this.validUser.push({user_id:val.user_id,name:val.name})
            }
        })

        let finalResult = new QuickSort();

        return finalResult.qSortMain(this.validUser,0,this.validUser.length - 1,this.property);
    }
}

module.exports = Search;