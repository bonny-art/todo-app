export const emailVerification = (path: string): string => {
	const email = `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
  }
  .header {
    background-color: #ff5f11; 
    color: #ffffff;
    padding: 10px;
    text-align: center;
  }
  .content {
    padding: 20px;
    text-align: center;
  }
  .footer {
    background-color: #ff5f11;
    color: #ffffff;
    padding: 10px;
    text-align: center;
  }
  ul {
    list-style-type: none; 
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
  .confirm-button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #ff5f11;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Activate Your Todo App Account</h1>
    </div>
    <div class="content">
      <p>We're excited to have you on board!</p>
      <p>To get started, please activate your account by clicking the button below:</p>
      <a href="${path}" class="confirm-button">Activate Account</a>
      <p>If you encounter any issues with the button, you can also activate your account using this link:</p>
      <p><a href="${path}">${path}</a></p>
    </div>
    <div class="footer">
      <p>Need help? Reach out to our support team for assistance.</p>
    </div>
  </div>
</body>
</html>
`;

	return email;
};

export const passwordRecovery = (path: string): string => {
	const email = `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
  }
  .header {
    background-color: #ff5f11; 
    color: #ffffff;
    padding: 10px;
    text-align: center;
  }
  .content {
    padding: 20px;
    text-align: center;
  }
  .footer {
    background-color: #ff5f11;
    color: #ffffff;
    padding: 10px;
    text-align: center;
  }
  ul {
    list-style-type: none; 
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
  .reset-button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #ff5f11;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>We received a request to reset the password for your account.</p>
      <p>If you did not make this request, please ignore this email.</p>
      <p>Otherwise, please click the button below to reset your password:</p>
      <a href="${path}" class="reset-button">Reset Password</a>
      <p>If the button above does not work, please copy and paste the following link into your browser:</p>
      <p><a href="${path}">${path}</a></p>
      
    </div>
    <div class="footer">
      <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
    </div>
  </div>
</body>
</html>
`;

	return email;
};
