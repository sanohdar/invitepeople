Number.prototype.toRadians = function() { return this * Math.PI / 180; };
const R = 6371e3;

function search_Algo (l1,lo1,des){
    try{

        this.l1 = l1;
        this.lo1 = lo1;
        this.l2 = des.latitude;
        this.lo2 = des.longitude;
    }catch(e){
        console.log(e)
        return null;
    }
}

search_Algo.prototype.findDistance = function(){

    const lat1 = this.l1.toRadians(),
        lon1 = this.lo1.toRadians(),
        lat2 = this.l2.toRadians(),
        lon2 = this.lo2.toRadians();

    const deltaL = lat2 - lat1;
    const deltaLo = lon2 - lon1;

    //haversine Theoram
    const a = Math.sin(deltaL/2) * Math.sin(deltaL/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLo/2) * Math.sin(deltaLo/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return search_Algo.prototype.metersToKm(R * c).toPrecision(5);
}

search_Algo.prototype.metersToKm = function(meter){
    return meter / 1000;
}

module.exports = search_Algo