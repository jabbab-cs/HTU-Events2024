const user = {
  id: 1,
  firstName: "Osama",
  lastName: "Khalil",
  email: "osama.khalil@example.com",
  role: "Student",
  avatarUrl: "/images/user-avatar.jpg",
  joinedDate: "2023-09-01",
};

exports.getUser = (req, res) => {
  res.json(user);
};
