import { User } from '../utils/UtilitiesForAuthentication';

export interface CredentialsData {
  users: User[];
}

export const credentials: CredentialsData = {
  "users": [
    {
      "username": "johnDoe",
      "password": "PassworD@123"
    },
    {
      "username": "janeSmith",
      "password": "Secure!456"
    },
    {
      "username": "mikeBrown",
      "password": "Test#7890"
    }
  ]
};