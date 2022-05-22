class RegisterController {
  async register(req, res, next) {
    res.json({ message: "Ok" });
  }
}

export default new RegisterController();
