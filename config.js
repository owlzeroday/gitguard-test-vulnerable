// Test config with fake credentials
const config = {
  aws_key: "AKIAIOSFODNN7FAKE9999",
  aws_secret: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYFAKE999",
  db_password: "supersecretpassword123456",
  api_token: "my-fake-api-token-1234567890abcdef",
  connection: "postgres://admin:fakepass@db.example.com:5432/mydb"
};
module.exports = config;