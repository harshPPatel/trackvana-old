import { UserGenders } from '../../enums/user-gender.enum';
import { UserStub } from '../user.stub';

describe('UserStub', () => {
  const testEmail = 'test@email.com';
  describe('getStub', () => {
    it('should return stub user with provided email', () => {
      const expectedUser = {
        id: 'uuid',
        firstName: 'John',
        lastName: 'Doe',
        email: testEmail,
        password: 'hashedPassword',
        isAdmin: false,
        image: 'https://www.google.com',
        gender: UserGenders.MALE,
        isDisabled: false,
      };

      const stubUser = UserStub.getStub(testEmail);

      expect(stubUser).toEqual(expectedUser);
    });
  });
});
