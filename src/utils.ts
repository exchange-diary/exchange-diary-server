
// 공용으로 사용할 수 있는 함수들
export const utils = { 

    async error_process(req:any, res:any,  error_code: number, error_msg: string){
        if (req) {
          const error: any = {
            error_code: error_code,
            error_msg: error_msg
          }
        
          if (res) {
            res.json({
              status: 0,
              error: error
            });
          }
        }
    }
}
