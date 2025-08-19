import User from '../models/User'
//metodos: index, show, update, store, destroy

/* 
index: listagem de sessoes
store: criar uma sessao
show: listar uma unica sessao
update: alterar alguma sessao
destroy: deleter uma sessao

*/
 class SessionController {
     async store(req,res){
        const {email} = req.body;

        let user = await User.findOne({email});
        
        if(!user){
         user =  await User.create({email})
        }

        
        return res.json(user);
    }
}

export default new SessionController;