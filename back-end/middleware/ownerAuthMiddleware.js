import jwt from "jsonwebtoken";
import Owner from "../models/owner.js"

const ownerAuthMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const owner = await Owner.findById(decoded.ownerId);
    if (!owner) {
        return res.status(401).json( { message: "Owner not found" });
    }
    req.owner = owner;
    
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default ownerAuthMiddleware;