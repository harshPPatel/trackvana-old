## Auth

- [ ] Admin User

  - [x] Add Email Service (seperate domain, works via events only?)
    - [ ] Tests
    - [ ] Update app service test to check if the email service was called? or event service?
  - [ ] Add dicebear service
    - [ ] Create utility class which wraps this third party library
    - [ ] Service calls this utility
    - [ ] Write tests
    - [ ] Update app service tests to test if image is valid svg???

- [ ] User

  - [ ] use https://avatars.dicebear.com/docs/installation package to create avatar for the user
  - [ ] Login with Access and Refresh Token System
  - [ ] Send email when account is created
  - [ ] Reset Password
  - [ ] Log Out (remove access token from the system somewhere)

- [ ] Add different middlewares (check ddd-forum for this)
- [ ] admin can enable/disable the user

  - [ ] On enable, create random password and send email with proper instructions

- [ ] Regex for Password:
  - [ ] https://dev.to/petroskoulianos/3-password-regex-for-your-next-project-53fn
  - [ ] Make note for this ^

```
 /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
```

## Track

- TV Shows
- Movies
- Anime
- Documentries
- YouTube Shows
- Podcasts
- Books?
