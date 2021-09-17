import { AppConstants } from '../../../app.constants';
import { UserGenders } from '../../enums/user-gender.enum';
import { AdminUserStub } from '../admin-user.stub';

describe('AdminUserStub', () => {
  const testEmail = 'test@email.com';
  const baseTestUser = {
    id: 'uuid',
    firstName: 'Admin',
    lastName: 'Admin',
    password: 'hashedPassword',
    isAdmin: true,
    image: 'https://www.google.com',
    gender: UserGenders.MALE,
    isDisabled: false,
  };

  describe('getStub', () => {
    it('should return stub user with default admin email', () => {
      const expectedUser = {
        ...baseTestUser,
        email: AppConstants.ADMIN_EMAIL,
      };

      const stubUser = AdminUserStub.getStub();

      expect(stubUser).toEqual(expectedUser);
    });
    it('should return stub user with provided email', () => {
      const expectedUser = {
        ...baseTestUser,
        email: testEmail,
      };

      const stubUser = AdminUserStub.getStub(testEmail);

      expect(stubUser).toEqual(expectedUser);
    });
  });
});
