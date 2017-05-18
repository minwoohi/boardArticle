import {User} from "./user";
/**
 * Created by Admin on 2017-05-18.
 */
export class UserConstant {

  // 서버에서 데이터 읽어오면 사용자의 데이터를 넣는다.
  public static user: User = {
    _id: '',

    id: '',
    password: '',
    name: ''
  };

}
