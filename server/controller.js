module.exports={
    getHouses: (req, res)=>{
        req.app.get('db').getHouses()
            .then( houses => res.status(200).send(houses))
            .catch(()=>res.sendStatus(500));
    },

    addHouse: (req,res)=>{
        let {name, address, city, state, zip}= req.body
        req.app.get('db').addHouse([name, address, city, state, zip])
        .then(res.sendStatus(200))
        .catch(()=> res.sendStatus(500) )
    },

    deleteHouse: (req, res)=>{
        let {id}= req.params
        req.app.get('db').deleteHouse([id])
        .then(()=>res.status(200).send())
    }
}