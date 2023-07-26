/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 15:26:16
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:26:21
 * @FilePath: \pms-pcd:\studio\ai-assist-platform-learning\front-end\src\types\api.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** 所有 api 接口的响应数据都应该准守该格式 */
interface ApiResponseData<T> {
    code: number
    data: T
    message: string
}