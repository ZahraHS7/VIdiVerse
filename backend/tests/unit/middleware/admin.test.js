const { mockRequest, mockResponse } = require('jest-mock-req-res');
const admin = require('../../../middleware/admin');

describe('admin middleware', () => {
  it('should return 403 if user is not admin', () => {
    const req = mockRequest({ user: { isAdmin: false } });
    const res = mockResponse();
    const next = jest.fn();

    admin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith('Access denied.');
  });
});
