import { User } from "../db";
let jwt = require("jsonwebtoken");
import { jwt_secret_key } from '../db/config'
import * as crypto from 'crypto';
import { utils } from "../utils";

export const controllers = { 
    

    find_user: async(req: any, res: any) => {
        try{
            const test = await User.findAll()
            console.log(test)
            res.json(
                {
                    status: 1,
                    data: test
            });
        }catch(err){
            utils.error_process(req, res, 1000, err)
        }
    },

    login: async(req: any, res: any) => {
        const data = req.body;
        data.user_pw = crypto.createHash('sha256').update(data.user_pw).digest('base64');

        const user: any = await User.findOne({
            where: {
                user_id: data.user_id,
            }
        })
        try{
            if(!user){
                throw "회원정보 없음! 가입을 해주세요 😶"
            } else {
                if(data.user_pw != user.user_pw){
                    throw '비밀번호가 일치하지 않습니다!'
                }
            }
    
            let token = jwt.sign({
                user_id: user.user_id
                },
                jwt_secret_key , 
            )

            res.cookie("user", token);
            res.json({
                status: 1,
                data: {
                    token
                },
            })  

        }catch(err){
            utils.error_process(req, res, 1001, err)
        }
    },

    sign_up: async(req: any, res: any) => {
        try{
            const data = req.body;
            data.user_pw = crypto.createHash('sha256').update(data.user_pw).digest('base64');
    
            let create_user = await User.create(
                {
                    user_id: data.user_id,
                    user_pw: data.user_pw,
                    user_name: data.user_name,
                    user_email: data.user_email
                }
            )
    
            if(!create_user){
                throw "유저 생성 할 수 없음 ㅠㅠ"
            }
            
            res.json({
                status: 1,
                data: {
                    create_user
                }
            })
        }catch(err){
            utils.error_process(req, res, 1002, err)
        }
    }


}
