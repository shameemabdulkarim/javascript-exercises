const sumAll = function(a,b) {
    let sum=0
    if ( a <0 || b<0 || typeof(a) !='number' || typeof(b) !='number'){
        return 'ERROR';
    } else if (b>a){
        for (let i=a;i<=b;i++){
            sum+=i
        }
        return sum;
    } else if(a>b) {
        for (let i=b;i<=a;i++){
            sum+=i
        }
        return sum;
    }

    }

module.exports = sumAll
