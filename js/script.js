function conversorunidades (cantidad, unidadorigen, unidaddestino) {
    const conversion = {
        "distancia" : {
            'centimetros' : 1,
            'metros' : 0.01,
            'kilometros' : 0.00001
        },
            'kilometros': {
            'metros' : 1000,
            'centimetro' : 100000
        }
    } 
    if (conversion [unidadorigen] && conversion [unidadorigen][unidaddestino]) {
        return cantidad * conversion[unidadorigen][unidaddestino]
    } else {
        return "error en la conversion"
    }
}

console.log (conversorunidades (10, "kilometros", "metros"))