const getUsers = async (req, res) => {
  try {
    const response = [
      {
        id: 1,
        username: "Dodi",
        role: "admin",
      },
      {
        id: 2,
        username: "Dodit",
        role: "manajer",
      },
      {
        id: 3,
        username: "Dani",
        role: "cs",
      },
    ];
    res.status(200).json({ status: true, message: "", data: response });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      message: "User Added Successfully",
      data: {
        id: 1,
        username: "Dodi",
        role: "admin",
      },
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
};

module.exports = {
  getUsers,
  createUser,
};
