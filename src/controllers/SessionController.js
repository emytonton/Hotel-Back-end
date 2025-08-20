import User from '../models/User'
import * as Yup from 'yup'
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

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Falha na validação'});
        }

        const {email} = req.body;

        let user = await User.findOne({email});
        
        if(!user){
         user =  await User.create({email})
        }

        
        return res.json(user);
    }
}

export default new SessionController;