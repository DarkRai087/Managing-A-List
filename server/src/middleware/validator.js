export const validateUserInput = (req, res, next) => {
  const { firstName, lastName } = req.body;
  
  const errors = [];
  
  if (!firstName) {
    errors.push('First name is required');
  }
  
  if (!lastName) {
    errors.push('Last name is required');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }
  
  next();
};